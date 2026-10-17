#!/usr/bin/env node
/**
 * Drop-in replacement for dashboard Deploy command `npx wrangler deploy`.
 * Publishes ./dist to Cloudflare Pages (correct for static Astro).
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-wrangler-deploy: run npm run build first.');
  process.exit(1);
}

await import('./cf-pages-deploy.mjs');
