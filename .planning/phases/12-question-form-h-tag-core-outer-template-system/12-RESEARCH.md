# Phase 12: Question-Form H-Tag & Core/Outer Template System - Research

**Researched:** 2026-06-03
**Domain:** Next.js 16 SSG heading-structure refactor + build-failing audit tooling (Node/tsx)
**Confidence:** HIGH (codebase verified directly; one external dependency recommended)

## Summary

Phase 12 is almost entirely a **codebase-internal refactor**, not an ecosystem-discovery problem. The WHAT (verbatim §4.1–4.4 trees, heading policy, Core-before-Outer) is locked; the only genuinely uncertain HOW is the **rendered-HTML audit pass**, and that risk collapsed during investigation: `next build` already prerenders **every in-scope flat-slug page to `.next/server/app/{slug}.html`** (homepage = `index.html`, city = `roofing-in-{slug}-nj.html`, combo = `{service}-{city}-nj.html`). I verified 1,405 combo HTML files plus all core/hub/home/service files exist on disk from the last build. These files contain the **full document including the global `<header>`, `<footer>`, and `<nav>`**, so a single parsed file answers every DOM-only rule (split-H1, nav/footer H-tags, skipped levels, first-H2-after-hero). The audit reads the build's own output — **zero server, zero React harness, zero flakiness.** [VERIFIED: codebase grep + `.next/server/app/*.html` on disk]

The static pass is equally tractable: `src/data/slug-registry.ts` exposes `getSlugsByType(type)` and the registries (`services`, `cities`, `combos`, `articles`, `corePages`) are all importable in `tsx` exactly as the Phase 11 audits (`audit-redirects.ts`, `audit-sitemap.ts`) already do. The static pass should read heading strings from a **single central heading-config module** (CONTEXT discretion, preferred) that both the templates render and the audit asserts, so the two never drift.

Two material discrepancies surfaced that the planner MUST resolve, plus several concrete current-state gaps documented below. **Article count is 252, not 253** (generator excludes 2 services; `articles.ts` has exactly 252 entries with a `cluster` field already present). The homepage H1 and every ServiceHero H1 currently ship a `<br/>` + split-`<span>` (the exact HTAG-01 violation); the global `Header.tsx` ships three `<h3>` nav-dropdown headings on **every page** (the exact HTAG-03 nav violation).

**Primary recommendation:** Build `audit:headings` as a single `tsx` script with two passes — (1) **static** over the registries via a central heading-config module, (2) **rendered** by parsing one prerendered `.next/server/app/*.html` per template with `node-html-parser`. Wire it after `next build` so the HTML exists (the rendered pass requires a completed build). Centralize the verbatim question strings; rewrite heroes/templates/section components to emit them; rewrite the ~12 generator title patterns and regenerate. `process.exit(1)` on any violation, matching the Phase 11 pattern.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01** — Question-form heading policy (§17): exactly **one H1/page**; H1 is a question; **all H2/H3/H4 are questions** (end in `?`); **no skipped levels** (h1>h2>h3>h4); **no `<br>` / split-`<span>`** inside the H1 (single uninterrupted string); **H1 is never repeated as an H2**; **no H-tags in nav/footer/buttons/form-labels**; **no `<p>`/`<span>`/`<div>` pseudo-headings** introduce a real section (promote them). → HTAG-01, HTAG-03
- **D-02** — **Homepage** = verbatim **§4.1** tree, Core-first; H1 = "Who Should You Call for Roofing Services in Newark?"; include 5-step "How Does Our Roofing Process Work?" H2 + Roofing-Knowledge-Base link section + verbatim §4.1 Outer H2s. → HTAG-02
- **D-03** — **Service page** H1 = "Who Provides [Service] in Newark?" + verbatim **§4.2** 9-H2 tree. → HTAG-04
- **D-04** — **City page** H1 = "Who Provides Roofing Services in [City]?" + verbatim **§4.3** tree, including the NEW Permits + Materials sections. → HTAG-05
- **D-05** — **Combo page** H1 = "Who Provides [Service] in [City]?" + verbatim **§4.4** tree. → HTAG-06
- **D-06** — **Core-before-Outer on every template**; first major H2 after hero = Core Section per §17; **`ContentAuthorityBlock` moved out of the Core band**. → HTAG-07, HTAG-08
- **D-07** — Rewrite **all 253 article titles → question form**, cluster-keyed, **unique**, **slugs stable**. → KB-03 *(NOTE: actual count is 252 — see Open Questions Q1)*
- **D-08** — **`audit:headings`** is a **build-failing** gate (replaces advisory `scripts/audit-headings.ts`). → AUD-01
- **D-09 (Audit strategy = Hybrid)** — two passes: static (heading strings/data over ALL in-scope pages) + rendered-HTML (one representative page per template) for DOM-only rules. Violation → `process.exit(1)`.
- **D-10 (Enforced page-set = "Spec scope + hubs")** — home, all services, all cities, all 1,197 live combos (255 keep + 942 noindex via shared `ComboTemplate`), the important core/hub pages (`/roofing-services`, `/service-areas`, the 6 new hubs, `/contact`, `/about`). Article **titles** checked for question-form + uniqueness (NOT bodies). Comparison pages + existing-article bodies NOT enforced. Utility pages excluded: `/privacy`, `/thank-you`, the 404.
- **D-11 (New city sections = shared, localized copy)** — §4.3 Permits + Materials sections as real sections, one shared content block each with `[City]` interpolated. No new per-city schema fields, no 21 hand-authored variants.
- **D-12 (Article-title mechanics)** — rewrite the ~12 title-pattern templates in `scripts/generate-articles-ts.ts` → question form (preserve each angle: signs/cost/contractor/pros-cons/guide), regenerate `articles.ts`. Rewrite only the on-page H1 (`article.title`, no length cap); keep `metaTitle` ≤60. Slugs generated independently, stay stable. Do NOT hand-edit `articles.ts`.

