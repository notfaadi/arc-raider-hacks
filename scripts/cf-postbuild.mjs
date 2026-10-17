#!/usr/bin/env node
/** Publishes dist/ on Cloudflare Pages (runs at end of npm run build). */
import { execFileSync, execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('cf-postbuild: marker 2026-10-17-pages-v6');

if (process.env.SKIP_CF_POSTBUILD_PUBLISH === '1') {
  console.log('cf-postbuild: skip publish (SKIP_CF_POSTBUILD_PUBLISH).');
  process.exit(0);
}

execFileSync(process.execPath, ['scripts/patch-wrangler-bin.mjs'], {
  stdio: 'inherit',
  env: process.env,
});

const onPages =
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA) ||
  (process.env.CI === 'true' && process.cwd().includes('buildhome'));

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
