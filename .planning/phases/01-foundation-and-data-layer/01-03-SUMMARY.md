---
phase: 01-foundation-and-data-layer
plan: 03
subsystem: routing
tags: [slug-registry, SSG, routing, combos, templates]
depends_on:
  requires: ["01-01", "01-02"]
  provides: ["slug-registry", "catch-all-routing", "placeholder-templates", "combo-data"]
  affects: ["02-*", "03-*", "04-*", "05-*", "06-*"]
tech-stack:
  added: []
  patterns: ["slug-registry-singleton", "catch-all-dispatcher", "SSG-generateStaticParams", "collision-detection"]
key-files:
  created:
    - src/lib/slug-utils.ts
    - src/data/combos.ts
    - src/data/slug-registry.ts
    - src/app/[slug]/page.tsx
    - src/components/templates/ServiceTemplate.tsx
    - src/components/templates/CityTemplate.tsx
    - src/components/templates/ComboTemplate.tsx
    - src/components/templates/ComparisonTemplate.tsx
    - src/components/templates/CoreTemplate.tsx
  modified: []
decisions:
  - id: city-slug-pattern
    decision: "City pages use 'roofing-in-{city}-nj' slug pattern"
    reason: "Avoids collision with service slugs while being SEO-descriptive"
  - id: dynamic-params-false
    decision: "dynamicParams = false for strict 404 on unknown slugs"
    reason: "No runtime fallback needed; all pages are statically generated"
  - id: combo-meta-truncation
    decision: "Combo metaTitle has cascading truncation strategy"
    reason: "Some service+city combos exceed 70 chars; falls back to shorter brand name then no brand"
metrics:
  duration: "2min"
  completed: "2026-03-05"
---

# Phase 1 Plan 3: Slug Registry, Routing, and Templates Summary

**Slug registry with 1,444 entries, collision detection, catch-all [slug] SSG dispatcher generating all static pages with 5 placeholder templates.**

## What Was Built

### Task 1: Slug Utilities, Combo Generation, and Slug Registry
- **slug-utils.ts**: Three utility functions -- `slugify()`, `generateComboSlug()` (service-city-nj pattern), `generateCityPageSlug()` (roofing-in-city-nj pattern)
- **combos.ts**: Cross-product of 63 services x 21 cities = 1,323 combo entries with Zod-validated metaTitle (under 70 chars) and metaDescription (under 160 chars)
- **slug-registry.ts**: Central Map-based registry with O(1) lookup, collision detection that throws at module load, and public API (getAllSlugs, getPageDataBySlug, getSlugCount, getSlugsByType)

**Registry breakdown:** 63 services + 21 cities + 1,323 combos + 30 comparisons + 7 core pages = 1,444 total

### Task 2: Catch-All Dispatcher and Placeholder Templates
- **[slug]/page.tsx**: Single dynamic segment dispatcher with `generateStaticParams()` for all 1,444 slugs, `dynamicParams = false` for strict 404s, `generateMetadata()` for per-page SEO, and async params (Next.js 16 pattern)
- **5 placeholder templates**: ServiceTemplate, CityTemplate, ComboTemplate, ComparisonTemplate, CoreTemplate -- each shows page type badge, title, relevant metadata, and placeholder areas for content and lead form

**Build output:** 1,448 static pages generated in ~1.6 seconds

## Verification Results

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Zero errors |
| `npm run build` | Success, 1,448 pages |
| Slug count | 1,444 (63+21+1323+30+7) |
| /roof-repair resolves to ServiceTemplate | Yes |
| /roofing-in-newark-nj resolves to CityTemplate | Yes |
| /roof-repair-newark-nj resolves to ComboTemplate | Yes |
| /asphalt-shingles-vs-metal-roofing resolves to ComparisonTemplate | Yes |
| /about resolves to CoreTemplate | Yes |
| /nonexistent-page returns undefined (404) | Yes |
| Collision detection | Zero collisions |
| Homepage (/) still works | Yes |

## Deviations from Plan

None -- plan executed exactly as written.

## Decisions Made

1. **City slug pattern**: City pages use `roofing-in-{city}-nj` to avoid collision with service slugs
2. **dynamicParams = false**: Strict 404 for unknown slugs, no runtime fallback
3. **Combo meta truncation**: Cascading strategy for metaTitle -- full brand name, abbreviated brand, no brand -- to stay under 70 chars

## Commits

| Hash | Message |
|------|---------|
| 9b97446 | feat(01-03): create slug utilities, combo generation, and slug registry |
| 758035e | feat(01-03): create catch-all [slug] dispatcher with SSG and placeholder templates |

## Next Phase Readiness

- All 1,444 URLs routable and statically generated
- Templates are placeholders ready for content in Phases 3-5
- Lead form placeholder areas ready for Phase 6
- Slug registry API available for any component that needs page data lookup
- Article pages (~253) deferred to Phase 7 per ROADMAP.md
