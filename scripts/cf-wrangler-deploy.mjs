#!/usr/bin/env node
/**
 * Cloudflare Workers Builds — set Deploy command to: npm run deploy
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('npm run deploy: cf-wrangler-deploy marker v13');

if (!existsSync(resolve('dist/index.html'))) {
  console.error('deploy: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

// Custom domain arcraidershack.net is on Cloudflare Pages — always publish dist/ there.
execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
  stdio: 'inherit',
  env: process.env,
});
