import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), viteCompression()],
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
