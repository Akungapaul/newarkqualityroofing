---
phase: 11-ia-routing-canonical-data-url-classification
plan: 03
subsystem: database
tags: [zod, schema, slug-registry, knowledge-base, topical-map, codegen]

# Dependency graph
requires:
  - phase: 07-supporting-articles
    provides: 252 article definitions (ArticleSchema + rawArticles) and the generate-articles-ts.ts codegen
  - phase: 11-02-url-classification
    provides: prebuild codegen + slug-registry / PageTypeSchema baseline this plan extends
provides:
  - "Required 6-value cluster enum on ArticleSchema with all 252 articles deterministically classified"
  - "generate-articles-ts.ts emits the cluster field so a regen reproduces (not wipes) clusters"
  - "Parallel KbArticleContentSchema (>=10 sections + faqs[]) for Phase 13 KB articles"
  - "PageTypeSchema + SlugEntrySchema extended with kb-hub/kb-cluster-hub/kb-article/glossary/hub"
  - "Slug registry registers flat glossary + 6 hub slugs with build-time collision checking"
  - "validate-flat-urls.ts reconciled with a defensive roofing-knowledge-base/ prefix exemption"
affects: [phase-12-question-form-htags, phase-13-knowledge-base, phase-14-roofing-glossary, phase-15-knowledge-graph]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Deterministic cluster derivation (service category + position) shared between articles.ts and its generator"
    - "Parallel content schema (KbArticleContentSchema) instead of relaxing the locked ArticleContentSchema"
    - "Flat-only slug registry: nested KB paths owned by the KB catch-all route, exempted in the flat-URL validator"

key-files:
  created:
    - src/data/article-content/kb-schema.ts
  modified:
    - src/data/articles.ts
    - scripts/generate-articles-ts.ts
    - src/lib/schemas.ts
    - src/data/slug-registry.ts
    - scripts/validate-flat-urls.ts

key-decisions:
  - "Preferred-path: updated the generator (not just articles.ts) so the cluster field survives a regen; articles.ts was regenerated from the updated generator and diffed to prove zero non-cluster drift"
  - "Cluster derivation is deterministic from data the generator already holds (service category + article position) — no hand-classification, no per-article guesswork"
  - "KB content schema is a separate parallel file (KbArticleContentSchema), leaving the locked ArticleContentSchema (.min(2).max(4)) untouched so the 252 short articles keep validating"
  - "Nested KB hub/cluster/article paths kept OUT of the flat registry; only flat glossary + 6 hub slugs registered. Validator gains a defensive KB-prefix exemption for future safety"

patterns-established:
  - "Cluster taxonomy: roof-problems / roof-components / roofing-materials / roofing-process / roofing-costs / local-roofing-knowledge"
  - "Length-agnostic build-time validation: z.array(ArticleSchema).parse() enforces zero-undefined clusters without hardcoding a count"

requirements-completed: [IA-05, KB-01, KB-02]

# Metrics
duration: 9min
completed: 2026-06-03
---

# Phase 11 Plan 03: IA Data-Shape Layer Summary

**Required 6-value `cluster` enum on `ArticleSchema` with all 252 articles deterministically classified (generator-preserved), a parallel `KbArticleContentSchema` (>=10 sections + faqs[]), and `PageTypeSchema`/slug-registry extended with kb-hub/kb-cluster-hub/kb-article/glossary/hub + flat collision checking.**

## Performance

- **Duration:** ~9 min
- **Started:** 2026-06-03T06:09Z
- **Completed:** 2026-06-03
- **Tasks:** 2
- **Files modified:** 6 (1 created, 5 modified)

## Accomplishments
- Added a REQUIRED `cluster: z.enum([...6 values])` to `ArticleSchema`; the existing module-load `z.array(ArticleSchema).parse(rawArticles)` now throws at build if any article lacks a valid cluster. Build passes ⇒ every article (all 252 in file) is classified.
- Updated `generate-articles-ts.ts` to emit both the cluster enum schema block and a per-article `cluster` value, then **regenerated** `articles.ts` from it (T-11-06 mitigated — a regen reproduces clusters instead of wiping them; generator remains source of truth).
- Created parallel `KbArticleContentSchema` with `sections.min(10)` + a `faqs[]` array (FAQPage shape copied from `ServiceContentSchema.faqs`); the locked `ArticleContentSchema` (`.min(2).max(4)`) is left untouched (D-15 / KB-02).
- Extended `PageTypeSchema` with `kb-hub`/`kb-cluster-hub`/`kb-article`/`glossary`/`hub` and added optional `kbArticleId`/`clusterId`/`glossaryId`/`hubId` to `SlugEntrySchema` (types auto-flow via `z.infer`).
- Registered the flat `roofing-glossary` slug + 6 hub slugs through the existing `register()` collision loop (T-11-08 mitigated — build-time collision detection). Fixed stale registry comments (1,323→1,365 combos, 7→9 core pages).
- Reconciled `validate-flat-urls.ts` with a defensive `roofing-knowledge-base/` prefix exemption; nested KB paths are deliberately NOT in the flat registry.

## Task Commits

Each task was committed atomically:

1. **Task 1: Required cluster enum + classify all articles + update generator** - `85595bf` (feat)
2. **Task 2: KB content schema + PageTypeSchema/registry extension + validate-flat-urls reconciliation** - `34b847d` (feat)

