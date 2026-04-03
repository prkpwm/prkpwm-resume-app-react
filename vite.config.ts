import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: '/prkpwm-resume-app-react/',
  build: {
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
  },
})
