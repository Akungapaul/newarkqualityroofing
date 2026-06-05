export const meta = {
  name: 'batch6-research-energy-solar',
  description: 'Research the energy-solar fact gaps (solar PV mounting, solar shingles/BIPV, cool-roof reflectance + programs, silicone-vs-acrylic coatings, NJ/federal incentives) with named sources + provenance flags; critic pass; synthesize the full facts-energy-solar.md markdown',
  phases: [
    { title: 'Research', detail: 'one web researcher per fact-gap topic → structured named-source facts' },
    { title: 'Critique', detail: 'completeness critic: gaps, contradictions, over-claims to cut' },
    { title: 'Synthesize', detail: 'one writer assembles the full fact-pack markdown' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';

// ─── House rules every researcher must obey ──────────────────────────────────
const RULES = `
You are a roofing-industry fact researcher for Newark Quality Roofing (Newark / Essex County, NJ).
Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: standards bodies (ASTM, UL, NEC/NFPA, IRC/IBC/IFC), federal agencies (DOE, EPA ENERGY STAR, NREL), industry bodies (NRCA, SEIA, SPRI, RCMA, SPFA, CRRC), the NJ Board of Public Utilities (BPU), and named manufacturers. Cost aggregators (HomeGuide, Angi, EnergySage, Fixr) are SECONDARY.

NON-NEGOTIABLE OUTPUT DISCIPLINE (the pages built from this CANNOT fabricate):
- Every hard number/spec MUST carry a NAMED source. If you cannot tie a figure to a real named source, DO NOT assert the number — put it in "unresolved" and state it qualitatively.
- Flag every fact: PRIMARY (a standards body / agency / the actual standard), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named trade org / manufacturer / named aggregator), SECONDARY (generic cost guide), or UNVERIFIED (no named source found).
- Prefer ranges over false precision. Note when a figure is manufacturer-marketing vs independently standardized.
- Surface MYTHS and OVER-CLAIMS authors must avoid (put in "cautions") — e.g. whether roof coatings add meaningful R-value, whether ENERGY STAR still runs a roof-products program, whether "cool roof" helps net energy in a heating-dominated climate like NJ, certification claims NQR cannot make.
- This is for NJ (IRC Climate Zone 4–5, heating-dominated mixed climate). Flag CA-only programs (Title 24) as NOT applicable to NJ.
`;

const TOPICS = [
  {
    key: 'solar-pv-mounting',
    title: 'Solar PV roof mounting & roof integration (for solar-panel-roofing-installation)',
    focus: `How rooftop solar PV attaches to and integrates with the roof, and the roofing-side concerns. Find + name-source:
- Pitched/shingle roof: rail-mounted arrays on roof-penetrating attachments (lag bolts into rafters) with FLASHED mounts/feet; every penetration is flashed + sealed to stay watertight. Name the standard/guidance (NRCA, SEIA, ASCE 7 for loads, manufacturer e.g. IronRidge/Unirac). Distinguish flashed-foot vs deck-seal vs standoff.
- Flat/low-slope commercial: BALLASTED (non-penetrating) racking that holds the array by weight vs mechanically-attached/penetrating; tilt; slip-sheet/protection pad over the membrane; wind-uplift (ASCE 7, SPRI RP-4 ballasted design guide if applicable).
- Added structural dead load of a PV system (lb/sq ft) — find a real sourced figure or flag unresolved.
- Roof-age rule: replace/re-roof BEFORE solar if remaining roof life < panel life; panel service life ~25–30 yr (cite DOE/NREL/SEIA/EnergySage).
- Fire classification: PV-module + roof-system fire rating (UL 1703 legacy / UL 61730 current; system Class A/B/C with the roof covering). IFC 605 / IRC R324 rooftop PV access + setback/pathway requirements for firefighter access.
- Electrical safety: NEC 690.12 rapid shutdown for rooftop PV (NFPA 70); module-level shutdown. AHJ permit + electrical inspection.
- Installer credentialing: NABCEP certification (what it is; NQR may NAME it as the industry credential but must not claim it unverified).
- Typical residential module wattage (~370–450 W) and system sizes (kW) — sourced or flagged.
- Roofing-warranty interaction: penetrations + third-party mounts can affect the roof warranty; coordinate roofer + solar (NRCA guidance).`,
  },
  {
    key: 'solar-shingles-bipv',
    title: 'Solar shingles / building-integrated PV (for solar-shingle-installation)',
    focus: `Solar shingles / solar roofing tiles / BIPV — how they differ from rack-mounted panels. Find + name-source:
- Definition: BIPV (building-integrated photovoltaics) — the PV IS the roof covering, vs BAPV (panels mounted on top). Cite NREL/DOE for the BIPV/BAPV distinction.
- Named current products + real specs: GAF Energy Timberline Solar / ENERGY SHINGLE (nailable solar shingle, integrates with Timberline asphalt shingles; per-shingle wattage; UL listings). Tesla Solar Roof (glass tiles). CertainTeed Solstice/Apollo II (low-profile). SunTegra. GAF Energy is the most relevant (asphalt-shingle integration). Pull only specs you can attribute to the manufacturer.
- How they install (nailed/integrated into the field vs racked); waterproofing integration; walkable/wind/hail ratings (e.g. UL/ASTM wind & impact class) where the manufacturer states them.
- Aesthetics + roof-pitch/orientation constraints; typically new-roof or full-reroof pairing (vs retrofit panels).
- Cost vs conventional panels: solar shingles cost MORE per watt than rack-mounted panels (cite EnergySage/CNET/manufacturer); typical $/W or system cost ranges if sourced; lower power density per sq ft.
- Output/efficiency vs standard modules (BIPV generally lower efficiency/W-per-area) — sourced or flagged.
- Warranty structure (product + power/output warranty) where a manufacturer states it.
- Cautions: do NOT overstate parity with panels; do NOT claim a certification/dealer status NQR hasn't verified.`,
  },
  {
    key: 'cool-roof-reflectance-programs',
    title: 'Cool-roof reflectance/emittance science + rating programs (for energy-efficient-roofing-solutions)',
    focus: `Cool roofing / reflective roofing / energy-efficient roof assemblies. Find + name-source:
- Core metrics: Solar Reflectance (albedo, 0–1), Thermal Emittance (0–1), and Solar Reflectance Index SRI (ASTM E1980). Measurement standards: solar reflectance ASTM C1549 / E903; emittance ASTM C1371 / E408. Cite ASTM.
- CRRC (Cool Roof Rating Council): the independent third-party rating + directory of reflectance/emittance values (initial + 3-year aged). Cite CRRC.
- ENERGY STAR roof products: CRITICAL — verify current status. ENERGY STAR sunset/ended its Roof Products program (confirm date ~2022 and what replaced it). State accurately; flag if uncertain. Do not tell authors to claim an active ENERGY STAR roof label if the program ended.
- DOE / LBNL Heat Island Group / EPA cool-roof guidance; urban heat island reduction.
- Quantified benefit: cool roofs can lower roof surface temp by tens of °F and cut cooling energy — find a sourced % (e.g. DOE/EPA "reduce cooling energy use by up to ~X%" / surface temp reduction up to ~50–60°F). Source or flag.
- HEATING-CLIMATE CAVEAT (NJ-critical): in a heating-dominated/mixed climate like NJ, a reflective roof's summer cooling savings are partly offset by a small winter "heating penalty"; net benefit depends on insulation + climate. Cite DOE/LBNL/ORNL. Authors must NOT promise universal year-round savings.
- White single-ply (TPO/PVC) + reflective coatings + above-sheathing insulation/radiant barrier + attic ventilation as the levers. Reflectance values for white membranes (~0.70–0.85) already in facts-materials-economics §6 — corroborate.
- Insulation R-value context (continuous insulation; IRC/IECC zone-4/5 roof/attic R-values) so "energy-efficient roofing" can cite the real code R-value, sourced.
- Federal incentive note: Energy Efficient Home Improvement Credit (25C) / 179D commercial deduction relevance to roofing — sourced, and clearly scoped (insulation/components, not the whole roof).`,
  },
  {
    key: 'silicone-vs-acrylic-coatings',
    title: 'Silicone vs acrylic elastomeric roof coatings (for silicone-roof-coating + silicone-elastomeric-roof-coating)',
    focus: `Restorative elastomeric roof coating systems for low-slope/flat commercial roofs. Find + name-source. Distinguish the two pages: silicone-roof-coating = silicone coating service generally; silicone-elastomeric-roof-coating = elastomeric coating category framing. Cover:
- Coating chemistries: SILICONE (moisture-cure, single-component) vs ACRYLIC (water-based) vs polyurethane vs SEBS. RCMA (Roof Coatings Manufacturers Association) is the trade body — cite.
- ASTM specs: silicone roof coatings ASTM D6694 (and D6511 for the moisture-cure type); acrylic ASTM D6083. Cite ASTM by number.
- PONDING WATER: silicone resists ponding water; acrylic is NOT recommended for ponding/standing water. This is the headline differentiator. Cite RCMA / GAF / manufacturer.
- Solar reflectance: white silicone/acrylic initial reflectance ~0.80–0.88; silicone tends to hold dirt → reflectance can drop more over time (acrylic re-washes better). Source the reflectance numbers (manufacturer/CRRC). ASTM C1549.
- Elongation/tensile (elastomeric = stretches/recovers, accommodates thermal movement) — sourced ranges where possible, else qualitative.
- Mil thickness / coverage (dry film mils per coat, gallons per square) — sourced or flagged.
- Recoat cycle / renewability: coatings are renewable — a maintained coated roof is recoated rather than torn off; recoat ~10–20 yr (acrylic ~10–15, silicone ~15–20) — corroborate facts-materials-economics §6. Warranty terms (manufacturer 10/15/20-yr renewable; restoration warranties) where sourced.
- R-VALUE MYTH (critical caution): roof coatings add essentially NEGLIGIBLE thermal R-value; the energy savings come from REFLECTANCE/emittance, not insulation. Authors must NOT claim a coating adds meaningful R-value. Cite RCMA/DOE.
- Restoration economics: recoating restores an aging membrane at a fraction of tear-off/replacement cost (sourced % if available); avoids landfill (sustainability). Tax: a coating can be a maintenance EXPENSE vs a capital replacement — note only if sourced.
- Surface prep: clean + prime/repair seams first; adhesion test; silicone must be recoated with silicone (a known limitation). Cite RCMA/manufacturer.
- Cost $/sq ft installed for silicone vs acrylic restoration — sourced or flagged.`,
  },
  {
    key: 'nj-federal-incentives',
    title: 'NJ + federal solar & energy incentives (for all solar / energy-efficient pages)',
    focus: `Incentives a Newark/Essex County NJ property owner can use for solar + energy-efficient roofing. Find + name-source, with current status (note this is mid-2026 — flag anything time-sensitive):
- NJ Successor Solar Incentive (SuSI) program, administered by the NJ Board of Public Utilities (BPU). Residential/small systems get the Administratively Determined Incentive (ADI) paying SREC-IIs per MWh; larger/grid-supply via Competitive Solar Incentive (CSI). Cite NJ BPU / NJ Clean Energy Program. State the structure; flag the exact $/SREC-II value as time-sensitive unless you can source the current number.
- NJ net metering: NJ requires full retail-rate net metering for solar (cite NJ BPU / statute). Excess generation credited.
- NJ sales-tax exemption on solar energy equipment (cite NJ Division of Taxation / NJ statute).
- NJ property-tax exemption for renewable-energy systems (the added home value from solar is exempt from property tax; cite NJ statute / NJ Clean Energy).
- Federal: Residential Clean Energy Credit (Section 25D) = 30% of solar cost through 2032 (then steps down 26% 2033, 22% 2034) per the Inflation Reduction Act — IRS. CRITICAL: verify whether IRA solar-credit timelines were changed by any 2025 legislation; flag if the 30%/2032 schedule has been altered, otherwise state the IRS schedule with the IRS as source.
- Federal commercial: ITC (Section 48/48E) for commercial solar; 179D for energy-efficient commercial buildings (envelope/insulation) — IRS. Scope correctly (179D = whole-building efficiency, not "the roof").
- Energy Efficient Home Improvement Credit (25C) for insulation/air-sealing components — IRS.
- Cautions: incentive values + deadlines change; authors should NAME the program + administering body and AVOID quoting a dollar/percentage that may be stale unless it is the durable statutory figure (e.g. "30% federal credit, per the IRS"). NQR is a roofer, not a tax advisor — frame as "per the IRS / NJ BPU", not advice.`,
  },
];

const FACTS_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['topic', 'facts', 'cautions', 'unresolved'],
  properties: {
    topic: { type: 'string' },
    facts: {
      type: 'array',
      description: 'Every verifiable fact with a NAMED source and a provenance flag.',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string', description: 'the attribute/fact being stated' },
          value: { type: 'string', description: 'the exact figure/range/spec, OR a qualitative statement if no number is verifiable to a named source' },
          source: { type: 'string', description: 'the NAMED authority (e.g. "NRCA", "SEIA", "DOE", "CRRC", "ASTM D6694", "NEC 690.12 (NFPA 70)", "NJ BPU", "GAF Energy", "IRS")' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    cautions: { type: 'array', items: { type: 'string' }, description: 'over-claims / myths / things authors must NOT assert, each with the corrected framing' },
    unresolved: { type: 'array', items: { type: 'string' }, description: 'facts you could NOT tie to a named source — authors must omit or state qualitatively' },
  },
};

phase('Research');
const research = (await parallel(TOPICS.map((t) => () =>
  agent(
    `${RULES}\n\nRESEARCH TOPIC: ${t.title}\n\nFIND AND NAME-SOURCE THE FOLLOWING:\n${t.focus}\n\nReturn the structured facts. Be exhaustive but disciplined: a number with no named source goes in "unresolved", never in "facts". Put every myth/over-claim authors must avoid in "cautions" with the corrected framing.`,
    { label: `research:${t.key}`, phase: 'Research', schema: FACTS_SCHEMA }
  )
))).filter(Boolean);

const RESEARCH_JSON = JSON.stringify(research, null, 1);

phase('Critique');
const CRITIQUE_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['gaps', 'contradictions', 'overclaimsToCut', 'corrections', 'readyToSynthesize'],
  properties: {
    gaps: { type: 'array', items: { type: 'string' }, description: 'missing facts a writer will need that no researcher found' },
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures that conflict across topics or with known packs (PVC/SPF §6: reflectance ~0.70–0.85, silicone recoat 15–20yr, R-6.0–6.5/in SPF)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually marketing/unsourced and should be demoted to unresolved or dropped' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong code section, ENERGY STAR roof program status, NJ-vs-CA program, stale incentive figure)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  `You are a skeptical completeness + accuracy critic for a roofing fact pack (Newark/Essex County NJ, IRC Climate Zone 4–5).\n\nHere are 5 researchers' structured findings (JSON):\n\n${RESEARCH_JSON}\n\nAudit for:\n1. GAPS — facts the 5 energy-solar service writers will need but nobody sourced (solar-panel-roofing-installation, solar-shingle-installation, energy-efficient-roofing-solutions, silicone-roof-coating, silicone-elastomeric-roof-coating).\n2. CONTRADICTIONS — figures that conflict across topics, or with the existing facts-materials-economics.md §6 (PVC white reflectance ~0.70–0.85 + emittance 0.80–0.90 per ASTM C1549/CRRC; SPF recoat acrylic 10–15 / silicone 15–20 yr; SPF R-6.0–6.5/in).\n3. OVER-CLAIMS to cut — any "fact" that is marketing or unsourced (a coating adding real R-value; "ENERGY STAR cool roof" if that program ended; a stale SREC/incentive dollar value; net year-round savings promised in a heating climate; a certification NQR can't claim).\n4. CORRECTIONS — wrong standard numbers, CA-only programs mislabeled as NJ, fire/electrical code mis-cites, incentive schedules.\n\nVerify against the live web where you are unsure (WebSearch available). Be specific and quote the offending value.`,
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  `You are writing the canonical fact pack \`facts-energy-solar.md\` for Newark Quality Roofing's Batch-6 energy-solar service pages.\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ${PROJECT}/.planning/content-system/research/facts-components-specialty.md  (frontmatter, §0 GLOBAL CORRECTIONS block, per-topic "| Claim | Value | Named source | Tier |" tables, verified-standards block, flagged-gaps section)\n- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md §6 (PVC & SPF) + §7 — do NOT duplicate these; CROSS-REFERENCE them (silicone/PVC reflectance + SPF recoat + R-value already live in §6).\n\nINPUTS:\n5 researchers' structured facts (JSON):\n${RESEARCH_JSON}\n\nCritic's gaps/contradictions/over-claims/corrections (JSON):\n${JSON.stringify(critique, null, 1)}\n\nWRITE THE COMPLETE MARKDOWN FILE. Requirements:\n- YAML frontmatter (title, slug: facts-energy-solar, project, page_targets = the 5 service ids, generated: 2026-06-05, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the 5 pages" block carrying the critic's corrections verbatim as numbered rules (ENERGY STAR roof-program status; coatings add NO meaningful R-value; NJ heating-climate cool-roof caveat; NJ-vs-CA program scoping; durable-vs-stale incentive figures; no certification claims for NQR; durable federal 30% credit framing).\n- One section per service-relevant topic with "| Claim | Value | Named source | Tier |" tables, Tier ∈ {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Map sections clearly to the 5 pages. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a number that has a named source; everything else goes under a "## Gaps flagged [UNVERIFIED]" section.\n- A "## Source list (named)" block.\n- Cross-reference facts-materials-economics §6/§7 instead of repeating.\n- House style: name-only attribution (no outbound links in the eventual prose).\n\nOutput ONLY the raw markdown file content (it will be written verbatim to disk). No preamble, no code fence around the whole thing.`,
  { label: 'synthesize-fact-pack', phase: 'Synthesize' }
);

return { topics: TOPICS.map((t) => t.key), research, critique, factPackMarkdown: synth };
