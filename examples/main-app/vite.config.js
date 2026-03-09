import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      // 开发时直接指向源码，避免使用构建产物
      '@yxst/wc-utils': path.resolve(monorepoRoot, 'packages/wc-utils/src/index.js'),
    },
  },
  server: {
    port: 4000,
    strictPort: false,
    fs: {
      // 允许访问整个 monorepo，以便 cross-package 源码引用可以工作
      allow: [monorepoRoot],
    },
    proxy: {
      '/api/mock': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/mock/, ''),
      },
    },
  },
  optimizeDeps: {
    // 预构建时排除这些包，让 Vite 直接处理其源码
    exclude: ['@yxst/wc-utils'],
    include: ['vue', 'react', 'react-dom'],
  },
});
