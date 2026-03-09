import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
            // 共享运行时模式：排除 React
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
          cssCodeSplit: false,
        }
      : {},
}));
