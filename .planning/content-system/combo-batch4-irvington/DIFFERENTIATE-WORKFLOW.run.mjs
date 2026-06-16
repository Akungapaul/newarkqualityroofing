export const meta = {
  name: 'combo-batch4-irvington-differentiate',
  description: 'Reduce cross-city duplication on 2 high-overlap Irvington combos by foregrounding Irvington-specific local application while preserving all cited facts + entity-grounding',
  phases: [{ title: 'Differentiate', detail: 'one agent per service re-localizes shared passages to Irvington context' }],
}

phase('Differentiate')

const TARGETS = [
  { s: 'infrared-roof-leak-detection', e: 'irvingtonInfraredRoofLeakDetection', sib: 'east-orange', ov: '64.7% overlap / 46.8% J',
    shared: 'The ASTM C1153 infrared procedure, the wet-insulation heat-capacity physics, the post-sunset thermal-anomaly read, core-cut verification, and the cost FAQ are near-verbatim shared with East Orange.',
    local: 'Irvington infrared leak detection is a FLAT/low-slope COMMERCIAL and MULTI-FAMILY service: foreground (1) the Springfield Avenue and Chancellor Avenue Urban Enterprise Zone storefronts and mixed-use flat roofs and the Route 78 (I-78) southeastern-edge light-industrial buildings; (2) the LAYERED pre- and immediate-postwar flat-roof stacks where decades of recovers and re-coats trap moisture BETWEEN layers — exactly what an ASTM C1153 scan locates that a surface look misses; (3) LANDLORD/portfolio decisions on the majority-renter, rental- and multi-family-heavy two- and three-family and investor-owned stock — a scan maps wet insulation before a costly tear-off; (4) NON-INVASIVE reading from above over tenant-occupied units under New Jersey landlord-tenant notice; (5) the dense, built-out township with small lots that constrains staging.' },
  { s: 'roof-maintenance-programs', e: 'irvingtonRoofMaintenancePrograms', sib: 'orange', ov: '61.4% overlap / 40.3% J',
    shared: 'The NRCA twice-a-year-plus-post-storm inspection cadence, the maintenance-checklist items (flashing, drains, sealant, debris), the preventive-vs-reactive ROI framing, and the cost facts are shared with Orange.',
    local: 'Irvington roof-maintenance programs serve a LANDLORD/PORTFOLIO market: foreground (1) scheduled maintenance across a portfolio of the township\'s majority-renter, rental- and multi-family-heavy two- and three-family and investor-owned buildings, where a property manager standardizes upkeep across several addresses; (2) the aging early-20th-century stock where DEFERRED maintenance compounds fastest — brittle shingles, dried sealant laps, and clogged drains on 1920s-1940s roofs; (3) Springfield Avenue and Chancellor Avenue commercial flat roofs and Route 78 light-industrial membrane maintenance (seam and drain upkeep); (4) tenant-occupied access under New Jersey landlord-tenant notice and documentation packages for owners, lenders, and insurers.' },
]

