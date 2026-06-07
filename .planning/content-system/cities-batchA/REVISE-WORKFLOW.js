export const meta = {
  name: 'cities-batchA-revise-followthrough',
  description: 'Revise the 4 committed urban-core city objects so each prose section BODY develops its answer-first lead in order (no drift, count matches, off-topic facts relocated/cut). Output full revised CityContent snippets; everything except the 4 prose bodies is preserved verbatim.',
  phases: [
    { title: 'Revise', detail: 'one agent per city → revised <cityId>.snippet.ts + <cityId>.followthrough.md' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/cities-batchA`;
const SOURCE = `${PROJECT}/src/data/city-content/urban-core.ts`;

const GROUNDING = `
BEFORE writing, READ these files in full:
1. ${SOURCE}  (the CURRENT committed file — find the object whose cityId matches your assignment; you revise THIS object)
2. ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list; esp. Rule 2 answer-first, 19-21 context vector / no context break, 33 perspective-after-answer, 7/8 figures + counted plurals)
3. ${PROJECT}/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md  (the §0 corrections + YOUR city's verified facts)
4. ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md (§1 permits, §3 climate), facts-historic-restoration.md (§8-9 COA), facts-materials-economics.md (§0/§7 lifespans+NJ pricing), facts-causes-signs.md (§2.1 flashing 90-95%, §2.2 wind, §2.5 aging) — for the named-source figures you keep.
`;

// The single rule this workflow enforces.
const FOLLOW_THROUGH = `
THE FOLLOW-THROUGH RULE (the whole point of this revision):
After the answer-first lead (the FIRST string of a section array), every body paragraph DEVELOPS the lead's own claim, IN THE ORDER THE LEAD INTRODUCES IT.
- If the lead enumerates N items ("3 stressors: nor'easter wind, freeze-thaw, party-wall flashing"), the body covers item 1, then item 2, then item 3 — each with its named-source evidence — and the COUNTED PLURAL matches the items actually developed. If you keep 3 in the lead, develop exactly those 3; if the section genuinely needs more, change the lead's number to match (or drop the number).
- The body introduces NO new top-level point the lead did not set up. Do not bolt on a stressor/service/material the lead never named.
- The body contains NO fact that belongs to a DIFFERENT section's question. Specifically: city DEMOGRAPHICS (population, land area, housing-age, owner-occupancy) belong ONLY in framing "who/what" — NOT under "What roofing problems are common?"; cut them from the overview body (a single brief who-we-serve clause is fine, but population/sq-mi statistics do not develop a "problems" lead). PERMIT-LAW detail (N.J.A.C. 5:23-2.7 thresholds) belongs to the Permits section, NOT the Residential/Commercial service bodies — cut it there (a service body may note "a detached 1-2 family reroof is ordinary maintenance, no permit" ONLY if the lead set up permits, which it does not). HISTORIC-COA detail belongs to the Neighborhoods/Permits framing, not a materials/services body.
- Each paragraph continues the prior paragraph's subject thread (Rule 21) — no orphan paragraph, no topic teleport. Expansion/perspective comes AFTER the answer (Rule 33), never as a subject change.
Result: lead + body read as ONE developed thought, not two separate thoughts.

WORKED EXAMPLE (Newark overview, the current defect → the fix):
- Lead: "Roofing in Newark faces 3 main stressors: nor'easter wind, freeze-thaw cycling, and dense party-wall flashing details on aging stock..."
- CURRENT body (defective): develops flashing + freeze-thaw, never develops WIND, then jumps to demographics (311,549 residents, housing age), then introduces UHI + flooding (a 4th/5th stressor) → count + thread broken.
- FIXED body: paragraph on nor'easter WIND (uplift on edges/ridges; ASCE 7-16 ~110-115 mph design wind hedged, per the NJ UCC; nor'easters Oct-April per NOAA) → paragraph on FREEZE-THAW (~31.5 in/yr snow + repeated 32F crossing per NOAA/EWR; water expands on freezing, stresses sealed details) → paragraph on PARTY-WALL FLASHING (shared parapets on Ironbound rowhouses; ~90-95% of leaks at flashing per the NRCA). Demographics + UHI + flooding are CUT from the "problems" body (UHI/flood can stay only if you fold them into the lead's enumeration and develop them — but cleaner to keep the 3 the lead names). The lead's "3" now matches a body that develops exactly those 3.
`;

const NQR_FACTS = `
PRESERVE all current NQR facts/claims; do NOT introduce anything new or fabricated. Allowed: capability claims ("Newark Quality Roofing installs/replaces/rebuilds X"), named authorities (U.S. Census Bureau, NOAA, U.S. EPA, the NRCA, InterNACHI, the IRC, ASTM, the NJ Uniform Construction Code / N.J.A.C. 5:23, the NPS, Josten Roofing / HomeAdvisor / Modernize), product/material brands. BANNED: any fabricated completed-project/client/sponsorship/certification/warranty-term claim; de-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ projects/years); [VERIFY]/[UNVERIFIED]; modality (will/should/need to/needs to/have to/has to/must/ought to) in declaratives (FAQ questions exempt). credentialsHighlight stays EXACTLY ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local'].
`;

const GATE_RULES = `
PRESERVE the gate compliance already in place:
- Answer-first: the FIRST string of overview / weatherChallenges.content / residential.content / commercial.content stays a definitive <=40-word answer (keep or lightly refine the existing lead so it sets up the body; do not bury the answer).
- ** BOLD only in directAnswer (which you DO NOT touch). NO ** anywhere in the body arrays (raw render -> a literal ** fails the gate).
- Every hard number named-sourced in-text. Counted plurals match (Rule 8). No outbound links, no hype, no entity-pronoun co-reference.
- One macro topic per section.
`;

const TASK = `
WHAT TO CHANGE vs PRESERVE:
- REVISE the BODY (every string AFTER the first) of these 4 arrays only: overview[], weatherChallenges.content[], residential.content[], commercial.content[]. Apply the FOLLOW-THROUGH RULE to each.
- You MAY lightly refine a section's LEAD (the first string) ONLY to make it correctly set up the body it now leads (e.g., fix a count, or name the items the body will develop). Keep it answer-first, <=40 words, no **.
- PRESERVE VERBATIM, unchanged: cityId, directAnswer, heroHeadline, heroSubheadline, residential.heading, commercial.heading, weatherChallenges.heading, neighborhoods[], projectSpotlights[], faqs[], whyChoose, metaTitle, metaDescription, pricing, credentialsHighlight. Copy them through exactly as they are in the current file.
- The body arrays must still satisfy the schema min/max counts (overview 3-6, residential 2-5, commercial 2-5, weatherChallenges 1-3).
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<cityId>.snippet.ts — the COMPLETE revised object literal (all fields, with the 4 body arrays revised and everything else copied verbatim), starting with "// ─── <City Name> ───" then "{" and ending "},". USE BACKTICK strings for prose (no literal backtick or "\${" inside prose). It concatenates between "export const urbanCoreContent: CityContent[] = [" and "];" so it MUST parse as one array element.
(B) ${OUT}/<cityId>.followthrough.md — a short note: for each of the 4 sections, the lead's claim/enumeration, the ordered points the revised body now develops, the counted-plural check, and what off-topic facts you CUT or MOVED (e.g. "removed demographics from overview body; removed permit-law from residential body").
SELF-AUDIT before finishing: (1) each body develops its lead's points IN ORDER; (2) counted plurals match; (3) no demographics under "problems", no permit-law in service bodies, no new top-level point; (4) no ** in body arrays, no modality in declaratives, every number named-sourced; (5) all preserved fields are byte-identical to the current file.
Return a JSON summary (do not paste the whole snippet back).
`;

const CITIES = [
  { id: 'newark', name: 'Newark' },
  { id: 'east-orange', name: 'East Orange' },
  { id: 'orange', name: 'Orange' },
  { id: 'irvington', name: 'Irvington' },
];

phase('Revise');
const SUMMARY_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['cityId', 'wrote', 'sectionsRevised', 'cutOrMoved', 'countsMatch', 'preservedCheck'],
  properties: {
    cityId: { type: 'string' },
    wrote: { type: 'array', items: { type: 'string' } },
    sectionsRevised: { type: 'array', items: { type: 'string' }, description: 'for each section: the lead enumeration + the ordered points the body now develops' },
    cutOrMoved: { type: 'array', items: { type: 'string' }, description: 'off-topic facts removed/relocated (demographics from problems, permit-law from services, etc.)' },
    countsMatch: { type: 'string', description: 'confirm each lead counted-plural matches the items the body develops' },
    preservedCheck: { type: 'string', description: 'confirm directAnswer/neighborhoods/projectSpotlights/faqs/whyChoose/pricing/meta/credentialsHighlight copied verbatim, unchanged' },
  },
};

const results = await parallel(CITIES.map((c) => () =>
  agent(
    `You are an expert semantic-SEO roofing editor. REVISE the existing CityContent object for "${c.name}" (cityId: ${c.id}) in urban-core.ts so each prose section's body FOLLOWS THROUGH on its answer-first lead. This is a surgical revision of an already-committed page — preserve everything except the 4 prose bodies.\n\n${GROUNDING}\n${FOLLOW_THROUGH}\n${NQR_FACTS}\n${GATE_RULES}\n${TASK}\n${SNIPPET_SPEC}`,
    { label: `revise:${c.id}`, phase: 'Revise', schema: SUMMARY_SCHEMA }
  )
));

return { revised: results.filter(Boolean) };
