import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://examination.24x7retail.com',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '') 
        
      }
    }
  }
})
