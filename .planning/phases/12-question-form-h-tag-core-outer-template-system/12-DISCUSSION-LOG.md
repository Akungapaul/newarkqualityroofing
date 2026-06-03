# Phase 12: Question-Form H-Tag & Core/Outer Template System - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-03
**Phase:** 12-question-form-h-tag-core-outer-template-system
**Areas discussed:** Heading-audit strategy, Audit page-set / scope, New city sections content, 253 article-title rewrites

> **Note:** The page-level H-tag trees (§4.1–4.4) and the heading policy (§17) are spec-locked verbatim and were NOT discussed as gray areas. The user asked for a plain-language explanation of the phase first (provided before the discussion). All four HOW gray areas were selected for discussion.

---

## Heading-audit strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Hybrid | Static check of heading strings/data across all pages + a rendered-HTML pass on one page per template for DOM-only rules; `process.exit(1)` on violation. | ✓ |
| Rendered HTML only | Build, then parse actual HTML of representative pages against the real DOM. Most truthful but needs a build and only sees enumerated samples. | |
| Static .tsx/AST only | Parse template/section JSX for h1..h4, no build. Fast (matches existing audit style) but weak on DOM-only + Core-before-Outer rules. | |
| You decide | Defer the approach to planning. | |

**User's choice:** Hybrid
**Notes:** Chosen because the existing `audit-headings.ts` is data-level + advisory and enforces the contradictory old keyword rules. Hybrid catches both the text rules (all pages) and DOM rules (split-H1/`<br>`, nav/footer/form H-tags, skipped levels, Core-before-Outer) cheaply since templates are shared. Follows the Phase 11 `audit:redirects`/`audit:sitemap` `process.exit(1)` fail-pattern.

---

## Audit page-set / scope

| Option | Description | Selected |
|--------|-------------|----------|
| Spec scope + hubs | Enforce on home, all service, all city, all live combos (255 keep + 942 noindex, shared ComboTemplate), and key core/hub pages (roofing-services & service-areas hubs, 6 new hubs, contact, about). Article titles checked (not bodies). Comparison + existing-article bodies deferred; privacy/thank-you/404 excluded. | ✓ |
| Everything that renders | Also force ComparisonTemplate headings + all 253 article bodies to question-form now. | |
| Core four only | Only home/service/city/combo + article titles; defer all core/hub/comparison/article-body enforcement. | |
| You decide | Defer the enforced page-set to planning. | |

**User's choice:** Spec scope + hubs
**Notes:** Matches the Phase 12 spec line (home/Service/City/Combo/Core). "Everything that renders" conflicts with §18 (don't force existing article bodies into a shallow shape) and pulls Phase 13+ work forward. All live combos covered for free via the shared template. A site-wide crawl re-checks all H-tags in Phase 17 (QA-01).

---

## New city sections content

| Option | Description | Selected |
|--------|-------------|----------|
| Shared, localized copy | Add Permits + Materials headings with one shared content block each, `[City]` interpolated; no new per-city fields, no 21 variants; real (not thin) sections. | ✓ |
| Per-city unique content | Extend the city schema with permits[]/materials[] and author unique copy for all 21 cities. | |
| Headings + minimal stub | Add the H2s with 1–2 localized sentences each. | |
| You decide | Defer the content depth to planning. | |

**User's choice:** Shared, localized copy
**Notes:** City content currently has no `permits`/`materials` fields. Shared localized copy keeps Phase 12 structural while satisfying the "no thin sections" intent; per-city enrichment can come later. Per-city unique content would be effectively Phase-13-scale authoring.

---

## 253 article-title rewrites

**Question 1 — generation approach:**

| Option | Description | Selected |
|--------|-------------|----------|
| Rewrite generator patterns + regen | Rewrite the ~12 title-pattern templates in `generate-articles-ts.ts` to question form, then regenerate `articles.ts`. Deterministic, slugs stable, uniqueness preserved by name interpolation. | ✓ |
| LLM-batch + review | LLM-generate per-title questions from existing title/topic/cluster + review/dedup pass. | |
| Manual authoring | Hand-write all 253 question titles. | |

**User's choice:** Rewrite generator patterns + regen
**Notes:** Confirmed by inspection — `articles.ts` is emitted by `generate-articles-ts.ts` from ~12 title patterns interpolating service/comparison names. Editing the patterns covers all 253 deterministically; the audit's uniqueness check guards pattern collisions. LLM/manual are overkill and would be wiped on regen unless written back into the generator.

**Question 2 — title vs metaTitle scope:**

| Option | Description | Selected |
|--------|-------------|----------|
| title → question; keep metaTitle concise | Rewrite only the on-page H1 (`article.title`, no cap). Keep `metaTitle` ≤60-char keyword form (question only where it fits). | ✓ |
| Both → question form | Make both `title` and `metaTitle` questions. | |
| You decide | Defer the title/metaTitle scope to planning. | |

**User's choice:** title → question; keep metaTitle concise
**Notes:** The on-page H1 is `article.title` (confirmed in `ArticleHero.tsx:65`); `metaTitle` (≤60) only feeds the SERP `<title>` + schema. Question forms routinely exceed 60 chars, so keeping `metaTitle` as a tight keyword title avoids truncation while the H1 satisfies KB-03.

---

## Claude's Discretion

- **Heading-config storage** — small central heading-config module the audit can also read (preferred where it removes duplication) vs. inline per template; as long as the audit verifies rendered output.
- **Exact rendered-sample page list** for the audit's rendered pass — one representative real page per template/page-type.
- **How shared/promoted headings are implemented** — promoting pseudo-headings and the Core/Outer reorder mechanics, as long as the rendered DOM passes.
- **Audit implementation internals** — parser choice (regex vs ts-morph) for the static pass; HTML parser for the rendered pass; question-form detection rule (default: trimmed text ends in `?`).

## Deferred Ideas

- Comparison pages + 253 existing-article *bodies* → question-form (re-checked in Phase 17 QA-01; not forced now per §18).
- KB hub/cluster/article body trees §5/§6 (Phase 13); glossary §7 (Phase 14).
- Repoint homepage `/services` link + all old-hub links (Phase 15).
- Remove fabricated `stats.rating`/`projectCount` in `city-content/*`; gate AggregateRating; shared `<CtaBanner/>`/dedup; delete jargon components (Phase 16).
- Per-city unique Permits/Materials data — later enrichment, not Phase 12.
