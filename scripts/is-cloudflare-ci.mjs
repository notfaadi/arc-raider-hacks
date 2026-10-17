/** True on Cloudflare Workers Builds / Pages CI. */
export function isCloudflareCi() {
  return (
    process.env.WORKERS_CI === '1' ||
    process.env.CF_PAGES === '1' ||
    process.env.CF_PAGES === 'true' ||
    Boolean(process.env.CF_PAGES_COMMIT_SHA)
  );
}
