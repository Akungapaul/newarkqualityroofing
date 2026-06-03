---
phase: 11-ia-routing-canonical-data-url-classification
plan: 01
subsystem: infra
tags: [site-config, json-ld, schema, nap, trust-signals, aggregate-rating, next-js]

# Dependency graph
requires:
  - phase: 08-seo-foundation
    provides: JSON-LD schema builders (buildAggregateRating, RoofingContractor/LocalBusiness) in src/lib/schema.ts
provides:
  - "src/config/site-config.ts — single canonical NAP/trust/identity source (D-01) with rating.enabled=false"
  - "src/data/site-config.ts re-export shim keeping the 9 existing importers working unchanged"
  - "buildAggregateRating() gated behind rating.enabled — fake 5.0/500 AggregateRating omitted from HTML + JSON-LD"
affects:
  - "Phase 12 (templates read NAP/trust from canonical config)"
  - "Phase 15 (single Organization/LocalBusiness @id, schema identity)"
  - "Phase 16 (full single-source enforcement + 9-importer repoint + dedup sweep)"

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Canonical config + legacy re-export shim (adapter) so consolidation does not break existing importers"
    - "Omit-not-placeholder: unknown trust values are empty/disabled, never rendered as placeholders or fabricated literals"
    - "Conditional-spread to omit a JSON-LD key entirely (never set to null) when a gated value is disabled"

key-files:
  created:
    - src/config/site-config.ts
  modified:
    - src/data/site-config.ts
    - src/lib/schema.ts
    - src/components/sections/TrustBar.tsx

key-decisions:
  - "[11-01]: Re-export shim keeps the 9 importers on the legacy siteConfig shape (full repoint deferred to Phase 16); shim sources truthful values from the canonical config and drops fabricated literals"
  - "[11-01]: Unknown canonical values (street, ZIP, geo, license #, rating value/count, founding year, project count) exposed as empty strings / disabled flag — render as nothing, never as placeholders or fabricated literals"
  - "[11-01]: Fabricated legacy trustStats (fake 5.0 rating, 500+ roofs, 15+ years) dropped from the shim; replaced with truthful non-numeric badges (Licensed & Insured, Free Roof Inspections, Local Essex County Roofers)"
  - "[11-01]: AggregateRating key conditionally spread (omitted entirely while rating.enabled=false), not set to null, so the fake 5.0/500 appears nowhere in HTML/JSON-LD"

patterns-established:
  - "Canonical config (src/config/site-config.ts) as single source of truth; legacy path is an adapter shim"
  - "Gate-and-conditionally-spread for fabricated trust claims in JSON-LD builders"

requirements-completed: [IA-04]

# Metrics
duration: 11min
completed: 2026-06-03
---

# Phase 11 Plan 01: Canonical site-config + gated AggregateRating Summary

**Created `src/config/site-config.ts` as the single canonical NAP/trust/identity source (rating.enabled=false), kept the 9 existing importers working via a re-export shim, and gated `buildAggregateRating()` so the known-false 5.0/500 AggregateRating is omitted from all rendered HTML and JSON-LD.**

## Performance

- **Duration:** ~11 min
- **Started:** 2026-06-03T05:47:58Z
- **Completed:** 2026-06-03T05:58:57Z
- **Tasks:** 2
- **Files modified:** 4 (1 created, 3 modified)

## Accomplishments
- Established `src/config/site-config.ts` as the canonical D-01 config with the full locked field set (brandName, legalName, phone, formattedPhone, email, address, geo, openingHours, serviceArea, license, insuranceStatement, workersCompStatement, rating, foundingYear, projectCount, trustBadges, sameAs, primaryUrl) and `rating.enabled = false`.
- Preserved the env-var phone reads (`NEXT_PUBLIC_PHONE_DISPLAY` / `NEXT_PUBLIC_PHONE_TEL`) so the phone does NOT regress to the fabricated `(973) 555-0123`.
- Converted `src/data/site-config.ts` into a re-export shim so all 9 importers keep resolving without edits; fabricated trust literals (123 Main Street, fake 5.0, fake 500+) removed from the data this shim exposes.
- Gated `buildAggregateRating()` behind `rating.enabled`; both call sites conditionally spread the result so the `aggregateRating` key is omitted entirely while disabled. Verified the fake AggregateRating / 5.0 / 500 are absent from all 1755 rendered pages while the RoofingContractor entity remains intact (89 HTML files).
- `npm run build` exits 0 with all changes in place (1755 static pages generated).

## Task Commits

Each task was committed atomically:

1. **Task 1: Create canonical src/config/site-config.ts + re-export shim** - `773badc` (feat)
2. **Task 2: Gate buildAggregateRating() behind rating.enabled** - `6687456` (fix)

**Plan metadata:** committed separately (docs: complete plan)

