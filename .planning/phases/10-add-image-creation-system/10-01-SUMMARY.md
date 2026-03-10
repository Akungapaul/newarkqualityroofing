---
phase: 10-add-image-creation-system
plan: 01
subsystem: infra
tags: [openai, sharp, image-generation, cli-tooling, zod, manifest]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: Zod schemas, service/city data models, project structure
  - phase: 09-conversion-design-polish
    provides: CSS .photo-treatment overlay that affects image color tuning
provides:
  - Shared types for image system (ImageEntry, PromptDefinition, GenerationResult)
  - 137 prompt definitions covering homepage, service heroes, city heroes, gallery, content pool
  - OpenAI client wrapper with concurrency control and exponential backoff
  - Sharp pipeline for resize and WebP conversion
  - Cost tracker with estimation and JSON report generation
  - Manifest read/write/merge operations with MANIFEST_START/END markers
  - Central image manifest with Zod schema and lookup helpers
  - npm scripts for images:generate, images:approve, images:status, images:audit, images:og, images:preview
affects: [10-02-PLAN, 10-03-PLAN, 10-04-PLAN]

# Tech tracking
tech-stack:
  added: [openai ^6.27.0, sharp ^0.34.5, dotenv ^16.4.0]
  patterns: [manifest-driven image system, staging/approve workflow, shared style prefix]

key-files:
  created:
    - scripts/images/lib/types.ts
    - scripts/images/lib/prompts.ts
    - scripts/images/lib/openai-client.ts
    - scripts/images/lib/sharp-pipeline.ts
    - scripts/images/lib/cost-tracker.ts
    - scripts/images/lib/manifest.ts
    - src/data/image-manifest.ts
  modified:
    - package.json
    - .env.example
    - .gitignore

key-decisions:
  - "Style prefix uses soft natural daylight (not golden hour) to avoid double-warming with CSS .photo-treatment overlay"
  - "Manifest uses MANIFEST_START/MANIFEST_END markers for AST-free string replacement by approve scripts"
  - "Content pool materials and seasonal images use 800x800 (square) while crew and consultation use 1200x900 (landscape)"
  - "Gallery before/after uses pair-based ID scheme (gallery-before-{pairId} / gallery-after-{pairId}) for consistent matching"

patterns-established:
  - "Manifest-driven image system: all components look up images from imageManifest via typed lookup helpers"
  - "Prompt builder pattern: buildPrompt(scene) combines STYLE_PREFIX + BRAND_ELEMENTS + scene description"
  - "Worker pool concurrency: generateWithConcurrency uses queue-draining workers with configurable parallelism"

requirements-completed: [IMG-01, IMG-02, IMG-03, IMG-04, IMG-07, IMG-13]

# Metrics
duration: 8min
completed: 2026-03-10
---

# Phase 10 Plan 01: Foundation Libraries Summary

**137 image prompt definitions with OpenAI/sharp pipeline, Zod manifest schema, cost tracker, and 6 npm scripts for AI image generation CLI**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-10T05:57:58Z
- **Completed:** 2026-03-10T06:06:15Z
- **Tasks:** 2
- **Files modified:** 12

## Accomplishments
- Complete type system for image generation pipeline (ImageEntry, PromptDefinition, GenerationResult, GenerationReport)
- 137 prompt definitions covering all required categories: 15 homepage, 65 service heroes, 21 city heroes, 16 gallery (8 before/after pairs), 20 shared content pool
- OpenAI client wrapper with gpt-image-1, exponential backoff on 429, configurable concurrency, immediate disk write to prevent memory accumulation
- Sharp pipeline for resize + WebP conversion at quality 80, effort 6
- Central image manifest with Zod schema, 6 typed lookup helpers, MANIFEST markers for script-safe updates
- Cost tracker estimating $6.53 for all 137 images at medium quality

## Task Commits

Each task was committed atomically:

1. **Task 1: Types, manifest schema, and shared libraries** - `4207b76` (feat)
2. **Task 2: Prompt definitions and project configuration** - `a9f202a` (feat)

## Files Created/Modified
- `scripts/images/lib/types.ts` - Shared types: ImageCategory, PageType, PromptDefinition, ImageEntry, GenerationResult, GenerationReport, DIMENSIONS presets, COST_CONSTANTS
- `scripts/images/lib/prompts.ts` - 137 prompt definitions with STYLE_PREFIX, BRAND_ELEMENTS, buildPrompt(), category filters
- `scripts/images/lib/openai-client.ts` - OpenAI wrapper: generateImage(), generateWithConcurrency(), exponential backoff, rate limit detection
- `scripts/images/lib/sharp-pipeline.ts` - processImage() resize+WebP, getImageInfo() metadata, processBatch() for bulk processing
- `scripts/images/lib/cost-tracker.ts` - estimateCost(), formatCostEstimate(), generateReport(), writeReport()
- `scripts/images/lib/manifest.ts` - readManifest(), writeManifest(), addToManifest() with AST-free string replacement
- `src/data/image-manifest.ts` - Zod ImageEntrySchema, imageManifest array, lookup helpers (getServiceHeroImage, getCityHeroImage, getOGImage, getHomepageImages, getGalleryPairs, getContentPoolImages)
- `package.json` - Added openai, sharp, dotenv devDependencies + 6 images:* npm scripts
- `.env.example` - Added OPENAI_API_KEY placeholder
- `.gitignore` - Added /staging/ and /scripts/reports/ exclusions

## Decisions Made
- **Style prefix uses "soft natural daylight"** instead of "golden hour" to avoid double-warming with the CSS .photo-treatment overlay that already adds warm copper/forest tones (Research Pitfall 5)
- **MANIFEST_START/MANIFEST_END markers** in image-manifest.ts for reliable script-based array replacement without AST parsing
- **Square dimensions (800x800) for materials and seasonal content** images since they are used as card-style thumbnails, while crew and consultation images use landscape 1200x900
- **Gallery pair IDs** use matching scheme (gallery-before-{name} / gallery-after-{name}) sorted alphabetically for consistent pairing in getGalleryPairs()
- **API size selection** automatically determined from target dimensions: square -> 1024x1024 ($0.034), landscape -> 1536x1024 ($0.05)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required. OPENAI_API_KEY will be needed when running images:generate (Plan 02), but is not required for this foundation plan.

## Next Phase Readiness
- All shared libraries ready for Plan 02 (generate CLI) to import
- Prompt definitions complete for all 137 images
- Manifest infrastructure ready for approve script to populate
- Cost estimation available for dry-run mode
- Sharp pipeline ready for post-processing generated images

## Self-Check: PASSED

All 7 created files verified on disk. Both task commits (4207b76, a9f202a) verified in git log.

---
*Phase: 10-add-image-creation-system*
*Completed: 2026-03-10*
