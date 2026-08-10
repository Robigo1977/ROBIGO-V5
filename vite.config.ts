import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The custom domain serves this site from https://robigo.co.uk/.
// Root-relative build URLs keep images, scripts and styles on the live domain.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
