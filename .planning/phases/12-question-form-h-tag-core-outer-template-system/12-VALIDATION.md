---
phase: 12
slug: question-form-h-tag-core-outer-template-system
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-06-03
---

# Phase 12 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.
>
> **Primary validator = the deliverable.** The `audit:headings` script (AUD-01) is simultaneously the phase deliverable and the verification mechanism for HTAG-01..08 and KB-03. There is no separate unit-test layer — validation is script-based audits run via `tsx`, matching the Phase 11 `audit:redirects` / `audit:sitemap` pattern.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None (no jest/vitest in repo) — script-based audits via `tsx` |
| **Config file** | none — standalone `tsx` entry points wired in `package.json` `"scripts"` |
| **Quick run command** | `npm run audit:headings` (static pass always; rendered pass if `.next` HTML present) |
| **Full suite command** | `npm run build && npm run audit:headings` (build refreshes `.next` prerendered HTML, then audit) |
| **Estimated runtime** | audit ~seconds; full `build && audit` = build time (~minutes) + seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run audit:headings` — static pass (heading strings/data + 252 title uniqueness) runs always; rendered pass runs when `.next` HTML exists, otherwise reports "build required".
- **After every plan wave:** Run `npm run build && npm run audit:headings` — proves the real prerendered DOM passes across the representative sample set.
- **Before `/gsd:verify-work`:** `npm run build && npm run audit:headings` must exit 0 (this constitutes the §19 Phase 12 Verify list).
- **Max feedback latency:** ~seconds (static) / full build (rendered).

---

## Per-Task Verification Map

> Task IDs are assigned by the planner; rows below are the requirement→behavior→assertion contract every plan task must trace to. The `audit:headings` script encodes all automated assertions.

| Req | Behavior | Test Type | Automated Assertion (in `audit:headings`) | File Exists |
|-----|----------|-----------|--------------------------------------------|-------------|
| AUD-01 | `audit:headings` exists + fails build on violation | script | `npm run audit:headings; echo $?` → 1 on seeded violation, 0 clean | ❌ W0 (rewrite script) |
| HTAG-01 | one question-form H1, no `<br>`/split-`<span>` | rendered | parse representative `.html`: exactly one `<h1>`, no element children inside it, trimmed text ends `?` | ❌ W0 |
| HTAG-02 | homepage Core-first + 5-step process + KB-link + Outer H2s | rendered+static | first `<h2>` after hero === §17 home Core string; required Outer H2s present | ❌ W0 |
| HTAG-03 | no pseudo-headings; strict levels; H1≠H2; no nav/footer/button/label H-tags (incl. `Header.tsx` nav `<h3>`s) | rendered | `closest('nav,footer,button,label')` empty for every `<h*>`; monotonic levels; H1≠any H2 | ❌ W0 |
| HTAG-04 | service H1 + §4.2 tree | rendered+static | `roof-repair.html` H1 = "Who Provides [Service] in Newark?" + Core H2 strings | ❌ W0 |
| HTAG-05 | city H1 + §4.3 incl. Permits + Materials | rendered+static | `roofing-in-newark-nj.html` H1 + Permits/Materials H2s present | ❌ W0 |
| HTAG-06 | combo H1 + §4.4 tree | rendered+static | `roof-repair-newark-nj.html` H1 + Core H2 | ❌ W0 |
| HTAG-07 | Core-before-Outer; ContentAuthorityBlock out of Core band | rendered | first content `<h2>` === Core; ContentAuthorityBlock heading not first | ❌ W0 |
| HTAG-08 | first major H2 after hero = Core per §17 (all templates) | rendered | per-template first-`<h2>`-after-hero assertion | ❌ W0 |
| KB-03 | 252 article titles question-form, unique, slugs stable | static | iterate `articles`: each `title` ends `?`; `Set` size === count; slug regex unchanged | ❌ W0 |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

> **Count note:** research measured **252** generated articles (not 253). The static uniqueness check must assert `Set(titles).size === articles.length`, NOT a hardcoded `=== 253`. The 252-vs-253 reconciliation is an open question for the planner.

---

## Wave 0 Requirements

- [ ] `scripts/audit-headings.ts` — REWRITE to the hybrid build-failing audit (static + rendered passes); covers AUD-01 + HTAG-01..08 + KB-03; `process.exit(1)` on any violation, `process.exit(0)` clean.
- [ ] `src/data/heading-config.ts` (or equivalent central module) — question-form strings shared by templates AND the static audit (single source of truth).
- [ ] `node-html-parser` devDependency — rendered-pass HTML parser. **Install gated behind a `checkpoint:human-verify` task** (slopcheck unavailable; provenance strong: 8yr age, 7.18M weekly downloads, real repo, no postinstall).
- [ ] Representative rendered-sample set baked into the audit: `index.html` (home), one service, one city, one keep-combo, the in-scope core/hub `.html` files from `.next/server/app/`.
- [ ] (Optional ergonomics) `"generate:articles"` package script wrapping `npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts`.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| `node-html-parser` install is safe to add | AUD-01 | New devDependency; automated slopcheck unavailable | `checkpoint:human-verify` task: confirm version pinned + provenance reviewed before merge |
| Permits / Materials shared copy reads as substantive (not thin) | HTAG-05 | §17/§18 "no thin/pseudo section" intent is a judgment call the audit can't measure | Human read of the rendered Permits + Materials sections on a sample city page |
| Verbatim §4.1–4.4 tree fidelity (exact question strings) | HTAG-02/04/05/06 | Audit checks structural rules (`?`, levels, H1≠H2, Core-first), not exact spec wording | Spot-check rendered headings against IMPLEMENTATION-BRIEF §4.1–4.4 |

---

## Validation Sign-Off

- [ ] All tasks trace to an `audit:headings` assertion or a Wave 0 dependency
- [ ] Sampling continuity: no 3 consecutive tasks without an automated audit check
- [ ] Wave 0 covers all MISSING references (audit rewrite, heading-config, parser install, sample set)
- [ ] No watch-mode flags (audit is one-shot, build-gated)
- [ ] Feedback latency acceptable (static seconds / full build minutes)
- [ ] `nyquist_compliant: true` set in frontmatter once the planner maps every task to a row above

**Approval:** pending
