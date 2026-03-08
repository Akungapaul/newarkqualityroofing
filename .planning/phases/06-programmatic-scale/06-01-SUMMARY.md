---
phase: 06-programmatic-scale
plan: 01
subsystem: ui
tags: [react, nextjs, templates, internal-linking, combo-pages]

requires:
  - phase: 05-content-differentiation-engine
    provides: "90 combo content objects with Zod-validated schema"
  - phase: 03-service-pages
    provides: "ServiceTemplate pattern and section component architecture"
provides:
  - "ComboTemplate production layout with 7 section components"
  - "Link engine with getNearbyCityLinks, getRelatedServiceLinks, getParentPageLinks"
  - "Inline markdown link parser for content paragraphs"
  - "Graceful placeholder for combos without content"
affects: [06-programmatic-scale, 07-supporting-content]

tech-stack:
  added: []
  patterns: [combo-template-layout, link-engine-pure-functions, inline-link-parser, content-placeholder-fallback]

key-files:
  created:
    - src/data/linking/link-engine.ts
    - src/lib/render-inline-links.tsx
    - src/components/sections/ComboHero.tsx
    - src/components/sections/ComboOverview.tsx
    - src/components/sections/ComboChallenges.tsx
    - src/components/sections/ComboProcess.tsx
    - src/components/sections/ComboFaqs.tsx
    - src/components/sections/ComboRelatedLinks.tsx
    - src/components/sections/ComboCtaBanner.tsx
  modified:
    - src/components/templates/ComboTemplate.tsx

key-decisions:
  - "Inline link parser extracted to shared render-inline-links.tsx utility for reuse across ComboOverview and ComboChallenges"
  - "ComboPlaceholder renders hero with form + minimal content for combos without content (not blank page)"
  - "Mid-content CTA placed between ComboChallenges and ComboProcess as natural break point"

patterns-established:
  - "Link engine: pure functions computing links from existing data (no separate link map files)"
  - "Combo-specific identity: category badge, copper city accent, compact trust bar (distinct from ServiceHero)"
  - "Three nearby-city link formats: card grid, sidebar section, inline text links"

requirements-completed: []

duration: 3min
completed: 2026-03-07
---

# Phase 6 Plan 01: Combo Template & Link Engine Summary

**Production ComboTemplate with 7 section components, link engine computing nearby/related/parent links, and inline markdown link parser for content paragraphs**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-07T12:15:02Z
- **Completed:** 2026-03-07T12:18:00Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments
- Link engine computes nearby city, related service, and parent page links from existing data
- 7 combo section components with distinct visual identity from ServiceTemplate
- Inline markdown-style link parser renders [text](url) as Next.js Link components in content paragraphs
- ComboTemplate renders full layout for 90 content pages and graceful placeholder for remaining combos
- Build succeeds: 1,492 static pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Link engine and section components** - `ca31d92` (feat)
2. **Task 2: ComboTemplate production replacement** - `966a9e9` (feat)

## Files Created/Modified
- `src/data/linking/link-engine.ts` - Pure functions for computing internal links from existing data
- `src/lib/render-inline-links.tsx` - Shared inline markdown link parser utility
- `src/components/sections/ComboHero.tsx` - Split hero with category badge, copper city accent, compact trust bar
- `src/components/sections/ComboOverview.tsx` - Overview with alternating backgrounds and inline links
- `src/components/sections/ComboChallenges.tsx` - Local challenges section with inline links
- `src/components/sections/ComboProcess.tsx` - Numbered process step cards
- `src/components/sections/ComboFaqs.tsx` - FAQ accordion with details/summary
- `src/components/sections/ComboRelatedLinks.tsx` - Card grid, categorized list, parent page links
- `src/components/sections/ComboCtaBanner.tsx` - Full-width CTA with forest-dark background
- `src/components/templates/ComboTemplate.tsx` - Production layout replacing placeholder

## Decisions Made
- Inline link parser extracted to shared utility (`render-inline-links.tsx`) for reuse across ComboOverview and ComboChallenges
- ComboPlaceholder renders hero with form + minimal content for combos without content (graceful degradation, not blank page)
- Mid-content CTA placed between ComboChallenges and ComboProcess as natural break point after establishing the problem
- Category labels duplicated in ComboHero for self-containment (matching pattern from city pages)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- ComboTemplate infrastructure complete, ready for additional combo content batches
- Phase 7 slot pre-wired in ComboRelatedLinks for supporting article links
- All 1,492 pages building successfully

## Self-Check: PASSED

- All 10 files verified present on disk
- Commit ca31d92 verified (Task 1)
- Commit 966a9e9 verified (Task 2)
- Build: 1,492 pages generated successfully

---
*Phase: 06-programmatic-scale*
*Completed: 2026-03-07*
