---
phase: 09-conversion-and-design-polish
plan: 04
subsystem: ui
tags: [homepage, hero, footer, services-grid, commercial-badge, residential-commercial-balance]

# Dependency graph
requires:
  - phase: 09-01
    provides: Motion animation components, Editorial Trust CSS (photo-treatment class)
provides:
  - Unified hero headline addressing both residential and commercial audiences
  - 50/50 side-by-side residential/commercial content section
  - Balanced 4+4 services grid with curated service cards
  - Separate footer columns for residential and commercial services
  - Commercial badge pill on commercial service page heroes
affects: [homepage, service-pages, footer]

# Tech tracking
tech-stack:
  added: []
  patterns: [curated-slug-lookup for balanced service display, category-based badge rendering]

key-files:
  created: []
  modified:
    - src/components/sections/HeroSection.tsx
    - src/components/sections/HomeResidentialCommercial.tsx
    - src/components/sections/ServicesGrid.tsx
    - src/components/layout/Footer.tsx
    - src/components/sections/ServiceHero.tsx

key-decisions:
  - "ServicesGrid uses curated slug arrays instead of dynamic category filtering for exact 4+4 balance"
  - "Footer uses curated slug-based service lists (10 residential + 10 commercial) instead of category-limit approach"
  - "LeadForm commercial balance verified as adequate (no-op) -- commercial categories at positions 3 and 6 in optgroup order"
  - "Commercial badge only shown for commercial-roof-types and commercial-services categories (not mixed services)"

patterns-established:
  - "getServicesBySlug: curated slug lookup pattern preserving display order"
  - "Category-based badge: conditional rendering by service.category for visual audience cues"

requirements-completed: [DSGN-06, CONT-01]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 9 Plan 4: Residential/Commercial Balance Summary

**Unified hero headline, 50/50 residential/commercial split section, balanced 4+4 services grid, separate footer columns, and commercial badge on service heroes**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T17:34:13Z
- **Completed:** 2026-03-09T17:37:54Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Hero headline updated to "Residential & Commercial Roofing in Newark NJ" with unified messaging for both audiences
- HomeResidentialCommercial redesigned as true 50/50 side-by-side split with equal photo, text, and CTA weight
- ServicesGrid balanced to exactly 4 residential + 4 commercial curated cards (removed dynamic filter approach)
- Footer restructured from category-based services to separate "Services (Residential)" and "Services (Commercial)" columns with 10 curated links each
- Commercial badge pill added to ServiceHero for commercial-roof-types and commercial-services category pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Hero headline, 50/50 split, services grid balance** - `1555f76` (feat)
2. **Task 2: Footer restructure, LeadForm audit, commercial badge** - `f40cd33` (feat)

## Files Created/Modified
- `src/components/sections/HeroSection.tsx` - Updated h1 to unified residential/commercial headline, added commercial install link
- `src/components/sections/HomeResidentialCommercial.tsx` - Complete redesign to 50/50 side-by-side split with photo-treatment images
- `src/components/sections/ServicesGrid.tsx` - Curated 4+4 balanced grid replacing dynamic category filtering, removed standalone image
- `src/components/layout/Footer.tsx` - Two separate service columns (residential/commercial) with curated slug-based lookups
- `src/components/sections/ServiceHero.tsx` - Commercial badge pill above h1 for commercial-category services

## Decisions Made
- Used curated slug arrays (residentialSlugs/commercialSlugs) instead of dynamic getRepresentativeServices() to guarantee exact 4+4 card balance
- Footer changed from footerCategories with limit-per-category to two flat curated lists for maximum control over service representation
- LeadForm commercial balance verified as adequate -- commercial categories already appear at positions 3 and 6 in the optgroup order, no changes needed
- Commercial badge rendered only for services where category is 'commercial-roof-types' or 'commercial-services' (13 services), not for mixed residential/commercial services

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Residential/commercial messaging balance complete across all major touchpoints
- Ready for remaining Phase 9 plans (09-02, 09-03 if pending)

## Self-Check: PASSED

All 5 modified files verified on disk. Both task commits (1555f76, f40cd33) verified in git log. All 6 must_have content checks passed.

---
*Phase: 09-conversion-and-design-polish*
*Completed: 2026-03-09*
