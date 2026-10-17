#!/usr/bin/env node
/**
 * Cloudflare Pages **Deploy command** (replaces `npx wrangler deploy`).
 * Dashboard: Deploy command → npm run deploy
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

if (!existsSync(resolve('dist/index.html'))) {
  console.error('deploy: dist/index.html missing.');
  process.exit(1);
}

await import('./cf-pages-deploy.mjs');
