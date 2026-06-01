# Roofing Contractor Topical Map — Implementation Plan (v1.1, AUTHORITATIVE)

> **This is the authoritative execution spec for milestone v1.1.** It supersedes `IMPLEMENTATION-BRIEF.md` where they differ. The brief holds the verbatim page-level **question-form H-tag trees** (homepage, service, location, service+location, KB article, glossary) — those are unchanged and remain in force; read them from `IMPLEMENTATION-BRIEF.md §4.1–4.4, §5, §6, §7`. Everything else (routing, indexation, trust, schema identity, KB URL shape, audit scripts, phase plan) follows THIS document.
>
> **Operating mode:** Implement this plan exactly. Implementation language only (Implement/Create/Rewrite/Replace/Remove/Consolidate/Noindex/Standardize/Add/Link/Structure/Verify). Not an audit, not recommendations, not partial application.

Target: `https://newarkqualityroofing.com` · Newark / Essex County / NJ · Roofing Contractor.

---

## Net changes vs. IMPLEMENTATION-BRIEF.md (locked decisions)

1. **KB articles use NESTED canonical URLs** under their cluster — `/roofing-knowledge-base/{cluster}/{slug}/` (e.g. `/roofing-knowledge-base/roof-components/what-is-roof-flashing/`). NOT flat. The nested KB route `app/roofing-knowledge-base/[[...slug]]/page.tsx` serves hub + 6 cluster hubs + all 44 articles.
2. **Trust placeholders are never rendered publicly.** If a canonical value is unknown, OMIT the public claim entirely. `[CANONICAL VALUE REQUIRED: …]` appears ONLY in developer notes/code comments, never in HTML or JSON-LD. No `[License #]`, `[Policy Info]`, `0.0`, `0+`, fake `5.0`, or fake `500+` may render.
3. **`rating.enabled = false`** in siteConfig until rating value + count + source + visible review content are canonical and verifiable. While false, omit AggregateRating entirely.
4. **Single canonical schema identity:** one `Organization` `@id` (`{BASE}/#organization`) and one `LocalBusiness` `@id` (`{BASE}/#localbusiness`) sitewide. Service / service-location pages set `Service.provider = {"@id": "{BASE}/#localbusiness"}` and `Service.areaServed = Place`. Do NOT mint a separate LocalBusiness per city/combo page.
5. **Canonical config at `src/config/site-config.ts`** (consolidate the existing `src/data/site-config.ts` into it; it is the single source of truth for all trust/NAP/identity values).
6. **Generated indexation pipeline:** `scripts/build-url-classification.ts` reads `URL-Classification.csv` → emits `src/generated/url-classification.json` + `src/generated/redirects.generated.mjs`; `src/data/url-classification.ts` consumes the JSON. `next.config.ts` imports the generated redirects.
7. **Routing precedence:** redirect > 404 > keep > noindex (see §10.3).
8. **11 audit scripts that fail the build** (§20), aggregated by `audit:all`.
9. **Phase 17 added** — Launch QA, crawl verification, indexation monitoring. Milestone is **7 phases (11–17)**.

---

## §10 URL & Indexation Implementation

**Create:** `src/data/url-classification.ts`, `scripts/build-url-classification.ts`, `src/generated/url-classification.json`, `src/generated/redirects.generated.mjs`. Input: `URL-Classification.csv`.

API: `getComboVerdict(slug)`, `getComboRedirects()`, `getClassification(slug)`, `isKeep(slug)`, `isNoindex(slug)`, `isRedirect(slug)`.

**Counts to validate (build fails otherwise):** combo keep **255** · combo noindex **942** · combo redirect **168** (255+942+168 = 1,365 combos) · additional non-combo (hub/legacy) redirects **8**.

**Precedence:**
```
if URL has redirectTarget: 301
else if verdict == keep:    indexable + in sitemap
else if verdict == noindex: robots noindex,follow + excluded from sitemap
else:                       404
```

**Sitemap:** include 255 keep combos + all core/KB/glossary pages; exclude 942 noindex + 168 redirected + scaffold/placeholder pages.
**Canonical:** keep = self-canonical; noindex = noindex,follow + self/no canonical (never canonicalize to an unrelated page); redirected = 301 only; KB articles = self-canonical to nested URL.

