---
phase: 7
slug: supporting-content
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-08
---

# Phase 7 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Zod schema validation + Next.js SSG build |
| **Config file** | none — Zod validates at import, Next.js build validates rendering |
| **Quick run command** | `npx next build` |
| **Full suite command** | `npx next build` |
| **Estimated runtime** | ~120 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx next build`
- **After every plan wave:** Run `npx next build` + visual spot check of 3-5 pages
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 07-01-01 | 01 | 1 | COMP-01 | smoke | `npx next build` (ComparisonTemplate renders) | Wave 0 | pending |
| 07-01-02 | 01 | 1 | COMP-05 | smoke | `npx next build` (split hero with lead form) | Wave 0 | pending |
| 07-01-03 | 01 | 1 | COMP-06 | smoke | `npx next build` (comparison table renders) | Wave 0 | pending |
| 07-01-04 | 01 | 1 | COMP-07 | smoke | `npx next build` (FAQ section renders) | Wave 0 | pending |
| 07-02-01 | 02 | 2 | COMP-02 | unit | Zod validation at import time — build fails if schema violation | Wave 0 | pending |
| 07-02-02 | 02 | 2 | COMP-03 | unit | Zod validation at import time | Wave 0 | pending |
| 07-02-03 | 02 | 2 | COMP-04 | unit | Zod validation at import time | Wave 0 | pending |
| 07-03-01 | 03 | 1 | ARTL-01 | smoke | `npx next build` (ArticleTemplate renders) | Wave 0 | pending |
| 07-03-02 | 03 | 1 | ARTL-03 | unit | Link engine returns correct links for all articles | Wave 0 | pending |
| 07-03-03 | 03 | 1 | ARTL-04 | manual | Code review — ArticleTemplate only renders reverse silo links | N/A | pending |
| 07-04-01 | 04 | 3 | ARTL-02 | unit | Zod validation + count assertion in articles.ts | Wave 0 | pending |
| 07-04-02 | 04 | 3 | ARTL-05 | manual | Content review — article topics match keyword clusters | N/A | pending |

*Status: pending · green · red · flaky*

---

## Wave 0 Requirements

- [ ] Zod schemas defined (ComparisonContentSchema, ArticleContentSchema, ArticleSchema) — build-time validation covers all content
- [ ] SlugEntrySchema extended with `articleId` field — enables article dispatcher routing
- [ ] Article registry (articles.ts) with all 252 article definitions — enables count validation

*Existing infrastructure covers framework needs — Zod + Next.js build serves as the test framework.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Lead form above fold on comparison pages | COMP-05 | Visual layout — position relative to viewport | Load 3 comparison pages, verify form visible without scrolling on 1440px viewport |
| No outbound links in articles | ARTL-04 | Template code review | Inspect ArticleTemplate — verify only money page + next/prev article links rendered |
| Articles mapped to keyword clusters | ARTL-05 | Content quality review | Review article topics in articles.ts — verify each service's 3 articles target distinct keyword angles (signs, cost, decision) |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
