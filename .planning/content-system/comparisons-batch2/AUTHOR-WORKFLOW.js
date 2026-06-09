export const meta = {
  name: 'cmp2-author',
  description: 'Answer-first rewrite of 8 CMP-2 material-vs-material comparisons (1 expert author agent per comparison → snippet.ts + .md)',
  phases: [
    { title: 'Author', detail: '8 parallel author agents, one per comparison' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch2`
const SRC = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

const SHAPE = `
## THE ANSWER-FIRST SHAPE (ComparisonContent object — match the CMP-1 gold exemplar)

Read the gold exemplar FIRST: ${SRC} lines 6–98 (comparisonId 'asphalt-shingles-vs-metal-roofing') is a fully-rewritten CMP-1 object. Mirror its structure, density, sourcing, bold pattern, and question-heading style EXACTLY. Also read your own comparison's CURRENT object in that same file (find your comparisonId) — it holds the factual seed (rows, the head-to-head angles), but its prose is NOT answer-first and carries debt you must clear.

Your snippet is ONE JavaScript object literal of type ComparisonContent with these fields:
- comparisonId: string (keep EXACTLY as given — do not change it)
- directAnswer: string — the hero answer. ≤40 words. Opens by naming BOTH materials in **bold**, states the definitive head-to-head verdict + the single most decisive sourced figure. (e.g. "**Metal roofing** outlasts **asphalt shingles** — metal lasts 40–80 years versus asphalt's 20–30 (per the InterNACHI chart) — so metal wins on lifespan while asphalt wins on lower NJ install cost.")
- introHeading: string — QUESTION form, no '**' (raw-rendered <h2>). Mirror "A Or B — Which … for an Essex County [home/building]?"
- introParagraphs: string[1..3] — each opens with a **bold** topic; para 1 defines BOTH materials by function + a differentiator (R38); para 2 names the sub-types/failure modes per side, named-sourced.
- comparisonRows: {feature,itemA,itemB,winner?}[4..15] — NO '**' anywhere (raw table cells). winner ∈ 'A'|'B'|'tie'|'depends'. Keep figures but make them SOURCED & defensible (cite the source in the feature label where natural, e.g. "Lifespan (InterNACHI)"). itemA = the FIRST-named material, itemB = the second.
- verdict: {winner, reasoning, alternateScenario} — winner ≤40w, no '**' needed but allowed; reasoning + alternateScenario each open with a **bold** topic + a Comparison-Proposition ("A over B when [quantified condition]") + named source.
- detailedAnalysis: {heading, content[1..4]}[2..5] — heading = QUESTION form, no '**'. content[0] = the ≤40-word answer-first lead bolding BOTH topics. EACH subsequent paragraph OPENS by re-bolding ONE topic from the lead (R3 strict, in lead order) and develops a DISTINCT lexical facet (R35: cost / weather / failure-mode / code / resale). Every paragraph carries a figure or named authority (R7).
- njSpecific: {heading (question, no '**'), content[1..3]} — NJ code/market. Lead bolds the topic; cite N.J.A.C. 5:23-2.7 (1–2 family re-roof = ordinary maintenance, no permit) / 25% rule / NJ UCC / NJDEP where relevant, mirroring the gold exemplar.
- residentialSection / commercialSection: {heading (question, no '**'), content[1..3]} — each lead ≤40w, bolds the topic, answers "Which suits a [house]/[commercial building]?".
- faqs: {question, answer}[4..6] — question = no '**'; answer OPENS with a **bold** definitive sentence ≤40 words, then 1 expansion sentence, named-sourced. (FAQ JSON-LD is markdown-stripped, so '**' in answer is safe.)
- metaDescription: string ≤160 chars, NO '**', no de-fab literals, factual.

## BOLD-SAFE FIELD MAP (CRITICAL — a '**' in the wrong field LEAKS as literal asterisks AND fails the build gate)
- '**bold**' REQUIRED in: directAnswer, introParagraphs[], verdict.{winner,reasoning,alternateScenario}, detailedAnalysis[].content[], njSpecific.content[], residentialSection.content[], commercialSection.content[], faqs[].answer
- '**' BANNED in (raw-rendered): introHeading, EVERY .heading, ALL comparisonRows cells, faqs[].question, metaDescription
`

const RULES = `
## NON-NEGOTIABLE RULES (gate-enforced unless marked advisory) — read ${RULESET} for the full text
- R1 every heading is a QUESTION ending in '?'. R4 heading↔answer share opening structure ("What is X?"→"X is …"; "Which costs less?"→"A costs less …").
- R2 first sentence under each heading = definitive factual answer ≤40 words. R3 bold the ANSWER span (the named topics/entities), not keywords; strict body↔lead bold match (each body paragraph re-bolds a lead topic, identical wording, in lead order).
- R5 state established facts, present tense — never predictions/opinions. R37 answers are subject–verb–object with a NAMED subject (no agentless passive, no "there is/it is" openers).
- R6 NO MODALITY in body prose (GATE): no will / shall / should / need to / needs to / have to / has to / must / ought to. FAQ question: fields are exempt. Rewrite to indicative present.
- R7 every info point carries an exact figure/percentage. R10 NO fabricated/unverified numbers (GATE) — use ONLY figures present in the fact packs; otherwise state qualitatively or omit. NEVER invent a $/year-savings or $-premium figure.
- R9 cite authorities BY NAME in-text, never hyperlink (GATE: zero outbound links). R29 name the precise entity (EPDM, modified bitumen, step flashing), not a generic stand-in.
- R10 de-fab literals BANNED (GATE, incl. metaDescription): "24/7", "same-day", "GAF Certified", "Master Elite", "0% financing", "top-rated", "N+ years/projects" trust-counts, fake NAP.
- R14 NO hype/sentiment (advisory but ENFORCE): "best", "premier", "leading", "top recommendation", "unbeatable", "premium" used as praise. Keep only denotative/price nouns ("resale premium") and FORMAL grade names (CSSB "Number 1 Blue Label", "Premium-grade"). Never call a brand "our top recommendation" or "the best".
- R21/R35/R36 each section body DEVELOPS its lead in order via the head entity's lexical relations (hyponyms/parts/antonyms/synonyms); state each hard fact ONCE, in the section whose question owns it; no cross-section restatement.
- R8 qualify plural nouns with a count that matches the list. R38 define each introduced entity by function + ≥1 differentiator at first mention.

## SOURCING DISCIPLINE
- Ground EVERY hard number in a named source from your assigned fact packs. Use name-only attribution ("per the InterNACHI chart", "per Josten Roofing", "per the SPFA", "per the EPA", "per N.J.A.C. 5:23-2.7"). NO outbound links.
- If a figure in the CURRENT object is NOT in any fact pack, do NOT carry it as a hard number — restate qualitatively or drop it, and list it under a "## GAPS / DROPPED" heading at the BOTTOM of your .md draft so the reviewer can see what you removed and why.
- Cost rows use the SAME sourced ranges the rest of the site uses (e.g. NJ asphalt $5.50–$11.00/sq ft per Josten Roofing; NJ repair $400–$1,000 / replacement $10,000–$25,000). Surface the attribution in adjacent prose, not the raw cell.
`

const ITEMS = [
  {
    id: 'modified-bitumen-vs-tpo',
    packs: ['facts-materials-economics.md §4 (modified bitumen 20yr InterNACHI; TPO 7–20yr InterNACHI / 15–25yr practice; failure modes; flat-roof repair costs) + §6 (PVC/SPF context) + §7 (NJ pricing; TPO flat $8–$12/sqft Josten)', 'facts-energy-solar.md §0.3–0.4 (cool-roof science) + §0.1 (CRRC not ENERGY STAR)', 'facts-nj-regulatory-climate.md (NJ UCC, climate zone)'],
    debt: `DROP the invented energy-$ figures: "saves $2,000–$4,000 annually", "$40,000–$80,000 in cooling costs over the roof's life", "15–25%" cooling-cost cut. Per facts-energy-solar §0.4 the ONLY defensible quantified cooling figure is EPA's 11–27% reduction in PEAK COOLING DEMAND in air-conditioned residential buildings (NOT an annual-bill or $ figure) — and TPO's white reflective surface lowers roof-surface temperature (reflectance + thermal emittance per CRRC/DOE), with Newark's heating-dominated Climate Zone 4A–5 carrying a winter-heating offset. Reframe "NJ Clean Energy Program cool-roof rebates" QUALITATIVELY (named program, no invented rebate amount). Scrub modality ("can match", "cannot match" → indicative). Verify the 900°F / heat-weld figure against the pack — if not present, say "hot-air heat-welded" without a temperature.`,
  },
  {
    id: 'rubber-roofing-vs-tpo',
    packs: ['facts-materials-economics.md §4 (EPDM 15–25yr InterNACHI / 25–30yr practice; TPO; EPDM seam-separation + TPO welded-seam failure modes; flat-roof repair costs) + §7 (NJ TPO $8–$12/sqft Josten)', 'facts-energy-solar.md §0.3–0.4 (cool-roof) + §0.1 (CRRC)', 'facts-nj-regulatory-climate.md'],
    debt: `DROP invented energy-$ figures: "$1,500–$3,000 in annual cooling savings", "$30,000–$60,000 over 20 years". Use the EPA 11–27% peak-cooling-demand framing + reflectance/emittance (CRRC/DOE) + NJ Zone 4A–5 winter caveat instead. Verify "reflects 80%+" / "absorbs 90%+" / "900°F+ weld" / "flexible below -40°F" against the packs — keep only what is in a pack (attribute it) or restate qualitatively. EPDM black-vs-white UV note IS in §4 (carbon-black). Scrub modality. Question-form all headings.`,
  },
  {
    id: 'cedar-shake-vs-wood-shingle',
    packs: ['facts-materials-economics.md §5 (wood/cedar: western red cedar, shake vs shingle thickness/lifespan, maintenance) + §5b (FIRE ratings: CSSB grades, UL/NAHB, fire-retardant treatment) + §0 master lifespan table + §7 (NJ pricing)', 'facts-historic-restoration.md (cedar nail rules — red cedar must NOT use copper per NPS Brief 19; HPC Certificate of Appropriateness; Essex County historic districts Glen Ridge/Montclair)', 'facts-nj-regulatory-climate.md'],
    debt: `Keep FORMAL CSSB grade names ("Number 1 Blue Label", taper-sawn, hand-split) — those are denotative grades, not hype. But DROP praise framing ("premium grade" as a selling adjective, "best for NJ"). Verify the cost ranges (cedar shake $15,000–$32,000 / wood shingle $12,000–$25,000) and lifespans (30–40 / 25–30 yr) against §5 / §0 — attribute to InterNACHI/CSSB or restate as NJ qualitative ranges; do NOT carry an unsourced hard $-range. Scrub modality. Historic-district COA framing must match facts-historic-restoration (a Register listing alone does NOT bar a private reroof; the municipal HPC COA is the binding gate where a local district designates the property). Question-form headings.`,
  },
  {
    id: 'built-up-roofing-vs-modified-bitumen',
    packs: ['facts-materials-economics.md §4 (BUR 30yr InterNACHI; modified bitumen 20yr; SBS/APP polymers; failure modes; flat-roof repair costs) + §6 + §7 (NJ pricing)', 'facts-nj-regulatory-climate.md (NJ UCC; NJDEP air/VOC context for hot-asphalt kettles)'],
    debt: `DROP invented $ figures: "$0.50–$1.50/sq ft cheaper", "$10,000–$30,000 in savings" on a 20,000 sq ft warehouse. Use sourced $/sq-ft ranges from §4/§7 (state both ranges, let the reader compute) and qualitative framing instead. Verify "FM Global approvals" — if not in a pack, drop it or state "carry manufacturer/industry approvals" qualitatively. SBS (styrene-butadiene-styrene) / APP (atactic polypropylene) polymer facts + BUR 3–5 ply redundancy ARE legitimate — attribute to NRCA/industry. Scrub modality ("can become brittle" → "becomes brittle in extreme cold, per …"). Question-form headings.`,
  },
  {
    id: 'spray-foam-vs-tpo',
    packs: ['facts-materials-economics.md §6 (SPF: R-6.0–6.5/inch aged per ICC-ES/ASTM C1289 LTTR/SPFA; foam 30+yr when coating maintained; recoat 10–20yr; $4–8/sqft; UV-sensitive, must stay coated; NRCA positive drainage; blistering/adhesion failure modes) + §4 (TPO) + §7', 'facts-energy-solar.md §0.3–0.4 (cool-roof) + §0.5 (NJ 2021 IECC insulation: ceiling R-60 residential; NEVER cite Title 24/CA)', 'facts-nj-regulatory-climate.md'],
    debt: `Use R-6.0–6.5 per inch (NOT a flat "R-6.5"). Recompute any "R-13 at 2 inches" to the pack's range (≈R-12–13) and attribute. DROP "$5,000–$10,000 annually" invented savings — use EPA 11–27% peak-cooling framing + the SPF R-value/insulation-integration fact instead. Verify NJ energy-code numbers: §0.5 gives residential ceiling R-60 (2021 IECC) — do NOT assert "R-30 commercial minimum" or "5 inches achieves it" unless you can source it; restate qualitatively if unsure. Recoat $1.50–$3.00/sqft — keep only if sourced (SPFA), else qualitative. Scrub modality. Question-form headings.`,
  },
  {
    id: 'green-roof-vs-traditional-roofing',
    packs: ['GAP-green-roof.md (THE primary source for stormwater retention %, extensive vs intensive saturated dead loads, membrane-protection/longevity, cost $/sqft, NJ stormwater regs — READ THIS FIRST, it was researched for exactly this comparison)', 'facts-materials-economics.md §0 (vegetated/green roof 5–40yr InterNACHI) + §4 (membrane base under the green assembly)', 'facts-energy-solar.md §0 (heat-island/EPA, reflectance-vs-evapotranspiration)'],
    debt: `Ground "retains 50–90% of rainfall", the dead loads (extensive ~15–25 lb/sqft, intensive ~80–150 lb/sqft saturated), the membrane-protection/longevity claim, and the $15–$35/sqft cost in the NAMED sources in GAP-green-roof.md — if the GAP pack flags any of these [UNVERIFIED] or narrows the range, FOLLOW THE GAP PACK, not the current object. Structural-engineer verification + fire-setback are NJ/IBC code facts (cite). LEED can be named qualitatively. DROP any invented $-savings. Scrub modality ("can handle" → "handles … up to [sourced load]"). Question-form headings.`,
  },
  {
    id: 'solar-shingles-vs-solar-panels',
    packs: ['facts-energy-solar.md — §0.2 (FEDERAL §25D 30% RESIDENTIAL SOLAR CREDIT IS REPEALED for systems completed after 2025-12-31 per the IRS), §0.6 (no NABCEP/installer cert claims for NQR), §0.7 + the SuSI/ADI SREC-II table (15-yr term; state SREC-II value QUALITATIVELY — do NOT pin $85–90/MWh), the solar-shingle section (BIPV ~13–23% / most 14–18% efficiency vs panels 20–22%; ~$3.50–$8.00/W shingles vs ~$2.50–$4.00/W panels ≈1.5–2×; GAF Energy/Tesla/CertainTeed Solstice/SunTegra named specs; UL 7103/790/2218 listings; pitch ≥2:12), net metering N.J.S.A. 48:3-87, §12 (solar panels do NOT "extend roof life"/"protect the roof")', 'facts-materials-economics.md (asphalt baseline) + facts-nj-regulatory-climate.md'],
    debt: `CRITICAL CURRENCY FIX: the current object cites "the 30% federal Investment Tax Credit" / "federal ITC" in comparisonRows, njSpecific, AND a FAQ — this is WRONG for 2026. Per facts-energy-solar §0.2 the §25D residential credit is REPEALED for systems completed after Dec 31, 2025. Either OMIT the federal credit entirely, or frame it strictly historically ("the federal residential solar credit was 30% for systems completed through 2025, per the IRS") and direct readers to a tax professional — NQR is a roofer, not a tax advisor. Replace "SREC-II $85–$90 per MWh" / "$300–$600 per year" with the QUALITATIVE SuSI/ADI SREC-II framing (a fixed per-MWh SREC-II for a 15-year term, value set at registration via the NJ Clean Energy Program — refer to the current NJ Clean Energy Program rate). Reframe cost as $/W (pack) rather than the unsourced "$25,000–$50,000 / $18,000–$35,000" and "6–8yr / 10–14yr payback" / "$0.16–0.20/kWh" — drop invented paybacks/rates, or attribute. Honest positioning: solar shingles cost MORE and are LESS efficient than panels (pack §12). Scrub modality. Question-form headings.`,
  },
  {
    id: 'architectural-vs-3-tab-shingles',
    packs: ['GAP-architectural-3tab.md (THE primary source for brand-NEUTRAL wind ratings ASTM D3161/D7158 classes & mph, UL 2218 impact classes, weight/square, lifespan corroboration, market share — READ FIRST, it was researched to replace the brand-promo the current object carries)', 'facts-materials-economics.md §0 (3-tab ~20yr, architectural ~30yr InterNACHI) + §1 (asphalt) + §7 (NJ asphalt $5.50–$11.00/sqft Josten)', 'facts-nj-regulatory-climate.md (ASCE 7-16 ~110–115 mph design wind speed northern NJ; N.J.A.C. 5:23-2.7 1–2 family re-roof = ordinary maintenance)'],
    debt: `THIS IS THE WORST OFFENDER — clear ALL of: "As GAF Certified Contractors" (GATE-fail literal), "thousands of installations" (fab count), "GAF Timberline HDZ … our top recommendation" / "best architectural shingle brand for NJ" (brand promo + R14 hype), "$1,500–$5,000 premium" (fabricated $ figure, appears 3×), "best value-per-dollar upgrades", "de facto standard". Replace with brand-NEUTRAL, standard-attributed facts from GAP-architectural-3tab.md: wind ratings by ASTM D3161 Class F / D7158 class (mph), UL 2218 impact class, weight per square, InterNACHI lifespans, NJ asphalt $/sqft (Josten). You MAY name brands as a neutral set of examples (GAF, CertainTeed, Owens Corning) but NEVER rank one as "best/top". Keep the architectural-wins verdict but ground it in lifespan + wind-class + sourced NJ cost, not an invented dollar premium. Scrub modality. Question-form headings.`,
  },
]

phase('Author')
await parallel(ITEMS.map((it) => () => agent(
  `You are an expert roofing copywriter + fact-checker rewriting ONE comparison page for Newark Quality Roofing (Essex County, NJ) to the answer-first Semantic Content Ruleset. Your output is a drop-in TypeScript object literal — it IS the deliverable, not a message.

COMPARISON: ${it.id}

${SHAPE}

${RULES}

## YOUR ASSIGNED FACT PACKS (read these in ${R}/ , except GAP-* which live in ${OUT}/)
${it.packs.map((p) => '- ' + p).join('\n')}

## DEBT YOU MUST CLEAR (specific to ${it.id})
${it.debt}

## STEPS
1. Read ${RULESET} (the rules), the gold exemplar (${SRC} comparisonId 'asphalt-shingles-vs-metal-roofing'), and your CURRENT object (same file, comparisonId '${it.id}').
2. Read your assigned fact packs. Note every figure you can source vs. cannot.
3. Rewrite the FULL object answer-first: question headings, ≤40-word bolded answer-first leads, strict body↔lead bold, every figure named-sourced, modality scrubbed, debt cleared, bold-safe field map respected.
4. SELF-AUDIT before writing: (a) every .heading + introHeading + faqs[].question is a '?'-question with NO '**'; (b) directAnswer + every content[0] + every faqs[].answer-first-sentence ≤40 words; (c) no will/should/need to/must/may/might in body prose; (d) no de-fab literals or hype anywhere; (e) every comparisonRows cell is plain text (no '**'); (f) every hard number traces to a named pack source; (g) metaDescription ≤160 chars, no '**', factual.

## OUTPUT (use the Write tool — do NOT print to your message)
- Write the object literal to ${OUT}/${it.id}.snippet.ts — a single '{ … },' object literal (trailing comma OK) starting with '{' and ending with '}' or '},'. NO imports, NO 'export', NO array brackets — just the object. It must be valid TS that drops into a ComparisonContent[] array.
- Write a human-readable draft + a "## GAPS / DROPPED" section (figures you removed and why) to ${OUT}/${it.id}.md
Return a 4–6 line summary: what you rewrote, the key sourced figures you used, and any figure you DROPPED for lack of a source.`,
  { label: `author:${it.id}`, phase: 'Author' },
)))

return { authored: ITEMS.map((i) => i.id) }
