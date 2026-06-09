# Combo Batch 1 (Newark) — RESUME CHECKPOINT (2026-06-09)

Plan: `~/.claude/plans/parallel-giggling-pillow.md`. Pipeline: PREP→AUTHOR→ASSEMBLE→GATE→REVIEW→FIX→RENDER→SIGN-OFF→2 commits→/clear.
Scope: all 65 Newark combos (`src/data/combo-content/newark/<service>.ts`), user-chose "Newark full 65".

## STATUS
- ✅ PREP · AUTHOR (65, run wf_a86a7743-f16) · ASSEMBLE · GATE (GREEN: build 0 / semantics 0-gate / headings 0 / meta 0 / audit-leads 0).
- ✅ REVIEW→REFUTE (9 cohorts, run wf_9e0dfcb4-25a): **23 confirmed / 8 refuted / 15 low**. Files: `REVIEW-FINDINGS.md`, `_review-result.json`, `_fix-groups.json` (19 combos).
- 🔄 FIX — workflow **run wf_8a19f7e9-536** RUNNING NOW (19 agents, each reads `_fix-groups.json` → applies its finalFix + in-file sweep). AWAIT completion. (Two earlier "launches" wf_8de1f085-734 + a checkpoint write were MALFORMED prose, never ran — ignore them; this is the real one. Confirmed live: storm/wind-damage already edited.)

## IMMEDIATE NEXT (after wf_8a19f7e9-536 completes)
1. **CROSS-FILE recurrence sweep** across ALL 65 (per-combo agents only swept their OWN file):
   - **InterNACHI mis-pinned to SEAM/failure-mode** (NOT lifespan) → re-pin to NRCA. CONFIRMED still present in storm-damage-roof-repair faqs[2] ("per the InterNACHI life-expectancy chart sequence") + wind-damage-roof-repair faqs[2] ("EPDM fails... TPO... per the InterNACHI life-expectancy chart"). Grep `InterNACHI` near seam/fail/reflect/cost across all 65.
   - **ENERGY STAR** as current listing body → CRRC only. Grep all 65 + parents `src/data/service-content/{commercial-services,commercial-roof-types,energy-solar}.ts`.
   - **Forest-Hill/Roseville roofing-MATERIAL concentration** asserted as fact → keep generic (CITY-FACTS §602-603). Grep "Forest Hill"/"Roseville" near slate/tile/copper/concentration across all 65.
   - **Fabricated named datasets/specs** → grep all 65 for: `ProLogis`, `Test Square method`, `since the 1960s`, `two-year statutory`, `30 days of discovery`.
   - **"chemical emissions from active ... factories" causing corrosion** (fab, flagged in metal-roof-installation-repair finding 7) ALSO recurs in commercial-metal-roofing overview[3] → relocate factory ref to building-stock context, drop the corrosion-causation. Grep `chemical emissions`/`factory`/`factories` near corrosion across all 65.
   - **N.J.A.C. 5:23-6.4 covering list abbreviated** `"is wood, slate, or tile"` (finding 22 fixed it only in storm-damage-roof-replacement) ALSO in commercial-roof-installation (challenges[2]+process[3]) → correct to `"is wood shake, slate, clay, cement, or asbestos-cement tile"`. Grep all 65 for `wood, slate, or tile`.
2. **RE-GATE** (fixer can reintroduce violations — CMP lesson): `npm run build` (validates Zod + regen .next) → `npm run audit:semantics -- --quiet --types=combos --ids=newark` 0 → `npm run audit:headings` 0 → `npm run audit:meta` 0 → `npx tsx .planning/content-system/combo-batch1-newark/audit-leads.ts` 0.
3. **RENDER**: `pkill -f next-server; pkill -f "next dev"; sleep 2`; `(PORT=3230 npm run start >/tmp/srv.log 2>&1 &); sleep 7`; `(PORT=3240 npm run dev >/tmp/dev.log 2>&1 &)`; warm routes w/ curl; `NODE_PATH=/opt/homebrew/lib/node_modules node .planning/content-system/combo-batch1-newark/shots.js` (writes shot-*.png + `_shots-report.txt`; per-page 200/h1=1/**=0/defab=false). Hand user `http://localhost:3240/<service>-newark-nj`. Samples: roof-repair, asphalt-shingle-roofing, tpo-roofing-installation, gutter-installation-repair, slate-roof-installation-repair(noindex), silicone-roof-coating(noindex).
4. **SIGN-OFF** → on approval: `rm .planning/content-system/combo-batch1-newark/*.snippet.ts` (keep .md), then **2 commits** (stage ONLY `src/data/combo-content/newark/` + `.planning/content-system/combo-batch1-newark/`; leave pre-existing untracked audit/competitor files):
   - `feat(content): answer-first rewrite of 65 Newark combos (Combo Batch 1)`
   - `docs(content): Combo Batch 1 (Newark) drafts + review findings`
   Co-Authored-By trailer, stay on `main`. Update memory [[content-rewrite-initiative]] + [[nqr-batch-resume]] → point at Combo Batch 2 (next city) + prompt user to `/clear` ([[nqr-clear-after-each-batch]]).

## GOTCHAS
- Combo schema caps: overview 3-5, challenges 2-4, process 2-4, faqs 3-6, metaDescription ≤160. `whyChooseUs` is DEAD CODE at render but still gate-audited.
- `audit-leads.ts` strips `**` BEFORE sentence-split.
- Tasks: #6 FIX in_progress; #7 RENDER, #8 SIGN-OFF pending.
- 942-noindex re-eval DEFERRED. Newark verdicts: 20 keep / 37 noindex / 8 redirect.
- WARNING (this session): two tool calls got emitted as PROSE under context pressure and never ran (a Workflow launch + a Write). After context-low warnings, VERIFY each tool call returned a real result before assuming it executed.