## §11 Hub URL Migrations (301, permanent)
`/services → /roofing-services` · `/locations → /service-areas` · `/resources → /roofing-knowledge-base`. Repoint ALL internal links; zero internal links may point to `/services`, `/locations`, `/resources`.

## §12 Removal of SEO-Facing Language
Remove/rewrite all public internal-SEO language (GSC priority, Search Console opportunity routes, priority crawl paths, content target, 10/10, local proof + indexing quality, service fit, "Google and homeowners can understand", "pages Google is most likely to trust first"). Replace H-tag labels with question-form customer headings (e.g. "Related Roofing Services" → "What Related Roofing Services Should You Consider?"; "Nearby Service Areas" → "Where Else Do We Provide Roofing Services Nearby?"). No public page may mention Google/GSC/Search Console/indexing quality/content target/crawl paths/internal SEO strategy.

## §13 Trust & NAP Standardization
**Create `src/config/site-config.ts`** as the single source for: brandName, legalName, phone, formattedPhone, email, address.{streetAddress,locality,region,postalCode,country}, geo, openingHours, serviceArea, license.{state,type,number,display}, insuranceStatement, workersCompStatement, rating.{enabled,value,count}, foundingYear, projectCount, trustBadges, sameAs, primaryUrl. No template or JSON-LD hardcodes these outside siteConfig.
**Public rendering:** if values unknown → omit the claim (never render placeholders/fake ratings/unsupported counts). `[CANONICAL VALUE REQUIRED: …]` only in dev notes. `rating.enabled=false` until canonical → omit AggregateRating/fake 5.0/fake 500+/0.0/0+. License: if one number serves multiple brands, add "[Brand] is operated by [Legal Entity], [State License Number]."

## §14 Duplicate Section Cleanup
Implement shared `<CtaBanner/>`, `<LeadForm/>`, `<TestimonialBlock/>`, `<ProcessSummary/>`. One LeadForm per page · one testimonial section per page · one primary CTA banner per major section · one process block per page · full process detail only on canonical `/our-roofing-process`. Remove repeated process/service/CTA/testimonial/city/service-card/footer-heading/lead-form blocks; if a section is duplicated for desktop/mobile, only one is crawlable.

## §15 Internal Linking (knowledge graph)
**Create `src/linking/kb-graph.ts` + `src/linking/link-engine.ts`.** Wire the §15 edge lists from the brief: Roof Repair → leaks/flashing/pipe-boot/valley/emergency/inspection/free-inspection/replacement; Roof Replacement → replacement-process/decking/underlayment/ice-&-water-shield/asphalt/metal/cost/workmanship-warranty/estimate; Storm → hail/wind/tarping/call-after-storm/inspection/emergency/storm-repair; Commercial → TPO/EPDM/PVC/ponding/coatings/commercial-inspection/repair/maintenance (bidirectional); Location → repair/replacement/emergency/inspection/storm/commercial in [City] + nearby cities + local KB + free estimate; each glossary term → its KB article + related service + related problem/material/component.

## §16 Schema (single canonical identity)
One Organization `@id` + one LocalBusiness `@id`. Per page type: Home = RoofingContractor+LocalBusiness+Organization+WebSite+BreadcrumbList; Service = Service+WebPage+FAQPage(if visible)+BreadcrumbList; Location = LocalBusiness(ref)+Service+Place+WebPage+FAQPage(if visible)+BreadcrumbList; Service+Location = Service+LocalBusiness(ref)+Place+WebPage+FAQPage(if visible)+BreadcrumbList; KB Article = Article+WebPage+FAQPage(if visible)+BreadcrumbList; Glossary = DefinedTermSet+DefinedTerm+BreadcrumbList; Review/AggregateRating only if visible+truthful+verifiable. `Service.provider` → LocalBusiness `@id`; `areaServed` → Place. Fix combo WebPage `name` bug (`ComboTemplate.tsx:71`).

