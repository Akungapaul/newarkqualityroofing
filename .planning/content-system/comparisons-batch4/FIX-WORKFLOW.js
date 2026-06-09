export const meta = {
  name: 'cmp4-fix',
  description: 'Apply confirmed review findings to each CMP-4 snippet (1 fixer per comparison); sweep all instances, preserve bold/≤40w/facts',
  phases: [{ title: 'Fix', detail: 'fixers — apply confirmed findings to own snippet' }],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch4`
const SRC = `${REPO}/src/data/comparison-content/decision-helper.ts`
const GOLD = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

// TRIM after review to only comparisons with confirmed findings > 0
const ITEMS = [
  { id: 'best-roofing-material-nj-weather', packs: 'facts-materials-economics.md §0/§7, facts-nj-regulatory-climate.md §3.1, facts-energy-solar.md §0.3–0.4, facts-causes-signs.md, facts-components-specialty.md' },
  { id: 'best-commercial-roofing-material', packs: 'facts-components-specialty.md, facts-replacement-reroofing-insurance.md, facts-energy-solar.md §0.1–0.4, facts-nj-regulatory-climate.md, facts-materials-economics.md §7' },
  { id: 'best-roofing-for-flat-roofs', packs: 'facts-components-specialty.md, facts-replacement-reroofing-insurance.md, facts-energy-solar.md §0.3–0.4, facts-nj-regulatory-climate.md, facts-materials-economics.md §7' },
  { id: 'best-roofing-for-historic-homes-nj', packs: 'facts-historic-restoration.md §0/§8–9, facts-materials-economics.md, facts-nj-regulatory-climate.md' },
  { id: 'cheapest-vs-most-durable-roofing', packs: 'facts-materials-economics.md §0/§7, facts-cost-stats.md §4/§7, facts-energy-solar.md §0.3–0.4' },
  { id: 'most-energy-efficient-roofing-materials', packs: 'facts-energy-solar.md §0, facts-nj-regulatory-climate.md, facts-components-specialty.md' },
  { id: 'best-roofing-for-essex-county-colonial-homes', packs: 'facts-historic-restoration.md, facts-materials-economics.md, facts-nj-regulatory-climate.md' },
  { id: 'roof-warranty-comparison-guide', packs: 'GAP-decision-helpers.md, facts-nj-regulatory-climate.md §2, facts-process-standards.md, facts-components-specialty.md' },
]

const FIX_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['comparisonId', 'editsApplied', 'sweeps', 'notes'],
  properties: {
    comparisonId: { type: 'string' },
    editsApplied: { type: 'array', items: { type: 'string' }, description: 'one line per confirmed finding id applied' },
    sweeps: { type: 'array', items: { type: 'string' }, description: 'patterns swept across the whole object beyond the single flagged instance' },
    notes: { type: 'string', description: 'any finding intentionally NOT applied + why, or confirmation all applied' },
  },
}

phase('Fix')
const results = await parallel(ITEMS.map((it) => () => agent(
  `You are a precise content fixer for Newark Quality Roofing. Apply the CONFIRMED review findings to ONE decision-helper comparison's snippet. Each finding carries an exact before→after fix; apply it, and SWEEP the WHOLE object for every other instance of the same defect pattern (per-item reviewers flag ONE instance; the same over-attribution / unsourced figure / self-stat / brand-rank usually recurs — fix them ALL).

COMPARISON: ${it.id}
SNIPPET TO EDIT (in place): ${OUT}/${it.id}.snippet.ts
CONFIRMED FINDINGS (apply every one): ${OUT}/findings-${it.id}.json
FACT PACKS (verify replacements trace to a named line): ${it.packs} — in ${R}/ , GAP-* in ${OUT}/
RULESET: ${RULESET}. Gold exemplar shape: ${GOLD} comparisonId 'asphalt-shingles-vs-metal-roofing'.

RULES FOR FIXING:
1. Apply each confirmedFinding's 'fix' (before→after). RELOCATE facts to the body, NEVER delete a real fact — only remove an unsourced number/attribution, a self-stat, a brand-rank, or reword.
2. SWEEP: for any finding about an over-attributed source, an unsourced figure (fabricated $/yr, fabricated lifecycle total, unsourced reflectance/wind), a NQR self-stat ("we warranty/register/install", "thousands of installations", "15+ years"), a brand rank ("best warranty"), or a stale credit (30% ITC, 25% owner-occupied historic credit), grep the ENTIRE object and apply the same correction to EVERY occurrence — comparisonRows cells, verdict, detailedAnalysis, njSpecific, residential, commercial, faqs, directAnswer, introParagraphs.
3. PRESERVE the bold-safe field map: '**bold**' stays ONLY in directAnswer / introParagraphs[] / verdict.{winner,reasoning,alternateScenario} / detailedAnalysis[].content[] / njSpecific.content[] / residentialSection.content[] / commercialSection.content[] / faqs[].answer. NEVER put '**' in a heading, introHeading, comparisonRows cell, faqs[].question, or metaDescription.
4. PRESERVE answer-first ≤40 words on every lead: directAnswer, introParagraphs[0], each detailedAnalysis[].content[0], njSpecific.content[0], residentialSection.content[0], commercialSection.content[0], and each faqs[].answer first sentence. If a fix would push a lead over 40 words, tighten elsewhere in that lead to stay ≤40.
5. PRESERVE R3 strict body↔lead bold (each body paragraph opens by re-bolding a lead OPTION) and schema array caps (introParagraphs ≤3, detailedAnalysis ≤5 each content ≤4, njSpecific/residential/commercial.content ≤3, comparisonRows 4–15, faqs 4–6). Do NOT change comparisonId.
6. No modality (will/should/need to/must/may/might) in body prose. No de-fab literals, no NQR self-stats, no brand ranking, no unsourced superlatives anywhere.

Edit the snippet file in place with the Read/Edit tools. Then re-read your edited snippet once to confirm it is still a single valid '{ … }' object literal. Return the structured summary.`,
  { label: `fix:${it.id}`, phase: 'Fix', schema: FIX_SCHEMA },
)))

return { fixed: results.filter(Boolean) }
