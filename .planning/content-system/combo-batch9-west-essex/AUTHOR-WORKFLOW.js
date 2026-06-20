export const meta = {
  name: 'combo-batch9-author',
  description: 'Author answer-first + de-fab + entity-grounded rewrites of west-essex service×city combos (Combo Batch 9: west-orange, montclair, glen-ridge, verona, cedar-grove)',
  phases: [
    { title: 'Author', detail: 'one agent per combo writes a .snippet.ts + .md from its city brief + its rewritten service content' },
  ],
}

phase('Author')
const combos = typeof args === 'string' ? JSON.parse(args) : args
log(`Authoring ${combos.length} combos (west-essex)…`)

const PROCESS_HEAVY = new Set([
  'roof-thermal-imaging-inspections', 'storm-damage-roof-repair', 'commercial-roof-installation',
  'commercial-roof-repair', 'infrared-roof-leak-detection', 'insurance-roof-replacement', 'roof-overlay-installation',
])

const CITY = {
  'west-orange': {
    name: 'West Orange', cityId: 'west-orange', briefName: '_WEST-ORANGE-BRIEF.md',
    coa: 'NARROW LANDMARK-ONLY COA — the West Orange Historic Preservation Commission issues a Certificate of Appropriateness for the township\'s roughly ten LOCALLY DESIGNATED landmarks under Section 25-30 of the municipal code (e.g. Holy Trinity Episcopal Church, the State Diner, the Hedges Block). A typical detached 1–2-family reroof needs NO COA. Llewellyn Park is a PRIVATE 1857 deed-of-trust community governed by its own Committee of Managers — that is NOT a township COA (except an individually designated structure such as the Gate House). Per the NPS, National Register listing alone places no restriction on a private owner. Assert the COA only for the designated landmarks; never assert a township COA over Llewellyn Park generally.',
    office: 'the Township of West Orange Building & Construction Code Enforcement (the State UCC enforcing agency); do NOT name a Construction Official',
    geo: 'West Orange sits on the First Watchung ridge and contains part of the South Mountain Reservation AND part of the Eagle Rock Reservation (per Essex County Parks) — both press mature canopy against ridge-side roofs; wide stock from capes/ranches/Colonials in Pleasantdale and Gregory up to hillside Tudors and Llewellyn Park estate homes; Main Street / Valley Road / Pleasant Valley Way + the Route 280 corridor carry the low-slope commercial storefronts',
    verified: 'St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Tory Corner, Crestmont and Crystal Lake (+ the Main Street / Valley Road commercial spine)',
    avoid: 'Montclair\'s four local historic districts + Article XXIII of Chapter 347 §347-136 + Mills Reservation; Glen Ridge\'s borough-wide Chapter 15.32 district + 825 Bloomfield Avenue + the lowland-no-reservation framing; Verona\'s Peckman River flood + Chapter 150 Article XXII "HPC review" + 600 Bloomfield Avenue + Hilltop Reservation; Cedar Grove\'s no-COA / Heritage Advisory Committee + 525 Pompton Avenue + the Mills/Hilltop-only framing',
    fab: 'fabricated "numerous projects in Llewellyn Park," "we coordinate with the community association," named-address completed jobs, "reduce attic temperatures by up to 30 degrees," "reduce heating and cooling costs by 15 to 25 percent," "premium discounts of 10 to 28 percent," the "$35,000–$75,000"/"$40,000–$80,000" pricing tiers, and any fabricated NQR warranty term',
  },
  'montclair': {
    name: 'Montclair', cityId: 'montclair', briefName: '_MONTCLAIR-BRIEF.md',
    coa: 'CONDITIONAL LOCAL COA — a Certificate of Appropriateness from the Montclair Historic Preservation Commission is required ONLY for appearance-changing exterior roofing on a property inside one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a designated local landmark, under Article XXIII of Chapter 347 (§347-136). In-kind maintenance/repair with no change in design, scale, or appearance is EXEMPT. The Estate Section is NOMINATED only, NOT locally designated (standard N.J.A.C. 5:23-2.7 path). Per the NPS, National Register listing alone places no restriction. Never assert a Village-wide or township-wide COA.',
    office: 'the Township of Montclair Building Office (the local UCC enforcing agency / permit office); do NOT name a Construction Official',
    geo: 'Montclair lies along the First Watchung ridge and adjoins the Eagle Rock Reservation and the Mills Reservation (per Essex County Parks) — NOT the South Mountain Reservation; the west side stands more exposed to gusts than valley lots (QUALITATIVE, no elevation/gust number); a large majority of the housing predates WWII, and roughly 54% of units sit in multi-unit structures (per the U.S. Census Bureau and the Township Housing Element)',
    verified: 'Upper Montclair, Watchung Plaza, Montclair Center / Town Center, Estate Section, Pine Street, South End, Erwin Park',
    avoid: 'West Orange\'s Section 25-30 landmark-only COA + Llewellyn Park private deed-of-trust + South Mountain Reservation + Route 280; Glen Ridge\'s borough-wide Chapter 15.32 district + 825 Bloomfield Avenue + lowland-no-reservation; Verona\'s Peckman River flood + Chapter 150 Article XXII "HPC review" + 600 Bloomfield Avenue + Hilltop Reservation; Cedar Grove\'s no-COA / Heritage Advisory Committee + 525 Pompton Avenue',
    fab: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," any fabricated street not on the verified list, any fabricated savings/storm-spike/response-time claim, any Village-wide COA claim, and any fabricated NQR warranty term',
  },
  'glen-ridge': {
    name: 'Glen Ridge', cityId: 'glen-ridge', briefName: '_GLEN-RIDGE-BRIEF.md',
    coa: 'BINDING LOCAL COA, BROADEST IN THE BATCH — the Glen Ridge Historic Preservation Commission issues a Certificate of Appropriateness under Borough Code Chapter 15.32, and the Glen Ridge Historic District covers OVER 90% of the borough (NOT 100%), so MOST homes fall inside the regulated district. A COA applies to exterior alterations including roof replacement, material change, dormers, and visible roof-mounted equipment on regulated/contributing properties — a SEPARATE local approval from the construction permit. Frame it as the LOCAL-ordinance Chapter 15.32 matter, NOT the 1982 National Register listing (per NPS, listing alone places no restriction). A detached 1–2-family reroof is still no-permit ordinary maintenance (N.J.A.C. 5:23-2.7); advise confirming a specific parcel with the HPC / Building Department.',
    office: 'the Borough of Glen Ridge Building Department at 825 Bloomfield Avenue; do NOT name a Construction Official',
    geo: 'Glen Ridge is a small (~1.3 sq mi), fully built-out inner Essex County LOWLAND borough that borders NO large county reservation — the defining roof stressor is the mature street-tree canopy (NOT ridge elevation or reservation adjacency); predominantly pre-WWII Victorian, Edwardian, Colonial Revival, Tudor, and Dutch Colonial single-family homes (~1890s–1930s) on tree-lined streets, ~93% owner-occupied (qualitative); Toney\'s Brook is a localized drainage angle (qualitative)',
    verified: 'Ridgewood Avenue, Forest Avenue, Baldwin Street, Linden Avenue, The Glen and Toney\'s Brook, the Bloomfield Avenue station edge',
    avoid: 'West Orange\'s Section 25-30 landmark-only COA + South Mountain/Eagle Rock reservations + Llewellyn Park; Montclair\'s four-district conditional COA + Mills/Eagle Rock reservations + 54%-multi-unit framing; Verona\'s Peckman River flood + Chapter 150 Article XXII "HPC review" + 600 Bloomfield Avenue + Hilltop/Eagle Rock; Cedar Grove\'s no-COA / Heritage Advisory Committee + 525 Pompton Avenue + Mills/Hilltop. Do NOT assert ANY reservation/ridge-elevation stressor for Glen Ridge.',
    fab: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," any reservation/ridge-elevation claim (Glen Ridge has none), any fabricated street not on the verified list, any fabricated savings/storm-spike/response-time claim, and any fabricated NQR warranty term',
  },
  'verona': {
    name: 'Verona', cityId: 'verona', briefName: '_VERONA-BRIEF.md',
    coa: 'NARROW HPC-REVIEW (NOT a literal "Certificate of Appropriateness") — under Zoning Ordinance Chapter 150, Article XXII, the Verona Historic Preservation Commission reviews significant exterior changes prior to permit issuance on a LOCALLY DESIGNATED landmark; there are exactly TWO designated landmarks (the Erie Railroad Freight Shed at 62 Depot Street, and the Verona United Methodist Church). In-kind exterior repairs are EXEMPT, and every other home reroofs with no HPC review. The Afterglow section is PROPOSED (2017 survey), NOT designated — standard N.J.A.C. 5:23-2.7 path. Verona Park is an Olmsted Essex County park, NOT a reroof gate. Per NPS, National Register listing alone places no restriction. Use "HPC review," not "COA," for Verona.',
    office: 'the Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue; do NOT name a Construction Official',
    geo: 'Verona is a Watchung valley/upland township between the Eagle Rock Reservation (First Watchung) and the Hilltop Reservation (Second Watchung), per Essex County Parks — NOT the South Mountain Reservation; the Peckman River runs through (a real, named NWS-gauged drainage/flood angle along Bloomfield Avenue and Lakeside Avenue near Verona Park — keep qualitative, no FEMA zone/%/depth); pre-war Colonials, postwar Capes/ranches, and many 1960s–70s SPLIT-LEVELS (split-level transition flashing is the distinctive detail); about four-fifths owner-occupied across ~6,000 units (per the U.S. Census Bureau)',
    verified: 'the Afterglow section, Personette Avenue, Claremont Avenue, Verona Park and Lakeside Avenue, the Bloomfield Avenue and Pompton Avenue corridors',
    avoid: 'West Orange\'s Section 25-30 landmark-only COA + South Mountain Reservation + Llewellyn Park; Montclair\'s four-district conditional COA + Mills Reservation; Glen Ridge\'s borough-wide Chapter 15.32 district + 825 Bloomfield Avenue + lowland-no-reservation; Cedar Grove\'s no-COA / Heritage Advisory Committee + 525 Pompton Avenue + Mills (Cedar Grove shares Hilltop with Verona — keep Verona\'s Eagle Rock + Hilltop framing distinct)',
    fab: 'any price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, "Premium materials from GAF/CertainTeed/Owens Corning," any literal "Certificate of Appropriateness" for Verona (use "HPC review"), any claim that Afterglow is a designated district, any fabricated street not on the verified list, any fabricated savings/storm-spike/response-time claim, and any fabricated NQR warranty term',
  },
  'cedar-grove': {
    name: 'Cedar Grove', cityId: 'cedar-grove', briefName: '_CEDAR-GROVE-BRIEF.md',
    coa: 'NONE — Cedar Grove has NO local Historic Preservation Commission, NO Certificate of Appropriateness, and no locally designated historic district or landmark; only an ADVISORY Heritage Advisory Committee (educational/cultural, with no designation, COA, or regulatory authority). A private reroof needs no COA (the closest analog is Belleville / East Orange / Irvington). Per the NPS, National Register listing alone places no restriction on a private owner. State plainly in the historic FAQ that no COA applies in Cedar Grove.',
    office: 'the Township of Cedar Grove Building Department at 525 Pompton Avenue; do NOT name a Construction Official',
    geo: 'Cedar Grove is a northern Essex County township between the First and Second Watchung Mountains (qualitative "higher ground" — no city-specific elevation/snow/wind number); it adjoins the Mills Reservation (157.15 acres, shared with Montclair) and the Hilltop Reservation (284.16 acres, shared with North Caldwell and Verona), per Essex County Parks — NOT the South Mountain Reservation and NOT the Eagle Rock Reservation; predominantly postwar ranch and split-level homes, 76.3% owner-occupied across 5,008 housing units (per the U.S. Census Bureau); the Pompton Avenue / Route 23 corridor carries the low-slope commercial storefronts',
    verified: 'North End, Park Ridge Estates, Central Cedar Grove, South End, the Pompton Avenue / Route 23 corridor, the Mills Reservation edge',
    avoid: 'West Orange\'s Section 25-30 landmark-only COA + South Mountain/Eagle Rock reservations + Llewellyn Park; Montclair\'s four-district conditional COA + Eagle Rock; Glen Ridge\'s borough-wide Chapter 15.32 district + 825 Bloomfield Avenue + lowland-no-reservation; Verona\'s Peckman River flood + Chapter 150 Article XXII "HPC review" + 600 Bloomfield Avenue + Eagle Rock (Cedar Grove shares Hilltop with Verona and Mills with Montclair — keep Cedar Grove\'s Mills+Hilltop framing distinct). Cedar Grove has NO COA — never import any neighbor\'s historic-district gate.',
    fab: 'fabricated "on the western slope of the Second Watchung Mountain," "winter snowfall 2 to 4 inches greater per storm," "extend shingle life by 5 to 8 years," "reduce energy costs by 15–25 percent," "ranch-style homes built between 1950 and 1975 constitute the single largest category," the Norway-spruce species claim, projectSpotlights written as completed jobs at named addresses, "many of our new Cedar Grove clients come through recommendations from neighbors," the "$11,000–$17,000"/"$16,000–$26,000" pricing tiers, and any fabricated NQR warranty term',
  },
}

