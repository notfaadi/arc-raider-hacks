#!/usr/bin/env node
/** Fail CI if homepage SEO regressions slip into dist/. */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { resolveStaticDistDir } from './resolve-dist-dir.mjs';

const distDir = resolveStaticDistDir();
const indexPath = resolve(distDir, 'index.html');

if (!existsSync(indexPath)) {
  console.warn('verify-seo: dist/index.html missing — skip.');
  process.exit(0);
}

const html = readFileSync(indexPath, 'utf8');
const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;

if (h1Count !== 1) {
  console.error(`verify-seo: homepage must have exactly 1 <h1>, found ${h1Count}.`);
  process.exit(1);
}

const meta = html.match(/<meta name="description" content="([^"]*)"/i);
const description = meta?.[1] ?? '';
const banned = 'The Best ARC Raiders Hacks with Best Cloud DMA';
if (description.includes(banned)) {
  console.error('verify-seo: homepage meta description is outdated.');
  process.exit(1);
}

if (description.length < 120 || description.length > 165) {
  console.warn(`verify-seo: meta description length ${description.length} (target ~150–160).`);
}

const emptyAlts = (html.match(/<img\b[^>]*\salt=""[^>]*>/gi) ?? []).length;
if (emptyAlts > 0) {
  console.error(`verify-seo: homepage has ${emptyAlts} image(s) with empty alt.`);
  process.exit(1);
}

const h2Texts = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
  m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase(),
);
const dupH2 = h2Texts.filter((t, i) => t && h2Texts.indexOf(t) !== i);
if (dupH2.length > 0) {
  console.error(`verify-seo: duplicate h2 heading text: ${[...new Set(dupH2)].join(' | ')}`);
  process.exit(1);
}

console.log('verify-seo: homepage OK (1 h1, meta, alts, unique h2).');
