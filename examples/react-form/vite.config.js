import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
          lib: {
            entry: './src/main.jsx',
            name: 'ReactForm',
            formats: ['umd'],
            fileName: () => 'react-form.umd.js',
          },
          rollupOptions: {
            // 自包含 UMD：React / ReactDOM / wc-utils 一并打包，主应用仅需加载此脚本即可使用 <react-business-form>
            output: {
              globals: {},
              intro: 'var process = { env: { NODE_ENV: "production" } };',
            },
          },
          cssCodeSplit: false,
        }
      : {},
}));
