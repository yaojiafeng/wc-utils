# @yxst/wc-utils

将 Vue 3 / Vue 2 / React 组件注册为标准 Web Components（Custom Elements）的工具库，适合流程引擎、审批系统、低代码平台中的「业务表单插件化接入」场景。

## 适用场景

- 主应用和业务表单技术栈不统一（例如主应用是 Vue 3，表单是 React）。
- 表单需要独立发布、按需加载（CDN/UMD）。
- 主应用需要用统一接口调用表单能力（校验、取值、回填、重置）。
- 需要通过标准 DOM 事件向外通知表单状态变化。

## 安装

```bash
npm i @yxst/wc-utils
```

按框架安装运行时（peer dependency）：

```bash
# Vue 3
npm i vue@3

# Vue 2
npm i vue@2

# React
npm i react react-dom
```

---

## 快速开始

```js
import { registerWC, loadFormScript } from '@yxst/wc-utils';

// 1) 注册本地组件（示例：Vue 3）
registerWC('my-form', MyFormComponent, 'vue3');

// 2) 动态加载远程 UMD（表单脚本内部自行调用 registerWC）
await loadFormScript('https://cdn.example.com/forms/my-form.umd.js', {
  wcTag: 'my-form',
  timeout: 15000,
});
```

---

## API

### `registerWC(tagName, component, framework, options?)`

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `tagName` | `string` | 标签名，必须含 `-`，如 `my-form` |
| `component` | `object \| Function` | Vue 组件对象 或 React forwardRef 组件 |
| `framework` | `'vue3' \| 'vue2' \| 'react'` | 框架类型（`'vue'` 等同 `'vue3'`） |
| `options.shadow` | `boolean` | 是否启用 Shadow DOM，默认 `true` |
| `options.props` | `string[]` | 对外声明的 props（camelCase）。各框架意义不同，见下文 |
| `options.events` | `string[]` | 对外声明的事件名。各框架意义不同，见下文 |
| `options.Vue` | `object` | Vue 2 构造函数（`vue2` 必传） |
| `options.React` | `object` | React 对象（`react` 必传） |
| `options.ReactDOM` | `object` | ReactDOM 对象（`react` 必传） |

### `loadFormScript(url, options?)`

动态加载远程 UMD 表单脚本。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `url` | `string` | 脚本地址 |
| `options.wcTag` | `string` | 自定义元素标签名；若已注册则跳过加载 |
| `options.timeout` | `number` | 超时毫秒，默认 `10000` |
| `options.bypassSandbox` | `boolean` | 是否绕过 qiankun 沙箱，默认 `false` |

---

## 三种框架详细指南

### 差异总览

| 特性 | Vue 3 | Vue 2 | React |
| --- | --- | --- | --- |
| `options.props` 的作用 | 仅元信息，WC 实际读组件自身 props 声明 | 仅元信息，WC 实际读组件自身 props 声明 | **必须**：决定哪些 attribute 触发响应 |
| `options.events` 的作用 | 仅元信息，组件 `emit` 自动转发所有事件 | 仅元信息，组件 `$emit` 自动转发所有事件 | **必须**：声明了才会转发为 CustomEvent |
| 传字符串 prop | `:foo="str"` 或 `foo="str"` attribute | `:foo="str"` 或 `foo="str"` attribute | 同左 |
| 传对象/函数 prop | `:foo.prop="obj"`（推荐显式），Vue 3 有时能自动推断 | **必须** `:foo.prop="obj"` | **必须** `:foo.prop="obj"` |
| 接收自定义事件（主应用侧） | `@navigate="handler"` 或 `addEventListener` | 同左 | 同左 |

---

### Vue 3

#### 1. 注册

```js
// entry.js（WC 包的入口）
import { defineAsyncComponent } from 'vue';
import { registerWC } from '@yxst/wc-utils';
import MyForm from './MyForm.vue';

registerWC('my-form', MyForm, 'vue3', {
  shadow: false,
  // props / events 仅作接口文档，不影响实际行为
  props: ['processId', 'taskId', 'routeQuery'],
  events: ['change', 'error', 'navigate'],
});
```

#### 2. 组件实现

```vue
<!-- MyForm.vue -->
<script setup>
import { ref } from 'vue';

const props = defineProps({
  processId: String,
  taskId: String,
  routeQuery: String,          // 字符串类型的 prop，通过 attribute 传递
  route: Object,               // 对象类型的 prop，需要父组件 .prop 修饰符
});

const emit = defineEmits(['change', 'error', 'navigate']);

// 接口方法（通过 defineExpose 暴露给主应用直接调用）
const formRef = ref(null);
async function validate() { return true; }
function getData() { return {}; }
function setData(data) {}
function reset() {}

defineExpose({ validate, getData, setData, reset });
</script>
```

