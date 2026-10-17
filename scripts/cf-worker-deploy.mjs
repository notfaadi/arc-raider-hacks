#!/usr/bin/env node
/** Workers Builds / `npx wrangler deploy` — static site via wrangler.worker.jsonc */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(resolve(dist, 'index.html'))) {
  console.error('cf-worker-deploy: dist/index.html missing — run npm run build first.');
  process.exit(1);
}

const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');
const config = resolve('wrangler.worker.jsonc');

console.log('cf-worker-deploy: wrangler deploy --config wrangler.worker.jsonc');

execFileSync(
  process.execPath,
  [wrangler, 'deploy', '--config', config],
  { stdio: 'inherit', env: process.env },
);
