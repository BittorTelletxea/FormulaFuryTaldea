import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// Asegúrate de cargar las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    define: {
        'process.env.APP_URL': JSON.stringify(process.env.APP_URL || 'http://localhost'),  // Usa un valor predeterminado si APP_URL no está definida
    },
});
