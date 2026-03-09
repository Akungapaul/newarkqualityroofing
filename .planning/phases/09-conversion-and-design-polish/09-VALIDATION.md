---
phase: 9
slug: conversion-and-design-polish
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-09
---

# Phase 9 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual UAT (no automated test framework installed) |
| **Config file** | none |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run seo:validate` |
| **Estimated runtime** | ~120 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run seo:validate`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 09-01-01 | 01 | 1 | DSGN-08 | visual | `npm run build` | N/A | ⬜ pending |
| 09-01-02 | 01 | 1 | DSGN-05 | visual | `npm run build` | N/A | ⬜ pending |
| 09-01-03 | 01 | 1 | DSGN-01 | visual | `npm run build` | N/A | ⬜ pending |
| 09-02-01 | 02 | 1 | DSGN-02 | visual | `npm run build` | N/A | ⬜ pending |
| 09-02-02 | 02 | 1 | DSGN-03 | visual | `npm run build` | N/A | ⬜ pending |
| 09-02-03 | 02 | 1 | DSGN-04 | visual | `npm run build` | N/A | ⬜ pending |
| 09-03-01 | 03 | 2 | DSGN-07 | visual | `npm run build` | N/A | ⬜ pending |
| 09-03-02 | 03 | 2 | DSGN-07 | visual | `npm run build` | N/A | ⬜ pending |
| 09-03-03 | 03 | 2 | DSGN-07 | visual | `npm run build` | N/A | ⬜ pending |
| 09-04-01 | 04 | 2 | DSGN-06, CONT-01 | content audit | `npm run build` | N/A | ⬜ pending |
| 09-04-02 | 04 | 2 | DSGN-06, CONT-01 | content audit | `npm run build` | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `npm install motion` — Motion v12.x animation library
- [ ] No automated visual regression framework — all DSGN requirements are manual/visual verification
- [ ] Build verification is the primary automated check (all pages must compile)

*Existing infrastructure covers automated verification via SSG build.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Editorial Trust design matches preview | DSGN-01, DSGN-08 | Visual aesthetic quality cannot be automated | Compare rendered pages against design-previews/direction-4-editorial-trust.html |
| Trust bar text-only with SVG icons and count-up | DSGN-02 | Visual + animation verification | Load homepage, verify no badge images, SVG icons visible, count-up triggers on scroll |
| Testimonial star ratings and aggregate header | DSGN-03 | Visual layout verification | Check homepage carousel has aggregate header, inner pages show compact testimonials |
| Before/after gallery slider works | DSGN-04 | Interactive + visual verification | Drag slider handle on homepage gallery, verify images swap, check mobile touch support |
| Stock photos have warm tone treatment | DSGN-05 | Visual quality check | Compare photos before/after CSS treatment on multiple pages |
| 50/50 residential/commercial split | DSGN-06, CONT-01 | Content balance assessment | Audit homepage sections, services grid, footer for equal res/com representation |
| Animations present and respect reduced motion | DSGN-07 | Animation + accessibility check | Toggle prefers-reduced-motion in browser, verify animations stop |
| Grain texture, rounded corners, organic shapes | DSGN-08 | Visual consistency check | Check page elements for 12-20px radius, grain overlay visible, organic shapes present |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
