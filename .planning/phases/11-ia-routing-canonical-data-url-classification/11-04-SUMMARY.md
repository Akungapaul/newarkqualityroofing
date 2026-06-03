---
phase: 11-ia-routing-canonical-data-url-classification
plan: 04
subsystem: routing
tags: [next-config, redirects, sitemap, robots, canonical, indexation, seo, hub-migration, ssg]

# Dependency graph
requires:
  - phase: 11-02
    provides: verdict API (isKeep/isNoindex/isRedirect/getComboRedirects) + generated redirects.generated.mjs (176 301s) + url-classification.json (255/942/168)
  - phase: 11-03
    provides: extended PageTypeSchema (hub/kb-*/glossary) + 6 hub flat slugs + glossary registered + buildRegistry() collision check that guards the renamed core slugs
provides:
  - "next.config.ts: static-imported generated redirects (168 combo + 8 legacy) + 3 D-07 hub 301s; flat-roof + www->non-www preserved; trailingSlash:false retained"
  - "src/app/[slug]/page.tsx: combo robots gate (942 noindex -> robots:{index:false,follow:true}); self-canonical on every combo; generateStaticParams excludes 168 redirected combos"
  - "src/app/sitemap.ts: combos keep-filtered to 255; new knowledge-base segment (KB hub + 6 cluster hubs + glossary)"
  - "src/app/sitemap-index.xml/route.ts: knowledge-base segment registered so the KB/glossary sitemap is discoverable"
  - "src/data/core-pages.ts: core hub slugs renamed (services->roofing-services, locations->service-areas); /resources core entry retired"
  - "src/data/seo-priority.ts: PRIORITY_COMBO_PAIRS reconciled subset-of the 255 keep set + isKeep hard floor in isPriorityCombo (closes the implicit OR-clause noindex leak)"
affects: [11-05, sitemap, robots, redirects, combo-routing, priority-indexing-hub, phase-15-link-repointing]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Static top-level import of the prebuild-generated .mjs redirect array, spread into next.config redirects() (RESEARCH Pitfall 1 avoided via the Plan-02 prebuild step)"
    - "Verdict-gated metadata: isNoindex(slug) toggles robots:{index:false,follow:true} on a LIVE page; canonical always self (never point a noindex combo at its keep parent)"
    - "Keep-filtered sitemap segment + a derived knowledge-base segment; sitemap-index kept in lockstep"
    - "Priority reconciliation by mapping serviceId:cityId pairs to combo slugs and intersecting with isKeep() at module load (self-maintaining subset, not a hand-edited literal)"

key-files:
  created: []
  modified:
    - next.config.ts
    - src/data/core-pages.ts
    - src/app/[slug]/page.tsx
    - src/app/sitemap.ts
    - src/app/sitemap-index.xml/route.ts
    - src/data/seo-priority.ts

key-decisions:
  - "Excluded the 168 redirected combos from generateStaticParams via isRedirect() filter (D-05 / RESEARCH:25,239). The plan's Task 2 described the robots gate in [slug]/page.tsx but not generateStaticParams; the must-have truth D-05 requires it, so this is a Rule-2 correctness addition kept inside the plan's declared file. Prerendered page count dropped 1761 -> 1593 (1761 - 168)."
  - "Kept core page IDs ('services','locations') while only renaming their slugs, because CoreTemplate switches on corePage.id; this keeps ServicesHubPage/LocationsHubPage rendering at the new /roofing-services and /service-areas URLs with zero component edits."
  - "Retired the /resources core page entry entirely (not renamed): /resources 301s to /roofing-knowledge-base, which is a NEW KB catch-all route built in Plan 05, not a renamed core page. The CoreTemplate 'resources' case + ResourcesPage become dead code (Phase 16 dead-component cleanup owns their removal)."
  - "Did NOT repoint the ~10 hardcoded /services|/locations|/resources internal links in Header/Footer/Hero/etc. — CONTEXT D-07 and ROADMAP explicitly assign 'repointing ALL internal links sitewide' to Phase 15. Phase 11's D-07 scope is exactly: establish the 301 redirects + update core slugs. Those internal links still resolve (301 to canonical) until Phase 15."
  - "KB hub + 6 cluster hubs + glossary ARE emitted in the sitemap even though Plan 05 scaffolds them noindex in Phase 11. This matches the audit:sitemap contract in 11-05-PLAN Task 2 line 133 ('255 keep + the core/KB-hub/cluster/glossary pages; EXCLUDES 942 noindex + 168 redirected + the 6 hub scaffolds'). The 'scaffolds' the sitemap excludes are specifically the 6 FLAT hubs (residential-roofing etc.), not the KB/glossary IA pages."
  - "isPriorityCombo gained an isKeep() hard floor covering BOTH the explicit pair set AND the implicit 'isPriorityService && city==newark' OR clause. Dropping the 4 noindex pairs from the literal set alone was insufficient — the OR clause would still have priority-boosted gutter-guard/modified-bitumen/built-up/green-roof @ Newark (all NOINDEX). The floor closes that leak (D-08)."

