export const meta = {
  name: 'combo-batch5-bloomfield-differentiate',
  description: 'Reduce cross-city duplication on 4 high-overlap Bloomfield combos by foregrounding Bloomfield-specific local application while preserving all cited facts + entity-grounding',
  phases: [{ title: 'Differentiate', detail: 'one agent per service re-localizes shared passages to Bloomfield context' }],
}

phase('Differentiate')

const TARGETS = [
  { s: 'fire-damage-roof-replacement', e: 'bloomfieldFireDamageRoofReplacement', sib: 'irvington', ov: '50.9% Jaccard / 69.0% overlap',
    shared: 'The post-fire structural assessment (the ~1.5-inch-per-hour char rate, the 85-90% residual strength of the heat-affected zone), the licensed-structural-engineer scope, the public-adjuster claim process (N.J.S.A. 17:22B), the fire/lightning claim frequency, and the tear-off-to-framing sequence are near-verbatim shared with the Irvington sibling.',
    local: 'Bloomfield fire-damage roof replacement serves a distinct stock: foreground (1) the pre-war Colonials, Dutch Colonials, and Capes near Bloomfield Center, Brookdale, and Watsessing, where older plank decking and period framing shape the post-fire structural scope; (2) the flat-roofed two-family homes and postwar garden apartments that hold a slight majority of Bloomfield units, where a fire in one unit reaches shared roof structure and displaces tenants under New Jersey landlord-tenant notice; (3) documentation packages for owners, lenders, and insurers across that even owner/renter split; (4) the conditional Chapter 302 listed-parcel review when a fire-damaged parcel near Bloomfield Center sits on the Township\'s Historic District Property List, where the rebuild matches the original roof in kind.' },
  { s: 'asphalt-shingle-roofing', e: 'bloomfieldAsphaltShingleRoofing', sib: 'irvington', ov: '44.4% Jaccard / 63.2% overlap',
    shared: 'The InterNACHI architectural-30-year / 3-tab-20-year lifespans, the architectural-vs-3-tab construction contrast, the IRC R905.1.2 ice-barrier provision, the ASTM D3161 wind ratings, and the magnet-sweep close-out are near-verbatim shared with the Irvington sibling.',
    local: 'Bloomfield asphalt shingle roofing is a STEEP-SLOPE PRE-WAR service: foreground (1) the pre-war Colonials, Dutch Colonials, and Capes of Bloomfield\'s pre-war grid near Bloomfield Center, Brookdale, and Watsessing — the dominant asphalt stock; (2) Brookdale\'s mature street-tree canopy that loads valleys and gutters with debris and shades north-facing slopes into moss; (3) Watsessing\'s low-lying drainage near the Second River and Toney\'s Brook; (4) the two-family and garden-apartment owners across the even owner/renter split; (5) the conditional Chapter 302 listed-parcel review on Bloomfield Center historic parcels, where a re-roof matches the shingle profile and color the Historic District Property List requires.' },
  { s: 'roof-thermal-imaging-inspections', e: 'bloomfieldRoofThermalImagingInspections', sib: 'irvington', ov: '44.1% Jaccard / 61.2% overlap',
    shared: 'The ASTM C1153 infrared procedure, the wet-insulation heat-capacity physics, the post-sunset thermal-anomaly read, core-cut verification, the non-destructive framing, and the cost FAQ are near-verbatim shared with the Irvington sibling.',
    local: 'Bloomfield thermal imaging is a FLAT/low-slope COMMERCIAL and MULTI-FAMILY service: foreground (1) the Broad Street, Bloomfield Avenue, and Garden State Parkway-corridor storefronts and mixed-use flat roofs; (2) the flat-roofed two-family homes and postwar garden apartments that hold a slight majority of Bloomfield units, where decades of recovers and re-coats trap moisture BETWEEN layers — exactly what an ASTM C1153 scan locates that a surface look misses; (3) LANDLORD/portfolio decisions across the even owner/renter split — a scan maps wet insulation before a costly tear-off; (4) Watsessing low-lying drainage near the Second River and Toney\'s Brook that feeds membrane saturation; (5) NON-INVASIVE reading from above over tenant-occupied units under New Jersey landlord-tenant notice.' },
  { s: 'storm-damage-roof-repair', e: 'bloomfieldStormDamageRoofRepair', sib: 'irvington', ov: '40.2% Jaccard / 60.7% overlap',
    shared: 'The IBHS hail/wind damage-pattern facts, the storm-versus-wear distinction, the timestamped-photo insurance documentation, the public-adjuster N.J.S.A. 17:22B framing, and the 2.8% wind/hail claim stat are near-verbatim shared with the Irvington sibling.',
    local: 'Bloomfield storm-damage repair spans two distinct stocks: foreground (1) the steep-slope pre-war Colonials and Capes that lose shingles and ridge caps to wind, and the flat-roofed two-family and garden-apartment membranes that open at seams and parapet flashing — each with its own storm-failure pattern; (2) Brookdale\'s mature canopy where branches strike the covering during the same storms; (3) Watsessing low-lying drainage near the Second River and Toney\'s Brook that adds standing water to the storm picture; (4) Broad Street, Bloomfield Avenue, and Garden State Parkway commercial corridors; (5) the even owner/renter split that drives tenant-occupied access under New Jersey landlord-tenant notice and owner/insurer documentation; (6) the conditional Chapter 302 listed-parcel review on Bloomfield Center historic parcels.' },
]

