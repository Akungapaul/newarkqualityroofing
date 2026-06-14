export const meta = {
  name: 'eg2c-comparison-definitions',
  description: 'Entity-grounding 2c: author definitionA/B (21 two-sided) + definition/definitionHeading (8 ranking) for 29 comparisons',
  phases: [{ title: 'Author', detail: '29 comparison-definition agents in parallel' }],
};

// ─── 2a canonical service/material definition bank (reuse facts entity-stably) ───
const BANK = `
roof-repair: **Roof repair** restores a roof's weatherproof barrier by fixing localized damage — leaks, missing or torn shingles, failed flashing, and cracked seals — without replacing the entire roof. It targets specific failure points to extend the service life of an otherwise sound roof.
roof-replacement: **Roof replacement** strips a roof down to the deck, repairs the sheathing, and installs a new underlayment-and-cover system in asphalt, metal, slate, or low-slope membrane. It rebuilds the entire weatherproof assembly for a roof past its service life rather than patching isolated damage.
emergency-roof-repair: **Emergency roof repair** stabilizes a sudden roof failure — an active leak, storm-stripped shingles, a fallen-tree puncture, or ice-dam backup — to stop water entry before the loss compounds. It tarps or patches the breach first, then schedules the permanent repair.
roof-maintenance-programs: **A roof maintenance program** is a recurring schedule of roof inspection, drainage clearing, sealant maintenance, and documentation that keeps a roof tracking toward its full service life. It catches deterioration early rather than reacting after a leak appears.
asphalt-shingle-roofing: **Asphalt shingle roofing** covers a sloped roof in overlapping fiberglass-mat shingles surfaced with mineral granules, laid over underlayment, an ice barrier, drip edge, and flashing into a water-shedding system. It is the most common residential roof covering and comes in flat 3-tab and dimensional architectural profiles.
slate-roof-installation-repair: **Slate roof installation and repair** sets quarried natural-stone tiles on copper or stainless-steel fasteners as a roof covering, and restores an existing slate roof by replacing broken tiles, resecuring corroded fasteners, and renewing failed flashing. Natural slate is among the longest-lived roof coverings.
tile-roof-installation-repair: **Tile roof installation and repair** sets a clay or concrete tile covering over a waterproof underlayment. The underlayment carries the water resistance while the tile sheds rainfall.
metal-roof-installation-repair: **Metal roof installation and repair** fits a concealed-fastener or exposed-fastener metal covering to the roof deck in steel, aluminum, copper, or zinc panels or shingles.
commercial-metal-roofing: **Commercial metal roofing** is a roof covering of formed metal panels — steel, aluminum, or copper — fitted as concealed-fastener standing-seam or exposed-fastener systems.
wood-shake-roofing: **Wood shake roofing** covers a sloped roof in hand-split or tapersawn western red cedar laid over a ventilated assembly that lets each course dry from the underside after rainfall.
cedar-shake-roofing: **Cedar shake roofing** covers a sloped roof in hand-split western red cedar set over an air-spaced deck. Western red cedar carries natural extractives that resist decay.
tpo-roofing-installation: **TPO roofing** is a single-ply thermoplastic-polyolefin membrane, heat-welded at the seams, installed on commercial and residential low-slope and flat roofs as a reflective, water-shedding surface.
rubber-roofing-epdm: **Rubber roofing EPDM** is a single-ply ethylene propylene diene monomer membrane that waterproofs a flat or low-slope roof, bonded to the deck or insulation and sealed at the laps.
epdm-commercial-roofing: **EPDM commercial roofing** is a single-ply synthetic-rubber membrane installed on flat and low-slope commercial roofs to seal the building against water entry.
pvc-roofing: **PVC roofing** is a single-ply polyvinyl-chloride thermoplastic membrane, hot-air-welded at the seams. The white membrane resists grease, oils, and chemical exhaust and reflects solar radiation as a cool roof.
modified-bitumen-roofing: **Modified bitumen roofing** is a multi-ply low-slope membrane that layers a polymer-modified asphalt cap sheet over base plies. The polymer modifier, styrene-butadiene-styrene or atactic polypropylene, adds flexibility to the redundant assembly.
built-up-roofing: **Built-up roofing** is a low-slope membrane that alternates layers of reinforcing fabric and hot bitumen on the deck, then surfaces the plies with gravel, mineral granules, or a reflective coating.
spray-foam-roofing: **Spray foam roofing** sprays liquid polyurethane that expands into a closed-cell foam, bonds to the substrate, and cures into a seamless, monolithic insulation-and-waterproofing layer under a protective coating.
green-roof-installation: **Green roof installation** converts a low-slope roof into a planted assembly, stacking a waterproofing membrane, root barrier, drainage and water-retention layer, engineered growing media, and vegetation.
solar-shingle-installation: **Solar shingle installation** replaces a roof covering with building-integrated photovoltaic shingles that generate electricity while serving as the roof itself, distinct from rack-mounted panels added on top of a finished roof.
solar-panel-roofing-installation: **Solar panel roofing installation** is the roofing work that supports a rack-mounted photovoltaic array — flashing each mount foot watertight, verifying the roof structure carries the added load, and matching the attachment detail to the roof-covering warranty.
silicone-roof-coating: **Silicone roof coating** is a liquid-applied silicone membrane that restores a low-slope or flat roof in place, sealing seams, splits, and flashings under one monolithic surface. It reflects sunlight and resists ponding water.
roof-overlay-installation: **Roof overlay installation** applies a new layer of asphalt shingles directly over one existing sound shingle layer without removing the old covering. It is limited to a roof carrying no more than one existing layer.
full-roof-tear-off: **Full roof tear off** removes every existing layer of roof covering, underlayment, and flashing down to the bare deck before a new roof system is installed. It exposes the sheathing for inspection and repair, unlike a recover that leaves the old covering in place.
historic-roof-restoration: **Historic roof restoration** repairs deteriorated original roofing on a period building rather than replacing it, and matches any necessary replacement to the old roof in design, color, texture, and, where possible, material.
energy-efficient-roofing-solutions: **Energy efficient roofing solutions** combine a high-reflectance surface that rejects solar heat with conductive insulation that slows heat flow into the building below.
`;

