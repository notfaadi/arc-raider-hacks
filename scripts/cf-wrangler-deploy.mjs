#!/usr/bin/env node
/**
 * Dashboard Deploy command → npm run deploy
 * (Replaces broken `npx wrangler deploy` for static Pages.)
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

if (!existsSync(resolve('dist/index.html'))) {
  console.error('deploy: dist/index.html missing.');
  process.exit(1);
}

const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');
const project = process.env.CF_PAGES_PROJECT_NAME || 'arc-raider-hacks';

execFileSync(
  process.execPath,
  [wrangler, 'pages', 'deploy', 'dist', '--project-name', project, '--commit-dirty=true'],
  { stdio: 'inherit', env: process.env },
);
