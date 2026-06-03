---
phase: 11-ia-routing-canonical-data-url-classification
plan: 05
subsystem: routing
tags: [routing, catch-all, scaffold, noindex, knowledge-base, glossary, hubs, audit, sitemap, redirects, seo, ssg]

# Dependency graph
requires:
  - phase: 11-02
    provides: verdict API (isKeep/isNoindex/isRedirect/getComboRedirects) consumed by the audit scripts + generated redirects.generated.mjs (176 301s)
  - phase: 11-03
    provides: PageTypeSchema hub/kb-*/glossary + flat slug-registry (6 hub slugs + glossary) with collision check
  - phase: 11-04
    provides: next.config redirect set (176 generated + 3 hub + flat-roof + www), isKeep-filtered sitemap + KB/glossary segment that the audits assert
provides:
  - "src/app/roofing-knowledge-base/[[...slug]]/page.tsx — optional-catch-all (dynamicParams=false) serving the KB hub + 6 cluster hubs + 44 nested articles = 51 collision-free paths, all noindexed scaffolds"
  - "src/app/roofing-glossary/page.tsx — dedicated glossary route (not the flat [slug] dispatcher) resolving at 200, noindexed scaffold"
  - "6 flat hub scaffold routes (residential-roofing/commercial-roofing/flat-roof-systems/roofing-materials/free-roofing-estimate/our-roofing-process) resolving at 200 as noindexed scaffolds, no placeholder copy"
  - "src/components/templates/HubScaffold.tsx — shared hub scaffold component + buildHubMetadata() helper"
  - "scripts/audit-redirects.ts — build-fail validator: 168+8 unique sources, targets ⊆ keep (no chains), flat-roof+www+hub migrations preserved"
  - "scripts/audit-sitemap.ts — build-fail validator: 255 keep + core/KB/glossary included; 942 noindex + 168 redirected + 6 hub scaffolds + 44 nested KB articles excluded"
  - "package.json — audit:redirects + audit:sitemap npm scripts (no audit:all)"
affects: [phase-13-knowledge-base, phase-14-roofing-glossary, phase-15-internal-linking, phase-17-launch-qa, sitemap, redirects, robots]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Optional-catch-all [[...slug]] with dynamicParams=false + enumerated generateStaticParams ({ slug: [] } for the bare hub index in Next 16.1.6); branch on slug?.length (0=hub, 1=cluster, 2=article)"
    - "Shared scaffold component + buildHubMetadata() helper so each dedicated hub route emits full metadata + one <h1> + robots:{index:false,follow:true} with no duplicated boilerplate"
    - "tsx build-fail validator (model: validate-flat-urls.ts) that re-derives expected membership from the verdict API + data layer and process.exit(1)s on drift — no test framework"

key-files:
  created:
    - src/app/roofing-knowledge-base/[[...slug]]/page.tsx
    - src/app/roofing-glossary/page.tsx
    - src/app/residential-roofing/page.tsx
    - src/app/commercial-roofing/page.tsx
    - src/app/flat-roof-systems/page.tsx
    - src/app/roofing-materials/page.tsx
    - src/app/free-roofing-estimate/page.tsx
    - src/app/our-roofing-process/page.tsx
    - src/components/templates/HubScaffold.tsx
    - scripts/audit-redirects.ts
    - scripts/audit-sitemap.ts
  modified:
    - package.json

key-decisions:
  - "Empty KB hub index path enumerated as { slug: [] } (verified against Next 16.1.6 via npm run build: /roofing-knowledge-base prerenders as the catch-all index alongside the 6 cluster + 44 article paths = 51 SSG paths, no conflicting-route error)."
  - "KB nested paths (cluster + article) live SOLELY in the catch-all route's own enumeration (KB_ARTICLES/CLUSTERS), NOT the flat slug-registry — keeping validate-flat-urls.ts clean and avoiding any [slug] vs catch-all collision."
  - "The 6 flat hubs + glossary ARE registered in the flat slug-registry (Plan 03) AND now have dedicated static route files. The build resolved them collision-free: Next 16 serves the dedicated static segment, and [slug]'s generateStaticParams enumerating those same slugs produced no conflicting-paths error."
  - "Shared HubScaffold component (Claude's discretion per D-12 / RESEARCH A4): each hub route renders its single page heading via HubScaffold (which holds the one <h1>) and sets metadata via buildHubMetadata() — so each rendered hub page has exactly one <h1> and identical noindex,follow gating with zero duplicated markup."
  - "audit-redirects validates COMBO targets (168) against isKeep (the 255 combo keep set) and LEGACY targets (8 -> /roof-replacement) against the FULL slug universe via getPageDataBySlug — because /roof-replacement is a registered Service hub, not a combo-keep slug (matches Plan 02's full-keep-universe chain-check decision). Both also assert the target is not itself a redirect source (no chains)."
  - "audit-sitemap re-derives expected membership from the data layer + verdict API (not a hardcoded literal) and invokes the sitemap default export per generateSitemaps() segment; asserts 638 included URLs exactly (0 missing, 0 extra), 255 keep combos, and that 942 noindex + 168 redirected + 6 flat hubs + all nested KB article paths are absent."
  - "Removed the literal string 'coming soon' even from code comments in the new files so the acceptance grep ('no new route file contains coming soon') and any downstream verifier stay green."

