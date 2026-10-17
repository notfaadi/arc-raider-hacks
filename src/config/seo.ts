import { DEFAULT_OG_IMAGE } from '../data/media';
import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { keywordsForPath } from './keywords';
import { getBlogSeoEntry, getPageSeoEntry } from './pageSeo';

export interface ResolvedSeo {
  title: string;
  description: string;
  keywords: string;
}

export const SITE_ORIGIN = SITE_URL.replace(/\/$/, '');

export { DEFAULT_OG_IMAGE };

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @dotacheats */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

function trimDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function resolvePageSeo(pathname: string): ResolvedSeo {
  const entry = getPageSeoEntry(pathname);
  if (entry) {
    return {
      title: entry.title,
      description: trimDescription(entry.description),
      keywords: entry.keywords ?? keywordsForPath(pathname),
    };
  }
  return {
    title: t.site.title,
    description: trimDescription(t.site.description),
    keywords: keywordsForPath(pathname),
  };
}

export function resolveBlogPostSeo(slug: string, fallbackTitle: string, fallbackDesc: string): ResolvedSeo {
  const custom = getBlogSeoEntry(slug);
  if (custom) {
    return {
      title: custom.title,
      description: trimDescription(custom.description),
      keywords: custom.keywords ?? keywordsForPath(`/blog/${slug}/`),
    };
  }
  return {
    title: pageTitle(fallbackTitle),
    description: trimDescription(
      `${fallbackDesc} Guides for ARC Raiders cheats, ESP, aimbot, and loot radar on PC.`,
    ),
    keywords: keywordsForPath(`/blog/${slug}/`),
  };
}

export function resolveProductSeo(slug: string, fallbackTitle: string, fallbackDesc: string): ResolvedSeo {
  const path = `/products/arc-raiders-cheats/${slug}/`;
  const entry = getPageSeoEntry(path);
  if (entry) {
    return {
      title: entry.title,
      description: trimDescription(entry.description),
      keywords: entry.keywords ?? keywordsForPath(path),
    };
  }
  return {
    title: pageTitle(fallbackTitle),
    description: trimDescription(fallbackDesc),
    keywords: keywordsForPath(path),
  };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
