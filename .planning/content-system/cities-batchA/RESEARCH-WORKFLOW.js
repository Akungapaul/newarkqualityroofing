export const meta = {
  name: 'cities-batchA-research-urban-core',
  description: 'Research the per-city fact gaps for the 4 urban-core Essex County cities (Newark, East Orange, Orange, Irvington) — municipal construction/permit office name, LOCAL historic-district/HPC/COA status (designated vs Register-only), demographics, verified neighborhoods, and microclimate/geography — with named sources + provenance flags; critic pass; synthesize + WRITE CITY-FACTS-urban-core.md',
  phases: [
    { title: 'Research', detail: '4 city researchers: newark, east-orange, orange, irvington' },
    { title: 'Critique', detail: 'completeness + currency + COA-overclaim critic' },
    { title: 'Synthesize', detail: 'one writer assembles + writes the city-facts pack to disk' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const PACK_PATH = PROJECT + '/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md';

// ─── House rules every city researcher must obey ─────────────────────────────
const RULES = `
You are a local-geography + municipal-permit + historic-preservation + demographics fact researcher for Newark Quality Roofing (NQR), a roofing contractor in Newark / Essex County, NJ. Your output grounds answer-first CITY roofing pages that CANNOT fabricate. The pages describe roofing needs, housing stock, climate stressors, neighborhoods, permits, and representative project TYPES for one Essex County city.

Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: the U.S. Census Bureau / QuickFacts (population, area, housing); the municipality's own .gov site (construction/building department name, historic preservation commission, designated historic districts); the National Park Service / National Register and the NJ DEP Historic Preservation Office (district listings); the NJ DCA Uniform Construction Code (N.J.A.C. 5:23); NOAA (climate); the U.S. EPA (urban heat island). Wikipedia and local news are SECONDARY-named for neighborhood names / geography context.

NON-NEGOTIABLE OUTPUT DISCIPLINE:
- Every hard number / proper name / designation claim MUST carry a NAMED source. If you cannot tie a fact to a real named source, DO NOT assert it — put it in "unresolved" and (if relevant) state how to frame it qualitatively.
- Flag every fact: PRIMARY (Census/.gov municipal site/NPS/NJ HPO/the actual code), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named org / Wikipedia / named local news), SECONDARY (generic), or UNVERIFIED (no named source found).
- CURRENCY: it is mid-2026. Use the latest decennial Census (2020) + ACS estimates; label the year. Municipal department names and fee schedules change — name the department but flag any fee/title as time-sensitive.

THE SINGLE MOST IMPORTANT COMPLIANCE CAUTION (research precisely per city): the binding gate for a private homeowner's reroof in a historic context is the LOCAL historic-preservation ORDINANCE + a Certificate of Appropriateness (COA) from the municipal Historic Preservation Commission (HPC) — NOT National/State Register listing. Per the National Park Service, "listing in the National Register places no federal restrictions on a private property owner." So: (a) determine whether each city has a LOCAL HPC + ordinance at all; (b) name any LOCALLY DESIGNATED historic districts/landmarks (where a COA actually applies to exterior roofing work); (c) distinguish them from districts that are only on the National/State Register (where private reroofing is NOT restricted). DO NOT assert that any specific neighborhood requires a COA unless you can confirm it is a locally designated landmark or in a locally designated district. If unsure, put it in "unresolved" with the qualitative framing "verify local designation before asserting a COA requirement."

KNOWN BASELINE (already in the shared packs facts-nj-regulatory-climate.md + facts-historic-restoration.md §8-9 — CONFIRM, do not re-derive): NJ UCC N.J.A.C. 5:23-2.7 makes a detached 1- or 2-family dwelling reroof "ordinary maintenance" (NO permit); the 25% rule + permit applies to commercial/multi-family/attached; Rehab Subcode 5:23-6.4 governs recover-vs-tear-off. Newark = City of Newark Dept of Economic & Housing Development, Division of Buildings; the Newark Landmarks & Historic Preservation Commission issues COAs; Newark designated districts include James Street Commons and Lincoln Park. NJ COAs are authorized by N.J.S.A. 40:55D-107. Climate baseline (Newark Liberty / EWR, NOAA 1991-2020) is shared across all 4 cities: ~31.5 in/yr snow, Pg ~25 psf ground snow load, ~110-115 mph ASCE 7-16 design wind, nor'easters Oct-April, ~25-30 thunderstorms/yr. Your job is the PER-CITY specifics that are NOT yet in the packs.
`;

const CITIES = [
  {
    key: 'newark',
    title: 'Newark, NJ (Essex County seat, NJ’s largest city)',
    focus: `Find + name-source the Newark specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~311,549), land area (sq mi), housing-units count, median structure/housing age or "% built before 1940/1960" if available (Census ACS). Largest city in NJ + Essex County seat.
- CONSTRUCTION/PERMIT OFFICE: confirm the exact current department that administers construction permits (City of Newark Department of Economic & Housing Development, Division of Buildings / construction code office). Confirm N.J.A.C. 5:23-2.7 ordinary-maintenance applies (no permit for detached 1-2 family reroof).
- HISTORIC: confirm the Newark Landmarks & Historic Preservation Commission issues COAs; confirm Newark's ordinance auto-designated Register districts/landmarks (as of May 30, 2007) as LOCAL landmarks. Name the designated districts: James Street Commons (NR 1978), Lincoln Park. VERIFY whether FOREST HILL is a designated Newark LOCAL historic district (it is on the National Register as the Forest Hill Historic District — confirm local designation status). Flag any district you cannot confirm as locally designated.
- NEIGHBORHOODS: verify the real Newark neighborhoods/wards (Ironbound/East Ward, Forest Hill/North Ward, Central/West/South Ward, Weequahic, Vailsburg, Roseville, Downtown, University Heights, Clinton Hill). Note housing-stock character per area where sourceable (Ironbound = dense brownstone/rowhouse + Ferry St commercial; Forest Hill = Victorian/large homes; South/West Ward = post-war colonials/Capes; multi-family concentration).
- GEOGRAPHY/CLIMATE (per-city): the Passaic River corridor + Ironbound low-lying flood exposure; Newark Liberty International Airport (EWR) location; the urban-heat-island effect — find an EPA-attributable framing (e.g. EPA: U.S. urban daytime air temperatures run ~1-7°F higher than surrounding areas; surface/roof temps much higher). Do NOT assert a specific "10-15°F above suburbs" or "surface temps reduced 50°F" figure unless name-sourced; put unsourced heat figures in unresolved with EPA-qualitative framing.`,
  },
  {
    key: 'east-orange',
    title: 'East Orange, NJ (Essex County)',
    focus: `Find + name-source the East Orange specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~69,612), land area (sq mi, ~3.9), housing-units count, % multi-family / renter-occupied if sourceable (East Orange has a high concentration of multi-family + rental housing — confirm with Census ACS). Transit-connected commuter city.
- CONSTRUCTION/PERMIT OFFICE: name the East Orange department that administers construction permits (e.g. City of East Orange construction code official / Department of Property Maintenance & Inspections / Division of Inspections — confirm the current name). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: does East Orange have a LOCAL Historic Preservation Commission + ordinance? Name any locally designated historic districts/landmarks (verify; do NOT assume). Are there National-Register-only listings (e.g. any district near Brick Church / Munn Ave / Elmwood)? If no local HPC/designation is confirmed, say so explicitly so the page does NOT assert a COA requirement.
- NEIGHBORHOODS: verify real East Orange neighborhoods (Brick Church, Ampere, Elmwood Park, Doddtown, Greenwood, Presidential Estates, etc.) and the NJ Transit stations (Brick Church + East Orange on the Morris & Essex Line). Confirm which are real and their housing character (converted Victorian multi-family near Brick Church; larger single-family in Elmwood Park).
- GEOGRAPHY/CLIMATE: mature street-tree canopy (tree-debris/branch + shade/moss roofing stressor); proximity to Newark (shares EWR climate); Main Street + Central Avenue commercial corridors; East Orange General Hospital medical corridor (confirm it exists/its current name).`,
  },
  {
    key: 'orange',
    title: 'Orange, NJ (City of Orange Township, Essex County)',
    focus: `Find + name-source the Orange specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~34,447), land area (sq mi, ~2.2 — very compact/dense), housing-units, housing age. Legal name "City of Orange Township." NJ Transit Orange station on the Morris & Essex Line.
- CONSTRUCTION/PERMIT OFFICE: name the City of Orange Township construction/building department. N.J.A.C. 5:23-2.7 applies.
- HISTORIC: does Orange have a LOCAL HPC + ordinance? VERIFY any locally designated historic districts (Orange has National-Register listings — confirm names, e.g. any downtown/Main St district, "Seven Oaks", or residential districts — and whether each is LOCALLY designated vs Register-only). Do NOT assert a COA requirement for Scotland Road / Park Avenue homes unless a local designation is confirmed; otherwise frame qualitatively and put in unresolved.
- NEIGHBORHOODS: verify real Orange neighborhoods/areas (Main Street District, The Valley, Seven Oaks, Scotland Road / Park Avenue corridors, areas bordering South Mountain). The Scottish Rite Cathedral on Main St — confirm it exists/location. Confirm which named areas are real.
- GEOGRAPHY/CLIMATE: South Mountain Reservation adjacency (confirm Orange borders/abuts the Reservation — verify, since the Reservation is mainly in West Orange/Maplewood/Millburn; Orange is adjacent to West Orange) — frame tree-canopy/branch-debris stressor carefully and accurately. The "Valley" low-lying topography + stormwater. Shares EWR climate.`,
  },
  {
    key: 'irvington',
    title: 'Irvington, NJ (Township of Irvington, Essex County)',
    focus: `Find + name-source the Irvington specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~61,176), land area (sq mi, ~2.9), housing-units, housing age (predominantly 1920s-1940s stock — confirm "% built before 1940/1950" via Census ACS if available), high multi-family / rental share if sourceable.
- CONSTRUCTION/PERMIT OFFICE: name the Township of Irvington construction/building department. N.J.A.C. 5:23-2.7 applies.
- HISTORIC: does Irvington have a LOCAL HPC + designated historic districts? (Likely none — CONFIRM. If none, state explicitly so the page does not invent a COA requirement.) Note the former Olympic Park amusement park (operated until ~1965) as a real local-history reference for the Olympic Park neighborhood name.
- NEIGHBORHOODS: verify real Irvington neighborhoods/corridors (Olympic Park, Springfield Avenue corridor, Irvington Center, Chancellor Avenue, Union Avenue near Newark's Vailsburg border, Stuyvesant Avenue). Confirm which are real. Springfield Ave runs from Newark through Irvington into Union County.
- GEOGRAPHY/CLIMATE: shares the Newark border (Vailsburg) + EWR climate; Route 78 corridor along the southern edge (confirm I-78 passes Irvington's south) for the light-industrial/commercial flat-roof angle; dense aging housing stock. Do NOT assert specific microclimate numbers beyond the shared EWR baseline.`,
  },
];

const FACTS_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['city', 'demographics', 'permitsOffice', 'historic', 'neighborhoods', 'geographyClimate', 'cautions', 'unresolved'],
  properties: {
    city: { type: 'string' },
    demographics: {
      type: 'array', description: 'population/area/housing facts, each with a NAMED source + flag',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    permitsOffice: {
      type: 'array', description: 'the municipal construction/permit department name + UCC applicability, each with a NAMED source + flag',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    historic: {
      type: 'array', description: 'HPC existence + LOCALLY designated districts/landmarks (vs Register-only), each with a NAMED source + flag. Mark clearly whether each district is LOCAL-DESIGNATED or REGISTER-ONLY.',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    neighborhoods: {
      type: 'array', description: 'verified real neighborhoods/corridors + housing character, each with a NAMED source + flag',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    geographyClimate: {
      type: 'array', description: 'per-city geography + microclimate stressors (rivers, UHI, reservation, topography, corridors), each with a NAMED source + flag',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    cautions: { type: 'array', items: { type: 'string' }, description: 'over-claims / things authors must NOT assert for this city, each with corrected framing (esp. unconfirmed COA requirements, unsourced UHI/wind/temperature numbers, geography errors like a wrong reservation adjacency)' },
    unresolved: { type: 'array', items: { type: 'string' }, description: 'facts you could NOT tie to a named source — authors must omit or state qualitatively' },
  },
};

phase('Research');
const research = (await parallel(CITIES.map((c) => () =>
  agent(
    RULES + '\n\nRESEARCH CITY: ' + c.title + '\n\nFIND AND NAME-SOURCE THE FOLLOWING:\n' + c.focus + '\n\nReturn the structured facts. Be exhaustive but disciplined: any number/name/designation with no named source goes in "unresolved", never in "facts". Put every over-claim authors must avoid (esp. an unconfirmed COA requirement or an unsourced microclimate number) in "cautions" with the corrected framing.',
    { label: 'research:' + c.key, phase: 'Research', schema: FACTS_SCHEMA }
  )
))).filter(Boolean);

const RESEARCH_JSON = JSON.stringify(research, null, 1);

phase('Critique');
const CRITIQUE_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['gaps', 'contradictions', 'overclaimsToCut', 'corrections', 'readyToSynthesize'],
  properties: {
    gaps: { type: 'array', items: { type: 'string' }, description: 'missing per-city facts the city-page writers will need that no researcher found' },
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate / facts-historic-restoration §8-9)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually unsourced/marketing and should be demoted — esp. a COA requirement asserted without confirmed LOCAL designation, an unsourced urban-heat-island/wind/snow number, a geography error (e.g. asserting Orange directly contains South Mountain Reservation), or a population/area figure with no Census source' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong construction-office name, wrong designation status local-vs-Register, wrong population/area, wrong adjacency)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  'You are a skeptical completeness + CURRENCY + COMPLIANCE critic for a per-city roofing fact pack covering 4 Essex County NJ cities (Newark, East Orange, Orange, Irvington).\n\nHere are 4 city researchers\' structured findings (JSON):\n\n' + RESEARCH_JSON + '\n\nAudit for:\n1. GAPS — per-city facts the city-page writers will need but nobody sourced (a confirmed construction-office name per city; a clear LOCAL-vs-Register historic-designation status per city; 2020 Census population + land area per city; verified neighborhood names; an EPA-attributable urban-heat-island framing for Newark).\n2. CONTRADICTIONS — figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate §1/§3; facts-historic-restoration §8-9 — Newark Landmarks & HPC, James Street Commons, Lincoln Park).\n3. OVER-CLAIMS to cut — a COA requirement asserted for a neighborhood without a CONFIRMED local designation (Register listing alone does NOT restrict a private reroof — NPS); an unsourced "10-15°F above suburbs"/"reduce surface temps 50°F"/"80 mph downtown wind tunnel" figure; a geography error (verify whether Orange actually abuts South Mountain Reservation, or whether that is West Orange/Maplewood/Millburn); any population/area number with no Census source.\n4. CORRECTIONS — wrong municipal-office names, wrong local-vs-Register designation status, wrong population/area/adjacency.\n\nVerify against the live web where unsure (WebSearch available). Be specific and quote the offending value. Confirm per city: (a) does it have a LOCAL HPC + designated district at all; (b) the construction-permit department name; (c) the 2020 Census population + land area.',
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  'You are writing the canonical per-city fact pack `CITY-FACTS-urban-core.md` for Newark Quality Roofing\'s cities Batch A (the 4 urban-core Essex County cities: Newark, East Orange, Orange, Irvington).\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ' + PROJECT + '/.planning/content-system/research/facts-historic-restoration.md  (frontmatter, §0 GLOBAL CORRECTIONS block, per-topic "| Claim | Value | Named source | Tier |" tables, banned-phrasings block, flagged-gaps section, named source list)\n- ' + PROJECT + '/.planning/content-system/research/facts-nj-regulatory-climate.md  (the SHARED NJ permit + climate baseline you will CROSS-REFERENCE, not duplicate)\n\nINPUTS:\n4 city researchers\' structured facts (JSON):\n' + RESEARCH_JSON + '\n\nCritic\'s gaps/contradictions/over-claims/corrections (JSON):\n' + JSON.stringify(critique, null, 1) + '\n\nWRITE THE COMPLETE MARKDOWN FILE TO DISK at ' + PACK_PATH + ' using the Write tool. Requirements:\n- YAML frontmatter (title, slug: city-facts-urban-core, project, page_targets: [newark, east-orange, orange, irvington], generated: 2026-06-06, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the page" block carrying the critic\'s corrections + key cautions verbatim as numbered rules. MUST include: (1) the binding historic gate is the LOCAL ordinance + COA from the municipal HPC, NOT National/State Register listing (per NPS) — only assert a COA requirement where a LOCAL designation is CONFIRMED; list which districts per city are LOCAL-designated vs Register-only; (2) the shared NJ permit rule (detached 1-2 family reroof = ordinary maintenance, no permit, N.J.A.C. 5:23-2.7) and the construction-office name per city; (3) the urban-heat-island framing must be EPA-attributed and qualitative — ban unsourced "X°F above suburbs"/"reduce surface temps by N°" figures; (4) any geography adjacency that the critic flagged wrong (e.g. South Mountain Reservation relationship to Orange) corrected; (5) use only Census-sourced population/area figures.\n- One "## [City]" section per city, each with "| Claim | Value | Named source | Tier |" tables grouped under sub-headers: Demographics, Construction/Permit office, Historic (local-vs-Register), Neighborhoods (verified), Geography/Climate. Tier ∈ {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a figure/name that has a named source; everything else goes under that city\'s "Gaps [UNVERIFIED]" note.\n- A "## Shared baseline (cross-reference, do NOT duplicate)" block pointing to facts-nj-regulatory-climate.md (§1 permits, §3 climate) + facts-historic-restoration.md §8-9 (COA framework) for the facts already captured site-wide.\n- A "## Source list (named)" block.\n- House style: name-only attribution (no outbound links / URLs in the eventual on-page prose).\n\nAfter writing the file, return a SHORT JSON-ish summary: the path written, the per-city section count, and the count of PRIMARY facts. Also include the full markdown under a key so it can be recovered if the write failed.',
  { label: 'synthesize-city-facts', phase: 'Synthesize' }
);

return { cities: CITIES.map((c) => c.key), research, critique, packPath: PACK_PATH, synthSummary: synth };
