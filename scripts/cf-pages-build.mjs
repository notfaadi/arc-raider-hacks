#!/usr/bin/env node
/** Full production build; on Cloudflare Pages also publish dist before the deploy step. */
import { execSync } from 'node:child_process';

const steps = [
  'node scripts/generate-brand-icons.mjs',
  'node scripts/optimize-images.mjs',
  'astro build',
  'node scripts/prune-dist-images.mjs',
  'node scripts/finalize-sitemap.mjs',
  'node scripts/verify-seo.mjs',
  'node scripts/indexnow.mjs',
];

for (const cmd of steps) {
  execSync(cmd, { stdio: 'inherit', env: process.env });
}

const onPages =
  process.env.CF_PAGES === '1' ||
  process.env.CF_PAGES === 'true' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

if (onPages) {
  execSync('node scripts/cf-pages-deploy.mjs', { stdio: 'inherit', env: process.env });
}
