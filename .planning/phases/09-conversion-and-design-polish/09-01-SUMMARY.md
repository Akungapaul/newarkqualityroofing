---
phase: 09-conversion-and-design-polish
plan: 01
subsystem: ui
tags: [motion, animation, css, design-system, scroll-reveal, reduced-motion]

# Dependency graph
requires:
  - phase: 08-seo-infrastructure
    provides: Complete build with 1,752 static pages
provides:
  - motion library installed as dependency
  - .photo-treatment CSS utility for stock photo warm overlay
  - body::after grain texture overlay across all pages
  - .organic-blob decorative shape utility
  - .editorial-card and .editorial-card-lg rounded corner utilities
  - AnimateIn scroll-triggered fade-up reveal component
  - CountUp animated number counter component
  - StaggerGrid/StaggerItem staggered child animation components
  - MotionProvider wrapping entire app with reducedMotion='user'
affects: [09-02, 09-03, 09-04]

# Tech tracking
tech-stack:
  added: [motion ^12.35.2]
  patterns: [client component animation wrappers, MotionProvider server/client boundary, as-const variants for motion type safety]

key-files:
  created:
    - src/components/animations/AnimateIn.tsx
    - src/components/animations/CountUp.tsx
    - src/components/animations/StaggerGrid.tsx
    - src/components/animations/MotionProvider.tsx
  modified:
    - src/app/globals.css
    - src/app/layout.tsx
    - package.json

key-decisions:
  - "MotionProvider client wrapper keeps layout.tsx as server component while providing app-wide reducedMotion config"
  - "as const on motion variants prevents TypeScript string widening for ease property"

patterns-established:
  - "Animation components use 'use client' with motion/react imports"
  - "MotionConfig wraps entire app via MotionProvider for consistent reduced-motion handling"
  - "Scroll-triggered animations use viewport: { once: true } to fire only once"

requirements-completed: [DSGN-01, DSGN-05, DSGN-08]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 9 Plan 1: Editorial Trust CSS Foundation + Motion Animation Components Summary

**Motion library with photo treatment overlay, grain texture, organic shapes, and AnimateIn/CountUp/StaggerGrid animation wrappers providing the foundation layer for all Phase 9 design polish**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T17:28:13Z
- **Completed:** 2026-03-09T17:31:15Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments
- Installed motion ^12.35.2 animation library with 5 sub-packages
- Created Editorial Trust CSS foundation: photo treatment overlay, body grain texture, organic blob shapes, editorial card rounded corners
- Built 3 reusable animation components (AnimateIn, CountUp, StaggerGrid) with scroll-triggered viewport detection
- Wired MotionConfig with reducedMotion='user' via MotionProvider wrapping entire app
- Full build passes with all 1,752 static pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Install Motion and create Editorial Trust CSS foundation** - `c73c512` (feat)
2. **Task 2: Create animation wrapper components and wire MotionConfig** - `67ef093` (feat)

## Files Created/Modified
- `package.json` - Added motion ^12.35.2 dependency
- `src/app/globals.css` - Added .photo-treatment, body::after grain, .organic-blob, .editorial-card utilities
- `src/components/animations/AnimateIn.tsx` - Scroll-triggered fade-up reveal wrapper using motion whileInView
- `src/components/animations/CountUp.tsx` - Animated number counter with requestAnimationFrame and reduced-motion support
- `src/components/animations/StaggerGrid.tsx` - Grid container with staggered child reveal animations
- `src/components/animations/MotionProvider.tsx` - Client wrapper providing MotionConfig with reducedMotion='user'
- `src/app/layout.tsx` - Wrapped children in MotionProvider for app-wide motion configuration

## Decisions Made
- MotionProvider as separate client component keeps layout.tsx as server component (minimal client boundary)
- Used `as const` on StaggerGrid variants to fix TypeScript string widening for ease property type
- CountUp handles prefers-reduced-motion directly via window.matchMedia check (shows final value immediately)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed TypeScript ease type error in StaggerGrid variants**
- **Found during:** Task 2 (animation component creation)
- **Issue:** TypeScript inferred `ease: 'easeOut'` as `string` type instead of literal, causing type mismatch with motion's Easing type
- **Fix:** Added `as const` on containerVariants and `as const` on ease value for proper literal type inference
- **Files modified:** src/components/animations/StaggerGrid.tsx
- **Verification:** Build passes with zero type errors
- **Committed in:** 67ef093 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Type narrowing fix necessary for TypeScript compilation. No scope creep.

## Issues Encountered
None beyond the TypeScript type fix documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All animation wrapper components ready for use in 09-02 (homepage/template animations)
- CSS photo treatment and grain texture ready for 09-03 (gallery/image treatment)
- CountUp component ready for trust bar number animation
- StaggerGrid ready for service grids and card layouts

## Self-Check: PASSED

All 7 files verified present. Both task commits (c73c512, 67ef093) verified in git log.

---
*Phase: 09-conversion-and-design-polish*
*Completed: 2026-03-09*
