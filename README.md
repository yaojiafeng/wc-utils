# @yxst/wc-utils

> 流程引擎业务表单 Web Components 注册工具库

将 **Vue 3 / Vue 2 / React** 组件注册为标准 Custom Elements，让主应用（审批页）与多技术栈业务表单无缝协同。

---

## 项目结构

```
wc-utils/
├── packages/
│   └── wc-utils/          # @yxst/wc-utils 核心库
│       └── src/
│           ├── index.js           # 统一入口：registerWC / loadFormScript
│           ├── adapters/
│           │   ├── vue3.js        # Vue 3 适配器（defineCustomElement）
│           │   ├── vue2.js        # Vue 2 适配器（vue-custom-element）
│           │   └── react.js       # React 适配器（手动实现 HTMLElement 子类）
│           └── utils/
│               └── attr.js        # kebab-case ↔ camelCase 工具函数
└── examples/
    ├── main-app/          # 主应用（Vue 3 审批页）
    ├── vue3-form/         # Vue 3 业务表单示例
    └── react-form/        # React 业务表单示例
```

---

## 快速开始

### 安装

```bash
# 使用 pnpm workspaces
pnpm install
```

### 本地开发

```bash
# 启动 Mock API（另开终端）
node examples/main-app/src/mock-server.js

# 启动主应用（http://localhost:3000）
pnpm dev:main-app
```

### 构建库

```bash
pnpm build:lib
```

---

## API 文档

### `registerWC(tagName, component, framework, options?)`

将框架组件注册为自定义元素。

| 参数 | 类型 | 说明 |
|------|------|------|
| `tagName` | `string` | 自定义标签名（必须含 `-`，如 `my-form`）|
| `component` | `object \| Function` | Vue 组件对象 或 React forwardRef 组件 |
| `framework` | `'vue3' \| 'vue2' \| 'react'` | 框架类型 |
| `options.shadow` | `boolean` | 是否启用 Shadow DOM（默认 `true`）|
| `options.props` | `string[]` | 接受的 props（camelCase），默认内置通用参数 |
| `options.events` | `string[]` | 组件触发的事件名，默认 `['change', 'error']` |
| `options.React` | `object` | React 对象（react 模式必填）|
| `options.ReactDOM` | `object` | ReactDOM 对象（react 模式必填）|
| `options.Vue` | `Function` | Vue 2 构造函数（vue2 模式必填）|

**示例：**

```js
// Vue 3
import { registerWC } from '@yxst/wc-utils';
import MyForm from './MyForm.vue';
registerWC('my-form', MyForm, 'vue3');

// React
import React from 'react';
import ReactDOM from 'react-dom/client';
registerWC('my-form', MyForm, 'react', { React, ReactDOM });
```

---

### `loadFormScript(url, options?)`

动态加载业务方 UMD 脚本（含重复加载防护和超时处理）。

```js
import { loadFormScript } from '@yxst/wc-utils';

await loadFormScript('https://cdn.example.com/forms/my-form.umd.js', { timeout: 15000 });
// 此时 <my-form> 自定义元素已可用
```

---

## 接口约定

注册的自定义元素实例需支持以下调用：

| 方法 | 类型 | 说明 |
|------|------|------|
| `validate()` | `() => Promise<boolean>` | 校验表单 |
| `getData()` | `() => object` | 获取表单数据 |
| `setData(data)` | `(object) => void` | 设置表单数据（用于草稿回显）|
| `reset()` | `() => void` | 重置表单 |

可触发的自定义事件：

| 事件名 | `event.detail` | 说明 |
|--------|----------------|------|
| `change` | 当前表单数据 | 表单值变化时 |
| `error` | `{ code, message }` | 内部接口失败时 |

---

## 业务方接入指南

### Vue 3 组件

```vue
<script setup>
// 通过 defineExpose 暴露接口方法（必须）
defineExpose({ validate, getData, setData, reset });
</script>
```

### React 组件

```jsx
const MyForm = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    validate: () => Promise.resolve(true),
    getData: () => ({}),
    setData: (data) => {},
    reset: () => {},
  }));
  return <form>...</form>;
});
```

### 打包（共享运行时模式，推荐）

```js
// vite.config.js
export default {
  build: {
    lib: { entry: './src/main.js', formats: ['umd'], fileName: () => 'my-form.umd.js' },
    rollupOptions: { external: ['vue'], output: { globals: { vue: 'Vue' } } },
  },
};
```

---

## 主应用集成

```vue
<template>
  <my-form
    ref="formRef"
    :process-id="processId"
    :task-id="taskId"
    :base-api-url="baseApiUrl"
    :auth-token="authToken"
    @change="handleChange"
    @error="handleError"
  />
  <button @click="submit">通过</button>
</template>

<script setup>
const formRef = ref(null);
async function submit() {
  const ok = await formRef.value.validate();
  if (ok) console.log('提交:', formRef.value.getData());
}
</script>
```

---

## 关键设计说明

| 问题 | 解决方案 |
|------|---------|
| **跨域** | 主应用提供 `/api/proxy/business/*` 代理，业务表单使用 `baseApiUrl` 拼接路径 |
| **鉴权** | 主应用通过 `auth-token` 属性传递 token，表单组件携带至请求头 |
| **样式隔离** | 默认开启 Shadow DOM（`shadow: true`） |
| **运行时共享** | 共享模式排除框架 externals，主应用提前加载；自包含模式打包进 UMD |
| **版本冲突** | 共享模式统一版本；自包含模式建议改用 iframe 强隔离 |
| **重复注册** | `registerWC` 内部检查 `customElements.get(tagName)`，自动跳过 |
