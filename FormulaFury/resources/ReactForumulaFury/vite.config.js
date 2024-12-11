import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public/react', // Esto asegurará que los archivos de producción estén en public/react
    rollupOptions: {
      input: 'resources/react-app/index.jsx', // Ajusta la ruta de entrada si es necesario
    },
  },
});

