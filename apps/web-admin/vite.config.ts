import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 暂时只处理语法转译, polyfill 根据项目自行处理
    target: 'es2015',
  },
});
