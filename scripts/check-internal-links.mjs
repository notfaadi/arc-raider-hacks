import fs from 'node:fs';
import path from 'node:path';
import { PATH_REDIRECTS } from './redirects.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');

/** Built static paths (trailing slash). */
function collectBuiltRoutes() {
  const routes = new Set(['/']);
  function walk(dir, base = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${base}/${entry.name}`);
      } else if (entry.name === 'index.html') {
        routes.add(`${base || ''}/`.replace(/\/+/g, '/'));
      } else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
        const slug = entry.name.replace(/\.html$/, '');
        routes.add(`${base}/${slug}/`.replace(/\/+/g, '/'));
      }
    }
  }
  if (fs.existsSync(dist)) walk(dist);
  if (fs.existsSync(path.join(dist, '404.html'))) routes.add('/this-path-should-404/');
  return routes;
}

function resolveRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(pathname)) {
    const withSlash = `${pathname}/`;
    return PATH_REDIRECTS.get(withSlash) ?? withSlash;
  }
  return pathname;
}

function normalizeInternal(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('/go/')) return null;
  if (href.startsWith('http')) {
    try {
      const u = new URL(href);
      if (!['arcraidershack.net', 'arcraidershacks.com', 'localhost'].includes(u.hostname)) return null;
      href = u.pathname + u.search;
    } catch {
      return null;
    }
  }
  const hash = href.indexOf('#');
  let pathname = hash >= 0 ? href.slice(0, hash) : href;
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  pathname = resolveRedirect(pathname);
  if (pathname !== '/' && !pathname.endsWith('/')) pathname = `${pathname}/`;
  return pathname.split('?')[0];
}

const LINK_RE = /href=["']([^"'#?]+)["']|\]\((\/[^)\s#?]+)\)/g;

function scanFile(filePath, links) {
  const text = fs.readFileSync(filePath, 'utf8');
  let m;
  while ((m = LINK_RE.exec(text)) !== null) {
    const raw = m[1] ?? m[2];
    if (!raw) continue;
    const normalized = normalizeInternal(raw);
    if (normalized) links.push({ from: filePath.replace(root + path.sep, ''), to: normalized });
  }
}

function walkSrc(dir, links) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkSrc(full, links);
    else if (/\.(astro|ts|tsx|md|mdx|mjs|js)$/.test(entry.name)) scanFile(full, links);
  }
}

const built = collectBuiltRoutes();
const links = [];
walkSrc(src, links);
if (fs.existsSync(dist)) {
  for (const entry of fs.readdirSync(dist, { recursive: true })) {
    const name = typeof entry === 'string' ? entry : entry.name;
    if (name.endsWith('.html')) {
      scanFile(path.join(dist, name), links);
    }
  }
}

const missing = new Map();
for (const { from, to } of links) {
  if (to.includes('*')) continue;
  if (/\.(png|jpg|webp|svg|xml|txt|ico|css|js|woff2?)$/i.test(to)) continue;
  if (built.has(to)) continue;
  if (!missing.has(to)) missing.set(to, new Set());
  missing.get(to).add(from);
}

if (missing.size === 0) {
  console.log('OK: no broken internal paths (', built.size, 'built routes,', links.length, 'links checked)');
  process.exit(0);
}

console.log('BROKEN INTERNAL PATHS:', missing.size);
for (const [to, froms] of [...missing.entries()].sort()) {
  console.log('\n', to);
  for (const f of [...froms].slice(0, 5)) console.log('  -', f);
  if (froms.size > 5) console.log('  ...', froms.size - 5, 'more');
}
process.exit(1);
