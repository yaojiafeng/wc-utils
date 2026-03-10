import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'WcUtils',
      formats: ['es', 'umd'],
      fileName: (format) => `wc-utils.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      // 不将框架排除在外：保证在 Vue2 主应用环境中也可使用 Vue3 适配器
      external: [],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // 生成类型声明文件（如果需要 TypeScript 支持可开启）
    // sourcemap: true,
  },
});
