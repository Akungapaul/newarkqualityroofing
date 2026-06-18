export const meta = {
  name: 'combo-batch8-author',
  description: 'Author answer-first + de-fab + entity-grounded rewrites of all 130 Maplewood + South Orange service×city combos (Combo Batch 8)',
  phases: [
    { title: 'Author', detail: 'one agent per combo writes a .snippet.ts + .md from its city brief + its rewritten service content' },
  ],
}

phase('Author')
const combos = typeof args === 'string' ? JSON.parse(args) : args
log(`Authoring ${combos.length} combos (Maplewood + South Orange)…`)

const PROCESS_HEAVY = new Set([
  'roof-thermal-imaging-inspections', 'storm-damage-roof-repair', 'commercial-roof-installation',
  'commercial-roof-repair', 'infrared-roof-leak-detection', 'insurance-roof-replacement', 'roof-overlay-installation',
])

const CITY = {
  'maplewood': {
    name: 'Maplewood', cityId: 'maplewood', briefName: '_MAPLEWOOD-BRIEF.md',
    coa: 'CONDITIONAL / FRAMEWORK-ONLY — Maplewood has a Historic Preservation Commission and an Article VIII ordinance, but the Maplewood Village Historic District is NATIONAL-REGISTER-ONLY (no local COA) and NO active locally designated district is confirmed; assert the COA ONLY conditionally: "exterior roofing on a property in a LOCALLY designated Maplewood district or landmark falls under a township Certificate of Appropriateness — confirm current local designation with the Township." Do NOT assert any specific Maplewood neighborhood currently requires a COA.',
    office: 'the Township of Maplewood Construction Division at 574 Valley Street (complete application decided within 20 business days); do NOT name a Construction Official',
    geo: 'the South Mountain Reservation reaches INTO Maplewood\'s wooded WESTERN/northwestern edge (partial containment; roughly 2,100 acres in portions of Maplewood, Millburn, and West Orange, per Essex County Parks) — NOT "2,110 acres"; architect-designed early-20th-century Tudor/Colonial Revival/Italian Revival homes (74.9% owner-occupied / ~9,051 units, per the U.S. Census Bureau); Maplewood Village + Springfield Avenue storefronts + the Maplewood NJ Transit station',
    verified: 'Maplewood Village, Jefferson, Hilton, Tuscan, Wyoming, Memorial Park (+ Springfield Avenue as the commercial corridor)',
    avoid: 'Seton Hall University / its 58-acre campus, SOPAC, the binding Montrose Park / Village Code Chapter 185 COA, "8,000 shade trees across 181 streets," "over half predates 1940 / 82% predates 1960," 76 South Orange Avenue, and the "reservation on the Reservation\'s EASTERN edge" framing',
    fab: 'fabricated streets (Ridgewood Road, Rutgers Street, Crestwood Drive, Prospect Street), a "40–60% storm-spike" stat, a "2–4 hour" emergency-tarp response, "enhanced storm-response protocols / pre-position tarps," named slate-quarry inventory ("Vermont Unfading Green / Pennsylvania Black / Buckingham Virginia in standard repair sizes"), the "2,110-acre" figure, and "Maplewood\'s Construction Department"',
  },
  'south-orange': {
    name: 'South Orange', cityId: 'south-orange', briefName: '_SOUTH-ORANGE-BRIEF.md',
    coa: 'BINDING LOCAL COA — the Montrose Park Historic District (~550 homes) is a LOCALLY designated district under Village Code Chapter 185, where exterior roofing on a designated property requires a Certificate of Appropriateness from the South Orange Historic Preservation Commission, separate from the construction permit. Assert it ONLY as a LOCAL-ordinance matter (Chapter 185), ONLY inside the designated district / for designated local landmarks, NOT "because of National Register listing," and NOT Village-wide. Per the NPS, NR listing alone places no restriction. SPLIT the historic-FAQ first sentence to stay ≤40 words.',
    office: 'the Township of South Orange Village Building Department at 76 South Orange Avenue (plan review within 20 business days); do NOT name a Construction Official',
    geo: 'South Orange borders the South Mountain Reservation on the Reservation\'s EASTERN edge (wooded ridgeline along the WESTERN boundary, per Essex County Parks); large pre-war Victorians/Colonial Revivals/Tudor Revivals (over half the stock predates 1940 / 82% predates 1960, per the Township planning evaluation); over 8,000 shade trees across 181 Village streets (per the Township Fast Facts); the Seton Hall University 58-acre campus (institutional low-slope inventory); SOPAC + the NJ Transit Village center',
    verified: 'Montrose Park, Upper Wyoming and Lower Wyoming, Newstead, Tuxedo Park, Academy Heights, Seton Village, Village Center and SOPAC, South Mountain',
    avoid: 'Maplewood\'s conditional/framework-only COA, Maplewood Village + Springfield Avenue storefronts, the architect-designed Tudor/Colonial Revival/Italian Revival house-style framing, the 74.9% owner-occupied / 9,051-unit Census figure, 574 Valley Street, and the "reservation reaching INTO the western edge / partial containment / 2,100-acre" framing',
    fab: 'any fabricated street names not on the verified list, fabricated storm-spike % or "2–4 hour" response claims, named slate-quarry inventory claims, any "because it\'s on the National Register" COA framing, any "Village-wide" COA claim, and "South Orange\'s Construction Department"',
  },
}

