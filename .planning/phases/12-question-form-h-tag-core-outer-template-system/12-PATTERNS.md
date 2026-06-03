# Phase 12: Question-Form H-Tag & Core/Outer Template System - Pattern Map

**Mapped:** 2026-06-03
**Files analyzed:** 17 (1 new audit rewrite, 1 new config module, 2 new section components, 1 generator edit, 1 regenerated data file, 6 template/page edits, 4 hero edits, 1 header edit)
**Analogs found:** 16 / 17 (1 net-new capability — DOM ancestry parsing — has no codebase analog; covered by RESEARCH.md `node-html-parser` patterns)

> Every analog below was read directly from the repo this session. Line numbers are verified against current `main`. Excerpts are the load-bearing fragments only — not whole files.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `scripts/audit-headings.ts` (REWRITE) | script / validator | batch + transform (static data) + file-I/O (rendered HTML) | `scripts/audit-redirects.ts` + `scripts/audit-sitemap.ts` | exact (role + flow) |
| `src/data/heading-config.ts` (NEW) | config / data registry | transform (typed export + `[Service]`/`[City]` interpolation) | `src/data/slug-registry.ts` (registry shape) + `scripts/generate-articles-ts.ts` cluster/title pattern fns (interpolation) | role-match |
| `scripts/generate-articles-ts.ts` (EDIT) | generator | transform (pattern → emitted data) | self (existing pattern fns) | exact (edit in place) |
| `src/data/articles.ts` (REGENERATE) | data (generated) | batch (generator output) | self (do NOT hand-edit) | n/a — regen only |
| `src/app/page.tsx` (EDIT) | route / page | request-response (SSG section ordering) | `ServiceTemplate.tsx` / `ComboTemplate.tsx` ordering | exact (sibling template) |
| `src/components/templates/ServiceTemplate.tsx` (EDIT) | template | request-response (section list ordering) | `ComboTemplate.tsx` / `CityTemplate.tsx` | exact (sibling) |
| `src/components/templates/CityTemplate.tsx` (EDIT) | template | request-response | `ServiceTemplate.tsx` / `ComboTemplate.tsx` | exact (sibling) |
| `src/components/templates/ComboTemplate.tsx` (EDIT) | template | request-response | `ServiceTemplate.tsx` / `CityTemplate.tsx` | exact (sibling) |
| `src/components/templates/CoreTemplate.tsx` (EDIT) | template (delegator) | request-response | self + page components (`AboutPage`, `ServicesHubPage`) | role-match |
| `src/components/templates/HubScaffold.tsx` (EDIT) | template (scaffold) | request-response | self (single clean `<h1>`) | exact (H1-only edit) |
| `src/components/sections/HeroSection.tsx` (EDIT) | section / hero | request-response (H1 source) | `CityHero.tsx` / `ComboHero.tsx` (single-text-node H1) | exact (sibling hero) |
| `src/components/sections/ServiceHero.tsx` (EDIT) | section / hero | request-response (H1 source) | `CityHero.tsx` / `ComboHero.tsx` | exact (sibling hero) |
| `src/components/sections/CityHero.tsx` (EDIT) | section / hero | request-response | self (already single text node) | exact |
| `src/components/sections/ComboHero.tsx` (EDIT) | section / hero | request-response | self (already single text node) | exact |
| `src/components/sections/CityPermits.tsx` (NEW) | section | request-response (H2 + body) | `CityResidential.tsx` | exact (role + flow) |
| `src/components/sections/CityMaterials.tsx` (NEW) | section | request-response (H2 + body) | `CityResidential.tsx` / `CityCommercial.tsx` | exact (role + flow) |
| `src/components/layout/Header.tsx` (EDIT) | layout / nav | request-response | self (footer already uses `<span>` labels) | exact (in-file demote) |

## Pattern Assignments

### `scripts/audit-headings.ts` (REWRITE — validator, batch + file-I/O)

