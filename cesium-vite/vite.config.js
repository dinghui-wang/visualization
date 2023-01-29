import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
import path from 'path'

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    cesium()
  ],
  server: {
    open: true,
    port: 8080,
    hmr: {
      host: "127.0.0.1",
      port: 8080
    }
  },
})
