/** Serves ./dist via ASSETS binding (Workers Builds + static assets). */
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    let redirect = false;

    if (url.hostname === 'www.arcraidershack.net') {
      url.hostname = 'arcraidershack.net';
      redirect = true;
    }
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      redirect = true;
    }

    if (redirect) {
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
