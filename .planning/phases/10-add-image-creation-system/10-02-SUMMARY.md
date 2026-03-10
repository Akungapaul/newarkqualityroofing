---
phase: 10-add-image-creation-system
plan: 02
subsystem: infra
tags: [openai, cli, image-generation, sharp, preview, manifest]

# Dependency graph
requires:
  - phase: 10-add-image-creation-system
    provides: Types, prompts (137 definitions), openai-client, sharp-pipeline, cost-tracker, manifest
provides:
  - Generate CLI with dry-run, category filter, id filter, concurrency control
  - Approve CLI moving staged images through sharp pipeline to public/images/ and updating manifest
  - Status CLI with formatted coverage table by category (staged/approved/total)
  - Preview CLI generating HTML review page with category filters and prompt display
affects: [10-03-PLAN, 10-04-PLAN]

# Tech tracking
tech-stack:
  added: []
  patterns: [category-subdirectory staging, lazy OpenAI client init, per-group concurrent generation]

key-files:
  created:
    - scripts/images/generate.ts
    - scripts/images/approve.ts
    - scripts/images/status.ts
    - scripts/images/preview.ts
  modified:
    - scripts/images/lib/openai-client.ts
    - scripts/images/lib/manifest.ts

key-decisions:
  - "Lazy OpenAI client initialization to allow dry-run and preview without OPENAI_API_KEY"
  - "Category-grouped generation calls to organize staging into subdirectories (heroes, gallery, content, homepage)"
  - "Manifest array reader uses assignment pattern matching (= [) to skip TypeScript type annotations"
  - "Approve requires explicit filter (--all, --category, --id, --name) to prevent accidental approve-all"

patterns-established:
  - "CLI guard pattern: main() only runs when process.argv[1] includes script name, enabling safe cross-script imports"
  - "Category-to-subdirectory mapping: getCategorySubdir() and getPublicSubdir() exported from generate.ts for reuse"
  - "Staged image scan pattern: recursive subdirectory walk matching filenames to ALL_PROMPTS definitions"

requirements-completed: [IMG-05, IMG-06, IMG-07]

# Metrics
duration: 9min
completed: 2026-03-10
---

# Phase 10 Plan 02: Core CLI Scripts Summary

**Four CLI scripts (generate, approve, status, preview) forming the complete image workflow from dry-run estimation through sharp-optimized production deployment**

## Performance

- **Duration:** 9 min
- **Started:** 2026-03-10T06:12:43Z
- **Completed:** 2026-03-10T06:22:25Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- Generate CLI with --dry-run listing all 137 images with formatted table, cost estimate ($6.69), and staging paths
- Category filtering confirmed: homepage (15), service-hero (65), city-hero (21) all return correct counts
- Approve CLI processes staged PNGs through sharp (resize + WebP quality 80), writes to public/images/{subdir}/, updates manifest via addToManifest()
- Status CLI shows formatted coverage table with progress bars for all 9 image categories
- Preview CLI generates parchment-themed HTML review page with lazy-loaded image grid, category filter buttons, and expandable prompt text

## Task Commits

Each task was committed atomically:

1. **Task 1: Generate and preview scripts** - `50294a6` (feat)
2. **Task 2: Approve and status scripts** - `09c8b00` (feat -- included in parallel agent commit)

## Files Created/Modified
- `scripts/images/generate.ts` - Main generation CLI: --dry-run, --category, --id, --concurrency, --delay, --force flags, groups by category subdirectory
- `scripts/images/preview.ts` - HTML preview generator with parchment theme, category filters, lazy-loaded image grid, prompt display
- `scripts/images/approve.ts` - Approve workflow: sharp pipeline (resize+WebP), move to public/images/, manifest update, staging cleanup
- `scripts/images/status.ts` - Coverage report: staged/approved/total per category, progress bars, cost summary from reports
- `scripts/images/lib/openai-client.ts` - Lazy-initialized OpenAI client (avoids throw on import without API key)
- `scripts/images/lib/manifest.ts` - Fixed array reader to skip TypeScript type annotations when finding manifest array literal

## Decisions Made
- **Lazy OpenAI client** instead of eager instantiation at module load -- dry-run, status, and preview scripts should work without OPENAI_API_KEY
- **Per-category-subdir generation** -- prompts grouped by getCategorySubdir() before calling generateWithConcurrency(), so staged images land in organized subdirectories matching the public/images/ structure
- **Manifest reader fix** -- uses `= [` assignment pattern to find the actual array literal, skipping `ImageEntry[]` type annotation that previously caused parse failures on empty manifests
- **Require explicit approve filter** -- no default approve-all behavior; must pass --all, --category, --id, or --name to prevent accidental mass approval

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Lazy-initialize OpenAI client to unblock dry-run imports**
- **Found during:** Task 1 (generate script verification)
- **Issue:** OpenAI client instantiated at module load in openai-client.ts, throwing "Missing credentials" even during --dry-run since generate.ts imports it
- **Fix:** Changed to lazy getter function getClient() that only creates the client when first used for actual generation
- **Files modified:** scripts/images/lib/openai-client.ts
- **Verification:** --dry-run runs without OPENAI_API_KEY set
- **Committed in:** 50294a6 (Task 1 commit)

**2. [Rule 1 - Bug] Fixed manifest reader parsing empty arrays incorrectly**
- **Found during:** Task 2 (status script verification)
- **Issue:** readManifest() found `[` in `ImageEntry[]` type annotation before the actual array literal, causing JSON.parse to fail with a warning
- **Fix:** Changed to search for `= [` assignment pattern, then find the array literal after that position
- **Files modified:** scripts/images/lib/manifest.ts
- **Verification:** status.ts runs clean with no warning on empty manifest
- **Committed in:** 09c8b00

**3. [Rule 3 - Blocking] Guard generate.ts main() from running on import**
- **Found during:** Task 2 (approve script importing getCategorySubdir from generate.ts)
- **Issue:** generate.ts had unconditional main() call at module level, causing it to execute when imported by approve.ts
- **Fix:** Added process.argv[1] guard: main() only runs when script name includes 'generate'
- **Files modified:** scripts/images/generate.ts
- **Verification:** approve.ts imports getCategorySubdir without triggering generation
- **Committed in:** 09c8b00

---

**Total deviations:** 3 auto-fixed (1 bug, 2 blocking)
**Impact on plan:** All fixes necessary for correct CLI operation. No scope creep.

## Issues Encountered
- Parallel agent commits (10-03, 10-04) interleaved with this plan's work, causing Task 2 files to be captured in commit 09c8b00 alongside 10-03 documentation

## User Setup Required
None - no external service configuration required. OPENAI_API_KEY needed only when running actual generation (not for dry-run, status, or preview).

## Next Phase Readiness
- All 4 CLI scripts operational and accessible via npm run images:generate|approve|status|preview
- Generate --dry-run confirms 137 images across 9 categories at $6.69 estimated cost
- Approve pipeline ready to process staged images through sharp and update manifest
- Status provides real-time coverage tracking as images are generated and approved
- Foundation complete for Plan 03 (OG compositor) and Plan 04 (integration)

## Self-Check: PASSED

All 4 created files verified on disk. Task 1 commit (50294a6) verified in git log. Task 2 files verified committed in 09c8b00.

---
*Phase: 10-add-image-creation-system*
*Completed: 2026-03-10*
