// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://acv-dashboard.onrender.com', // Your backend base URL
        changeOrigin: true,
    
      }
    }
  }
});
