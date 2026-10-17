/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/contact/'],
  ['/privacy-policy', '/privacy/'],
  ['/privacy-policy/', '/privacy/'],
  ['/pricing', '/pricing/'],
  ['/features', '/features/'],
  ['/how-to-install', '/how-to-install/'],
  ['/refund-policy', '/refund-policy/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/arc-raiders-cheats/'],
  ['/cheats/', '/products/arc-raiders-cheats/'],
  ['/cheats/lite', '/products/arc-raiders-cheats/'],
  ['/cheats/lite/', '/products/arc-raiders-cheats/'],
  ['/cheats/pro', '/products/arc-raiders-cheats/'],
  ['/cheats/pro/', '/products/arc-raiders-cheats/'],
  ['/cheats/elite', '/products/arc-raiders-cheats/elite/'],
  ['/cheats/elite/', '/products/arc-raiders-cheats/elite/'],
  ['/cheats/compare', '/blog/dota-2-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/dota-2-lite-vs-pro/'],
  ['/products/arc-raiders-cheats/utilities', '/products/arc-raiders-cheats/utilities/'],
  ['/products/arc-raiders-cheats', '/products/arc-raiders-cheats/'],
  ['/products/arc-raiders-cheats/account-recovery', '/products/arc-raiders-cheats/ugc/'],
  ['/products/arc-raiders-cheats/account-recovery/', '/products/arc-raiders-cheats/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
