// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Meet-kizito/',
  server: {
    host: true, // Allows network access (including ngrok)
    port: 5173,
  },
});