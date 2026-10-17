import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const requestUrl = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(requestUrl.pathname);
  if (destination) {
    const extra = requestUrl.searchParams.toString();
    const location = extra
      ? `${destination}${destination.includes('?') ? '&' : '?'}${extra}`
      : destination;
    return context.redirect(location, 302);
  }
  return next();
});
