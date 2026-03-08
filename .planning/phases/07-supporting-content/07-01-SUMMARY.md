---
phase: 07-supporting-content
plan: 01
subsystem: data
tags: [zod, schema, articles, comparisons, slug-registry, link-engine, dispatcher]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: Zod schemas, slug registry, link engine, page dispatcher
  - phase: 03-service-pages
    provides: 65 services with content
provides:
  - ComparisonContentSchema with Zod validation for comparison page content
  - ArticleContentSchema with Zod validation for supporting article content
  - 252 article definitions (63 services x 3 + 30 comparisons x 2 + 3 core)
  - ArticleSchema with id, title, slug, parentId, parentType, position, metaTitle, metaDescription
  - Slug registry extended with 252 article slugs (total 1,740 slugs)
  - Link engine getArticleLinks() for reverse silo navigation
  - Link engine getMoneyPageArticle() for money page Learn More sections
  - Page dispatcher article case in metadata and rendering
  - Placeholder ArticleTemplate for build-passing
affects: [07-02 templates, 07-03 through 07-09 content, service-template, comparison-template]

# Tech tracking
tech-stack:
  added: []
  patterns: [article-registry-pattern, article-link-engine-pattern]

key-files:
  created:
    - src/data/comparison-content/schema.ts
    - src/data/article-content/schema.ts
    - src/data/articles.ts
    - src/components/templates/ArticleTemplate.tsx
    - scripts/generate-articles-ts.ts
  modified:
    - src/lib/schemas.ts
    - src/data/slug-registry.ts
    - src/data/linking/link-engine.ts
    - src/app/[slug]/page.tsx

key-decisions:
  - "Excluded silicone-elastomeric-roof-coating and roof-replacement-cost from article generation (variants of parent services) to hit 63 services x 3 = 189 target"
  - "Article slugs use long-tail descriptive pattern (signs-you-need-roof-repair-nj) to avoid collision with short service slugs"
  - "Generation script (scripts/generate-articles-ts.ts) used to produce 252 validated article definitions deterministically"
  - "Placeholder ArticleTemplate created (15 lines) so build passes before Plan 02 full template"

patterns-established:
  - "Article registry pattern: ArticleSchema defines metadata, articles.ts exports Zod-validated array, articlesByParent Map for O(1) lookup"
  - "Article link engine: getArticleLinks() returns moneyPage + next/prev for reverse silo chain, getMoneyPageArticle() returns position-1 article"

requirements-completed: [COMP-01, COMP-05, ARTL-01, ARTL-02, ARTL-03, ARTL-04, ARTL-05]

# Metrics
duration: 11min
completed: 2026-03-08
---

# Phase 7 Plan 01: Infrastructure Summary

**252 article definitions with Zod schemas, slug registration, reverse silo link engine, and dispatcher routing for supporting content infrastructure**

## Performance

- **Duration:** 11 min
- **Started:** 2026-03-08T18:33:10Z
- **Completed:** 2026-03-08T18:44:53Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments
- ComparisonContentSchema and ArticleContentSchema created with full Zod validation
- 252 article definitions covering 63 services (3 each), 30 comparisons (2 each), and homepage (3)
- All 252 article slugs registered without collision (total slug count: 1,740)
- Link engine extended with getArticleLinks() and getMoneyPageArticle() for reverse silo navigation
- Page dispatcher routes article type slugs to ArticleTemplate

## Task Commits

Each task was committed atomically:

1. **Task 1: Create content schemas and 252 article definitions** - `e7a8a63` (feat)
2. **Task 2: Extend slug registry, link engine, and dispatcher** - `8102aaf` (feat)

## Files Created/Modified
- `src/data/comparison-content/schema.ts` - ComparisonContentSchema with comparisonRows[], verdict, detailedAnalysis[], faqs[]
- `src/data/article-content/schema.ts` - ArticleContentSchema with intro, sections[], conclusion, ctaHeading, ctaText
- `src/data/articles.ts` - 252 article definitions with ArticleSchema Zod validation
- `src/lib/schemas.ts` - SlugEntrySchema extended with articleId field
- `src/data/slug-registry.ts` - Article registration loop (252 slugs)
- `src/data/linking/link-engine.ts` - getArticleLinks(), getMoneyPageArticle(), ArticleLinks type
- `src/app/[slug]/page.tsx` - Article case in generateMetadata and SlugPage dispatcher
- `src/components/templates/ArticleTemplate.tsx` - Placeholder (Plan 02 replaces)
- `scripts/generate-articles-ts.ts` - Deterministic article definition generator

## Decisions Made
- Excluded silicone-elastomeric-roof-coating and roof-replacement-cost (variants) to match 63 services x 3 = 189 target per plan spec
- Used long-tail descriptive slugs for articles to avoid collision with existing short service slugs
- Created generation script for deterministic, validated article definitions rather than hand-writing 252 entries
- Placeholder ArticleTemplate ensures build passes before Plan 02 creates full editorial layout

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed shortName stripping breaking article titles**
- **Found during:** Task 1 (article title generation)
- **Issue:** Generation script stripped "Repair" and "Installation" from service names, turning "Roof Repair" into just "Roof" in article titles
- **Fix:** Removed aggressive word stripping; kept full service names for article titles, relying on truncTitle() for metaTitle length compliance
- **Files modified:** scripts/generate-articles-ts.ts
- **Verification:** All 252 titles verified as meaningful (no titles under 25 chars)
- **Committed in:** e7a8a63 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Minor title generation fix. No scope creep.

## Issues Encountered
None beyond the auto-fixed title generation issue.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 252 article definitions registered and validated
- Link engine ready for ArticleTemplate and ServiceTemplate/ComparisonTemplate Learn More sections
- Plan 02 can build full ArticleTemplate and ComparisonTemplate against these contracts
- Plans 03-09 can write content files against ArticleContentSchema and ComparisonContentSchema

---
*Phase: 07-supporting-content*
*Completed: 2026-03-08*
