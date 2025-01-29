import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts:  ["*", "thousands-fuzzy-poetry-cow.trycloudflare.com"]

  },
  plugins: [react()],
  base: './',
  resolve:{
    alias:{
      '@':'/src'
    },
  },
});
