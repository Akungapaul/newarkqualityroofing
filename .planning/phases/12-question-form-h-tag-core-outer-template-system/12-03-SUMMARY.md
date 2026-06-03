---
phase: 12-question-form-h-tag-core-outer-template-system
plan: 03
subsystem: city-combo-templates
tags: [h-tag, question-form, core-outer, city, combo, templates, heading-config]
requires:
  - "src/data/heading-config.ts (12-01): HEADING_CONFIG.city/.combo strings"
  - "scripts/audit-headings.ts (12-01): build-failing question-form gate"
provides:
  - "City §4.3 question-form H-tag tree + Core-before-Outer ordering"
  - "Combo §4.4 question-form H-tag tree (incl. ComboPlaceholder noindex path)"
  - "Two NEW shared city sections: CityPermits + CityMaterials (D-11)"
  - "ContentAuthorityBlock moved OUT of the Core band on both templates"
affects:
  - "City pages (21), Combo pages (255 keep + 942 noindex placeholder)"
  - "Shared sections also used by Service pages (12-02 scope): ContentAuthorityBlock, CompactTestimonial"
tech-stack:
  added: []
  patterns:
    - "Heading-config as single source of truth: template wires HEADING_CONFIG.<type>.coreH2 into the section that renders the first content H2"
    - "Demote non-question card-title H3/H4 labels to styled <span className='block'> (Header.tsx demote pattern) to satisfy the all-h2/h3/h4-are-questions audit rule"
    - "Pass the Core/section H2 string as a `heading` prop from the template (template = wiring point) rather than hardcoding in the section"
key-files:
  created:
    - "src/components/sections/CityPermits.tsx"
    - "src/components/sections/CityMaterials.tsx"
  modified:
    - "src/components/templates/CityTemplate.tsx"
    - "src/components/templates/ComboTemplate.tsx"
    - "src/components/sections/CityHero.tsx"
    - "src/components/sections/ComboHero.tsx"
    - "src/components/sections/CityServicesGrid.tsx"
    - "src/components/sections/CityOverview.tsx"
    - "src/components/sections/CityResidential.tsx"
    - "src/components/sections/CityCommercial.tsx"
    - "src/components/sections/CityNeighborhoods.tsx"
    - "src/components/sections/CityProjectSpotlights.tsx"
    - "src/components/sections/CityTestimonials.tsx"
    - "src/components/sections/CityFaqs.tsx"
    - "src/components/sections/CityNearbyCities.tsx"
    - "src/components/sections/CityPricing.tsx"
    - "src/components/sections/CityMapNap.tsx"
    - "src/components/sections/CityCtaBanner.tsx"
    - "src/components/sections/CompactTestimonial.tsx"
    - "src/components/sections/ContentAuthorityBlock.tsx"
    - "src/components/sections/ComboOverview.tsx"
    - "src/components/sections/ComboChallenges.tsx"
    - "src/components/sections/ComboProcess.tsx"
    - "src/components/sections/ComboPricing.tsx"
    - "src/components/sections/ComboWhyChooseUs.tsx"
    - "src/components/sections/ComboFaqs.tsx"
    - "src/components/sections/ComboRelatedLinks.tsx"
    - "src/components/sections/ComboCtaBanner.tsx"
decisions:
  - "§4.3 ordering: Core(ServicesGrid) → Residential → Commercial → Problems(Overview) → Neighborhoods → Materials → Permits → Cost → Projects → Testimonials → FAQs → WhyChoose → ContentAuthorityBlock → Location → Nearby"
  - "Materials precedes Permits (per the §4.3 brief tree order, line 138 before 140)"
  - "Non-question card-title H3/H4 labels demoted to <span block> rather than rewritten (entity names cannot be questions); only true section H2s carry the §4.3/§4.4 questions"
  - "ContentAuthorityBlock H2/H3 headings converted to question-form now (audit-correctness) even though full SEO-language removal is Phase 16"
