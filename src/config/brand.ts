/**
 * Site business config — update when checkout, pricing, or E-E-A-T facts change.
 * See /docs/OPEN-QUESTIONS.md for items still needing owner input.
 */
import { SITE_DOMAIN, SUPPORT_EMAIL } from './site';
import { PRIMARY_CHECKOUT_PATH } from './checkout';

export const BRAND_NAME = 'Arc Raiders Hacks & Cheats';

export const BRAND_URL = `https://${SITE_DOMAIN}`;

/** Reseller: keys fulfilled via tracked checkout partner (not first-party loader host). */
export const BUSINESS_MODEL = 'reseller' as const;

export const CHECKOUT_PARTNER = 'Zadeyo';

export const PRIMARY_BUY_PATH = PRIMARY_CHECKOUT_PATH;

export const CURRENCY = 'USD';

/** Shown on /pricing — must match checkout panel (productPricing.ts). */
export const LISTED_TIER_PRICE = {
  monthlyUsd: 35,
  lifetimeUsd: 150,
  ugcOneTimeUsd: 50,
} as const;

export const TARGET_OS = 'Windows 10 and Windows 11 (64-bit)';

export const SUPPORT_CHANNELS = {
  email: SUPPORT_EMAIL,
  checkoutHelp: PRIMARY_CHECKOUT_PATH,
} as const;

/** Visible on guides; replace in OPEN-QUESTIONS when owner confirms legal name. */
export const DEFAULT_AUTHOR = {
  name: 'Marcus Reid',
  jobTitle: 'Status & compliance editor',
  url: '/about/',
} as const;

/** Sitewide content freshness stamp (ISO date). Bump on patch-day updates. */
export const SITE_CONTENT_LAST_UPDATED = '2026-10-17';