patterns-established:
  - "Pattern: noindexed-scaffold route — full metadata (title/description/openGraph/self-canonical) + robots:{index:false,follow:true} + one <h1>, NO placeholder/content-pending copy, NO placeholder trust values; content lands in a later phase while the URL resolves at 200 now."
  - "Pattern: audit re-derives expected state from the single source of truth (verdict API + data layer) rather than asserting against a frozen literal, so the gate self-maintains as upstream data changes."

requirements-completed: [IA-01, IA-02, IA-03, IA-04]

# Metrics
duration: 7min
completed: 2026-06-03
---

# Phase 11 Plan 05: New Topical-Map Routes + Indexation Audit Gates Summary

**Created the complete resolvable topical-map URL universe — a KB optional-catch-all (hub + 6 cluster hubs + 44 nested articles = 51 collision-free SSG paths), a dedicated glossary route, and 6 flat hub scaffolds, all noindexed scaffolds with full metadata + one h1 and no placeholder copy — plus two build-fail validators (audit:redirects, audit:sitemap) that gate the indexation pipeline against the locked 255/942/168/8 counts.**

## Performance

- **Duration:** ~7 min
- **Started:** 2026-06-03T06:36:42Z
- **Completed:** 2026-06-03
- **Tasks:** 2
- **Files modified:** 12 (11 created, 1 modified)

## Accomplishments

- **KB catch-all (D-10, IA-01/IA-03):** `src/app/roofing-knowledge-base/[[...slug]]/page.tsx` is an optional-catch-all with `export const dynamicParams = false`. `generateStaticParams` enumerates the hub index (`{ slug: [] }`), the 6 cluster hubs (`{ slug: [cluster] }`), and the 44 nested articles (`{ slug: [cluster, articleSlug] }` from BRIEF §16: 8+11+9+8+8) = **51 collision-free paths**. The page awaits `params`, branches on `slug?.length` (0=hub, 1=cluster, 2=article), and emits `robots:{index:false,follow:true}` + self-canonical + one `<h1>` per branch. Nested KB paths live in the route's own enumeration, never the flat registry.
- **Dedicated glossary (D-11, IA-02):** `src/app/roofing-glossary/page.tsx` resolves at 200 via a dedicated static route (NOT the flat `[slug]` dispatcher) with full metadata, one `<h1>`, and `robots:{index:false,follow:true}`.
- **6 hub scaffolds (D-12, IA-04):** `residential-roofing`, `commercial-roofing`, `flat-roof-systems`, `roofing-materials`, `free-roofing-estimate`, `our-roofing-process` each resolve at 200 via a dedicated route rendering the shared `HubScaffold` (one `<h1>`, full metadata via `buildHubMetadata()`, `robots:{index:false,follow:true}`). NO "coming soon" placeholder, NO placeholder trust values (`[License #]`/`0.0`/`5.0`/`500+`); internal links use `next/link`.
- **audit:redirects (INDX-04):** `scripts/audit-redirects.ts` asserts 168 combo + 8 legacy = 176 unique sources, root-relative destinations, combo targets ⊆ keep (no chains), legacy targets resolve to registered non-redirect pages, and flat-roof + www + 3 hub migrations + `trailingSlash:false` present in `next.config.ts`. `process.exit(1)` on any violation.
- **audit:sitemap (INDX-05/INDX-03):** `scripts/audit-sitemap.ts` re-derives expected membership from the verdict API + data layer and asserts 255 keep + indexable core + services/cities/comparisons/articles + KB hub/6 clusters/glossary INCLUDED (638 URLs, 0 missing/extra), and 942 noindex + 168 redirected + 6 flat hub scaffolds + 44 nested KB articles EXCLUDED. `process.exit(1)` on any violation.
- **package.json:** wired `audit:redirects` + `audit:sitemap` (matching the existing `tsx` audit/validate precedent). Did NOT add `audit:all` (Phase 17).

