---
phase: 12-question-form-h-tag-core-outer-template-system
plan: 02
subsystem: ui
tags: [next.js, react, tsx, h-tag-hierarchy, seo, heading-config, core-outer]

# Dependency graph
requires:
  - phase: 12-01
    provides: "src/data/heading-config.ts (verbatim §4.1–4.4 question-form strings) + build-failing scripts/audit-headings.ts"
provides:
  - "Homepage (src/app/page.tsx) emits the §4.1 question-form tree Core-first: ServicesGrid Core H2 + 7 service H3s, then Outer H2s (Why/Process/Where/Cost/FAQ/Free-Estimate)"
  - "New homepage 5-step 'How Does Our Roofing Process Work?' H2 section + a /roofing-knowledge-base link H2 section"
  - "ServiceTemplate emits the §4.2 question-form tree Core-first (ServiceOverview = Core H2), ContentAuthorityBlock moved out of the Core band"
  - "Single-text-node question-form H1 on homepage (HeroSection) and every service page (ServiceHero) — no <br>/<span> split"
  - "Header.tsx nav is H-tag-free sitewide (3 dropdown <h3> demoted to <span>)"
  - "Every homepage + service-page rendered <h2>/<h3>/<h4> is a question (declarative section headings rewritten; card/step labels demoted to <span>)"