// ─── Authoring contract (shared) ───────────────────────────────────────────
const SPEC = `
You are writing an entity-grounding **definition** for a roofing comparison page on Newark Quality Roofing's site. This is an ADDITIVE backfill: you write ONLY the new definition field(s) as data — you do NOT rewrite the page.

HARD RULES (a build-failing audit enforces these):
- Answer-first: the FIRST SENTENCE is a complete, definitive definition of the entity, and it is **≤40 words** (count standalone " — " em-dashes as word tokens — they DO count). You may add 1 more sentence after it (2 sentences max total).
- FIGURE-FREE: NO prices, no dollar amounts, no lifespan numbers, no percentages, no year counts in the definition. Define WHAT the entity IS (composition, form, function, where it goes), not its stats. (Figures live in the page's rows/body, never the definition.)
- Pre-bold the central entity ONCE at the very start with **markdown bold**, and the bolded span MUST be the entity the heading names (e.g. heading "What Is Slate?" → start "**Slate** is …"). Use the heading's exact subject as the bolded lead.
- NO modality verbs in the declarative definition: no "will", "should", "must", "need to", "can".
- NO superlatives you cannot anchor ("best", "longest-lasting", "most durable", "premium") unless it is a plain factual category statement (e.g. "among the longest-lived roof coverings" is acceptable for natural slate; "the best roof" is NOT).
- NO outbound links, NO company self-promotion, NO invented guarantees.
- Match this committed gold exemplar's shape exactly (asphalt-shingles-vs-metal-roofing):
  definitionA: "**Asphalt shingles** are layered roof coverings built from a fiberglass mat saturated in asphalt and surfaced with mineral granules. They are the most common residential roofing material installed across the United States."
  definitionB: "**Metal roofing** is a roof covering formed from steel, aluminum, copper, or zinc, installed as standing-seam panels or interlocking shingles. It sheds water as a continuous, non-porous surface."

GROUNDING: Reuse the FACTS from the 2a definition bank below where a side maps to one of those entities (keep the composition/form/function consistent — entity-stable), but phrase the bolded subject to match THIS page's label. Where no bank entity matches, ground the definition in the comparison object's own committed rows/intro (Read the file) — introduce NO fact not present in the bank or that object.

2a DEFINITION BANK (id: definition):
${BANK}
`;