## §17 Heading Policy (audit-enforced)
Exactly one H1/page; H1 is a question; all H2/H3/H4 are questions; no skipped levels; no `<br>`/split-`<span>` in H1; H1 not repeated as H2; no H-tags in nav/footer/buttons/form-labels; no `<p>`/`<span>`/`<div>` pseudo-headings introducing real sections; first major H2 after hero = the Core Section. First-Core-H2 by type: Home "What Roofing Services Do We Provide in Newark and Essex County?"; Service "What [Service] Do We Provide?"; Location "What Roofing Services Are Available in [City]?"; Service+Location "What [Service] Is Available in [City]?"; KB "What Does [Concept] Mean?".

## §18 Article Rules
**253 existing:** classify into 6 clusters (roof-problems/roof-components/roofing-materials/roofing-process/roofing-costs/local-roofing-knowledge); rewrite titles → questions; keep slugs unless redirect needed; do NOT force into a shallow 10-H2 shape; every article has a cluster (none undefined), question headings, cluster breadcrumbs, internal links; no duplicate titles. **44 new:** full §6 KB template, no coming-soon/placeholder/thin/filler, every H2 answered, FAQs present, internal links to services + related KB.

---

## §19 Phase-by-Phase Execution Plan (GSD: plan-phase → execute-phase → verify-work)

### Phase 11 — IA, Routing, Canonical Data & URL Classification
Implement: (1) `src/config/site-config.ts` canonical source; (2) `scripts/build-url-classification.ts`; (3) `src/generated/url-classification.json`; (4) `src/generated/redirects.generated.mjs`; (5) `src/data/url-classification.ts` consumer; (6) verdict API; (7) redirect/noindex/keep/404 precedence; (8) combo `generateMetadata` robots noindex,follow for noindex; (9) sitemap include-keep/exclude-noindex+redirect; (10) `next.config.ts` import generated redirects; (11–14) migrate `/services`→`/roofing-services`, `/locations`→`/service-areas`, `/resources`→`/roofing-knowledge-base` + 8 legacy redirects; (15–20) scaffold `/residential-roofing`,`/commercial-roofing`,`/flat-roof-systems`,`/roofing-materials`,`/free-roofing-estimate`,`/our-roofing-process`; (21) `app/roofing-knowledge-base/[[...slug]]/page.tsx`; (22) `app/roofing-glossary/page.tsx`; (23) ArticleSchema `cluster` enum; (24) classify all 253 into clusters; (25) extend ArticleContentSchema (more sections + faqs[]); (26) extend PageTypeSchema + slug registry; (27) reconcile `seo-priority.ts` to KEEP set; (28) canonical URL rules; (29) noindex/flag incomplete scaffolds.
Verify: build green; 255 keep indexable; 942 noindex,follow; 168+8 redirects 301; sitemap include/exclude correct; unknown slugs 404; old hubs 301; no public placeholder trust values.

### Phase 12 — Question-Form H-Tag & Core/Outer Template System
Implement: rewrite homepage/Service/City/Combo/Core templates to question-form H-tags (brief §4.1–4.4); remove split H1s; convert pseudo-headings to real headings; Core-before-Outer everywhere; add homepage 5-step process + KB link section; add city permit + material sections; rewrite all 253 article titles → questions (slugs stable, unique).
Verify: `audit:headings` + build; one question H1/page; all H2/H3/H4 questions; no skipped levels; no `<br>`/split-span H1; H1≠H2; no nav/footer/form/button H-tags; Core before Outer; titles unique + slugs stable.

### Phase 13 — Knowledge Base Hub, Clusters & 44 KB Articles
Implement: build `/roofing-knowledge-base/` + 6 cluster hubs; author 44 KB articles at NESTED canonical URLs (§8); fold 253 into clusters; FAQPage schema where FAQs visible; cluster breadcrumbs; no coming-soon/placeholder; links to services + related KB; `/resources`→`/roofing-knowledge-base` 301.
Verify: `audit:kb` + `audit:schema` + build; hub + 6 clusters + 44 articles all 200; no coming-soon/placeholder; question-form; FAQPage only where visible; cluster breadcrumbs correct; 253 cluster-assigned.

