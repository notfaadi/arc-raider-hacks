#!/usr/bin/env node
/**
 * Cloudflare Workers Builds — set Deploy command to: npm run deploy
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('npm run deploy: cf-wrangler-deploy marker v8');

if (!existsSync(resolve('dist/index.html'))) {
  console.error('deploy: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

const workersCi = process.env.WORKERS_CI === '1';
const onPages =
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

if (onPages && !workersCi) {
  execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
    stdio: 'inherit',
    env: process.env,
  });
  process.exit(0);
}

const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');
execFileSync(
  process.execPath,
  [wrangler, 'deploy', '--assets=./dist'],
  { stdio: 'inherit', env: process.env },
);
