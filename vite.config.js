// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Meet-kizito/', // GitHub Pages repo base
  build: {
    outDir: 'dist',        // normal build folder
    emptyOutDir: true,     // clears dist/ before each build
  },
});
