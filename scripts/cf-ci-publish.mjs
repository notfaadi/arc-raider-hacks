#!/usr/bin/env node
/** Publish dist/ during Cloudflare CI build (before deploy step). */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const onCi =
  process.env.WORKERS_CI === '1' ||
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

if (!onCi) {
  console.log('cf-ci-publish: skip (local build).');
  process.exit(0);
}

if (!existsSync(resolve('dist/index.html'))) {
  console.error('cf-ci-publish: dist/index.html missing.');
  process.exit(1);
}

console.log('cf-ci-publish: uploading dist to Cloudflare Pages…');
execFileSync(process.execPath, ['scripts/cf-pages-deploy.mjs'], {
  stdio: 'inherit',
  env: process.env,
});
console.log('cf-ci-publish: done.');
