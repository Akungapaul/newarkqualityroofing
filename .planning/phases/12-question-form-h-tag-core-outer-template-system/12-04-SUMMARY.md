---
phase: 12-question-form-h-tag-core-outer-template-system
plan: 04
subsystem: seo
tags: [question-form-headings, article-titles, generate-articles-ts, heading-config, h1, htag, kb-03]

# Dependency graph
requires:
  - phase: 12-01
    provides: src/data/heading-config.ts (single source of truth for question-form strings + in-scope core/hub H1s) and the build-failing scripts/audit-headings.ts whose static pass enforces 252 article titles
  - phase: 11-03
    provides: scripts/generate-articles-ts.ts (the generator, now emitting the cluster field) and the generated src/data/articles.ts registry
provides:
  - All 252 article titles rewritten to cluster-keyed question form via the generator's title patterns (KB-03 / D-07 / D-12)
  - articles.ts regenerated from the edited generator with slugs byte-identical and every metaTitle still <=60
  - Question-form H1s on the 4 in-scope core pages (ServicesHubPage, LocationsHubPage, ContactPage, AboutPage) sourced from HEADING_CONFIG.core (D-10, HTAG-01/03)
  - The 6 noindex hub scaffold routes repointed to source their H1 from HEADING_CONFIG.hub[slug] (single-source, audit reads the same strings)
affects: [12-05, 13-knowledge-base]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Article title patterns rewritten in the generator only; articles.ts is regenerated, never hand-edited (D-12)"
    - "metaTitle decoupled from the on-page H1 via a per-branch metaTitleBase so the long question lives only in article.title and metaTitle stays a concise <=60-char SERP string"
    - "Core/hub page H1s sourced from HEADING_CONFIG so templates and the static audit read one source"

key-files:
  created: []
  modified:
    - scripts/generate-articles-ts.ts
    - src/data/articles.ts
    - src/components/pages/ServicesHubPage.tsx
    - src/components/pages/LocationsHubPage.tsx
    - src/components/pages/ContactPage.tsx
    - src/components/pages/AboutPage.tsx
    - src/app/residential-roofing/page.tsx
    - src/app/commercial-roofing/page.tsx
    - src/app/flat-roof-systems/page.tsx
    - src/app/roofing-materials/page.tsx
    - src/app/free-roofing-estimate/page.tsx
    - src/app/our-roofing-process/page.tsx

key-decisions:
  - "Article registry holds 252 (not 253); the static audit and verify assert over articles.length, never a hardcoded count"
  - "Replacement-sub default title varied to 'What Should You Know About [shortName] Roofing?' to avoid colliding with the components-specialty 'What Should You Know About [shortName]?' branch"
  - "3 core/homepage article titles rewritten to: 'What Should NJ Homeowners Know About Roofing?', 'How Do You Find a Reliable Roofer in Essex County?', 'What Are NJ Roofing Licensing and Insurance Requirements?'"
  - "Added a per-branch metaTitleBase in serviceDecisionArticle so the question-form title does not leak into the metaTitle (kept the 53 decision-article metaTitles byte-identical to pre-edit)"

patterns-established:
  - "Generator-only title rewrites + regenerate: edit the ~12 title literals, run npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts"
  - "H1 strings on in-scope core/hub pages are sourced from HEADING_CONFIG (no inline literals) so the audit reads the same source the page renders"

requirements-completed: [KB-03, HTAG-01, HTAG-03]

# Metrics
duration: ~12min
completed: 2026-06-03
---

# Phase 12 Plan 04: Article Titles + Core/Outer H1s to Question Form Summary

**Rewrote all 252 article titles to unique cluster-keyed question form via the generator (slugs byte-identical, metaTitles <=60) and converted the 4 in-scope core-page H1s plus the 6 noindex hub-scaffold H1s to question form sourced from HEADING_CONFIG.**

## Performance

- **Duration:** ~12 min
- **Started:** 2026-06-03T16:16Z (approx)
- **Completed:** 2026-06-03T16:28Z
- **Tasks:** 2
- **Files modified:** 12

## Accomplishments

