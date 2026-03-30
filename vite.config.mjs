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
              if (id.includes('@chakra-ui') || id.includes('@emotion')) return 'ui';
              if (id.includes('react-icons') || id.includes('@fortawesome')) return 'icons';
              if (id.includes('react-router')) return 'router';
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