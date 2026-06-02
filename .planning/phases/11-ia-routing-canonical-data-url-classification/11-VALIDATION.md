---
phase: 11
slug: ia-routing-canonical-data-url-classification
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-06-01
---

# Phase 11 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. Seeded from `11-RESEARCH.md` § Validation Architecture. This project has **no unit-test framework**; validation is `tsx` build-time assertion scripts (`audit:*`/`validate:*`) + zod `.parse()` at module load. `npm run build` is the primary feedback signal.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None (no jest/vitest/playwright). Validation = `tsx` scripts with `process.exit(1)` + zod module-load throws |
| **Config file** | none — see Wave 0 |
| **Quick run command** | `npm run build` (runs `prebuild` generator → Next compile; zod/codegen/count throws fail it) |
| **Full suite command** | `npm run build && npm run seo:validate && npm run audit:sitemap && npm run audit:redirects` |
| **Estimated runtime** | ~60–120 seconds (full Next build) |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run seo:validate`
- **Before `/gsd:verify-work`:** `npm run build` green + `audit:sitemap` + `audit:redirects` green
- **Max feedback latency:** ~120 seconds

---

## Per-Task Verification Map

> Filled in during execution as plans/tasks are authored. Requirement→validator mapping below is the contract each task's `<automated>` verify must satisfy.

| Req ID | Behavior | Test Type | Automated Command | File Exists | Status |
|--------|----------|-----------|-------------------|-------------|--------|
| INDX-01 | generator + consumer + verdict API | build-assert | `tsx scripts/build-url-classification.ts` emits json+mjs; build imports consumer | ❌ W0 | ⬜ pending |
| INDX-02 | counts 255/942/168/8 from CSV, fail on mismatch | build-assert | `tsx scripts/build-url-classification.ts` (exit 1 on mismatch) | ❌ W0 (generator IS the validator) | ⬜ pending |
| INDX-03 | precedence + 942 noindex emit `robots:{index:false,follow:true}`, excluded from sitemap | build/render-assert | `tsx scripts/audit-sitemap.ts` + metadata check | ❌ W0 | ⬜ pending |
| INDX-04 | 168+8 redirects 301, no chains, flat-roof+www preserved | build-assert | `tsx scripts/audit-redirects.ts` | ❌ W0 | ⬜ pending |
| INDX-05 | 255 keep indexable + in sitemap; unknown → 404 | build-assert | `audit-sitemap.ts` + `next build` 404 behavior | ❌ W0 | ⬜ pending |
| INDX-06 | `/services`,`/locations`,`/resources` 301 + core slugs updated | build-assert | `audit-redirects.ts` asserts the 3 hub sources | ❌ W0 | ⬜ pending |
| INDX-07 | `PRIORITY_COMBO_PAIRS ⊆ keep`; no noindex/consolidate boosted | build/module-assert | check in generator or seo-priority load vs keep set | ❌ W0 | ⬜ pending |
| INDX-08 | `trailingSlash:false` retained; nested served w/o slash | build-assert | grep `next.config.ts` + `audit-redirects` | partial | ⬜ pending |
| IA-01 | hub + 6 cluster hubs resolve 200, `dynamicParams=false` | build-assert | `next build` with enumerated `generateStaticParams` | partial (build) | ⬜ pending |
| IA-02 | `/roofing-glossary` resolves via dedicated route | build-assert | `next build` produces the route | partial (build) | ⬜ pending |
| IA-03 | 44 nested KB URLs resolve collision-free (51 paths total) | build-assert | `next build` + path-enumeration count check | partial (build) | ⬜ pending |
| IA-04 | 6 hubs 200, no "coming soon", incomplete=noindex | build-assert | `next build` + grep-assert "coming soon" absent | partial | ⬜ pending |
| IA-05 | `PageTypeSchema` + registry extended, collision-checked | module-load | `buildRegistry()`/zod throws on collision | exists (`slug-registry.ts`) | ⬜ pending |
| KB-01 | all existing articles cluster-assigned, none undefined | module-load | required `cluster` zod enum → `z.array(ArticleSchema).parse()` throws | exists (`articles.ts` parse) | ⬜ pending |
| KB-02 | `ArticleContentSchema` ≥10 sections + `faqs[]` | module-load | zod `.min(10)` + `faqs` array → `.parse()` throws | exists (schema parse) | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `scripts/build-url-classification.ts` — generator that IS the INDX-02 count validator (KEEP/NOINDEX/redirect/chain assertions)
- [ ] `scripts/audit-redirects.ts` (spec §20) — asserts 168+8 sources unique, targets are keep slugs, flat-roof+www present, no chains
- [ ] `scripts/audit-sitemap.ts` (spec §20) — asserts sitemap = 255 keep + core/KB/glossary, excludes 942 noindex + 168 redirect + scaffolds
- [ ] `prebuild` npm script wiring (`"prebuild": "tsx scripts/build-url-classification.ts"`) so generation precedes compile
- [ ] (Decision) update or exempt `scripts/validate-flat-urls.ts` for nested KB paths
- [ ] Framework install: none needed — `tsx` (^4.21.0) already present

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Live HTTP 200 + visual resolution of new routes in dev | IA-01/02/03/04 | `next build` proves the route compiles; a human/dev-server confirms it renders without runtime error | `npm run dev`, visit `/roofing-knowledge-base/`, a cluster hub, a nested article, `/roofing-glossary/`, and each of the 6 hubs |

*Build-time validators cover counts, redirects, sitemap, schema, and collision; route render is confirmed in dev / Phase 17 crawl.*

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references (3 new scripts + prebuild wiring)
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