affects: [12-05 (rendered audit gate consumes index.html + roof-repair.html), 13 (KB hub linked from homepage), 16 (PriorityIndexingHub / ContentAuthorityBlock SEO-jargon scrub + deletion)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Section headings sourced from HEADING_CONFIG (single source of truth) via props instead of hardcoded/per-content strings"
    - "Demote non-section card/step/category labels from <h*> to styled <span class=\"block ...\"> to keep the heading tree question-only"
    - "Core-before-Outer JSX sibling reordering on flat page + template content columns; move whole <AnimateIn> wrapper with child"

key-files:
  created: []
  modified:
    - "src/app/page.tsx — Core-first reorder, 5-step process section, KB-link section, PriorityIndexingHub out of Core, pseudo-heading promotions"
    - "src/components/sections/HeroSection.tsx — single-text-node H1 from HEADING_CONFIG.home.h1"
    - "src/components/sections/ServiceHero.tsx — single-text-node H1 from HEADING_CONFIG.service.h1(name)"
    - "src/components/layout/Header.tsx — 3 nav <h3> → <span> (zero nav H-tags sitewide)"
    - "src/components/templates/ServiceTemplate.tsx — §4.2 tree wiring + Core-first + ContentAuthorityBlock relocation"
    - "src/components/sections/ServiceOverview.tsx — new heading prop, renders the §4.2 Core H2"
    - "9 homepage + 13 service section components — question-form headings"

key-decisions:
  - "Treated scripts/audit-headings.ts + the per-task grep acceptance checks as the TDD harness (no unit-test framework exists; the build-failing audit IS the project's test convention). RED state captured before edits; GREEN confirmed by grep/typecheck/lint."
  - "ServicesGrid carries the single §4.1 Core H2 + the 7 verbatim service H3s; HomeRepairServices/HomeResidentialCommercial are Core supporting narrative with their own distinct question H2s."
  - "Rewrote ALL homepage + service rendered headings to questions (not just the plan's listed files) because the §17 rendered audit checks every h2/h3/h4 — Rule 2 correctness for HTAG-02/04."
  - "Demoted card/step/category labels (service-card names, process step titles, region labels, comparison names) to <span> rather than inventing fake questions — keeps the heading tree clean and question-only."

patterns-established:
  - "HEADING_CONFIG-as-source-of-truth: components receive question strings via props from the template/page, never hardcode the verbatim brief text."
  - "span-demotion: visual label that is not a real section heading uses <span className=\"block ...\"> with identical Tailwind classes."

requirements-completed: [HTAG-01, HTAG-02, HTAG-03, HTAG-04, HTAG-07, HTAG-08]

# Metrics
duration: ~50min
completed: 2026-06-03
---

# Phase 12 Plan 02: Question-Form H-Tag + Core/Outer Homepage & Service Template System Summary

**Homepage and ServiceTemplate rewritten to the verbatim §4.1/§4.2 question-form H-tag trees with Core-before-Outer ordering, single-text-node question H1s, a sitewide H-tag-free Header nav, plus a new 5-step process section and a Roofing-Knowledge-Base link section on the homepage.**

## Performance

- **Duration:** ~50 min
- **Started:** 2026-06-03T15:47Z (approx)
- **Completed:** 2026-06-03T16:36Z
- **Tasks:** 3
- **Files modified:** 30

## Accomplishments
- HTAG-01: Homepage (`HeroSection`) and every service page (`ServiceHero`) now render a single uninterrupted question-form `<h1>` with zero element children, sourced from `HEADING_CONFIG` (no `<br>`/`<span>` split).
- HTAG-03: All three sitewide `Header.tsx` nav-dropdown `<h3>` elements demoted to `<span className="block ...">` (visual style unchanged) — zero H-tags inside nav on every page. Homepage map/gallery/final-CTA pseudo-heading `<p>`s promoted to real question-form `<h2>`/`<h3>`.
- HTAG-02: Homepage emits the §4.1 tree Core-first — `ServicesGrid` renders the Core H2 `"What Roofing Services Do We Provide in Newark and Essex County?"` plus the 7 verbatim service `<h3>`s as the first content section after the hero; new 5-step `"How Does Our Roofing Process Work?"` H2 section and a `/roofing-knowledge-base` link H2 section added; Outer H2s placed after Core sourced from `HEADING_CONFIG.home.outerH2s`.
- HTAG-04/07/08: `ServiceTemplate` sources the §4.2 H2 tree from `HEADING_CONFIG.service.h2s(name)`; `ServiceOverview` renders the Core H2 `"What [Service] Do We Provide?"` first; `ContentAuthorityBlock` moved OUT of the Core band (after the process section); §12 relabel applied (`"What Related Roofing Services Should You Consider?"`).
- `PriorityIndexingHub` moved out of the homepage Core band (component kept — deletion is Phase 16).
- Every rendered `<h2>/<h3>/<h4>` on the homepage and service pages is now a question (or a config-driven prop); LEAD-01 preserved (`#lead-form` stays first in both heroes).

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix sitewide split H1s + Header nav H-tags + homepage pseudo-headings** - `faea789` (fix)
2. **Task 2: Homepage Core-first reorder + 5-step process + KB-link + Outer H2s + section question headings** - `81f9890` (feat)
3. **Task 3: ServiceTemplate Core-first reorder + §4.2 question headings + ContentAuthorityBlock out of Core band** - `7180508` (feat)

_Note: No unit-test framework exists in this repo; the build-failing `scripts/audit-headings.ts` plus the per-task grep acceptance checks served as the TDD harness. RED state for every target (Header h-tag count, HEADING_CONFIG imports, KB link, split-H1) was confirmed failing before edits, then GREEN after — so each task is a single feat/fix commit rather than a test→feat pair._

## Files Created/Modified

**Task 1**
- `src/components/sections/HeroSection.tsx` - Single-text-node H1 from `HEADING_CONFIG.home.h1`; tagline preserved as styled `<p>`.
- `src/components/sections/ServiceHero.tsx` - Single-text-node H1 from `HEADING_CONFIG.service.h1(service.name)`; `#lead-form` untouched.
- `src/components/layout/Header.tsx` - 3 nav dropdown `<h3>` → `<span className="block ...">`.
- `src/app/page.tsx` - Pseudo-heading `<p>`s (Find Us / See Our Work / final CTA) promoted to question `<h2>`/`<h3>`; final CTA = `HEADING_CONFIG.home.outerH2s[5]`.

**Task 2**
- `src/app/page.tsx` - Core-first reorder; new 5-step process H2 section + `/roofing-knowledge-base` link section; Outer H2s after Core; `PriorityIndexingHub` moved out of Core.
- `src/components/sections/ServicesGrid.tsx` - Now the §4.1 Core section: Core H2 + 7 verbatim service `<h3>`s.
- `src/components/sections/HomeRepairServices.tsx` - Question-form H2 + 2 H3s.
- `src/components/sections/HomeResidentialCommercial.tsx` - Question-form H2 + 2 H3s.
- `src/components/sections/HomeWhyChooseUs.tsx` - H2 = `outerH2s[0]`; H3 → question.
- `src/components/sections/HomePricingTable.tsx` - H2 = `outerH2s[3]`; H3 + H4 → questions.
- `src/components/sections/LocationsGrid.tsx` - H2 = `outerH2s[2]`.
- `src/components/sections/FaqAccordion.tsx` - H2 = `outerH2s[4]`.
- `src/components/sections/BeforeAfterGallery.tsx` - H2 → question.
- `src/components/sections/FeaturedCombos.tsx` - H2 → question; per-service `<h3>` → `<span>`.
- `src/components/sections/HomeComparisonGrid.tsx` - H2 → question; category `<h3>` → `<span>`.
- `src/components/sections/HomepageGuides.tsx` - H2 → question (article-title `<h3>` becomes a question once 12-04 lands).
- `src/components/sections/PriorityIndexingHub.tsx` - H2 + 4 H3s → user-facing questions (SEO-jargon copy scrub is Phase 16).

**Task 3**
- `src/components/templates/ServiceTemplate.tsx` - §4.2 tree wiring + Core-first + `ContentAuthorityBlock` relocation + question headings to all sections (incl. `ServiceAreasGrid`, `RelatedServices`, `ServiceCtaBanner`).
- `src/components/sections/ServiceOverview.tsx` - New `heading` prop; renders the Core H2.
- `src/components/sections/ServiceSigns.tsx`, `ServiceApproach.tsx`, `ServiceProcess.tsx`, `ServicePricing.tsx`, `ServiceWhyChooseUs.tsx`, `ServiceFaq.tsx` - Question H2 via prop; sub-headings (subheadings/step.title/reason.title) demoted to `<span>`.
- `src/components/sections/RelatedServices.tsx` - `heading` prop (§12 relabel); card `<h3>` → `<span>`.
- `src/components/sections/ServiceLearnMore.tsx`, `ServiceRelatedComparisons.tsx` - `heading` prop; comparison card `<h3>` → `<span>`.
- `src/components/sections/CompactTestimonial.tsx` - Optional `heading` prop defaulting to a question (also consumed by CityTemplate without breakage).
- `src/components/sections/ServiceAreasGrid.tsx` - `heading` prop; region `<h3>` → `<span>`.
- `src/components/sections/ServiceCtaBanner.tsx` - `heading` prop (= `How Can You Schedule [Service]?`).
- `src/components/sections/ContentAuthorityBlock.tsx` - Title + 4 section `<h3>`s → questions (shared across service/city/combo — benefits all page types).

## Decisions Made
- The build-failing heading audit + per-task grep checks are the test harness (no jest/vitest in repo; introducing one would be a Rule-4 architectural change contradicting the project's audit-script convention). RED → GREEN confirmed per task.
- `ServicesGrid` is the single §4.1 Core section (one Core H2 + the 7 verbatim service H3s). Other Core-band sections keep distinct question H2s rather than duplicating the Core H2.
- Card/step/category labels that are not real section headings were demoted to `<span>` (identical classes) rather than fabricating questions, keeping the rendered heading tree question-only and monotonic.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Rewrote headings in 7 homepage + 2 shared section components not in the plan's `<files>` list**
- **Found during:** Task 2 & Task 3
- **Issue:** The plan's `<files_modified>` listed the primary sections, but the §17 rendered audit (12-05 gate) checks EVERY `<h2>/<h3>/<h4>` on the homepage and service pages. Additional sections rendered on those pages still had declarative (non-question) headings — `BeforeAfterGallery`, `FeaturedCombos`, `HomeComparisonGrid`, `HomepageGuides`, `PriorityIndexingHub` (homepage); `ContentAuthorityBlock`, `ServiceOverview`, `ServiceProcess`, `ServiceLearnMore`, `ServiceRelatedComparisons`, `CompactTestimonial`, `ServiceAreasGrid`, `ServiceCtaBanner`, `RelatedServices` (service). Leaving them would fail HTAG-02/04 at the rendered gate.
- **Fix:** Converted each section's H2/H3/H4 to question form (or sourced from `HEADING_CONFIG` via props); demoted true card/step/category labels to `<span>`.
- **Files modified:** the 9 additional section components listed above.
- **Verification:** `npx tsc --noEmit` clean; `eslint` clean; a literal-heading scanner across all homepage + service section components reports zero non-question, non-prop `<h*>`.
- **Committed in:** `81f9890` (Task 2), `7180508` (Task 3).

**2. [Rule 2 - Missing Critical] `ServiceOverview`/`ServiceProcess`/`ServicePricing`/`ServiceFaq`/`RelatedServices`/etc. gained a `heading` prop**
- **Found during:** Task 3
- **Issue:** Several service sections hardcoded their H2 (e.g. "Overview", "Our Process", "Frequently Asked Questions", "Related Services") or derived it from per-service content fields — none were questions. The template needed to drive question headings from `HEADING_CONFIG`.
- **Fix:** Added/required a `heading` prop on those components and pass the §4.2 question strings from `ServiceTemplate`. `CompactTestimonial`'s `heading` is optional (defaulting to a question) because `CityTemplate` (12-03 scope) also consumes it without the prop.
- **Files modified:** the service section components.
- **Verification:** typecheck/lint clean; all callers are within `ServiceTemplate` (verified by grep) except `CompactTestimonial` which now has a safe default.
- **Committed in:** `7180508` (Task 3).

---

**Total deviations:** 2 auto-fixed (both Rule 2 — missing critical functionality required for HTAG-02/04 rendered-audit compliance).
**Impact on plan:** No scope creep beyond the homepage + service page types the plan owns. All edits are heading-text/markup + prop-threading; no logic, schema, network, or data changes. City/combo (`12-03`), article titles (`12-04`), and the rendered build gate (`12-05`) remain untouched and in their owners' scope.

## Issues Encountered
- The homepage Core band originally had two competing declarative H2s (`HomeRepairServices` "Expert Repair…" and `ServicesGrid` "Our Roofing Services"). Resolved by designating `ServicesGrid` as the single §4.1 Core section and giving the narrative sections their own distinct question H2s, so the first content H2 is unambiguously the Core string.

## Known Stubs
None introduced. Two cross-plan dependencies (not stubs) to note:
- `HomepageGuides` and `ServiceLearnMore` render `{article.title}` (a `<p>` in ServiceLearnMore; an `<h3>` in HomepageGuides). Article titles become questions when **plan 12-04** regenerates `src/data/articles.ts`. Until 12-04 lands, the `HomepageGuides` `<h3>` (article title) is not yet a question — this is expected and owned by 12-04, and is reflected in the 252 static article-title violations that remain mid-wave.

## Mid-Wave Audit Status (expected, not a failure)
`npm run audit:headings` reports 252 violations — ALL are article-title issues owned by plan **12-04** (`scripts/generate-articles-ts.ts` + `src/data/articles.ts` regen). There are zero `home.`/`service.`/`city.`/`combo.`/`H1-repeated-as-H2` config violations in this plan's scope. The rendered (DOM) pass is intentionally SKIPPED (no `.next` build) — it is the **12-05** gate after all wave plans land + a rebuild. Per the wave instructions, `next build` was not run.

## Threat Flags
None. This plan only rewrites heading text/markup and reorders SSR sections — no new network endpoints, auth paths, file access, or schema changes. LEAD-01 (T-12-LEAD mitigation) preserved: `#lead-form` remains first in both heroes (verified post-edit).

## Next Phase Readiness
- Homepage `index.html` and service `roof-repair.html` are ready to satisfy the §17 rendered audit once 12-03 (city/combo) + 12-04 (article titles) land and 12-05 runs `next build && npm run audit:headings`.
- `PriorityIndexingHub` and `ContentAuthorityBlock` SEO-jargon body copy (and component deletion) remain Phase 16 work — only their headings were made question-form here.

## Self-Check: PASSED
- FOUND: `.planning/phases/12-question-form-h-tag-core-outer-template-system/12-02-SUMMARY.md`
- FOUND commit `faea789` (Task 1), `81f9890` (Task 2), `7180508` (Task 3)
- FOUND: `src/app/page.tsx`, `src/components/layout/Header.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/ServiceHero.tsx`, `src/components/templates/ServiceTemplate.tsx`

---
*Phase: 12-question-form-h-tag-core-outer-template-system*
*Completed: 2026-06-03*
