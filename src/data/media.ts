/** Canonical ARC Raiders screenshots (only assets used site-wide). */
export const ARC_RAIDERS_IMAGES = [
  '/images/arc-raiders/01-skeleton-esp.png',
  '/images/arc-raiders/02-indoor-esp.png',
  '/images/arc-raiders/03-loot-husk.png',
  '/images/arc-raiders/04-loot-forest.png',
  '/images/arc-raiders/05-loadout.png',
  '/images/arc-raiders/06-cheat-banner.png',
  '/images/arc-raiders/07-combat.png',
  '/images/arc-raiders/08-rooftop-loot-esp.png',
  '/images/arc-raiders/09-forest-scout.png',
  '/images/arc-raiders/10-hack-menu.png',
  '/images/arc-raiders/11-indoor-pvp.png',
] as const;

export const HOMEPAGE_BLOG_SLUGS = [
  'arc-raiders-cheats-features-guide',
  'dota-2-map-hack-setup',
  'arc-raiders-hacks-best-cheats-2026',
] as const;

export const DEFAULT_HERO_IMAGE = ARC_RAIDERS_IMAGES[0];

export function arcRaiderImageForIndex(index: number): string {
  return ARC_RAIDERS_IMAGES[((index % ARC_RAIDERS_IMAGES.length) + ARC_RAIDERS_IMAGES.length) % ARC_RAIDERS_IMAGES.length]!;
}

export function uniqueSrcList(sources: readonly string[]): string[] {
  const seen = new Set<string>();
  return sources.filter((src) => {
    if (seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}
