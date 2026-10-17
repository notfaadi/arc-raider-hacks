# Arc Raiders Hacks & Cheats

Static Astro site for Arc Raiders PC cheat marketing, guides, and checkout (reseller).

## Setup

```bash
pnpm install
pnpm dev
```

Dev server: `http://localhost:4322` (see `astro.config.mjs`).

## Build & deploy

```bash
pnpm build
pnpm preview
```

Target: Cloudflare Pages or Vercel. Production site URL: `https://arcraidershack.net` (see `astro.config.mjs` `site` and `SITE_DOMAIN` in `src/config/site.ts`).

Optional env:

- `PUBLIC_GA_MEASUREMENT_ID`
- `INDEXNOW_KEY`
- `PUBLIC_ORG_SAME_AS`

## Phase 1 routes (SEO foundation)

| Path | Purpose |
|------|---------|
| `/` | Homepage — primary keyword *arc raiders cheats* |
| `/pricing/` | Buy / USD pricing |
| `/features/` | Feature matrix |
| `/how-to-install/` | HowTo install guide |
| `/faq/` | FAQ hub |
| `/about/` | E-E-A-T |
| `/contact/` | Support contact |
| `/privacy/`, `/terms/`, `/refund-policy/` | Policy |

Sitemap and RSS are generated at build (`@astrojs/sitemap`, `/rss.xml`).

## Add a cheat feature page (Phase 2)

1. Create brief in `content/briefs/` (when folder exists).
2. Add MDX or Astro route under `src/pages/cheats/[slug].astro`.
3. Register SEO in `src/config/pageSeo.ts` and keywords in `src/config/keywords.ts`.
4. Link from `/features/` and product hub.

## Update status / freshness

1. Edit `SITE_CONTENT_LAST_UPDATED` in `src/config/brand.ts`.
2. Update copy in `src/data/marketing/` or product data as needed.
3. Rebuild and deploy.

## Docs

- `docs/DECISIONS.md` — architecture log
- `docs/OPEN-QUESTIONS.md` — blocked on owner
- `docs/CONTENT-SOP.md` — patch-day routine
