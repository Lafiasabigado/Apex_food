import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: [
      'firebase',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/analytics'
      // Ajoutez d'autres services Firebase que vous utilisez
    ]
  }
})
