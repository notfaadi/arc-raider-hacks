import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'http://localhost:4322',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/arc-raiders-cheats/',
    '/cheats/lite/': '/products/arc-raiders-cheats/',
    '/cheats/pro/': '/products/arc-raiders-cheats/',
    '/cheats/elite/': '/products/arc-raiders-cheats/elite/',
    '/cheats/compare/': '/blog/dota-2-lite-vs-pro/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/arc-raiders-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/arc-raiders-cheats/utilities/',
    '/go/dota-2/': '/go/arc-raiders/',
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
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
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
