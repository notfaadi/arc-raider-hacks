#!/usr/bin/env node
/**
 * Optional — not run from npm run build on Pages Git (CF uploads dist automatically).
 * Use: npm run deploy
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-ci-publish: dist/index.html missing.');
  process.exit(1);
}

execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
  stdio: 'inherit',
  env: process.env,
});