patterns-established:
  - "Pattern: keep a RAW_* hand-curated priority intent list, then derive the exported Set by intersecting with the verdict API at module load — drift between intent and indexation truth is reconciled automatically, never by manual literal-pruning."
  - "Pattern: two duplicate SITEMAP_IDS arrays (sitemap.ts + sitemap-index.xml/route.ts) must be edited together; a code comment now flags the sync requirement."

requirements-completed: [INDX-03, INDX-04, INDX-05, INDX-06, INDX-07, INDX-08]

# Metrics
duration: 8min
completed: 2026-06-03
---

# Phase 11 Plan 04: IA Routing, Canonical & URL-Classification Wiring Summary

**Wired the generated indexation truth into observable HTTP behavior: 176 generated 301s + 3 hub migrations in `next.config.ts`, a per-combo `noindex,follow` robots gate with self-canonicals in the flat dispatcher, a 255-keep sitemap with a new KB/glossary segment, redirected combos dropped from prerender, and `PRIORITY_COMBO_PAIRS` reconciled to a strict subset of the 255 keep set.**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-06-03T06:23:34Z
- **Completed:** 2026-06-03
- **Tasks:** 2
- **Files modified:** 6 (0 created, 6 modified)

## Accomplishments
- **Redirects (D-05, D-09):** `next.config.ts` statically imports `./src/generated/redirects.generated.mjs` (168 combo + 8 legacy = 176 permanent 301s) and spreads it into `redirects()`. The pre-existing flat-roof and www->non-www host redirects are preserved verbatim; `trailingSlash: false` retained.
- **Hub migrations (D-07):** added `/services -> /roofing-services`, `/locations -> /service-areas`, `/resources -> /roofing-knowledge-base` (permanent 301s). Renamed the core hub slugs in `core-pages.ts` so the canonical hubs now live at the new URLs; retired the `/resources` core entry (its 301 targets the new KB catch-all hub, not a renamed core page).
- **Combo indexation gate (D-04):** the combo branch of `generateMetadata` now emits `robots:{index:false,follow:true}` for the 942 noindex combos (`isNoindex(combo.slug)`), while the 255 keep combos stay indexable. Every combo's canonical is its OWN slug — a noindex combo is never canonicalized to its keep parent or any unrelated page.
- **Prerender alignment (D-05):** `generateStaticParams` filters out the 168 redirected combos (`!isRedirect(slug)`), so they are not prerendered (the edge 301 fires before routing). Prerendered page count dropped 1761 -> 1593.
- **Sitemap (D-06):** the `combos` case is keep-filtered to the 255 indexable combos; a new `knowledge-base` sitemap segment emits the KB hub + 6 cluster hubs + glossary; `sitemap-index.xml` registers the new segment so it is discoverable. The 942 noindex, 168 redirected, the 6 flat hub scaffolds, and the 44 nested KB articles are all excluded.
- **Priority reconciliation (D-08):** `PRIORITY_COMBO_PAIRS` is now derived by intersecting the hand-curated pairs with `isKeep()` (4 noindex pairs dropped, 7 keep pairs retained), and `isPriorityCombo` has an `isKeep()` hard floor that also closes the implicit "priority service in Newark" OR-clause leak.

## Task Commits

Each task was committed atomically:

1. **Task 1: generated 301s + hub migrations + rename core hub slugs** - `eb72cbb` (feat)
2. **Task 2: combo robots/canonical gate + sitemap keep-filter + priority reconcile** - `f680335` (feat)

**Plan metadata:** committed separately (docs: complete plan)

