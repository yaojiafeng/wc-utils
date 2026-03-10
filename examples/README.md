# Examples：主应用加载子应用 UMD 业务表单

本目录演示 **子应用业务表单 → 注册为 Web Component → 打包为 UMD → 主应用动态加载并渲染** 的架构路径。

## 目录说明

- **main-app**：主应用（Vue 3），审批页通过 `loadFormScript(url)` 动态加载 UMD，渲染 `<vue3-business-form>` / `<react-business-form>`。
- **vue3-form**：Vue 3 业务表单，入口中调用 `registerWC('vue3-business-form', ...)`，打包为 `dist/vue3-form.umd.js`。
- **react-form**：React 业务表单，入口中调用 `registerWC('react-business-form', ...)`，打包为 `dist/react-form.umd.js`。

## 调试 UMD 架构的流程

1. **构建子应用 UMD**：
   ```bash
   pnpm run build:forms
   ```

2. **启动本地表单静态服务**（单独终端，默认 http://localhost:5000，带 CORS）：
   ```bash
   pnpm run serve:forms
   ```

3. **启动 Mock API**（单独终端，端口 3002，供表单拉取审批人列表等）：
   ```bash
   pnpm run serve:mock
   ```

4. **启动主应用**（另一终端）：
   ```bash
   pnpm run dev:main-app
   ```

5. 打开审批页（如 http://localhost:4000），主应用会把 `/api/mock` 代理到 Mock API；切换「Vue 3 表单 / React 表单」即会从本地静态服务加载对应 UMD。  
   若表单服务端口非 5000，可设环境变量：`VITE_FORMS_SERVER_URL=http://localhost:端口`。

## 单独开发子应用

- `pnpm run dev:vue3-form` / `pnpm run dev:react-form`：子应用独立开发（不经过主应用加载 UMD）。
- 子应用修改后需重新执行 `pnpm run build:forms`，主应用刷新后才会看到最新 UMD 效果。
