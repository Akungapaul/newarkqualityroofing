---
phase: 11-ia-routing-canonical-data-url-classification
reviewed: 2026-06-03T00:00:00Z
depth: standard
files_reviewed: 28
files_reviewed_list:
  - next.config.ts
  - package.json
  - scripts/audit-redirects.ts
  - scripts/audit-sitemap.ts
  - scripts/build-url-classification.ts
  - scripts/generate-articles-ts.ts
  - scripts/validate-flat-urls.ts
  - src/app/[slug]/page.tsx
  - src/app/commercial-roofing/page.tsx
  - src/app/flat-roof-systems/page.tsx
  - src/app/free-roofing-estimate/page.tsx
  - src/app/our-roofing-process/page.tsx
  - src/app/residential-roofing/page.tsx
  - src/app/roofing-glossary/page.tsx
  - src/app/roofing-knowledge-base/[[...slug]]/page.tsx
  - src/app/roofing-materials/page.tsx
  - src/app/sitemap-index.xml/route.ts
  - src/app/sitemap.ts
  - src/components/sections/TrustBar.tsx
  - src/components/templates/HubScaffold.tsx
  - src/config/site-config.ts
  - src/data/article-content/kb-schema.ts
  - src/data/articles.ts
  - src/data/core-pages.ts
  - src/data/seo-priority.ts
  - src/data/site-config.ts
  - src/data/slug-registry.ts
  - src/data/url-classification.ts
  - src/lib/schema.ts
  - src/lib/schemas.ts
findings:
  critical: 1
  warning: 7
  info: 5
  total: 13
status: issues_found
---

# Phase 11: Code Review Report

**Reviewed:** 2026-06-03
**Depth:** standard
**Files Reviewed:** 28
**Status:** issues_found

## Summary

This is a large SEO information-architecture phase: a canonical site-config with a gated fake-rating, a CSV→generated indexation pipeline (255 keep / 942 noindex / 168+8 redirect), a verdict API, routing wired to that API, data-shape extensions, and new scaffold routes (KB optional-catch-all, glossary, 6 hubs) plus two build-failing audit scripts.

The high-risk areas the prompt flagged are mostly well-handled: I verified the generated artifacts produce **exactly** the locked counts (keep=255, noindex=942, comboRedirect=168, legacy=8, 176 total), every redirect destination is root-relative, no redirect target is itself a redirect source (no chains), all 8 legacy targets resolve to the `/roof-replacement` service hub, combos are self-canonical (no noindex combo canonicalizing to an unrelated page), the fake 5.0/500+ rating is correctly gated out of both HTML and JSON-LD, and the quote-aware CSV parser handles the actual data (0 lines with odd quote counts, 0 leading-space-quote fields).

However, there is **one BLOCKER-class route-collision/dead-code defect**: the flat `[slug]` dispatcher's `generateStaticParams()` emits the 7 slugs that already own dedicated static routes (the glossary + 6 hubs), and the dispatcher has no `case` for the `hub`/`glossary` registry types — so those slugs are simultaneously claimed by two routes and would `notFound()` if the dynamic route ever resolved them. There are also several correctness and maintainability warnings around audit-script coverage gaps, the CSV parser's mid-field-quote handling, the schema/config duplication left behind, and a still-fabricated trust signal in the legacy shim.

## Critical Issues

### CR-01: `[slug]` dispatcher static-params collide with the 7 dedicated routes AND have no dispatcher case (latent 404 footgun)

**File:** `src/app/[slug]/page.tsx:27-34` and `src/app/[slug]/page.tsx:197-231`
**Issue:** `getAllSlugs()` registers the glossary (`roofing-glossary`, type `glossary`) and the 6 hubs (`residential-roofing`, `commercial-roofing`, `flat-roof-systems`, `roofing-materials`, `free-roofing-estimate`, `our-roofing-process`, type `hub`) — see `src/data/slug-registry.ts:82-106`. `generateStaticParams()` filters only redirects, so it emits all 7 of these as `[slug]` params (verified at runtime: the 7 collide exactly with the dedicated `src/app/<slug>/page.tsx` routes). Two problems compound:

