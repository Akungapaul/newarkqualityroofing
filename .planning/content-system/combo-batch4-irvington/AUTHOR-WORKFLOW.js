export const meta = {
  name: 'combo-batch4-irvington-author',
  description: 'Author answer-first + de-fab + entity-grounded rewrites of all 65 Irvington service×city combos (Combo Batch 4)',
  phases: [
    { title: 'Author', detail: 'one agent per combo writes a .snippet.ts + .md from the Irvington brief + its rewritten service content' },
  ],
}

phase('Author')
const combos = __COMBOS_JSON__
log(`Authoring ${combos.length} Irvington combos…`)

const PROCESS_HEAVY = new Set([
  'roof-thermal-imaging-inspections','storm-damage-roof-repair','commercial-roof-installation',
  'commercial-roof-repair','infrared-roof-leak-detection','insurance-roof-replacement','roof-overlay-installation',
])

function prompt(r) {
  const packs = r.p.map(x => `.planning/content-system/research/${x}.md`).join(', ')
  const diff = PROCESS_HEAVY.has(r.s)
    ? `\nDIFFERENTIATION (this is a process-heavy / low-localizability service — pre-empt cross-city overlap with the committed Newark/East Orange/Orange versions): LEAD with the Irvington-specific application before the standardized facts — Springfield Avenue + Chancellor Avenue downtown commercial flat/low-slope roofs (UEZ storefronts, mixed-use), Route 78 (I-78) southeastern-edge light-industrial buildings (large membrane roofs, vibration at seams), heavy 2-/3-family rental + investor/landlord ownership (tenant-occupied access under NJ landlord-tenant notice, documentation for owners/insurers, cost-conscious portfolio decisions), and a dense, built-out, aging housing stock (plank decking discovered at tear-off, limited staging room on small lots). PRESERVE every cited standard/cost figure (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/InterNACHI ranges) — differentiation is about which LOCAL facts lead, not changing sourced numbers.\n`
    : ''
  return `You are rewriting ONE Irvington service×city combo page answer-first, de-fabbed, and ENTITY-GROUNDED. Service: "${r.s}". City: Irvington (Township of Irvington), Essex County, NJ. This is content-engineering for a local-SEO roofing site; the rewrite removes fabricated marketing claims and restructures to an answer-first Q&A format with named-source facts, and bakes in the entity-grounding pattern.

Use your Read/Grep/Write tools. STEPS:
1. READ IN FULL the author brief: .planning/content-system/combo-batch4-irvington/_IRVINGTON-BRIEF.md — it contains the exact render contract, the ENTITY-GROUNDING delta (§0 — read it first), the answer-first + de-fab rules, the load-bearing Irvington facts, the de-fab targets, and the pricing/whyChooseUs/conversionHooks defaults. Follow it precisely; it overrides any instinct here.
2. READ the CURRENT combo file: src/data/combo-content/irvington/${r.s}.ts — confirm the export name is exactly "${r.e}", serviceId "${r.s}", cityId 'irvington'. PRESERVE its genuinely good Irvington texture (multi-family/rental landlord economics, tenant-access coordination, Springfield Avenue + Chancellor Avenue commercial flat roofs, Route 78 southeastern-edge light-industrial, older early-20th-century detached + 2-3-family stock, aging plank decking discovered at tear-off) — restructure it answer-first and strip every de-fab; do NOT discard the local specificity. CRITICAL GEOGRAPHY: Irvington is a small, dense, built-out inner-ring township SOUTHWEST of Newark with NO river, NO flood/waterfront, and NO reservation — if the current file invented any such claim, DELETE it; do NOT import East Orange's "flat Watsessing plain" or Orange's "Watchung-ridge" framing. Vailsburg is a NEWARK neighborhood on Irvington's eastern edge — frame as "near Newark's Vailsburg section," NEVER "Irvington's Vailsburg." I-78 (Route 78) only passes briefly along the SOUTHEASTERN border — do NOT say it bisects the township. Drop any street/neighborhood not in the brief's verified list (e.g. "Nestor Terrace" — unverified). Remove the fabricated "investment property program"/"portfolio pricing"/"2-to-4-hour response"/"closest contractor in the township" claims.
3. READ your service's ALREADY-REWRITTEN answer-first content: open src/data/service-content/${r.f} and find the object with serviceId: '${r.s}'. THIS IS YOUR LOCALIZATION BASE — the combo is this finished service applied to Irvington. Mirror its facts, named sources, and voice, then localize to Irvington's building stock (dense 2-/3-family + investor-owned, majority-renter, older pre/immediate-postwar stock, Springfield Avenue + Chancellor Avenue corridors, Route 78 SE-edge light-industrial), the permit office (the Township of Irvington's construction-code office), and Irvington's HISTORIC posture: NO COA (see below).
4. READ the fact packs for named sources (cite ONLY what these support): ${packs}. The gold voice/structure + ENTITY-GROUNDING exemplar is the committed Orange combo src/data/combo-content/orange/roof-repair.ts (same answer-first + entity-grounded shape — localize, do NOT copy Orange's geography or COA). The committed Irvington CITY page src/data/city-content/urban-core.ts (cityId 'irvington') is the verified Irvington geography/voice crib.
${diff}
ENTITY-GROUNDING (the Batch-4 delta — do this exactly):
  (a) directAnswer is entity-grounded — write it as: "**Newark Quality Roofing is a roofing contractor providing ${r.s.replace(/-/g,' ')} across Irvington, New Jersey, and Essex County, <1-2 city-specific scope clauses>** … as a registered New Jersey Home Improvement Contractor." The BOLD span (from "Newark Quality Roofing" through the scope clauses) must be ≤40 words; the credential tail is OUTSIDE the bold. Establish "Irvington, New Jersey" and "roofing contractor". No modality.
  (b) DO NOT author a definition field — the canonical "What Is {service}?" definition is propagated verbatim by a deterministic post-assembly splice. Omit it entirely.
  (c) Credential = "a registered New Jersey Home Improvement Contractor" (and "fully insured" where insurance is mentioned). NEVER write "licensed and insured", "NJ licensed", or "licensed roofing contractor" for NQR anywhere. KEEP factual third-party "licensed" cites verbatim (licensed Construction Official, licensed public adjuster/attorney, licensed structural engineer, licensed asbestos abatement, "not licensed to remediate mold").

HISTORIC COA — IRVINGTON HAS NONE (the KEY difference from Newark/Orange): Irvington has no local Historic Preservation Commission by ordinance and no locally designated historic districts or landmarks → a homeowner reroof faces NO Certificate of Appropriateness step. Irvington carries no National Register listings either, and a Register listing alone places no restriction on a private owner (per the National Park Service). Where a historic angle arises (historic-roof-restoration, slate/tile/cedar-shake, custom-roof-design-consultation), state plainly that Irvington imposes NO COA gate — do NOT invent one and do NOT import Newark's or Orange's COA districts.

THEN WRITE the COMPLETE rewritten file to: .planning/content-system/combo-batch4-irvington/${r.s}.snippet.ts
- First line EXACTLY: import type { ComboContent } from '../schema';
- Then a blank line, then: export const ${r.e}: ComboContent = {
- Keep serviceId: '${r.s}', cityId: 'irvington'.
- Fields to author: directAnswer (REQUIRED — never omit; entity-grounded per above; bold span ≤40 words); overview (3-5 strings — overview[0] = an answer-first ≤40-word lead naming NQR + the service applied to Irvington's building stock, FIGURE-FREE, bolded topics; the rest develop the lead IN ORDER each opening by re-bolding a lead topic); challenges (2-4 — [0] = ≤40w bolded lead); process (2-4 — [0] = ≤40w bolded lead); faqs (3-6 {question, answer} — each answer's FIRST SENTENCE is a definitive ≤40w answer, include exactly one cost FAQ using the sourced range + free-written-estimate framing; do NOT add a redundant "Who provides {service} in Irvington?" FAQ; never exceed 6 FAQs); metaDescription (≤160 chars, de-fabbed, no **, no "licensed" for NQR); pricing {range, note} per the brief's sourced defaults for this service type; whyChooseUs (3-4 de-fabbed factual reasons, NO ** markdown, use "A registered New Jersey Home Improvement Contractor, fully insured."); conversionHooks {midPageCta, urgencyNote} (factual, no hype, no **). DO NOT include a definition field.
- HARD RULES: NO de-fab literals anywhere (GAF Certified, same-day, 24/7, 15+ years, 0% financing, 500+, top-rated, fabricated review counts, invented NQR self-stats, response-time claims, "closest contractor" superlatives, fabricated "investment property/portfolio pricing" programs, manufacturer-certification claims). NO "licensed" for NQR (use "registered New Jersey Home Improvement Contractor"/"fully insured"). NO will/should/need-to/must modality in declarative sentences (FAQ questions are exempt). NO price in any prose lead — price lives only in the pricing field and the cost FAQ. EVERY hard number named-sourced in-text or removed. NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links or URLs anywhere — strip every existing markdown self-link like [roof repair](/roof-repair) to plain text. NO city-specific heat-island/wind degree numbers (EPA framing is qualitative only). NO river/flood/reservation references and NO "flat plain" or "Watchung-ridge" import. NO COA for Irvington. Count standalone em-dash " — " tokens as words when checking the ≤40-word leads; tighten below 40.
- Output ONLY valid TypeScript to the .snippet.ts (no markdown code fences, no prose commentary, end the file with };).

ALSO WRITE a 4-6 line rationale to .planning/content-system/combo-batch4-irvington/${r.s}.md (which de-fab literals you cleared + the named sources you cited).

Do NOT edit any file under src/. Return ONE line: "${r.s}: done, <N faqs>, directAnswer bold <wordcount>w".`
}

const results = await parallel(combos.map(r => () =>
  agent(prompt(r), { label: `author:${r.s}`, phase: 'Author' })
))

const ok = results.filter(Boolean).length
log(`Author phase complete: ${ok}/${combos.length} returned`)
return { authored: ok, total: combos.length, statuses: results }
