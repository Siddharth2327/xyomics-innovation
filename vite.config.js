import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // or '/your-subfolder/' if you’re deploying to a subfolder
  build: {
    outDir: 'dist', // The default output folder (you don’t usually need to change this)
    assetsDir: 'assets', // Where static assets like images and PDFs will be placed
  },
});
