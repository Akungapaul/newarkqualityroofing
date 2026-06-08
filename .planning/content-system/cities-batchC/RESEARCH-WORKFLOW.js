export const meta = {
  name: 'cities-batchC-research-west-essex',
  description: 'Research the per-city fact gaps for the 5 west-essex Essex County cities (West Orange, Montclair, Glen Ridge, Verona, Cedar Grove) — municipal construction/permit office name, LOCAL historic-district/HPC/COA status (designated vs Register-only — HIGHEST RISK for Montclair/Glen Ridge/West Orange/Llewellyn Park), Essex County reservation adjacency (South Mountain vs Eagle Rock vs Mills vs Hilltop), Watchung-ridge elevation/microclimate, demographics, and verified neighborhoods — with named sources + provenance flags; critic pass; synthesize + WRITE CITY-FACTS-west-essex.md',
  phases: [
    { title: 'Research', detail: '5 city researchers: west-orange, montclair, glen-ridge, verona, cedar-grove' },
    { title: 'Critique', detail: 'completeness + currency + COA-overclaim + reservation-geography critic' },
    { title: 'Synthesize', detail: 'one writer assembles + writes the city-facts pack to disk' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const PACK_PATH = PROJECT + '/.planning/content-system/cities-batchC/CITY-FACTS-west-essex.md';

// ─── House rules every city researcher must obey ─────────────────────────────
const RULES = `
You are a local-geography + municipal-permit + historic-preservation + demographics fact researcher for Newark Quality Roofing (NQR), a roofing contractor in Newark / Essex County, NJ. Your output grounds answer-first CITY roofing pages that CANNOT fabricate. The pages describe roofing needs, housing stock, climate stressors, neighborhoods, permits, and representative project TYPES for one Essex County city. These 5 cities are the "west-essex" archetype — townships and a borough along the FIRST and SECOND Watchung Mountain ridges west and north of Newark, ranging from large architecturally diverse West Orange and Montclair to the small whole-borough-historic Glen Ridge to mid-century Verona and ranch-heavy Cedar Grove. The shared defining roofing context is RIDGE/ELEVATION exposure (Watchung Mountains), proximity to large Essex County wooded RESERVATIONS (South Mountain / Eagle Rock / Mills / Hilltop), heavy mature tree canopy, and a STRONG historic-preservation overlay in several of them.

Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: the U.S. Census Bureau / QuickFacts (population, area, housing); the municipality's own .gov site (construction/building department name, historic preservation commission, designated historic districts + the ORDINANCE chapter); the National Park Service / National Register and the NJ DEP Historic Preservation Office (district listings); the Essex County Parks Department (which municipalities each reservation lies in); the NJ DCA Uniform Construction Code (N.J.A.C. 5:23); NOAA (climate); the U.S. EPA (urban heat island / cool roofs). Wikipedia and local news are SECONDARY-named for neighborhood names / geography context.

NON-NEGOTIABLE OUTPUT DISCIPLINE:
- Every hard number / proper name / designation claim MUST carry a NAMED source. If you cannot tie a fact to a real named source, DO NOT assert it — put it in "unresolved" and (if relevant) state how to frame it qualitatively.
- Flag every fact: PRIMARY (Census/.gov municipal site/NPS/NJ HPO/Essex County Parks/the actual code), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named org / Wikipedia / named local news), SECONDARY (generic), or UNVERIFIED (no named source found).
- CURRENCY: it is mid-2026. Use the latest decennial Census (2020) + ACS estimates; label the year. Municipal department names and ordinance chapters change — name the department/chapter but flag any fee/title as time-sensitive.

THE SINGLE MOST IMPORTANT COMPLIANCE CAUTION (research precisely per city): the binding gate for a private homeowner's reroof in a historic context is the LOCAL historic-preservation ORDINANCE + a Certificate of Appropriateness (COA) from the municipal Historic Preservation Commission (HPC) — NOT National/State Register listing, and NOT a private deed-restriction/community committee. Per the National Park Service, "listing in the National Register places no federal restrictions on a private property owner." So: (a) determine whether each city has a LOCAL HPC + ordinance at all (NAME the ordinance chapter); (b) name any LOCALLY DESIGNATED historic districts/landmarks (where a COA actually applies to exterior roofing work); (c) distinguish them from districts that are only on the National/State Register (where private reroofing is NOT restricted). DO NOT assert that any specific neighborhood requires a COA unless you can confirm it is a locally designated landmark or in a locally designated district.

LIKELY REALITY TO CONFIRM PRECISELY (do not assume — verify each, this is the highest-risk fact set):
- MONTCLAIR: has a STRONG, active LOCAL Historic Preservation Commission + ordinance with MULTIPLE locally designated historic districts and landmarks — a COA almost certainly genuinely applies to exterior roofing in designated districts. NAME the ordinance chapter + the locally designated districts (distinguish from National-Register-only ones).
- GLEN RIDGE: virtually the entire borough is the National Register "Glen Ridge Historic District." CRITICAL: confirm whether Glen Ridge ALSO has a LOCAL preservation ordinance + HPC that issues binding COAs for private exterior work, OR whether the borough's protection is National-Register-only / advisory. The current draft page asserts a binding "Historic Preservation Commission" review — VERIFY this is a real local ordinance, not Register-only. If only Register-listed/advisory, the page must NOT assert a binding COA requirement.
- WEST ORANGE: Llewellyn Park (1857, America's first planned residential community, a National Register district) is a PRIVATE GATED COMMUNITY governed by private deed covenants / a residents' committee — that is NOT a municipal COA. Determine SEPARATELY whether the Township of West Orange has its OWN local HPC + ordinance + any locally designated municipal district/landmark. Do NOT conflate Llewellyn Park's private covenant with a municipal COA, and do NOT assert a municipal COA requirement unless West Orange has a confirmed local designation.
- VERONA & CEDAR GROVE: confirm whether each has a LOCAL HPC + ordinance at all (likely minimal/none). If none, the page must NOT assert any COA requirement.

ESSEX COUNTY RESERVATION GEOGRAPHY — CONFIRM per city (the current draft has likely errors; verify against the Essex County Parks Department / NJ sources):
- SOUTH MOUNTAIN RESERVATION (~2,110 acres) lies in WEST ORANGE, Maplewood, and Millburn — among these 5, ONLY West Orange borders/contains part of it. Do NOT attribute South Mountain Reservation to Montclair, Verona, Cedar Grove, or Glen Ridge.
- EAGLE ROCK RESERVATION lies in WEST ORANGE, Montclair, and Verona — confirm which of the 5 actually abut it.
- MILLS RESERVATION lies in CEDAR GROVE and Montclair — confirm.
- HILLTOP RESERVATION lies in VERONA, Cedar Grove, and North Caldwell — confirm.
- GLEN RIDGE borders no large reservation (it is a small inner borough east of Montclair) — confirm and do NOT invent reservation adjacency for it.

KNOWN BASELINE (already in the shared packs facts-nj-regulatory-climate.md + facts-historic-restoration.md §8-9, and the Batch A/B packs cities-batchA/CITY-FACTS-urban-core.md + cities-batchB/CITY-FACTS-first-suburbs.md "Shared baseline" — CONFIRM, do not re-derive): NJ UCC N.J.A.C. 5:23-2.7 makes a detached 1- or 2-family dwelling reroof "ordinary maintenance" (NO permit); the 25% rule + permit applies to commercial/multi-family/attached; Rehab Subcode 5:23-6.4 governs recover-vs-tear-off; HIC registration N.J.S.A. 56:8-136; NJ COAs authorized by N.J.S.A. 40:55D-107. Climate baseline (Newark Liberty / EWR, NOAA 1991-2020) is the shared Essex County reference: ~31.5 in/yr snow, Pg ~25 psf ground snow load, ~110-115 mph ASCE 7-16 design wind, nor'easters Oct-April, ~25-30 thunderstorms/yr; InterNACHI material lifespans (asphalt arch 30 / 3-tab 20, slate 60-150, metal 40-80, EPDM 15-25, TPO 7-20, mod-bit 20). Your job is the PER-CITY specifics that are NOT yet in the packs. The west-essex cities share a defining roofing stressor combo: WATCHUNG-RIDGE ELEVATION (real, but keep any elevation/wind/snow DIFFERENTIAL QUALITATIVE — no invented city-specific snow/wind number beyond the EWR baseline) + RESERVATION-EDGE & MATURE STREET-TREE CANOPY (oak/maple/hickory → leaf/debris clogging valleys & gutters, branch-impact in nor'easters/summer storms, shade-driven moss/algae on north slopes).
`;

const CITIES = [
  {
    key: 'west-orange',
    title: 'West Orange, NJ (Township of West Orange, Essex County)',
    focus: `Find + name-source the West Orange specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~48,843), land area (sq mi, ~12.0), housing-units, owner-occupied share + median value if sourceable (Census ACS). Note the extraordinary range of stock — valley capes/ranches/colonials up to Llewellyn Park estates.
- CONSTRUCTION/PERMIT OFFICE: name the exact current Township of West Orange department/official that administers construction permits (Building Department / Construction Code Official / Division of Inspections). Confirm N.J.A.C. 5:23-2.7 ordinary-maintenance applies.
- HISTORIC (HIGH RISK — separate the two systems): (1) Llewellyn Park is a PRIVATE GATED community (1857; NR-listed; Thomas Edison's Glenmont / Thomas Edison National Historical Park is within it) governed by PRIVATE deed covenants / a residents' committee — NOT a municipal COA; say so explicitly. (2) Does the Township of West Orange have its OWN local HPC + ordinance + any locally designated municipal historic district/landmark? Name the ordinance chapter if it exists; if no local municipal designation is confirmed, state explicitly so the page does NOT assert a municipal COA requirement. The Edison NHP / Glenmont is federally administered, not a homeowner COA matter.
- NEIGHBORHOODS: verify real West Orange sections (Llewellyn Park, St. Cloud, Gregory, Pleasantdale, Pleasant Valley, Tory Corner, Redwood, Mont Clair Heights? — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: West Orange straddles the FIRST Watchung Mountain ridge with a large elevation range (keep elevation differential qualitative — do NOT assert "nearly 500 feet" or "winds 15-20% stronger" or "70 mph" unless name-sourced; treat current-draft figures as UNVERIFIED). It CONTAINS part of SOUTH MOUNTAIN RESERVATION and part of EAGLE ROCK RESERVATION — confirm both via Essex County Parks. Eagle Rock Reservation (overlook of the NYC skyline) is in West Orange. Mature tree canopy stressor. Shares EWR climate baseline. Route 280 corridor + Main St / Pleasant Valley Way commercial (flat-roof angle).`,
  },
  {
    key: 'montclair',
    title: 'Montclair, NJ (Township of Montclair, Essex County)',
    focus: `Find + name-source the Montclair specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~40,921), land area (sq mi, ~6.3), housing-units, owner-occupied share + median value if sourceable. Note the extraordinary architectural diversity (Victorian, Queen Anne, Tudor, Arts & Crafts/Craftsman, Colonial Revival, mid-century modern).
- CONSTRUCTION/PERMIT OFFICE: name the Township of Montclair department/official administering construction permits (Building Department / Construction Code Official). N.J.A.C. 5:23-2.7 applies.
- HISTORIC (HIGH VALUE — Montclair is the strong-HPC city): CONFIRM Montclair has an ACTIVE LOCAL Historic Preservation Commission + ordinance (NAME the chapter) and NAME the LOCALLY DESIGNATED historic districts and landmarks where a COA applies to exterior work (verify the actual designated-district list — there may be designated districts such as those around Upper Montclair, plus individually designated landmarks). Distinguish LOCALLY designated (COA applies) from National/State-Register-only. This is the city where a COA requirement genuinely applies to exterior roofing in a designated district — but assert it ONLY for confirmed locally designated districts/landmarks, conditionally ("if your property is in a Montclair locally designated historic district or is a designated landmark, exterior roofing work requires HPC review / a COA").
- NEIGHBORHOODS: verify real Montclair sections/wards (Upper Montclair, Watchung Plaza area, Montclair Center, South End, Frog Hollow, Estate Section, Erwin Park, etc. — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: Montclair sits on the FIRST Watchung Mountain ridge (real elevation gain west toward the ridge — keep qualitative, no invented "500 feet"/"stronger winds %" figure). It abuts EAGLE ROCK RESERVATION (shared with West Orange/Verona) and MILLS RESERVATION (shared with Cedar Grove) — confirm via Essex County Parks; do NOT attribute SOUTH MOUNTAIN RESERVATION to Montclair (that is a West Orange/Maplewood/Millburn feature). Mature tree canopy stressor. Bloomfield Avenue commercial corridor (flat-roof angle; attached storefronts). Shares EWR climate baseline.`,
  },
  {
    key: 'glen-ridge',
    title: 'Glen Ridge, NJ (Borough of Glen Ridge, Essex County)',
    focus: `Find + name-source the Glen Ridge specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~7,527), land area (sq mi, ~1.3), housing-units, owner-occupied share + median value if sourceable. Predominantly 1890s-1930s Victorian/Edwardian/Colonial-Revival/Dutch-Colonial single-family stock.
- CONSTRUCTION/PERMIT OFFICE: name the Borough of Glen Ridge department/official administering construction permits (Building Department / Construction Code Official). N.J.A.C. 5:23-2.7 applies.
- HISTORIC (CRITICAL — resolve the local-vs-Register question precisely): virtually the whole borough is the National Register "Glen Ridge Historic District" (listed ~1981/1980s). DETERMINE whether Glen Ridge ALSO has a LOCAL preservation ordinance + an HPC that issues BINDING Certificates of Appropriateness for private exterior work (e.g. a Historic Preservation Commission established by borough ordinance), OR whether the protection is National-Register-only / the HPC is advisory. The current draft asserts borough "Historic Preservation Commission" approval is required for roofing — CONFIRM or REFUTE this. If it is Register-only / advisory, the page must frame it as "nationally recognized historic district" WITHOUT asserting a binding municipal COA requirement (per the NPS, Register listing alone places no restriction on a private owner). The gaslit streets are a real borough character feature (color, not a COA claim).
- NEIGHBORHOODS: verify real Glen Ridge streets/sections (Ridgewood Avenue, Forest Avenue, Baldwin Street, Linden Avenue, etc. — verify each). Glen Ridge is small; "neighborhoods" are really notable avenues/sections.
- GEOGRAPHY/CLIMATE: Glen Ridge is a small (~1.3 sq mi) inner borough EAST of Montclair, bordered by Bloomfield, Montclair, and East Orange; Toney's Brook runs through it. It does NOT border a large county reservation — do NOT invent reservation adjacency. Mature elm/oak street-tree canopy is the key stressor. Shares EWR climate baseline. Mostly residential (minimal commercial — Bloomfield Ave edge).`,
  },
  {
    key: 'verona',
    title: 'Verona, NJ (Township of Verona, Essex County)',
    focus: `Find + name-source the Verona specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~14,572), land area (sq mi, ~2.8), housing-units, owner-occupied share + median value if sourceable. Mostly pre-war colonials/Dutch-Colonials + a large share of postwar capes/ranches and 1960s-70s split-levels/bi-levels.
- CONSTRUCTION/PERMIT OFFICE: name the Township of Verona department/official administering construction permits (Building Department / Construction Code Official). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: CONFIRM whether Verona has a LOCAL HPC + ordinance + any locally designated district/landmark (likely minimal/none). If none is confirmed, state explicitly so the page asserts NO COA requirement. (Verona Park is an Olmsted-Brothers-designed county park / NR-listed landscape — that is a park, not a private-owner COA gate.)
- NEIGHBORHOODS: verify real Verona sections (Verona Park area, Claremont Avenue, Personette Avenue, Lakeview, Center of town, Pompton Avenue corridor — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: Verona sits between the First and Second Watchung ridges (rolling terrain — keep elevation/wind differential qualitative, no invented "stronger winds"/"70 mph" figure). Verona Park (Olmsted Brothers) + Verona Lake on the Peckman River anchor the township. Confirm reservation adjacency: Verona abuts EAGLE ROCK RESERVATION (shared with West Orange/Montclair) and HILLTOP RESERVATION (shared with Cedar Grove/North Caldwell) — verify via Essex County Parks; do NOT attribute South Mountain Reservation to Verona. Mature tree canopy + shade near Verona Park is the key stressor. Bloomfield Ave (south border) + Pompton Ave commercial corridors (flat-roof angle). Shares EWR climate baseline.`,
  },
  {
    key: 'cedar-grove',
    title: 'Cedar Grove, NJ (Township of Cedar Grove, Essex County)',
    focus: `Find + name-source the Cedar Grove specifics:
- DEMOGRAPHICS: 2020 Census population (confirm ~14,052), land area (sq mi, ~4.2), housing-units, owner-occupied share + median value if sourceable. Ranch-heavy mid-century (1950-1975) stock is the single largest category + later colonials; keep housing-age shares qualitative unless Census-sourced.
- CONSTRUCTION/PERMIT OFFICE: name the Township of Cedar Grove department/official administering construction permits (Building Department / Construction Code Official). N.J.A.C. 5:23-2.7 applies.
- HISTORIC: CONFIRM whether Cedar Grove has a LOCAL HPC + ordinance + any locally designated district/landmark (likely minimal/none). If none is confirmed, state explicitly so the page asserts NO COA requirement.
- NEIGHBORHOODS: verify real Cedar Grove sections (Route 23 / Pompton Ave corridor, Ridge Road, Bradford Avenue, Cedar Grove Parkway, Bowden Road near the North Caldwell border, etc. — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: Cedar Grove sits on the western slope of the SECOND Watchung Mountain in NORTHERN Essex County (elevated terrain — keep any snow/freeze-thaw/wind differential QUALITATIVE; do NOT assert "2 to 4 inches greater per storm" or any invented figure; treat the current draft's snow-differential number as UNVERIFIED). Confirm reservation adjacency: Cedar Grove contains/abuts MILLS RESERVATION (shared with Montclair) and HILLTOP RESERVATION (shared with Verona/North Caldwell) — verify via Essex County Parks; do NOT attribute South Mountain Reservation to Cedar Grove. Route 23 corridor + Pompton Ave commercial (flat-roof angle; truck-traffic/road-salt context — keep qualitative). Mature tree canopy (oak/maple, Norway spruce needle-shed) is the key stressor. Shares EWR climate baseline.`,
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
      type: 'array', description: 'HPC existence + ordinance chapter + LOCALLY designated districts/landmarks (vs Register-only vs private-covenant), each with a NAMED source + flag. Mark clearly whether each district is LOCAL-DESIGNATED (COA applies), REGISTER-ONLY (no private restriction), or PRIVATE-COVENANT (e.g. Llewellyn Park — not a municipal COA).',
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
      type: 'array', description: 'per-city geography + microclimate stressors (Watchung ridge/elevation, which RESERVATIONS the city abuts, rivers/brooks, tree canopy, corridors), each with a NAMED source + flag. Reservation adjacency MUST be sourced (Essex County Parks).',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    cautions: { type: 'array', items: { type: 'string' }, description: 'over-claims / things authors must NOT assert for this city, each with corrected framing (esp. unconfirmed COA requirements — Glen Ridge binding-COA, West Orange municipal-COA, Llewellyn-Park-private-covenant-vs-municipal; unsourced elevation/wind/snow numbers like "500 feet"/"70 mph"/"2-4 inches greater"; reservation-geography errors like attributing South Mountain Reservation to Montclair/Verona/Cedar Grove/Glen Ridge)' },
    unresolved: { type: 'array', items: { type: 'string' }, description: 'facts you could NOT tie to a named source — authors must omit or state qualitatively' },
  },
};

phase('Research');
const research = (await parallel(CITIES.map((c) => () =>
  agent(
    RULES + '\n\nRESEARCH CITY: ' + c.title + '\n\nFIND AND NAME-SOURCE THE FOLLOWING:\n' + c.focus + '\n\nReturn the structured facts. Be exhaustive but disciplined: any number/name/designation with no named source goes in "unresolved", never in "facts". Put every over-claim authors must avoid (esp. an unconfirmed binding COA requirement, an unsourced elevation/wind/snow number, or a reservation-adjacency error) in "cautions" with the corrected framing.',
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
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate / facts-historic-restoration §8-9 / Batch A urban-core + Batch B first-suburbs packs)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually unsourced/marketing and should be demoted — esp. a binding COA requirement asserted without confirmed LOCAL designation (Glen Ridge binding-COA; a West Orange municipal COA; treating Llewellyn Park\'s private covenant as a municipal COA), an unsourced elevation/snow/wind number ("500 feet", "70 mph", "2-4 inches greater per storm", "winds 15-20% stronger"), a reservation-geography error (attributing South Mountain Reservation to Montclair/Verona/Cedar Grove/Glen Ridge, or a wrong Eagle Rock/Mills/Hilltop adjacency), or a population/area figure with no Census source' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong construction-office name, wrong designation status local-vs-Register-vs-private-covenant, wrong population/area, wrong reservation adjacency)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  'You are a skeptical completeness + CURRENCY + COMPLIANCE critic for a per-city roofing fact pack covering 5 west-essex Essex County NJ cities (West Orange, Montclair, Glen Ridge, Verona, Cedar Grove).\n\nHere are 5 city researchers\' structured findings (JSON):\n\n' + RESEARCH_JSON + '\n\nAudit for:\n1. GAPS — per-city facts the city-page writers will need but nobody sourced (a confirmed construction-office name per city; a clear LOCAL-vs-Register-vs-private-covenant historic-designation status per city — ESPECIALLY whether Montclair has a local HPC + named designated districts where a COA applies, whether Glen Ridge has a BINDING local COA or is Register-only/advisory, whether West Orange has a municipal local designation distinct from Llewellyn Park\'s private covenant, and whether Verona/Cedar Grove have any local HPC at all; 2020 Census population + land area per city; verified neighborhood names; sourced reservation adjacency per city).\n2. CONTRADICTIONS — figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate §1/§3; facts-historic-restoration §8-9; the Batch A/B packs shared baseline).\n3. OVER-CLAIMS to cut — a binding COA requirement asserted without a CONFIRMED local designation (Register listing alone does NOT restrict a private reroof — NPS; a private deed covenant like Llewellyn Park\'s is NOT a municipal COA); an unsourced elevation/snow/wind figure; a reservation-geography error (verify each city: South Mountain Reservation = West Orange only among these 5; Eagle Rock = West Orange/Montclair/Verona; Mills = Cedar Grove/Montclair; Hilltop = Verona/Cedar Grove/North Caldwell; Glen Ridge = no large reservation); any population/area number with no Census source.\n4. CORRECTIONS — wrong municipal-office names, wrong local-vs-Register-vs-covenant designation status, wrong population/area, wrong reservation adjacency.\n\nVerify against the live web where unsure (WebSearch available). Be specific and quote the offending value. Confirm per city: (a) does it have a LOCAL HPC + ordinance + designated district (COA applies) at all, or is it Register-only/none; (b) the construction-permit department name; (c) the 2020 Census population + land area; (d) which reservations it actually abuts.',
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  'You are writing the canonical per-city fact pack `CITY-FACTS-west-essex.md` for Newark Quality Roofing\'s cities Batch C (the 5 west-essex Essex County cities: West Orange, Montclair, Glen Ridge, Verona, Cedar Grove).\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ' + PROJECT + '/.planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md  (the Batch B pack — COPY its structure exactly: frontmatter, §0 GLOBAL CORRECTIONS block, per-city "| Claim | Value | Named source | Tier |" tables under Demographics/Construction-Permit-office/Historic/Neighborhoods/Geography-Climate sub-headers, Shared-baseline cross-reference block, Source list, Flagged-gaps section)\n- ' + PROJECT + '/.planning/content-system/research/facts-nj-regulatory-climate.md  (the SHARED NJ permit + climate baseline you will CROSS-REFERENCE, not duplicate)\n\nINPUTS:\n5 city researchers\' structured facts (JSON):\n' + RESEARCH_JSON + '\n\nCritic\'s gaps/contradictions/over-claims/corrections (JSON):\n' + JSON.stringify(critique, null, 1) + '\n\nWRITE THE COMPLETE MARKDOWN FILE TO DISK at ' + PACK_PATH + ' using the Write tool. Requirements:\n- YAML frontmatter (title, slug: city-facts-west-essex, project, page_targets: [west-orange, montclair, glen-ridge, verona, cedar-grove], generated: 2026-06-07, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the page" block carrying the critic\'s corrections + key cautions verbatim as numbered rules. MUST include: (1) the binding historic gate is the LOCAL ordinance + COA from the municipal HPC, NOT National/State Register listing (per NPS) and NOT a private deed covenant (e.g. Llewellyn Park) — for EACH city state precisely whether a COA applies and where: Montclair (local HPC + named designated districts — COA applies, conditional on designated district/landmark), Glen Ridge (state whether BINDING local COA or Register-only/advisory per the research — do NOT assert a binding COA unless confirmed), West Orange (Llewellyn Park = private covenant NOT a municipal COA; state whether any municipal local designation exists), Verona + Cedar Grove (state whether any local HPC exists — if none, NO COA requirement); (2) the shared NJ permit rule (detached 1-2 family reroof = ordinary maintenance, no permit, N.J.A.C. 5:23-2.7) and the construction-office name per city; (3) reservation geography corrected — South Mountain Reservation = West Orange only (NOT Montclair/Verona/Cedar Grove/Glen Ridge); Eagle Rock = West Orange/Montclair/Verona; Mills = Cedar Grove/Montclair; Hilltop = Verona/Cedar Grove/North Caldwell; Glen Ridge = no large reservation; (4) microclimate framing must be qualitative — BAN unsourced elevation/snow/wind figures ("500 feet", "70 mph", "2-4 inches greater per storm", "winds 15-20%/10-28% stronger/discounts") beyond the EWR baseline; the shared stressor is ridge elevation + reservation-edge/mature-tree canopy framed qualitatively; (5) use only Census-sourced population/area figures.\n- One "## [City]" section per city, each with "| Claim | Value | Named source | Tier |" tables grouped under sub-headers: Demographics, Construction/Permit office, Historic (local-vs-Register-vs-covenant), Neighborhoods (verified), Geography/Climate (incl. sourced reservation adjacency). Tier in {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a figure/name that has a named source; everything else goes under that city\'s "Gaps [UNVERIFIED]" note.\n- A "## Shared baseline (cross-reference, do NOT duplicate)" block pointing to facts-nj-regulatory-climate.md (§1 permits, §3 climate) + facts-historic-restoration.md §8-9 (COA framework) + cities-batchA/CITY-FACTS-urban-core.md + cities-batchB/CITY-FACTS-first-suburbs.md (shared baseline) for the facts already captured site-wide.\n- A "## Source list (named)" block.\n- House style: name-only attribution (no outbound links / URLs in the eventual on-page prose).\n\nAfter writing the file, return a SHORT JSON-ish summary: the path written, the per-city section count, and the count of PRIMARY facts. Also include the full markdown under a key so it can be recovered if the write failed.',
  { label: 'synthesize-city-facts', phase: 'Synthesize' }
);

return { cities: CITIES.map((c) => c.key), research, critique, packPath: PACK_PATH, synthSummary: synth };
