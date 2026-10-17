/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Arc Raiders Hacks & Cheats | ESP, Aimbot & Loot Radar',
    description:
      'ARC Raiders cheats for PC: player ESP, loot filters, aim assist, and raid radar tiers updated every patch.',
  },
  '/products/arc-raiders-cheats/': {
    title: 'ARC Raiders Elite Cheats & Utility Products',
    description:
      'Elite ARC Raiders cheats plus HWID spoofer, UGC tools, and cosmetic utilities for Windows PC.',
  },
  '/products/arc-raiders-cheats/elite/': {
    title: 'ARC Raiders Elite Cheats | Full ESP & Combat Suite',
    description:
      'Elite tier: full ESP, silent aim, loot radar, priority patch delivery, and direct operator support.',
  },
  '/products/arc-raiders-cheats/utilities/': {
    title: 'ARC Raiders Utilities | HWID, UGC & Unlock Tools',
    description:
      'Choose HWID Spoofer, UGC, or Unlock All—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'ARC Raiders Cheats Guides & Patch Notes',
    description:
      'Setup guides, Lite vs Pro comparisons, patch-day checklists, and raid config tips for arc raiders cheats.',
  },
  '/forum/': {
    title: 'ARC Raiders Community Forum | Arc Raiders Hacks & Cheats',
    description: 'Join raiders to discuss loadouts, extracts, patch changes, guides, and community moments.',
  },
  '/faq/': {
    title: 'FAQ | ARC Raiders Cheats, Products & Setup',
    description:
      'Answers on cheat tiers, ESP, aim modules, HWID tools, checkout, and blog guides before you buy.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Arc Raiders Hacks & Cheats',
    description:
      'Purchase terms, license use, and refund policy for Arc Raiders Hacks & Cheats products.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Arc Raiders Hacks & Cheats',
    description:
      'How we use analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Arc Raiders Hacks & Cheats',
    description:
      'What we publish: ARC Raiders cheat tiers, utilities, guides, and live status notes.',
  },
  '/support/': {
    title: 'Support | Arc Raiders Hacks & Cheats',
    description:
      'Get help with loader setup, HWID, and checkout for ARC Raiders cheat tiers and utilities.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
