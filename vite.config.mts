import {defineConfig} from 'vite';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
  base: '/',
  clearScreen: true,

  server: {
    hmr: true,
    port: 4046,
    host: true,
  },

  css: {
    postcss: 'postcss.config.mjs',
  },

  build: {
    sourcemap: false,
    target: ['esnext', 'edge100', 'firefox100', 'chrome100', 'safari18'],
  },

  plugins: [
    Unfonts({
      fontsource: {
        families: ['Varela Round'],
      },
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@300',
            defer: true,
          },
        ],
        display: 'swap',
        injectTo: 'head-prepend',
        preconnect: true,
      },
    }),
  ],
});
