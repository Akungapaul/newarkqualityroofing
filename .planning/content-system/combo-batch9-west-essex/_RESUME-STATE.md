# Combo Batch 9 (WEST-ESSEX) — resume checkpoint

**Updated after the full content pass + gate (all green).** Nothing committed yet.

## DONE (all 325 combos, all 5 cities — safe on disk, builds green)
- Phase 0 (setup) + Phase 1 (5 briefs) complete.
- **All 325 authored** (after a session-limit interruption: first run 156, retry 169, +1 verona/roof-repair).
- **Assembled + def-spliced** (325 defs) into `src/data/combo-content/<city>/`.
- **Orchestrator sweep** applied (54× 5:23-6.4 expansion, 15× banned vent-25%, 7× RICOWI, 5× claim-deadline).
- **Lead-tightening** pass: 56 overruns across 44 files tightened to ≤40w (LEADFIX workflow).
- **8 R6/R10 gate fixes** applied (7× "has to"→indicative, 1× "same day"→"as soon as").
- Meta fixes: west-orange/gutter-guard 161→153, glen-ridge/historic-roof-restoration 163→148,
  glen-ridge/infrared 169→154, verona/solar-shingle 167→152; verona/commercial-roof-installation
  had leaked `</content></invoke>` markup (stripped).
- **GATES ALL GREEN:** build 1645 pages / esbuild parse 325/0 / audit-leads 0,0,0,0 /
  audit:semantics GATE 0 (advisory 928, non-blocking) / audit:meta 0 / audit:headings PASS.

## NEXT = Phase 5 REVIEW (per-city waves) → Phase 6 FIX+DIFFERENTIATE → Phase 7 render/sign-off/commit
- REVIEW: `Workflow({scriptPath: ".../REVIEW-WORKFLOW.js", args: ["<city>"]})` per city (9 cohorts
  each), SEQUENTIALLY (session-limit safety). Save each result to `_review-findings-<city>.json`
  (read the task output-file if the notification truncates). On a session limit mid-wave: re-run
  that city's whole review fresh.
- After all 5 reviewed: apply confirmed findings (FIX workflow / direct edits) + orchestrator
  grep-sweep each confirmed signature across all 325 → re-gate.
- DIFFERENTIATE: `npx tsx _dup-analysis.ts` → differentiate services ≥60% ov or ≥50% J (west-essex
  internal pairs + vs committed siblings); preserve directAnswer+definition byte-identical; re-run
  audit-leads + semantics after.
- Render prod :3230 + dev :3240 (`shots.js`), sign-off (USER approves before commit), 2 commits
  (feat + docs, batch paths only, Co-Authored-By), update memory, prompt `/clear`.

## Verdict split (recorded; pre-existing Phase-11)
west-orange + montclair = 20/37/8; glen-ridge + verona + cedar-grove = 5/52/8 (Orange-style asymmetry).
