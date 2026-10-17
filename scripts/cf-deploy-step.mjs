#!/usr/bin/env node
/**
 * Cloudflare Deploy command (replace npx wrangler deploy):
 *   node scripts/cf-deploy-step.mjs
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('cf-deploy-step: marker 2026-10-17-pages-v7');

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-deploy-step: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

const onPages =
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

if (!onPages) {
  console.log('cf-deploy-step: not Cloudflare Pages CI — running pages deploy anyway.');
}

execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

console.log('cf-deploy-step: done');
