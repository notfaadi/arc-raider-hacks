/** Serves ./dist via ASSETS binding so `wrangler deploy` succeeds on Cloudflare Pages CI. */
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
