export const meta = {
  name: 'batch7-research-historic-restoration',
  description: 'Research the historic-roof-restoration fact gap (Secretary of the Interior Standards, NPS Preservation Briefs, in-kind/matching replacement, Certificate of Appropriateness / local HPC review, NJ SHPO/Register, Essex County districts, federal §47 + NJ historic tax credits) with named sources + provenance flags; critic pass; synthesize + WRITE facts-historic-restoration.md',
  phases: [
    { title: 'Research', detail: 'two web researchers: preservation framework/technique + regulatory/local/incentives' },
    { title: 'Critique', detail: 'completeness + currency critic: gaps, over-claims, stale-credit corrections' },
    { title: 'Synthesize', detail: 'one writer assembles + writes the full fact-pack markdown to disk' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const PACK_PATH = PROJECT + '/.planning/content-system/research/facts-historic-restoration.md';

// ─── House rules every researcher must obey ──────────────────────────────────
const RULES = `
You are a historic-preservation + roofing fact researcher for Newark Quality Roofing (Newark / Essex County, NJ). The output grounds an answer-first "Historic Roof Restoration" service page that CANNOT fabricate.

Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: the National Park Service (NPS) — the Secretary of the Interior's Standards for the Treatment of Historic Properties (36 CFR 67 / 68) and the NPS Preservation Briefs; the NJ Historic Preservation Office (NJ DEP HPO, the State Historic Preservation Office); the National Register of Historic Places (NPS) and the New Jersey Register of Historic Places; the IRS and the NJ Economic Development Authority (NJEDA) for tax credits; municipal Historic Preservation Commission ordinances. Named trade/material bodies (National Slate Association, Copper Development Association, Tile Roofing Industry Alliance, Cedar Shake & Shingle Bureau) are PRIMARY-attrib. Cost aggregators are SECONDARY.

NON-NEGOTIABLE OUTPUT DISCIPLINE:
- Every hard number / spec / code-or-statute citation MUST carry a NAMED source. If you cannot tie a figure to a real named source, DO NOT assert it — put it in "unresolved" and state it qualitatively.
- Flag every fact: PRIMARY (a federal/state agency, the actual Standard/Brief/statute), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named trade org / named aggregator), SECONDARY (generic guide), or UNVERIFIED (no named source found).
- Prefer ranges and qualitative framing over false precision.
- Surface MYTHS and OVER-CLAIMS authors must avoid (put in "cautions" with the corrected framing). Especially: NQR is a roofing contractor, NOT a preservation architect, SHPO reviewer, or tax advisor; there is no universal "certified historic restoration contractor" credential NQR can claim; National/State Register LISTING alone does NOT, by itself, restrict a private owner using private funds — the binding review gate is a LOCAL historic-district ordinance and its Certificate of Appropriateness; the federal 20% historic tax credit is for INCOME-PRODUCING certified structures only (not owner-occupied homes).
- CURRENCY: it is mid-2026. The 2025 federal budget law (One Big Beautiful Bill) REPEALED some energy credits (§25D solar, §25C efficiency) after Dec 31 2025 — that is a DIFFERENT credit. VERIFY whether the federal Historic Rehabilitation Tax Credit (IRC §47) and the NJ Historic Property Reinvestment Act credit are CURRENTLY in effect; flag any dollar cap / percentage as time-sensitive unless it is the durable statutory figure. Never assert a stale number.
- This is for NJ (IRC Climate Zone 4–5). Historic roofs in this region are commonly slate, clay/terra-cotta tile, wood shingle, and metal (terne/tin/copper standing-seam or flat-seam).
`;

const TOPICS = [
  {
    key: 'preservation-framework-technique',
    title: 'Historic-preservation framework + period roofing technique (for historic-roof-restoration)',
    focus: `The preservation doctrine and the material technique a historic reroof must follow. Find + name-source:
- The Secretary of the Interior's Standards for the Treatment of Historic Properties (NPS): the FOUR treatments — Preservation, Rehabilitation, Restoration, Reconstruction — and which applies to roof work. The Standards for Rehabilitation (10 standards, 36 CFR 67/68). The CORE principle for roofing: repair rather than replace deteriorated historic features; where replacement is necessary, replace IN KIND — matching the old material in design, color, texture, and other visual qualities (and where feasible, materials). "Distinctive features... shall be preserved." Cite NPS by name + standard number.
- NPS Preservation Briefs (authoritative named sources): Brief 4 "Roofing for Historic Buildings" (retain roof shape + character-defining features: dormers, cresting, finials, snow guards, chimneys; document the historic roof before work; appropriate substitute materials only when in-kind is impossible). Brief 29 "The Repair, Replacement, and Maintenance of Historic Slate Roofs". Brief 30 "The Preservation and Repair of Historic Clay Tile Roofs". Brief 4a if relevant. Pull the key named guidance from each.
- Period roofing MATERIALS + technique, name-sourced: natural SLATE (copper or stainless nails, slate hooks for individual replacement, no painting, hook-and-eye snow guards; lifespan 60–150 yr per InterNACHI / 100+ per National Slate Association — cross-ref facts-materials-economics §2); clay / terra-cotta TILE (Brief 30; matching profile/glaze; fragile, walk-boards; cross-ref §6); wood SHINGLE (historically split or sawn; modern fire-retardant-treated options; Cedar Shake & Shingle Bureau); METAL — standing-seam and flat-seam TERNE, tin, COPPER and lead-coated copper (Copper Development Association; copper 70+ yr per InterNACHI; historic flashing material). Note which are character-defining and must be matched.
- Documentation + mock-up practice: photograph/measure the existing roof, retain samples, in-kind sample approval before full work (Brief 4 / general preservation practice).
- COMMON MISTAKES authors must warn against (cautions): substituting asphalt shingle for slate/tile (changes character + often violates district rules); using incompatible fasteners (plain steel nails that rust and "bleed"/fail vs copper/stainless); painting or pressure-washing historic slate; discarding repairable original material. Each with the corrected practice.`,
  },
  {
    key: 'regulatory-local-incentives',
    title: 'Historic-district regulatory process + NJ/Essex local + tax credits (for historic-roof-restoration)',
    focus: `The approval process, the NJ/Essex local landscape, and the incentive programs. Find + name-source, with CURRENT (mid-2026) status flagged:
- LOCAL historic-district review: a Certificate of Appropriateness (COA) issued by the municipal Historic Preservation Commission (HPC) is typically required BEFORE exterior alterations — including a reroof / roofing-material change — on a designated landmark or a contributing property within a LOCAL historic district. NJ municipalities establish HPCs and design review under the Municipal Land Use Law (N.J.S.A. 40:55D-107 to -112). Describe the COA process (application, design-review, sometimes a separate construction permit). Cite the MLUL + a representative municipal ordinance.
- The CRITICAL nuance (a top caution): being listed on the National Register of Historic Places or the NJ Register does NOT by itself bar a private owner spending private money from reroofing; federal/state Register review (Section 106 / NJ DEP HPO project review) is triggered by FEDERAL/STATE undertakings, licenses, or funding. The binding private-owner gate is the LOCAL ordinance + COA. State this precisely so the page does not over-claim a restriction.
- NJ Historic Preservation Office (NJ DEP HPO = the State Historic Preservation Office / SHPO): its role, the NJ Register of Historic Places, and project review. Cite NJ DEP HPO.
- ESSEX COUNTY / NJ local context: name real designated historic districts/commissions to ground the local angle — e.g. Glen Ridge (a National Register Historic District covering much of the borough), Montclair (Historic Preservation Commission + districts), Newark (e.g. James Street Commons Historic District, Lincoln Park), and note Essex County more broadly. VERIFY each before asserting it has a LOCAL ordinance/HPC vs only Register listing. Flag any you cannot confirm.
- FEDERAL Historic Rehabilitation Tax Credit (HTC): 20% of qualified rehabilitation expenditures for a CERTIFIED rehabilitation of a certified historic structure that is INCOME-PRODUCING (not owner-occupied residences), under IRC §47, administered jointly by the NPS, the IRS, and the SHPO; claimed ratably over 5 years post-2017. VERIFY it remains in effect in 2026 (confirm the 2025 budget law did NOT repeal §47 — distinct from the repealed §25D/§25C energy credits). Cite NPS/IRS.
- NJ Historic Property Reinvestment Act: the NJ state historic tax credit (enacted 2020/2021, administered by the NJ Economic Development Authority, NJEDA), a percentage credit for qualified rehabilitation of income-producing and certain owner-occupied historic properties, subject to annual program caps. VERIFY current status + describe qualitatively; flag exact percentages/caps as time-sensitive.
- Cautions: NQR frames all of this as "per the NPS / per the municipal Historic Preservation Commission / per the NJ DEP Historic Preservation Office / per the IRS"; NQR is not the permitting authority, the SHPO, an architect, or a tax advisor; NQR cannot claim a "certified historic restoration" credential; do not tell a homeowner a Register listing forbids an ordinary reroof.`,
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
          source: { type: 'string', description: 'the NAMED authority (e.g. "NPS Preservation Brief 29", "Secretary of the Interior Standards for Rehabilitation (36 CFR 67)", "N.J.S.A. 40:55D-109", "IRS / IRC §47", "NJEDA", "National Slate Association", "Copper Development Association")' },
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
    RULES + '\n\nRESEARCH TOPIC: ' + t.title + '\n\nFIND AND NAME-SOURCE THE FOLLOWING:\n' + t.focus + '\n\nReturn the structured facts. Be exhaustive but disciplined: a number/citation with no named source goes in "unresolved", never in "facts". Put every myth/over-claim authors must avoid in "cautions" with the corrected framing.',
    { label: 'research:' + t.key, phase: 'Research', schema: FACTS_SCHEMA }
  )
))).filter(Boolean);

const RESEARCH_JSON = JSON.stringify(research, null, 1);

phase('Critique');
const CRITIQUE_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['gaps', 'contradictions', 'overclaimsToCut', 'corrections', 'readyToSynthesize'],
  properties: {
    gaps: { type: 'array', items: { type: 'string' }, description: 'missing facts the historic-roof-restoration writer will need that no researcher found' },
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures that conflict across topics or with facts-materials-economics (slate 60–150 / copper 70+ / wood 25 / tile 50+ per InterNACHI)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually marketing/unsourced and should be demoted to unresolved or dropped (a NQR cert claim; a Register-listing-forbids-reroof claim; a stale tax-credit figure)' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong Brief number, §47 vs §25D confusion, a local district that is only Register-listed not locally-ordinanced, a stale NJEDA cap)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  'You are a skeptical completeness + CURRENCY critic for a historic-roofing fact pack (Newark / Essex County NJ).\n\nHere are 2 researchers\' structured findings (JSON):\n\n' + RESEARCH_JSON + '\n\nAudit for:\n1. GAPS — facts the historic-roof-restoration writer will need but nobody sourced (the in-kind/matching principle, at least one named Preservation Brief per material, the COA/HPC process, the Register-listing-vs-local-ordinance nuance, the §47 + NJ HTC current status).\n2. CONTRADICTIONS — figures that conflict across topics or with facts-materials-economics (slate 60–150 / copper 70+ / wood 25 / clay tile 50+ per InterNACHI).\n3. OVER-CLAIMS to cut — a NQR preservation-certification claim; any statement that a National/NJ Register listing alone bars a private-funded reroof; a stale or precise tax-credit dollar cap stated as durable.\n4. CORRECTIONS — wrong Preservation Brief numbers, confusing the historic §47 credit with the repealed §25D/§25C energy credits, a named Essex district that is only Register-listed (not under a local ordinance), a wrong MLUL citation.\n\nVerify against the live web where you are unsure (WebSearch available). Be specific and quote the offending value. Confirm whether IRC §47 and the NJ Historic Property Reinvestment Act are in effect as of mid-2026.',
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  'You are writing the canonical fact pack `facts-historic-restoration.md` for Newark Quality Roofing\'s Batch-7 "Historic Roof Restoration" service page.\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ' + PROJECT + '/.planning/content-system/research/facts-components-specialty.md  (frontmatter, §0 GLOBAL CORRECTIONS block, per-topic "| Claim | Value | Named source | Tier |" tables, verified-standards block, flagged-gaps section)\n- ' + PROJECT + '/.planning/content-system/research/facts-materials-economics.md §2 (slate), §5 (wood/cedar), §6 (clay & concrete tile), §0 master table (copper 70+) — do NOT duplicate these lifespan tables; CROSS-REFERENCE them.\n\nINPUTS:\n2 researchers\' structured facts (JSON):\n' + RESEARCH_JSON + '\n\nCritic\'s gaps/contradictions/over-claims/corrections (JSON):\n' + JSON.stringify(critique, null, 1) + '\n\nWRITE THE COMPLETE MARKDOWN FILE TO DISK at ' + PACK_PATH + ' using the Write tool. Requirements:\n- YAML frontmatter (title, slug: facts-historic-restoration, project, page_targets: [historic-roof-restoration] with a note that custom-roof-design-consultation may reference the material-matching facts, generated: 2026-06-05, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the page" block carrying the critic\'s corrections + the key cautions verbatim as numbered rules (NQR is a roofer not a preservation architect/SHPO/tax advisor; no "certified historic restoration" credential claim for NQR; National/NJ Register listing alone does NOT bar a private-funded reroof — the binding gate is the LOCAL historic-district ordinance + Certificate of Appropriateness; in-kind/matching is the governing preservation principle; the federal 20% §47 HTC is income-producing-only and is DISTINCT from the repealed §25D/§25C energy credits — state its verified current status; treat exact tax-credit caps/percentages as time-sensitive).\n- One section per topic with "| Claim | Value | Named source | Tier |" tables, Tier ∈ {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a figure/citation that has a named source; everything else goes under a "## Gaps flagged [UNVERIFIED]" section.\n- A "## Source list (named)" block.\n- Cross-reference facts-materials-economics §2/§5/§6 instead of repeating the lifespan tables.\n- House style: name-only attribution (no outbound links / URLs in the eventual on-page prose).\n\nAfter writing the file, return a SHORT JSON-ish summary: the path written, the section headings, and the count of PRIMARY facts. Also include the full markdown under a key so it can be recovered if the write failed.',
  { label: 'synthesize-fact-pack', phase: 'Synthesize' }
);

return { topics: TOPICS.map((t) => t.key), research, critique, packPath: PACK_PATH, synthSummary: synth };
