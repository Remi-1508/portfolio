import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le site fonctionne sur GitHub Pages (même dans un sous-dossier) comme sur Vercel/Netlify.
export default defineConfig({
  plugins: [react()],
  base: './',
})
