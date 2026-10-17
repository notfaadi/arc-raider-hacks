#!/usr/bin/env node
/** Publishes dist/ on Cloudflare Pages (runs at end of npm run build). */
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('cf-postbuild: marker 2026-10-17-pages-v3');

const onPages =
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

if (!onPages) {
  console.log('cf-postbuild: skip (not Cloudflare Pages).');
  process.exit(0);
}

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-postbuild: dist/index.html missing.');
  process.exit(1);
}

console.log('cf-postbuild: wrangler pages deploy dist …');
execSync('node scripts/cf-pages-deploy.mjs', { stdio: 'inherit', env: process.env });
console.log('cf-postbuild: publish complete.');
