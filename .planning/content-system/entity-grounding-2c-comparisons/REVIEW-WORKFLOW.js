export const meta = {
  name: 'eg2c-comparison-review',
  description: 'Adversarial review→refute of the 29 spliced comparison definitions (accuracy, figure-free, answer-first, de-fab, cross-consistency)',
  phases: [
    { title: 'Review', detail: '29 reviewers, one per comparison definition' },
    { title: 'Refute', detail: 'adversarial refutation of med/high findings' },
  ],
};

// authoritative 2a sibling definitions (for entity-stability cross-check)
const BANK = `
roof-repair: restores a roof's weatherproof barrier by fixing localized damage without replacing the entire roof.
roof-replacement: strips a roof to the deck, repairs sheathing, installs a new underlayment-and-cover system.
emergency-roof-repair: stabilizes a sudden roof failure to stop water entry before the loss compounds.
roof-maintenance-programs: a recurring schedule of inspection, drainage clearing, sealant maintenance, documentation.
asphalt-shingle-roofing: overlapping fiberglass-mat shingles surfaced with mineral granules; 3-tab and architectural.
slate-roof-installation-repair: quarried natural-stone tiles on copper or stainless fasteners; among longest-lived.
tile-roof-installation-repair: clay or concrete tile over waterproof underlayment; underlayment carries water resistance.
metal-roof-installation-repair: steel/aluminum/copper/zinc, concealed- or exposed-fastener panels or shingles.
wood-shake-roofing / cedar-shake-roofing: hand-split western red cedar over an air-spaced (ventilated) deck.
tpo-roofing-installation: single-ply thermoplastic-polyolefin membrane, heat-welded seams, reflective cool roof.
rubber-roofing-epdm: single-ply EPDM (ethylene propylene diene monomer) synthetic-rubber membrane, sealed at laps.
pvc-roofing: single-ply polyvinyl-chloride membrane, hot-air-welded seams, grease/chemical resistant, white cool roof.
modified-bitumen-roofing: multi-ply polymer-modified (SBS or APP) asphalt cap sheet over base plies.
built-up-roofing: alternating reinforcing fabric/felt and hot bitumen, surfaced with gravel/granules/coating.
spray-foam-roofing: closed-cell polyurethane sprayed seamless, bonds to substrate, under a protective coating.
green-roof-installation: planted assembly over membrane/root barrier/drainage/growing media/vegetation.
solar-shingle-installation: building-integrated PV shingles that ARE the roof surface (vs rack-mounted panels).
solar-panel-roofing-installation: rack-mounted PV array on flashed mount feet over an existing roof.
silicone-roof-coating: liquid-applied membrane restoring a low-slope roof in place; reflective, ponding-resistant.
roof-overlay-installation: new shingle layer over ONE existing sound layer; limited to one existing layer.
full-roof-tear-off: removes all covering/underlayment/flashing to bare deck; exposes sheathing.
`;

