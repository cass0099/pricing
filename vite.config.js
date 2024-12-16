import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: 'pricing' matches your repository name from the package.json homepage URL
export default defineConfig({
  plugins: [react()],
  base: '/pricing/',
})