## Files Created/Modified
- `src/config/site-config.ts` (created) - Canonical single source for all NAP/trust/identity values; rating.enabled=false; env-driven phone; unknown values omitted (empty/disabled), placeholders only in code comments.
- `src/data/site-config.ts` (modified) - Re-export/adapter shim mapping the canonical config to the legacy `siteConfig` shape the 9 importers consume; drops fabricated trust literals; exposes truthful non-numeric trustStats.
- `src/lib/schema.ts` (modified) - `buildAggregateRating()` reads `canonicalConfig.rating` and returns null when disabled; both call sites conditionally spread so the `aggregateRating` key is omitted (never null); when enabled, value/count flow from siteConfig.rating.
- `src/components/sections/TrustBar.tsx` (modified) - Inline `numericValue !== null` narrowing at the CountUp call site (Rule 3 type fix; no behavior change).

## Decisions Made
- Re-export shim chosen over repointing 9 importers (lower-risk Phase-11 boundary; full repoint is Phase 16, per D-01 / PATTERNS).
- Unknown canonical values exposed as empty strings / disabled flag (omit-not-placeholder) rather than fabricated or placeholder strings.
- Fabricated legacy trustStats dropped and replaced with truthful non-numeric badges so TrustBar still renders without any fabricated claim.
- AggregateRating key conditionally spread (omitted) rather than set to null, per D-01 RESOLVED.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] TrustBar numericValue type narrowing**
- **Found during:** Task 1 (re-export shim)
- **Issue:** The legacy `siteConfig` was `as const`, which let TypeScript discriminate `stat.numericValue` via a separate `isNumeric` boolean. The shim's explicit `TrustStat` interface widens `numericValue` to `number | null`; TS could no longer track narrowing through the intermediate `isNumeric` variable, so `<CountUp target={stat.numericValue}>` failed type-checking (`number | null` not assignable to `number`). This blocked `npm run build`.
- **Fix:** Removed the intermediate `isNumeric` variable and used `stat.numericValue !== null` inline in the JSX condition so TS narrows `stat.numericValue` to `number` inside the truthy branch. No behavior change.
- **Files modified:** src/components/sections/TrustBar.tsx
- **Verification:** `npm run build` exits 0; TrustBar renders the truthful non-numeric badges (numericValue null → no CountUp).
- **Committed in:** 773badc (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking type fix)
**Impact on plan:** The single auto-fix was required to keep the build green after widening the trustStats type in the shim. No scope creep; TrustBar behavior is unchanged (it already only renders truthful badges after the fabricated stats were dropped).

## Issues Encountered
- A broad `grep` for `AggregateRating` in `.next/server` initially matched the term inside a **source map** (`.js.map`, which embeds the original `src/lib/schema.ts` source containing the `'@type': 'AggregateRating'` literal and code comments). Re-scoping the check to rendered output only (`.next/server/app/*.html` and `*.rsc`) confirmed `AggregateRating`, `ratingValue`, and `reviewCount` are all absent from rendered HTML/JSON-LD — the gate works as intended.

## Threat Model Coverage
- **T-11-01 (Information disclosure — fake AggregateRating 5.0/500 in JSON-LD): mitigated.** `buildAggregateRating()` gated behind `rating.enabled`; key omitted while false; verified absent from all rendered output (Task 2).
- **T-11-02 (Tampering — placeholder/fake trust literals leaking into rendered strings): mitigated.** Canonical config and shim omit unknown values (empty/disabled), no fabricated literal is an assigned string value; grep-asserted no fake literals in renderable (non-comment) strings (Task 1).

## Known Stubs
None affecting this plan's goal. The canonical config intentionally OMITS unknown owner-supplied values (street address, ZIP, geo, NJ HIC license number, insurance/workers-comp statements, rating value/count, founding year, project count) per D-01 — these are documented as `[CANONICAL VALUE REQUIRED: …]` in code comments and surface as empty/disabled, never as rendered placeholders. They are owner-input gaps, not implementation stubs, and are resolved when the owner supplies canonical values (full single-source enforcement is Phase 16).

## User Setup Required
None for this plan to build/run. Owner must eventually supply canonical business values (street address + ZIP, geo coordinates, NJ HIC license number, insurance/workers-comp statements, verified rating value + count, founding year, verified project count) to enable the corresponding public trust claims; until then those claims are correctly omitted.

## Next Phase Readiness
- Single canonical config exists and is the source of truth for downstream phases; the fake AggregateRating is removed sitewide.
- Remaining Phase 11 plans (URL-classification pipeline, hub redirects, KB/glossary/hub routes, schema/registry extensions, seo-priority reconciliation) are independent of this plan and unblocked.
- Phase 16 will repoint the 9 importers off the shim onto the canonical shape and run the full single-source enforcement + dedup sweep.

## Self-Check: PASSED

- Files verified present: `src/config/site-config.ts`, `src/data/site-config.ts`, `src/lib/schema.ts`, `src/components/sections/TrustBar.tsx`, `11-01-SUMMARY.md`.
- Commits verified present: `773badc` (Task 1), `6687456` (Task 2).

---
*Phase: 11-ia-routing-canonical-data-url-classification*
*Completed: 2026-06-03*
