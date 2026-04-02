import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // On VPS setups without perfect HTTP/2 + compression, too many chunks can hurt.
              // Keep chunking conservative: only split obvious route/feature clusters.
              if (id.includes('react-slick') || id.includes('slick-carousel')) return 'carousel';
              if (id.includes('react-ga4')) return 'analytics';
              return 'vendor';
            }
          },
        },
      },
    },
    plugins: [react()],
  };
});