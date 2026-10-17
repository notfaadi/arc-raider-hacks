# Architecture decisions (append-only)

## 2026-10-17 — Phase 1 SEO foundation

- **Stack:** Keep existing Astro 7 + Tailwind v4 repo rather than greenfield Astro 5 rewrite. Rationale: shipping beats spec version pins; static output unchanged.
- **Content format:** Phase 1 pages use typed TS content (`src/data/marketing/`) + Astro SSG, not MDX collections yet. MDX migration deferred to Phase 2 feature URLs.
- **Business model:** Documented as reseller via Zadeyo checkout (`src/config/brand.ts`); prices mirror `productPricing.ts` ($35/mo, $150 lifetime).
- **URLs:** Added brief Phase 1 routes at root (`/pricing/`, `/features/`, `/how-to-install/`, `/contact/`, `/refund-policy/`). Legacy `/products/*` hub retained for existing internal links.
- **FAQ UX:** Marketing pages use native `<details>` for no-JS readability; product hub keeps Starwind accordion.
- **Schema:** Extended `softwareApplicationSchema`, added `howToSchema`; pages pass graphs via existing `BaseLayout` `jsonLd` prop (see `Schema.astro` wrapper).