metrics:
  duration: ~30min
  completed: 2026-06-03
  tasks: 3
  files: 28
  commits: 3
---

# Phase 12 Plan 03: City + Combo Question-Form H-Tag / Core-Outer Template System Summary

Rewrote the City (§4.3) and Combo (§4.4) templates and their section components to the verbatim question-form H-tag trees with Core-before-Outer ordering, added the two NEW shared city sections (Permits + Materials, D-11), and moved ContentAuthorityBlock out of the Core band on both templates (kept, not deleted — deletion is Phase 16). Covered the ComboPlaceholder path that the 942 noindex combos render.

## What Shipped

- **HTAG-05 (city):** Every city page H1 is `Who Provides Roofing Services in [City]?` as a single text node (sourced from `HEADING_CONFIG.city.h1`, no br/span). The first content H2 after the hero is the §4.3 Core `What Roofing Services Are Available in [City]?` (rendered by CityServicesGrid, now first in `<article>`). All city section H2s rewritten to their verbatim §4.3 questions. NEW `CityPermits` + `CityMaterials` sections render as real, substantive sections (4 multi-sentence paragraphs each) via shared localized copy with `[City]` interpolated — no new schema field, no 21 hand-authored variants.
- **HTAG-06 (combo):** Every combo page H1 is `Who Provides [Service] in [City]?` (single text node from `HEADING_CONFIG.combo.h1`). First content H2 is the §4.4 Core `What [Service] Is Available in [City]?` on BOTH the content path (ComboOverview) AND the ComboPlaceholder path (the 942 noindex combos), whose declarative `[Service] in [City], NJ` H2 was replaced with the Core question.
- **HTAG-07/08 (Core-before-Outer):** ContentAuthorityBlock moved out of the Core band on both templates; the first content H2 is now the Core string. Component kept (deletion is Phase 16) and its headings converted to question-form.
- **HTAG-01/03:** City + combo H1s are single uninterrupted question strings; non-question pseudo/card headings (H3/H4 entity labels) demoted to styled `<span>`.
- **§12 relabels:** "Nearby Service Areas" → `Where Else Do We Provide Roofing Services Near [City]?`; "Related Services & Locations" → question form.

### §4.3 ordering chosen (city)
Core (ServicesGrid) → Residential → Commercial → Problems (Overview) → Neighborhoods → **Materials → Permits** → Cost → Projects → Testimonials → Compact reviews → FAQs → WhyChoose → ContentAuthorityBlock (out of Core band) → Location → Nearby. Materials precedes Permits per the §4.3 brief tree.

### Shared copy length per new section
- **CityPermits:** 4 paragraphs — when a permit is required under the NJ Uniform Construction Code in Essex County, the IRC/code points an inspector checks (two-layer shingle limit, ice barrier, ventilation, wind fastening), who pulls the permit (the licensed contractor, NJ HIC registration), and the consequences of skipping it (stop-work orders, fines, insurance/home-sale red flags, historic-district/HOA review). `[City]` interpolated throughout.
- **CityMaterials:** 4 paragraphs — matching material to pitch/use/Essex-County weather, architectural asphalt + metal for pitched residential, TPO/PVC/EPDM/modified-bitumen/built-up membranes for flat commercial roofs, and an inspection-first decision process. `[City]` interpolated throughout.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 — Missing critical functionality] Converted ALL non-§4.3/§4.4-tree section headings on city/combo pages to question-form / demoted non-question card labels**
- **Found during:** Tasks 2 & 3
- **Issue:** The build-failing `audit:headings` rendered pass asserts that EVERY `<h2>/<h3>/<h4>` outside nav/footer/button/label is a question and that heading levels are monotonic — not just the §4.x tree H2s. Section components carried many non-question H2s (Overview "Overview", Challenges "Local Challenges in [City]", Pricing "[Service] Cost in [City]", CtaBanner "Don't Let a Small Leak…", etc.) and non-question card-title H3/H4 labels (neighborhood names, project titles, service category labels, nearby-city names, NAP/business-hours, why-choose reason titles, FAQ summary labels).
- **Fix:** Rewrote every rendered section H2 to a customer-facing question; demoted entity-name H3/H4 card labels to `<span className="block ...">` (same Tailwind classes, audit-safe). This is required for the city/combo rendered pages to pass the audit, not optional polish.
- **Files modified:** all 26 modified section/template files listed above.
- **Commits:** b988ca9 (city), f87f13f (combo).

