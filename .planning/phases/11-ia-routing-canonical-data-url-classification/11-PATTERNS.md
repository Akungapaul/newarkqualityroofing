# Phase 11: IA, Routing, Canonical Data & URL Classification - Pattern Map

**Mapped:** 2026-06-01
**Files analyzed:** 21 (8 CREATE, 13 MODIFY)
**Analogs found:** 19 / 21 with a close in-repo analog (2 greenfield)

> **App-dir note:** The Next.js app directory is `src/app/`, NOT `app/`. CONTEXT/RESEARCH reference `app/...` paths; the real paths are `src/app/...`. All new route files below use the real `src/app/` prefix. The planner MUST use `src/app/` in plan actions.

> **Path alias:** `@/*` → `./src/*` (`tsconfig.json`). All in-`src` imports use the `@/` alias; scripts in `scripts/` import via relative `../src/...` (see `generate-articles-ts.ts`).

---

## File Classification

| New/Modified File (real path) | Role | Data Flow | Closest Analog | Match Quality |
|-------------------------------|------|-----------|----------------|---------------|
| **CREATE** `src/config/site-config.ts` | config | transform (consolidate) | `src/data/site-config.ts` | exact (same artifact, restructured) |
| **CREATE** `scripts/build-url-classification.ts` | utility (codegen) | file-I/O + batch + transform | `scripts/generate-articles-ts.ts` (codegen) + `scripts/validate-flat-urls.ts` (assert/exit) | role-match (two analogs) |
| **CREATE** `src/generated/url-classification.json` | generated artifact (data) | file-I/O (emitted) | none committed today | greenfield (emitted, not authored) |
| **CREATE** `src/generated/redirects.generated.mjs` | generated artifact (config) | file-I/O (emitted) | inline redirects in `next.config.ts` | partial (shape mirrors redirects()) |
| **CREATE** `src/data/url-classification.ts` | data (verdict API consumer) | CRUD (read) / request-response | `src/data/combo-content/index.ts` (Map-based O(1) getter API) | exact (same access pattern) |
| **CREATE** `src/app/roofing-knowledge-base/[[...slug]]/page.tsx` | route (optional-catch-all) | request-response | `src/app/[slug]/page.tsx` (dispatcher + generateStaticParams + generateMetadata) | role-match (catch-all vs single param) |
| **CREATE** `src/app/roofing-glossary/page.tsx` | route (static, no params) | request-response | `src/app/thank-you/page.tsx` (static route + `export const metadata`) | exact |
| **CREATE** 6 hub scaffold routes (`src/app/{residential-roofing,commercial-roofing,flat-roof-systems,roofing-materials,free-roofing-estimate,our-roofing-process}/page.tsx`) | route (scaffold) | request-response | `src/app/thank-you/page.tsx` (static + `robots:{index:false}`) + `CoreTemplate.tsx` fallback (placeholder to remove) | role-match |
| **CREATE** `scripts/audit-sitemap.ts` | utility (validator) | batch + assert | `scripts/validate-flat-urls.ts` | exact |
| **CREATE** `scripts/audit-redirects.ts` | utility (validator) | batch + assert | `scripts/validate-flat-urls.ts` | exact |
| **MODIFY** `next.config.ts` | config | request-response (server redirects) | itself (preserve existing redirects()) | self |
| **MODIFY** `src/app/sitemap.ts` | route (sitemap) | batch + transform | itself (`combos` case) | self |
| **MODIFY** `src/app/robots.ts` | route (robots) | request-response | itself (likely unchanged) | self |
| **MODIFY** `src/data/seo-priority.ts` | data | transform (filter ⊆ keep) | itself (`PRIORITY_COMBO_PAIRS`) | self |
| **MODIFY** `src/data/slug-registry.ts` | data (registry) | event-driven (module-load collision check) | itself (`buildRegistry()` collision loop) | self |
| **MODIFY** `src/lib/schemas.ts` | data (zod) | event-driven (module-load parse) | itself (`PageTypeSchema`, `SlugEntrySchema`) | self |
| **MODIFY** `src/data/articles.ts` | data (zod) | event-driven (module-load parse) | itself (`ArticleSchema` + `z.array().parse()`) | self |
| **MODIFY** `src/data/article-content/schema.ts` | data (zod) | event-driven (module-load parse) | itself (`ArticleContentSchema`) | self |
| **MODIFY** `src/lib/schema.ts` | utility (JSON-LD builder) | transform | itself (`buildAggregateRating()`) | self |
| **MODIFY** `src/data/core-pages.ts` | data (zod) | event-driven (module-load parse) | itself (`rawCorePages` slugs) | self |
| **MODIFY** `package.json` | config | n/a | itself (`scripts` block — `audit:*`/`validate:*` precedent) | self |