const DEF_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    comparisonId: { type: 'string' },
    kind: { type: 'string', enum: ['twosided', 'ranking'] },
    definitionA: { type: 'string', description: 'two-sided only: ≤40w first sentence, bolded lead = itemA label' },
    definitionB: { type: 'string', description: 'two-sided only: ≤40w first sentence, bolded lead = itemB label' },
    definitionHeading: { type: 'string', description: 'ranking only: grammatical "What Is …?" question heading' },
    definition: { type: 'string', description: 'ranking only: ≤40w first sentence single definition of the page concept/category' },
    notes: { type: 'string', description: 'one line: what you reused vs authored fresh' },
  },
  required: ['comparisonId', 'kind'],
};

const FILE = {
  m: 'src/data/comparison-content/material-vs-material.ts',
  s: 'src/data/comparison-content/service-vs-service.ts',
  d: 'src/data/comparison-content/decision-helper.ts',
};

// 21 two-sided (asphalt-vs-metal kept) + 8 ranking single-block = 29
const TARGETS = [
  // ── material-vs-material two-sided (15) ──
  { id: 'slate-vs-tile-roofing', f: FILE.m, kind: 'twosided', a: 'Slate', b: 'Tile', hint: 'A→slate-roof-installation-repair; B→tile-roof-installation-repair' },
  { id: 'tpo-vs-epdm-roofing', f: FILE.m, kind: 'twosided', a: 'TPO', b: 'EPDM', hint: 'A→tpo-roofing-installation; B→rubber-roofing-epdm/epdm-commercial-roofing' },
  { id: 'metal-vs-tile-roofing', f: FILE.m, kind: 'twosided', a: 'Metal', b: 'Tile', hint: 'A→metal-roof-installation-repair; B→tile-roof-installation-repair' },
  { id: 'asphalt-vs-slate-roofing', f: FILE.m, kind: 'twosided', a: 'Asphalt', b: 'Slate', hint: 'A→asphalt-shingle-roofing (label "Asphalt" = asphalt shingles); B→slate' },
  { id: 'wood-shake-vs-asphalt-shingles', f: FILE.m, kind: 'twosided', a: 'Wood Shake', b: 'Asphalt Shingles', hint: 'A→wood-shake-roofing/cedar-shake-roofing; B→asphalt (match exemplar definitionA wording)' },
  { id: 'pvc-vs-tpo-roofing', f: FILE.m, kind: 'twosided', a: 'PVC', b: 'TPO', hint: 'A→pvc-roofing; B→tpo-roofing-installation' },
  { id: 'standing-seam-vs-corrugated-metal', f: FILE.m, kind: 'twosided', a: 'Standing Seam', b: 'Corrugated Metal', hint: 'A→concealed-fastener metal panel (metal bank); B→exposed-fastener corrugated panel (author fresh from object rows)' },
  { id: 'modified-bitumen-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Modified Bitumen', b: 'TPO', hint: 'A→modified-bitumen-roofing; B→tpo-roofing-installation' },
  { id: 'rubber-roofing-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Rubber (EPDM)', b: 'TPO', hint: 'A→rubber-roofing-epdm (label "Rubber (EPDM)"); B→tpo-roofing-installation' },
  { id: 'cedar-shake-vs-wood-shingle', f: FILE.m, kind: 'twosided', a: 'Cedar Shake', b: 'Wood Shingle', hint: 'A→cedar-shake-roofing (hand-split); B→author fresh = machine-sawn uniform wood shingle (contrast hand-split shake), from object rows' },
  { id: 'built-up-roofing-vs-modified-bitumen', f: FILE.m, kind: 'twosided', a: 'Built-Up Roofing', b: 'Modified Bitumen', hint: 'A→built-up-roofing; B→modified-bitumen-roofing' },
  { id: 'spray-foam-vs-tpo', f: FILE.m, kind: 'twosided', a: 'Spray Foam', b: 'TPO', hint: 'A→spray-foam-roofing; B→tpo-roofing-installation' },
  { id: 'green-roof-vs-traditional-roofing', f: FILE.m, kind: 'twosided', a: 'Green Roof', b: 'Traditional Roofing', hint: 'A→green-roof-installation; B→author fresh = conventional non-vegetated covering (membrane/shingle) as the contrast, from object rows' },
  { id: 'solar-shingles-vs-solar-panels', f: FILE.m, kind: 'twosided', a: 'Solar Shingles', b: 'Solar Panels', hint: 'A→solar-shingle-installation (BIPV); B→solar-panel-roofing-installation (rack-mounted)' },
  { id: 'architectural-vs-3-tab-shingles', f: FILE.m, kind: 'twosided', a: 'Architectural Shingles', b: '3-Tab Shingles', hint: 'A→asphalt laminated/dimensional two-layer; B→asphalt single flat layer with three cut tabs (from object rows)' },
  // ── service-vs-service two-sided (6) ──
  { id: 'roof-repair-vs-replacement', f: FILE.s, kind: 'twosided', a: 'Roof Repair', b: 'Roof Replacement', hint: 'A→roof-repair (reuse verbatim facts); B→roof-replacement (reuse verbatim facts)' },
  { id: 'roof-coating-vs-replacement', f: FILE.s, kind: 'twosided', a: 'Roof Coating', b: 'Roof Replacement', hint: 'A→silicone-roof-coating generalized to "roof coating" (liquid-applied membrane restoring in place); B→roof-replacement' },
  { id: 'roof-overlay-vs-tear-off', f: FILE.s, kind: 'twosided', a: 'Roof Overlay', b: 'Tear Off', hint: 'A→roof-overlay-installation; B→full-roof-tear-off' },
  { id: 'patching-vs-full-roof-repair', f: FILE.s, kind: 'twosided', a: 'Patching', b: 'Full Roof Repair', hint: 'A→author fresh = single isolated patch of one damaged area; B→roof-repair = corrects all related defects/root cause in one visit (from object rows)' },
  { id: 'preventive-maintenance-vs-emergency-repair', f: FILE.s, kind: 'twosided', a: 'Preventive Maintenance', b: 'Emergency Repair', hint: 'A→roof-maintenance-programs (scheduled recurring inspection); B→emergency-roof-repair' },
  { id: 'diy-vs-professional-roof-repair', f: FILE.s, kind: 'twosided', a: 'DIY Repair', b: 'Professional Repair', hint: 'A→author fresh = homeowner-performed roof repair; B→author fresh = roof repair by a registered NJ Home Improvement Contractor (from object rows; "registered" not "licensed")' },
  // ── decision-helper ranking single-block (8) ──
  { id: 'best-roofing-material-nj-weather', f: FILE.d, kind: 'ranking', name: 'Best Roofing Material for NJ Weather', hint: 'define the page concept: the roofing material best suited to NJ\'s snow/rain/wind/heat climate (define what the comparison weighs). Heading e.g. "What Is the Best Roofing Material for NJ Weather?"' },
  { id: 'best-commercial-roofing-material', f: FILE.d, kind: 'ranking', name: 'Best Commercial Roofing Material', hint: 'define the concept: the low-slope membrane or metal system best matched to a commercial building\'s use and budget. Heading "What Is the Best Commercial Roofing Material?"' },
  { id: 'best-roofing-for-flat-roofs', f: FILE.d, kind: 'ranking', name: 'Best Roofing for Flat Roofs', hint: 'define the concept: a low-slope/flat-roof covering is a continuous waterproof membrane (or coating) since a flat roof cannot shed water by slope. Heading "What Is the Best Roofing for Flat Roofs?"' },
  { id: 'best-roofing-for-historic-homes-nj', f: FILE.d, kind: 'ranking', name: 'Best Roofing for Historic Homes NJ', hint: 'define the concept: an in-kind period-appropriate covering (slate, clay tile, wood, historic metal) matched to a historic home\'s era and any preservation district. Heading "What Is the Best Roofing for Historic Homes in NJ?"' },
  { id: 'cheapest-vs-most-durable-roofing', f: FILE.d, kind: 'ranking', name: 'Cheapest vs Most Durable Roofing', hint: 'define the trade-off concept: the cheapest covering minimizes upfront install cost while the most durable maximizes service life, so the decision weighs cost-per-year of service. Heading "What Is the Cheapest vs Most Durable Roofing Trade-Off?" (or similar grammatical question)' },
  { id: 'most-energy-efficient-roofing-materials', f: FILE.d, kind: 'ranking', name: 'Most Energy Efficient Roofing Materials', hint: 'define the concept: an energy-efficient roof combines a high-reflectance surface and conductive insulation to lower roof surface temperature and cooling load (use energy-efficient-roofing-solutions bank). Heading "What Are the Most Energy Efficient Roofing Materials?" (plural → "What Are")' },
  { id: 'best-roofing-for-essex-county-colonial-homes', f: FILE.d, kind: 'ranking', name: 'Best Roofing for Essex County Colonial Homes', hint: 'define the concept: a covering matched to a Colonial-style home\'s roofline and era — architectural asphalt, slate, cedar, copper, or synthetic slate. Heading "What Is the Best Roofing for Essex County Colonial Homes?"' },
  { id: 'roof-warranty-comparison-guide', f: FILE.d, kind: 'ranking', name: 'Roof Warranty Comparison Guide', hint: 'define the central entity "roof warranty": a written guarantee covering either material defects (manufacturer) or installation quality (contractor workmanship), distinct in scope and duration. Heading "What Is a Roof Warranty?"' },
];