const FILE = {
  m: 'src/data/comparison-content/material-vs-material.ts',
  s: 'src/data/comparison-content/service-vs-service.ts',
  d: 'src/data/comparison-content/decision-helper.ts',
};
const TARGETS = [
  { id: 'slate-vs-tile-roofing', f: FILE.m, kind: 'twosided', a: 'Slate', b: 'Tile' },
  { id: 'tpo-vs-epdm-roofing', f: FILE.m, kind: 'twosided', a: 'TPO', b: 'EPDM' },
  { id: 'metal-vs-tile-roofing', f: FILE.m, kind: 'twosided', a: 'Metal', b: 'Tile' },
  { id: 'asphalt-vs-slate-roofing', f: FILE.m, kind: 'twosided', a: 'Asphalt', b: 'Slate' },
  { id: 'wood-shake-vs-asphalt-shingles', f: FILE.m, kind: 'twosided', a: 'Wood Shake', b: 'Asphalt Shingles' },
  { id: 'pvc-vs-tpo-roofing', f: FILE.m, kind: 'twosided', a: 'PVC', b: 'TPO' },
  { id: 'standing-seam-vs-corrugated-metal', f: FILE.m, kind: 'twosided', a: 'Standing Seam', b: 'Corrugated Metal' },
  { id: 'modified-bitumen-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Modified Bitumen', b: 'TPO' },
  { id: 'rubber-roofing-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Rubber (EPDM)', b: 'TPO' },
  { id: 'cedar-shake-vs-wood-shingle', f: FILE.m, kind: 'twosided', a: 'Cedar Shake', b: 'Wood Shingle' },
  { id: 'built-up-roofing-vs-modified-bitumen', f: FILE.m, kind: 'twosided', a: 'Built-Up Roofing', b: 'Modified Bitumen' },
  { id: 'spray-foam-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Spray Foam', b: 'TPO' },
  { id: 'green-roof-vs-traditional-roofing', f: FILE.m, kind: 'twosided', a: 'Green Roof', b: 'Traditional Roofing' },
  { id: 'solar-shingles-vs-solar-panels', f: FILE.m, kind: 'twosided', a: 'Solar Shingles', b: 'Solar Panels' },
  { id: 'architectural-vs-3-tab-shingles', f: FILE.m, kind: 'twosided', a: 'Architectural Shingles', b: '3-Tab Shingles' },
  { id: 'roof-repair-vs-replacement', f: FILE.s, kind: 'twosided', a: 'Roof Repair', b: 'Roof Replacement' },
  { id: 'roof-coating-vs-replacement', f: FILE.s, kind: 'twosided', a: 'Roof Coating', b: 'Roof Replacement' },
  { id: 'roof-overlay-vs-tear-off', f: FILE.s, kind: 'twosided', a: 'Roof Overlay', b: 'Tear Off' },
  { id: 'patching-vs-full-roof-repair', f: FILE.s, kind: 'twosided', a: 'Patching', b: 'Full Roof Repair' },
  { id: 'preventive-maintenance-vs-emergency-repair', f: FILE.s, kind: 'twosided', a: 'Preventive Maintenance', b: 'Emergency Repair' },
  { id: 'diy-vs-professional-roof-repair', f: FILE.s, kind: 'twosided', a: 'DIY Repair', b: 'Professional Repair' },
  { id: 'best-roofing-material-nj-weather', f: FILE.d, kind: 'ranking' },
  { id: 'best-commercial-roofing-material', f: FILE.d, kind: 'ranking' },
  { id: 'best-roofing-for-flat-roofs', f: FILE.d, kind: 'ranking' },
  { id: 'best-roofing-for-historic-homes-nj', f: FILE.d, kind: 'ranking' },
  { id: 'cheapest-vs-most-durable-roofing', f: FILE.d, kind: 'ranking' },
  { id: 'most-energy-efficient-roofing-materials', f: FILE.d, kind: 'ranking' },
  { id: 'best-roofing-for-essex-county-colonial-homes', f: FILE.d, kind: 'ranking' },
  { id: 'roof-warranty-comparison-guide', f: FILE.d, kind: 'ranking' },
];

const REVIEW_RULES = `
You are an ADVERSARIAL roofing-content reviewer. A definition was just added to a comparison page. Find real, substantiated problems ONLY — default to "no finding" unless you can name the standard or the object's own committed content that the definition contradicts.

Check the definition field(s) on this page against:
1. MATERIAL/CONCEPT FACTUAL ACCURACY — is the composition, form, chemistry, and function correct per roofing standards (InterNACHI/NRCA/ASTM/manufacturer convention)? E.g. EPDM = ethylene propylene diene monomer (a thermoSET rubber, NOT thermoplastic); TPO/PVC = thermoplastic (heat/hot-air-weldable); standing seam = concealed fasteners; corrugated = exposed fasteners; spray foam = closed-cell polyurethane; slate fasteners = non-ferrous copper/stainless. Flag any mischaracterization.
2. INTERNAL CONSISTENCY — does the definition contradict the SAME page's committed comparisonRows / introParagraphs? (Read the object in its file.) The definition must not state a fact the page's own rows contradict.
3. CROSS-CONSISTENCY — for a side that maps to a 2a sibling entity (bank provided), the composition/form must stay entity-stable (same facts, may be reworded). Flag drift that changes a fact.
4. FIGURE-FREE — the definition must carry NO prices, lifespans, percentages, year counts, or unit figures. Flag any.
5. ANSWER-FIRST — first sentence ≤40 words; exactly one bold span at the very start naming the heading's subject; no modality verbs (will/should/must/need to/can) in the declarative.
6. DE-FAB — no invented guarantee, no unanchored superlative ("best"/"longest-lasting"/"premium" as a claim), no company self-promotion. For RANKING pages, the single definition must define the category/trade-off and what the comparison weighs — it must NOT declare a fabricated single "winner".

Return findings as a list. Each: severity (low|med|high), field (definitionA|definitionB|definition|definitionHeading), issue (the substantiated problem), suggestedFix (a concrete corrected string or precise edit). If clean, return an empty findings list. Low = style/precision; med = a fact that is arguably wrong or imprecise; high = a clear factual error or a gate breach.

2a SIBLING DEFINITION BANK (for cross-consistency):
${BANK}
`;