- Edited the 12 title-pattern literals in `scripts/generate-articles-ts.ts` to question form (signs / cost / contractor / pros-cons / guide / incentives / business / expect / comparison / recommend / 3 core), preserving each distinct angle.
- Regenerated `src/data/articles.ts` from the edited generator: 252 entries, every title a unique question ending in "?", **slugs byte-identical** to pre-edit, every metaTitle <=60 (Zod re-parse passed during generation).
- Converted the 4 in-scope core-page H1s (`/roofing-services`, `/service-areas`, `/contact`, `/about`) to the `HEADING_CONFIG.core.*` question strings.
- Repointed the 6 noindex hub-scaffold routes to source their H1 from `HEADING_CONFIG.hub[slug]` (single source for templates + audit); scaffolds keep only the H1 change (full hub tree is Phase 13).
- Confirmed the build-failing `audit:headings` static pass reports **0 violations** over the 252 article titles ("count NOT hardcoded"); the rendered DOM pass is correctly skipped mid-wave (no `.next` build — enforced in 12-05).

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite generator title patterns to question form + regenerate articles.ts** - `4783d5b` (feat)
2. **Task 2: Question-form H1s on in-scope core/hub pages + 6 noindex hub scaffolds** - `4c94ee0` (feat)

_Note: Plan declared `tdd="true"` on both tasks, but this phase has no unit-test framework (per RESEARCH §Validation Architecture — validation is the script-based `audit:headings` gate, not jest/vitest). The audit script IS the test: each task was verified against the static audit pass + the Task-1 verify harness rather than producing separate RED/GREEN test commits. See TDD Gate Compliance below._

## Files Created/Modified

- `scripts/generate-articles-ts.ts` - Rewrote the 12 article title patterns to question form; added per-branch `metaTitleBase` in `serviceDecisionArticle` to keep metaTitle decoupled from the new question H1.
- `src/data/articles.ts` - Regenerated; 252 question-form titles, slugs unchanged, metaTitles unchanged.
- `src/components/pages/ServicesHubPage.tsx` - H1 now `{HEADING_CONFIG.core['roofing-services']}`.
- `src/components/pages/LocationsHubPage.tsx` - H1 now `{HEADING_CONFIG.core['service-areas']}`.
- `src/components/pages/ContactPage.tsx` - H1 now `{HEADING_CONFIG.core.contact}`.
- `src/components/pages/AboutPage.tsx` - H1 now `{HEADING_CONFIG.core.about}`.
- `src/app/{residential-roofing,commercial-roofing,flat-roof-systems,roofing-materials,free-roofing-estimate,our-roofing-process}/page.tsx` - `heading` prop now sourced from `HEADING_CONFIG.hub[slug]` instead of an inline literal.

## 252-vs-253 Reconciliation (required by output spec)

The registry holds **252** articles (63 article-services x 3 = 189 + 30 comparisons x 2 = 60 + 3 core = 252; the generator excludes `silicone-elastomeric-roof-coating` and `roof-replacement-cost` per the 07-01 decision). The spec/CONTEXT/REQUIREMENTS say 253; that figure is stale. Per the 12-01/12-04 resolution, the audit and the Task-1 verify assert question-form + uniqueness over `articles.length` (252) and **never hardcode a count**. Confirmed: `grep -c "    id: '"` = 252 after regen; the audit logs "auditing 252 article titles (count NOT hardcoded)".

## L192 Collision Avoidance + Exact Wording (required by output spec)

The `serviceDecisionArticle` default branch (replacement-sub-pages, L192) and the `components-specialty` branch (L180) both would have collapsed to "What Should You Know About [shortName]?". To guarantee uniqueness across categories, **L192 uses "What Should You Know About [shortName] Roofing?"** (added "Roofing" suffix) while L180 stays "What Should You Know About [shortName]?". The Task-1 verify confirmed 0 duplicate titles across all 252.

The 3 hardcoded core/homepage article titles were rewritten to:
- `homepage-nj-roofing-guide` → "What Should NJ Homeowners Know About Roofing?"
- `homepage-finding-roofer-essex-county` → "How Do You Find a Reliable Roofer in Essex County?"
- `homepage-nj-roofing-licensing-insurance` → "What Are NJ Roofing Licensing and Insurance Requirements?"

