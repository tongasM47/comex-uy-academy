import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado en GitHub Pages bajo /comex-uy-academy/
export default defineConfig({
  base: '/comex-uy-academy/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) return 'firebase'
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/src/data/')) return 'content'
        },
      },
    },
  },
})
