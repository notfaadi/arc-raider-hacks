/**
 * Target search terms for ARC Raiders Hacks & Cheats.
 * Edit here when Search Console shows new query opportunities.
 */

export const BRAND = 'Arc Raiders Hacks & Cheats';

/** Core terms — used on homepage and as a base for other pages. */
export const PRIMARY_KEYWORDS = [
  'best arc raiders cheats',
  'arc raiders cheats',
  'arc raiders aimbot',
  'arc raiders esp',
  'arc raiders radar hack',
  'arc raiders wallhack',
  'arc raiders hacks',
  'arc raiders loot esp',
  'arc raiders silent aim',
  'arc raiders undetected cheats',
  'arc raiders pc cheats',
  'arc raiders extraction cheats',
  'arc raiders pvp cheats',
  'arc raiders hack download',
  'arc raiders cheat menu',
  'arc raiders external cheat',
  'arc raiders hwid spoofer',
  'arc raiders elite cheats',
  'arc raiders loot hack',
  'arc raiders player esp',
  'arc raiders recoil control',
] as const;

export const FEATURE_KEYWORDS = [
  'container esp arc raiders',
  'arc bot esp',
  'arc raiders stream proof',
  'arc raiders cloud config',
  'arc raiders cheat loader',
  'arc raiders patch update',
  'arc raiders unlock all',
  'arc raiders skin changer',
] as const;

export const LONG_TAIL_KEYWORDS = [
  'best arc raiders cheats 2026',
  'arc raiders cheats for windows',
  'how to use arc raiders hacks',
  'arc raiders cheats safe',
  'arc raiders ranked cheats',
  'arc raiders trios cheats',
  'buy arc raiders cheats',
] as const;

export const GLOBAL_META_KEYWORDS = formatMetaKeywords([
  ...PRIMARY_KEYWORDS,
  ...FEATURE_KEYWORDS,
  ...LONG_TAIL_KEYWORDS,
]);

export function formatMetaKeywords(words: readonly string[], max = 28): string {
  return words.slice(0, max).join(', ');
}

export function keywordsForPath(pathname: string): string {
  const path = pathname.replace(/\/$/, '') || '/';

  if (path === '/') {
    return GLOBAL_META_KEYWORDS;
  }

  if (path.startsWith('/products/arc-raiders-cheats/elite')) {
    return formatMetaKeywords([
      'arc raiders elite cheats',
      'arc raiders full esp',
      'arc raiders silent aim elite',
      'arc raiders premium hacks',
      ...PRIMARY_KEYWORDS.slice(0, 8),
    ]);
  }

  if (path.includes('/lite')) {
    return formatMetaKeywords([
      'arc raiders lite cheats',
      'arc raiders esp lite',
      'arc raiders radar lite',
      ...PRIMARY_KEYWORDS.slice(0, 10),
    ]);
  }

  if (path.includes('/pro')) {
    return formatMetaKeywords([
      'arc raiders pro cheats',
      'arc raiders aimbot pro',
      'arc raiders combat cheats',
      ...PRIMARY_KEYWORDS.slice(0, 10),
    ]);
  }

  if (path.includes('hwid-spoofer')) {
    return formatMetaKeywords([
      'arc raiders hwid spoofer',
      'hwid spoofer pc gaming',
      'hardware id spoofer',
      'arc raiders ban bypass',
      ...PRIMARY_KEYWORDS.slice(0, 6),
    ]);
  }

  if (path.includes('unlock-all')) {
    return formatMetaKeywords([
      'arc raiders unlock all',
      'arc raiders skin changer',
      'arc raiders cosmetic hack',
      ...PRIMARY_KEYWORDS.slice(0, 8),
    ]);
  }

  if (path.startsWith('/blog')) {
    return formatMetaKeywords([
      'arc raiders cheat guide',
      'arc raiders esp setup',
      'arc raiders patch notes',
      'arc raiders hack tutorial',
      ...PRIMARY_KEYWORDS.slice(0, 12),
    ]);
  }

  if (path.startsWith('/products')) {
    return formatMetaKeywords([...PRIMARY_KEYWORDS, ...FEATURE_KEYWORDS.slice(0, 6)]);
  }

  return formatMetaKeywords([...PRIMARY_KEYWORDS.slice(0, 15), ...LONG_TAIL_KEYWORDS.slice(0, 5)]);
}