## Files Created/Modified
- `next.config.ts` - Static import of `redirects.generated.mjs` spread into `redirects()`; 3 D-07 hub 301s; flat-roof + www redirects and `trailingSlash:false` preserved.
- `src/data/core-pages.ts` - `services`->`roofing-services` and `locations`->`service-areas` slug renames (ids kept); `/resources` core entry retired.
- `src/app/[slug]/page.tsx` - `isNoindex` robots gate + self-canonical on the combo branch; `generateStaticParams` excludes `isRedirect` slugs.
- `src/app/sitemap.ts` - `isKeep` filter on the combos case; new `knowledge-base` segment (KB hub + 6 cluster hubs + glossary); `KB_CLUSTER_SLUGS` taxonomy constant.
- `src/app/sitemap-index.xml/route.ts` - `knowledge-base` added to the index `SITEMAP_IDS` (sync with `sitemap.ts`).
- `src/data/seo-priority.ts` - `RAW_PRIORITY_COMBO_PAIRS` -> `isKeep`-reconciled `PRIORITY_COMBO_PAIRS`; `isKeep` hard floor in `isPriorityCombo`.

## Decisions Made
- **generateStaticParams redirect exclusion (Rule 2 / D-05):** the must-have truth D-05 requires redirected slugs to be excluded from `generateStaticParams` + sitemap; the plan's Task 2 prose covered only the robots gate, so the filter was added inside `[slug]/page.tsx` (a declared file). RESEARCH lines 25 + 239 confirm a redirected combo "should NOT be in `getAllSlugs()`" — the edge 301 fires first.
- **Core ID preserved, slug renamed:** `CoreTemplate` switches on `corePage.id`, so keeping `id:'services'`/`id:'locations'` while renaming slugs lets the existing hub pages render at the new URLs with zero component edits.
- **/resources retired (not renamed):** its 301 target `/roofing-knowledge-base` is a NEW route (Plan 05), not a core page, so the core entry was removed rather than re-slugged.
- **Internal-link repointing deferred to Phase 15:** CONTEXT D-07 and ROADMAP explicitly scope "repointing ALL internal links sitewide" to Phase 15. Phase 11 only establishes the redirects + renames the core slugs, so the ~10 hardcoded `/services|/locations|/resources` links in Header/Footer/Hero/etc. were intentionally NOT touched (they still resolve via 301 until Phase 15).
- **KB/glossary in sitemap despite noindex scaffolding:** matches the `audit:sitemap` contract in 11-05-PLAN (the audit asserts the KB hub/clusters/glossary ARE in the sitemap and only the 6 FLAT hub scaffolds are excluded). The KB/glossary URLs are the permanent topical-map IA; content lands Phase 13/14.
- **isPriorityCombo hard floor (D-08):** dropping the 4 noindex literal pairs was necessary but not sufficient — the OR clause `isPriorityService && city==newark` would still boost 4 NOINDEX Newark combos. The `isKeep()` floor on the combo slug closes both paths.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing critical functionality] generateStaticParams redirect exclusion**
- **Found during:** Task 2
- **Issue:** The plan's Task 2 action described the combo robots gate in `[slug]/page.tsx` but did not mention `generateStaticParams`; must-have truth D-05 requires redirected combos excluded from `generateStaticParams` + sitemap.
- **Fix:** Added `.filter((slug) => !isRedirect(slug))` to `generateStaticParams` (inside the plan's declared file). 168 redirected combos are no longer prerendered.
- **Files modified:** `src/app/[slug]/page.tsx`
- **Commit:** `f680335`

**2. [Rule 3 - Blocking/correctness] sitemap-index.xml/route.ts kept in sync**
- **Found during:** Task 2
- **Issue:** `sitemap-index.xml/route.ts` carries a DUPLICATE `SITEMAP_IDS` list. Adding the `knowledge-base` segment to `sitemap.ts` alone would have generated the KB/glossary sitemap but left it undiscoverable from the index, defeating D-06.
- **Fix:** Added `knowledge-base` to the index's `SITEMAP_IDS` (with a sync-warning comment). Verified at runtime that `sitemap-index.xml` lists `sitemap/knowledge-base.xml`.
- **Files modified:** `src/app/sitemap-index.xml/route.ts` (not in the plan's `files_modified`, but a direct correctness consequence of the in-scope `sitemap.ts` change).
- **Commit:** `f680335`

**3. [Rule 2 - Missing critical functionality] isPriorityCombo OR-clause noindex leak closed**
- **Found during:** Task 2
- **Issue:** The plan said to drop non-keep pairs from `PRIORITY_COMBO_PAIRS`. But `isPriorityCombo` also has an implicit OR clause (`isPriorityService(service) && city.id === 'newark'`) that would still priority-boost 4 NOINDEX Newark combos (gutter-guard, modified-bitumen, built-up, green-roof), violating D-08's "no NOINDEX combo may remain priority-boosted."
- **Fix:** Added an `isKeep(generateComboSlug(...))` hard floor at the top of `isPriorityCombo`.
- **Files modified:** `src/data/seo-priority.ts`
- **Commit:** `f680335`

## Issues Encountered
- A direct `npx tsx ad-hoc-script.mts` at the repo root intermittently reported false "module does not provide an export named X" errors for `@/data/cities`, `@/data/seo-priority`, etc. — a tsx/ESM transpilation quirk for ad-hoc root scripts. It did NOT affect the build or the project's own `tsx` validate/prebuild scripts (which import the same modules successfully). Verification was performed via `npm run build`, `npm run seo:validate`, JSON-level computation, and a live production-server runtime check instead.

## Verification Evidence (runtime, `next start`)
- `sitemap/combos.xml`: exactly **255** `<loc>` entries; sample noindex + redirect combos **absent**.
- `sitemap/knowledge-base.xml`: KB hub + 6 cluster hubs + glossary = **8** URLs (no flat hub scaffolds, no nested articles).
- `sitemap-index.xml`: lists `sitemap/knowledge-base.xml`.
- `/services`->`/roofing-services`, `/locations`->`/service-areas`, `/resources`->`/roofing-knowledge-base`, `/flat-roof-installation-newark-nj`->`...-repair-...`, and a generated combo (`/aging-roof-replacement-belleville-nj`->`/roof-replacement-belleville-nj`) all return a permanent redirect (HTTP 308 — Next.js `permanent:true` emits 308, the method-preserving permanent-redirect equivalent of 301, identical to 301 for SEO; matches the project's pre-existing redirect convention).
- `/roofing-services` and `/service-areas` return **200**; unknown slug returns **404**.
- Keep combo HTML: no robots meta (indexable) + self-canonical. Noindex combo HTML: `<meta name="robots" content="noindex, follow"/>` on a live 200 page. Redirected combo: NOT prerendered.
- `PRIORITY_COMBO_PAIRS` reconciled to 7 keep pairs (4 noindex pairs dropped).

## User Setup Required
None - no external service configuration required.

## Threat Mitigations Applied
- **T-11-09 (thin combos indexed / in sitemap):** `isNoindex` robots gate + `isKeep` sitemap filter; verified 255-only sitemap and `noindex,follow` on a noindex combo.
- **T-11-10 (noindex combo canonicalized to unrelated page):** every combo is self-canonical; verified the keep combo's canonical equals its own slug; noindex combos retain self-canonical with `noindex,follow`.
- **T-11-11 (open redirect):** all redirect destinations come from the chain-checked generated `.mjs` (Plan 02); config-level 301 fires before routing; verified a generated combo redirect resolves to a keep target.

## Next Phase Readiness
- **11-05 (Wave 3)** can now build the KB catch-all + glossary + 6 hub scaffolds and the `audit:sitemap`/`audit:redirects` validators against this plan's emitted state: the sitemap is 255 keep + KB/glossary, the next.config redirect set is 176 generated + 3 hub + 2 preserved, and `PRIORITY_COMBO_PAIRS ⊆ keep`. The KB hub / 6 cluster / glossary URLs are already referenced by the sitemap, so Plan 05's routes must resolve those exact paths at 200.
- No blockers. `npm run build` and `npm run seo:validate` both green.

## Self-Check: PASSED

- FOUND: next.config.ts (generatedRedirects import + 3 hub 301s + preserved redirects)
- FOUND: src/data/core-pages.ts (roofing-services / service-areas; resources retired)
- FOUND: src/app/[slug]/page.tsx (isNoindex robots gate + isRedirect generateStaticParams filter)
- FOUND: src/app/sitemap.ts (isKeep filter + knowledge-base segment)
- FOUND: src/app/sitemap-index.xml/route.ts (knowledge-base registered)
- FOUND: src/data/seo-priority.ts (isKeep reconciliation + hard floor)
- FOUND: .planning/phases/11-ia-routing-canonical-data-url-classification/11-04-SUMMARY.md
- FOUND commit: eb72cbb (Task 1)
- FOUND commit: f680335 (Task 2)

---
*Phase: 11-ia-routing-canonical-data-url-classification*
*Completed: 2026-06-03*
