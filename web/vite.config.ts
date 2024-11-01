import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist', // Output to root directory
    emptyOutDir: true,
  },
  server: {
    middlewareMode: false,
    headers: {
      '/.well-known/apple-app-site-association': {
        'Content-Type': 'application/json',
      },
    },
  },
})