> `src/data/core-pages.ts` is implied by D-07 (rename core slugs `services→roofing-services`, `locations→service-areas`, `resources→roofing-knowledge-base`) — not in the prompt's seed list but derived from CONTEXT.

---

## Pattern Assignments

### CREATE `src/config/site-config.ts` (config, transform)

**Analog:** `src/data/site-config.ts` (the artifact being consolidated — D-01).

**Current shape to consolidate** (`src/data/site-config.ts:1-59`) — note the env-var phone read (MUST preserve) and the fake values D-01 forbids:
```typescript
export const siteConfig = {
  companyName: 'Newark Quality Roofing',
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '(973) 555-0123', // fake default — DROP
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? '+19735550123',          // fake default — DROP
  },
  address: { street: '123 Main Street', city: 'Newark', state: 'NJ', zip: '07102' }, // fake street — OMIT
  trustStats: [
    { label: 'Roofs Completed', value: '500+', numericValue: 500, ... },  // fake — gate behind rating/projectCount
    { label: 'Star Rating', value: '5.0', numericValue: 5, ... },         // fake — gate behind rating.enabled
  ],
} as const;
```

**Adaptation:**
- New canonical shape with the D-01 field set: `brandName`, `legalName`, `phone`, `formattedPhone`, `email`, `address.{streetAddress,locality,region,postalCode,country}`, `geo`, `openingHours`, `serviceArea`, `license.{state,type,number,display}`, `insuranceStatement`, `workersCompStatement`, `rating.{enabled,value,count}`, `foundingYear`, `projectCount`, `trustBadges`, `sameAs`, `primaryUrl`.
- Set `rating.enabled = false`.
- **PRESERVE the `process.env.NEXT_PUBLIC_PHONE_DISPLAY` / `NEXT_PUBLIC_PHONE_TEL` reads** (Runtime State Inventory) — do NOT regress to the fake `(973) 555-0123`.
- OMIT any value that is unknown rather than render a placeholder. `[CANONICAL VALUE REQUIRED: …]` may appear ONLY in a code comment, never in a string that renders.
- **Migration pitfall:** 9 files import `@/data/site-config` (`src/app/layout.tsx`, `src/app/page.tsx`, `src/lib/schema.ts`, `src/components/ui/PhoneNumber.tsx`, `src/components/sections/TrustBar.tsx`, `src/components/sections/CityMapNap.tsx`, `src/components/pages/PrivacyPolicyPage.tsx`, `src/components/pages/TermsOfServicePage.tsx`, `src/components/pages/ContactPage.tsx`). Phase 11 boundary (full enforcement is Phase 16): either keep `src/data/site-config.ts` as a **re-export shim** (`export { siteConfig } from '@/config/site-config'`) OR repoint these 9 imports. Re-export shim is the lower-risk Phase-11 move.

---

### CREATE `scripts/build-url-classification.ts` (utility/codegen, file-I/O + batch + transform)

**Primary analog (codegen + emit):** `scripts/generate-articles-ts.ts`
**Secondary analog (parse + count-assert + `process.exit(1)`):** `scripts/validate-flat-urls.ts`

**Codegen/emit pattern** (`scripts/generate-articles-ts.ts:5-6, 290-336`) — relative `../src` imports, build a `lines[]` array, emit:
```typescript
import { services } from '../src/data/services';      // scripts use RELATIVE imports (not @/)
import { comparisons } from '../src/data/comparisons';
// ...
const lines: string[] = [];
lines.push(`import { z } from 'zod';`);
// ... assemble file body ...
console.log(lines.join('\n'));  // generate-articles emits to stdout; build-url MUST fs.writeFileSync instead
```

**Validate-uniqueness + fail-hard pattern** (`scripts/generate-articles-ts.ts:254-286`):
```typescript
const errors: string[] = [];
for (const a of allArticles) {
  if (slugSet.has(a.slug)) errors.push(`Duplicate slug: ${a.slug}`);
  slugSet.add(a.slug);
}
if (errors.length > 0) {
  console.error('VALIDATION ERRORS:');
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}
```

