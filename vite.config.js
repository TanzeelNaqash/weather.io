import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts: ["*", "martha-pa-tulsa-isaac.trycloudflare.com"]
  },
  plugins: [react()],
  base: './',
  resolve:{
    alias:{
      '@':'/src'
    },
  },
});

