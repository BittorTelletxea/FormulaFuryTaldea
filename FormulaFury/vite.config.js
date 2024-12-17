import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
  ],
  server: {
    host: '0.0.0.0', // Permite acceso desde otros dispositivos
    port: 5173,      // Puerto para Vite
    hmr: {
      host: '10.14.0.235', // Reemplaza con la IP local de tu máquina
      port: 5173,
    },
  },
  resolve: {
    alias: {
      '@': '/resources/js', // Define el alias @ para tu proyecto
    },
  },
});