1. **Dual ownership / wasted prerender.** Each of those 7 paths is owned by BOTH a dedicated static route and the dynamic `[slug]` route. Next.js resolves the static segment first at request time, so the dedicated hub/glossary route wins and the page renders correctly *today* — but the dynamic route still generates a redundant param for the same path, and the two route definitions silently shadow each other. This is exactly the kind of ambiguity that breaks when a future refactor deletes a dedicated route.
2. **The dispatcher cannot render these types.** The `switch (pageData.type)` in the page body and in `generateMetadata` has cases only for `service | city | combo | comparison | article | core`. The `hub` and `glossary` registry entries fall through to `default: notFound()` / `return {}`. So if the dedicated static route is ever removed (e.g. the planned Phase-16 consolidation) or the resolution order changes, every one of these 7 indexed-IA paths would hard-404 with no metadata, even though the slug IS registered. The registry is asserting "this slug is a valid page" while the only renderer for the dynamic route says "404."

Because the slugs are registered as first-class pages but the dispatcher that consumes the registry cannot serve them, the registry and the routing layer are out of sync — a correctness defect that ships a latent 404 trap and pollutes the prerender manifest.

**Fix:** Exclude the dedicated-route types from the dynamic dispatcher's param generation so the registry stays the source of truth without double-claiming paths:

```ts
// src/app/[slug]/page.tsx
const DEDICATED_ROUTE_TYPES = new Set(['hub', 'glossary']); // own static routes

export async function generateStaticParams() {
  return getAllSlugs()
    .filter((slug) => {
      if (isRedirect(slug)) return false;
      const entry = getPageDataBySlug(slug);
      return entry !== undefined && !DEDICATED_ROUTE_TYPES.has(entry.type);
    })
    .map((slug) => ({ slug }));
}
```

This keeps the hubs/glossary registered (so `getAllSlugs`/`validate-flat-urls` still see them) while ensuring the `[slug]` route never generates a param for a path another route owns, eliminating the dual ownership and the dead `notFound()` fall-through path.

## Warnings

### WR-01: CSV parser mis-handles a quote that appears mid-field outside an opening quote

**File:** `scripts/build-url-classification.ts:58-86`
**Issue:** `parseCsvLine` only enters quoted mode when a `"` is the *first* character of a field; but the `else if (ch === '"')` branch fires on ANY unquoted `"`, even mid-field. A field value like `15" nails` or `Reason text with a " stray quote` would flip `inQuotes` and silently swallow the rest of the line / corrupt subsequent column indices, shifting `Verdict`/`Redirect Target` and producing wrong (or chain-unsafe) redirects with no error. The current CSV happens not to contain such a field (verified: 0 lines with odd quote counts), so this is latent — but the parser is the trust boundary for the entire 301/noindex set, and the header check (lines 103-106) only validates the FIRST row's column positions, not every row's column count.

**Fix:** Only treat a `"` as a quote delimiter at a field boundary, and assert every parsed row has the expected column count:

```ts
} else if (ch === '"' && cur === '') {
  inQuotes = true;       // opening quote only valid at field start
} else if (ch === ',') {
  fields.push(cur); cur = '';
} else {
  cur += ch;
}
```
And in the row loop: `if (row.length < 8) { errors.push(\`Malformed row ${i+1}: ${row.length} cols\`); continue; }`

### WR-02: `audit-redirects.ts` legacy-redirect chain guard checks the wrong direction

**File:** `scripts/audit-redirects.ts:91-94`
**Issue:** The legacy-redirect "no chains" guard is `if (sourceCounts.has(\`/${targetSlug}\`))`. `sourceCounts` is keyed by the FULL generated `source` strings (which are root-relative, e.g. `/aging-roof-replacement`), so this only catches the case where a legacy *target* (e.g. `/roof-replacement`) is itself a *generated* redirect source. It does NOT catch a chain where the target is a source of a *manual* redirect declared inline in `next.config.ts` (the flat-roof redirect, the `/services`→`/roofing-services` hub migrations, or the www→non-www host rule). A legacy target pointing at `/services` or `/flat-roof-installation-newark-nj` would pass this audit while producing a real 301→301 chain. The combo guard (line 73, `isRedirect(targetSlug)`) has the same blind spot for the manual config redirects.

**Fix:** Build the chain set from BOTH the generated sources AND the manual redirect sources parsed out of `next.config.ts` (the script already reads the file at line 98), then check membership against that union.

### WR-03: `audit-redirects.ts` legacy bucketing is fragile — silently miscounts if a combo and legacy redirect ever share a source

