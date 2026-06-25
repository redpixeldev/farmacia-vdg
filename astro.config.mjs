import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  compressHTML: false,

  build: {
      assets: 'assets',
      format: 'file',
	},

  vite: {
      build: {
          assetsInlineLimit: 0,
          rollupOptions: {
              output: {
                  entryFileNames: 'assets/main.js',
                  assetFileNames: 'assets/main[extname]',
              },
          },
      },
	},

  output: 'static',
  adapter: cloudflare(),
});