**Analog:** `scripts/audit-redirects.ts` (build-fail structure) + `scripts/audit-sitemap.ts` (registry enumeration). Both are the Phase 11 build-failing audits the CONTEXT/RESEARCH explicitly point to. The CURRENT `audit-headings.ts` enforces the *opposite* (location-keyword) policy and must be discarded entirely, not extended.

**Why these are the analogs:** Same role (a `tsx` entry-point validator wired in `package.json`), same data flow (import registries, accumulate `errors[]`, `process.exit(1/0)`), and the rendered pass adds `readFileSync` over `.next/server/app/*.html` — the file-I/O flow that no other audit needs but which mirrors `audit-redirects.ts`'s `readFileSync(next.config.ts)` (lines 20, 98).

**Exit + report pattern to copy** (`audit-redirects.ts:34-40,114-131`):
```typescript
function main() {
  console.log('='.repeat(72));
  console.log('  REDIRECT PIPELINE VALIDATION');   // → '  HEADING POLICY VALIDATION'
  console.log('='.repeat(72));
  const errors: string[] = [];
  // ... accumulate errors ...
  if (errors.length > 0) {
    console.log('-'.repeat(72));
    console.log('  VIOLATIONS:');
    for (const e of errors) console.log(`  - ${e}`);
    process.exit(1);                                // ← Phase 11 fail-pattern (D-08/D-09)
  }
  console.log('Heading policy valid: ... PASS');
  process.exit(0);
}
main();
```
*Note: `audit-sitemap.ts:147` caps the printed list (`errors.slice(0, 40)`); copy that cap — a full-site heading run can produce many violations.*

**Registry enumeration pattern to copy** (`audit-sitemap.ts:21-29` + `slug-registry.ts:140-142`):
```typescript
// Static pass imports — same alias paths the Phase 11 audits already use:
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { isKeep, isNoindex } from '@/data/url-classification';   // live combos = keep ∪ noindex
// Enumerate by type when needed:
import { getSlugsByType } from '@/data/slug-registry';   // (entry) => entry.type === type
```

**Async-main variant** (use this shape if the rendered pass needs `await` for any reason; `audit-sitemap.ts:66` is `async function main()` with `main()` at EOF). The redirects audit is sync — pick per need.