**File:** `scripts/audit-redirects.ts:79-83`
**Issue:** `legacy` is derived as "every generated redirect whose source is NOT in `comboSources`." This double-counts/mislabels if the generator ever emits a source that is both (it can't today, but the generator's own uniqueness is only checked separately). More importantly, if `getComboRedirects()` (the verdict-API view) and the generated `.mjs` (the next.config view) ever drift — e.g. a combo redirect present in one but not the other — `legacy.length` would silently absorb the difference and the `EXPECT.legacy = 8` assertion could pass for the wrong reason. The audit derives "legacy" by subtraction rather than by an independent definition (e.g. "non-combo `CONSOLIDATE` rows"), so it cannot detect a combo/legacy mixup.

**Fix:** Define legacy independently (sources whose slug is NOT a combo verdict at all, i.e. `getComboVerdict(slug) === 'unknown'`) and cross-check `comboRedirects` from the API against the combo subset of the generated `.mjs` for exact set equality, not just count equality.

### WR-04: `audit-sitemap.ts` only spot-checks excluded combos and does not assert the total sitemap size

**File:** `scripts/audit-sitemap.ts:97-134`
**Issue:** The script asserts that every noindex/redirect combo URL is ABSENT and every keep/core/KB URL is PRESENT, but it never asserts the sitemap's total cardinality. A regression that *adds* an unexpected URL (e.g. a stray hub scaffold via a non-KB prefix, a duplicated entry, or a future page type) would pass: `mustExclude` only contains combos + the 6 named hub scaffolds + the KB-prefix scan. The 6 FLAT hubs are checked by exact URL, but any *other* erroneously-emitted flat URL (e.g. if a hub were accidentally given a `roofing-` prefix, or a `terms-of-service`-style page were noindexed-but-emitted) is invisible to the audit. The comment claims "INCLUDES … 255 keep + … = N" but no N is enforced.