### Phase 14 — Roofing Glossary & Entity Dictionary
Implement: `/roofing-glossary/`; `glossary.ts` 25 terms; GlossaryTemplate; DefinedTermSet + DefinedTerm schema; cross-link each term to KB article + related service + related problem/material/component.
Verify: `audit:glossary` + `audit:schema` + build; 25 terms render; schema validates; every term has definition + internal links; no orphan terms.

### Phase 15 — Knowledge Graph Linking & Schema
Implement: `src/linking/kb-graph.ts` + `link-engine.ts`; wire repair/replacement/storm/commercial/location/glossary edges; repoint all `/services`,`/locations`,`/resources` internal links; per-type JSON-LD; one Organization @id + one LocalBusiness @id; Place on city+combo; `Service.provider` ref; fix combo WebPage name; FAQPage only where visible; omit AggregateRating unless `rating.enabled`.
Verify: `audit:links` + `audit:schema` + build; zero internal links to old hubs; no broken/orphan links; schema validates per type; single Org/LocalBusiness @id; provider→LocalBusiness; Place areaServed.

### Phase 16 — Trust/NAP Cleanup, Deduplication & SEO-Language Removal
Implement: remove all hardcoded NAP outside siteConfig; remove fabricated rating/review/project counts + public placeholders; gate AggregateRating behind `rating.enabled`; shared `<CtaBanner/>`; one LeadForm + one testimonial + one process block per page; full process → `/our-roofing-process`; remove all SEO-facing language; delete `PriorityIndexingHub` + `ContentAuthorityBlock` + dead jargon components; replace any non-question replacement headings with questions.
Verify: `audit:trust` + `audit:dedupe` + `audit:seo-language` + `audit:schema` + build; no public placeholders/fake ratings/0.0/0+; no SEO-facing language; no duplicate process/leadform/testimonial; no old trust values outside siteConfig.

### Phase 17 — Launch QA, Crawl Verification & Indexation Monitoring
Implement: full staging crawl; post-deploy production crawl; verify H-tags all questions; no nav/footer/form H-tags; Core before Outer; 255 keep indexable; 942 noindex,follow; no noindex in sitemap; 168+8 redirects correct + no chains; old-hub internal links gone; KB hub+clusters+44 articles 200+complete; glossary 200 + 25 terms; schema validates per type; no fake ratings/placeholders in HTML or JSON-LD; no SEO-facing language; submit updated sitemap; monitor Search Console (404s, redirects, noindex, indexed count).
Verify: `audit:all` + build all pass.

## §20 Required Audit Scripts (each fails the build on violation)
`audit:headings`, `audit:kb`, `audit:glossary`, `audit:links`, `audit:schema`, `audit:trust`, `audit:dedupe`, `audit:seo-language`, `audit:sitemap`, `audit:redirects`, `audit:all`.

## §21 Final Implementation Checklist
Architecture (10 nested topical maps) · Core/Outer on every important page (Core first) · H-tags (one question H1, all questions, no splits, no nav/footer H-tags) · KB (hub + 6 clusters + 44 nested articles + 253 cluster-assigned + FAQs + links) · Glossary (25 terms + DefinedTermSet/DefinedTerm + cross-links) · Indexation (255 keep / 942 noindex,follow / 168 redirect / 8 legacy / sitemap correct / unknown 404) · Trust (siteConfig single source / no fake ratings / no public placeholders / AggregateRating gated) · Internal linking (no old-hub links / knowledge graph / no orphans) · Schema (one Org @id / one LocalBusiness @id / provider ref / Place areaServed / FAQPage only where visible / DefinedTermSet / AggregateRating gated) · Cleanup (SEO-language removed / duplicates removed / dead components deleted / footer H-tags removed).

## §22 Required Completion Output
On completion output: (1) completed phases summary; (2) files created; (3) files modified; (4) routes created; (5) redirects created; (6) indexation count summary; (7) heading audit result; (8) schema audit result; (9) link audit result; (10) trust/NAP audit result; (11) remaining canonical business values needed from owner; (12) final build status. Not complete until `npm run build` AND `npm run audit:all` pass.
