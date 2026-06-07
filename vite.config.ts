import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { resolve } from 'path';

const config = defineConfig({
  plugins: [tanstackStart()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),  // ← this is what's missing
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lesson1: resolve(__dirname, 'public/lessons/lesson1.html'),
        lesson2: resolve(__dirname, 'public/lessons/lesson2.html'),
        lesson3: resolve(__dirname, 'public/lessons/3.html'),
        lesson4: resolve(__dirname, 'public/lessons/lesson4_v3.html'),
        lesson5: resolve(__dirname, 'public/lessons/lesson5.html'),
        lesson6: resolve(__dirname, 'public/lessons/lesson6.html'),
        lesson7: resolve(__dirname, 'public/lessons/lesson6-2.html'),
      },
    },
  },
});

export default config;