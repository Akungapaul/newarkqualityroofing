---
phase: 07-supporting-content
plan: 02
subsystem: ui
tags: [react, nextjs, comparison-pages, templates, editorial-trust]

# Dependency graph
requires:
  - phase: 07-01
    provides: ComparisonContentSchema, ComparisonContent type, article infrastructure
  - phase: 02-01
    provides: LeadForm component with hero/standard variants
  - phase: 01-02
    provides: Comparison type, comparisons data (30 total)
provides:
  - ComparisonTemplate full production layout (7 sections + sidebar)
  - ComparisonHero with split hero and lead form above the fold
  - ComparisonTable with A-vs-B and ranked matrix variants
  - ComparisonAnalysis with NJ-specific, homeowner, and business owner subsections
  - ComparisonVerdict with winner card and consultation CTA
  - ComparisonFaqs accordion matching ServiceFaq pattern
  - ComparisonRelated with smart service matching
  - Graceful placeholder rendering when comparison content not yet available
affects: [07-03-comparison-content, 07-10-link-engine-wiring]

# Tech tracking
tech-stack:
  added: []
  patterns: [comparison-template-pattern, category-conditional-rendering, graceful-content-fallback]

key-files:
  created:
    - src/components/sections/ComparisonHero.tsx
    - src/components/sections/ComparisonIntro.tsx
    - src/components/sections/ComparisonTable.tsx
    - src/components/sections/ComparisonAnalysis.tsx
    - src/components/sections/ComparisonVerdict.tsx
    - src/components/sections/ComparisonFaqs.tsx
    - src/components/sections/ComparisonRelated.tsx
  modified:
    - src/components/templates/ComparisonTemplate.tsx

key-decisions:
  - "ComparisonTable uses HTML table for A-vs-B comparisons, ranked card list for decision-helpers"
  - "ComparisonRelated uses fuzzy name matching for A-vs-B items and category mapping for decision-helpers"
  - "Content loading via try/catch require() for graceful fallback before aggregator exists"
  - "Breadcrumbs show Comparisons as text label (no link) since no hub page exists"

patterns-established:
  - "Comparison category-conditional rendering: same component, different UI per category"
  - "Graceful content fallback: ComparisonPlaceholder renders hero with form when content unavailable"

requirements-completed: [COMP-01, COMP-05, COMP-06, COMP-07]

# Metrics
duration: 4min
completed: 2026-03-08
---

# Phase 7 Plan 02: Comparison Template Components Summary

**Full ComparisonTemplate with 7 section components, split hero with lead form, A-vs-B table with winner highlights, ranked matrix for decision-helpers, and graceful placeholder fallback**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-08T18:48:23Z
- **Completed:** 2026-03-08T18:52:00Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- 7 comparison section components built matching existing editorial trust design system
- ComparisonTable conditionally renders HTML table (material/service comparisons) or ranked card matrix (decision-helpers)
- ComparisonTemplate rebuilt from 47-line placeholder to 147-line production layout with 2-column + sidebar pattern
- Graceful placeholder fallback ensures 30 comparison pages continue rendering before content Plan 03

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 7 comparison section components** - `e04314e` (feat)
2. **Task 2: Rebuild ComparisonTemplate with full production layout** - `5226aa0` (feat)

## Files Created/Modified
- `src/components/sections/ComparisonHero.tsx` - Split hero with lead form, forest-dark background, trust signals, breadcrumbs
- `src/components/sections/ComparisonIntro.tsx` - Introductory prose paragraphs section
- `src/components/sections/ComparisonTable.tsx` - A-vs-B table with winner highlights OR ranked matrix for decision-helpers
- `src/components/sections/ComparisonAnalysis.tsx` - Detailed analysis with NJ-specific, homeowner, and business owner subsections
- `src/components/sections/ComparisonVerdict.tsx` - Bordered verdict card with winner, reasoning, alternate scenario, phone CTA
- `src/components/sections/ComparisonFaqs.tsx` - FAQ accordion using native details/summary pattern
- `src/components/sections/ComparisonRelated.tsx` - Related services grid with fuzzy name matching and category mapping
- `src/components/templates/ComparisonTemplate.tsx` - Full production layout replacing 47-line placeholder

## Decisions Made
- ComparisonTable uses native HTML table for A-vs-B comparisons (scannable, accessible) and a ranked card list for decision-helpers (no A-vs-B columns to show)
- ComparisonRelated uses fuzzy name matching to link A-vs-B items to service pages and a hardcoded category mapping for decision-helper comparisons
- Content loading uses try/catch require() to gracefully handle the missing aggregator -- ComparisonPlaceholder renders until Plan 03 creates getComparisonContent()
- Breadcrumbs show "Comparisons" as plain text (not a link) since there is no comparisons hub page

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Template infrastructure complete and rendering on all 30 comparison pages (as placeholders with hero + form)
- Ready for Plan 03 to create comparison content and getComparisonContent aggregator
- ComparisonTemplate will automatically render full content once aggregator is wired
- Plan 10 will wire the Learn More section via getMoneyPageArticle

## Self-Check: PASSED

All 8 files verified present. Both task commits (e04314e, 5226aa0) verified in git log.

---
*Phase: 07-supporting-content*
*Completed: 2026-03-08*
