---
phase: 08-seo-infrastructure
plan: 04
subsystem: seo
tags: [validation, bfs, click-depth, topical-map, cannibalization, preconnect, prefetch]

# Dependency graph
requires:
  - phase: 08-01
    provides: sitemap infrastructure, SEO config, metadata base
  - phase: 08-02
    provides: JSON-LD structured data across all templates
  - phase: 08-03
    provides: heading hierarchy audit, meta tag audit, semantic HTML
provides:
  - 4 SEO validation scripts (flat URLs, click depth, topical map, cannibalization)
  - PreloadResources component with preconnect/prefetchDNS hints
  - 7 npm scripts for SEO auditing and validation
  - seo:validate combined command running all 3 validators
affects: [phase-09, deployment, seo-monitoring]

# Tech tracking
tech-stack:
  added: [tsx (devDependency)]
  patterns: [BFS adjacency graph from data layer, Dice-Sorensen bigram similarity for keyword analysis, React preconnect/prefetchDNS hints]

key-files:
  created:
    - scripts/validate-flat-urls.ts
    - scripts/validate-click-depth.ts
    - scripts/validate-topical-map.ts
    - scripts/audit-cannibalization.ts
    - src/app/preload-resources.tsx
  modified:
    - src/app/layout.tsx
    - package.json

key-decisions:
  - "BFS click-depth validator builds adjacency graph from data layer imports (no HTML parsing) matching existing orphan-audit pattern"
  - "Max click depth is 2 (all 1,741 pages reachable within 2 clicks from homepage via header nav + city/combo links)"
  - "Cannibalization audit uses sampling (5 cities for combos, 30 articles) to keep O(n^2) comparison tractable"
  - "Combo/service keyword overlap classified as LOW severity with expected note (different search intents)"
  - "tsx installed as devDependency so npm scripts execute without npx prefix"
  - "SEMA-07 (AI detection QA) skipped per user decision -- content differentiation engine in Phase 5 already ensures variation"

patterns-established:
  - "SEO validation pipeline: npm run seo:validate runs flat-urls + click-depth + topical-map in sequence"
  - "Informational audit scripts exit 0 always; validation scripts exit 1 on failure"

requirements-completed: [SEOT-05, SEOT-08, SEMA-05, SEMA-07]

# Metrics
duration: 5min
completed: 2026-03-09
---

# Phase 8 Plan 4: SEO Validation and Integration Summary

**4 SEO validation scripts (flat URLs, BFS click-depth, topical map coverage, keyword cannibalization), PreloadResources preconnect component, and 7 npm audit/validate scripts with full build verification**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-09T08:03:18Z
- **Completed:** 2026-03-09T08:09:02Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments
- All 1,740 URLs confirmed flat (no path separators) -- validates flat URL architecture
- BFS from homepage confirms all 1,741 pages reachable within 2 clicks (max depth 2, well under the 3-click limit)
- All 63 service pillar pages have 3+ supporting articles (topical map complete with 252 articles)
- Cannibalization audit identifies expected combo/service overlap as LOW severity (different search intents)
- PreloadResources component adds preconnect for Google Maps and prefetchDNS for GoHighLevel
- Full build passes with 1,752 static pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Build-time validation scripts** - `16611f5` (feat)
2. **Task 2: Preconnect hints, performance config, and final integration verification** - `959d709` (feat)

## Files Created/Modified
- `scripts/validate-flat-urls.ts` - Validates all slugs have no path separators
- `scripts/validate-click-depth.ts` - BFS adjacency graph from data layer, validates 3-click max depth
- `scripts/validate-topical-map.ts` - Validates every pillar service has 3+ supporting articles
- `scripts/audit-cannibalization.ts` - Informational keyword overlap report with severity tiers
- `src/app/preload-resources.tsx` - Client component with preconnect/prefetchDNS resource hints
- `src/app/layout.tsx` - Added PreloadResources import and component before Header
- `package.json` - Added 7 SEO npm scripts, tsx devDependency

## Decisions Made
- BFS click-depth validator builds adjacency graph from data layer imports (not HTML parsing), matching the established orphan-audit pattern
- Max click depth is 2 -- every page is reachable within 2 clicks from homepage through header nav + template links
- Cannibalization audit uses sampling (5 cities for combos, 30 articles) to keep O(n^2) pairs tractable at ~110K checks
- Combo/service keyword overlap classified as LOW severity with explicit note (different search intents)
- tsx installed as devDependency so npm scripts run without npx prefix
- SEMA-07 (AI detection QA) skipped per user decision -- Phase 5 content differentiation engine ensures variation

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] tsx not found as local command for npm scripts**
- **Found during:** Task 2 (running npm run seo:validate)
- **Issue:** npm scripts using bare `tsx` failed because tsx was not a project devDependency
- **Fix:** Installed tsx as devDependency (`npm install --save-dev tsx`)
- **Files modified:** package.json, package-lock.json
- **Verification:** npm run seo:validate completes successfully
- **Committed in:** 959d709 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Minimal -- tsx was already used via npx, just needed local installation for npm scripts.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 8 SEO infrastructure is complete (all 4 plans executed)
- All validation scripts pass: flat URLs, click depth, topical map
- All audit scripts produce informational reports: headings, meta, cannibalization
- Full build passes with 1,752 static pages
- Ready for Phase 9 (final polish)

## Self-Check: PASSED

All files exist. All commits verified.

---
*Phase: 08-seo-infrastructure*
*Completed: 2026-03-09*