function prompt(t) {
  return `You are reducing cross-city DUPLICATION on ONE Irvington (Township of Irvington, NJ) service×city combo while raising its local value, for a local-SEO roofing site. Service: "${t.s}". File to rewrite: src/data/combo-content/irvington/${t.s}.ts (export const ${t.e}: ComboContent).

WHY: a 4-city near-duplicate analysis found this combo at ${t.ov} with the ${t.sib} version of the same service, because the content is dominated by standardized facts identical city-to-city. ${t.shared} Your job: re-localize so Irvington's distinct local application DOMINATES the page and the shared facts become a supporting minority — WITHOUT deleting any cited fact.

STEP 1 — READ all three:
- src/data/combo-content/irvington/${t.s}.ts (the file you will rewrite — it ALREADY passes the gate and carries adversarial-review corrections + entity-grounding; confirm export "${t.e}", serviceId "${t.s}", cityId 'irvington'. PRESERVE every fact and every corrected source attribution already in it.)
- src/data/combo-content/${t.sib}/${t.s}.ts (the sibling you must DIVERGE from — do not mirror its sentence structure or order)
- .planning/content-system/combo-batch4-irvington/_IRVINGTON-BRIEF.md (render contract + hard rules + Irvington facts + §0 ENTITY-GROUNDING)

STEP 2 — REWRITE the Irvington file to foreground these verified Irvington distinctives:
${t.local}

ENTITY-GROUNDING — PRESERVE EXACTLY (do NOT change these two fields):
- directAnswer: keep the existing entity-grounded value verbatim (it already reads "Newark Quality Roofing is a roofing contractor providing ${t.s.replace(/-/g,' ')} across Irvington, New Jersey, and Essex County, … as a registered New Jersey Home Improvement Contractor"). Do not rewrite it.
- definition: keep the existing 'definition' field value BYTE-FOR-BYTE (it is the canonical service definition; altering it breaks entity-stability). Copy it through unchanged.

RULES (do not break the gate — this file currently passes):
- PRESERVE EVERY CITED FACT AND NAMED SOURCE currently in the file (ASTM C1153, InterNACHI lifespans, NRCA/ARMA, Modernize/HomeAdvisor/Angi cost ranges, N.J.A.C. sections, IRC sections, EPA cool-roof). Relocate them INTO the localized narrative; never delete a fact or invent a new number. Introduce NO new hard number not already in the file or implied by the brief.
- Materially REPHRASE the shared standardized passages in Irvington-contextualized language so they are no longer near-verbatim with the ${t.sib} sibling (FACTS stay; FRAMING localizes). Cut the verbatim shingle overlap substantially.
- Keep it answer-first: overview[0]/challenges[0]/process[0] each a ≤40-word FIGURE-FREE bold lead; each faq answer's first sentence ≤40 words and definitive. Count standalone " — " em-dash tokens as words; stay under 40.
- Schema caps: overview 3-5, challenges 2-4, process 2-4, faqs 3-6 (keep exactly one cost FAQ). metaDescription ≤160 chars, no ** markdown.
- CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured" — NEVER "licensed" for NQR (keep third-party "licensed public adjuster/engineer/Construction Official" cites). NO de-fab literals (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, response-time claims, manufacturer-certification claims). NO will/should/need-to/must modality in declaratives (FAQ questions exempt). NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links/URLs. NO city-specific heat-island/wind degree numbers (EPA framing qualitative only, about 1 to 7°F).
- IRVINGTON GEOGRAPHY: small, dense, built-out inner-ring township SOUTHWEST of Newark; NO river/flood/waterfront/reservation; I-78 (Route 78) only on the SOUTHEASTERN edge; Vailsburg is a NEWARK neighborhood on the eastern edge ("near Newark's Vailsburg section", never "Irvington's Vailsburg"). NO "flat plain" or "Watchung-ridge" import.
- IRVINGTON HISTORIC: Irvington has NO local historic-district ordinance and NO COA — do NOT assert any Certificate of Appropriateness, HPC, or historic-district gate.
- Apostrophes inside single-quoted TS strings MUST be escaped (Irvington\\'s) — unescaped apostrophes break the build.

OUTPUT: write the COMPLETE rewritten file to .planning/content-system/combo-batch4-irvington/${t.s}.diff.ts — first line EXACTLY "import type { ComboContent } from '../schema';", blank line, then "export const ${t.e}: ComboContent = {", keep serviceId/cityId, KEEP directAnswer + definition unchanged, end with "};". Output ONLY valid TypeScript (no code fences, no commentary). Do NOT edit any file under src/.

Return one line: "${t.s}: rewritten, <N faqs>, foregrounded <one-phrase Irvington local angle>".`
}

const results = await parallel(TARGETS.map(t => () => agent(prompt(t), { label: `diff:${t.s}`, phase: 'Differentiate' })))
log(`Differentiate complete: ${results.filter(Boolean).length}/${TARGETS.length}`)
return { done: results.filter(Boolean).length, total: TARGETS.length, statuses: results }