function prompt(r) {
  const c = CITY[r.c]
  const BDIR = '.planning/content-system/combo-batch9-west-essex'
  const packs = r.p.map(x => `.planning/content-system/research/${x}.md`).join(', ')
  const diff = PROCESS_HEAVY.has(r.s)
    ? `\nDIFFERENTIATION (this is a process-heavy / low-localizability service — pre-empt cross-city overlap, ESPECIALLY with the sibling city in this same batch): LEAD with the ${c.name}-specific application before the standardized facts — ${c.geo}. AVOID importing the OTHER city's anchors: ${c.avoid}. PRESERVE every cited standard/cost figure (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/InterNACHI ranges) — differentiation is about which LOCAL facts lead, not changing sourced numbers.\n`
    : ''
  return `You are rewriting ONE ${c.name} service×city combo page answer-first, de-fabbed, and ENTITY-GROUNDED. Service: "${r.s}". City: ${c.name} (cityId '${c.cityId}'), Essex County, NJ. This is content-engineering for a local-SEO roofing site; the rewrite removes fabricated marketing claims and restructures to an answer-first Q&A format with named-source facts, and bakes in the entity-grounding pattern.

Use your Read/Grep/Write tools. STEPS:
1. READ IN FULL the author brief: ${BDIR}/${r.c}/${c.briefName} — it contains the exact render contract, the ENTITY-GROUNDING delta (§0 — read it first), the answer-first + de-fab rules, the load-bearing ${c.name} facts, the de-fab targets, the pricing/whyChooseUs/conversionHooks defaults, and the §F differentiation directive. Follow it precisely; it overrides any instinct here.
2. READ the CURRENT combo file: src/data/combo-content/${r.c}/${r.s}.ts — confirm the export name is exactly "${r.e}", serviceId "${r.s}", cityId '${r.c}'. PRESERVE its genuinely good ${c.name} texture but STRIP every de-fab. This city's CURRENT files specifically fabricate: ${c.fab} — DELETE/CORRECT all of those. Remove the OLD price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, the "Premium materials from GAF/CertainTeed/Owens Corning" line, "Early action saves thousands," and every inline markdown self-link.
3. READ your service's ALREADY-REWRITTEN answer-first content: open src/data/service-content/${r.f} and find the object with serviceId: '${r.s}'. THIS IS YOUR LOCALIZATION BASE — the combo is this finished service applied to ${c.name}. Mirror its facts, named sources, and voice, then localize to ${c.name}'s building stock, the permit office (${c.office}), and ${c.name}'s HISTORIC posture: ${c.coa}
4. READ the fact packs for named sources (cite ONLY what these support): ${packs}. The gold voice/structure + ENTITY-GROUNDING exemplar is the committed Orange combo src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — localize, do NOT copy Orange's geography or COA). The committed ${c.name} CITY page src/data/city-content/west-essex.ts (cityId '${c.cityId}') is the verified ${c.name} geography/voice crib — match its facts.
${diff}
ENTITY-GROUNDING (do this exactly):
  (a) directAnswer is entity-grounded — write it as: "**Newark Quality Roofing is a roofing contractor providing ${r.s.replace(/-/g, ' ')} across ${c.name}, New Jersey, and Essex County, <1-2 city-specific scope clauses>** … as a registered New Jersey Home Improvement Contractor." The BOLD span (from "Newark Quality Roofing" through the scope clauses) must be ≤40 words; the credential tail is OUTSIDE the bold. Establish "${c.name}, New Jersey" and "roofing contractor". No modality.
  (b) DO NOT author a definition field — the canonical "What Is {service}?" definition is propagated verbatim by a deterministic post-assembly splice. Omit it entirely.
  (c) Credential = "a registered New Jersey Home Improvement Contractor" (and "fully insured" where insurance is mentioned). NEVER write "licensed and insured", "NJ licensed", or "licensed roofing contractor" for NQR anywhere. KEEP factual third-party "licensed" cites verbatim (licensed Construction Official, licensed public adjuster/attorney, licensed structural engineer, licensed asbestos abatement, "not licensed to remediate mold").

GEOGRAPHY/SECTION GUARDRAILS: only use the VERIFIED ${c.name} sections — ${c.verified}. DROP any street/section not on that list. ${c.geo}. Keep all geography QUALITATIVE (no FEMA zone/%/depth, no canopy-%, no city-specific degree/gust number).

THEN WRITE the COMPLETE rewritten file to: ${BDIR}/${r.c}/${r.s}.snippet.ts
- First line EXACTLY: import type { ComboContent } from '../schema';
- Then a blank line, then: export const ${r.e}: ComboContent = {
- Keep serviceId: '${r.s}', cityId: '${r.c}'.
- Fields to author: directAnswer (REQUIRED — never omit; entity-grounded per above; bold span ≤40 words); overview (3-5 strings — overview[0] = an answer-first ≤40-word lead naming NQR + the service applied to ${c.name}'s building stock, FIGURE-FREE, bolded topics; the rest develop the lead IN ORDER each opening by re-bolding a lead topic); challenges (2-4 — [0] = ≤40w bolded lead); process (2-4 — [0] = ≤40w bolded lead); faqs (3-6 {question, answer} — each answer's FIRST SENTENCE is a definitive ≤40w answer, include exactly one cost FAQ using the sourced range + free-written-estimate framing; do NOT add a redundant "Who provides {service} in ${c.name}?" FAQ; never exceed 6 FAQs); metaDescription (≤160 chars, de-fabbed, no **, no "licensed" for NQR); pricing {range, note} per the brief's sourced defaults for this service type; whyChooseUs (3-4 de-fabbed factual reasons, NO ** markdown, use "A registered New Jersey Home Improvement Contractor, fully insured."); conversionHooks {midPageCta, urgencyNote} (factual, no hype, no **). DO NOT include a definition field.
- HARD RULES: NO de-fab literals anywhere (GAF Certified, same-day, 24/7, 15+ years, 0% financing, 500+, top-rated, fabricated review counts, invented NQR self-stats, response-time claims, "closest contractor" superlatives, manufacturer brands as NQR credentials, fabricated "investment property/portfolio pricing" programs, manufacturer-certification claims). NO "licensed" for NQR. NO will/should/need-to/must modality in declarative sentences (FAQ questions are exempt). NO price in any prose lead — price lives only in the pricing field and the cost FAQ. EVERY hard number named-sourced in-text or removed (the 30% repair-vs-replace rule = Kellow/Modernize/Josten; lifespans = the InterNACHI life-expectancy chart). NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links or URLs anywhere — strip every existing markdown self-link to plain text. Count standalone em-dash " — " tokens as words when checking the ≤40-word leads; tighten below 40.
- Output ONLY valid TypeScript to the .snippet.ts (no markdown code fences, no prose commentary, end the file with };).

ALSO WRITE a 4-6 line rationale to ${BDIR}/${r.c}/${r.s}.md (which de-fab literals you cleared + the named sources you cited).

Do NOT edit any file under src/. Return ONE line: "${r.c}/${r.s}: done, <N faqs>, directAnswer bold <wordcount>w".`
}

const results = await parallel(combos.map(r => () =>
  agent(prompt(r), { label: `author:${r.c}/${r.s}`, phase: 'Author' })
))

const ok = results.filter(Boolean).length
log(`Author phase complete: ${ok}/${combos.length} returned`)
return { authored: ok, total: combos.length, statuses: results }