**Assert + exit pattern** (`scripts/validate-flat-urls.ts:33-48`):
```typescript
console.log(`Checked ${slugs.length} slugs. ${violations.length} violations found.`);
if (violations.length > 0) {
  for (const slug of violations) console.log(`  /${slug}`);
  process.exit(1);
}
process.exit(0);
```

**Adaptation:**
- `import { readFileSync, writeFileSync } from 'node:fs'` — read `URL-Classification.csv` (repo root), emit `src/generated/url-classification.json` + `src/generated/redirects.generated.mjs` (use `writeFileSync`, NOT stdout like generate-articles).
- CSV is quote-aware: header `URL,Sitemap,Page Type,Tier,Service,City,Verdict,Redirect Target,Reason` — col 7 `Verdict`, col 8 `Redirect Target` precede the quoted `Reason` (col 9). A left-to-right quote-respecting parser stopping after col 8 is sufficient (RESEARCH Pitfall 3).
- Assert exact counts (RESEARCH Code Examples / D-03): `{ keep: 255, noindex: 942, comboRedirect: 168, legacyRedirect: 8 }` → `process.exit(1)` on mismatch (model on the errors[]→exit(1) pattern above).
- Chain check: every redirect target (stripped of leading `/`) must be in the keep set, else `process.exit(1)`.
- Verdict values in CSV: `KEEP-INDEX`, `NOINDEX`, `CONSOLIDATE` (with `Redirect Target`). Map these to the verdict buckets.

---

### CREATE `src/generated/url-classification.json` (generated data) + `src/generated/redirects.generated.mjs` (generated config)

**Analog:** none committed today — these are **emitted** by the generator above, not hand-authored. `src/generated/` does not exist yet (greenfield directory).

**`redirects.generated.mjs` shape** mirrors the redirect objects already in `next.config.ts:6-18`:
```javascript
// src/generated/redirects.generated.mjs  (emitted — do not edit)
export default [
  { source: '/full-roof-tear-off', destination: '/roof-replacement', permanent: true },
  // ...175 more (168 combo + 8 legacy). CSV "Redirect Target" is already root-relative (e.g. /roof-replacement).
];
```
> The 8 legacy redirects are CSV non-combo `CONSOLIDATE` rows → all target `/roof-replacement` (verified: `full-roof-tear-off`, `roof-overlay-installation`, `re-roofing`, `insurance-roof-replacement`, `storm-damage-roof-replacement`, `aging-roof-replacement`, `roof-replacement-after-leak`, `fire-damage-roof-replacement`).