const REVIEW_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    comparisonId: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['low', 'med', 'high'] },
          field: { type: 'string' },
          issue: { type: 'string' },
          suggestedFix: { type: 'string' },
        },
        required: ['severity', 'field', 'issue', 'suggestedFix'],
      },
    },
  },
  required: ['comparisonId', 'findings'],
};

const REFUTE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    verdict: { type: 'string', enum: ['confirmed', 'refuted'] },
    reasoning: { type: 'string' },
  },
  required: ['verdict', 'reasoning'],
};

phase('Review');
const reviews = await parallel(
  TARGETS.map((t) => () => {
    const label = t.kind === 'twosided' ? `${t.a} vs ${t.b}` : t.id;
    return agent(
      `${REVIEW_RULES}\n\nPAGE: comparison "${t.id}" in ${t.f} (${t.kind}${t.a ? `, itemA="${t.a}", itemB="${t.b}"` : ', ranking'}).\nRead the object (grep comparisonId: '${t.id}' in ${t.f}) and review its definition field(s). Label: ${label}.`,
      { label: `review:${t.id}`, phase: 'Review', schema: REVIEW_SCHEMA }
    );
  })
).then((r) => r.filter(Boolean));

// flatten med/high for refutation; auto-confirm low
const flat = [];
for (const r of reviews) for (const f of r.findings || []) flat.push({ ...f, comparisonId: r.comparisonId });
const lows = flat.filter((f) => f.severity === 'low');
const medHigh = flat.filter((f) => f.severity !== 'low');
log(`reviews: ${flat.length} findings (${medHigh.length} med/high to refute, ${lows.length} low auto-confirmed)`);

phase('Refute');
const refuted = await parallel(
  medHigh.map((f) => () =>
    agent(
      `You DEFEND the original definition. A reviewer claims a problem with comparison "${f.comparisonId}" field ${f.field}:\nISSUE: ${f.issue}\nSUGGESTED FIX: ${f.suggestedFix}\n\nRead the object (grep comparisonId: '${f.comparisonId}' in src/data/comparison-content/) and the relevant roofing standard. Decide: is this a REAL error that must be fixed (confirmed), or is the original defensible/correct (refuted)? Default to "refuted" unless the error is substantiated by a named standard or the page's own committed rows. Return verdict + one-line reasoning.`,
      { label: `refute:${f.comparisonId}:${f.field}`, phase: 'Refute', schema: REFUTE_SCHEMA }
    ).then((v) => ({ ...f, ...(v || { verdict: 'confirmed', reasoning: 'refuter died — keep for manual review' }) }))
  )
).then((r) => r.filter(Boolean));

const confirmed = [...lows.map((f) => ({ ...f, verdict: 'confirmed', reasoning: 'low auto-confirmed' })),
  ...refuted.filter((f) => f.verdict === 'confirmed')];

return {
  totalFindings: flat.length,
  confirmedCount: confirmed.length,
  confirmed,
  refutedOut: refuted.filter((f) => f.verdict === 'refuted'),
};