### Claude's Discretion
- **Heading-config storage** — central heading-config module (preferred, removes duplication, lets the static audit read the same source the templates render) vs. inlined per template. Either acceptable if the audit verifies rendered output, not just config.
- **Exact rendered-sample page list** — one representative real page per template/page-type.
- **How shared/promoted headings are implemented** — promoting pseudo-headings to real `<h2>/<h3>` and the Core/Outer reorder mechanics. (Shared `<CtaBanner/>`/dedup is Phase 16; Phase 12 only needs headings correct.)
- **Audit implementation internals** — static-pass parser (regex vs. ts-morph/AST), rendered-pass HTML parser, question-form detection rule (default: trimmed heading text ends in `?`).

### Deferred Ideas (OUT OF SCOPE)
- Body paragraph rewrites, URL/slug changes, design/colors/fonts, schema markup, internal-link wiring (Phases 13–16).
- Comparison page headings + the bodies of the 253 existing articles (only article *titles* in Phase 12). §18: do not force existing article bodies into a rigid shape.
- KB hub/cluster/article body trees (§5/§6 → Phase 13); glossary §7 tree (Phase 14).
- Fabricated trust values, shared `<CtaBanner/>`/dedup, SEO-language component deletion (Phase 16); repointing old-hub `/services` links (Phase 15).
- City-specific unique Permits/Materials content (later enrichment, not Phase 12).
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| KB-03 | All 253 article titles rewritten to question form, cluster-keyed, slugs stable, unique | §"Generator Title Patterns" — exact 12-pattern map + regen command + slug-independence proof |
| HTAG-01 | Homepage emits exactly one question-form H1 as a single uninterrupted string (no `<br>`/`<span>` split) | §"Current Heading Reality" — homepage H1 currently HAS `<br/>`+`<span>`; fix in `HeroSection.tsx` |
| HTAG-02 | Homepage Core-first order + 5-step process H2 + KB-link section + verbatim Outer H2s | §"Current Heading Reality" — homepage section order + missing sections mapped |
| HTAG-03 | No pseudo-headings; strict h1>h2>h3>h4; H1≠H2; no H-tags in nav/footer/buttons/form-labels | §"Current Heading Reality" — `Header.tsx` 3× `<h3>` in nav (sitewide); audit rules encoded |
| HTAG-04 | Every service page H1 + §4.2 9-question tree | §"Current Heading Reality" — `ServiceHero` H1 split; ServiceTemplate section map |
| HTAG-05 | Every city page H1 + §4.3 tree incl. new Permits + Materials sections | §"Current Heading Reality" + D-11 placement; city-content has no permits/materials fields |
| HTAG-06 | Every combo page H1 + §4.4 tree | §"Current Heading Reality" — ComboHero H1 (single string, not question) |
| HTAG-07 | Core-before-Outer on every template; `ContentAuthorityBlock` out of Core band | §"Current Heading Reality" — exact current section ordering per template |
| HTAG-08 | First major H2 after hero = Core per §17 page-type rules | §"Architecture Patterns" — first-Core-H2 strings + rendered-pass rule |
| AUD-01 | `audit:headings` created (build-failing) | §"Architecture Patterns" + §"Validation Architecture" — full two-pass design |
</phase_requirements>

## Architectural Responsibility Map

This phase is single-tier (Next.js SSG frontend) but capabilities split by where the heading is authored vs. where it is enforced.

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Question-form H1/H2/H3/H4 emission | Templates + section components (React, SSR) | Central heading-config module (data) | Headings render server-side into the prerendered HTML; config module is the single source the audit also reads |
| Article-title question rewrite | Generator script (`scripts/generate-articles-ts.ts`, build-time) | `src/data/articles.ts` (generated data) | Titles are pattern-derived; one edit point covers all 252; never hand-edit generated data |
| New city Permits/Materials sections | Shared template/section copy (React) | — | D-11: shared localized block, no per-city schema field |
| Static heading audit | `tsx` script over data registries | `slug-registry.ts` `getSlugsByType` | Same import path the Phase 11 audits use; no HTML needed |
| Rendered-HTML audit | `tsx` script over `.next/server/app/*.html` | `node-html-parser` | Build already emits the DOM; parse the artifact, no server |
| Build/CI gate wiring | `package.json` scripts | `next build` ordering | Rendered pass needs HTML → audit runs **after** build |

## Standard Stack

### Core (already in the repo — no new runtime deps)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `tsx` | ^4.21.0 (devDep) | Run the audit + generator scripts | Already runs all Phase 11 audits + the article generator [VERIFIED: package.json] |
| `next` | 16.1.6 | SSG; prerenders every page to `.next/server/app/{slug}.html` | Build artifact is the audit's HTML source [VERIFIED: `.next/server/app/*.html` on disk] |
| `zod` | ^3.25.76 | `ArticleSchema` validation incl. `metaTitle: z.string().max(60)` | Enforces the ≤60 metaTitle cap at generation [VERIFIED: generate-articles-ts.ts:363] |

### Supporting (ONE new devDependency for the rendered pass)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `node-html-parser` | 7.1.0 | Parse prerendered `.html` for DOM-only rules (split-H1, nav/footer H-tags, level order) | Rendered pass only; lightweight, fast, `querySelectorAll('h1,h2,h3,h4')` + `.closest('nav,footer,button,label')` |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `node-html-parser` | `cheerio@1.2.0` | jQuery-like API, also fine; heavier, more transitive deps. node-html-parser is lighter and its `querySelector`/`closest` cover every needed rule. [CITED: npm-compare.com] |
| `node-html-parser` | regex over raw HTML | Brittle for "is this `<h3>` inside `<nav>`/`<footer>`" and level-order across nesting — needs real DOM ancestry. Use the parser. |
| Parse `.next/server/app/*.html` | Run a dev/preview server + fetch | Adds a flaky server dependency in CI; the build already wrote the exact HTML to disk. Avoid. |
| Parse `.next/server/app/*.html` | `renderToStaticMarkup` in a node harness | Re-implements rendering, won't include the real `<Header>/<Footer>` layout wrapper from `app/layout.tsx`; the prerender already has them. Avoid. |