**`url-classification.json` shape** (Claude's discretion — RESEARCH recommends):
```json
{ "keep": ["..."], "noindex": ["..."], "redirects": { "old-slug": "/target-slug" } }
```

**Artifact strategy** (RESEARCH Runtime State Inventory + Pitfall 1): COMMIT the generated files AND add a `prebuild` script, because `next.config.ts` statically imports the `.mjs` at config-load time — it must exist before `next build` runs.

---

### CREATE `src/data/url-classification.ts` (data, verdict-API consumer)

**Analog:** `src/data/combo-content/index.ts` — same Map-based O(1) lookup + getter-API pattern.

**Map + getter pattern** (`src/data/combo-content/index.ts:54-68`):
```typescript
const contentMap = new Map<string, ComboContent>(
  allContent.map((c) => [`${c.serviceId}:${c.cityId}`, c])
);

export function getComboContent(serviceId: string, cityId: string): ComboContent {
  const content = contentMap.get(`${serviceId}:${cityId}`);
  if (!content) throw new Error(`Missing combo content for ...`);
  return content;
}
```

**Adaptation** — import the generated JSON, build Sets/Map, expose the EXACT verdict API (D-02; names are locked):
```typescript
import classification from '@/generated/url-classification.json';
const keepSet = new Set(classification.keep);
const noindexSet = new Set(classification.noindex);
const redirectMap = new Map(Object.entries(classification.redirects));

export function getComboVerdict(slug: string): 'keep'|'noindex'|'redirect'|'unknown' {
  if (redirectMap.has(slug)) return 'redirect';
  if (keepSet.has(slug)) return 'keep';
  if (noindexSet.has(slug)) return 'noindex';
  return 'unknown';
}
export const isKeep = (s: string) => keepSet.has(s);
export const isNoindex = (s: string) => noindexSet.has(s);
export const isRedirect = (s: string) => redirectMap.has(s);
export const getClassification = (s: string) => getComboVerdict(s);
export function getComboRedirects() { /* [...redirectMap].map(...) */ }
```
> Required exported names (verbatim): `getComboVerdict`, `getComboRedirects`, `getClassification`, `isKeep`, `isNoindex`, `isRedirect`.

---

### CREATE `src/app/roofing-knowledge-base/[[...slug]]/page.tsx` (route, request-response)

**Analog:** `src/app/[slug]/page.tsx` — the dispatcher pattern (generateStaticParams + `dynamicParams=false` + awaited params + switch dispatch + generateMetadata).

**`generateStaticParams` + `dynamicParams` pattern** (`src/app/[slug]/page.tsx:26-31`):
```typescript
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;  // unknown → 404
```

**Awaited params (Next 15+/16)** (`src/app/[slug]/page.tsx:60-66, 174-180`):
```typescript
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // ...
}
export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
```

**Adaptation:**
- Optional-catch-all: `params` is `Promise<{ slug?: string[] }>`. Branch on `slug?.length`: `0/undefined` = KB hub, `1` = cluster hub, `2` = nested article (`/{cluster}/{slug}`).
- `generateStaticParams` enumerates `{ slug: undefined }` (hub) + 6 `{ slug: [cluster] }` + 44 `{ slug: [cluster, articleSlug] }` = 51 paths (RESEARCH Pattern 1; A1: executor verifies `undefined` vs `[]` for the empty index in Next 16.1.6 during dev).
- `dynamicParams = false`.
- `generateMetadata`: scaffolds emit `robots: { index: false, follow: true }` until Phase 13 content lands (D-10/D-12). Mirror the noindex pattern at `src/app/[slug]/page.tsx:162-164` (`base.robots = { index: false, follow: false }`) — but KB scaffolds use `follow: true`.
- **Keep KB nested slugs OUT of the flat `slug-registry.ts`** (RESEARCH Pitfall 4) so `validate-flat-urls.ts` doesn't fail on the `/`-containing paths; enumerate them in the route's own data.

---

### CREATE `src/app/roofing-glossary/page.tsx` (route, static no-params)

**Analog:** `src/app/thank-you/page.tsx` — a static route with `export const metadata` and no params.

**Static-route metadata pattern** (`src/app/thank-you/page.tsx:1-9`):
```typescript
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Thank You | Newark Quality Roofing',
  description: '...',
  robots: { index: false, follow: false },
};
export default function ThankYouPage() { return (<div>...</div>); }
```

**Adaptation:**
- Dedicated route at `src/app/roofing-glossary/page.tsx` (NOT via flat `[slug]` — D-11). Distinct path prefix → collision-free vs `[slug]`.
- Resolves at HTTP 200 with scaffold content (25 terms + DefinedTermSet schema are Phase 14).
- If incomplete in Phase 11, emit `robots: { index: false }` like the analog (use `follow: true` per D-12 scaffold rule). If it ships as an index that should be indexed, set canonical `/roofing-glossary` and OMIT robots.

---

### CREATE 6 hub scaffold routes (route, scaffold)

`src/app/residential-roofing/page.tsx`, `src/app/commercial-roofing/page.tsx`, `src/app/flat-roof-systems/page.tsx`, `src/app/roofing-materials/page.tsx`, `src/app/free-roofing-estimate/page.tsx`, `src/app/our-roofing-process/page.tsx`

**Analog (route shell + noindex):** `src/app/thank-you/page.tsx` (static route, `export const metadata` with `robots`).
**Analog (placeholder to REMOVE):** `src/components/templates/CoreTemplate.tsx:74-91` — the "Full page content coming soon" block D-12 says to delete:
```tsx
<div className="mt-12 rounded-sm border-2 border-dashed border-border p-8 text-center">
  <p className="font-body text-text-secondary">
    Full page content coming soon
  </p>
</div>
```

**Adaptation:**
- Each resolves at HTTP 200 (D-12). RESEARCH recommends dedicated route files (keeps them off the flat registry, lets each set its own `robots`). Either dedicated routes OR new `core-pages.ts` entries work; dedicated routes are cleaner for the noindex toggle.
- Incomplete scaffolds emit `robots: { index: false, follow: true }` (D-12) — NO "coming soon" placeholder, NO public placeholder trust values.
- A shared `<Scaffold>` component vs per-page is Claude's discretion (CONTEXT) as long as each emits `robots:{index:false}` and exposes no placeholder trust values.

---

### CREATE `scripts/audit-sitemap.ts` + `scripts/audit-redirects.ts` (utility/validator, batch + assert)

**Analog:** `scripts/validate-flat-urls.ts` — the canonical `tsx` build-assert + `process.exit(1)` pattern. (Run via `tsx`, imported through `@/` alias — see `validate-flat-urls.ts:10` `import { getAllSlugs } from '@/data/slug-registry';`.)

**Assert + exit pattern** (`scripts/validate-flat-urls.ts:14-49`):
```typescript
function main() {
  const slugs = getAllSlugs();
  const violations: string[] = [];
  for (const slug of slugs) { if (slug.includes('/')) violations.push(slug); }
  if (violations.length > 0) { /* print */ process.exit(1); }
  process.exit(0);
}
main();
```

**Adaptation:**
- `audit-redirects.ts`: assert 168+8 sources unique, every target ⊆ keep set (no chains), flat-roof + www redirects present in `next.config.ts`. Import the verdict API (`@/data/url-classification`) for the keep set.
- `audit-sitemap.ts`: assert sitemap = 255 keep + core/KB/glossary, excludes 942 noindex + 168 redirected + scaffold pages. Import `@/app/sitemap` segments OR re-derive from `isKeep()`.
- Wire both into `package.json` as `audit:redirects` / `audit:sitemap` (see package.json modification below).

---

### MODIFY `next.config.ts` (config) — PRESERVE existing redirects

**Current redirects to PRESERVE** (`next.config.ts:3-19`):
```typescript
const nextConfig: NextConfig = {
  trailingSlash: false,                         // D-09 — RETAIN
  async redirects() {
    return [
      { source: '/flat-roof-installation-newark-nj', destination: '/flat-roof-installation-repair-newark-nj', permanent: true }, // PRESERVE
      { source: '/:path*', has: [{ type: 'host', value: 'www.newarkqualityroofing.com' }],
        destination: 'https://newarkqualityroofing.com/:path*', permanent: true },  // PRESERVE (www→non-www)
    ];
  },
};
```

**Adaptation** (D-05, D-07):
```typescript
import generatedRedirects from './src/generated/redirects.generated.mjs';  // static import at config-load
// inside redirects():
return [
  ...generatedRedirects,                                                   // 168 combo + 8 legacy
  { source: '/flat-roof-installation-newark-nj', destination: '/flat-roof-installation-repair-newark-nj', permanent: true }, // KEEP
  { source: '/:path*', has: [{ type: 'host', value: 'www...' }], destination: '...', permanent: true },                       // KEEP
  { source: '/services',  destination: '/roofing-services',       permanent: true },  // D-07 hub migration
  { source: '/locations', destination: '/service-areas',          permanent: true },  // D-07
  { source: '/resources', destination: '/roofing-knowledge-base', permanent: true },  // D-07
];
```
> Pitfall 1: the static import requires the `.mjs` to EXIST before `next build` → `prebuild` script + committed artifact.

---

### MODIFY `src/app/sitemap.ts` (route/sitemap) — filter combos by keep

**Current `combos` case** (`src/app/sitemap.ts:64-74`) — emits ALL 1,365 combos, no verdict filter:
```typescript
case 'combos':
  return combos.map((combo) => { /* ... url: `${BASE_URL}/${combo.slug}` ... */ });
```
**Current exclude pattern** (`src/app/sitemap.ts:27-28, 43-45`):
```typescript
const EXCLUDED_CORE_PAGES = new Set(['thank-you', 'privacy-policy']);
...corePages.filter((page) => !EXCLUDED_CORE_PAGES.has(page.id)).map(...)
```

**Adaptation** (D-06):
- `combos` case: `combos.filter((c) => isKeep(c.slug)).map(...)` — 255 keep only; 942 noindex + 168 redirect excluded. `import { isKeep } from '@/data/url-classification';`
- Add new sitemap segments for KB hub/cluster pages + glossary (exclude scaffolds). Extend `SITEMAP_IDS` (`src/app/sitemap.ts:14`) with e.g. `'knowledge-base'` and add a case.

---

### MODIFY `src/app/robots.ts` (route/robots)

**Current** (`src/app/robots.ts:4-15`): single allow-all rule, disallow `['/api/', '/thank-you', '/_next/']`, sitemap pointer. **Likely UNCHANGED** in Phase 11 (per RESEARCH — noindex is per-page via `generateMetadata`, not robots.txt). Listed for completeness; only touch if scaffolds need a disallow (not required).

---

### MODIFY `src/data/seo-priority.ts` (data) — reconcile to keep set

**Current** (`src/data/seo-priority.ts:33-45`):
```typescript
export const PRIORITY_COMBO_PAIRS = new Set([
  'roof-repair:newark',
  'roof-leak-repair:newark',
  // ...11 pairs total, keyed `${serviceId}:${cityId}`
]);
```

**Adaptation** (D-08): ensure `PRIORITY_COMBO_PAIRS ⊆ the 255 KEEP set`. The pairs are keyed `serviceId:cityId`; the keep set is keyed by combo SLUG — the reconciliation must map pair→slug (or vice versa) before the `⊆` check. Drop/flag any pair whose combo slug is NOINDEX/CONSOLIDATE. A build-assert (in the generator or a seo-priority load check) compares against the generated keep set.

---

### MODIFY `src/data/slug-registry.ts` (data/registry) — extend page types + collision check

**Collision-check pattern to EXTEND** (`src/data/slug-registry.ts:12-24, 81-86`):
```typescript
function register(entry: SlugEntry) {
  if (registry.has(entry.slug)) {
    collisions.push(`Slug "${entry.slug}" collision: ${existing.type} vs ${entry.type}`);
  }
  registry.set(entry.slug, entry);
}
// ...
if (collisions.length > 0) throw new Error(`Slug collisions detected:\n${collisions.join('\n')}`);
```
**Per-type registration loop** (`src/data/slug-registry.ts:26-79`): one `for` loop per page type pushing `{ slug, type, <id> }`.

**Adaptation** (D-13):
- Register new page types `kb-hub`, `kb-cluster-hub`, `kb-article`, `glossary`, and the hub type, reusing the existing `register()` collision loop.
- **Stale comments to fix** (`slug-registry.ts:44` "1,323", `:63` "252", `:72` "7"): real = 1,365 combos, 252 articles, 9 core pages (RESEARCH Anti-Pattern).
- **Pitfall 4:** if KB entries with `/`-containing slugs are added here, exempt them in `validate-flat-urls.ts`; OR keep KB in a parallel enumeration (RESEARCH recommendation A5). Planner must decide explicitly.

---

### MODIFY `src/lib/schemas.ts` (data/zod) — extend PageTypeSchema + SlugEntrySchema

**Current** (`src/lib/schemas.ts:85-102`):
```typescript
export const PageTypeSchema = z.enum(['service','city','combo','comparison','article','core']);
export const SlugEntrySchema = z.object({
  slug: z.string(),
  type: PageTypeSchema,
  serviceId: z.string().optional(),
  // ...articleId, corePageId optional
});
```

**Adaptation** (D-13): add `'kb-hub'`, `'kb-cluster-hub'`, `'kb-article'`, `'glossary'`, and the hub type to the `PageTypeSchema` enum; add any new optional id fields to `SlugEntrySchema` (e.g. `kbArticleId`, `clusterId`, `glossaryId`). Types auto-flow via `src/lib/types.ts:25-26` (`PageType`, `SlugEntry` are `z.infer`). `PageTypeSchema`/`SlugEntrySchema` are also re-exported from `types.ts:32-44` — no extra change needed there.

---

### MODIFY `src/data/articles.ts` (data/zod) — required `cluster` enum + classify all

**Current `ArticleSchema`** (`src/data/articles.ts:5-14`) and module-load parse (`articles.ts:~2549` per RESEARCH):
```typescript
export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  parentId: z.string(),
  parentType: z.enum(['service', 'comparison', 'core']),
  position: z.number().min(1).max(3),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});
// export const articles: Article[] = z.array(ArticleSchema).parse(rawArticles);  // throws on shape violation
```

**Adaptation** (D-14, KB-01):
- Add `cluster: z.enum(['roof-problems','roof-components','roofing-materials','roofing-process','roofing-costs','local-roofing-knowledge'])` as a **REQUIRED** field — the existing `z.array(ArticleSchema).parse(rawArticles)` then throws at build if any article omits a valid cluster (no separate validator needed).
- Add `cluster` to all `rawArticles` (252 entries — RESEARCH Pitfall 2: file + CSV both have **252**, NOT 253). Validator binds to registry length; do NOT hardcode 252 or 253. Flag the 252-vs-253 discrepancy in the plan (CONTEXT D-14 note).
- **Codegen caveat:** `scripts/generate-articles-ts.ts` is the generator that EMITS `articles.ts`. If the cluster field is added by editing `articles.ts` directly, note that re-running the generator would overwrite it — either also update the generator (`generate-articles-ts.ts:295-304` ArticleSchema block + per-article emit at `:316-327`) OR document that the generator is no longer the source of truth.

---

### MODIFY `src/data/article-content/schema.ts` (data/zod) — ≥10 sections + faqs[]

**Current `ArticleContentSchema`** (`src/data/article-content/schema.ts:7-21`):
```typescript
export const ArticleContentSchema = z.object({
  articleId: z.string(),
  parentId: z.string(),
  parentType: z.enum(['service', 'comparison', 'core']),
  position: z.number().min(1).max(3),
  intro: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    body: z.array(z.string()).min(1).max(4),
  })).min(2).max(4),          // ← change to .min(10)
  conclusion: z.string(),
  // ...no faqs
});
```

**Adaptation** (D-15, KB-02): support **≥10 sections** (`.min(10)`, raise/remove `.max`) and add a `faqs[]` array. **faqs shape precedent already exists** — copy from `ServiceContentSchema.faqs` (`src/lib/schemas.ts:137-140`):
```typescript
faqs: z.array(z.object({
  question: z.string(),
  answer: z.string(),
})).min(4).max(10),
```
> Discretion: extend `ArticleContentSchema` OR add a new KB-specific content schema (CONTEXT). RESEARCH notes a new KB schema avoids over-constraining the 252 existing short articles (currently `.min(2).max(4)` sections). Planner decides; a parallel `KbArticleContentSchema` is the lower-risk choice so existing article content keeps validating.

---

### MODIFY `src/lib/schema.ts` (utility/JSON-LD builder) — gate buildAggregateRating

**Current fake-rating builder** (`src/lib/schema.ts:50-58`) and its 2 call sites (`:84` RoofingContractor, `:131` LocalBusiness):
```typescript
function buildAggregateRating(): Record<string, unknown> {
  return { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '500', bestRating: '5', worstRating: '1' };
}
// called at:
//   buildRoofingContractorSchema():  aggregateRating: buildAggregateRating(),   (line 84)
//   buildLocalBusinessSchema():      aggregateRating: buildAggregateRating(),   (line 131)
```

**Adaptation** (D-01 RESOLVED 2026-06-01; RESEARCH Pitfall 6): gate behind `rating.enabled` from the new `src/config/site-config.ts`. Make `buildAggregateRating()` return `null`/`undefined` when `rating.enabled === false`, and **conditionally spread it into the schema** so the `aggregateRating` key is OMITTED entirely (not set to null) at both call sites. With `rating.enabled = false`, the known-false `5.0`/`500` must NOT appear in HTML or JSON-LD anywhere. (Full sitewide dedup/enforcement is Phase 16.)

---

### MODIFY `src/data/core-pages.ts` (data/zod) — rename hub core slugs (D-07)

**Current slugs to rename** (`src/data/core-pages.ts:23-35, 65-70`):
```typescript
{ id: 'services',  ... slug: 'services',  ... },   // → slug: 'roofing-services'
{ id: 'locations', ... slug: 'locations', ... },   // → slug: 'service-areas'
{ id: 'resources', ... slug: 'resources', ... },   // → 301 to /roofing-knowledge-base (KB hub) — see pitfall 5
```

**Adaptation** (D-07, RESEARCH Pitfall 5):
- Rename `services→roofing-services` and `locations→service-areas` core slugs so the canonical page lives at the new slug; the OLD path 301s via `next.config.ts`.
- `/resources` redirects to `/roofing-knowledge-base` (the catch-all KB hub index, NOT a core page) — confirm `resources` core entry handling (it points at the KB route, not a renamed core page). Verify the renamed slugs don't collide with the 6 new hub scaffolds or the KB route prefix via `buildRegistry()`.

---

### MODIFY `package.json` (config) — add prebuild + audit scripts

**Current scripts block** (`package.json:5-23`) — `audit:*`/`validate:*` precedent all run via `tsx`:
```json
"audit:headings": "tsx scripts/audit-headings.ts",
"validate:urls": "tsx scripts/validate-flat-urls.ts",
"seo:validate": "tsx scripts/validate-flat-urls.ts && tsx scripts/validate-click-depth.ts && tsx scripts/validate-topical-map.ts",
```

**Adaptation:**
```json
"prebuild": "tsx scripts/build-url-classification.ts",
"audit:sitemap": "tsx scripts/audit-sitemap.ts",
"audit:redirects": "tsx scripts/audit-redirects.ts",
```
> `prebuild` runs automatically before `build` (npm lifecycle) so the generated artifacts are fresh before `next build` loads `next.config.ts` (Pitfall 1).

---

## Shared Patterns

### Module-load zod validation (build-time fail-hard)
**Source:** every `src/data/*` module — `src/data/core-pages.ts:75` (`z.array(CorePageSchema).parse(rawCorePages)`), `src/data/articles.ts` (`z.array(ArticleSchema).parse(rawArticles)`).
**Apply to:** `articles.ts` (cluster enum), `article-content/schema.ts` (sections/faqs), `slug-registry.ts` (new page types via `SlugEntrySchema`), generated-JSON shape validation.
```typescript
export const corePages: CorePage[] = z.array(CorePageSchema).parse(rawCorePages); // throws at build on shape violation
```

### tsx build-assert validator (`process.exit(1)`)
**Source:** `scripts/validate-flat-urls.ts:33-48`, `scripts/generate-articles-ts.ts:282-286`.
**Apply to:** `build-url-classification.ts` (count + chain assert), `audit-sitemap.ts`, `audit-redirects.ts`. No test framework exists — this IS the test pattern.
```typescript
if (errors.length > 0) { errors.forEach(e => console.error('  -', e)); process.exit(1); }
```

### Awaited route params (Next 15+/16)
**Source:** `src/app/[slug]/page.tsx:60-66, 174-180`.
**Apply to:** the KB catch-all route (`params: Promise<{ slug?: string[] }>`). All new routes must `await params`.

### Per-page noindex via generateMetadata / metadata.robots
**Source:** `src/app/[slug]/page.tsx:162-164` (`base.robots = { index: false, follow: false }`), `src/app/thank-you/page.tsx:8` (`robots: { index: false, follow: false }`).
**Apply to:** 942 noindex combos (`{ index: false, follow: true }`), KB/glossary scaffolds, 6 hub scaffolds (all `follow: true` per D-12).

### Canonical via alternates.canonical
**Source:** `src/app/[slug]/page.tsx:78, 92, 116` (`alternates: { canonical: \`/${slug}\` }`).
**Apply to:** keep combos (self-canonical D-04); noindex combos use self/no canonical (NEVER canonicalize to an unrelated page — RESEARCH anti-pattern).

### `@/` alias (src) vs relative `../src` (scripts)
**Source:** `src/data/*` and `src/app/*` use `import ... from '@/...'`; `scripts/*` use `import ... from '../src/...'` (`generate-articles-ts.ts:5`) — EXCEPT `validate-flat-urls.ts:10` which uses `@/` (tsx resolves the alias). New scripts may use `@/` (tsx) for in-`src` imports; node builtins use `node:fs`/`node:path`.

---

## No Analog Found (greenfield — planner flags)

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `src/generated/url-classification.json` | generated data | file-I/O (emitted) | No committed generated artifact exists; `src/generated/` is a new directory. It is EMITTED by `build-url-classification.ts`, not hand-authored. Shape is Claude's discretion. |
| `src/generated/redirects.generated.mjs` | generated config | file-I/O (emitted) | Same — net-new emitted artifact. Object shape partially mirrors the inline redirects in `next.config.ts:6-18`, but no `.mjs` redirect file exists today. |

> Both are outputs of the generator, so the planner should treat them as "verify they emit correctly" rather than "author by hand." The generator script and its CSV input ARE the source of truth.

---

## Metadata

**Analog search scope:** `src/app/`, `src/data/`, `src/data/*-content/`, `src/lib/`, `src/components/templates/`, `scripts/`, repo root (`next.config.ts`, `package.json`, `tsconfig.json`, `URL-Classification.csv`).
**Files scanned:** 18 read in full/part + 2 grep sweeps (site-config import surface, CSV structure).
**Key correction surfaced:** app dir is `src/app/` (not `app/`); 252 articles (not 253); 1,365 combos (not 1,323) — stale registry comments.
**Pattern extraction date:** 2026-06-01
