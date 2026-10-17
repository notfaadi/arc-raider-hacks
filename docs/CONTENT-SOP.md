# Content operations SOP

## Patch day (within 4 hours of Embark update)

1. Bump `SITE_CONTENT_LAST_UPDATED` in `src/config/brand.ts`.
2. Update status notes (Phase 3 `/status/` when live) and affected product copy.
3. Add `docs/CHANGELOG.md` entry + user-facing `/changelog` when that route ships.
4. Run `pnpm build` and verify IndexNow script output.

## Monthly

- Re-read anti-cheat claims on top 10 URLs; hedge anything unverified.
- Refresh “last updated” on `/pricing/`, `/features/`, `/how-to-install/`.

## Weekly

- One blog post: patch reaction or ban-wave summary with dated headline.

## Word count floors (new pages)

- Feature pages (`/cheats/*`): 800+ words.
- Guides (`/guides/*`): 1,500+ words.
- Comparisons: 900+ words.

## Briefs

- Store page briefs in `/content/briefs/` before writing (folder added in Phase 2).