**Installation:**
```bash
npm install --save-dev node-html-parser
```

**Version verification:** [VERIFIED: npm registry]
```
node-html-parser  version=7.1.0  created=2017-06-14  modified=2026-03-03  weekly downloads=7,185,799  repo=github.com/taoqf/node-fast-html-parser  postinstall=(none)
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| `node-html-parser` | npm | 8 yrs (2017) | 7.18M/wk | github.com/taoqf/node-fast-html-parser | unavailable | Approved (strong registry provenance) |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none

slopcheck could not be installed in this environment, so per protocol `node-html-parser` is tagged `[ASSUMED]` and the planner SHOULD gate its install behind a `checkpoint:human-verify` task. Mitigating evidence is strong and verified directly: 8-year age, 7.18M weekly downloads, a real maintained GitHub repo (`taoqf/node-fast-html-parser`), and **no `postinstall` script** (`npm view node-html-parser scripts.postinstall` returned empty). [VERIFIED: npm registry + downloads API]. If the planner prefers zero new deps, `cheerio@1.2.0` is already a transitive presence in many Next toolchains but is NOT a direct dep here — node-html-parser remains the lighter recommendation.

## Architecture Patterns

### System Architecture Diagram — `audit:headings` (two passes)

```
                         ┌─────────────────────────────────────────┐
   npm run build  ──────▶│  next build  → prerenders every page to  │
   (prebuild: url-class) │  .next/server/app/{slug}.html (1,400+)   │
                         └───────────────────┬─────────────────────┘
                                             │ (HTML on disk)
                                             ▼
   npm run audit:headings (tsx) ───────────────────────────────────────────
                                             │
        ┌────────────────────────────────────┴───────────────────────────┐
        ▼ STATIC PASS                                    ▼ RENDERED PASS
  import registries:                          read ONE .html per template:
   getSlugsByType('service'|'city'|...)        index.html (home)
   services / cities / combos / articles       roof-repair.html (service)
   corePages  +  HEADING_CONFIG module         roofing-in-newark-nj.html (city)
        │                                       roof-repair-newark-nj.html (combo)
        ▼ assert (data-level):                  roofing-services.html, contact.html …
   • every config heading ends in '?'                 │
   • exactly one H1 per page                          ▼ parse with node-html-parser
   • H1 ≠ any H2 on same page                   • exactly one <h1>; no <br>/<span> child in <h1>
   • 252 article titles question-form           • all h2/h3/h4 text ends in '?'
   • 252 article titles unique                  • no <h*> inside nav/footer/button/label (.closest)
   • metaTitle ≤ 60 (already z-capped)          • no skipped levels (h1→h2→h3→h4 monotonic)
        │                                       • first <h2> after hero === Core string (§17)
        └──────────────┬─────────────────────────────────┘
                       ▼
              collect violations[]
          violations.length ? exit(1) : exit(0)     ← Phase 11 fail-pattern
```

The diagram traces the primary use case: a build runs, writes HTML, the audit reads both the data registries and the HTML artifact, accumulates violations, and fails the build on any.

### Recommended Project Structure (files this phase creates/changes)
```
scripts/
├── audit-headings.ts          # REWRITE — replace advisory data audit with hybrid build-failing audit
└── generate-articles-ts.ts    # EDIT — rewrite ~12 title patterns to question form
src/
├── data/
│   ├── heading-config.ts       # NEW (discretion, recommended) — central verbatim question strings
│   ├── articles.ts             # REGENERATE — 252 question-form titles (do NOT hand-edit)
│   └── city-content/           # (no schema change — shared Permits/Materials copy lives in template/section)
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # EDIT — single question-form H1, remove <br>+<span>
│   │   ├── ServiceHero.tsx      # EDIT — single question-form H1, remove <br>+<span>
│   │   ├── CityHero.tsx         # EDIT — question-form H1 (heroHeadline → question)
│   │   ├── ComboHero.tsx        # EDIT — question-form H1
│   │   ├── CityPermits.tsx      # NEW — shared §4.3 Permits section (H2 + [City])
│   │   ├── CityMaterials.tsx    # NEW — shared §4.3 Materials section (H2 + [City])
│   │   └── *.tsx (many)         # EDIT — H2/H3 text → question form; promote pseudo-headings
│   ├── layout/Header.tsx        # EDIT — 3× nav <h3> → <span>/<p> (no H-tags in nav)
│   └── templates/
│       ├── ServiceTemplate.tsx  # EDIT — Core-first; move ContentAuthorityBlock out of Core band
│       ├── CityTemplate.tsx     # EDIT — Core-first; add Permits + Materials; move ContentAuthorityBlock
│       ├── ComboTemplate.tsx    # EDIT — Core-first; move ContentAuthorityBlock out of Core band
│       └── CoreTemplate.tsx     # EDIT — hub/core pages question-form H1s where in scope
└── app/
    └── page.tsx                 # EDIT — homepage Core-first; add 5-step process + KB-link section; move PriorityIndexingHub
package.json                     # EDIT — ensure audit:headings runs after build in the gate
```

### Pattern 1: Central heading-config module (discretion — recommended)
**What:** A single `src/data/heading-config.ts` exporting the verbatim §17/§4.1–4.4 strings (with `[Service]`/`[City]` interpolators), consumed by BOTH the templates that render headings AND the static audit pass.
**When to use:** Always — it is the only way the static pass can assert "the page renders a question" without re-parsing HTML, and it prevents template/audit drift.
**Example:**
```typescript
// Source: pattern, modeled on existing src/data/* registry style
export const HEADING_CONFIG = {
  home: {
    h1: 'Who Should You Call for Roofing Services in Newark?',
    coreH2: 'What Roofing Services Do We Provide in Newark and Essex County?',
    outerH2s: [
      'Why Should Homeowners and Businesses Choose Our Roofing Company?',
      'How Does Our Roofing Process Work?',
      'Where Do We Provide Roofing Services?',
      'How Much Do Roofing Services Cost?',
      'What Roofing Questions Do Customers Ask Most Often?',
      'How Can You Request a Free Roofing Estimate?',
    ],
  },
  service: {
    h1: (s: string) => `Who Provides ${s} in Newark?`,
    coreH2: (s: string) => `What ${s} Do We Provide?`,
    // …§4.2 H2s
  },
  // city, combo …
} as const;
```

### Pattern 2: Rendered-pass DOM rules with `node-html-parser`
**What:** Parse one prerendered file per template; use `closest()` for ancestry-based rules.
**Example:**
```typescript
// Source: node-html-parser API (querySelectorAll/closest) + repo file layout
import { parse } from 'node-html-parser';
import { readFileSync } from 'node:fs';