#### 3. 主应用（Vue 3 父组件）中使用

```vue
<template>
  <!-- 字符串 prop：直接绑定 -->
  <!-- 对象 prop：必须加 .prop 修饰符，或依赖 Vue 3 自动推断 -->
  <my-form
    :process-id="processId"
    :route-query="JSON.stringify($route.query)"
    :route.prop="$route"
    @navigate="handleNavigate"
  />
</template>
```

> **原理**：Vue 3 的 `defineCustomElement` 直接从组件的 `defineProps` / `props` 选项中读取声明，
> 生成 `observedAttributes`。`options.props` 不参与此过程，仅存入 `_wcMeta` 元信息。
>
> 事件方面，Vue 3 在内部调用 `emit('navigate', data)` 时，框架自动
> `dispatchEvent(new CustomEvent('navigate', ...))`, 不需要在 `options.events` 中声明。

---

### Vue 2

#### 1. 注册

```js
// entry.js（WC 包的入口）
import Vue from 'vue';
import ElementUI from 'element-ui';
import { registerWC } from '@yxst/wc-utils';
import MyForm from './MyForm.vue';

Vue.use(ElementUI);

registerWC('my-form', MyForm, 'vue2', {
  Vue,
  shadow: false,
  // props / events 仅作接口文档，不影响实际行为
  props: ['processId', 'taskId', 'routeQuery'],
  events: ['change', 'error', 'navigate'],
});
```

#### 2. 组件实现

```vue
<!-- MyForm.vue -->
<script>
export default {
  name: 'MyForm',
  props: {
    processId: { type: String, default: '' },
    taskId:    { type: String, default: '' },
    routeQuery: { type: String, default: '' },  // 字符串，attribute 传递
    route:     { type: Object, default: () => ({}) }, // 对象，需 .prop
  },
  computed: {
    query() {
      return this.routeQuery ? JSON.parse(this.routeQuery) : {};
    },
  },
  methods: {
    handleClick() {
      this.$emit('navigate', { path: '/home' }); // 自动转发为 CustomEvent，无需声明
    },
    validate() { return Promise.resolve(true); },
    getData()  { return {}; },
    setData(d) {},
    reset()    {},
  },
};
</script>
```

#### 3. 主应用（Vue 2 父组件）中使用

```vue
<template>
  <!--
    字符串 prop：正常绑定
    对象 prop：必须加 .prop，否则会变成 "[object Object]"
  -->
  <my-form
    :process-id="processId"
    :route-query="JSON.stringify($route.query)"
    :route.prop="$route"
    @navigate="handleNavigate"
  />
</template>
```

> **原理**：`vue-custom-element` 对同步组件直接读 `component.props` 生成 `observedAttributes`，
> `options.props` 不参与此过程。事件方面，库在初始化时 patch 了 `$emit`，所有
> `this.$emit(name, ...)` 调用都会无条件触发 `dispatchEvent(new CustomEvent(name, ...))`，
> 同样不需要在 `options.events` 中声明。
>
> **为什么对象 prop 需要 `.prop`**：HTML attribute 只能传字符串。
> `:route="$route"` 会调用 `element.setAttribute('route', '[object Object]')`，
> `:route.prop="$route"` 才会调用 `element.route = $route`（JS property 赋值），
> `vue-custom-element` 的 property setter 检测到 `typeof value === 'object'` 时
> 会跳过字符串转换，直接注入 Vue 实例。

---

### React

#### 1. 注册

```js
// entry.js（WC 包的入口）
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerWC } from '@yxst/wc-utils';
import MyForm from './MyForm.jsx';

registerWC('my-form', MyForm, 'react', {
  React,
  ReactDOM,
  shadow: false,
  // ⚠️ React 适配器：props 必须声明，决定哪些 attribute 会触发响应
  props: ['processId', 'taskId', 'routeQuery', 'route'],
  // ⚠️ React 适配器：事件必须声明，才会转发为 CustomEvent
  //    'change' 和 'error' 始终包含，无需重复声明
  events: ['navigate'],
});
```

#### 2. 组件实现

```jsx
// MyForm.jsx
import React from 'react';

const MyForm = React.forwardRef((props, ref) => {
  const {
    processId,
    taskId,
    routeQuery,
    route,       // 对象类型，通过 .prop 或 property 赋值传入
    // 事件 callback（由适配器自动注入，命名规则：事件名首字母大写加 on 前缀）
    onChange,
    onError,
    onNavigate,
  } = props;

  const query = routeQuery ? JSON.parse(routeQuery) : {};

  React.useImperativeHandle(ref, () => ({
    validate: async () => true,
    getData: () => ({}),
    setData: (data) => {},
    reset: () => {},
  }));

  return (
    <div>
      <button onClick={() => onNavigate?.({ path: '/home' })}>跳转</button>
    </div>
  );
});

export default MyForm;
```

