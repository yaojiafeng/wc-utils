import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  define:
    mode === 'lib'
      ? { 'process.env.NODE_ENV': JSON.stringify('production') }
      : {},
  resolve:
    mode === 'lib'
      ? {
          alias: {
            '@yxst/wc-utils': path.resolve(monorepoRoot, 'packages/wc-utils/src/index.js'),
          },
        }
      : {},
  build:
    mode === 'lib'
      ? {
          // 以库模式打包，生成可供主应用动态加载的 UMD 文件
          lib: {
            entry: './src/main.js',
            name: 'Vue3Form',
            formats: ['umd'],
            fileName: () => 'vue3-form.umd.js',
          },
          rollupOptions: {
            // 自包含 UMD：Vue 与 wc-utils 一并打包，主应用仅需加载此脚本即可使用 <vue3-business-form>
            output: {
              globals: {},
              intro: 'var process = { env: { NODE_ENV: "production" } };',
            },
          },
          cssCodeSplit: false,
        }
      : {},
}));
