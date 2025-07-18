import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
    },
    plugins: [react()],
  };
});