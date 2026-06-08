export const meta = {
  name: 'cities-batchD-research-caldwells-roseland',
  description: 'Research the per-city fact gaps for the 5 caldwells-roseland Essex County cities (Caldwell, North Caldwell, Essex Fells, Fairfield, Roseland) — municipal construction/permit office name, LOCAL historic-district/HPC/COA status (Essex Fells + Caldwell are the HIGHEST-RISK for a real local designation; North Caldwell/Roseland/Fairfield likely none — verify each), Essex County reservation adjacency (Hilltop Reservation in North Caldwell vs the rest = none), the Fairfield Passaic-River FLOODPLAIN (the one genuinely different stressor in the batch — Hatfield Swamp, FEMA flood zones), far-western Essex upland terrain, demographics, and verified neighborhoods — with named sources + provenance flags; critic pass; synthesize + WRITE CITY-FACTS-caldwells-roseland.md',
  phases: [
    { title: 'Research', detail: '5 city researchers: caldwell, north-caldwell, essex-fells, fairfield, roseland' },
    { title: 'Critique', detail: 'completeness + currency + COA-overclaim + reservation/floodplain-geography critic' },
    { title: 'Synthesize', detail: 'one writer assembles + writes the city-facts pack to disk' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const PACK_PATH = PROJECT + '/.planning/content-system/cities-batchD/CITY-FACTS-caldwells-roseland.md';

// ─── House rules every city researcher must obey ─────────────────────────────
const RULES = `
You are a local-geography + municipal-permit + historic-preservation + demographics fact researcher for Newark Quality Roofing (NQR), a roofing contractor in Newark / Essex County, NJ. Your output grounds answer-first CITY roofing pages that CANNOT fabricate. The pages describe roofing needs, housing stock, climate stressors, neighborhoods, permits, and representative project TYPES for one Essex County city. These 5 cities are the "caldwells-roseland" archetype — the FAR-WESTERN / NORTHWESTERN corner of Essex County: four small affluent, heavily wooded upland boroughs (Caldwell, North Caldwell, Essex Fells, Roseland) plus one larger low-lying township (Fairfield) that sits in the PASSAIC RIVER FLOODPLAIN and carries a dense Route 46 / Route 80 commercial corridor. The shared defining roofing context is MATURE TREE CANOPY (leaf/valley/gutter debris, branch impact, north-slope moss/algae), far-western Essex UPLAND terrain (qualitative elevation/wind exposure — these boroughs sit on the high ground west of the Watchungs), and — for Fairfield ONLY — genuine PASSAIC RIVER FLOODPLAIN exposure (a real, documentable difference from every other Essex city rewritten so far). Several of these boroughs are old (Caldwell, Essex Fells) and MAY carry a local historic designation; the newer/larger ones (Fairfield, Roseland, much of North Caldwell) likely do not. Verify each precisely.

Use real web research (WebSearch / WebFetch / perplexity_research are available via tool search — load and use them). Prefer PRIMARY sources: the U.S. Census Bureau / QuickFacts (population, area, housing); the municipality's own .gov site (construction/building department name, historic preservation commission, designated historic districts + the ORDINANCE chapter); the National Park Service / National Register and the NJ DEP Historic Preservation Office (district listings); the Essex County Parks Department (which municipalities each reservation lies in); FEMA / the NJ DEP / the NOAA-NWS Advanced Hydrologic Prediction Service (Passaic River flood gauges + FEMA flood zones for Fairfield); the NJ DCA Uniform Construction Code (N.J.A.C. 5:23); NOAA (climate). Wikipedia and local news are SECONDARY-named for neighborhood names / geography context.

NON-NEGOTIABLE OUTPUT DISCIPLINE:
- Every hard number / proper name / designation claim MUST carry a NAMED source. If you cannot tie a fact to a real named source, DO NOT assert it — put it in "unresolved" and (if relevant) state how to frame it qualitatively.
- Flag every fact: PRIMARY (Census/.gov municipal site/NPS/NJ HPO/Essex County Parks/FEMA/NOAA-NWS/the actual code), PRIMARY-attrib (primary body, paraphrased/qualitative), SECONDARY-named (named org / Wikipedia / named local news), SECONDARY (generic), or UNVERIFIED (no named source found).
- CURRENCY: it is mid-2026. Use the latest decennial Census (2020) + ACS estimates; label the year. Municipal department names and ordinance chapters change — name the department/chapter but flag any fee/title as time-sensitive.

THE SINGLE MOST IMPORTANT COMPLIANCE CAUTION (research precisely per city): the binding gate for a private homeowner's reroof in a historic context is the LOCAL historic-preservation ORDINANCE + a Certificate of Appropriateness (COA) from the municipal Historic Preservation Commission (HPC) — NOT National/State Register listing, and NOT a state-owned historic SITE. Per the National Park Service, "listing in the National Register places no federal restrictions on a private property owner." So: (a) determine whether each city has a LOCAL HPC + ordinance at all (NAME the ordinance chapter); (b) name any LOCALLY DESIGNATED historic districts/landmarks (where a COA actually applies to exterior roofing work); (c) distinguish them from districts/sites that are only on the National/State Register or are state-owned (where private reroofing is NOT restricted). DO NOT assert that any specific neighborhood requires a COA unless you can confirm it is a locally designated landmark or in a locally designated district.

LIKELY REALITY TO CONFIRM PRECISELY (do not assume — verify each, this is the highest-risk fact set):
- CALDWELL (Borough): an old borough (the Grover Cleveland Birthplace is here — a STATE-owned historic site, NOT a homeowner COA gate). CONFIRM whether the Borough of Caldwell has its OWN local Historic Preservation Commission + preservation ordinance + any LOCALLY designated historic district/landmark (e.g. anything around the Bloomfield Avenue / Grover Cleveland Park / Personette area). NAME the ordinance chapter if it exists. If no local municipal designation is confirmed, state so explicitly so the page does NOT assert a COA requirement. The Grover Cleveland Birthplace State Historic Site is administered by the NJ Division of Parks & Forestry — heritage color, not a private-owner reroof gate.
- ESSEX FELLS (Borough): an exclusive ~1900 PLANNED community (laid out with a designed plan; one-acre-minimum lots, no commercial, no sidewalks). There is likely an "Essex Fells Historic District" on the National/State Register — CRITICAL: determine whether Essex Fells ALSO has a LOCAL preservation ordinance + an HPC that issues BINDING Certificates of Appropriateness for private exterior work, OR whether any historic recognition is National/State-Register-only / advisory. If Register-only / advisory, the page must NOT assert a binding COA requirement (per the NPS, Register listing alone places no restriction on a private owner). Name the ordinance chapter if a local HPC exists.
- NORTH CALDWELL (Borough): affluent, large-lot, heavily wooded, almost entirely residential. CONFIRM whether it has any LOCAL HPC + ordinance + designated landmark (likely none). If none, the page must assert NO COA requirement.
- ROSELAND (Borough): residential + a notable Eisenhower Parkway / Becker Farm Road office/corporate corridor. CONFIRM whether it has any LOCAL HPC + ordinance + designated landmark (likely none — the Harrison House is a local museum/landmark; confirm its status). If none, assert NO COA requirement.
- FAIRFIELD (Township): larger, low-lying, Route 46 / Route 80 commercial. CONFIRM whether it has any LOCAL HPC + ordinance + designated landmark (likely none). If none, assert NO COA requirement.

ESSEX COUNTY RESERVATION + FLOODPLAIN GEOGRAPHY — CONFIRM per city (the current draft has likely errors; verify against the Essex County Parks Department / FEMA / NOAA-NWS / NJ sources):
- HILLTOP RESERVATION (~284 acres) lies in NORTH CALDWELL, Verona, and Cedar Grove — among these 5 caldwells-roseland cities, ONLY North Caldwell borders/contains part of it. Confirm via Essex County Parks. Do NOT attribute Hilltop Reservation to Caldwell, Essex Fells, Fairfield, or Roseland.
- Confirm that CALDWELL, ESSEX FELLS, FAIRFIELD, and ROSELAND border NO large Essex County reservation (do NOT invent South Mountain / Eagle Rock / Mills / Hilltop adjacency for them). The West Essex Trail (former Caldwell Branch rail line) is a linear county trail, NOT a reservation — name it correctly if relevant.
- FAIRFIELD FLOODPLAIN (the batch's one genuinely different stressor — research it with named sources): Fairfield Township sits in the PASSAIC RIVER floodplain at the confluence area of the Passaic, Pompton, and tributary rivers; the Hatfield Swamp (a large freshwater wetland on the Passaic, partly in Fairfield/West Essex) and extensive FEMA Special Flood Hazard Areas cover much of the township. Document the Passaic River flood exposure with NAMED sources (FEMA flood-zone maps / the NJ DEP / the NOAA-NWS Passaic River flood gauges / named coverage of Hurricane Floyd 1999, Irene 2011, Ida 2021). Roseland's western edge along the Passaic River near the Fairfield/Livingston line MAY carry localized floodplain too — confirm. Keep the roofing relevance correct: floodplain exposure raises low-slope drainage, ground-water/soffit-line, and storm-frequency context — frame it as a roof-relevant DRAINAGE/storm stressor, not a basement-flood claim.

KNOWN BASELINE (already in the shared packs facts-nj-regulatory-climate.md + facts-historic-restoration.md §8-9, and the Batch A/B/C packs cities-batchA/CITY-FACTS-urban-core.md + cities-batchB/CITY-FACTS-first-suburbs.md + cities-batchC/CITY-FACTS-west-essex.md "Shared baseline" — CONFIRM, do not re-derive): NJ UCC N.J.A.C. 5:23-2.7 makes a detached 1- or 2-family dwelling reroof "ordinary maintenance" (NO permit); the 25% rule + permit applies to commercial/multi-family/attached; Rehab Subcode 5:23-6.4 governs recover-vs-tear-off; HIC registration N.J.S.A. 56:8-136 + $500k CGL under N.J.S.A. 56:8-142; NJ COAs authorized by N.J.S.A. 40:55D-107. Climate baseline (Newark Liberty / EWR, NOAA 1991-2020) is the shared Essex County reference: ~31.5 in/yr snow, Pg ~25 psf ground snow load, ~110-115 mph ASCE 7-16 design wind, nor'easters Oct-April, ~25-30 thunderstorms/yr; InterNACHI material lifespans (asphalt arch 30 / 3-tab 20, slate 60-150, metal 40-80, EPDM 15-25, TPO 7-20, mod-bit 20). Your job is the PER-CITY specifics that are NOT yet in the packs. The caldwells-roseland cities share a defining roofing stressor combo: FAR-WESTERN ESSEX UPLAND terrain (real, but keep any elevation/wind/snow DIFFERENTIAL QUALITATIVE — no invented city-specific snow/wind number beyond the EWR baseline; the elevated western ground MAY run marginally cooler/snowier than the EWR lowland — qualitative only) + MATURE TREE CANOPY (oak/maple → leaf/debris clogging valleys & gutters, branch-impact in nor'easters/summer storms, shade-driven moss/algae on north slopes) + (FAIRFIELD only, and possibly Roseland's river edge) PASSAIC-RIVER FLOODPLAIN drainage/storm exposure.
`;

const CITIES = [
  {
    key: 'caldwell',
    title: 'Caldwell, NJ (Borough of Caldwell, Essex County)',
    focus: `Find + name-source the Caldwell specifics:
- DEMOGRAPHICS: 2020 Census population (verify — confirm the exact figure, do NOT assume), land area (sq mi, ~1.2), housing-units, owner-occupied share + median value + median household income if sourceable (Census ACS). Note the older borough stock — Victorians, early-20th-c. colonials, Cape Cods, postwar ranches on compact lots; a walkable Bloomfield Avenue downtown; Caldwell University.
- CONSTRUCTION/PERMIT OFFICE: name the exact current Borough of Caldwell department/official that administers construction permits (Building Department / Construction Code Official / Division of Inspections) and its address. Confirm N.J.A.C. 5:23-2.7 ordinary-maintenance applies.
- HISTORIC (HIGH RISK — one of the two old boroughs): Does the Borough of Caldwell have its OWN local HPC + preservation ordinance + any locally designated municipal historic district/landmark? Name the ordinance chapter if it exists; if no local municipal designation is confirmed, state explicitly so the page does NOT assert a COA requirement. The Grover Cleveland Birthplace (207 Bloomfield Ave) is a STATE-owned historic site (NJ Division of Parks & Forestry / Grover Cleveland Birthplace Memorial Association) — heritage color, NOT a private-owner reroof gate.
- NEIGHBORHOODS: verify real Caldwell sections/streets (the Bloomfield Avenue downtown corridor, Grover Cleveland Park vicinity, Westville Avenue, Personette Street, Central Avenue, the Caldwell University area — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: Caldwell is a small compact borough on the far-western Essex uplands, bordered by West Caldwell (Essex), Verona, North Caldwell, Essex Fells, and West Orange — confirm. It borders NO large county reservation — do NOT invent reservation adjacency. The West Essex Trail (former rail line) runs through the Caldwells — name it as a trail, not a reservation. Mature street-tree canopy stressor. Shares EWR climate baseline. Bloomfield Avenue commercial corridor (flat-roof angle).`,
  },
  {
    key: 'north-caldwell',
    title: 'North Caldwell, NJ (Borough of North Caldwell, Essex County)',
    focus: `Find + name-source the North Caldwell specifics:
- DEMOGRAPHICS: 2020 Census population (verify — confirm the exact figure), land area (sq mi, ~3.0), housing-units, owner-occupied share + median owner value + median household income if sourceable (Census ACS — North Caldwell is among Essex County's wealthiest, large-lot suburbs). Note the affluent, large-lot, heavily wooded, almost-entirely-residential character; custom colonials, contemporaries, Tudors on 1+ acre lots.
- CONSTRUCTION/PERMIT OFFICE: name the Borough of North Caldwell department/official administering construction permits (Building Department / Construction Code Official) + address. N.J.A.C. 5:23-2.7 applies.
- HISTORIC: CONFIRM whether North Caldwell has a LOCAL HPC + ordinance + any locally designated district/landmark (likely NONE). If none is confirmed, state explicitly so the page asserts NO COA requirement.
- NEIGHBORHOODS: verify real North Caldwell sections/streets (Mountain Avenue, Grandview Avenue, Gould Avenue, Central Avenue, the Mountainside/Hilltop area near the reservation — verify each; do NOT invent "Green Brook Road Estates" or marketing section names). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: North Caldwell sits on elevated far-western Essex upland terrain (the high ground of the Second Watchung uplands; the Hilltop area is the borough's highest) — keep any elevation/wind differential QUALITATIVE, do NOT assert a city-specific elevation/wind figure. CONFIRM via Essex County Parks that HILLTOP RESERVATION (~284 ac) lies partly in North Caldwell (shared with Verona + Cedar Grove) — North Caldwell is the ONE caldwells-roseland city that abuts a county reservation. Confirm the Passaic River forms part of North Caldwell's northern boundary (toward Fairfield) — a localized edge, frame qualitatively. Heavy mature tree canopy is the key stressor. Shares EWR climate baseline. Almost no commercial (small).`,
  },
  {
    key: 'essex-fells',
    title: 'Essex Fells, NJ (Borough of Essex Fells, Essex County)',
    focus: `Find + name-source the Essex Fells specifics:
- DEMOGRAPHICS: 2020 Census population (verify — confirm the exact figure; Essex Fells is very small), land area (sq mi, ~1.4), housing-units, owner-occupied share + median owner value + median household income if sourceable (Census ACS — one of NJ's wealthiest small boroughs). Note the exclusive, one-acre-minimum, no-commercial, no-sidewalk, heavily wooded PLANNED-community character; historic stone/Tudor estates + custom homes.
- CONSTRUCTION/PERMIT OFFICE: name the Borough of Essex Fells department/official administering construction permits (Building Department / Construction Code Official) + address. N.J.A.C. 5:23-2.7 applies.
- HISTORIC (HIGH RISK — the planned community): There is likely an "Essex Fells Historic District" listed on the National/State Register (the borough was a designed ~1890s-1900s planned community). CRITICAL: determine whether Essex Fells ALSO has a LOCAL preservation ordinance + an HPC that issues BINDING Certificates of Appropriateness for private exterior work, OR whether the historic recognition is National/State-Register-only / advisory. The current draft asserts NO COA — VERIFY this is correct. If Register-only/advisory, the page must frame Essex Fells' historic character WITHOUT asserting a binding municipal COA requirement (per the NPS, Register listing alone places no restriction on a private owner). If a LOCAL ordinance + HPC + designated district IS confirmed, name the chapter and frame the COA accordingly. The Essex Fells one-acre zoning + the borough's designed plan are real character features (color), not a COA claim.
- NEIGHBORHOODS: verify real Essex Fells streets/sections (Fells Road, Roseland Avenue, Oak Lane, Devon Road, Hawthorne Road, the borough is small so "neighborhoods" are really notable roads — verify each). Confirm which are real + housing character.
- GEOGRAPHY/CLIMATE: Essex Fells is a small (~1.4 sq mi) wooded upland borough bordered by Caldwell, North Caldwell, Roseland, Livingston, and West Orange — confirm. It borders NO large county reservation — do NOT invent reservation adjacency (its wooded character is private/borough land + street canopy, not a reservation). Heavy mature tree canopy is the key stressor. Shares EWR climate baseline. NO commercial district (residential-only — do NOT fabricate a commercial corridor; commercial content must be framed around the few permitted non-residential/accessory or municipal structures and the general low-slope capability, OR kept minimal/honest).`,
  },
  {
    key: 'fairfield',
    title: 'Fairfield, NJ (Township of Fairfield, Essex County)',
    focus: `Find + name-source the Fairfield specifics (THE DIFFERENT ONE — floodplain + heavy commercial):
- DEMOGRAPHICS: 2020 Census population (verify — confirm the exact figure), land area (sq mi, ~10.4 — the largest in this batch), housing-units, owner-occupied share + median owner value + median household income if sourceable (Census ACS). Note the dual character: 1970s-1990s suburban residential (colonials, split-levels, bi-levels, raised ranches) + one of northern NJ's densest Route 46 / Route 80 commercial corridors (big-box, retail strips, auto dealers, offices, light-industrial / the Fairfield Business Campus → a large flat/low-slope commercial roofing market).
- CONSTRUCTION/PERMIT OFFICE: name the Township of Fairfield department/official administering construction permits (Building Department / Construction Code Official / Division of Inspections) + address. N.J.A.C. 5:23-2.7 applies; the 25% rule applies to its large commercial stock.
- HISTORIC: CONFIRM whether Fairfield has a LOCAL HPC + ordinance + any locally designated district/landmark (likely NONE — it is a larger, more recently developed township). The historic Israel Crane / old Dutch-Reformed / Camptown-era farmhouses may be NR-listed sites — confirm status; Register/state listing alone is not a homeowner COA gate. If no local designation, state explicitly so the page asserts NO COA requirement.
- NEIGHBORHOODS / CORRIDORS: verify real Fairfield areas (the Route 46 corridor, the Route 80 corridor, the Fairfield Business Campus / Clinton Road industrial area, Pier Lane, Hollywood Avenue, Plymouth Street, Big Piece Road, Little Falls Road, Hollywood/Camp Lane residential — verify each). Confirm which are real + housing/commercial character.
- GEOGRAPHY/CLIMATE (THE FLOODPLAIN — research with NAMED sources): Fairfield Township sits in the PASSAIC RIVER floodplain, near the confluence of the Passaic and Pompton Rivers; the Hatfield Swamp (a large Passaic-River freshwater wetland, partly in Fairfield) and extensive FEMA Special Flood Hazard Areas cover much of the township. Document with NAMED sources: FEMA flood-zone designations, the NJ DEP, the NOAA-NWS Passaic River flood gauges, and named coverage of major Passaic floods (Hurricane Floyd 1999, Irene 2011, Ida 2021) that hit Fairfield. Roofing relevance = elevated storm/drainage exposure, the value of low-slope positive drainage + sound flashing/gutters in a flood-prone township — frame as a roof-relevant DRAINAGE/storm stressor, NOT a basement-flooding claim. Fairfield borders NO large county reservation; the floodplain + Hatfield Swamp + the rivers are its defining geography. Heavy commercial flat-roof angle dominates. Shares EWR climate baseline.`,
  },
  {
    key: 'roseland',
    title: 'Roseland, NJ (Borough of Roseland, Essex County)',
    focus: `Find + name-source the Roseland specifics:
- DEMOGRAPHICS: 2020 Census population (verify — confirm the exact figure), land area (sq mi, ~3.6), housing-units, owner-occupied share + median owner value + median household income if sourceable (Census ACS). Note the mostly-residential borough (postwar + later colonials/ranches/splits) PLUS a notable corporate-office corridor along Eisenhower Parkway / Becker Farm Road (office parks → a real flat/low-slope commercial roofing market — Roseland is a recognized office-park borough; ADP was long headquartered here).
- CONSTRUCTION/PERMIT OFFICE: name the Borough of Roseland department/official administering construction permits (Building Department / Construction Code Official) + address. N.J.A.C. 5:23-2.7 applies.
- HISTORIC: CONFIRM whether Roseland has a LOCAL HPC + ordinance + any locally designated district/landmark (likely NONE). The Harrison House (a local historic museum, run by the Roseland Historical Society) — confirm whether it is a state/local landmark vs a private-owner COA gate (a single museum building is not a township-wide COA). If no local designation, state explicitly so the page asserts NO COA requirement.
- NEIGHBORHOODS / CORRIDORS: verify real Roseland areas (the Eagle Rock Avenue + Eisenhower Parkway corridors, Becker Farm Road office park, Harrison Avenue, Livingston Avenue, the Roseland/Essex Fells and Roseland/Livingston residential edges — verify each). Confirm which are real + housing/commercial character.
- GEOGRAPHY/CLIMATE: Roseland is a far-western Essex upland borough bordered by Essex Fells, Livingston, Fairfield, and West Caldwell — confirm. It borders NO large county reservation — do NOT invent reservation adjacency. Its western/northern edge sits near the Passaic River (toward Fairfield/Livingston) — confirm whether any Roseland land falls in the Passaic floodplain (localized; frame qualitatively if so). Mature tree canopy is the key residential stressor. The Eisenhower Parkway / Becker Farm Road office corridor is the commercial flat-roof angle. Shares EWR climate baseline.`,
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
      type: 'array', description: 'HPC existence + ordinance chapter + LOCALLY designated districts/landmarks (vs Register-only vs state-owned-site), each with a NAMED source + flag. Mark clearly whether each district/landmark is LOCAL-DESIGNATED (COA applies), REGISTER-ONLY (no private restriction), or STATE-OWNED-SITE / MUSEUM (not a private-owner COA).',
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
      type: 'array', description: 'per-city geography + microclimate stressors (far-western upland terrain, which RESERVATIONS the city abuts [Hilltop = North Caldwell only], the Fairfield Passaic floodplain / Hatfield Swamp / FEMA zones, rivers, tree canopy, commercial corridors), each with a NAMED source + flag. Reservation adjacency + floodplain MUST be sourced (Essex County Parks / FEMA / NOAA-NWS / NJ DEP).',
      items: {
        type: 'object', additionalProperties: false,
        required: ['claim', 'value', 'source', 'flag'],
        properties: {
          claim: { type: 'string' }, value: { type: 'string' }, source: { type: 'string' },
          flag: { type: 'string', enum: ['PRIMARY', 'PRIMARY-attrib', 'SECONDARY-named', 'SECONDARY', 'UNVERIFIED'] },
        },
      },
    },
    cautions: { type: 'array', items: { type: 'string' }, description: 'over-claims / things authors must NOT assert for this city, each with corrected framing (esp. unconfirmed COA requirements — Essex Fells binding-COA vs Register-only, Caldwell local-COA, treating the Grover Cleveland Birthplace state site or the Harrison House museum as a homeowner COA; unsourced elevation/wind/snow numbers; reservation-geography errors like attributing Hilltop Reservation to Caldwell/Essex Fells/Fairfield/Roseland, or inventing reservation adjacency for any non-North-Caldwell city; over-/under-stating the Fairfield floodplain)' },
    unresolved: { type: 'array', items: { type: 'string' }, description: 'facts you could NOT tie to a named source — authors must omit or state qualitatively' },
  },
};

phase('Research');
const research = (await parallel(CITIES.map((c) => () =>
  agent(
    RULES + '\n\nRESEARCH CITY: ' + c.title + '\n\nFIND AND NAME-SOURCE THE FOLLOWING:\n' + c.focus + '\n\nReturn the structured facts. Be exhaustive but disciplined: any number/name/designation with no named source goes in "unresolved", never in "facts". Put every over-claim authors must avoid (esp. an unconfirmed binding COA requirement, an unsourced elevation/wind/snow number, a reservation-adjacency error, or an over-/under-stated floodplain claim) in "cautions" with the corrected framing.',
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
    contradictions: { type: 'array', items: { type: 'string' }, description: 'figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate / facts-historic-restoration §8-9 / Batch A urban-core + Batch B first-suburbs + Batch C west-essex packs)' },
    overclaimsToCut: { type: 'array', items: { type: 'string' }, description: 'any "fact" that is actually unsourced/marketing and should be demoted — esp. a binding COA requirement asserted without confirmed LOCAL designation (an Essex Fells binding-COA the research did not confirm; a Caldwell local COA; treating the Grover Cleveland Birthplace state site or the Roseland Harrison House museum as a homeowner COA gate), an unsourced elevation/snow/wind number, a reservation-geography error (attributing Hilltop Reservation to anything but North Caldwell, or inventing reservation adjacency for Caldwell/Essex Fells/Fairfield/Roseland), an over-/under-stated Fairfield floodplain claim, or a population/area figure with no Census source' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'specific fixes (wrong construction-office name, wrong designation status local-vs-Register-vs-state-site, wrong population/area, wrong reservation adjacency, wrong floodplain framing)' },
    readyToSynthesize: { type: 'boolean' },
  },
};
const critique = await agent(
  'You are a skeptical completeness + CURRENCY + COMPLIANCE critic for a per-city roofing fact pack covering 5 caldwells-roseland Essex County NJ cities (Caldwell, North Caldwell, Essex Fells, Fairfield, Roseland).\n\nHere are 5 city researchers\' structured findings (JSON):\n\n' + RESEARCH_JSON + '\n\nAudit for:\n1. GAPS — per-city facts the city-page writers will need but nobody sourced (a confirmed construction-office name per city; a clear LOCAL-vs-Register-vs-state-site historic-designation status per city — ESPECIALLY whether Essex Fells has a BINDING local COA or is Register-only/advisory, whether Caldwell has any local HPC + designated district, and whether North Caldwell/Fairfield/Roseland have any local HPC at all; 2020 Census population + land area per city; verified neighborhood names; sourced reservation adjacency [Hilltop = North Caldwell only]; the Fairfield Passaic-floodplain facts with named sources).\n2. CONTRADICTIONS — figures/designations that conflict across cities or with the shared packs (facts-nj-regulatory-climate §1/§3; facts-historic-restoration §8-9; the Batch A/B/C packs shared baseline).\n3. OVER-CLAIMS to cut — a binding COA requirement asserted without a CONFIRMED local designation (Register listing alone does NOT restrict a private reroof — NPS; a state-owned site like the Grover Cleveland Birthplace, or a museum like the Harrison House, is NOT a homeowner COA gate); an unsourced elevation/snow/wind figure; a reservation-geography error (verify each city: Hilltop Reservation = North Caldwell only among these 5; Caldwell/Essex Fells/Fairfield/Roseland = no large reservation); an over-/under-stated Fairfield floodplain claim; any population/area number with no Census source.\n4. CORRECTIONS — wrong municipal-office names, wrong local-vs-Register-vs-state-site designation status, wrong population/area, wrong reservation adjacency, wrong floodplain framing.\n\nVerify against the live web where unsure (WebSearch available). Be specific and quote the offending value. Confirm per city: (a) does it have a LOCAL HPC + ordinance + designated district (COA applies) at all, or is it Register-only/none; (b) the construction-permit department name; (c) the 2020 Census population + land area; (d) which reservations it actually abuts (Hilltop = North Caldwell only); (e) the Fairfield floodplain facts.',
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIQUE_SCHEMA }
);

phase('Synthesize');
const synth = await agent(
  'You are writing the canonical per-city fact pack `CITY-FACTS-caldwells-roseland.md` for Newark Quality Roofing\'s cities Batch D (the 5 caldwells-roseland Essex County cities: Caldwell, North Caldwell, Essex Fells, Fairfield, Roseland).\n\nFIRST read these on disk to MATCH THE EXACT FORMAT + house style:\n- ' + PROJECT + '/.planning/content-system/cities-batchC/CITY-FACTS-west-essex.md  (the Batch C pack — COPY its structure exactly: frontmatter, §0 GLOBAL CORRECTIONS block, per-city "| Claim | Value | Named source | Tier |" tables under Demographics/Construction-Permit-office/Historic/Neighborhoods/Geography-Climate sub-headers, Shared-baseline cross-reference block, Source list, Flagged-gaps section)\n- ' + PROJECT + '/.planning/content-system/research/facts-nj-regulatory-climate.md  (the SHARED NJ permit + climate baseline you will CROSS-REFERENCE, not duplicate)\n\nINPUTS:\n5 city researchers\' structured facts (JSON):\n' + RESEARCH_JSON + '\n\nCritic\'s gaps/contradictions/over-claims/corrections (JSON):\n' + JSON.stringify(critique, null, 1) + '\n\nWRITE THE COMPLETE MARKDOWN FILE TO DISK at ' + PACK_PATH + ' using the Write tool. Requirements:\n- YAML frontmatter (title, slug: city-facts-caldwells-roseland, project, page_targets: [caldwell, north-caldwell, essex-fells, fairfield, roseland], generated: 2026-06-07, purpose, status: research). Do NOT fabricate a workflow run id.\n- A "## 0. GLOBAL CORRECTIONS — read before writing the page" block carrying the critic\'s corrections + key cautions verbatim as numbered rules. MUST include: (1) the binding historic gate is the LOCAL ordinance + COA from the municipal HPC, NOT National/State Register listing (per NPS) and NOT a state-owned site or museum — for EACH city state precisely whether a COA applies and where: Caldwell (state whether any local HPC + designated district exists per the research — the Grover Cleveland Birthplace is a STATE site, not a homeowner gate), Essex Fells (state whether a BINDING local COA exists or it is Register-only/advisory per the research — do NOT assert a binding COA unless confirmed), North Caldwell + Fairfield + Roseland (state whether any local HPC exists — if none, NO COA requirement; the Roseland Harrison House museum is not a township-wide COA); (2) the shared NJ permit rule (detached 1-2 family reroof = ordinary maintenance, no permit, N.J.A.C. 5:23-2.7) and the construction-office name per city; (3) reservation geography corrected — Hilltop Reservation = North Caldwell only (shared with Verona/Cedar Grove); Caldwell/Essex Fells/Fairfield/Roseland = no large reservation; (4) the FAIRFIELD Passaic-River floodplain facts (Hatfield Swamp, FEMA Special Flood Hazard Areas, NOAA-NWS Passaic gauges, named major floods) framed as a roof-relevant drainage/storm stressor — and whether any Roseland river edge carries localized floodplain; (5) microclimate framing must be qualitative — BAN unsourced elevation/snow/wind figures beyond the EWR baseline; the shared stressor is far-western upland terrain + mature-tree canopy framed qualitatively, plus the Fairfield floodplain; (6) use only Census-sourced population/area figures.\n- One "## [City]" section per city, each with "| Claim | Value | Named source | Tier |" tables grouped under sub-headers: Demographics, Construction/Permit office, Historic (local-vs-Register-vs-state-site), Neighborhoods (verified), Geography/Climate (incl. sourced reservation adjacency + Fairfield floodplain). Tier in {PRIMARY, PRIMARY-attrib, SECONDARY-named, SECONDARY, UNVERIFIED}. Apply EVERY correction + drop/demote every over-claim the critic flagged. Only include a figure/name that has a named source; everything else goes under that city\'s "Gaps [UNVERIFIED]" note.\n- A "## Shared baseline (cross-reference, do NOT duplicate)" block pointing to facts-nj-regulatory-climate.md (§1 permits, §3 climate) + facts-historic-restoration.md §8-9 (COA framework) + cities-batchA/CITY-FACTS-urban-core.md + cities-batchB/CITY-FACTS-first-suburbs.md + cities-batchC/CITY-FACTS-west-essex.md (shared baseline) for the facts already captured site-wide.\n- A "## Source list (named)" block.\n- House style: name-only attribution (no outbound links / URLs in the eventual on-page prose).\n\nAfter writing the file, return a SHORT JSON-ish summary: the path written, the per-city section count, and the count of PRIMARY facts. Also include the full markdown under a key so it can be recovered if the write failed.',
  { label: 'synthesize-city-facts', phase: 'Synthesize' }
);

return { cities: CITIES.map((c) => c.key), research, critique, packPath: PACK_PATH, synthSummary: synth };
