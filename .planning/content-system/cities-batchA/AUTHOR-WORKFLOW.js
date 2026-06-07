export const meta = {
  name: 'cities-batchA-author-urban-core',
  description: 'Author 4 answer-first CityContent snippets (urban-core: newark, east-orange, orange, irvington) grounded in the ruleset + the roof-repair gold exemplar + CITY-FACTS-urban-core.md + the shared NJ/climate/historic/cost fact packs. Full fabrication purge + answer-first rewrite.',
  phases: [
    { title: 'Author', detail: 'one expert author per city → <cityId>.snippet.ts + <cityId>.md draft' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/cities-batchA`;

const GROUNDING = `
BEFORE writing, READ these files in full:
1. ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (the rules + banned list + component templates)
2. ${PROJECT}/src/data/service-content/repair-maintenance.ts  (GOLD EXEMPLAR — the 'roof-repair' object literal: match its answer-first quality, tone, and named-source discipline. NOTE: it is a SERVICE object, a DIFFERENT shape than your CITY object — copy the VOICE, not the field set.)
3. ${PROJECT}/src/lib/schemas.ts  (CityContentSchema — the EXACT field shape your object MUST satisfy. Find "export const CityContentSchema".)
4. ${PROJECT}/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md  (YOUR PRIMARY per-city fact source — READ ITS §0 GLOBAL CORRECTIONS FIRST, then YOUR city's section: demographics, construction office, historic local-vs-Register designation, verified neighborhoods, geography/climate)
5. ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit N.J.A.C. 5:23-2.7; §1.2 25% rule; §1.4 recover-vs-tear-off N.J.A.C. 5:23-6.4; §2 HIC N.J.S.A. 56:8-136 + $500k CGL; §3 NJ climate — snow ~31.5 in/yr, Pg ~25 psf, nor'easters, ~110-115 mph design wind, ~25-30 thunderstorms/yr — all Newark/EWR, shared by all 4 cities)
6. ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (§8 COA framework N.J.S.A. 40:55D-107; §9 Newark Landmarks & HPC + James Street Commons / Lincoln Park; the "Register listing alone does NOT restrict a private reroof" rule per the NPS)
7. ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§0 lifespan master table; §1 asphalt; §2 slate; §3 metal; §4 flat membranes; §5 cedar; §6 tile; §7 NJ per-sq-ft pricing + $10,000-$25,000 NJ replacement; §8 repair-vs-replace rules — all per InterNACHI / named trade bodies / Josten Roofing)
8. ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§6 replacement benchmark; §7 ROI/resale; §8 insurance-claim stats — for the cost section + any claim context)
9. ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing ~90-95% of leaks per the NRCA; §2.2 wind/ASTM D3161 classes; §2.3 hail; §2.5 aging/UV; §3 interior + §4 exterior signs)
`;

// What the CityTemplate RENDERS. Authors write the ANSWERS, never the headings.
// CRITICAL: only `directAnswer` is parsed for **bold**. EVERY other field renders
// RAW — a literal ** there leaks into the HTML and FAILS the gate.
const RENDERED_HEADINGS = (name) => `
The CityTemplate RENDERS these question H-tags (you do NOT write headings; your content fields supply the ANSWERS under them):
- H1: "Who Provides Roofing Services in ${name}?"                       ← answered by directAnswer (≤40 words, the ONLY **bold** field)
- H2: "What Roofing Services Are Available in ${name}?"                 ← a services GRID (shared component) — you write NOTHING for it
- H2: "What Residential Roofing Services Do We Provide?"                ← answered by residential.content[] (first string = the ≤40-word answer)
- H2: "What Commercial Roofing Services Do We Provide?"                 ← answered by commercial.content[] (first string = the ≤40-word answer)
- H2: "What Roofing Problems Are Common in ${name}?"                    ← answered by overview[] (first string MUST answer the PROBLEMS question, not describe the city)
- subheading (rendered <span>): weatherChallenges.heading                ← weatherChallenges.content[] (first string = answer, sourced climate)
- H2: "Which Neighborhoods Do We Serve in ${name}?"                     ← neighborhoods[] (verified-real names + factual descriptions)
- H2: "What Roofing Materials Work Best for ${name} Properties?"        ← shared component — you write NOTHING
- H2: "What Should You Know About Roofing Permits in ${name}?"          ← shared component — you write NOTHING
- H2: "How Much Does Roofing Cost in ${name}?"                          ← pricing{averageRepair, averageReplacement, note} (note carries the named-source attribution)
- H2: "What Roofing Projects Do We Handle in ${name}?"                  ← projectSpotlights[] (REPRESENTATIVE project TYPES — see the reframe rule)
- H2: "What Questions Do ${name} Property Owners Ask About Roofing?"    ← faqs[] (answer first sentence ≤40 words, NO **bold**)
- H2: "Why Should You Choose Our Roofing Company in ${name}?"           ← whyChoose.reasons[] (de-fabbed value props)
- "Where Can You Find Us Near ${name}?" + "Where Else…Near ${name}?"   ← shared components — you write NOTHING
`;

const NQR_FACTS = `
NQR BUSINESS FACTS — assert ONLY these (omit unknowns, never invent, never placeholder):
- Brand: Newark Quality Roofing. HQ: Newark, NJ. Service area: Essex County, NJ. The 4 cities in this batch: Newark, East Orange, Orange, Irvington (all Essex County).
- License: "New Jersey Home Improvement Contractor" (NO license number — it is unverified). Insured/bonded: carries the NJ-required commercial general liability coverage. Free roof inspections / free written estimates.
- credentialsHighlight MUST be EXACTLY: ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']  (the Batch-0-accepted city array — do not change it).
- Naming a product BRAND or material NQR installs is allowed (GAF, Owens Corning, CertainTeed shingles; standing-seam metal; natural slate; clay/concrete tile; cedar shake; EPDM/TPO/PVC/modified-bitumen membranes). Naming an AUTHORITY by name is allowed and required for figures (InterNACHI, the NRCA, the IRC / ICC, ASTM, UL, the NJ Uniform Construction Code / N.J.A.C. 5:23, the NJ DCA, the U.S. Census Bureau, NOAA, the U.S. EPA, the National Park Service, the NJ Historic Preservation Office, Josten Roofing / named NJ cost guides, HomeAdvisor / Modernize).

⛔ BANNED FABRICATION — the current page is FULL of these; PURGE every one. NQR has NO verified completed projects, clients, partnerships, sponsorships, certifications, or tenure:
- NO specific completed-project claims: no "we re-roofed [N] brownstones on Ferry Street", no "12-week project completed on schedule and budget", no fabricated slate/tile COUNTS, no fabricated durations/timelines, no "we have completed projects across all [zip codes]".
- NO fabricated client / portfolio / partnership relationships: no "partnered with property managers at Gateway Center / Military Park", no "Habitat for Humanity", no "we have built relationships with several investors", no named building owners.
- NO sponsorship / community-roots / team-residence claims: no "we sponsor local events", no "our team members live in the neighborhoods", no "deep community roots", no "[City] Projects Completed".
- NO certification-gated warranty/tier claims: no "GAF Certified", no "Master Elite", no "Golden Pledge warranty", no "VELUX certified", no fabricated warranty TERMS (e.g. "20-year warranty", "50-year manufacturer warranty", "golden pledge") stated as an NQR offer. (You may state a MATERIAL's typical service life attributed to InterNACHI — that is a lifespan, not a warranty offer.)
- NO de-fab literals anywhere (incl. metaTitle/metaDescription): "24/7", "same-day", "GAF Certified", "Master Elite", "0% financing", "top-rated", "500+" or any "N+ projects/roofs/homes/reviews", "N+ years of experience/in business", fabricated ratings/phone/address, any [VERIFY]/[UNVERIFIED] literal.

✅ CAPABILITY CLAIMS ARE ALLOWED (present-tense, what NQR DOES): "Newark Quality Roofing installs EPDM and TPO membranes on brownstone flat roofs"; "Newark Quality Roofing replaces asphalt shingle roofs on Vailsburg colonials"; "Newark Quality Roofing rebuilds parapet flashing on shared party walls". Describe the WORK and the CITY's real housing/commercial stock + real climate/code facts — never a fabricated specific job or relationship.

🏛 HISTORIC-DISTRICT DISCIPLINE (per CITY-FACTS §0 + facts-historic-restoration §8-9): only state that exterior roofing work needs a Certificate of Appropriateness where a LOCAL historic designation is CONFIRMED in CITY-FACTS for that city/district. Register listing ALONE does not restrict a private reroof (per the NPS) — never imply it does. If CITY-FACTS does not confirm a local designation for a neighborhood, do NOT assert a COA requirement there.

🌡 CLIMATE DISCIPLINE: use only climate figures present in the packs (snow ~31.5 in/yr, Pg ~25 psf, ~110-115 mph ASCE 7-16 design wind, nor'easters Oct-April, ~25-30 thunderstorms/yr — all Newark/EWR per NOAA). The urban-heat-island angle (Newark) must be EPA-attributed and QUALITATIVE — do NOT assert "10-15°F above suburbs", "surface temps reduced 50°F", "attic temps reduced 20-30°F", "80 mph downtown wind tunnel", or any unsourced figure (the current page invents these — drop them).
`;

const GATE_RULES = `
HARD GATE RULES (audit:semantics / audit:headings / the ** render pass will fail the build otherwise):
- ANSWER-FIRST: the FIRST string of each content array (overview, residential.content, commercial.content, weatherChallenges.content) is a definitive factual answer to that section's rendered heading, ≤40 words. Each faqs[].answer opens with a ≤40-word definitive answer. directAnswer ≤40 words.
- ** BOLD (named main topics in the ANSWERS): bold the 1-3 named main topics/entities with **...** in the ANSWER fields that are PARSED for rich text — directAnswer (CityHero), the FIRST string (answer-first lead) of overview / residential.content / commercial.content / weatherChallenges.content (ProseLead), and the first sentence of each faqs[].answer (CityFaqs). Bold the ENTITY/topic, NOT whole clauses or SEO keywords (ruleset Rule 3); 1-3 spans per answer, no nesting. DO NOT use ** in the BODY paragraphs (overview[1..], residential.content[1..], commercial.content[1..], weatherChallenges.content[1..]), neighborhoods, projectSpotlights, whyChoose, pricing, or meta — those render RAW, so a literal ** there leaks into the prerendered HTML and FAILS the gate.
- NO modality words in declarative prose: will, should, need to, needs to, have to, has to, must, ought to (also avoid might/may/would/could as hedges). EXCEPTION: faqs[].question fields may be phrased as questions ("Should you…/Do you need…"). faqs[].answer and ALL other body fields are NOT exempt. The weatherChallenges.heading and residential/commercial .heading fields are heading-class (modality not gated) but keep them clean.
- Every hard number is attributed in-text to a NAMED source ("per the U.S. Census Bureau", "per NOAA", "per the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7", "per InterNACHI", "per the NRCA", "per Josten Roofing", "per HomeAdvisor"). NEVER invent a number. If a fact is UNVERIFIED in the packs, state it qualitatively or omit.
- COUNTED PLURALS: introduce enumerated sets with their exact integer where structurally detectable ("Newark's roofs face 3 main stressors: …").
- FOLLOW-THROUGH (each section must develop its own lead): after the answer-first lead, the body paragraphs DEVELOP the lead's claim IN THE ORDER the lead introduces it. If the lead enumerates N items, the body covers those N in sequence and the count matches; introduce NO new top-level point the lead did not set up; and keep every fact in the section it belongs to — city DEMOGRAPHICS (population/area/housing-age) only in "who/what" framing, NEVER under "What roofing problems are common?"; PERMIT-LAW only in the Permits section, not the service bodies; HISTORIC-COA only in the Neighborhoods/Permits framing. Lead + body read as ONE developed thought, not two (ruleset Rules 19-21, 33).
- NO outbound links / URLs in prose. NO pronoun co-reference to named entities (repeat "the flashing", "the membrane", "Newark" — avoid it/they/this/that/there as entity stand-ins). NO hype words (best/leading/trusted/premier/top-rated/unbeatable/amazing).
- ONE macro topic per page: roofing in [City], end to end. Repeat the primary n-gram ("roofing in [City]" / "[City]") in the opening answer and the closing section.
`;

const PROJECTSPOTLIGHTS_RULE = `
projectSpotlights REFRAME (the H2 is now "What Roofing Projects Do We Handle in [City]?" — a CAPABILITY question, not a completed-jobs claim). Write 2-3 representative project TYPES grounded in the city's REAL housing/commercial stock:
- title: a project-TYPE name, NO street address, NO date (e.g. "Brownstone Flat-Roof Replacement", "Forest Hill Slate & Copper Restoration", "Low-Slope Warehouse Membrane Replacement", "Multi-Family Asphalt Re-Roof").
- type: 'residential' | 'commercial'.
- description: present-tense scope of what that project TYPE involves in [City] — the materials, methods, and NJ-code/flashing realities — framed as the WORK NQR handles, NOT a specific completed job. NO fabricated duration/outcome/client/count. ≤ ~55 words.
- details: 2-4 factual scope bullets (materials/methods/code), e.g. "EPDM or TPO single-ply membrane on the low-slope deck", "New metal counter-flashing at parapet and party-wall transitions", "Ice-and-water shield at eaves and valleys per the IRC". NO fabricated counts/durations/warranty terms.
`;

const PRICING_RULE = `
pricing (the "How Much Does Roofing Cost in [City]?" section): set averageRepair + averageReplacement to NJ/industry ranges drawn from the fact packs (facts-materials-economics §7: NJ full replacement typically $10,000–$25,000 per HomeAdvisor/Modernize; repair ranges from facts-cost-stats §5/§1) — the SAME ranges across all 4 cities (NJ-regional, not city-specific). Put the NAMED-SOURCE attribution in the note field (e.g. "Ranges reflect typical NJ roofing costs per HomeAdvisor and Modernize; final cost depends on roof size, pitch, material, and access. Newark Quality Roofing provides a free written estimate."). NO fabricated financing, NO "0% financing", NO invented rate/term. The numeric range strings (e.g. "$10,000–$25,000") render in cards without inline attribution — that is why the attribution lives in the note field.
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<cityId>.snippet.ts — a SINGLE object literal followed by a trailing comma, drop-in for an array. Start with a line comment "// ─── <City Name> ───" then "{" and end with "},". It is concatenated between "export const urbanCoreContent: CityContent[] = [" and "];" so it MUST parse as one array element.
  - USE BACKTICK strings (template literals) for all prose — this avoids the apostrophe-escaping trap. Do NOT put a literal backtick or a literal "\${" inside the prose (a real dollar-figure like "$10,000" is fine; only the two-character sequence "\${" is dangerous — if unavoidable, write it as "\\\${").
  - Include ALL required CityContentSchema fields with EXACT counts: cityId (the given id), directAnswer (≤40 words, **bold** answer span), heroHeadline, heroSubheadline, overview (3-6 strings, [0]=answer to "What Roofing Problems Are Common in [City]?"), residential{heading, content(2-5)}, commercial{heading, content(2-5)}, weatherChallenges{heading, content(1-3)}, neighborhoods(3-15 of {name, description}), projectSpotlights(2-5 of {title, type, description, details(2-4)}), faqs(5-8 of {question, answer}), whyChoose{heading, reasons(3-6 of {title, description})}, metaTitle(≤70 chars), metaDescription(≤160 chars), pricing{averageRepair, averageReplacement, note}, credentialsHighlight(the exact 3-item array).
  - residential.heading / commercial.heading / whyChoose.heading are NOT rendered (legacy) but are schema-required → set them to short clean factual labels.
(B) ${OUT}/<cityId>.md — a short draft doc: a rendered-heading→field map, the named sources used + the exact figure each is attributed to, and a self-audit checklist confirming: answer-first first-strings ≤40 words, ** ONLY in directAnswer, zero modality in declaratives (FAQ questions exempt), every number named-sourced, projectSpotlights are representative TYPES (no fabricated specifics), pricing attributed in note, no de-fab literals, no fabricated project/client/sponsorship/certification claims, no outbound links, credentialsHighlight exact, historic claims only where a LOCAL designation is confirmed.
SELF-AUDIT before finishing: (1) grep your own prose for will/should/need to/needs to/have to/has to/must/ought to OUTSIDE faqs[].question — remove every one. (2) grep for ** OUTSIDE directAnswer — remove every one. (3) confirm every digit has a named source from the packs. (4) confirm zero fabricated completed-project/client/sponsorship/certification/warranty-term claims. (5) confirm metaTitle ≤70 and metaDescription ≤160 chars.
Return a JSON summary (do not paste the whole snippet back).
`;

const CITIES = [
  {
    id: 'newark', name: 'Newark',
    angle: `MACRO ANGLE = roofing in Newark, NJ — New Jersey's largest city and the Essex County seat (~311,549 residents, 2020 Census; confirm/the figure + land area from CITY-FACTS). The most diverse urban roofing market in the state: dense Ironbound brownstones/rowhouses with shared party walls + Ferry Street commercial flat roofs; Forest Hill Victorians with slate/copper; post-war colonials and Capes in the South/West Wards; heavy 2-3-family multi-family stock; downtown mixed-use TPO/EPDM. STRESSORS (sourced): the urban-heat-island effect (EPA-attributed, QUALITATIVE only); the Passaic River / Ironbound low-lying flood exposure; nor'easters + ~110-115 mph ASCE 7-16 design wind + ~31.5 in/yr snow (NOAA/EWR). HISTORIC: Newark Landmarks & Historic Preservation Commission issues COAs; James Street Commons + Lincoln Park are designated districts (and any others CITY-FACTS confirms as LOCAL — only assert COA where confirmed). PERMITS: detached 1-2 family reroof = ordinary maintenance, no permit (N.J.A.C. 5:23-2.7); name the Newark permit office EXACTLY as CITY-FACTS §0 Rule 1 states it (the Newark Department of Engineering — Office of Uniform Construction Code / Building Division — NOT Economic & Housing Development). PURGE all the current page's fabricated Ferry Street / Gateway Center / Forest Hill "we completed" claims; the EWR airport straddles Newark + Elizabeth and the Passaic River is Newark's eastern boundary (per CITY-FACTS §0 Rule 4).`,
  },
  {
    id: 'east-orange', name: 'East Orange',
    angle: `MACRO ANGLE = roofing in East Orange, NJ — a transit-connected Essex County city (~69,612 residents, 2020 Census; confirm from CITY-FACTS) bordered by Newark. Defining feature: one of the highest concentrations of MULTI-FAMILY / rental housing in Essex County — converted Victorian/Edwardian multi-family near the Brick Church and East Orange NJ Transit stations (Morris & Essex Line), larger single-family in Elmwood Park, and Main Street + Central Avenue commercial flat roofs. STRESSORS (sourced): mature street-tree canopy (branch debris + valley/gutter leaf load + shade-driven moss on north slopes); shared Newark/EWR climate — nor'easters, ~31.5 in/yr snow, ice-dam risk on older under-insulated homes (attic-heat-loss root cause, per the packs). HISTORIC: only assert a COA/HPC if CITY-FACTS confirms a LOCAL designation for East Orange — otherwise frame restoration qualitatively (no COA claim). PERMITS: 5:23-2.7 (detached 1-2 family no permit); name the East Orange construction office from CITY-FACTS. PURGE the current page's fabricated medical-corridor and project claims.`,
  },
  {
    id: 'orange', name: 'Orange',
    angle: `MACRO ANGLE = roofing in Orange, NJ (legally the City of Orange Township) — a compact, dense Essex County city (~34,447 residents in ~2.2 sq mi, 2020 Census; confirm from CITY-FACTS) on the Morris & Essex Line. Housing spans a century in a tight grid: grand Victorian/Colonial Revival homes (slate/copper) on the higher streets, modest colonials/Capes/bungalows/duplexes between, and a historic Main Street commercial corridor (19th-century storefronts, flat roofs). STRESSORS (sourced): tight-lot conditions (staging/access); the low-lying "Valley" stormwater/moisture; tree-canopy/branch debris from nearby wooded terrain — FRAME THE SOUTH MOUNTAIN RESERVATION ADJACENCY EXACTLY AS CITY-FACTS STATES IT (verify whether Orange directly borders the Reservation or whether that is West Orange/Maplewood/Millburn — do NOT assert a wrong adjacency); shared EWR climate. HISTORIC: only assert a COA/HPC where CITY-FACTS confirms a LOCAL Orange designation — otherwise qualitative. PERMITS: 5:23-2.7; name the Orange construction office from CITY-FACTS. PURGE the current page's fabricated Scotland Road "12-week restoration" and Main Street project claims.`,
  },
  {
    id: 'irvington', name: 'Irvington',
    angle: `MACRO ANGLE = roofing in Irvington, NJ (Township of Irvington) — a dense Essex County township (~61,176 residents in ~2.9 sq mi, 2020 Census; confirm from CITY-FACTS) sharing Newark's Vailsburg border. Defining feature: aging early-20th-century housing stock (1920s-1940s) reaching end-of-life roofing — working-family homes and 2-3-family rentals where durable, value-priced asphalt replacement dominates; Springfield Avenue + Stuyvesant/Chancellor commercial corridors (flat roofs); Route 78 light-industrial flat roofs along the southern edge; Olympic Park residential neighborhood (named for the former amusement park, closed ~1965). STRESSORS (sourced): aging-stock vulnerability to wind/ice/UV; ice dams on under-insulated 1920s-40s homes (attic-heat-loss root cause); shared Newark/EWR climate. HISTORIC: Irvington likely has NO local historic district — CONFIRM in CITY-FACTS; if none, do NOT invent a COA requirement. PERMITS: 5:23-2.7; name the Irvington construction office from CITY-FACTS. PURGE the current page's fabricated Nestor Terrace, Chancellor portfolio, and Habitat/investor-relationship claims.`,
  },
];

phase('Author');
const SUMMARY_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['cityId', 'wrote', 'namedSources', 'hardNumbers', 'answerFirstCheck', 'boldCheck', 'modalityCheck', 'fabricationCheck', 'defabCheck'],
  properties: {
    cityId: { type: 'string' },
    wrote: { type: 'array', items: { type: 'string' }, description: 'file paths written' },
    namedSources: { type: 'array', items: { type: 'string' } },
    hardNumbers: { type: 'array', items: { type: 'string' }, description: 'each figure + its named source' },
    answerFirstCheck: { type: 'string', description: 'confirm overview[0]/residential[0]/commercial[0]/weatherChallenges[0] each ≤40 words and answer their heading; directAnswer ≤40 words' },
    boldCheck: { type: 'string', description: 'confirm ** appears ONLY in directAnswer' },
    modalityCheck: { type: 'string', description: 'confirm zero modality in declaratives (FAQ questions exempt)' },
    fabricationCheck: { type: 'string', description: 'confirm zero fabricated completed-project/client/sponsorship/certification/warranty-term claims; projectSpotlights are representative TYPES' },
    defabCheck: { type: 'string', description: 'confirm no banned de-fab literals; credentialsHighlight is the exact 3-item array; pricing attributed in note' },
  },
};

const results = await parallel(CITIES.map((c, i) => () =>
  agent(
    `You are an expert SEO roofing copywriter producing answer-first semantic content for Newark Quality Roofing.\n\nWRITE the CityContent object for "${c.name}" (cityId: ${c.id}), entry #${i + 1} of 4 in the urban-core archetype file. This is a FULL fabrication-purge + answer-first rewrite of an existing (heavily fabricated) page — do NOT reuse the current page's fabricated specifics.\n\n${GROUNDING}\n${RENDERED_HEADINGS(c.name)}\n${NQR_FACTS}\n${GATE_RULES}\n${PROJECTSPOTLIGHTS_RULE}\n${PRICING_RULE}\n\nFACT GROUNDING FOR THIS CITY: ${c.angle}\n\n${SNIPPET_SPEC}`,
    { label: `author:${c.id}`, phase: 'Author', schema: SUMMARY_SCHEMA }
  )
));

return { authored: results.filter(Boolean) };
