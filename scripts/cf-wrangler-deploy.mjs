#!/usr/bin/env node
/**
 * Cloudflare Workers Builds — set Deploy command to: npm run deploy
 * (or leave npx wrangler deploy — postinstall patch redirects on WORKERS_CI)
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('npm run deploy: cf-wrangler-deploy marker v14');

if (!existsSync(resolve('dist/index.html'))) {
  console.error('deploy: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

if (process.env.WORKERS_CI === '1') {
  execFileSync(process.execPath, ['scripts/cf-worker-deploy.mjs'], {
    stdio: 'inherit',
    env: process.env,
  });
} else {
  execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
    stdio: 'inherit',
    env: process.env,
  });
}
