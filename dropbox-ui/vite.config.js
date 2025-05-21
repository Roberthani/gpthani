// ----------------------------------------------------------------------------
// CONFIG: Vite base for GitHub Pages under /gpthani/
// ----------------------------------------------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gpthani/',       // ← crucial to prevent 404s on GitHub Pages
  plugins: [react()],
})