**Plan metadata:** _(this commit)_ (docs: complete plan)

## Files Created/Modified
- `src/data/articles.ts` - ArticleSchema gains required 6-value cluster enum; all 252 entries carry a cluster (file regenerated from the updated generator)
- `scripts/generate-articles-ts.ts` - `clusterForServiceArticle()` derivation + cluster emitted in schema block and per-article output
- `src/data/article-content/kb-schema.ts` - NEW parallel `KbArticleContentSchema` (>=10 sections, faqs[])
- `src/lib/schemas.ts` - `PageTypeSchema` + `SlugEntrySchema` extended with the 5 new page types and 4 optional id fields
- `src/data/slug-registry.ts` - flat glossary + 6 hub slugs registered via the collision loop; stale comments fixed
- `scripts/validate-flat-urls.ts` - defensive nested-KB-prefix exemption

## Decisions Made

- **Generator path chosen (preferred):** The cluster field was added by editing the generator and regenerating `articles.ts`, NOT by hand-editing `articles.ts` alone. A temp-file diff confirmed the only differences vs the prior `articles.ts` are the cluster schema block + one `cluster:` line per article — zero unrelated content drift. This keeps `generate-articles-ts.ts` the authoritative source and ensures a future regen does not wipe clusters.
- **Deterministic cluster derivation** (no hand-classification): `position === 2` (the cost-guide article) → `roofing-costs`; `parentType === 'core'` → `local-roofing-knowledge`; `parentType === 'comparison'` → `roofing-materials`; service articles (positions 1 & 3) map by category — repair-maintenance → `roof-problems`, residential/commercial roof-types + energy-solar → `roofing-materials`, components-specialty → `roof-components`, commercial-services + design-consultation + replacement-sub-pages → `roofing-process`.
- **Final cluster histogram** (sums to 252): roofing-materials 102, roofing-costs 63, roofing-process 44, roof-problems 20, roof-components 20, local-roofing-knowledge 3. All six clusters are represented.
- **KB schema as a separate file** (`KbArticleContentSchema`) rather than loosening `ArticleContentSchema` — the lower-risk path that protects the 252 existing short articles' validation.
- **Flat-only registry:** nested KB paths excluded from the registry; only flat glossary + 6 hubs registered. The validator's KB-prefix exemption is purely defensive for later phases.

## 252-vs-253 Discrepancy (noted per plan)

- The spec (IMPLEMENTATION-PLAN / PROJECT roadmap) refers to "fold all **253**" articles, while the actual `src/data/articles.ts` registry contains **252** articles (189 service + 60 comparison + 3 core). The difference traces to Phase 07-01, which excluded 2 services (`silicone-elastomeric-roof-coating`, `roof-replacement-cost`) so 63 (not 65) services × 3 = 189 service articles.
- **The validator is length-agnostic.** Correctness is bound to the registry's real length via `z.array(ArticleSchema).parse(rawArticles)` — neither 252 nor 253 is hardcoded anywhere in this plan's code. If the registry length ever changes, the build-time parse still enforces "every article has a valid cluster" without edits. The 252-in-file vs 253-in-spec gap is therefore recorded but does not affect build integrity.

## Deviations from Plan

None - plan executed exactly as written. Both tasks took the preferred path the plan specified (generator update; parallel KB schema), and no auto-fix (Rule 1–4) was triggered.

## Issues Encountered

None. `npm run build` and `npm run validate:urls` both passed on the first verification run for each task.

## Threat Mitigations Applied

- **T-11-06 (Tampering — regen wiping cluster):** mitigated by emitting the cluster field from `generate-articles-ts.ts`; `articles.ts` was regenerated from the updated generator and diffed to confirm fidelity.
- **T-11-07 (Build integrity — unclassified article):** mitigated by the required zod enum + module-load `z.array(ArticleSchema).parse()` (build throws on any missing/invalid cluster).
- **T-11-08 (Tampering — slug collision):** mitigated by the existing `buildRegistry()` collision loop, which now also guards the 7 new flat slugs (build passes ⇒ no collision).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- **Phase 12** (article titles → questions) can read `cluster` on every article.
- **Phase 13** (Knowledge Base) can author the 44 nested KB articles against `KbArticleContentSchema` and fold the existing articles by `cluster`. The `kb-hub`/`kb-cluster-hub`/`kb-article` page types and the KB catch-all route's own (non-flat) enumeration are the contract for those nested paths.
- **Phase 14** (Glossary) has the flat `roofing-glossary` slug + `glossary` page type registered.
- No blockers. The 252-vs-253 spec gap is documented above and is non-blocking (validation is length-agnostic).

## Self-Check: PASSED

- Created files verified on disk: `src/data/article-content/kb-schema.ts`, `11-03-SUMMARY.md`
- Modified files verified on disk: `articles.ts`, `generate-articles-ts.ts`, `schemas.ts`, `slug-registry.ts`, `validate-flat-urls.ts`
- Commits verified in git log: `85595bf` (Task 1), `34b847d` (Task 2)
- `npm run build` exit 0, `npm run validate:urls` exit 0 (1749 slugs, 0 violations)

---
*Phase: 11-ia-routing-canonical-data-url-classification*
*Completed: 2026-06-03*