phase('Author');

function promptFor(t) {
  if (t.kind === 'twosided') {
    return `${SPEC}

THIS PAGE: comparison "${t.id}" in ${t.f}. It is a TWO-SIDED comparison: itemA = "${t.a}", itemB = "${t.b}".
REUSE HINTS: ${t.hint}

Read the comparison object (grep comparisonId: '${t.id}' in ${t.f}) to ground any side that is authored fresh in its committed rows/intro — do not invent facts.

Write TWO definitions:
- definitionA: defines "${t.a}". The heading rendered will be "What Is ${t.a}?", so START with **${t.a}** (exact label, bolded) and define it. ≤40-word first sentence, figure-free.
- definitionB: defines "${t.b}". Heading "What Is ${t.b}?", START with **${t.b}** (exact label, bolded). ≤40-word first sentence, figure-free.

Return ONLY the structured object: comparisonId="${t.id}", kind="twosided", definitionA, definitionB, notes.`;
  }
  return `${SPEC}

THIS PAGE: comparison "${t.id}" in ${t.f}. It is a RANKING / decision-helper page (NO itemA/itemB — it ranks multiple materials). Page name: "${t.name}".
GUIDANCE: ${t.hint}

Read the comparison object (grep comparisonId: '${t.id}' in ${t.f}) to ground the definition in its committed rows/intro — do not invent facts.

Write ONE single-block definition of the page's CENTRAL CONCEPT/CATEGORY (not a binary A-vs-B):
- definitionHeading: a grammatical question heading of the form "What Is …?" / "What Are …?" (e.g. "What Is the Best Roofing for Flat Roofs?"). It MUST start with "What Is" or "What Are" and end with "?".
- definition: the answer. START by bolding the heading's subject (e.g. **the best roofing for flat roofs** … or **A roof warranty** …) and give a ≤40-word first-sentence definition. Figure-free, no modality, no fabricated superlative ranking — define what the category IS and what the comparison weighs, not "the winner".

Return ONLY the structured object: comparisonId="${t.id}", kind="ranking", definitionHeading, definition, notes.`;
}

const results = await parallel(
  TARGETS.map((t) => () =>
    agent(promptFor(t), { label: `def:${t.id}`, phase: 'Author', schema: DEF_SCHEMA })
  )
);

const ok = results.filter(Boolean);
log(`authored ${ok.length}/${TARGETS.length} comparison definitions`);
return ok;
