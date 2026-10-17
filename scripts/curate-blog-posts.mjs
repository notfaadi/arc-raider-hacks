import { writeFileSync } from 'node:fs';
import { blogPosts } from '../src/data/blog/posts.ts';

const KEEP_ORDER = [
  'arc-raiders-cheats-features-guide',
  'arc-raiders-hacks-best-cheats-2026',
  'arc-raiders-aimbot-settings-guide',
  'dota-2-map-hack-setup',
  'best-arc-raiders-cheat-setup-windows',
  'arc-raiders-november-2026-update',
  'arc-raiders-best-cheats-patch-recap-october',
  'vac-patch-day-checklist',
  'arc-raiders-esp-misaligned-fix',
  'arc-raiders-steam-verify-error-fix',
  'how-to-buy-arc-raiders-cheats-2026',
];

const kept = KEEP_ORDER.map((slug) => {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Missing post: ${slug}`);
  return post;
});

const body = `import type { BlogPostFull } from './types';

export const blogPosts: BlogPostFull[] = ${JSON.stringify(kept, null, 2)};
`;

writeFileSync(new URL('../src/data/blog/posts.ts', import.meta.url), body, 'utf8');
console.log(`Wrote ${kept.length} blog posts.`);
