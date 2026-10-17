#!/usr/bin/env node
/**
 * Cloudflare Pages Git deploy step — use as the dashboard **Deploy command**:
 *   node scripts/cf-pages-deploy.mjs
 * Leave deploy empty if you only rely on build output `dist` (recommended).
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(dist)) {
  console.error('cf-pages-deploy: dist/ not found — run npm run build first.');
  process.exit(1);
}

const project = process.env.CF_PAGES_PROJECT_NAME || 'arc-raider-hacks';
const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');

execFileSync(
  process.execPath,
  [wrangler, 'pages', 'deploy', 'dist', '--project-name', project, '--commit-dirty=true'],
  { stdio: 'inherit', env: process.env },
);
