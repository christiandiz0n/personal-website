import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personal-website/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})