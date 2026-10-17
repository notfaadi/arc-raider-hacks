/** Serves ./dist via ASSETS binding (Workers Builds + static assets). */
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.arcraidershack.net') {
      url.hostname = 'arcraidershack.net';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