function prompt(r) {
  const c = CITY[r.c]
  const BDIR = '.planning/content-system/combo-batch8-maplewood-southorange'
  const packs = r.p.map(x => `.planning/content-system/research/${x}.md`).join(', ')
  const diff = PROCESS_HEAVY.has(r.s)
    ? `\nDIFFERENTIATION (this is a process-heavy / low-localizability service — pre-empt cross-city overlap, ESPECIALLY with the sibling city in this same batch): LEAD with the ${c.name}-specific application before the standardized facts — ${c.geo}. AVOID importing the OTHER city's anchors: ${c.avoid}. PRESERVE every cited standard/cost figure (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/InterNACHI ranges) — differentiation is about which LOCAL facts lead, not changing sourced numbers.\n`
    : ''
  return `You are rewriting ONE ${c.name} service×city combo page answer-first, de-fabbed, and ENTITY-GROUNDED. Service: "${r.s}". City: ${c.name} (cityId '${c.cityId}'), Essex County, NJ. This is content-engineering for a local-SEO roofing site; the rewrite removes fabricated marketing claims and restructures to an answer-first Q&A format with named-source facts, and bakes in the entity-grounding pattern.

Use your Read/Grep/Write tools. STEPS:
1. READ IN FULL the author brief: ${BDIR}/${r.c}/${c.briefName} — it contains the exact render contract, the ENTITY-GROUNDING delta (§0 — read it first), the answer-first + de-fab rules, the load-bearing ${c.name} facts, the de-fab targets, the pricing/whyChooseUs/conversionHooks defaults, and the §F differentiation directive. Follow it precisely; it overrides any instinct here.
2. READ the CURRENT combo file: src/data/combo-content/${r.c}/${r.s}.ts — confirm the export name is exactly "${r.e}", serviceId "${r.s}", cityId '${r.c}'. PRESERVE its genuinely good ${c.name} texture but STRIP every de-fab. This city's CURRENT files specifically fabricate: ${c.fab} — DELETE/CORRECT all of those. Remove the OLD price-in-lead, the "GAF Certified / 15+ years / same-day / 24/7" whyChooseUs, the "Premium materials from GAF/CertainTeed/Owens Corning" line, "Early action saves thousands," and every inline markdown self-link.
3. READ your service's ALREADY-REWRITTEN answer-first content: open src/data/service-content/${r.f} and find the object with serviceId: '${r.s}'. THIS IS YOUR LOCALIZATION BASE — the combo is this finished service applied to ${c.name}. Mirror its facts, named sources, and voice, then localize to ${c.name}'s building stock, the permit office (${c.office}), and ${c.name}'s HISTORIC posture: ${c.coa}
4. READ the fact packs for named sources (cite ONLY what these support): ${packs}. The gold voice/structure + ENTITY-GROUNDING exemplar is the committed Orange combo src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — localize, do NOT copy Orange's geography or COA). The committed ${c.name} CITY page src/data/city-content/first-suburbs.ts (cityId '${c.cityId}') is the verified ${c.name} geography/voice crib — match its facts.
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
