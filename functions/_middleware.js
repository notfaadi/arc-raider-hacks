/** Cloudflare Pages — canonical host (www → apex). Requires www on the Pages custom domains list. */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.arcraidershack.net') {
    url.hostname = 'arcraidershack.net';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
