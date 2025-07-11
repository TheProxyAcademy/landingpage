import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      rollupOptions: {
        external: ['tailwindcss/version.js'],
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        'tailwindcss/version.js': 'tailwindcss/package.json',
      },
    },
  };
});