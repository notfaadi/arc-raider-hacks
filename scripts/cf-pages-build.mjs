#!/usr/bin/env node
/**
 * Production build. On Cloudflare Pages (CF_PAGES / commit SHA env), also runs
 * `wrangler pages deploy` so production updates even if the dashboard deploy step fails.
 */
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
  console.log('cf-pages-build: publishing dist/ to Cloudflare Pages…');
  execSync('node scripts/cf-pages-deploy.mjs', { stdio: 'inherit', env: process.env });
}