**2. [Rule 2 — Missing critical functionality] Converted ContentAuthorityBlock + CompactTestimonial headings to question-form (shared components)**
- **Found during:** Tasks 2 & 3
- **Issue:** Both render on city/combo pages with non-question H2/H3s (and ContentAuthorityBlock carries SEO-facing labels §12 says to remove). They are also imported by ServiceTemplate (12-02 scope) and comparison/article paths.
- **Fix:** Converted their H2/H3 headings to question-form. This is correct for ALL page types under the §17 policy (a question H2 is required everywhere), so it is a beneficial shared fix, not a conflict. The full SEO-language scrub of ContentAuthorityBlock's body copy (Google/GSC/Search Console mentions in paragraphs) remains Phase 16 — only the H-tags were changed here.
- **Files modified:** ContentAuthorityBlock.tsx, CompactTestimonial.tsx.
- **Commits:** b988ca9.

**3. [Rule 3 — Blocking issue] Made legacy `heading` props optional to avoid unused-variable build noise**
- **Found during:** Task 2/3
- **Issue:** CityResidential/CityCommercial no longer render `content.*.heading` (the H2 is now a fixed §4.3 question); ComboChallenges/ComboProcess stopped using `cityName`/`serviceName`. The template still passes those props.
- **Fix:** Marked the now-unused props optional and stopped destructuring them; ComboOverview/Challenges/Process now take a `heading` prop wired from HEADING_CONFIG in the template. Full project `tsc --noEmit` is clean (exit 0).

### Note on TDD
The tasks are marked `tdd="true"`, but this project has no unit-test framework across 11 phases — the established test artifact is the build-failing `scripts/audit-headings.ts` shipped in 12-01 (already RED by design). Per the package-install exclusion in the deviation rules, installing a new test framework mid-wave would require a checkpoint. The audit (static pass green for city/combo config strings; rendered pass enforced after the 12-05 rebuild) is the RED→GREEN gate used here in place of a new framework.

## Verification

- Task 1 grep: new sections + hero H1 wired OK; `CityContentSchema` clean (no permits/materials field added, D-11). PASS
- Task 2 grep: CityTemplate contains heading-config + CityPermits + CityMaterials. PASS
- Task 3 grep: ComboTemplate contains heading-config; ComboPlaceholder declarative H2 removed. PASS
- `npx tsc --noEmit -p tsconfig.json` → exit 0 (clean, whole project).
- `npm run audit:headings` static pass: zero city/combo/service config violations (the 252 reported are ALL article-title violations owned by plan 12-04). Rendered (DOM) pass intentionally skipped — requires the 12-05 `next build` per `<audit_not_fully_green_midwave>`.
- City hero / combo hero H1s have no `<br>` element children (single text node). PASS
- `next build` NOT run (out of scope per mid-wave instruction; the orchestrator runs the full rendered gate after the wave).

## Known Stubs

None. CityPermits/CityMaterials render substantive multi-paragraph localized copy (not placeholders). No "static for now"/"v1"/"placeholder" wording introduced.

## Self-Check: PASSED

- FOUND: src/components/sections/CityPermits.tsx
- FOUND: src/components/sections/CityMaterials.tsx
- FOUND commit 60349c7 (Task 1)
- FOUND commit b988ca9 (Task 2)
- FOUND commit f87f13f (Task 3)
