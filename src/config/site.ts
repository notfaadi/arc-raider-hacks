/** Marketing domain shown in copy, emails, and production canonical URLs. */
export const SITE_DOMAIN = 'arcraidershacks.com';

/** Local dev server (see astro.config.mjs `server.port`). */
export const LOCAL_DEV_URL = 'http://localhost:4322';

export const SITE_URL =
  typeof import.meta !== 'undefined' && import.meta.env?.DEV ? LOCAL_DEV_URL : `https://${SITE_DOMAIN}`;

export const PRODUCT_BASE = '/products/arc-raiders-cheats/';
export const TITLE_PREFIX = 'Arc Raiders Hacks & Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
