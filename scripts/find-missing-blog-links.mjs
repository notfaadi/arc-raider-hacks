import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const postsFile = fs.readFileSync(path.join(root, 'src/data/blog/posts.ts'), 'utf8');
const slugs = new Set([...postsFile.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]));

const sources = [
  'src/data/blog/posts.ts',
  'src/data/products.ts',
  'src/data/forum.ts',
  'src/i18n/en.ts',
  'src/data/faq.ts',
  'src/data/marketing/phase1Pages.ts',
];

const linkRe = /\]\((\/blog\/[a-z0-9-]+)\/?\)/gi;
const missing = new Map();

for (const rel of sources) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    const slug = m[1].replace('/blog/', '');
    if (!slugs.has(slug)) {
      if (!missing.has(slug)) missing.set(slug, new Set());
      missing.get(slug).add(rel);
    }
  }
}

if (missing.size === 0) {
  console.log('No missing blog slugs in markdown links.');
} else {
  console.log('Missing blog posts for internal links:');
  for (const [slug, froms] of [...missing.entries()].sort()) {
    console.log(`  /blog/${slug}/`, '←', [...froms].join(', '));
  }
  process.exit(1);
}
