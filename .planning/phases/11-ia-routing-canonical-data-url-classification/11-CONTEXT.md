# Phase 11: IA, Routing, Canonical Data & URL Classification - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning
**Source:** Synthesized from authoritative spec (`.planning/IMPLEMENTATION-PLAN.md` §19 Phase 11 + §10–18, ROADMAP Phase 11 success criteria, REQUIREMENTS IA/INDX/KB)

> **Operating mode (inherited from IMPLEMENTATION-PLAN.md):** Implement this plan exactly. Implementation language only (Implement/Create/Rewrite/Replace/Remove/Consolidate/Noindex/Standardize/Add/Link/Structure/Verify). Not an audit, not recommendations, not partial application. Every decision below is LOCKED by the authoritative spec.

<domain>
## Phase Boundary

Phase 11 is the **foundation phase** of milestone v1.1 (Full-Site Topical-Map Overhaul). It establishes the canonical data + routing layer that every later phase (12–17) depends on. It delivers:

1. A **single canonical config** (`src/config/site-config.ts`) that consolidates the existing `src/data/site-config.ts` and becomes the one source of truth for all NAP/trust/identity values.
2. A **generated URL-classification pipeline** that reads `URL-Classification.csv` and classifies every combo URL into keep / noindex / redirect, plus the routing layer that serves the correct verdict.
3. **Hub URL migrations** (301) and **8 legacy redirects**, imported into `next.config.ts`.
4. **New topical-map routes** that must resolve: the nested KB route, the dedicated glossary route, and 6 new hub scaffolds.
5. **Schema/registry extensions** (ArticleSchema cluster enum, ArticleContentSchema sections+faqs, PageTypeSchema + slug registry new page types) that later content phases build on.

**In scope:** Routing, indexation verdicts, redirects, canonical config scaffold, route resolution, schema/registry shape changes, and classification of the 253 existing articles into clusters.

**Explicitly OUT of scope for Phase 11** (deferred — see `<deferred>`): authoring KB/cluster hub content (Phase 13), authoring the 44 KB articles (Phase 13), rewriting article titles to question form (Phase 12), question-form H-tag templates (Phase 12), the glossary's 25 terms + DefinedTermSet schema (Phase 14), knowledge-graph link wiring (Phase 15), trust/dedup/SEO-language cleanup + deleting dead components (Phase 16), and crawl QA (Phase 17). Phase 11 only makes the routes **resolve** (placeholder/scaffold where content lands later) and the **data shapes** exist.

## Phase Goal (from ROADMAP)
The site has a single canonical config and a generated indexation pipeline that classifies every URL, so the routing layer serves the correct verdict (keep / noindex / redirect / 404) and all new topical-map routes resolve.
</domain>

<decisions>
## Implementation Decisions

Every decision is LOCKED by `.planning/IMPLEMENTATION-PLAN.md`. Each `D-NN` maps to one or more Phase-11 requirement IDs; the planner MUST cite the relevant `D-NN` in a plan's `must_haves`/`truths` and the REQ-IDs in plan frontmatter.

### Canonical Config
- **D-01** — Create `src/config/site-config.ts` as the single canonical source for all trust/NAP/identity values (brandName, legalName, phone, formattedPhone, email, address.{streetAddress,locality,region,postalCode,country}, geo, openingHours, serviceArea, license.{state,type,number,display}, insuranceStatement, workersCompStatement, `rating.{enabled,value,count}`, foundingYear, projectCount, trustBadges, sameAs, primaryUrl). Consolidate the existing `src/data/site-config.ts` into it. Set `rating.enabled = false`. NO public placeholder/fake trust values may render in HTML or JSON-LD (`[License #]`, `[Policy Info]`, `[CANONICAL VALUE REQUIRED]`, `0.0`, `0+`, fake `5.0`, fake `500+`); if a canonical value is unknown, OMIT the public claim — `[CANONICAL VALUE REQUIRED: …]` may appear ONLY in dev notes/code comments. **[RESOLVED 2026-06-01] Gate the rating now:** rewire `buildAggregateRating()` in `src/lib/schema.ts` (currently hardcodes fake `5.0`/`500`) so AggregateRating is OMITTED from HTML + JSON-LD while `rating.enabled === false` — remove the known-false 5.0/500 claim sitewide in Phase 11. _(Foundation; the full single-source enforcement + dedup sweep across all templates is still Phase 16.)_ → supports IA-04