## Decisions Made

- Added a per-branch `metaTitleBase` to `serviceDecisionArticle` (see Deviations). This keeps the concise declarative SERP metaTitle byte-identical to pre-edit while the long question form lives only in `article.title` (D-12 intent).

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] metaTitle leaked the new question-form title in serviceDecisionArticle**
- **Found during:** Task 1 (regenerate articles.ts)
- **Issue:** Line 195 computed `metaTitle = truncTitle(title.length <= 60 ? title : '<shortName> Guide | NJ')`. Because the decision-article `title` was rewritten to the (now mostly <=60-char) question form, the metaTitle for 53 decision articles silently changed to the question form too — violating D-12 ("the long question form lives only in the on-page H1 field article.title; metaTitle stays a concise <=60-char SERP title") and the acceptance criterion that the articles.ts diff touch only title lines.
- **Fix:** Introduced a per-branch `metaTitleBase` holding the original concise declarative wording (e.g. "Choosing the Right [shortName] Contractor in NJ") and changed the metaTitle expression to read from `metaTitleBase` instead of `title`. This restored all 53 decision-article metaTitles byte-for-byte.
- **Files modified:** scripts/generate-articles-ts.ts
- **Verification:** After regen, `git diff --unified=0 src/data/articles.ts` shows changes on **title lines only** (504 = 252 removed + 252 added); zero slug / metaTitle / metaDescription / cluster / id / position lines changed. Generator exited 0 (Zod max(60) re-parse passed); 0 metaTitles over 60.

---

**Total deviations:** 1 auto-fixed (1 bug).
**Impact on plan:** The fix was required to honor D-12 and the "title-only diff" acceptance criterion. No scope creep — only the generator's metaTitle derivation was corrected so the metaTitle stays decoupled from the question H1.

## Issues Encountered

- The Task-1 verify one-liner (`import('./src/data/articles.ts').then(m=>{const a=m.articles;...})`) read `m.articles` as `undefined` under `tsx -e` eval mode, because tsx's inline-eval ESM/CJS interop exposes the module's named exports under `m['module.exports']` (keys observed: `default`, `module.exports`) rather than as top-level named exports. This is a harness quirk, not a data problem — the data is correct. Ran the verify with an interop-safe accessor (`const exp = m['module.exports'] || m.default || m; const a = exp.articles;`) which printed `articles OK count=252 all-questions unique` and exited 0. The committed `audit:headings` script imports via the real module resolver (not `-e` eval) and reports 0 article violations, so the gate is unaffected.

## TDD Gate Compliance

This phase has **no unit-test framework** (no jest/vitest in the repo). Per the phase RESEARCH (§Validation Architecture) and the 12-01 decision, validation is the build-failing `scripts/audit-headings.ts` script — the audit IS the test. Both tasks carry `tdd="true"` in the plan, but RED/GREEN/REFACTOR test commits are not applicable; instead each task was verified against the audit's static pass + the Task-1 verify harness (both green for this plan's scope). No separate `test(...)` commit exists by design. The full rendered DOM gate (the GREEN of the whole wave) is 12-05's responsibility after `next build`.

## Mid-Wave Audit State (expected, not a regression)

`npm run audit:headings` does NOT exit 0 during this wave by design — it enforces the whole site, but plans 12-02 (home/service) and 12-03 (city/combo) land in parallel and the rendered DOM pass requires a full rebuild (12-05's gate). For THIS plan's scope the static pass is clean: 0 article-title violations over 252, count printed as 252. Home/service/city/combo violations are out of scope and were not touched.

## Next Phase Readiness

- 12-05 (rebuild + full rendered gate): after `next build`, the rendered DOM pass will read the core/hub `.html` files; each in-scope core/hub page should now render exactly one question-form H1 with no element children. The article titles are already question-form + unique in the static registry.
- HEADING_CONFIG remains the single source for the core/hub H1 strings, so any future wording change is one edit in `src/data/heading-config.ts`.

---
*Phase: 12-question-form-h-tag-core-outer-template-system*
*Completed: 2026-06-03*
