import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repository below /ROBIGO-V5/.
export default defineConfig({
  base: '/ROBIGO-V5/',
  plugins: [react()],
})
