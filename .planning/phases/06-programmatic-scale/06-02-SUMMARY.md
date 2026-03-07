---
phase: 06-programmatic-scale
plan: 02
subsystem: seo
tags: [internal-linking, combo-urls, orphan-audit, metadata]

requires:
  - phase: 04-city-pages-and-local-seo
    provides: CityServicesGrid with TODO for combo URL update
  - phase: 05-content-differentiation-engine
    provides: 90 hand-written combo content files with metaDescription

provides:
  - CityServicesGrid linking to combo page URLs via generateComboSlug
  - Combo metadata using hand-written descriptions when available
  - Orphan page audit script for internal link health monitoring

affects: [06-programmatic-scale, seo, internal-linking]

tech-stack:
  added: []
  patterns: [data-layer-audit-script, try-catch-content-fallback]

key-files:
  created:
    - scripts/audit-orphan-pages.ts
  modified:
    - src/components/sections/CityServicesGrid.tsx
    - src/components/templates/CityTemplate.tsx
    - src/app/[slug]/page.tsx

key-decisions:
  - "Combo metadata uses try/catch fallback pattern: hand-written metaDescription preferred, auto-generated as fallback"
  - "Orphan audit computes links from data layer imports (no HTML crawling) for accuracy and speed"
  - "Content-pending combo pages flagged separately from true orphans in audit output"

patterns-established:
  - "Data-layer audit: import project data modules directly in scripts for link computation"
  - "Content fallback: try getComboContent(), catch to fall back to auto-generated fields"

requirements-completed: []

duration: 3min
completed: 2026-03-07
---

# Phase 06 Plan 02: Linking Infrastructure and Orphan Audit Summary

**CityServicesGrid now links to combo pages via generateComboSlug, combo metadata uses hand-written descriptions, and orphan audit script reports inbound link health for all 1,489 pages**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-07T23:54:51Z
- **Completed:** 2026-03-07T23:57:43Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- CityServicesGrid links updated from service URLs to combo page URLs across all 21 city pages
- Combo page metadata now uses hand-written metaDescription from combo content (90 pages) with auto-generated fallback
- Orphan page audit script identifies all pages with < 3 inbound internal links, with separate flagging for content-pending combo pages

## Task Commits

Each task was committed atomically:

1. **Task 1: CityServicesGrid combo URL update + metadata switch** - `97e9b7a` (feat)
2. **Task 2: Orphan page audit script** - `2c3f0fa` (feat)

## Files Created/Modified
- `src/components/sections/CityServicesGrid.tsx` - Added citySlug prop, import generateComboSlug, link to combo URLs
- `src/components/templates/CityTemplate.tsx` - Pass citySlug={city.slug} to CityServicesGrid
- `src/app/[slug]/page.tsx` - Import getComboContent, use hand-written metaDescription in combo metadata case
- `scripts/audit-orphan-pages.ts` - Orphan page detection script computing inbound links from data layer

## Decisions Made
- Combo metadata uses try/catch fallback: attempts getComboContent() for hand-written metaDescription, falls back to auto-generated combo.metaDescription if no content exists
- Orphan audit computes links from data layer imports (services, cities, combos, comparisons, corePages) rather than crawling rendered HTML
- Content-pending combo pages (1,245 without hand-written content) flagged separately as "orphan risks" distinct from true orphans

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- CityServicesGrid linking infrastructure complete -- all city pages link to combo URLs
- Orphan audit baseline established: 30 comparison pages at 0 links, 1,245 content-pending combos at 1-2 links
- Ready for content scale-up phases to improve internal linking coverage

---
*Phase: 06-programmatic-scale*
*Completed: 2026-03-07*
