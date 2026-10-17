import { ARC_RAIDERS_IMAGES } from '../media';

type PostRef = { slug: string; tag: string; date: string };

/** One canonical screenshot per article — no duplicates site-wide. */
const BLOG_COVER_BY_SLUG: Record<string, (typeof ARC_RAIDERS_IMAGES)[number]> = {
  'arc-raiders-cheats-features-guide': ARC_RAIDERS_IMAGES[4]!,
  'arc-raiders-hacks-best-cheats-2026': ARC_RAIDERS_IMAGES[2]!,
  'arc-raiders-aimbot-settings-guide': ARC_RAIDERS_IMAGES[6]!,
  'dota-2-map-hack-setup': ARC_RAIDERS_IMAGES[0]!,
  'best-arc-raiders-cheat-setup-windows': ARC_RAIDERS_IMAGES[7]!,
  'arc-raiders-november-2026-update': ARC_RAIDERS_IMAGES[8]!,
  'arc-raiders-best-cheats-patch-recap-october': ARC_RAIDERS_IMAGES[5]!,
  'vac-patch-day-checklist': ARC_RAIDERS_IMAGES[9]!,
  'arc-raiders-esp-misaligned-fix': ARC_RAIDERS_IMAGES[1]!,
  'arc-raiders-steam-verify-error-fix': ARC_RAIDERS_IMAGES[10]!,
  'how-to-buy-arc-raiders-cheats-2026': ARC_RAIDERS_IMAGES[3]!,
};

export function buildBlogCoverBySlug(posts: readonly PostRef[]): Map<string, string> {
  const out = new Map<string, string>();
  const used = new Set<string>();

  for (const post of posts) {
    const src = BLOG_COVER_BY_SLUG[post.slug];
    if (!src) {
      throw new Error(`[blog] missing cover mapping for slug "${post.slug}"`);
    }
    if (used.has(src)) {
      throw new Error(`[blog] duplicate cover ${src} for slug "${post.slug}"`);
    }
    used.add(src);
    out.set(post.slug, src);
  }

  return out;
}
