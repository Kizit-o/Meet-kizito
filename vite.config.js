// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'unploughed-unrespected-rory.ngrok-free.dev'
    ],
    host: true, // allows access from network
    port: 5173, // or your Vite port
  },
});
