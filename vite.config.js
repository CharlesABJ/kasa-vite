import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias pour les chemins d'import
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@datas': '/src/datas',
    },
  },
})
