# @yxst/wc-utils

将 Vue 3 / Vue 2 / React 组件注册为标准 Web Components（Custom Elements）的工具库，适合流程引擎、审批系统、低代码平台中的「业务表单插件化接入」场景。

## 适用场景

- 主应用和业务表单技术栈不统一（例如主应用是 Vue 3，表单是 React）。
- 表单需要独立发布、按需加载（CDN/UMD）。
- 主应用需要用统一接口调用表单能力（校验、取值、回填、重置）。
- 需要通过标准 DOM 事件向外通知表单状态变化。

## 特性

- `registerWC` 统一注册入口，支持 `vue3` / `vue2` / `react`。
- 内置属性映射：`kebab-case` HTML 属性 <-> `camelCase` props。
- 内置接口代理约定：`validate / getData / setData / reset`。
- 默认事件约定：`change`、`error`。
- 支持 Shadow DOM 样式隔离（默认开启）。
- `loadFormScript` 支持动态加载表单脚本，含超时与重复加载防护。

## 安装

```bash
npm i @yxst/wc-utils
```

如果你使用对应框架适配器，请确保项目内有相应运行时：

- React 方案：`react`、`react-dom`
- Vue 2 方案：`vue@2`
- Vue 3 方案：`vue@3`

## 快速开始

```js
import { registerWC, loadFormScript } from '@yxst/wc-utils';

// 1) 注册本地组件（示例：Vue 3）
registerWC('business-form', MyFormComponent, 'vue3');

// 2) 或者动态加载远程 UMD（表单脚本内部会自行 registerWC）
await loadFormScript('https://cdn.example.com/forms/business-form.umd.js', {
  timeout: 15000,
});
```

在页面中使用：

```html
<business-form
  process-id="P20260327"
  task-id="T1024"
  biz-id="B7788"
  base-api-url="/api/proxy/business"
  auth-token="Bearer xxx"
></business-form>
```

## API 文档

### `registerWC(tagName, component, framework, options?)`

统一注册自定义元素。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `tagName` | `string` | 自定义标签名，必须包含 `-`，例如 `business-form` |
| `component` | `object \| Function` | Vue 组件对象或 React 组件 |
| `framework` | `'vue3' \| 'vue' \| 'vue2' \| 'react'` | 框架类型 |
| `options.shadow` | `boolean` | 是否启用 Shadow DOM，默认 `true` |
| `options.props` | `string[]` | props 列表（camelCase） |
| `options.events` | `string[]` | 事件列表，默认 `['change', 'error']` |
| `options.Vue` | `object` | Vue 2 构造函数（`vue2` 必传） |
| `options.React` | `object` | React 对象（`react` 必传） |
| `options.ReactDOM` | `object` | ReactDOM 对象（`react` 必传） |

默认 props（可覆盖）：

```js
['processId', 'taskId', 'bizId', 'baseApiUrl', 'authToken'];
```

### `loadFormScript(url, options?)`

动态加载远程脚本（通常是业务表单 UMD 包）。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `url` | `string` | 远程脚本地址 |
| `options.timeout` | `number` | 超时毫秒，默认 `10000` |

## 使用案例

### 案例 1：Vue 3 表单注册为 Web Component

```js
import { registerWC } from '@yxst/wc-utils';
import UserInfoForm from './UserInfoForm.vue';

registerWC('user-info-form', UserInfoForm, 'vue3', {
  props: ['processId', 'taskId', 'authToken'],
});
```

`UserInfoForm.vue` 里暴露接口（示意）：

```vue
<script setup>
import { ref } from 'vue';

const model = ref({});

function validate() {
  return Promise.resolve(true);
}
function getData() {
  return model.value;
}
function setData(data) {
  model.value = data || {};
}
function reset() {
  model.value = {};
}

defineExpose({ validate, getData, setData, reset });
</script>
```

### 案例 2：React 表单注册为 Web Component

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerWC } from '@yxst/wc-utils';
import ExpenseForm from './ExpenseForm.jsx';

registerWC('expense-form', ExpenseForm, 'react', { React, ReactDOM });
```

`ExpenseForm.jsx` 里通过 `forwardRef` 暴露接口：

```jsx
import React from 'react';

const ExpenseForm = React.forwardRef((props, ref) => {
  const [data, setDataState] = React.useState({});

  React.useImperativeHandle(ref, () => ({
    validate: async () => true,
    getData: () => data,
    setData: (v) => setDataState(v || {}),
    reset: () => setDataState({}),
  }));

  return <div>...</div>;
});

export default ExpenseForm;
```

### 案例 3：主应用统一调用接口与监听事件

```js
const formEl = document.querySelector('expense-form');

formEl.addEventListener('change', (e) => {
  console.log('form changed:', e.detail);
});

formEl.addEventListener('error', (e) => {
  console.error('form error:', e.detail);
});

const ok = await formEl.validate();
if (ok) {
  const payload = formEl.getData();
  // submit payload ...
}
```

## 接口约定（建议）

注册后的自定义元素建议实现以下方法：

- `validate(): Promise<boolean>`
- `getData(): object`
- `setData(data: object): void`
- `reset(): void`

建议发出的事件：

- `change`：`event.detail` 为最新表单数据或变化片段
- `error`：`event.detail` 为错误信息对象（如 `{ code, message }`）

## 常见问题

### 1) 为什么标签名必须带 `-`？

这是 Custom Elements 规范要求，浏览器据此识别自定义元素。

### 2) 重复注册会报错吗？

库内部会检查 `customElements.get(tagName)`，已注册时会跳过并给出警告。

### 3) Vue 2 还建议使用吗？

可用，但 Vue 2 已 EOL，建议新项目使用 Vue 3。