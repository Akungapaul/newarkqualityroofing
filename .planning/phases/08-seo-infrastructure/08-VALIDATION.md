---
phase: 8
slug: seo-infrastructure
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-09
---

# Phase 8 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Build-time validation scripts (TypeScript, tsx runner) |
| **Config file** | tsconfig.json (existing) |
| **Quick run command** | `npx tsx scripts/validate-flat-urls.ts` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~60 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build` + all validation scripts
- **Before `/gsd:verify-work`:** Full suite must be green + Lighthouse spot checks
- **Max feedback latency:** 60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 08-01-01 | 01 | 1 | SEOT-01 | smoke | `curl localhost:3000/sitemap.xml` | ❌ W0 | ⬜ pending |
| 08-01-02 | 01 | 1 | SEOT-03 | smoke | `curl localhost:3000/robots.txt` | ❌ W0 | ⬜ pending |
| 08-01-03 | 01 | 1 | SEOT-04 | build | `npx tsx scripts/audit-meta.ts` | ❌ W0 | ⬜ pending |
| 08-01-04 | 01 | 1 | SEOT-06 | build | `npx tsx scripts/audit-meta.ts` | ❌ W0 | ⬜ pending |
| 08-02-01 | 02 | 1 | SCHM-01 | smoke | Google Rich Results Test (manual) | N/A | ⬜ pending |
| 08-02-02 | 02 | 1 | SCHM-02 | smoke | Google Rich Results Test (manual) | N/A | ⬜ pending |
| 08-02-03 | 02 | 1 | SCHM-03 | smoke | Google Rich Results Test (manual) | N/A | ⬜ pending |
| 08-02-04 | 02 | 1 | SCHM-04 | build | Schema validation in audit script | ❌ W0 | ⬜ pending |
| 08-03-01 | 03 | 2 | SEMA-01 | build | `npx tsx scripts/audit-headings.ts` | ❌ W0 | ⬜ pending |
| 08-03-02 | 03 | 2 | SEMA-02 | build | `npx tsx scripts/audit-headings.ts` | ❌ W0 | ⬜ pending |
| 08-03-03 | 03 | 2 | SEMA-03 | build | `npx tsx scripts/audit-headings.ts` | ❌ W0 | ⬜ pending |
| 08-03-04 | 03 | 2 | SEMA-04 | build | `npx tsx scripts/audit-headings.ts` | ❌ W0 | ⬜ pending |
| 08-03-05 | 03 | 2 | SEMA-05 | build | `npx tsx scripts/validate-topical-map.ts` | ❌ W0 | ⬜ pending |
| 08-03-06 | 03 | 2 | SEMA-07 | build | `npx tsx scripts/audit-cannibalization.ts` | ❌ W0 | ⬜ pending |
| 08-04-01 | 04 | 3 | SEOT-05 | manual | Lighthouse on representative pages | N/A | ⬜ pending |
| 08-04-02 | 04 | 3 | SEOT-07 | build | `npx tsx scripts/validate-flat-urls.ts` | ❌ W0 | ⬜ pending |
| 08-04-03 | 04 | 3 | SEOT-08 | build | `npx tsx scripts/validate-click-depth.ts` | ❌ W0 | ⬜ pending |
| 08-04-04 | 04 | 3 | SEOT-02 | build | `npm run build` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `scripts/validate-flat-urls.ts` — covers SEOT-07
- [ ] `scripts/validate-click-depth.ts` — covers SEOT-08
- [ ] `scripts/audit-headings.ts` — covers SEMA-01, SEMA-02, SEMA-03, SEMA-04
- [ ] `scripts/audit-meta.ts` — covers SEOT-04, SEOT-06
- [ ] `scripts/validate-topical-map.ts` — covers SEMA-05
- [ ] `scripts/audit-cannibalization.ts` — covers SEMA-07

*If none: "Existing infrastructure covers all phase requirements."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1) | SEOT-05 | Requires real browser rendering and network conditions | Run Lighthouse on 5-6 representative pages post-deploy |
| LocalBusiness schema validates in Google Rich Results Test | SCHM-01 | Google's validator is authoritative | Test homepage, 1 city page, contact page in Google Rich Results Test |
| Service schema validates in Google Rich Results Test | SCHM-02 | Google's validator is authoritative | Test 1 service page and 1 combo page |
| FAQ schema validates in Google Rich Results Test | SCHM-03 | Google's validator is authoritative | Test 1 page with FAQ section |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