### Generated Indexation Pipeline
- **D-02** — Create `scripts/build-url-classification.ts` that reads `URL-Classification.csv` and emits `src/generated/url-classification.json` + `src/generated/redirects.generated.mjs`. Create the consumer `src/data/url-classification.ts` that reads the JSON and exposes the verdict API: `getComboVerdict(slug)`, `getComboRedirects()`, `getClassification(slug)`, `isKeep(slug)`, `isNoindex(slug)`, `isRedirect(slug)`. → **INDX-01**
- **D-03** — The build validates the exact counts **255 keep / 942 noindex / 168 combo-redirect / 8 legacy-redirect** (255+942+168 = 1,365 combos) and **fails on any mismatch**. → **INDX-02**
- **D-04** — Combo routing precedence is **redirect > 404 > keep > noindex**. All **942 NOINDEX** combos serve a live page whose `generateMetadata` emits `robots:{index:false,follow:true}` and are **excluded from the sitemap**. Canonical rules: keep = self-canonical; noindex = `noindex,follow` with self/no canonical (never canonicalize to an unrelated page). → **INDX-03**
- **D-05** — The **168 combo + 8 legacy** redirects emit **permanent 301s** to their CSV targets via the generated redirects imported into `next.config.ts`; redirected URLs are excluded from `generateStaticParams` + sitemap; the **existing flat-roof + www redirects are preserved**. → **INDX-04**
- **D-06** — All **255 KEEP** combos are indexable, self-canonical, and present in the sitemap; **unknown slugs return 404**. Sitemap includes 255 keep + all core/KB/glossary pages and excludes 942 noindex + 168 redirected + scaffold/placeholder pages. → **INDX-05**
- **D-09** — `trailingSlash: false` is retained; nested KB/glossary URLs are served **without** a trailing slash. → **INDX-08**

### Hub URL Migrations & Priority Reconciliation
- **D-07** — Hub URL 301 migrations: `/services → /roofing-services`, `/locations → /service-areas`, `/resources → /roofing-knowledge-base`. Update the core slugs accordingly. _(Repointing ALL internal links sitewide is Phase 15; Phase 11 establishes the redirects + updates core slugs.)_ → **INDX-06**
- **D-08** — Reconcile `src/data/seo-priority.ts` so `PRIORITY_COMBO_PAIRS ⊆ the 255 KEEP set`; no NOINDEX/CONSOLIDATE combo is priority-boosted. → **INDX-07**

### New Topical-Map Routes (must resolve)
- **D-10** — Create `app/roofing-knowledge-base/[[...slug]]/page.tsx` (optional-catch-all) that serves `/roofing-knowledge-base/` + all **6 cluster hubs** + all **44 KB-article NESTED URLs** (`/roofing-knowledge-base/{cluster}/{slug}/`). `dynamicParams = false` with the fixed nested paths enumerated in `generateStaticParams`; all paths resolve **collision-free** at HTTP 200. _(Phase 11 makes them resolve with scaffolding; authored content is Phase 13.)_ → **IA-01, IA-03**
- **D-11** — Create `app/roofing-glossary/page.tsx` as a **dedicated** route resolving at HTTP 200 (NOT via the flat `app/[slug]` dispatcher). _(25 terms + DefinedTermSet schema are Phase 14.)_ → **IA-02**
- **D-12** — Scaffold the 6 new hubs so they resolve at 200: `/residential-roofing`, `/commercial-roofing`, `/flat-roof-systems`, `/roofing-materials`, `/free-roofing-estimate`, `/our-roofing-process`. Remove the "Full page content coming soon" placeholder. **Incomplete scaffolds are noindexed until content lands**; no public placeholder trust values render. → **IA-04**

