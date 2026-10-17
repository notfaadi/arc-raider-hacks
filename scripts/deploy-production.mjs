#!/usr/bin/env node
/** Local/CI: npm run deploy:production — wrangler pages deploy */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(resolve(dist, 'index.html'))) {
  console.error('deploy:production: run npm run build first.');
  process.exit(1);
}

const project = process.env.CF_PAGES_PROJECT_NAME || 'arc-raider-hacks';
const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');

execFileSync(
  process.execPath,
  [wrangler, 'pages', 'deploy', 'dist', '--project-name', project, '--branch', 'main', '--commit-dirty=true'],
  { stdio: 'inherit', env: process.env },
);