const root = parse(readFileSync('.next/server/app/index.html', 'utf8'));
const h1s = root.querySelectorAll('h1');
if (h1s.length !== 1) violations.push('home: expected 1 h1');
// split-H1 rule: H1 must contain no element children (no <br>/<span>)
if (h1s[0]?.childNodes.some((n) => n.nodeType === 1)) violations.push('home: H1 has element children (<br>/<span> split)');
// nav/footer/button/label rule:
for (const h of root.querySelectorAll('h1,h2,h3,h4')) {
  if (h.closest('nav,footer,button,label')) violations.push(`forbidden H-tag inside nav/footer/button/label: "${h.text.trim()}"`);
}
```
*Note: `node-html-parser` supports `closest()` and attribute/tag selectors; confirm `role="navigation"`/`role="contentinfo"` variants too (the repo uses real `<nav>`/`<footer role="contentinfo">`).* [VERIFIED: index.html contains `<nav>`, `<footer>`, `role="banner"`]

### Pattern 3: Representative rendered-sample set (discretion — pick one per template)
Because all 1,197 live combos share `ComboTemplate`, all 65 services share `ServiceTemplate`, all 21 cities share `CityTemplate`, **one file per template** proves the DOM rules. Recommended set (all confirmed present on disk):
- `index.html` (home), `roof-repair.html` (service), `roofing-in-newark-nj.html` (city), `roof-repair-newark-nj.html` (keep combo), `roofing-services.html`, `service-areas.html`, `contact.html`, `about.html`, and the 6 hub `.html` files.
The **static** pass still enforces question-form + uniqueness across **all** pages (every service/city/combo/article) via the config + registries.

### Anti-Patterns to Avoid
- **Running the rendered pass without a prior `next build`:** the `.html` files won't exist or will be stale. The audit must run **after** build, or detect a missing/old artifact and fail with a clear "run `next build` first" message.
- **Hand-editing `src/data/articles.ts`:** it is generator output; a regen wipes edits. Edit `generate-articles-ts.ts` only. [VERIFIED: file header + Zod re-parse]
- **Asserting only the config (static), not the HTML:** a template could render a different string than the config. The rendered pass is what makes the audit trustworthy (CONTEXT discretion note).
- **Treating the homepage prerender as `page.html`:** it is `index.html` in `.next/server/app/`. [VERIFIED]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Detect `<h3>` inside `<nav>`/`<footer>` | Regex + manual tag-balance tracking | `node-html-parser` `.closest('nav,footer,button,label')` | Ancestry across arbitrary nesting needs a real DOM tree; regex misbalances on nested tags |
| Render a page to HTML for audit | `renderToStaticMarkup` harness | The `.next/server/app/{slug}.html` build artifact | The build already rendered the real page incl. layout `<Header>/<Footer>`; re-rendering omits the wrapper and duplicates logic |
| Enumerate the in-scope page-set | Hardcoded slug lists | `getSlugsByType()` + the registries | Already the source of truth; stays correct as data changes; mirrors Phase 11 audits |
| Generate 252 unique question titles | Per-article hand authoring | The generator's pattern functions + its existing uniqueness check | One edit point; the generator already throws on duplicate slug/id and >60 metaTitle |
| Fail the build on violation | Custom CI plumbing | `process.exit(1)` in the tsx script + a `package.json` gate | Exactly the Phase 11 `audit-redirects`/`audit-sitemap` pattern already in use |

**Key insight:** The repo already solved every hard sub-problem for a different audit — the Phase 11 scripts give a copy-paste fail-pattern, the slug-registry gives enumeration, the build gives the HTML, and the generator gives one-edit title rewrites. The only net-new capability is DOM ancestry checks, which one tiny library handles.

## Runtime State Inventory

This phase is a code/data refactor with **no external datastores, live-service config, OS registrations, or secrets** involved. The one "stored/generated state" concern is the generated article registry.

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Stored data (datastores) | None — verified by repo scan; all data is in-repo TS files, no DB/CMS | none |
| Live service config | None — verified; no external service stores headings | none |
| OS-registered state | None — verified; no task scheduler / pm2 / systemd in repo | none |
| Secrets/env vars | None affected — heading strings are not env-driven; verified no `process.env` heading reads | none |
| Build artifacts / generated files | `src/data/articles.ts` (generated by `scripts/generate-articles-ts.ts`); `.next/server/app/*.html` (build output the rendered audit reads) | **Code edit** (generator patterns) + **regenerate** `articles.ts`; rebuild to refresh `.html` before audit |

**The canonical question — after every source file is updated, what still has the old string?** Answer: `src/data/articles.ts` (until regenerated from the edited generator) and the `.next/server/app/*.html` prerender (until `next build` reruns). Both are regenerated by build steps; no manual data migration exists. Confirm the regen command produces exactly 252 entries (it did in this session) and that titles are unique (the generator's own check guards this).

## Common Pitfalls

### Pitfall 1: Article count mismatch (252 vs "253")
**What goes wrong:** Spec, REQUIREMENTS (KB-03), ROADMAP, and CONTEXT all say **253**; `src/data/articles.ts` contains exactly **252** entries and the generator comment says 252.
**Why it happens:** The generator excludes 2 services (`silicone-elastomeric-roof-coating`, `roof-replacement-cost`) → 63 article-services × 3 = 189 + 30 comparisons × 2 = 60 + 3 core = **252**. The "253" likely came from an earlier topical-map count. [VERIFIED: `grep -c "    id: '" src/data/articles.ts` = 252; regen also = 252]
**How to avoid:** The planner must decide whether the audit asserts `=== 252` (matches reality) or whether one article is intentionally added to reach 253. Do **not** blindly assert 253 — it will fail the build against correct data. Recommend asserting against `articles.length` (whatever the generator emits) for question-form + uniqueness, and letting the plan note the 252/253 reconciliation explicitly.

### Pitfall 2: Split H1 hides in the hero `<span>` accent, not a separate element
**What goes wrong:** `HeroSection.tsx` (home) and `ServiceHero.tsx` render `H1{ text }<br/><span class="text-copper">…</span>` — a styled second line. A naive "does H1 text end in `?`" check on `.text` would pass/fail unpredictably because `.text` concatenates both spans.
**Why it happens:** The copper accent line is a design pattern repeated across heroes. [VERIFIED: index.html + roof-repair.html prerender show `<br/><span>`]
**How to avoid:** The split-H1 rule must check **`<h1>` has zero element children** (no `<br>`, no `<span>`), independent of the text rule. CityHero/ComboHero render a single text node today (no split) but are **not** question-form. Both rules are needed.

### Pitfall 3: Global `Header.tsx` nav H-tags appear on EVERY page
**What goes wrong:** `Header.tsx` renders three `<h3>` ("category label" / "Service Areas") inside the nav dropdowns. Because Header is in `app/layout.tsx`, every prerendered page contains them (index.html showed 23 `<h3>`, several from the header). This violates HTAG-03 sitewide and also breaks level-order (an `<h3>` with no preceding `<h2>` in the nav region). [VERIFIED: Header.tsx:99,134,169 + index.html h3 count]
**How to avoid:** Convert the three Header nav `<h3>` to `<span>`/`<p>` (visual style unchanged). One file fixes all pages. The footer already uses `<span>` for its section labels (no H-tags) — verified, no change needed there.

### Pitfall 4: Reorder breaks the LEAD-01 above-the-fold form or Phase 9/10 animations
**What goes wrong:** The Core-before-Outer reorder moves section components; the lead form lives in the hero (`HeroFormReveal`/`#lead-form`) and many sections are wrapped in `<AnimateIn>`. Reordering the *content sections after the hero* is safe; touching the hero/form is not.
**Why it happens:** The form is inside the hero (above the fold) in every template; the reorder is about Core vs Outer **content** sections that follow the hero.
**How to avoid:** Keep the hero (and its lead form) first; reorder only the post-hero content sections. Preserve `<AnimateIn>` wrappers when moving a section (move the wrapper with its child). Re-verify `#lead-form` is still in the hero after edits. [VERIFIED: form is in HeroSection/ServiceHero/CityHero/ComboHero hero blocks, not content sections]

### Pitfall 5: Rendered pass reads a stale `.next`
**What goes wrong:** If the audit runs before a fresh build (or the dev cache is stale), it asserts against old HTML and either falsely passes or fails.
**How to avoid:** Gate so the audit runs after `next build`; have the rendered pass check the file mtime or simply require the build step to precede it in the npm gate. Fail loudly if a sample `.html` is missing.

## Code Examples

### Static pass: enumerate + assert question-form + uniqueness (mirrors Phase 11 audits)
```typescript
// Source: modeled on scripts/audit-sitemap.ts (registry imports + process.exit pattern)
import { articles } from '@/data/articles';
import { HEADING_CONFIG } from '@/data/heading-config';

const errors: string[] = [];

// 252 article titles: question-form + unique
const seen = new Set<string>();
for (const a of articles) {
  if (!a.title.trim().endsWith('?')) errors.push(`article ${a.id}: title not a question → "${a.title}"`);
  if (seen.has(a.title)) errors.push(`duplicate article title: "${a.title}"`);
  seen.add(a.title);
}

// config-level: every heading string ends in '?', H1 ≠ any H2
// (interpolate [Service]/[City] before the check)
```

### Rendered pass: level-order (no skipped levels) over a parsed file
```typescript
// Source: node-html-parser querySelectorAll preserves document order
const headings = root.querySelectorAll('h1,h2,h3,h4');
let prev = 0;
for (const h of headings) {
  const lvl = Number(h.tagName[1]);
  if (h.closest('nav,footer,button,label')) continue; // skip allowed-to-be-removed regions during transition? NO — these should error
  if (prev && lvl > prev + 1) errors.push(`skipped level: h${prev} → h${lvl} ("${h.text.trim()}")`);
  prev = lvl;
}
```

### Build gate wiring (package.json)
```jsonc
// audit:headings must run AFTER build so .next HTML exists.
// Option A (CI): "ci": "next build && npm run audit:headings"
// Option B: keep audit:headings standalone; the CI/verify step runs build then audit.
"audit:headings": "tsx scripts/audit-headings.ts"
```

## Current Heading Reality (per template — concrete gaps for rewrite tasks)

All H1 sources confirmed via prerendered HTML and source. **None are currently question-form.**

| Template / page | Current H1 (verified) | Split? | Current first major section after hero | Gap vs spec |
|-----------------|------------------------|--------|----------------------------------------|-------------|
| **Homepage** (`page.tsx` → `HeroSection`) | "Roofing Contractor in Newark, NJ" + `<br/>` + `<span>`"Same-Day Estimates · 24/7 Emergency Crews" | **YES** (`<br/>`+`<span>`) | `TrustBar` → `HomeRepairServices` (H2 "Expert Repair and Replacement Services") | H1 not question + split; first H2 not Core "What Roofing Services Do We Provide…"; `PriorityIndexingHub` renders mid-Core band (line 101); missing 5-step process H2 + KB-link section; Outer H2s not question-form |
| **Service** (`ServiceTemplate` → `ServiceHero`) | "{service.name}" + `<br/>` + `<span>`"in Newark NJ" | **YES** | `ServiceOverview` then `ContentAuthorityBlock` (line 215) | H1 not question + split; **`ContentAuthorityBlock` is inside the Core band** (must move out, D-06); first H2 not §4.2 Core "What [Service] Do We Provide?"; section H2/H3 not question-form |
| **City** (`CityTemplate` → `CityHero`) | `content.heroHeadline` e.g. "Roofing Services in Newark, NJ" | No (single text node) | `CityOverview` then `ContentAuthorityBlock` (line 130) | H1 not question; `ContentAuthorityBlock` in Core band; **no Permits / Materials sections exist** (city-content has no such fields → add shared sections, D-11); first H2 not §4.3 Core; section H2s not question-form |
| **Combo** (`ComboTemplate` → `ComboHero`) | "{service.name} in {city.name}, NJ" (single string) | No | `ComboOverview` → `ComboChallenges` → `ContentAuthorityBlock` (line 98) | H1 not question; `ContentAuthorityBlock` in Core band; first H2 not §4.4 Core "What [Service] Is Available in [City]?"; section H2s not question-form. `ComboPlaceholder` (line 197) renders a separate `<h2>` "{service} in {city}, NJ" — also needs handling |
| **Core/Hub** (`CoreTemplate`, `HubScaffold`) | Page name (e.g. "About Us") / hub heading | No | varies per page component | In-scope core/hub H1s ("/roofing-services", "/service-areas", 6 hubs, /contact, /about) need question-form per D-10; hub scaffolds currently noindexed (Phase 11) — confirm whether audit enforces question-form on noindexed scaffolds or only on the indexable core pages (see Open Questions Q2) |
| **Global `Header.tsx`** | n/a | n/a | 3× `<h3>` in nav dropdowns (sitewide) | Convert to `<span>`/`<p>` (HTAG-03) |
| **`ContentAuthorityBlock`** | n/a (renders `<h2>`/`<h3>`) | n/a | Renders inside Core band on service/city/combo | Move OUT of Core band (D-06); contains SEO-facing language + "10/10 content target" + fabricated — but **deletion is Phase 16**; Phase 12 only moves it and (if it stays) its headings must be question-form |

**Question-form gap is broad:** nearly every section component (`HomeRepairServices`, `ServicesGrid`, `HomeWhyChooseUs`, `HomePricingTable`, `LocationsGrid`, `FaqAccordion`, `ServiceSigns`, `ServiceApproach`, `ServiceProcess`, city sections, combo sections) renders a declarative H2/H3 (e.g. "Our Roofing Services", "Frequently Asked Questions", "Serving All of Essex County…"). Each must be rewritten to the verbatim §4.1–4.4 question string. The central heading-config module is the clean place to source these.

## Generator Title Patterns (D-12 mechanics — confirmed)

**Regen command (IMPORTANT — there is NO `npm run generate:articles` script):**
```bash
npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts
```
[VERIFIED: file header comment line 3 + package.json has no `generate:*` script]. The planner may optionally add a `"generate:articles": "tsx scripts/generate-articles-ts.ts > src/data/articles.ts"` script for ergonomics, but the redirect-to-file is mandatory (the generator writes to **stdout** via `console.log`).

**The ~12 title patterns to rewrite (current → question form):** [VERIFIED: generate-articles-ts.ts lines 99–254]

| Fn / position | Category branch | Current `title` | → Question form (preserve angle) |
|---------------|-----------------|-----------------|----------------------------------|
| `serviceSignsArticle` (pos 1) | all | `Signs You Need {shortName} in NJ` | `What Are the Signs You Need {shortName}?` |
| `serviceCostArticle` (pos 2) | all | `{shortName} Cost in NJ: What to Expect` | `How Much Does {shortName} Cost in NJ?` |
| `serviceDecisionArticle` (pos 3) | repair-maintenance | `Choosing the Right {shortName} Contractor in NJ` | `How Do You Choose a {shortName} Contractor?` |
| `serviceDecisionArticle` | residential/commercial-roof-types | `{shortName}: Pros and Cons for NJ Properties` | `What Are the Pros and Cons of {shortName}?` |
| `serviceDecisionArticle` | components-specialty | `{shortName}: Complete NJ Homeowner Guide` | `What Should You Know About {shortName}?` |
| `serviceDecisionArticle` | energy-solar | `{shortName}: NJ Incentives and Savings` | `What NJ Incentives and Savings Apply to {shortName}?` |
| `serviceDecisionArticle` | commercial-services | `{shortName}: What NJ Business Owners Should Know` | `What Should NJ Business Owners Know About {shortName}?` |
| `serviceDecisionArticle` | design-consultation | `{shortName}: What to Expect in NJ` | `What Should You Expect From {shortName}?` |
| `serviceDecisionArticle` | default (replacement-sub) | `Complete Guide to {shortName} in NJ` | `What Should You Know About {shortName}?` |
| `compBuyerGuide` (pos 1) | comparison | `How to Choose: {c.name} in NJ` | `Which Is Better: {c.name}?` |
| `compExpertPicks` (pos 2) | comparison | `What NJ Roofers Recommend: {c.name}` | `What Do NJ Roofers Recommend for {c.name}?` |
| `coreArticles` (3 hard-coded) | core | "Complete NJ Roofing Guide…", "Finding a Reliable Roofer…", "NJ Roofing Licensing…" | rewrite each to a question, e.g. "What Should NJ Homeowners Know About Roofing?", "How Do You Find a Reliable Roofer in Essex County?", "What Are NJ Roofing Licensing and Insurance Requirements?" |

**Uniqueness guarantee:** two decision patterns (components-specialty "Complete Guide" and default "Complete Guide") currently both produce "What Should You Know About {shortName}?" — but `shortName` differs per service, and the generator's existing duplicate-slug/id check + the audit's title-uniqueness check guard collisions. The planner must verify no two *services in different categories* collapse to the same question; if any do, vary the wording per category (already done above). [VERIFIED: generator has `slugSet`/`idSet` checks lines 317–341]

**Slug stability:** slugs are derived in `makeSlug([...])` from `s.slug`/`c.slug` + fixed tokens (e.g. `signs-you-need-{slug}-nj`), **completely independent of `title`**. Rewriting `title` does NOT change any slug. [VERIFIED: generate-articles-ts.ts lines 84–119, 143–193 — slug built from service/comparison slug, never from title]

**metaTitle ≤60 stays separate:** `metaTitle` is generated independently (its own `truncTitle(…, 60)` calls) and re-validated by `ArticleSchema.metaTitle: z.string().max(60)`. Question-form `title` (no cap) and concise `metaTitle` are already decoupled — keep them so; do NOT feed the long question into `metaTitle`. [VERIFIED: lines 122,150,195,219,240,332-334,363]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Advisory data-level heading audit (keyword + location rules) | Build-failing hybrid (static data + rendered DOM), question-form rules | This phase | The OLD `scripts/audit-headings.ts` enforces the *opposite* policy (wants location keywords in H1, not questions) — it must be fully replaced, not extended |
| Auditing rendered output via a server/crawler | Parsing the SSG build's own `.next/server/app/*.html` | This phase | No server, no flakiness; CI-friendly; deterministic |

**Deprecated/outdated:**
- The existing `scripts/audit-headings.ts` logic (`hasLocationRef`, "H1 missing location reference") directly contradicts the question-form policy — discard it entirely.
- Any assumption that the homepage prerender is `page.html`: it is `index.html`.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `node-html-parser@7.1.0` is the right rendered-pass parser (slopcheck unavailable; strong registry provenance instead) | Standard Stack / Package Audit | Low — swap to `cheerio@1.2.0` (no other code change); both expose `querySelectorAll`/`closest` |
| A2 | The rendered audit should read `.next/server/app/*.html` (default server build, no `output:export`) | Architecture | Low — verified files exist on disk this session; if `output` mode changes later, path changes to `out/` |
| A3 | Suggested question-form rewrites for the article patterns are *examples*; the verbatim §17/brief strings govern page H-tags, but **article titles have no verbatim spec string** (only "cluster-keyed question, unique, preserve angle") | Generator Title Patterns | Medium — exact title wording is Claude's-discretion within D-12; planner/executor finalize, audit enforces only `?`+uniqueness |
| A4 | Moving (not deleting) `ContentAuthorityBlock` out of the Core band satisfies Phase 12; its SEO-language/fake-value cleanup is Phase 16 | Current Heading Reality | Low — explicit in CONTEXT deferred + §19 Phase 16 |

**If this table looks short:** the locked trees/policy (D-01..D-08) are CITED from the spec, not assumed; the codebase facts are VERIFIED. Only the items above rest on judgement.

## Open Questions (RESOLVED)

> All three were resolved during planning — each resolution is baked into a Phase 12 plan task with concrete acceptance criteria (see 12-01, 12-04, 12-05). Listed here for provenance.

1. **[RESOLVED — 12-01/12-04/12-05] Article count: 252 (reality) vs 253 (spec).**
   - What we know: `articles.ts` and the generator both produce exactly 252; spec/REQUIREMENTS/CONTEXT say 253.
   - What's unclear: whether one article is meant to be added, or "253" is a stale figure.
   - Recommendation: audit asserts question-form + uniqueness over `articles.length` (252), and the plan records the reconciliation. Do not hardcode `=== 253`.

2. **[RESOLVED — 12-01/12-04] Does `audit:headings` enforce the full question-form tree on the 6 noindexed hub scaffolds?**
   - What we know: D-10 lists the 6 new hubs in the enforced set; Phase 11 left them as noindexed scaffolds (`HubScaffold`, single H1, no tree).
   - What's unclear: Phase 12 is not chartered to build hub *content* (that's later); enforcing a full tree on an intentional scaffold would fail.
   - Recommendation: enforce only the **DOM-safety rules** (one H1, H1 is a question, no split, no nav/footer H-tags, no skipped levels) on the scaffolds, and the **full tree** only on home/service/city/combo + the content-bearing core pages. Planner to confirm the scaffold H1s are rewritten to question form (cheap, satisfies HTAG-01 at H1 level).

3. **[RESOLVED — 12-04] CoreTemplate in-scope page H1 sources.**
   - What we know: `/roofing-services`, `/service-areas`, `/contact`, `/about` render via `CoreTemplate` → page components (`ServicesHubPage`, `LocationsHubPage`, `ContactPage`, `AboutPage`) each with their own `<h1>`.
   - What's unclear: exact verbatim question H1 for each (spec gives Home/Service/City/Combo H1s, not these hubs).
   - Recommendation: planner assigns a natural question-form H1 per page (e.g. "/roofing-services" → "What Roofing Services Do We Provide?"), enforced by the audit's "H1 is a question" rule.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `tsx` | run audit + generator | ✓ | 4.21.0 (devDep) | — |
| `next` build (prerender → `.next/server/app/*.html`) | rendered audit pass | ✓ | 16.1.6; HTML present on disk | — |
| `node-html-parser` | rendered pass parser | ✗ (not installed) | needs 7.1.0 | `cheerio@1.2.0` |
| `npm` | install the parser | ✓ | present | — |

**Missing dependencies with no fallback:** none.
**Missing dependencies with fallback:** `node-html-parser` (fallback `cheerio`). One `npm install --save-dev` resolves it.

## Validation Architecture

Nyquist validation is **enabled** (`workflow.nyquist_validation` absent in `.planning/config.json` → treated as on). The phase's primary validator **is the `audit:headings` script itself** — it is both the deliverable (AUD-01) and the verification mechanism for HTAG-01..08 and KB-03.

### Test Framework
| Property | Value |
|----------|-------|
| Framework | No unit-test framework in repo (no jest/vitest); validation is **script-based audits** run via `tsx`, matching Phase 11 |
| Config file | none — scripts are standalone `tsx` entry points wired in `package.json` |
| Quick run command | `npm run audit:headings` (after a build) |
| Full suite command | `npm run build && npm run audit:headings` (build refreshes `.next` HTML, then audit) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | Exists? |
|--------|----------|-----------|-------------------|---------|
| AUD-01 | `audit:headings` exists + fails build on violation | script | `npm run audit:headings; echo $?` (expect 1 on seeded violation, 0 clean) | ❌ Wave 0 (rewrite script) |
| HTAG-01 | one question-form H1, no `<br>`/split-`<span>` | rendered | parse `index.html`: 1 `<h1>`, no element children, text ends `?` | ❌ Wave 0 |
| HTAG-02 | homepage Core-first + 5-step process + KB-link + Outer H2s | rendered+static | first `<h2>` after hero === §17 home Core string; required H2s present | ❌ Wave 0 |
| HTAG-03 | no pseudo-headings; strict levels; H1≠H2; no nav/footer/button/label H-tags | rendered | `closest('nav,footer,button,label')` empty; monotonic levels; H1≠any H2 | ❌ Wave 0 |
| HTAG-04 | service H1 + §4.2 tree | rendered+static | `roof-repair.html` H1 + Core H2 strings | ❌ Wave 0 |
| HTAG-05 | city H1 + §4.3 incl. Permits + Materials | rendered+static | `roofing-in-newark-nj.html` H1 + Permits/Materials H2 present | ❌ Wave 0 |
| HTAG-06 | combo H1 + §4.4 tree | rendered+static | `roof-repair-newark-nj.html` H1 + Core H2 | ❌ Wave 0 |
| HTAG-07 | Core-before-Outer; ContentAuthorityBlock out of Core band | rendered | first content H2 === Core; ContentAuthorityBlock heading not first | ❌ Wave 0 |
| HTAG-08 | first major H2 after hero = Core per §17 | rendered | per-template first-`<h2>` assertion | ❌ Wave 0 |
| KB-03 | 252 titles question-form, unique, slugs stable | static | iterate `articles`: ends `?`, Set-unique; slug regex unchanged | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run audit:headings` (static pass runs always; rendered pass runs if `.next` HTML is present — otherwise it reports "build required").
- **Per wave merge:** `npm run build && npm run audit:headings` — proves the real prerendered DOM passes across the representative sample set.
- **Phase gate:** full `npm run build && npm run audit:headings` green before `/gsd:verify-work`; this constitutes the validation per the §19 Phase 12 Verify list.

### Wave 0 Gaps
- [ ] `scripts/audit-headings.ts` — REWRITE to the hybrid build-failing audit (static + rendered passes); covers AUD-01 + HTAG-01..08 + KB-03.
- [ ] `src/data/heading-config.ts` — NEW central question-string module (lets static pass + templates share one source).
- [ ] `node-html-parser` install (`npm i -D node-html-parser`) — rendered-pass dependency.
- [ ] Representative sample-set list baked into the audit (home/service/city/combo + core/hub `.html` files).
- [ ] Optional: `"generate:articles"` package script for the title regen ergonomics.

## Security Domain

`security_enforcement` is not set in `.planning/config.json`; treated as enabled, but this phase has a **negligible security surface** — it rewrites heading text and adds a build-time audit script. No auth, no user input, no network, no crypto, no data persistence touched.

### Applicable ASVS Categories
| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | minimal | Heading strings are static literals/config; no user input. `node-html-parser` parses **trusted local build output**, not untrusted remote HTML |
| V6 Cryptography | no | — |

### Known Threat Patterns for {Next.js SSG heading refactor}
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Supply-chain (new `node-html-parser` dep) | Tampering | Pin version; verify provenance (8yr/7.18M dl/real repo/no postinstall — done); planner gates install behind checkpoint:human-verify |
| Audit parsing untrusted HTML | Tampering/DoS | N/A — parses only the repo's own `.next` build artifact, never remote/user content |

## Sources

### Primary (HIGH confidence)
- Codebase (direct read/grep): `scripts/audit-headings.ts`, `audit-redirects.ts`, `audit-sitemap.ts`, `generate-articles-ts.ts`, `src/app/page.tsx`, `src/app/[slug]/page.tsx`, all templates + heroes, `Header.tsx`, `Footer.tsx`, `slug-registry.ts`, `articles.ts`, `next.config.ts`, `package.json`, `city-content/urban-core.ts` — all VERIFIED this session
- `.next/server/app/*.html` prerendered output — VERIFIED on disk (index.html, roof-repair.html, roofing-in-newark-nj.html, combo + core + hub files; H1/H2/H3 counts; `<br/>`+`<span>` split; `<header>/<footer>/<nav>` present)
- npm registry (`npm view`, downloads API): `node-html-parser@7.1.0` provenance — VERIFIED
- `.planning/IMPLEMENTATION-PLAN.md` §17/§18/§19, `.planning/IMPLEMENTATION-BRIEF.md` §4.1–4.4, `.planning/REQUIREMENTS.md`, `12-CONTEXT.md` — CITED (locked spec)

### Secondary (MEDIUM confidence)
- npm-compare.com / ScrapeOps — `node-html-parser` vs `cheerio` tradeoffs (WebSearch, cross-checked against registry stats)

### Tertiary (LOW confidence)
- None relied upon.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — every tool except the parser already in repo; parser verified on registry
- Architecture (rendered + static passes): HIGH — prerendered HTML confirmed on disk; enumeration path confirmed; Phase 11 fail-pattern reusable
- Current heading reality: HIGH — every H1/section read directly from source + prerender
- Generator mechanics: HIGH — patterns, regen command, slug-independence, metaTitle cap all verified in source
- Pitfalls (252 vs 253, header nav H-tags, split H1): HIGH — measured directly

**Research date:** 2026-06-03
**Valid until:** 2026-07-03 (stable; re-verify the `.next` prerender path only if `next.config.ts` adds `output: 'export'`)
