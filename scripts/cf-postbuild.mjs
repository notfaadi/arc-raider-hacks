#!/usr/bin/env node
/** Publish dist/ to Cloudflare Pages during CI build (before optional deploy command). */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const onPages = process.env.CF_PAGES === '1';
if (!onPages) {
  process.exit(0);
}

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-postbuild: dist/index.html missing.');
  process.exit(1);
}

await import('./cf-pages-deploy.mjs');
