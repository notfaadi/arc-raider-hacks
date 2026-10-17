/** Canonical ARC Raiders screenshots (only assets used site-wide). */
export const ARC_RAIDERS_IMAGES = [
  '/images/arc-raiders/01-skeleton-esp.png',
  '/images/arc-raiders/02-indoor-esp.png',
  '/images/arc-raiders/03-loot-husk.png',
  '/images/arc-raiders/04-loot-forest.png',
  '/images/arc-raiders/05-loadout.png',
  '/images/arc-raiders/06-cheat-banner.png',
  '/images/arc-raiders/07-combat.png',
] as const;

export const DEFAULT_HERO_IMAGE = ARC_RAIDERS_IMAGES[0];

export function arcRaiderImageForIndex(index: number): string {
  return ARC_RAIDERS_IMAGES[((index % ARC_RAIDERS_IMAGES.length) + ARC_RAIDERS_IMAGES.length) % ARC_RAIDERS_IMAGES.length]!;
}
