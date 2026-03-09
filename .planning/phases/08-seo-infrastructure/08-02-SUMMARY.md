---
phase: 08-seo-infrastructure
plan: 02
subsystem: structured-data
tags: [json-ld, schema-org, seo, structured-data]
dependency_graph:
  requires: [08-01]
  provides: [schema-utility, json-ld-markup]
  affects: [all-templates, homepage]
tech_stack:
  added: [schema.org-json-ld]
  patterns: [builder-pattern, graph-composition]
key_files:
  created:
    - src/lib/schema.ts
    - src/components/seo/JsonLd.tsx
  modified:
    - src/app/page.tsx
    - src/components/templates/ServiceTemplate.tsx
    - src/components/templates/CityTemplate.tsx
    - src/components/templates/ComboTemplate.tsx
    - src/components/templates/ComparisonTemplate.tsx
    - src/components/templates/ArticleTemplate.tsx
    - src/components/templates/CoreTemplate.tsx
decisions:
  - "Builder pattern with buildJsonLdGraph composing individual schema functions into @graph"
  - "Consistent @id references across all schema types for Google entity linking"
  - "CoreTemplate uses IIFE pattern for page content to wrap with optional JsonLd"
  - "No schema on noindex pages (thank-you, privacy-policy) per plan spec"
metrics:
  duration: 5min
  completed: "2026-03-09"
  tasks_completed: 2
  tasks_total: 2
---

# Phase 8 Plan 02: Structured Data (JSON-LD) Summary

Shared JSON-LD schema utility library with 10 builder functions, wired into all 7 page types with correct schema-per-page-type mapping.

## What Was Built

### Task 1: Schema utility library and JsonLd component
- **src/lib/schema.ts**: 10 exported builder functions -- buildOrganizationSchema, buildRoofingContractorSchema, buildWebSiteSchema, buildWebPageSchema, buildLocalBusinessSchema, buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema, buildArticleSchema, buildJsonLdGraph
- **src/components/seo/JsonLd.tsx**: Server component rendering `<script type="application/ld+json">` with JSON.stringify
- All @id references consistent (`/#organization`, `/#roofingcontractor`, `/#website`, `/{slug}/#webpage`, etc.)
- Shared internal helpers for PostalAddress, OpeningHours, AggregateRating

### Task 2: Wire schema into all templates
- **Homepage**: Replaced 100+ line inline HomeJsonLd with 6-line buildJsonLdGraph call (Organization + RoofingContractor + WebSite + WebPage + Breadcrumb + FAQ)
- **ServiceTemplate**: Service + WebPage + Breadcrumb + FAQ
- **CityTemplate**: LocalBusiness/RoofingContractor with city areaServed + WebPage + Breadcrumb + FAQ
- **ComboTemplate**: Service + WebPage + Breadcrumb + FAQ (skipped on placeholder pages)
- **ComparisonTemplate**: WebPage + Breadcrumb + FAQ (only when content loaded)
- **ArticleTemplate**: Article + WebPage + Breadcrumb (no FAQ per spec)
- **CoreTemplate**: RoofingContractor for about/contact, WebPage+Breadcrumb for hubs, none for noindex pages

## Deviations from Plan

None -- plan executed exactly as written.

## Verification

- TypeScript compilation: clean (zero errors)
- Next.js build: 1,752 static pages generated successfully
- Schema types match page type mapping from plan exactly

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 38a164f | Schema utility library + JsonLd component |
| 1+2 | 4876d09 | Wire schema into all 7 page types |

## Self-Check: PASSED
