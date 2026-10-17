/** Marketing domain shown in copy, emails, and production canonical URLs. */
export const SITE_DOMAIN = 'arcraidershack.net';

/** Local dev server (see astro.config.mjs `server.port`). */
export const LOCAL_DEV_URL = 'http://localhost:4322';

export const SITE_URL =
  typeof import.meta !== 'undefined' && import.meta.env?.DEV ? LOCAL_DEV_URL : `https://${SITE_DOMAIN}`;

export const PRODUCT_BASE = '/products/arc-raiders-cheats/';

/** Hero subtitle — distinct from meta description to avoid duplicate SERP/body copy. */
export const SITE_TAGLINE =
  'Cloud DMA presets, player ESP, loot radar, and aim tools for ARC Raiders extractions—maintained every patch.';

/** Browser tab / SERP title (keep ~60 characters). */
export const SITE_META_TITLE = 'Arc Raiders Cheats & Hacks — Aimbot, ESP | Arc Raiders Hacks';

/** Meta description (~150–160 chars): unique, keyword-rich, no stacked “Best” claims. */
export const SITE_META_DESCRIPTION =
  'Undetected ARC Raiders cheats for Windows: ESP, aimbot, loot radar, and Cloud DMA tiers. Instant keys, patch-day loader updates, and 24/7 operator support.';

export const TITLE_PREFIX = 'Arc Raiders Hacks & Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
