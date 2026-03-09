import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
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
            // 共享运行时模式：排除 Vue，主应用需提前加载
            external: ['vue'],
            output: {
              globals: { vue: 'Vue' },
            },
          },
          cssCodeSplit: false,
        }
      : {},
}));
