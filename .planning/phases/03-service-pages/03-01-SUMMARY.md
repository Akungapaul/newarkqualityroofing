---
phase: 03-service-pages
plan: 01
subsystem: service-template
tags: [service-pages, template, layout, zod, lead-form, breadcrumbs, floating-cta]
depends_on:
  requires: [01-01, 01-02, 02-01]
  provides: [ServiceTemplate, ServiceContentSchema, service-section-components]
  affects: [03-02, 03-03, 03-04]
tech-stack:
  added: []
  patterns: [split-hero-layout, sticky-sidebar, floating-mobile-cta, placeholder-content-fallback]
key-files:
  created:
    - src/components/sections/Breadcrumbs.tsx
    - src/components/sections/ServiceHero.tsx
    - src/components/sections/StickyFormSidebar.tsx
    - src/components/sections/FloatingCtaButton.tsx
    - src/components/sections/ServiceOverview.tsx
    - src/components/sections/ServiceSigns.tsx
    - src/components/sections/ServiceApproach.tsx
    - src/components/sections/ServiceAudience.tsx
    - src/components/sections/ServiceProcess.tsx
    - src/components/sections/ServiceFaq.tsx
    - src/components/sections/RelatedServices.tsx
    - src/components/sections/ServiceCtaBanner.tsx
    - src/data/service-content/index.ts
  modified:
    - src/lib/schemas.ts
    - src/lib/types.ts
    - src/components/templates/ServiceTemplate.tsx
decisions:
  - id: 03-01-01
    decision: Placeholder content generated from Service object fields
    rationale: Allows all 65 service pages to render before content plans populate real data
  - id: 03-01-02
    decision: ServiceAudience component is variant-based (residential/commercial) rather than two separate components
    rationale: DRY approach with accent color differentiation via variant prop
  - id: 03-01-03
    decision: ServiceFaq is standalone (not reusing FaqAccordion) to fit within content column
    rationale: FaqAccordion has its own section wrapper/heading that conflicts with the sidebar layout
metrics:
  duration: 3.5min
  completed: 2026-03-06
---

# Phase 3 Plan 1: Service Template Infrastructure Summary

**ServiceTemplate with 12 section components, ServiceContentSchema, sticky sidebar, and mobile floating CTA for 65 service pages.**

## What Was Built

### ServiceContentSchema (schemas.ts + types.ts)
Zod schema validating service page content structure: overview paragraphs, signs/symptoms, approach methodology, residential/commercial audience sections, process steps, and FAQs. All with min/max array constraints.

### Layout Infrastructure (4 components)
- **Breadcrumbs**: Semantic `<nav aria-label="Breadcrumb">` with Home > Services > [Service Name] path
- **ServiceHero**: Split 3/2 grid layout with H1, benefit bullets, PhoneNumber left and LeadForm right. Forest-dark background with layered gradient treatment matching HeroSection pattern.
- **StickyFormSidebar**: `sticky top-24` wrapper, hidden on mobile (`hidden lg:block`)
- **FloatingCtaButton**: Client component (`'use client'`), fixed bottom bar on mobile (`lg:hidden`), anchors to `#lead-form`

### Content Sections (8 components)
- **ServiceOverview**: 2-3 paragraphs under H2
- **ServiceSigns**: Warning signs bullet list with alert icons
- **ServiceApproach**: Methodology paragraphs
- **ServiceAudience**: Variant-based (residential=forest accent, commercial=copper accent) with CTA button
- **ServiceProcess**: Numbered steps with decorative circles
- **ServiceFaq**: details/summary accordion (standalone, not reusing FaqAccordion)
- **RelatedServices**: Card grid linking to same-category services (max 4)
- **ServiceCtaBanner**: Full-width dark CTA section with inline LeadForm

### ServiceTemplate (complete rewrite)
Composes all 12 section components into the full service page layout:
- Calls `getServiceMenuGroups()` server-side
- Tries `getServiceContent()`, falls back to placeholder generator
- Commercial-first ordering for 5 dedicated commercial service IDs
- Related services: same category, exclude current, max 4
- 3-column grid: 2/3 content + 1/3 sticky sidebar on desktop

### Stub service-content/index.ts
Exports `getServiceContent()` that throws (template catches gracefully). Will be replaced in Plan 03-04.

## Deviations from Plan

None -- plan executed exactly as written.

## Verification Results

- `npx tsc --noEmit`: zero errors
- `npx next build`: 1492 pages generated successfully
- ServiceContentSchema in schemas.ts: confirmed
- FloatingCtaButton has `'use client'` directive: confirmed
- All key links verified (ServiceTemplate -> ServiceHero -> LeadForm, getServiceMenuGroups)

## Commits

| # | Hash | Description |
|---|------|-------------|
| 1 | 570e865 | ServiceContentSchema, types, and 4 layout components |
| 2 | c4a7f87 | 8 content section components |
| 3 | c8b661f | ServiceTemplate full rebuild with 10-section layout |

## Next Phase Readiness

Plans 03-02, 03-03, and 03-04 can now populate real content via `getServiceContent()`. The placeholder fallback ensures pages render in the meantime. No blockers.
