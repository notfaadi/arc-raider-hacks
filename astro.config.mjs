import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://arcraidershack.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/arc-raiders-cheats/',
    '/cheats/lite/': '/products/arc-raiders-cheats/lite/',
    '/cheats/pro/': '/products/arc-raiders-cheats/pro/',
    '/cheats/elite/': '/products/arc-raiders-cheats/elite/',
    '/cheats/compare/': '/blog/arc-raiders-cheats-features-guide/',
    '/privacy-policy/': '/privacy/',
    '/products/dota-2-cheats/': '/products/arc-raiders-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/arc-raiders-cheats/utilities/',
  },
  server: {
    port: 4322,
    host: true,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/cheats') &&
        !page.includes('/privacy-policy'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
