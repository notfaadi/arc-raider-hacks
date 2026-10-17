/**
 * Central titles, descriptions, and keywords for high-traffic routes.
 * Keep titles ~50–60 chars and descriptions ~150–160 chars when possible.
 */

import { keywordsForPath } from './keywords';
import { SITE_META_DESCRIPTION, SITE_META_TITLE } from './site';

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
    keywords: keywordsForPath('/'),
  },
  '/products/arc-raiders-cheats/': {
    title: 'ARC Raiders Cheats & Hacks | Elite, Pro & Lite Tiers',
    description:
      'Compare ARC Raiders cheat tiers: ESP, aimbot, loot filters, and utilities. Elite, Pro, Lite, HWID spoofer, and Unlock All for Windows PC.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/'),
  },
  '/products/arc-raiders-cheats/elite/': {
    title: 'ARC Raiders Elite Cheats | Full ESP, Aimbot & Loot Hack',
    description:
      'ARC Raiders Elite: full player ESP, silent aim, container loot radar, stream-proof overlay, and priority patch delivery for PC extractions.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/elite/'),
  },
  '/products/arc-raiders-cheats/lite/': {
    title: 'ARC Raiders Lite Cheats | ESP, Radar & Loot Awareness',
    description:
      'Lite tier ARC Raiders hacks focus on ESP, raid radar, and loot highlights—low profile configs for players who want vision without full combat automation.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/lite/'),
  },
  '/products/arc-raiders-cheats/pro/': {
    title: 'ARC Raiders Pro Cheats | Aimbot, ESP & Combat Assist',
    description:
      'Pro tier adds humanized aim assist, recoil control, and advanced ESP to Lite radar—balanced ARC Raiders cheats for PvP extractions on PC.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/pro/'),
  },
  '/products/arc-raiders-cheats/cloud-dma/': {
    title: 'Cloud DMA for ARC Raiders Cheats | AWS Portal Sync',
    description:
      'Cloud DMA config sync on AWS for ARC Raiders ESP, aim, and utility presets—included with Lite, Pro, and Elite at arcraidershack.net.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/cloud-dma/'),
  },
  '/products/arc-raiders-cheats/hwid-spoofer/': {
    title: 'ARC Raiders HWID Spoofer | Hardware ID Reset Tool',
    description:
      'HWID spoofer for ARC Raiders players on PC—serial rotation, compatibility scan, and setup guides before you launch the game or loader.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/hwid-spoofer/'),
  },
  '/products/arc-raiders-cheats/ugc/': {
    title: 'ARC Raiders UGC & Account Recovery Utilities',
    description:
      'UGC appeal workflows, case tracking, and documentation for Steam and platform restrictions—pair with HWID tools when hardware is flagged.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/ugc/'),
  },
  '/products/arc-raiders-cheats/unlock-all/': {
    title: 'ARC Raiders Unlock All & Skin Changer Tool',
    description:
      'Preview outfits, weapon skins, and loadout cosmetics locally with Unlock All—cosmetic utility for ARC Raiders on Windows PC.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/unlock-all/'),
  },
  '/products/arc-raiders-cheats/utilities/': {
    title: 'ARC Raiders Utilities | HWID, UGC & Unlock All',
    description:
      'Pick HWID spoofer, UGC recovery, or Unlock All—compare ARC Raiders utility tools, features, and checkout paths in one place.',
    keywords: keywordsForPath('/products/arc-raiders-cheats/utilities/'),
  },
  '/blog/': {
    title: 'ARC Raiders Cheats Blog | Guides, ESP & Patch Notes',
    description:
      'ARC Raiders hack guides: ESP setup, aimbot configs, loot radar tuning, patch-day checklists, and tier comparisons for PC players.',
    keywords: keywordsForPath('/blog/'),
  },
  '/forum/': {
    title: 'ARC Raiders Cheats Forum | Tips, Builds & Patch Talk',
    description:
      'Community Q&A for ARC Raiders cheats—loadouts, extract routes, loader setup, and patch discussion with guide-based answers.',
    keywords: keywordsForPath('/forum/'),
  },
  '/faq/': {
    title: 'ARC Raiders Cheats FAQ | Safety, Setup & Products',
    description:
      'FAQ for ARC Raiders hacks: undetected status, supported platforms, license moves, HWID, checkout, and what each cheat tier includes.',
    keywords: keywordsForPath('/faq/'),
  },
  '/about/': {
    title: 'About Arc Raiders Hacks & Cheats | PC Cheat Provider',
    description:
      'We publish ARC Raiders cheat tiers, utilities, setup guides, and live status notes for Windows PC players worldwide.',
    keywords: keywordsForPath('/about/'),
  },
  '/support/': {
    title: 'ARC Raiders Cheats Support | Loader & HWID Help',
    description:
      'Get help with ARC Raiders loader install, HWID reset, checkout, and module errors—contact support with order email and Windows version.',
    keywords: keywordsForPath('/support/'),
  },
  '/terms/': {
    title: 'Terms & Conditions | Arc Raiders Hacks & Cheats',
    description:
      'License terms, refunds, and acceptable use for ARC Raiders cheat products and utilities sold through our checkout partners.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Arc Raiders Hacks & Cheats',
    description:
      'How Arc Raiders Hacks & Cheats uses analytics, cookies, and support contact data when you browse or request help.',
  },
  '/pricing/': {
    title: 'Buy Arc Raiders Cheats — $35/mo & Lifetime Keys',
    description:
      'Buy Arc Raiders cheats with published USD pricing: $35/month or $150 lifetime for Lite, Pro, and Elite. Instant delivery, 24/7 support—see tiers before checkout.',
    keywords: keywordsForPath('/pricing/'),
  },
  '/features/': {
    title: 'Arc Raiders Cheat Features — ESP, Aimbot, Loot ESP',
    description:
      'Arc Raiders hack features by tier: player ESP, loot filters, radar, silent aim, Cloud DMA sync, and HWID tools for Windows PC extractions.',
    keywords: keywordsForPath('/features/'),
  },
  '/how-to-install/': {
    title: 'How to Install Arc Raiders Cheat — Windows Guide',
    description:
      'How to install an Arc Raiders cheat on Windows 10/11: loader setup, license activation, ESP config, and patch-day checks in about 25 minutes.',
    keywords: keywordsForPath('/how-to-install/'),
  },
  '/contact/': {
    title: 'Contact Arc Raiders Cheats Support',
    description:
      'Contact Arc Raiders hacks support for loader errors, HWID help, and checkout receipts. Email support with your order ID and Windows version.',
    keywords: keywordsForPath('/contact/'),
  },
  '/refund-policy/': {
    title: 'Refund Policy | Arc Raiders Cheat Keys',
    description:
      'Refund policy for digital Arc Raiders cheat licenses: eligibility, 48-hour window, chargebacks, and how to email support@arcraidershack.net.',
  },
};

