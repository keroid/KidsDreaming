import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
// })

export default {
  plugins: [vue()],
  base: '/pagetest/',
  build: {
    outDir: 'docs'
  }
}