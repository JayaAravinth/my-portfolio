import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Use automatic JSX runtime for smaller bundle
      jsxRuntime: 'automatic',
      // Disable dev-only features in production
      babel: {
        compact: true,
      },
    }),
  ],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunks - more aggressive splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendors
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('qrcode.react')) {
              return 'qrcode';
            }
            return 'vendor';
          }
          // Split each component into its own chunk for better caching
          if (id.includes('src/components/')) {
            const component = id.split('src/components/')[1].split('.')[0];
            return `component-${component.toLowerCase()}`;
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Use terser for better minification (smaller than esbuild)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // More aggressive compression
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Optimize CSS
    cssMinify: true,
    // Reduce asset inline limit for better caching
    assetsInlineLimit: 1024,
    // Disable source maps for production
    sourcemap: false,
    // Reduce module preload
    modulePreload: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // Use esbuild for faster transpilation
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
    target: 'esnext',
  },
})
