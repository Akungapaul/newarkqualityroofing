export const meta = {
  name: 'cities-batchB-research-first-suburbs',
  description: 'Research the per-city fact gaps for the 5 first-suburbs Essex County cities (Bloomfield, Belleville, Nutley, Maplewood, South Orange) — municipal construction/permit office name, LOCAL historic-district/HPC/COA status (designated vs Register-only), demographics, verified neighborhoods, and microclimate/geography — with named sources + provenance flags; critic pass; synthesize + WRITE CITY-FACTS-first-suburbs.md',
  phases: [
    { title: 'Research', detail: '5 city researchers: bloomfield, belleville, nutley, maplewood, south-orange' },
    { title: 'Critique', detail: 'completeness + currency + COA-overclaim critic' },
    { title: 'Synthesize', detail: 'one writer assembles + writes the city-facts pack to disk' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const PACK_PATH = PROJECT + '/.planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md';

// ─── House rules every city researcher must obey ─────────────────────────────
const RULES = `
You are a local-geography + municipal-permit + historic-preservation + demographics fact researcher for Newark Quality Roofing (NQR), a roofing contractor in Newark / Essex County, NJ. Your output grounds answer-first CITY roofing pages that CANNOT fabricate. The pages describe roofing needs, housing stock, climate stressors, neighborhoods, permits, and representative project TYPES for one Essex County city. These 5 cities are the "first-suburbs" archetype — older streetcar/railroad suburbs of mostly pre-WWII single- and two-family homes with mature tree canopy, ringing Newark to the north and west.

Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: the U.S. Census Bureau / QuickFacts (population, area, housing); the municipality's own .gov site (construction/building department name, historic preservation commission, designated historic districts); the National Park Service / National Register and the NJ DEP Historic Preservation Office (district listings); the NJ DCA Uniform Construction Code (N.J.A.C. 5:23); NOAA (climate); the U.S. EPA (urban heat island / cool roofs). Wikipedia and local news are SECONDARY-named for neighborhood names / geography context.

NON-NEGOTIABLE OUTPUT DISCIPLINE:
- Every hard number / proper name / designation claim MUST carry a NAMED source. If you cannot tie a fact to a real named source, DO NOT assert it — put it in "unresolved" and (if relevant) state how to frame it qualitatively.
- Flag every fact: PRIMARY (Census/.gov municipal site/NPS/NJ HPO/the actual code), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named org / Wikipedia / named local news), SECONDARY (generic), or UNVERIFIED (no named source found).
- CURRENCY: it is mid-2026. Use the latest decennial Census (2020) + ACS estimates; label the year. Municipal department names and fee schedules change — name the department but flag any fee/title as time-sensitive.

THE SINGLE MOST IMPORTANT COMPLIANCE CAUTION (research precisely per city): the binding gate for a private homeowner's reroof in a historic context is the LOCAL historic-preservation ORDINANCE + a Certificate of Appropriateness (COA) from the municipal Historic Preservation Commission (HPC) — NOT National/State Register listing. Per the National Park Service, "listing in the National Register places no federal restrictions on a private property owner." So: (a) determine whether each city has a LOCAL HPC + ordinance at all; (b) name any LOCALLY DESIGNATED historic districts/landmarks (where a COA actually applies to exterior roofing work); (c) distinguish them from districts that are only on the National/State Register (where private reroofing is NOT restricted). DO NOT assert that any specific neighborhood requires a COA unless you can confirm it is a locally designated landmark or in a locally designated district. If unsure, put it in "unresolved" with the qualitative framing "verify local designation before asserting a COA requirement." NOTE the likely reality to CONFIRM: South Orange and Maplewood are known for active local HPCs + locally designated districts; Bloomfield, Belleville, and Nutley have National-Register listings whose LOCAL-designation status must be verified before any COA claim.

KNOWN BASELINE (already in the shared packs facts-nj-regulatory-climate.md + facts-historic-restoration.md §8-9, and the Batch A pack cities-batchA/CITY-FACTS-urban-core.md "Shared baseline" — CONFIRM, do not re-derive): NJ UCC N.J.A.C. 5:23-2.7 makes a detached 1- or 2-family dwelling reroof "ordinary maintenance" (NO permit); the 25% rule + permit applies to commercial/multi-family/attached; Rehab Subcode 5:23-6.4 governs recover-vs-tear-off; HIC registration N.J.S.A. 56:8-136; NJ COAs authorized by N.J.S.A. 40:55D-107. Climate baseline (Newark Liberty / EWR, NOAA 1991-2020) is the shared Essex County reference: ~31.5 in/yr snow, Pg ~25 psf ground snow load, ~110-115 mph ASCE 7-16 design wind, nor'easters Oct-April, ~25-30 thunderstorms/yr; InterNACHI material lifespans (asphalt arch 30 / 3-tab 20, slate 60-150, metal 40-80, EPDM 15-25, TPO 7-20, mod-bit 20). Your job is the PER-CITY specifics that are NOT yet in the packs. The first-suburbs share a defining roofing stressor: MATURE STREET-TREE CANOPY (oak/maple/sycamore) → leaf/debris clogging valleys & gutters, branch-impact in nor'easters/summer storms, and shade-driven moss/algae on north slopes — frame this qualitatively unless a named source supports a figure.
`;

const CITIES = [
  {
    key: 'bloomfield',
    title: 'Bloomfield, NJ (Township of Bloomfield, Essex County)',
    focus: `Find + name-source the Bloomfield specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~53,105), land area (sq mi, ~5.3), housing-units count, % built pre-1940/1960 + % 1-unit vs multi-family if sourceable (Census ACS). Note the garden-apartment complexes from the postwar era if Census-supportable.
- CONSTRUCTION/PERMIT OFFICE: name the exact current Bloomfield department that administers construction permits (Township of Bloomfield — Division of Inspections / Code Enforcement / Construction Code Official). Confirm N.J.A.C. 5:23-2.7 ordinary-maintenance applies.
- HISTORIC: does Bloomfield have a LOCAL Historic Preservation Commission + ordinance? The Bloomfield Center Historic District + the Bloomfield Green are on the National Register — VERIFY whether they are LOCALLY designated (where a COA applies) or Register-only. Name any other designated landmarks (e.g. around the Green / Broad St). If no local designation is confirmed, say so explicitly so the page does NOT assert a COA requirement.
- NEIGHBORHOODS: verify real Bloomfield neighborhoods/sections (Watsessing, Brookdale, Brookside, Oak View, Bloomfield Center, Watsessing Heights, the Berkeley/North end). Confirm which are real + housing character (pre-war Colonials/Dutch Colonials/Capes; garden apartments). Brookdale Park (shared with Montclair) + Watsessing Park.
- GEOGRAPHY/CLIMATE: bordered by Montclair, Glen Ridge, Nutley, Belleville, Newark, East Orange. Third River / Toney's Brook drainage; any flood exposure along the Third River. Garden State Parkway corridor (commercial/flat-roof angle). Mature tree canopy stressor. Shares EWR climate baseline. Do NOT assert microclimate numbers beyond the shared baseline unless name-sourced.`,
  },
  {
    key: 'belleville',
    title: 'Belleville, NJ (Township of Belleville, Essex County)',
    focus: `Find + name-source the Belleville specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~38,222), land area (sq mi, ~3.4), housing-units, % pre-1940 + multi-family/owner-occupied share if sourceable. "Home of the Cherry Blossoms" (Branch Brook Park extends into Belleville).
- CONSTRUCTION/PERMIT OFFICE: name the Township of Belleville department administering construction permits (Construction Code Official / Building Department). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: does Belleville have a LOCAL HPC + ordinance? The Belleville Dutch Reformed Church / Old First (Reformed) Church complex + cemetery is on the National Register — VERIFY local-vs-Register. Name any other listings (e.g. along Main St / the Silver Lake area). If no local designation, state explicitly so no COA requirement is invented.
- NEIGHBORHOODS: verify real Belleville sections (Silver Lake, Soho, Belleville Center/Town Center, Franklin, Stephens). Confirm which are real + housing character (dense 1-2 family + multi-family near Silver Lake; older stock near the river).
- GEOGRAPHY/CLIMATE: Passaic River on the EAST border (flood exposure for low-lying riverfront properties — frame qualitatively). Branch Brook Park (cherry blossoms) on the SW edge shared with Newark. Mature tree canopy. Route 21 (McCarter Hwy) river corridor (industrial/commercial flat-roof angle). Shares EWR climate baseline.`,
  },
  {
    key: 'nutley',
    title: 'Nutley, NJ (Township of Nutley, Essex County)',
    focus: `Find + name-source the Nutley specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~35,000; ~34,981), land area (sq mi, ~3.4), housing-units, % pre-1940/1950 owner-occupied single-family share if sourceable (Nutley skews single-family/owner-occupied — confirm via Census ACS).
- CONSTRUCTION/PERMIT OFFICE: name the Township of Nutley department administering construction permits (Department of Public Affairs / Construction Code Official / Building Dept). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: does Nutley have a LOCAL HPC + ordinance? "The Enclosure" (a riverside artists'-colony lane along the Third River) is historically notable — VERIFY whether it (or any Nutley district) is LOCALLY designated vs only National-Register/notable. Note the early-1900s artists' colony (e.g. Annie Oakley lived in Nutley) as real local-history color, NOT a COA claim. If no local designation, state explicitly.
- NEIGHBORHOODS: verify real Nutley sections (Avondale, Yantacaw, Franklin, Spring Garden, Radcliffe, The Enclosure, Nutley Center/Franklin Ave). Confirm which are real + housing character (early-1900s-to-1940s single-family; some two-family).
- GEOGRAPHY/CLIMATE: the Third River (Yantacaw) runs through Nutley → localized flood/drainage exposure (frame qualitatively); Passaic River on the east border. Mature tree canopy (Nutley is heavily tree-lined). The former Hoffmann-La Roche campus (now ON3 redevelopment, shared with Clifton) for the large-commercial-roof angle — confirm current status/name. Shares EWR climate baseline.`,
  },
  {
    key: 'maplewood',
    title: 'Maplewood, NJ (Township of Maplewood, Essex County)',
    focus: `Find + name-source the Maplewood specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~25,684), land area (sq mi, ~3.9), housing-units, % pre-1940 single-family share if sourceable (Maplewood is known for early-20th-century architect-designed homes — Tudors, Colonials).
- CONSTRUCTION/PERMIT OFFICE: name the Township of Maplewood department administering construction permits (Division of Code Enforcement / Construction Official / Building Dept). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: Maplewood is known for historic preservation — CONFIRM it has a LOCAL Historic Preservation Commission + ordinance, and NAME any LOCALLY designated districts/landmarks (verify — e.g. Maplewood Village area, the Hilton neighborhood, specific listed homes). Distinguish locally designated (COA applies) from Register-only. If a district is only on the National/State Register, say so. This is a city where a COA requirement MAY genuinely apply to exterior roofing in a designated district — confirm precisely before asserting it.
- NEIGHBORHOODS: verify real Maplewood sections (Maplewood Village, Jefferson, Tuscan, Hilton, Memorial Park, Wyoming, the area near Seton Hall/South Orange line). Confirm which are real + housing character (architect-designed Tudors/Colonials/Victorians; tree-lined).
- GEOGRAPHY/CLIMATE: South Mountain Reservation on the WEST/SW edge — CONFIRM Maplewood borders/contains part of the Reservation (it does — the Reservation spans Maplewood, Millburn, West Orange). Heavy mature-tree canopy + reservation-edge tree-debris/branch stressor (frame strongly here, accurately). Slightly higher elevation/snow vs EWR lowland — frame qualitatively, no invented number. NJ Transit Maplewood station (Morris & Essex Line). Shares EWR climate baseline.`,
  },
  {
    key: 'south-orange',
    title: 'South Orange, NJ (Township of South Orange Village, Essex County)',
    focus: `Find + name-source the South Orange specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~18,484; ~16,198 in 2010 — verify the 2020 figure carefully, growth has been notable), land area (sq mi, ~2.9), housing-units, % pre-1940 large single-family share if sourceable. Seton Hall University is in South Orange (large institutional roofs).
- CONSTRUCTION/PERMIT OFFICE: name the Village of South Orange (South Orange Village Township) department administering construction permits (Construction Code Official / Building Department). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: South Orange has a strong local preservation culture — CONFIRM it has a LOCAL Historic Preservation Commission + ordinance, and NAME any LOCALLY designated districts/landmarks. The Montrose Park Historic District is on the National Register — VERIFY whether it is ALSO locally designated (COA applies). Distinguish local-vs-Register precisely. The Village's gas-style streetlamps are a known character feature (color, not a COA claim). This is a city where a COA requirement MAY genuinely apply — confirm before asserting.
- NEIGHBORHOODS: verify real South Orange sections (Montrose Park, Newstead, Tuxedo Park, Academy Heights, the Village center/SOPAC, Seton Village near Seton Hall). Confirm which are real + housing character (large Victorians/Colonials/Tudors; some multi-family near the train + Seton Hall).
- GEOGRAPHY/CLIMATE: South Mountain Reservation on the WEST edge — CONFIRM South Orange borders the Reservation. Rahway River headwaters / Wyoming brook drainage if sourceable. Heavy mature-tree canopy + reservation-edge stressor (frame strongly, accurately). NJ Transit South Orange station (Morris & Essex Line). Seton Hall University commercial/institutional roofs. Shares EWR climate baseline.`,
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
      type: 'array', description: 'per-city geography + microclimate stressors (rivers, tree canopy, reservation, topography, corridors), each with a NAMED source + flag',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    cautions: { type: 'array', items: { type: 'string' }, description: 'over-claims / things authors must NOT assert for this city, each with corrected framing (esp. unconfirmed COA requirements, unsourced microclimate/snow numbers, geography errors like a wrong river or reservation adjacency)' },
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
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate / facts-historic-restoration §8-9 / Batch A urban-core pack)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually unsourced/marketing and should be demoted — esp. a COA requirement asserted without confirmed LOCAL designation, an unsourced snow/wind/temperature number, a geography error (e.g. a wrong river or claiming a city contains South Mountain Reservation when it only borders it), or a population/area figure with no Census source' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong construction-office name, wrong designation status local-vs-Register, wrong population/area, wrong river/adjacency)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  'You are a skeptical completeness + CURRENCY + COMPLIANCE critic for a per-city roofing fact pack covering 5 first-suburbs Essex County NJ cities (Bloomfield, Belleville, Nutley, Maplewood, South Orange).\n\nHere are 5 city researchers\' structured findings (JSON):\n\n' + RESEARCH_JSON + '\n\nAudit for:\n1. GAPS — per-city facts the city-page writers will need but nobody sourced (a confirmed construction-office name per city; a clear LOCAL-vs-Register historic-designation status per city — especially whether South Orange and Maplewood have a LOCAL HPC + designated district where a COA applies, and whether Bloomfield/Belleville/Nutley do NOT; 2020 Census population + land area per city; verified neighborhood names; the shared tree-canopy stressor framing).\n2. CONTRADICTIONS — figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate §1/§3; facts-historic-restoration §8-9; the Batch A urban-core pack shared baseline).\n3. OVER-CLAIMS to cut — a COA requirement asserted for a district without a CONFIRMED local designation (Register listing alone does NOT restrict a private reroof — NPS); an unsourced snow/wind/temperature figure; a geography error (verify each city\'s river: Third River for Bloomfield/Nutley, Passaic on the east border for Belleville/Nutley; verify Maplewood and South Orange BORDER South Mountain Reservation, do not claim a city wholly contains it); any population/area number with no Census source.\n4. CORRECTIONS — wrong municipal-office names, wrong local-vs-Register designation status, wrong population/area, wrong river/adjacency.\n\nVerify against the live web where unsure (WebSearch available). Be specific and quote the offending value. Confirm per city: (a) does it have a LOCAL HPC + designated district at all; (b) the construction-permit department name; (c) the 2020 Census population + land area.',
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  'You are writing the canonical per-city fact pack `CITY-FACTS-first-suburbs.md` for Newark Quality Roofing\'s cities Batch B (the 5 first-suburbs Essex County cities: Bloomfield, Belleville, Nutley, Maplewood, South Orange).\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ' + PROJECT + '/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md  (the Batch A pack — COPY its structure exactly: frontmatter, §0 GLOBAL CORRECTIONS block, per-city "| Claim | Value | Named source | Tier |" tables under Demographics/Construction-Permit-office/Historic/Neighborhoods/Geography-Climate sub-headers, Shared-baseline cross-reference block, Source list, Flagged-gaps section)\n- ' + PROJECT + '/.planning/content-system/research/facts-nj-regulatory-climate.md  (the SHARED NJ permit + climate baseline you will CROSS-REFERENCE, not duplicate)\n\nINPUTS:\n5 city researchers\' structured facts (JSON):\n' + RESEARCH_JSON + '\n\nCritic\'s gaps/contradictions/over-claims/corrections (JSON):\n' + JSON.stringify(critique, null, 1) + '\n\nWRITE THE COMPLETE MARKDOWN FILE TO DISK at ' + PACK_PATH + ' using the Write tool. Requirements:\n- YAML frontmatter (title, slug: city-facts-first-suburbs, project, page_targets: [bloomfield, belleville, nutley, maplewood, south-orange], generated: 2026-06-07, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the page" block carrying the critic\'s corrections + key cautions verbatim as numbered rules. MUST include: (1) the binding historic gate is the LOCAL ordinance + COA from the municipal HPC, NOT National/State Register listing (per NPS) — only assert a COA requirement where a LOCAL designation is CONFIRMED; list which districts per city are LOCAL-designated vs Register-only (call out South Orange / Maplewood if confirmed local, and that Bloomfield/Belleville/Nutley should NOT assert a COA unless confirmed); (2) the shared NJ permit rule (detached 1-2 family reroof = ordinary maintenance, no permit, N.J.A.C. 5:23-2.7) and the construction-office name per city; (3) microclimate framing must be qualitative + the tree-canopy stressor is the shared first-suburbs theme — ban unsourced snow/temperature figures beyond the EWR baseline; (4) any geography error the critic flagged (rivers, reservation adjacency) corrected; (5) use only Census-sourced population/area figures.\n- One "## [City]" section per city, each with "| Claim | Value | Named source | Tier |" tables grouped under sub-headers: Demographics, Construction/Permit office, Historic (local-vs-Register), Neighborhoods (verified), Geography/Climate. Tier in {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a figure/name that has a named source; everything else goes under that city\'s "Gaps [UNVERIFIED]" note.\n- A "## Shared baseline (cross-reference, do NOT duplicate)" block pointing to facts-nj-regulatory-climate.md (§1 permits, §3 climate) + facts-historic-restoration.md §8-9 (COA framework) + cities-batchA/CITY-FACTS-urban-core.md (shared baseline) for the facts already captured site-wide.\n- A "## Source list (named)" block.\n- House style: name-only attribution (no outbound links / URLs in the eventual on-page prose).\n\nAfter writing the file, return a SHORT JSON-ish summary: the path written, the per-city section count, and the count of PRIMARY facts. Also include the full markdown under a key so it can be recovered if the write failed.',
  { label: 'synthesize-city-facts', phase: 'Synthesize' }
);

return { cities: CITIES.map((c) => c.key), research, critique, packPath: PACK_PATH, synthSummary: synth };
