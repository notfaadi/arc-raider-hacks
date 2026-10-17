import fs from 'node:fs';
import path from 'node:path';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules') walk(p, out);
    else if (/\.(ts|astro|md|mjs)$/.test(e.name)) out.push(p);
  }
  return out;
}

const src = path.join(process.cwd(), 'src');
for (const file of walk(src)) {
  let t = fs.readFileSync(file, 'utf8');
  const next = t
    .replace(/Trios Trios Trios/g, 'Trios')
    .replace(/Trios Trios/g, 'Trios')
    .replace(/\uFFFD/g, '—');
  if (next !== t) {
    fs.writeFileSync(file, next, 'utf8');
    console.log('Fixed', path.relative(process.cwd(), file));
  }
}