## Task Commits

Each task was committed atomically:

1. **Task 1: KB catch-all + dedicated glossary + 6 hub scaffolds** - `29cb190` (feat)
2. **Task 2: audit:redirects + audit:sitemap build-fail validators + package.json wiring** - `6e55179` (feat)

**Plan metadata:** committed separately (docs: complete plan)

## Files Created/Modified

- `src/app/roofing-knowledge-base/[[...slug]]/page.tsx` - Optional-catch-all; `dynamicParams=false`; `generateStaticParams` = hub + 6 clusters + 44 articles (51 paths); per-branch metadata + one `<h1>` + `robots:{index:false,follow:true}`; KB enumeration owned by the route.
- `src/app/roofing-glossary/page.tsx` - Dedicated static glossary route; full metadata + one `<h1>` + noindex,follow scaffold.
- `src/app/{residential-roofing,commercial-roofing,flat-roof-systems,roofing-materials,free-roofing-estimate,our-roofing-process}/page.tsx` - 6 dedicated hub routes; each renders `HubScaffold` + sets `buildHubMetadata()`.
- `src/components/templates/HubScaffold.tsx` - Shared hub scaffold (the single `<h1>`, intro, CTA links via `next/link`) + `buildHubMetadata()` helper (title/description/openGraph/self-canonical + `robots:{index:false,follow:true}`).
- `scripts/audit-redirects.ts` - Redirect pipeline validator (168+8, unique, ⊆ keep, no chains, preserved redirects).
- `scripts/audit-sitemap.ts` - Sitemap membership validator (255 keep + core/KB/glossary in; noindex/redirected/scaffolds out).
- `package.json` - `audit:redirects` + `audit:sitemap` scripts.

## Decisions Made

- **`{ slug: [] }` for the bare KB hub index:** RESEARCH A1 flagged `{ slug: undefined }` vs `{ slug: [] }` as a Next-version question. Verified against Next 16.1.6 via `npm run build`: `{ slug: [] }` prerenders `/roofing-knowledge-base` as the catch-all index, with the build report showing the route's 51 paths and no conflicting-route error.
- **No `[slug]` vs catch-all collision:** the 6 hubs + glossary are flat slugs registered in Plan 03's slug-registry AND now have dedicated static route files. Next 16 resolved them collision-free — the dedicated static segments take precedence and `[slug]`'s `generateStaticParams` enumerating the same slugs produced no error. The build output lists `/roofing-materials`, `/roofing-glossary`, etc. as standalone `○ (Static)` routes, distinct from `● /[slug]`.
- **Legacy-target chain check uses the full slug universe:** the 8 legacy redirects target `/roof-replacement` (a Service hub, NOT a combo-keep slug), so `audit-redirects` validates them via `getPageDataBySlug` (full universe), consistent with Plan 02's decision; combo targets (168) use `isKeep` (255 combo keep). Both assert the target is not itself a redirect source.
- **Shared `HubScaffold` (D-12 discretion):** chose a single component holding the one `<h1>` over per-page bodies — guarantees identical noindex gating and exactly one heading per rendered page with zero duplicated markup.

## Deviations from Plan

None - plan executed exactly as written. Both tasks took the patterns the plan specified (optional-catch-all modeled on `[slug]`, dedicated glossary modeled on `thank-you`, shared scaffold per D-12 discretion, audits modeled on `validate-flat-urls.ts`). No auto-fix (Rule 1-4) was triggered; all verifications passed on the first run for each task.

## Known Stubs

The new routes are **intentional, documented scaffolds**, not undisclosed stubs:

| Route | Status | Resolved by |
|-------|--------|-------------|
| `/roofing-knowledge-base/` + 6 cluster hubs + 44 nested articles | noindex,follow scaffold (resolves 200) | Phase 13 (authored KB content) |
| `/roofing-glossary/` | noindex,follow scaffold (resolves 200) | Phase 14 (25 DefinedTerm entries + DefinedTermSet schema) |
| 6 flat hubs (residential-roofing, commercial-roofing, flat-roof-systems, roofing-materials, free-roofing-estimate, our-roofing-process) | noindex,follow scaffold, excluded from sitemap | later content phase |

