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
      // 将框架作为 peer 依赖排除，不打包进库
      external: ['vue', 'react', 'react-dom', 'vue-custom-element'],
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