#### 3. 主应用（Vue 2/3 父组件）中使用

```vue
<template>
  <!--
    字符串 prop：正常绑定（需在 options.props 中声明）
    对象 prop：必须加 .prop（需在 options.props 中声明）
  -->
  <my-form
    :process-id="processId"
    :route-query="JSON.stringify($route.query)"
    :route.prop="$route"
    @navigate="handleNavigate"
  />
</template>
```

> **原理**：React 适配器是手写的 `HTMLElement` 子类，没有第三方库辅助推断。
>
> - **`options.props`**：决定 `static get observedAttributes()`，只有声明过的 prop
>   才会在 attribute 变化时触发 `attributeChangedCallback` → React 重渲染。
>   同时，适配器在构造函数中为每个声明的 prop 注册 property getter/setter，
>   所以 `:route.prop="$route"` 赋值的对象也能被捕获并传入 React 组件。
>
> - **`options.events`**：适配器在 `_render` 中为每个事件名生成对应的 React
>   callback prop（`onNavigate`），React 组件调用该 callback 时，适配器
>   `dispatchEvent(new CustomEvent('navigate', { detail: ... }))`。
>   未声明的事件 callback 不会被注入，React 组件调用时是 `undefined`。

---

## 接口方法约定

注册后的自定义元素统一对外暴露以下方法：

| 方法 | 签名 | 说明 |
| --- | --- | --- |
| `validate()` | `() => Promise<boolean>` | 表单校验，返回是否通过 |
| `getData()` | `() => object` | 获取当前表单数据 |
| `setData(data)` | `(data: object) => void` | 回填表单数据 |
| `reset()` | `() => void` | 重置表单 |

各框架暴露方式：

- **Vue 3**：`defineExpose({ validate, getData, setData, reset })`
- **Vue 2**：在 `methods` 中直接定义即可，适配器自动代理
- **React**：`React.forwardRef` + `useImperativeHandle`

主应用调用示例：

```js
const formEl = document.querySelector('my-form');

// 监听事件
formEl.addEventListener('change', (e) => console.log('changed:', e.detail));
formEl.addEventListener('navigate', (e) => router.push(e.detail));

// 调用接口
const ok = await formEl.validate();
if (ok) {
  const data = formEl.getData();
  await submitApi(data);
}
```

---

## 常见问题

### Q1：对象 prop 传进去是 `[object Object]` 或 `null`？

使用了 `:route="$route"` 而不是 `:route.prop="$route"`。
HTML attribute 只能传字符串，Vue 会把对象 `toString()` 成 `[object Object]`。

**解决**：对所有 `Object / Array / Function` 类型的 prop，统一加 `.prop` 修饰符：

```html
:route.prop="$route"
```

> Vue 2 开发模式下，若忘记加 `.prop`，wc-utils 会在控制台打印详细警告。

### Q2：Vue 2/3 里没有在 `options.events` 声明的事件也能触发，是 bug 吗？

不是。Vue 2/3 的事件转发机制（`$emit` → `dispatchEvent`）是无条件的，所有
`$emit` 调用都会触发对应的 `CustomEvent`，与 `options.events` 无关。
`options.events` 仅用作接口文档和 `_wcMeta` 元信息。

React 则相反：事件 callback 是由适配器主动注入到 React 组件 props 里的，
**必须在 `options.events` 中声明**才会生效。

### Q3：React 适配器如何传对象 prop？

需要两步：
1. 在 `options.props` 中声明该 prop 名（确保 property setter 被注册）
2. 父组件使用 `.prop` 修饰符传入：`:myProp.prop="someObject"`

### Q4：`options.props` 和 Vue 组件自身的 `props` 声明有何关系？

| | Vue 2/3 | React |
|---|---|---|
| WC 观察哪些 attribute | 读**组件自身** `props` 声明，`options.props` 不影响 | 读 `options.props`，组件自身没有 props 类型系统 |
| `options.props` 的用途 | 接口契约文档 / `_wcMeta` 元信息 | **控制 observedAttributes** + 注册 property setters |

### Q5：Shadow DOM 内样式如何处理？

默认 `shadow: true`，样式完全隔离。若需使用主应用的全局样式（如 Element UI），
将 `shadow: false` 关闭隔离：

```js
registerWC('my-form', MyForm, 'vue2', { Vue, shadow: false });
```

### Q6：标签名为什么必须带 `-`？

这是 Custom Elements 规范的硬性要求，浏览器据此区分原生元素和自定义元素。

### Q7：重复注册会报错吗？

不会报错，库内部检查 `customElements.get(tagName)`，已注册时跳过并打印 warning。
