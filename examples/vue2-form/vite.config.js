import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig(({ mode }) => ({
  plugins: [vue2()],
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
            entry: './src/main.js',
            name: 'Vue2Form',
            formats: ['umd'],
            fileName: () => 'vue2-form.umd.js',
          },
          rollupOptions: {
            output: {
              globals: {},
              intro: 'var process = { env: { NODE_ENV: "production" } };',
            },
          },
          cssCodeSplit: false,
        }
      : {},
  server: {
    port: 4103,
  },
}));

