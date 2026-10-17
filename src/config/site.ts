/** Marketing domain shown in copy, emails, and production canonical URLs. */
export const SITE_DOMAIN = 'arcraidershacks.com';

/** Local dev server (see astro.config.mjs `server.port`). */
export const LOCAL_DEV_URL = 'http://localhost:4322';

export const SITE_URL =
  typeof import.meta !== 'undefined' && import.meta.env?.DEV ? LOCAL_DEV_URL : `https://${SITE_DOMAIN}`;

export const PRODUCT_BASE = '/products/arc-raiders-cheats/';

/** Primary marketing line — use in hero, meta description, and schema. */
export const SITE_TAGLINE =
  'The Best ARC Raiders Cheats with Aimbot, ESP, Radar Hack, and Wallhack!';

/** Browser tab / SERP title (keep ~60 characters). */
export const SITE_META_TITLE = 'Best ARC Raiders Cheats | Aimbot, ESP, Radar & Wallhack';

export const SITE_META_DESCRIPTION = `${SITE_TAGLINE} Undetected PC extraction tools with patch-day updates and 24/7 support.`;

export const TITLE_PREFIX = 'Arc Raiders Hacks & Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
