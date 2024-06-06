import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // This sets the output directory for the build files
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 5000,
  },
});
