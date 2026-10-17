import { writeFileSync } from 'node:fs';
import { blogPosts as currentPosts } from '../src/data/blog/posts.ts';
import { blogPosts as legacyPosts } from './posts-old.ts';
import { additionalBlogPosts } from '../src/data/blog/additionalPosts.ts';

const TAG = {
  Features: 'Features',
  Guides: 'Guides',
  Setup: 'Setup',
  Troubleshooting: 'Troubleshooting',
  Update: 'Update',
};

/** Exactly six slugs per filter tab — quality ARC Raiders focus. */
const CATALOG = {
  [TAG.Features]: [
    'arc-raiders-cheats-features-guide',
    'arc-raiders-hacks-best-cheats-2026',
    'arc-raiders-aimbot-settings-guide',
    'arc-raiders-loot-esp-container-radar',
    'arc-raiders-radar-wallhack-guide',
    'arc-raiders-aimbot-settings-guide',
  ],
  [TAG.Guides]: [
    'how-to-buy-arc-raiders-cheats-2026',
    'dota-2-lite-vs-pro',
    'dota-2-elite-tier-guide',
    'dota-2-external-cheat-guide',
    'dota-2-hwid-spoofer-after-ban',
    'arc-raiders-hacks-vs-free-cheats',
  ],
  [TAG.Setup]: [
    'dota-2-map-hack-setup',
    'best-arc-raiders-cheat-setup-windows',
    'dota-2-stream-proof-setup',
    'dota-2-zoom-hack-guide',
    'how-to-use-dota-2-cheat-codes',
    'dota-2-auto-combo-hero-scripts',
  ],
  [TAG.Troubleshooting]: [
    'arc-raiders-esp-misaligned-fix',
    'arc-raiders-steam-verify-error-fix',
    'valve-anti-cheat-unable-to-verify',
    'arc-raiders-overlay-not-visible-fix',
    'arc-raiders-loader-crash-on-start-fix',
    'arc-raiders-fps-drop-troubleshooting',
  ],
  [TAG.Update]: [
    'arc-raiders-november-2026-update',
    'arc-raiders-best-cheats-patch-recap-october',
    'vac-patch-day-checklist',
    'arc-raiders-september-2026-update',
    'arc-raiders-loader-2-4-release-notes',
    'arc-raiders-anti-cheat-status-october-2026',
  ],
};

const pool = new Map();
for (const list of [currentPosts, legacyPosts, additionalBlogPosts]) {
  for (const post of list) {
    const tag = post.tag === 'Updates' ? TAG.Update : post.tag;
    pool.set(post.slug, { ...post, tag });
  }
}

const ordered = [];
for (const tag of Object.keys(CATALOG)) {
  for (const slug of CATALOG[tag]) {
    const post = pool.get(slug);
    if (!post) throw new Error(`Missing blog post: ${slug} (${tag})`);
    ordered.push({ ...post, tag });
  }
}

const featuredSlug = 'arc-raiders-cheats-features-guide';
/** Linked sitewide but not in filter tabs — must still build as real URLs (GSC / internal links). */
const EXTRA_PUBLISH_SLUGS = [
  'dota-2-cheat-codes-guide',
  'dota-2-console-cheats-tips',
  'dota-2-skin-changer-guide',
];

const withFeatured = ordered.map((p) => ({
  ...p,
  featured: p.slug === featuredSlug ? true : undefined,
}));
for (const slug of EXTRA_PUBLISH_SLUGS) {
  if (withFeatured.some((p) => p.slug === slug)) continue;
  const post = pool.get(slug);
  if (!post) throw new Error(`Missing extra publish post: ${slug}`);
  withFeatured.push({ ...post, featured: undefined });
}
if (!withFeatured.some((p) => p.featured)) {
  throw new Error('Featured post missing');
}

const body = `import type { BlogPostFull } from './types';

export const blogPosts: BlogPostFull[] = ${JSON.stringify(withFeatured, null, 2)};
`;

writeFileSync(new URL('../src/data/blog/posts.ts', import.meta.url), body, 'utf8');

const counts = {};
for (const p of withFeatured) counts[p.tag] = (counts[p.tag] || 0) + 1;
console.log('Wrote', withFeatured.length, 'posts', counts);