**Fix:** Compute the expected exact sitemap size and assert `actual.size === expected`, or at minimum assert `actual` ⊆ `mustInclude` (no URL present that isn't in the allow-list), which closes the "unexpected addition" gap symmetrically to the existing "unexpected removal" check.

### WR-05: `audit-sitemap.ts` hard-codes the keep count (255) and KB cluster list, duplicating the locked invariants instead of importing them

**File:** `scripts/audit-sitemap.ts:38-54`, `114`
**Issue:** The audit re-declares `FLAT_HUB_SCAFFOLDS`, `KB_CLUSTERS`, `EXCLUDED_CORE_PAGES`, and the literal `255` keep count locally. These are duplicated from `src/data/slug-registry.ts` (`HUB_SLUGS`), `src/app/roofing-knowledge-base/[[...slug]]/page.tsx` (`CLUSTERS`), `src/app/sitemap.ts` (`KB_CLUSTER_SLUGS` and `EXCLUDED_CORE_PAGES`), and the generator's `EXPECT.keep`. Three copies of the cluster list and two of the hub list now exist; a future edit to one will let the audit pass against stale assumptions (e.g. add a 7th cluster to the route but not the audit → nested KB articles in the new cluster would not be checked for leakage). An audit that hard-codes the thing it audits can rot into a no-op.

**Fix:** Export `HUB_SLUGS` from the registry, `CLUSTERS` from the KB route (or a shared `kb-taxonomy.ts`), and import them into both `sitemap.ts` and the audit so there is a single source for each list. Import `EXPECT.keep` rather than re-typing `255`.

### WR-06: `sitemap-index.xml` route returns no caching headers and omits the trailing newline contract; `Content-Type` lacks charset

**File:** `src/app/sitemap-index.xml/route.ts:9-26`
**Issue:** The sitemap-index hand-rolls XML and returns it with only `'Content-Type': 'application/xml'` — no `charset=utf-8` and no `Cache-Control`. The XML declares `encoding="UTF-8"` but the HTTP header does not, which some crawlers/proxies treat inconsistently. More structurally, `SITEMAP_IDS` is duplicated verbatim here (line 7) and in `src/app/sitemap.ts:15`; the comment even says "Must stay in sync" — a manual-sync invariant with no enforcement. If a segment is added to `sitemap.ts` but not here, that segment's sitemap exists but is undiscoverable (it is not in the index), silently dropping a whole bucket of URLs from indexation.

**Fix:** Export `SITEMAP_IDS` from `sitemap.ts` and import it in the route handler (single source); add `'Content-Type': 'application/xml; charset=utf-8'`. Consider `Cache-Control: public, max-age=3600` for crawler friendliness.

### WR-07: Legacy shim still emits a numeric-style trust claim that bypasses the D-01 "no fabricated trust value" invariant intent

**File:** `src/data/site-config.ts:51-76`
**Issue:** D-01 (per the canonical config header) forbids any fabricated/placeholder trust value from rendering. The shim correctly DROPS the fake 5.0 rating and 500+ count. However the three replacement `TrustStat` entries set `value: 'Yes'` with `numericValue: null`, and `TrustBar` (`src/components/sections/TrustBar.tsx:115-123`) renders that `value` as a large bold `text-3xl` stat directly under an icon — so the TrustBar now shows "Yes / Licensed & Insured", "Yes / Free Roof Inspections", "Yes / Local Essex County Roofers". Rendering a giant "Yes" as a trust *stat* is not a fabricated value, but it reads as a placeholder and undercuts the credibility goal of the D-01 cleanup (the bar visually still presents a "stat grid" with hollow values). This is a quality/credibility regression introduced by the dedup, not a security issue.

**Fix:** Either render the badge label alone (drop the redundant "Yes" headline so the badge text becomes the primary line), or give `TrustBar` a non-numeric "badge" rendering mode that omits the `text-3xl` value line when `numericValue === null`, so the bar shows the credential label without an empty-feeling "Yes."

## Info

### IN-01: Dead verdict-API surface — `getComboVerdict` / `getClassification` are exported but never consumed

**File:** `src/data/url-classification.ts:30-40`
**Issue:** Grep shows `getComboVerdict` and its alias `getClassification` have no callers anywhere in `src/` or `scripts/`. Only `isKeep`/`isNoindex`/`isRedirect`/`getComboRedirects` are used. The header calls these "locked D-02 contract — do NOT rename," so they are presumably intentional API surface, but they are currently dead code.
**Fix:** Keep if the locked contract requires them; otherwise add a one-line note that they are part of the public API for downstream phases to avoid them being flagged as removable.

### IN-02: `getSlugsByType` is exported but unused

**File:** `src/data/slug-registry.ts:140-142`
**Issue:** No callers in `src/` or `scripts/`. Dead until a later phase consumes it.
**Fix:** Acceptable as forward-looking API; document intent or remove.

### IN-03: `KbArticleContentSchema` is defined but not yet imported anywhere

**File:** `src/data/article-content/kb-schema.ts:12-45`
**Issue:** The parallel KB content schema has no importers (content authoring is Phase 13). Expected for a scaffold phase; flagging only so it is not mistaken for wired-up code.
**Fix:** None needed now; will be consumed in Phase 13.

### IN-04: `generate-articles-ts.ts` is a non-deterministic stdout generator with no write-back guard, and its 252-article math is mislabeled

**File:** `scripts/generate-articles-ts.ts:1-4`, `377-381`
**Issue:** The header says `> src/data/articles.ts` (manual redirect), so re-running and forgetting the redirect just prints to stdout — harmless but easy to misuse. Separately the count comments say "252 articles" / "63 services x 3 = 189" but the generator excludes 2 services (`articleServices` = 63 − 2 = 61 → 183 service articles), and `comparisons` is iterated for ALL comparisons (the comment says "30 comparisons x 2 = 60" but the file claims both 30 and "60 comparison articles"). The emitted `articles.ts` is 2810 lines and the live count is what matters, but the inline arithmetic in the comments does not reconcile with the `excluded` set and should not be trusted as documentation.
**Fix:** Replace the hard-coded counts in the banner comments with values computed from `articleServices.length`, `comparisons.length`, and `coreArticles.length` so the generated header is self-consistent.

### IN-05: Two near-duplicate `buildOG` helpers and duplicated OG-image literals across scaffold routes

**File:** `src/app/[slug]/page.tsx:45-64`, `src/app/roofing-knowledge-base/[[...slug]]/page.tsx:116-127`, `src/components/templates/HubScaffold.tsx:29-38`, `src/app/roofing-glossary/page.tsx:21-30`
**Issue:** The OpenGraph object (siteName + default OG image width/height/url) is hand-assembled in at least four places with slightly different signatures. Drift risk is low but real (e.g. the KB `buildOG` has no per-page image param while `[slug]` does). This is pre-existing-pattern duplication amplified by the new scaffold routes.
**Fix:** Extract a single `buildOpenGraph(opts)` helper in `src/lib/seo-utils.ts` and have all routes/templates consume it.

---

_Reviewed: 2026-06-03_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