**Article uniqueness assertion** (modeled on the generator's own check, `generate-articles-ts.ts:317-341`):
```typescript
const seen = new Set<string>();
for (const a of articles) {
  if (!a.title.trim().endsWith('?')) errors.push(`article ${a.id}: title not a question → "${a.title}"`);
  if (seen.has(a.title)) errors.push(`duplicate article title: "${a.title}"`);
  seen.add(a.title);
}
// Assert against articles.length (252), NOT a hardcoded 253 — see "Pitfall: count" in RESEARCH.
```

**Rendered-pass DOM rules:** NO codebase analog (net-new). Use RESEARCH.md `node-html-parser` patterns (`querySelectorAll('h1,h2,h3,h4')`, `.closest('nav,footer,button,label')`, "H1 has zero element children"). Sample file = one prerender per template (verified on disk: `.next/server/app/index.html`, `roof-repair.html`, `roofing-in-newark-nj.html`, plus combo/core/hub files).

**package.json wiring** — already declared, leave the key, ensure it runs AFTER build:
```jsonc
"audit:headings": "tsx scripts/audit-headings.ts"   // package.json:11 (unchanged key)
"prebuild": "tsx scripts/build-url-classification.ts"  // existing prebuild hook (line 7) — model for any pre-step
```
The rendered pass requires a completed `next build` (HTML must exist). Gate it in CI/verify as `next build && npm run audit:headings` (no analog "ci" script exists in package.json today — planner adds one or runs the two steps in sequence).

---

### `src/data/heading-config.ts` (NEW — config registry, transform/interpolation)

**Analog:** `src/data/slug-registry.ts` (typed module exporting a const + accessor functions) and the generator's interpolation functions (`generate-articles-ts.ts:99-209`) for the `(s: string) => \`...${s}...\`` placeholder shape.

**Why this is the analog:** `slug-registry.ts` is the canonical "central typed registry that other code imports" in this repo. The new config plays the same role — one source of truth that BOTH the templates render AND the static audit asserts (prevents drift, per CONTEXT discretion + RESEARCH Pattern 1).

**Registry-module shape to copy** (`slug-registry.ts:1,124-142`):
```typescript
import type { SlugEntry, PageType } from '@/lib/types';   // typed exports first
// ... const built at module load ...
export function getAllSlugs(): string[] { ... }            // named accessor functions
export function getSlugsByType(type: PageType): SlugEntry[] { ... }
```

**Interpolation-placeholder shape to copy** (`generate-articles-ts.ts:166-192` — the `[Service]`/`[City]` interpolation precedent):
```typescript
// Generator already interpolates entity names into title strings per-branch:
title = `Choosing the Right ${shortName} Contractor in NJ`;   // → the new config does the same for headings
// heading-config equivalent (RESEARCH Pattern 1):
service: { h1: (s: string) => `Who Provides ${s} in Newark?`,
           coreH2: (s: string) => `What ${s} Do We Provide?` }
```
Verbatim strings come from `IMPLEMENTATION-BRIEF.md §4.1–4.4` and `IMPLEMENTATION-PLAN.md §17` (LOCKED — D-01..D-06). The static audit interpolates `[Service]`/`[City]` from `services.ts` / `cities.ts` before asserting each ends in `?`.

---

### `scripts/generate-articles-ts.ts` (EDIT — generator, transform; D-12)

**Analog:** itself. The ~12 title-pattern strings are the edit points; everything around them (slug derivation, uniqueness check, Zod cap) stays.

**The title-pattern strings to rewrite** (verified line numbers — current → question form per D-12):

| Line | Fn / branch | Current `title` literal | → Question form |
|------|-------------|-------------------------|-----------------|
| 121 | `serviceSignsArticle` (all) | `Signs You Need ${shortName} in NJ` | `What Are the Signs You Need ${shortName}?` |
| 149 | `serviceCostArticle` (all) | `${shortName} Cost in NJ: What to Expect` | `How Much Does ${shortName} Cost in NJ?` |
| 174 | `serviceDecisionArticle` repair-maintenance | `Choosing the Right ${shortName} Contractor in NJ` | `How Do You Choose a ${shortName} Contractor?` |
| 177 | `serviceDecisionArticle` residential/commercial-roof-types | `${shortName}: Pros and Cons for NJ Properties` | `What Are the Pros and Cons of ${shortName}?` |
| 180 | `serviceDecisionArticle` components-specialty | `${shortName}: Complete NJ Homeowner Guide` | `What Should You Know About ${shortName}?` |
| 183 | `serviceDecisionArticle` energy-solar | `${shortName}: NJ Incentives and Savings` | `What NJ Incentives and Savings Apply to ${shortName}?` |
| 186 | `serviceDecisionArticle` commercial-services | `${shortName}: What NJ Business Owners Should Know` | `What Should NJ Business Owners Know About ${shortName}?` |
| 189 | `serviceDecisionArticle` design-consultation | `${shortName}: What to Expect in NJ` | `What Should You Expect From ${shortName}?` |
| 192 | `serviceDecisionArticle` default | `Complete Guide to ${shortName} in NJ` | `What Should You Know About ${shortName}?` (vary vs line 180 — both currently collapse) |
| 218 | `compBuyerGuide` | `How to Choose: ${c.name} in NJ` | `Which Is Better: ${c.name}?` |
| 239 | `compExpertPicks` | `What NJ Roofers Recommend: ${c.name}` | `What Do NJ Roofers Recommend for ${c.name}?` |
| 262,273,284 | `coreArticles` (3 hardcoded) | "Complete NJ Roofing Guide…" / "Finding a Reliable Roofer…" / "NJ Roofing Licensing…" | rewrite each to a question |

**Slug-independence proof (do NOT touch slugs)** — slugs are built by `makeSlug([...])` from `s.slug`/`c.slug` + fixed tokens, never from `title` (lines 106-118, 143-147, 173-191, 216, 237). Rewriting `title` leaves every slug stable (D-07/KB-03).

**metaTitle stays ≤60 and separate** — `metaTitle` has its own `truncTitle(...)` calls (lines 122, 150, 195, 219, 240) and is z-capped at `z.string().max(60)` (line 363). Do NOT feed the long question into `metaTitle`. The on-page H1 = `title` (no cap).

**Regen command (NO `npm run generate:articles` exists):**
```bash
npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts
```
The generator writes to **stdout** via the `lines[]` array (assembled from line 351). Planner may optionally add `"generate:articles": "tsx scripts/generate-articles-ts.ts > src/data/articles.ts"` to package.json scripts for ergonomics.

---

### `src/components/templates/ServiceTemplate.tsx` (EDIT — template, Core-before-Outer reorder)

**Analog:** sibling templates `ComboTemplate.tsx` and `CityTemplate.tsx` — all three share the same shape (JsonLd block → `FloatingCtaButton` → `<Hero>` → `<TrustBar>` → `<article className="space-y-12">` content column with `<AnimateIn>`-wrapped sections → CTA banner).

**Current section order + the exact reorder lever** (`ServiceTemplate.tsx:213-216`):
```tsx
<article className="space-y-12 pb-16 lg:col-span-2">
  <AnimateIn><ServiceOverview ... /></AnimateIn>
  <AnimateIn><ContentAuthorityBlock service={service} pageType="service" /></AnimateIn>  // ← line 215: IN the Core band
  <AnimateIn><ServiceSigns ... /></AnimateIn>
  ...
```
**Reorder mechanics:** the order is the literal JSX child order inside `<article>`. Move `<AnimateIn><ContentAuthorityBlock/></AnimateIn>` OUT of the first-Core position (D-06/HTAG-07) — move the WHOLE `<AnimateIn>` wrapper with its child (preserves Phase 9/10 animation; RESEARCH Pitfall 4). The first content H2 after the hero must become the §4.2 Core "What [Service] Do We Provide?" string.

**Invariant to preserve:** the hero + lead form stay first. `ServiceHero` contains `<div id="lead-form">` (ServiceHero.tsx:126) — do NOT move the hero (LEAD-01 above-the-fold). Reorder only the post-hero `<article>` sections.

---

### `src/components/templates/CityTemplate.tsx` (EDIT — template; add Permits + Materials; reorder)

**Analog:** `ServiceTemplate.tsx` / `ComboTemplate.tsx` (sibling) for the reorder; its own existing `<section id=... aria-labelledby=...>` wrapper pattern for where the new sections slot in.

**`ContentAuthorityBlock` in the Core band** (`CityTemplate.tsx:130`) — same move-out-of-Core as Service.

**Where the new Permits/Materials sections slot in** — the template wraps each section in `<AnimateIn><section id="..." aria-labelledby="...-heading">...</section></AnimateIn>` (lines 119-128, 132-148). The new `CityPermits` / `CityMaterials` follow that exact wrapper (see their section analog below). Insert per §4.3 tree order.

**No schema change** (D-11 verified): `CityContentSchema` (`src/lib/schemas.ts:172-198`) has `heroHeadline`, `residential`, `commercial`, `weatherChallenges`, `neighborhoods`, `projectSpotlights` — **no `permits`/`materials` fields**. The shared copy lives in the new section components / template, NOT in 21 city-content data files.

---

### `src/components/templates/ComboTemplate.tsx` (EDIT — template, reorder)

**Analog:** `ServiceTemplate.tsx` / `CityTemplate.tsx` (sibling).

**`ContentAuthorityBlock` in the Core band** (`ComboTemplate.tsx:98`) — move out of Core (D-06).

**Extra handling flagged by research** — `ComboPlaceholder` (lines 197-252) renders a separate `<h2>{service.name} in {city.name}, NJ</h2>` at line 219 (non-question, declarative). The 942 noindex combos render this placeholder path when `getComboContent` throws (line 51-54). Its H2 must also be question-form (or the section restructured) so the rendered-audit sample for a noindex combo passes.

---

### `src/app/page.tsx` (EDIT — homepage route; Core-first + new sections; D-02)

**Analog:** `ServiceTemplate.tsx` ordering (same "list of sections, reorder the JSX children" model). The homepage is a flat sequence of `<Section/>` JSX siblings (lines 88-271), not `<AnimateIn>`-wrapped at this level.

**Current order + the Core-band problem** (`page.tsx:88-101`):
```tsx
<HeroSection />            // line 89 — keeps #lead-form above the fold (DO NOT move)
<TrustBar />              // line 92
<HomeRepairServices />    // line 95 — current first content H2 ("Expert Repair…") — NOT the Core string
<ServicesGrid />          // line 98 — the actual services list (this is the Core content)
<PriorityIndexingHub />   // line 101 — renders MID-Core band (D-02 says move it out of Core)
```
**Reorder lever:** reorder the JSX siblings so the first post-hero content H2 is the §4.1 Core `"What Roofing Services Do We Provide in Newark and Essex County?"` (the `ServicesGrid`/`HomeRepairServices` band), then add the new **5-step "How Does Our Roofing Process Work?"** H2 and a **Roofing-Knowledge-Base link** section, with the §4.1 Outer H2s after. Move `<PriorityIndexingHub/>` out of the Core band.

**Pseudo-heading promotions on this page** (HTAG-03) — several `<p>` elements act as section headings and must become real `<h2>`/`<h3>` (or be removed): `page.tsx:174` `<p className="...text-xl font-semibold">Find Us in Newark, NJ</p>`, `page.tsx:190` `<p>See Our Work</p>`, `page.tsx:214` `<p id="cta-heading">Contact Us for Your Free Estimate</p>`. The page already has a correct real `<h2 id="browse-services-heading">` at line 127 as the in-file precedent for the proper pattern.

---

### `src/components/templates/CoreTemplate.tsx` (EDIT — delegator) + page components

**Analog:** itself. `CoreTemplate` is a `switch (corePage.id)` that delegates to page components (lines 55-92): `AboutPage`, `ContactPage`, `ServicesHubPage`, `LocationsHubPage`. Each page component owns its own `<h1>`. The fallback branch (lines 80-82) shows the in-file H1 pattern:
```tsx
<h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
  {corePage.name}
</h1>
```
**In-scope edits (D-10):** the H1s for `/roofing-services` (`ServicesHubPage`), `/service-areas` (`LocationsHubPage`), `/contact` (`ContactPage`), `/about` (`AboutPage`) → question-form. Exact verbatim strings for these hubs are NOT in the spec (Open Question Q3) — planner assigns a natural question H1 per page (e.g. `/roofing-services` → "What Roofing Services Do We Provide?"); the audit enforces only "H1 is a question."

---

### `src/components/templates/HubScaffold.tsx` (EDIT — scaffold, H1-only)

**Analog:** itself — already renders a single clean `<h1>` with no split (HubScaffold.tsx:55):
```tsx
<h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
  {heading}
</h1>
```
The 6 noindex hubs pass `heading` in per-route. Rewrite each route's `heading` prop to question form (cheap; satisfies HTAG-01 at H1 level). Per RESEARCH Open Question Q2, enforce only DOM-safety rules on these scaffolds (1 H1, question H1, no split, no nav/footer H-tags) — NOT the full tree (no tree content exists yet).

---

### Hero H1 rewrites — `HeroSection.tsx`, `ServiceHero.tsx`, `CityHero.tsx`, `ComboHero.tsx`

**The split-H1 violation (HTAG-01) — exact markup to collapse into a single uninterrupted string:**

`HeroSection.tsx:71-80` (homepage — `<br/>` + split `<span>`):
```tsx
<h1 id="hero-heading" className="text-balance font-heading text-4xl font-bold ...">
  Roofing Contractor in Newark, NJ
  <br />
  <span className="text-copper">
    Same-Day Estimates · 24/7 Emergency Crews
  </span>
</h1>
// → single text node: "Who Should You Call for Roofing Services in Newark?"
```

`ServiceHero.tsx:87-94` (service — same `<br/>`+`<span>` split):
```tsx
<h1 id="service-hero-heading" className="text-balance font-heading text-3xl font-bold ...">
  {service.name}
  <br />
  <span className="text-copper">in Newark NJ</span>
</h1>
// → single text node: `Who Provides ${service.name} in Newark?`
```

**The clean-but-not-question heroes (HTAG-05 / HTAG-06)** — these already render a single text node (the analog for "what a correct H1 looks like"); only the string changes:

`CityHero.tsx:81-86`:
```tsx
<h1 id="city-hero-heading" className="...">
  {content.heroHeadline}
</h1>
// → `Who Provides Roofing Services in ${city.name}?`  (source from heading-config, not content.heroHeadline)
```

`ComboHero.tsx:37,105-110`:
```tsx
const h1Text = `${service.name} in ${city.name}, NJ`;   // line 37
<h1 id="combo-hero-heading" className="...">{h1Text}</h1>  // lines 105-110
// → `Who Provides ${service.name} in ${city.name}?`
```
*Rule for the audit: H1 must have ZERO element children (RESEARCH Pitfall 2 — the `.text` concat masks the split). CityHero/ComboHero already satisfy the no-child rule; HeroSection/ServiceHero do not.*

---

### `src/components/sections/CityPermits.tsx` + `CityMaterials.tsx` (NEW — section, H2 + body; D-11)

**Analog:** `src/components/sections/CityResidential.tsx` — the canonical "shared city-content section that renders one H2 + a body block with the city name interpolated." It is interchangeable with `CityCommercial.tsx` (same shape).

**Why this is the analog:** identical role (a city-content section component) and data flow (H2 heading + paragraph array). D-11 says the new Permits/Materials sections are shared real sections with `[City]` interpolated — `CityResidential` is exactly that pattern.

**Component shape to copy** (`CityResidential.tsx:4-43`):
```tsx
interface CityResidentialProps { heading: string; content: string[]; }
export function CityResidential({ heading, content }: CityResidentialProps) {
  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <h2 id="residential-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">
        {content.map((paragraph, index) => (
          <p key={index} className="font-body text-base leading-relaxed text-text-secondary">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
```
For `CityPermits` / `CityMaterials`: same wrapper, the H2 is the verbatim §4.3 question ("What Should You Know About Roofing Permits in [City]?" / "What Roofing Materials Work Best for [City] Properties?"), and `content` is ONE shared localized block with `${city.name}` interpolated (no new schema field, no 21 variants — D-11). In `CityTemplate`, slot each inside `<AnimateIn><section id="permits" aria-labelledby="permits-heading">...</section></AnimateIn>` matching the template's existing section wrapper (CityTemplate.tsx:119-128).

---

### `src/components/layout/Header.tsx` (EDIT — nav, demote `<h3>` to non-heading; HTAG-03)

**Analog:** the footer (already uses `<span>` for section labels — no H-tags, verified by RESEARCH; no change needed there) and in-file: the demoted heading keeps identical Tailwind classes, only the tag changes.

**The 3 sitewide nav `<h3>` violations** (verified line numbers — they ship on EVERY page via `app/layout.tsx`):

`Header.tsx:99` (`ServicesMegaMenu`):
```tsx
<h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-copper-dark">
  {group.categoryLabel}
</h3>
// → <span ...same classes... className="block ...">{group.categoryLabel}</span>
```

`Header.tsx:134` (`LocationsDropdown`):
```tsx
<h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-copper-dark">
  Service Areas
</h3>
// → <span className="mb-3 block ...">Service Areas</span>
```

`Header.tsx:169` (`GuidesDropdown`):
```tsx
<h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-copper-dark">
  {group.categoryLabel}
</h3>
// → <span className="mb-2 block ...">{group.categoryLabel}</span>
```
**Mechanic:** swap `<h3>` → `<span className="block ...">` (add `block` to preserve the line-box; visual style unchanged). One file fixes all pages. These are inside `<nav aria-label="Main navigation">` (Header.tsx:251), so the audit's `.closest('nav,...')` rule catches them today.

---

## Shared Patterns

### Build-failing audit exit pattern
**Source:** `scripts/audit-redirects.ts:34-40,114-131` and `scripts/audit-sitemap.ts:66,143-156`
**Apply to:** `scripts/audit-headings.ts`
```typescript
const errors: string[] = [];
// ... accumulate ...
if (errors.length > 0) { for (const e of errors.slice(0,40)) console.log(`  - ${e}`); process.exit(1); }
process.exit(0);
```

### Registry enumeration (no hardcoded slug lists)
**Source:** `src/data/slug-registry.ts:140-142` (`getSlugsByType`) + `audit-sitemap.ts:21-29` (direct registry imports + `isKeep`/`isNoindex` for live-combo set)
**Apply to:** `scripts/audit-headings.ts` static pass (enumerate all services/cities/combos/articles/core)

### Section component shape (H2 + body, interpolated city name)
**Source:** `src/components/sections/CityResidential.tsx:9-43`
**Apply to:** `CityPermits.tsx`, `CityMaterials.tsx` (NEW)

### Template section ordering (reorder = reorder JSX children; move `<AnimateIn>` wrapper with child)
**Source:** `ServiceTemplate.tsx:212-306`, `CityTemplate.tsx:118-244`, `ComboTemplate.tsx:93-148`
**Apply to:** all 4 template/page reorders (Service/City/Combo/home). Keep hero + `#lead-form` first (LEAD-01).

### Hero H1: single uninterrupted text node, no element children
**Source (correct precedent):** `CityHero.tsx:81-86`, `ComboHero.tsx:105-110` (already single text node)
**Source (violation to fix):** `HeroSection.tsx:71-80`, `ServiceHero.tsx:87-94` (`<br/>`+`<span>`)
**Apply to:** all 4 hero H1 rewrites

### Demote non-content heading to styled `<span>` (keep classes, add `block`)
**Source:** `Header.tsx:99,134,169` (the violations) — footer `<span>` labels are the correct precedent
**Apply to:** `Header.tsx` 3 nav dropdowns; and homepage pseudo-heading `<p>`s that should INSTEAD be promoted to real `<h2>` (`page.tsx:174,190,214` — opposite direction: these become real headings)

## No Analog Found

| File / capability | Role | Data Flow | Reason |
|-------------------|------|-----------|--------|
| `audit-headings.ts` rendered-HTML DOM-ancestry pass | validator (DOM) | file-I/O + transform | No existing audit parses rendered HTML; net-new capability. Use RESEARCH.md `node-html-parser` patterns (`querySelectorAll`, `.closest`, zero-element-children H1 check). `node-html-parser@7.1.0` is a NEW devDep (gate install behind `checkpoint:human-verify` per RESEARCH package audit). |

## Metadata

**Analog search scope:** `scripts/` (audits + generator), `src/data/` (registries, schemas, city-content), `src/components/templates/`, `src/components/sections/` (heroes + city sections), `src/components/layout/`, `src/app/page.tsx`, `package.json`, `.next/server/app/*.html` (prerender presence).
**Files scanned:** 17 source files read in full + targeted greps (schema fields, article count, prerender on disk).
**Verified facts this session:** article count = **252** (not 253); `CityContentSchema` has no `permits`/`materials` fields; prerendered HTML present on disk; `Header.tsx` nav `<h3>` at lines 99/134/169; split-H1 at `HeroSection.tsx:75-80` + `ServiceHero.tsx:91-94`; `ContentAuthorityBlock` in Core band at Service:215 / City:130 / Combo:98; generator title literals at the lines tabled above with slug derivation independent of `title`.
**Pattern extraction date:** 2026-06-03