function prompt(t) {
  return `You are reducing cross-city DUPLICATION on ONE Bloomfield (Township of Bloomfield, NJ) service×city combo while raising its local value, for a local-SEO roofing site. Service: "${t.s}". File to rewrite: src/data/combo-content/bloomfield/${t.s}.ts (export const ${t.e}: ComboContent).

WHY: a 5-city near-duplicate analysis found this combo at ${t.ov} with the ${t.sib} version of the same service, because the content is dominated by standardized facts identical city-to-city. ${t.shared} Your job: re-localize so Bloomfield's distinct local application DOMINATES the page and the shared facts become a supporting minority — WITHOUT deleting any cited fact.

STEP 1 — READ all three:
- src/data/combo-content/bloomfield/${t.s}.ts (the file you will rewrite — it ALREADY passes the gate and carries adversarial-review corrections + entity-grounding; confirm export "${t.e}", serviceId "${t.s}", cityId 'bloomfield'. PRESERVE every fact and every corrected source attribution already in it.)
- src/data/combo-content/${t.sib}/${t.s}.ts (the sibling you must DIVERGE from — do not mirror its sentence structure or order)
- .planning/content-system/combo-batch5-bloomfield/_BLOOMFIELD-BRIEF.md (render contract + hard rules + Bloomfield facts + §0 ENTITY-GROUNDING)

STEP 2 — REWRITE the Bloomfield file to foreground these verified Bloomfield distinctives:
${t.local}

ENTITY-GROUNDING — PRESERVE EXACTLY (do NOT change these two fields):
- directAnswer: keep the existing entity-grounded value verbatim (it already reads "Newark Quality Roofing is a roofing contractor providing ${t.s.replace(/-/g,' ')} across Bloomfield, New Jersey, and Essex County, … as a registered New Jersey Home Improvement Contractor"). Do not rewrite it.
- definition: keep the existing 'definition' field value BYTE-FOR-BYTE (it is the canonical service definition; altering it breaks entity-stability). Copy it through unchanged.

RULES (do not break the gate — this file currently passes):
- PRESERVE EVERY CITED FACT AND NAMED SOURCE currently in the file (ASTM C1153, InterNACHI lifespans, NRCA/ARMA, Modernize/HomeAdvisor/Angi cost ranges, N.J.A.C. sections, IRC sections, IBHS, Triple-I/NAIC, the full N.J.A.C. 5:23-6.4 statutory recover list "wood shake, slate, clay, cement, or asbestos-cement tile"). Relocate them INTO the localized narrative; never delete a fact or invent a new number. Introduce NO new hard number not already in the file or implied by the brief.
- Materially REPHRASE the shared standardized passages in Bloomfield-contextualized language so they are no longer near-verbatim with the ${t.sib} sibling (FACTS stay; FRAMING localizes). Cut the verbatim shingle overlap substantially.
- Keep it answer-first: overview[0]/challenges[0]/process[0] each a ≤40-word FIGURE-FREE bold lead; each faq answer's first sentence ≤40 words and definitive. Count standalone " — " em-dash tokens as words; stay under 40.
- Schema caps: overview 3-5, challenges 2-4, process 2-4, faqs 3-6 (keep exactly one cost FAQ). metaDescription ≤160 chars, no ** markdown.
- CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured" — NEVER "licensed" for NQR (keep third-party "licensed public adjuster/engineer/Construction Official/asbestos abatement" cites). NO de-fab literals (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, response-time claims, manufacturer-certification claims). NO will/should/need-to/must modality in declaratives (FAQ questions exempt). NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links/URLs. NO city-specific heat-island/wind degree numbers (EPA framing qualitative only, about 1 to 7°F). NO banned NRCA "up to 25%" ventilation figure. NO RICOWI "2-3x field pressure" multiplier.
- BLOOMFIELD GEOGRAPHY: inner-ring township NORTH of Newark; the Third River runs near the TOWN CENTER; the Garden State Parkway threads the commercial spine; borders Montclair, Glen Ridge, Belleville, Nutley, and Newark. Keep the three watercourses SEPARATE — Watsessing Park carries the Second River + Toney's Brook (SE), NOT the Third River. NO reservation. Do NOT import Irvington's "no-river/Vailsburg/I-78" framing, East Orange's "flat Watsessing plain," or Orange's "Watchung-ridge." Verified sections only: Bloomfield Center, Watsessing, Brookdale, Ampere, Silver Lake/Halcyon + Broad Street / Bloomfield Avenue / Garden State Parkway corridors.
- BLOOMFIELD HISTORIC: a CONDITIONAL, LISTED-PARCEL COA under Bloomfield Township Code Chapter 302 — required for exterior work on a parcel on the Township's "Historic District Property List" (do NOT say "no COA," do NOT assert a whole neighborhood is regulated, do NOT conflate the National Register Bloomfield Green district with the local list). Per the NPS, a National Register listing alone places no federal restriction on a private owner.
- Apostrophes inside single-quoted TS strings MUST be escaped (Bloomfield\\'s) — unescaped apostrophes break the build.

OUTPUT: write the COMPLETE rewritten file to .planning/content-system/combo-batch5-bloomfield/${t.s}.diff.ts — first line EXACTLY "import type { ComboContent } from '../schema';", blank line, then "export const ${t.e}: ComboContent = {", keep serviceId/cityId, KEEP directAnswer + definition unchanged, end with "};". Output ONLY valid TypeScript (no code fences, no commentary). Do NOT edit any file under src/.

Return one line: "${t.s}: rewritten, <N faqs>, foregrounded <one-phrase Bloomfield local angle>".`
}

const results = await parallel(TARGETS.map(t => () => agent(prompt(t), { label: `diff:${t.s}`, phase: 'Differentiate' })))
log(`Differentiate complete: ${results.filter(Boolean).length}/${TARGETS.length}`)
return { done: results.filter(Boolean).length, total: TARGETS.length, statuses: results }
