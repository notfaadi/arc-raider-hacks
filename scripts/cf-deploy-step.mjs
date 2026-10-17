#!/usr/bin/env node
/**
 * Cloudflare dashboard Deploy command — paste exactly:
 *   node scripts/cf-deploy-step.mjs
 *
 * Also works when dashboard still says: npx wrangler deploy
 * (latest main uses wrangler shim; this script is the explicit fallback.)
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('cf-deploy-step: marker 2026-10-17-pages-v6');

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-deploy-step: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

console.log('cf-deploy-step: done');