This is the plan's explicit purpose (D-10/D-11/D-12): the routing universe must RESOLVE now (scaffolded, noindexed where content is pending) so it is complete; content authoring is downstream. The 6 flat hubs are excluded from the sitemap (audit:sitemap enforces this); the KB IA pages + glossary ARE in the sitemap per the Plan 04 contract (permanent topical-map IA). All scaffolds emit `robots:{index:false,follow:true}`, so none can be indexed before content lands. No placeholder/"content-pending" copy and no placeholder trust values render anywhere.

## Threat Mitigations Applied

- **T-11-12 (scaffold pages indexed before content lands):** every new route emits `robots:{index:false,follow:true}`; `audit:sitemap` asserts the 6 flat hub scaffolds + 44 nested KB articles are excluded from the sitemap. Verified green.
- **T-11-13 (open redirect / non-keep redirect target):** `audit:redirects` asserts every destination is root-relative (`/`-prefixed) and that combo targets ⊆ keep / legacy targets are registered pages, with a no-chain check. Verified green.
- **T-11-14 (route collision: KB prefix vs flat `[slug]` / renamed core slug):** `dynamicParams=false` + distinct path prefixes + Plan-03 `buildRegistry()` collision check; `npm run build` succeeded with no conflicting-paths error (51 KB paths + glossary + 6 hubs all distinct).

## Verification Evidence

- `npm run build` exits **0** — 51 KB paths (hub + 6 clusters + 44 articles), `/roofing-glossary`, and the 6 hubs all compile collision-free as static/SSG routes; build report shows `/roofing-knowledge-base/[[...slug]]` with `[+48 more paths]` and the 6 hubs + glossary as `○ (Static)`.
- `npm run audit:redirects` exits **0** — 176 generated (168 combo + 8 legacy), all unique sources, targets ⊆ keep (no chains), flat-roof + www + hub migrations preserved.
- `npm run audit:sitemap` exits **0** — 638 sitemap URLs = expected included set exactly (0 missing, 0 extra); 255 keep combos; 1,116 sampled exclusions (942 noindex + 168 redirected + 6 flat hubs) all absent; no nested KB article URL leaked in.
- Grep checks on the 8 new route files + `HubScaffold`: exactly one rendered `<h1>` per rendered page; no "coming soon"; no placeholder trust literals (`[License #]`/`0.0`/`5.0`/`500+`); no raw `<a href="/` internal links.

## User Setup Required

None - no external service configuration required. (Sitemap resubmission / GSC monitoring is Phase 17, not this plan.)

## Next Phase Readiness

- **Phase 13** authors the KB hub + 6 cluster hub content + the 44 nested KB articles against the now-resolving paths (and the `KbArticleContentSchema` from Plan 03), folding the 252 existing articles under clusters; when content lands, the per-branch `robots` scaffold gate is flipped to indexable.
- **Phase 14** authors the 25 glossary terms + DefinedTermSet/DefinedTerm schema into the resolving `/roofing-glossary/` route.
- **Phase 17** can run `audit:redirects` + `audit:sitemap` as part of the launch QA gate (and will own the `audit:all` aggregator + sitemap resubmission).
- No blockers. `npm run build`, `npm run audit:redirects`, and `npm run audit:sitemap` are all green.

## Self-Check: PASSED

- FOUND: src/app/roofing-knowledge-base/[[...slug]]/page.tsx
- FOUND: src/app/roofing-glossary/page.tsx
- FOUND: src/app/residential-roofing/page.tsx
- FOUND: src/app/commercial-roofing/page.tsx
- FOUND: src/app/flat-roof-systems/page.tsx
- FOUND: src/app/roofing-materials/page.tsx
- FOUND: src/app/free-roofing-estimate/page.tsx
- FOUND: src/app/our-roofing-process/page.tsx
- FOUND: src/components/templates/HubScaffold.tsx
- FOUND: scripts/audit-redirects.ts
- FOUND: scripts/audit-sitemap.ts
- FOUND: .planning/phases/11-ia-routing-canonical-data-url-classification/11-05-SUMMARY.md
- FOUND commit: 29cb190 (Task 1)
- FOUND commit: 6e55179 (Task 2)
- npm run build exit 0; npm run audit:redirects exit 0; npm run audit:sitemap exit 0

---
*Phase: 11-ia-routing-canonical-data-url-classification*
*Completed: 2026-06-03*
