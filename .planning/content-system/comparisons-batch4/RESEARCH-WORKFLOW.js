export const meta = {
  name: 'cmp4-gap-research',
  description: 'Tight gap-research for CMP-4 warranty page: commercial NDL + manufacturer-warranty void causes + transferability; consolidate existing-pack pointers into one governing GAP pack',
  phases: [
    { title: 'Research', detail: '2 web researchers — NDL/system mechanics + void-causes/transferability' },
    { title: 'Critic', detail: '1 completeness/currency critic' },
    { title: 'Synthesize', detail: '1 synthesizer writes GAP-decision-helpers.md' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch4`
const R = `${REPO}/.planning/content-system/research`

const RESEARCH_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['topic', 'facts'],
  properties: {
    topic: { type: 'string' },
    facts: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'figure', 'source', 'url', 'currency', 'confidence'],
        properties: {
          claim: { type: 'string' },
          figure: { type: 'string', description: 'the exact figure/term, or "qualitative" if none' },
          source: { type: 'string', description: 'named source to cite in-text (no link in the page)' },
          url: { type: 'string' },
          currency: { type: 'string', description: 'as-of date / edition' },
          confidence: { type: 'string', enum: ['low', 'med', 'high'] },
        },
      },
    },
  },
}

phase('Research')
const research = await parallel([
  () => agent(
    `You are a roofing-warranty researcher. Use web search to gather PRIMARY/NAMED-SOURCE facts on COMMERCIAL roof warranty STRUCTURE for a Newark Quality Roofing (NJ) decision-helper page. Focus:
- Commercial "No-Dollar-Limit (NDL)" manufacturer membrane warranty: exact definition (covers labor + materials to repair/maintain watertightness with NO dollar cap and no depreciation/proration), typical term range (e.g. 10/15/20/30 yr), the requirement that it be issued by the membrane manufacturer after a manufacturer-inspected install, and that it commonly requires periodic/maintenance inspections to stay valid.
- How NDL differs from a standard "material-only" or "system" warranty and from a contractor workmanship warranty.
- Single-ply (TPO/EPDM/PVC) manufacturer warranty terms in general structural terms (manufacturer names allowed ONLY as neutral examples, e.g. Carlisle, GAF, Johns Manville, Firestone/Holcim — NOT ranked "best").
Cite each fact to a NAMED source + URL (manufacturer warranty docs, NRCA, IIBEC, commercial-roofing trade sources). NO invented numbers. Mark currency + confidence. Return the structured object (topic, facts[]).`,
    { label: 'research:commercial-NDL', phase: 'Research', schema: RESEARCH_SCHEMA },
  ),
  () => agent(
    `You are a roofing-warranty researcher. Use web search to gather PRIMARY/NAMED-SOURCE facts on what VOIDS a roofing warranty and on warranty TRANSFERABILITY for a Newark Quality Roofing (NJ) decision-helper page. Focus:
- The most common manufacturer-warranty void causes: inadequate attic ventilation (the leading cause), unauthorized repairs/modifications, improper installation by a non-credentialed installer, failure to register the warranty within the required window, mounting equipment (satellite/solar) without proper flashing, and deferred maintenance. Cite manufacturer warranty language + NRCA/InterNACHI.
- Transferability mechanics generally: most manufacturer warranties are transferable ONCE (original owner → first subsequent buyer) with registration within a stated window (e.g. 60 days), and transferred coverage is often reduced — give the GENERAL pattern with a named source, not a brand ranking.
- The distinction between a manufacturer warranty (covers material defects, survives contractor closure) and a contractor workmanship warranty (covers installation, only as durable as the contractor's business; NRCA notes no industry standard requires a minimum length).
- Confirm the attic-ventilation requirement basis (IRC R806 intake/exhaust; manufacturer ventilation specs).
Cite each fact to a NAMED source + URL. NO invented numbers. Mark currency + confidence. Return the structured object (topic, facts[]).`,
    { label: 'research:void-transfer', phase: 'Research', schema: RESEARCH_SCHEMA },
  ),
])

phase('Critic')
const critic = await agent(
  `You are a completeness + currency critic for a CMP-4 warranty gap-research pack. Below are 2 researcher outputs (JSON). Identify: (1) any claim WITHOUT a named source or with low confidence that the synthesizer must drop or hedge; (2) any missing fact the warranty decision-helper page needs (NDL definition, void causes, transferability, manufacturer-vs-contractor distinction, NJ written-warranty disclosure); (3) any figure at risk of being stale. Return a concise prose critique with explicit KEEP / HEDGE / DROP rulings per questionable fact.

RESEARCHER OUTPUTS:
${JSON.stringify(research.filter(Boolean), null, 2)}`,
  { label: 'critic:warranty', phase: 'Critic' },
)

phase('Synthesize')
const summary = await agent(
  `You are the synthesizer for the CMP-4 decision-helper gap pack. WRITE the pack to disk at ${OUT}/GAP-decision-helpers.md (use the Write tool — the file IS the deliverable). Then return a 4–6 line summary.

The pack governs the rewrite of the 'roof-warranty-comparison-guide' decision-helper page (and provides reflectance/historic pointers for the other 7). It must follow the Semantic Content Ruleset: every figure tied to a NAMED source (no outbound links on the page), no invented numbers, no brand ranking.

INPUTS:
- Researcher facts (JSON): ${JSON.stringify(research.filter(Boolean), null, 2)}
- Critic rulings (apply them — DROP/HEDGE what the critic flagged): ${critic}

STRUCTURE the pack with these sections:
## 0. CRITICAL GUARDRAILS (read first)
  - GENERICIZE: the warranty page is rewritten around warranty STRUCTURE/TYPES, NOT a brand ranking. Name a manufacturer program (GAF Golden Pledge, CertainTeed SureStart PLUS) ONLY as a neutral manufacturer-attributed EXAMPLE — never "best", never ranked.
  - State each warranty term as a manufacturer-set fact ("terms set and registered by the manufacturer, not by Newark Quality Roofing").
## 1. Warranty structure (POINTERS to existing packs — do NOT re-state, cite these)
  - facts-process-standards.md §101–102 (limited-lifetime non-prorated window commonly 10–15 yrs, then prorated — NRCA), §125 (GAF Golden Pledge 50-yr material non-prorated / 25-yr workmanship + 5 qualifying accessories), §145 (CertainTeed SureStart PLUS 50-yr non-prorated material / 25-yr workmanship, register within 60 days, transferable if sold within 15 years), §157–159 (workmanship 1–5 std / 10–25 certified; material 20–50 yr, non-prorated window 10–15 yr).
  - facts-causes-signs.md §41 (contractor workmanship often only 1–2 yrs; NRCA: no industry standard requires longer).
## 2. Commercial NDL (No-Dollar-Limit) warranty — NEW (from research, named sources)
## 3. What voids a warranty + transferability — NEW (from research, named sources)
## 4. NJ written-warranty / consumer law (POINTERS)
  - facts-nj-regulatory-climate.md §2 (HIC registration N.J.S.A. 56:8-136, $0 floor, registration-number display; written home-improvement contract over threshold must include legal name/address/registration number + CGL insurance certificate, N.J.A.C. 13:45A-16/17; NJ Division of Consumer Affairs recourse).
## 5. Cross-page pointers (so authors do NOT re-research)
  - Reflectance/cool-roof: facts-energy-solar.md §0 (solar reflectance + thermal emittance per CRRC; EPA 11–27% PEAK cooling; DOE >50°F cooler; LBNL clean white roof ~80% reflective ~55°F cooler; coatings/reflective add NO R-value; §25D ITC repealed). Use these — do not invent reflectance %.
  - Historic credits/COA: facts-historic-restoration.md §0/§10 (§47 HTC income-producing-only; §25D/§25C repealed P.L. 119-21; S3545 NOT law; the local Certificate of Appropriateness under N.J.S.A. 40:55D-107 is the binding private-owner gate, NOT a Register listing alone).

Every NEW figure in §2/§3 must carry its named source inline. Keep it tight and authoritative.`,
  { label: 'synth:gap-pack', phase: 'Synthesize' },
)

return { synthesized: `${OUT}/GAP-decision-helpers.md`, summary }