### Schema & Registry Extensions
- **D-13** — Extend `PageTypeSchema` + the slug registry (`src/data/slug-registry.ts`) with the new page types `kb-hub`, `kb-cluster-hub`, `kb-article`, `glossary`, and the hub page type, with **build-time collision checking**. → **IA-05**
- **D-14** — Add a **required 6-value `cluster` enum** to `ArticleSchema` (clusters: roof-problems, roof-components, roofing-materials, roofing-process, roofing-costs, local-roofing-knowledge); classify **every existing article** into a cluster (none `undefined`); the build validates and fails if any article lacks a cluster. **[RESOLVED 2026-06-01] Count handling:** the spec says "253" but `articles.ts` + the CSV both currently hold **252** — make `cluster` a required zod enum and assert via `z.array(ArticleSchema).parse(rawArticles)` that EVERY article in the registry has a valid cluster (validator binds to the registry's real length; do NOT hardcode 253 or 252). Note the 252-vs-253 discrepancy in the plan. _(Title rewrites to question form are Phase 12; folding articles under cluster hubs with breadcrumbs is Phase 13.)_ → **KB-01**
- **D-15** — Extend `ArticleContentSchema` (or a KB content schema) to support **≥10 sections + a `faqs[]` array**, so Phase 13's 44 KB articles can be authored against it. → **KB-02**

### Claude's Discretion
The spec locks WHAT and the target file paths/APIs. The planner/executor decide the following implementation details, provided they satisfy the locked decisions and acceptance criteria:
- Internal structure of the generator script (CSV parsing approach, validation ordering, error messages) as long as it emits the two generated artifacts and fails on count mismatch.
- TypeScript types/interfaces for the verdict API and generated JSON shape.
- How scaffold pages render "noindex until content lands" (shared scaffold component vs. per-page) as long as incomplete scaffolds emit `robots:{index:false}` and expose no placeholder trust values.
- Whether the nested KB route shares a template/loader with the cluster hubs or branches on slug depth, as long as `dynamicParams=false` + `generateStaticParams` enumerate all hub+cluster+article paths collision-free.
- Internal organization of the cluster classification data for the 253 articles (inline map vs. per-article field) as long as the build validates none are undefined.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents (researcher, planner, executor) MUST read these before planning or implementing.**

### Authoritative spec
- `.planning/IMPLEMENTATION-PLAN.md` — THE authoritative execution spec. Read **§10** (URL & indexation, counts, precedence, sitemap, canonical), **§11** (hub URL migrations), **§13** (trust/NAP siteConfig fields), **§16** (single canonical schema identity — relevant for the schema/registry extensions), and **§19 → Phase 11** (the 29 numbered implementation steps + verify list).
- `.planning/IMPLEMENTATION-BRIEF.md` — net-changes detail: NESTED KB URL shape, the 6-hub list, KB article inventory. (Its verbatim H-tag trees §4–7 are Phase 12–14, not Phase 11.)

### Source data
- `URL-Classification.csv` (repo root) — the input the generator reads. Defines the 255 keep / 942 noindex / 168 combo-redirect rows and their redirect targets. The counts in D-03 are validated against this file.

### Roadmap & requirements
- `.planning/ROADMAP.md` → "Phase 11" section — goal, dependencies (Phase 10 shipped v1.0 baseline), and the 6 success criteria.
- `.planning/REQUIREMENTS.md` → IA-01..IA-05, INDX-01..INDX-08, KB-01..KB-02 — the 15 requirement definitions this phase must satisfy.

### Existing code the phase modifies/extends (source of truth for current state)
- `src/data/site-config.ts` — existing config to consolidate into `src/config/site-config.ts` (D-01).
- `next.config.ts` — existing redirects (flat-roof + www to preserve) where generated redirects are imported (D-05).
- `app/[slug]/` — the existing flat dispatcher (combos/cities/services/glossary today); glossary moves to a dedicated route (D-11).
- `app/sitemap.ts`, `app/robots.ts` — sitemap include/exclude logic (D-04, D-06).
- `src/data/seo-priority.ts` — `PRIORITY_COMBO_PAIRS` to reconcile (D-08).
- `src/data/slug-registry.ts` — slug registry to extend (D-13).
- `src/data/articles.ts` + `src/data/article-content/schema.ts` — ArticleSchema + content schema to extend (D-14, D-15).
- `src/data/combos.ts`, `src/data/combo-content/schema.ts`, `src/lib/schema.ts`/`src/lib/schemas.ts` — combo generation + PageTypeSchema location (D-13, D-04).
</canonical_refs>

<specifics>
## Specific Ideas (concrete locked values)

- **Counts (build fails on mismatch):** combo keep **255** · combo noindex **942** · combo redirect **168** · combo total **1,365** · additional non-combo (hub/legacy) redirects **8**.
- **Routing precedence:** `if redirectTarget → 301; else if keep → indexable + sitemap; else if noindex → robots noindex,follow + excluded from sitemap; else → 404`.
- **Verdict API (exact names):** `getComboVerdict(slug)`, `getComboRedirects()`, `getClassification(slug)`, `isKeep(slug)`, `isNoindex(slug)`, `isRedirect(slug)`.
- **Generated artifacts (exact paths):** `src/generated/url-classification.json`, `src/generated/redirects.generated.mjs`; generator `scripts/build-url-classification.ts`; consumer `src/data/url-classification.ts`.
- **Hub migrations (301):** `/services → /roofing-services`, `/locations → /service-areas`, `/resources → /roofing-knowledge-base`.
- **6 new hubs:** `/residential-roofing`, `/commercial-roofing`, `/flat-roof-systems`, `/roofing-materials`, `/free-roofing-estimate`, `/our-roofing-process`.
- **6 article clusters:** roof-problems, roof-components, roofing-materials, roofing-process, roofing-costs, local-roofing-knowledge.
- **Nested KB URL shape:** `/roofing-knowledge-base/{cluster}/{slug}/` (e.g. `/roofing-knowledge-base/roof-components/what-is-roof-flashing/`).
- **New page types:** `kb-hub`, `kb-cluster-hub`, `kb-article`, `glossary`, hub.
- **siteConfig invariants:** `rating.enabled = false`; omit AggregateRating while false; no public placeholders/fake ratings.
- **Retained:** `trailingSlash: false`; existing flat-roof + www redirects preserved.

## Phase 11 Verify (from IMPLEMENTATION-PLAN §19)
build green · 255 keep indexable · 942 noindex,follow · 168+8 redirects 301 · sitemap include/exclude correct · unknown slugs 404 · old hubs 301 · no public placeholder trust values.
</specifics>

<deferred>
## Deferred Ideas (later phases — DO NOT implement in Phase 11)

- **Phase 12:** Question-form H-tag templates; rewriting all 253 article titles to question form (slugs stay stable in Phase 11).
- **Phase 13:** Authoring `/roofing-knowledge-base/` hub + 6 cluster hub content + the 44 nested KB articles; folding the 253 under clusters with cluster-aware breadcrumbs; `/resources → /roofing-knowledge-base` content surfacing (IA-06); FAQPage schema where FAQs are visible. _(Phase 11 only makes these routes resolve via scaffolding + correct data shapes.)_
- **Phase 14:** The 25 glossary terms + DefinedTermSet/DefinedTerm schema + glossary cross-links. _(Phase 11 only creates the resolving `/roofing-glossary/` route.)_
- **Phase 15:** `kb-graph.ts` + `link-engine.ts`; repointing ALL internal `/services`,`/locations`,`/resources` links; per-type JSON-LD; single Organization/LocalBusiness @id; Place areaServed; combo WebPage name fix.
- **Phase 16:** Single-source siteConfig **enforcement** + removing fabricated/hardcoded trust values everywhere; AggregateRating gating audit; shared `<CtaBanner/>`/dedup; deleting `PriorityIndexingHub` + `ContentAuthorityBlock` + dead jargon components; SEO-language removal.
- **Phase 17:** Launch QA, staging/production crawl, indexation monitoring, `audit:all`.

---

*Phase: 11-ia-routing-canonical-data-url-classification*
*Context synthesized: 2026-06-01 from `.planning/IMPLEMENTATION-PLAN.md` (authoritative)*
