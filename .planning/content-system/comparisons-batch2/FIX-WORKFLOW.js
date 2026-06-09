export const meta = {
  name: 'cmp2-fix',
  description: 'Apply confirmed review findings to each CMP-2 snippet (1 fixer per comparison); sweep all instances, preserve bold/≤40w/facts',
  phases: [{ title: 'Fix', detail: '7 fixers — apply confirmed findings to own snippet' }],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch2`
const SRC = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

// only comparisons with confirmed findings > 0 (architectural-vs-3-tab had 0 → skip)
const ITEMS = [
  { id: 'modified-bitumen-vs-tpo', packs: 'facts-materials-economics.md §4/§6/§7, facts-energy-solar.md §0.3–0.5' },
  { id: 'rubber-roofing-vs-tpo', packs: 'facts-materials-economics.md §4/§7, facts-energy-solar.md §0.3–0.4' },
  { id: 'cedar-shake-vs-wood-shingle', packs: 'facts-materials-economics.md §5/§5b/§0/§7, facts-historic-restoration.md' },
  { id: 'built-up-roofing-vs-modified-bitumen', packs: 'facts-materials-economics.md §4/§6/§7, facts-nj-regulatory-climate.md' },
  { id: 'spray-foam-vs-tpo', packs: 'facts-materials-economics.md §6/§4/§7, facts-energy-solar.md §0.3–0.5, facts-nj-regulatory-climate.md' },
  { id: 'green-roof-vs-traditional-roofing', packs: 'GAP-green-roof.md, facts-materials-economics.md §0/§4' },
  { id: 'solar-shingles-vs-solar-panels', packs: 'facts-energy-solar.md (solar-shingle section, §0.7, line 217 re-roof rule, NREL)' },
]

const FIX_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['comparisonId', 'editsApplied', 'sweeps', 'notes'],
  properties: {
    comparisonId: { type: 'string' },
    editsApplied: { type: 'array', items: { type: 'string' }, description: 'one line per confirmed finding id applied' },
    sweeps: { type: 'array', items: { type: 'string' }, description: 'patterns swept across the whole object beyond the single flagged instance (e.g. "1–5 lb/sq ft membrane load → qualitative ×3")' },
    notes: { type: 'string', description: 'any finding intentionally NOT applied + why, or confirmation all applied' },
  },
}

phase('Fix')
const results = await parallel(ITEMS.map((it) => () => agent(
  `You are a precise content fixer for Newark Quality Roofing. Apply the CONFIRMED review findings to ONE comparison's snippet. Each finding carries an exact before→after fix; apply it, and SWEEP the WHOLE object for every other instance of the same defect pattern (per-item reviewers flag ONE instance; the same over-attribution / unsourced figure usually recurs — fix them ALL).

COMPARISON: ${it.id}
SNIPPET TO EDIT (in place): ${OUT}/${it.id}.snippet.ts
CONFIRMED FINDINGS (apply every one): ${OUT}/findings-${it.id}.json
FACT PACKS (verify replacements trace to a named line): ${it.packs} — in ${R}/ , GAP-* in ${OUT}/
RULESET: ${RULESET}. Gold exemplar shape: ${SRC} comparisonId 'asphalt-shingles-vs-metal-roofing'.

RULES FOR FIXING:
1. Apply each confirmedFinding's 'fix' (before→after). RELOCATE facts to the body, NEVER delete a real fact — only remove an unsourced number/attribution or reword.
2. SWEEP: for any finding about an over-attributed source (e.g. 'per NRCA' on SBS/APP, ply counts, install method) or an unsourced figure (e.g. '1–5 lb/sq ft' membrane load, '$200–$500' EPDM patch, '$7–$12' TPO, '200–500 sq ft', 'Number 1 Blue Label', 'NJDEP VOC'), grep the ENTIRE object and apply the same correction to EVERY occurrence — comparisonRows cells, verdict, detailedAnalysis, njSpecific, residential, commercial, faqs, directAnswer, introParagraphs.
3. PRESERVE the bold-safe field map: '**bold**' stays ONLY in directAnswer / introParagraphs[] / verdict.{winner,reasoning,alternateScenario} / detailedAnalysis[].content[] / njSpecific.content[] / residentialSection.content[] / commercialSection.content[] / faqs[].answer. NEVER put '**' in a heading, introHeading, comparisonRows cell, faqs[].question, or metaDescription.
4. PRESERVE answer-first ≤40 words on every lead: directAnswer, introParagraphs[0], each detailedAnalysis[].content[0], njSpecific.content[0], residentialSection.content[0], commercialSection.content[0], and each faqs[].answer first sentence. If a fix would push a lead over 40 words, tighten elsewhere in that lead to stay ≤40.
5. PRESERVE R3 strict body↔lead bold (each body paragraph opens by re-bolding a lead topic) and schema array caps (introParagraphs ≤3, detailedAnalysis ≤5 each content ≤4, njSpecific/residential/commercial.content ≤3, comparisonRows 4–15, faqs 4–6). Do NOT change comparisonId.
6. No modality (will/should/need to/must/may/might) in body prose. No de-fab literals or hype anywhere.

Edit the snippet file in place with the Read/Edit tools. Then re-read your edited snippet once to confirm it is still a single valid '{ … }' object literal. Return the structured summary.`,
  { label: `fix:${it.id}`, phase: 'Fix', schema: FIX_SCHEMA },
)))

return { fixed: results.filter(Boolean) }
