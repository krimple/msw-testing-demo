/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      svgr({
        include: "**/*.svg?react"
      }),
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },

  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'/*, '/public/mockServiceWorker.js'*/],
    exclude: ['node_modules'],
    // includeSource: ['./**/*.ts*'],
  }
})