/** Blog article meta overrides (slug → SEO). Falls back to post title + desc. */
export const BLOG_PAGE_SEO: Record<string, PageSeoEntry> = {
  'arc-raiders-cheats-features-guide': {
    title: 'ARC Raiders Cheats Features Guide | ESP, Aimbot & Radar',
    description:
      'Full breakdown of ARC Raiders cheat modules—ESP, silent aim, loot radar, stream proof, and tier differences for PC in 2026.',
  },
  'dota-2-map-hack-setup': {
    title: 'ARC Raiders ESP Setup Guide | Player & Loot Overlays',
    description:
      'Tune player ESP, container loot, and radar distance for ARC Raiders extractions—conservative defaults and ranked-safe ranges.',
  },
  'how-to-buy-arc-raiders-cheats-2026': {
    title: 'How to Buy ARC Raiders Cheats in 2026 | Secure Checkout',
    description:
      'Step-by-step purchase flow for ARC Raiders Elite, Pro, and Lite—portal access, loader download, and first-run checklist.',
  },
  'vac-patch-day-checklist': {
    title: 'ARC Raiders Patch Day Checklist | Cheat Status & Loader',
    description:
      'After every ARC Raiders update: check status banner, reload loader, reset ESP ranges, and verify modules before you queue.',
  },
  'arc-raiders-aimbot-settings-guide': {
    title: 'ARC Raiders Aimbot Settings | FOV, Smoothness & Bones',
    description:
      'Tune silent aim FOV, prediction, smoothness, and bone targets for ARC Raiders PvP extractions with ranked-safe defaults.',
  },
  'arc-raiders-hacks-best-cheats-2026': {
    title: 'Best ARC Raiders Cheats 2026 | Arc Raiders Hacks Guide',
    description:
      'Why arc raiders hacks are the best PC extraction cheats—ESP, aimbot, loot radar, and undetected loader updates.',
  },
  'arc-raiders-best-cheats-patch-recap-october': {
    title: 'October 2026 ARC Raiders Patch Recap | Cheat Loader Status',
    description:
      'October loader and ESP hotfixes—status for best arc raiders cheats after Steam security updates.',
  },
  'arc-raiders-november-2026-update': {
    title: 'November 2026 ARC Raiders Update | Cheat Compatibility',
    description:
      'November patch notes and loader status for arc raiders hacks—ESP, radar, and aimbot modules.',
  },
  'arc-raiders-esp-misaligned-fix': {
    title: 'ARC Raiders ESP Misaligned Fix | Overlay & DPI',
    description:
      'Fix floating or offset player ESP boxes—resolution, scaling, and loader version steps.',
  },
  'best-arc-raiders-cheat-setup-windows': {
    title: 'Best ARC Raiders Cheat Setup on Windows PC',
    description:
      'Loader install, Ranked Safe presets, and first-session checklist for arc raiders hacks on Steam.',
  },
  'arc-raiders-steam-verify-error-fix': {
    title: 'Steam Verify Error ARC Raiders Cheats | Fix Guide',
    description:
      'Fix Steam file verify loops with arc raiders hack loader—launch order and clean VAC pass.',
  },
  'dota-2-cheat-codes-guide': {
    title: 'ARC Raiders Cheat Codes Guide | Practice Lobby Commands',
    description:
      'ARC Raiders lobby cheat codes for custom games—gold, vision, hero spawn, and item commands before ranked ESP and aimbot tools.',
  },
  'dota-2-console-cheats-tips': {
    title: 'ARC Raiders Console Cheats Tips | Refresh & Bot Commands',
    description:
      'Private lobby console cheats explained—refresh, wtf mode, creep spawn, and bot commands for ARC Raiders practice sessions.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  const normalized = normalizeSeoPath(pathname);
  const direct = PAGE_SEO[normalized];
  if (direct) {
    return {
      ...direct,
      keywords: direct.keywords ?? keywordsForPath(normalized),
    };
  }

  const productMatch = normalized.match(/^\/products\/arc-raiders-cheats\/([^/]+)\/$/);
  if (productMatch) {
    const slugPath = `/products/arc-raiders-cheats/${productMatch[1]}/`;
    const entry = PAGE_SEO[slugPath];
    if (entry) {
      return { ...entry, keywords: entry.keywords ?? keywordsForPath(slugPath) };
    }
  }

  return undefined;
}

export function getBlogSeoEntry(slug: string): PageSeoEntry | undefined {
  const entry = BLOG_PAGE_SEO[slug];
  if (!entry) return undefined;
  return {
    ...entry,
    keywords: entry.keywords ?? keywordsForPath(`/blog/${slug}/`),
  };
}
