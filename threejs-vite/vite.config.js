import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  plugins: [vue()],
  server: {
    open: true,
    port: 8080,
    hmr: {
      host: "127.0.0.1",
      port: 8080
    }
  },
})
