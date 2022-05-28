import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@src': join(__dirname, 'src'),
    },
  },
})
