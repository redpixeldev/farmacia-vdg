import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  compressHTML: false,

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Sora',
          cssVariable: '--font-sora',
          weights: [500, 600, 700, 800],
          styles: ['normal'],
      },
      {
          provider: fontProviders.google(),
          name: 'Manrope',
          cssVariable: '--font-manrope',
          weights: [400, 500, 600, 700],
          styles: ['normal'],
      },
	],

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
