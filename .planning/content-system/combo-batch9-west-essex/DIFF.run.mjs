export const meta = {
  name: 'combo-batch9-differentiate',
  description: 'Differentiate 25 process-heavy west-essex combos that overlap committed siblings ≥60% — foreground city-specific local facts, preserve directAnswer+definition+cited figures',
  phases: [
    { title: 'Differentiate', detail: 'one agent per combo foregrounds local application; throttled' },
  ],
}

phase('Differentiate')
const targets = [{"city":"west-orange","svc":"silicone-elastomeric-roof-coating","e":"westOrangeSiliconeElastomericRoofCoating","sib":"nutley","ov":"74.7","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"roof-vent-installation-repair","e":"westOrangeRoofVentInstallationRepair","sib":"nutley","ov":"68.3","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"rubber-roofing-epdm","e":"westOrangeRubberRoofingEpdm","sib":"south-orange","ov":"64.1","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"wind-damage-roof-repair","e":"westOrangeWindDamageRoofRepair","sib":"maplewood","ov":"65.6","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"commercial-roof-installation","e":"westOrangeCommercialRoofInstallation","sib":"maplewood","ov":"62.2","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"hail-damage-roof-repair","e":"westOrangeHailDamageRoofRepair","sib":"maplewood","ov":"61.8","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"west-orange","svc":"wood-shake-roofing","e":"westOrangeWoodShakeRoofing","sib":"nutley","ov":"60.4","brief":"_WEST-ORANGE-BRIEF.md"},{"city":"montclair","svc":"roof-ice-dam-prevention","e":"montclairRoofIceDamPrevention","sib":"maplewood","ov":"70.3","brief":"_MONTCLAIR-BRIEF.md"},{"city":"montclair","svc":"chimney-flashing-repair","e":"montclairChimneyFlashingRepair","sib":"nutley","ov":"66.9","brief":"_MONTCLAIR-BRIEF.md"},{"city":"montclair","svc":"modified-bitumen-roofing","e":"montclairModifiedBitumenRoofing","sib":"nutley","ov":"66.3","brief":"_MONTCLAIR-BRIEF.md"},{"city":"montclair","svc":"pvc-roofing","e":"montclairPvcRoofing","sib":"nutley","ov":"63.2","brief":"_MONTCLAIR-BRIEF.md"},{"city":"montclair","svc":"roof-maintenance-programs","e":"montclairRoofMaintenancePrograms","sib":"nutley","ov":"63.6","brief":"_MONTCLAIR-BRIEF.md"},{"city":"montclair","svc":"slate-roof-replacement","e":"montclairSlateRoofReplacement","sib":"maplewood","ov":"64.4","brief":"_MONTCLAIR-BRIEF.md"},{"city":"glen-ridge","svc":"commercial-metal-roofing","e":"glenRidgeCommercialMetalRoofing","sib":"nutley","ov":"69.4","brief":"_GLEN-RIDGE-BRIEF.md"},{"city":"glen-ridge","svc":"solar-shingle-installation","e":"glenRidgeSolarShingleInstallation","sib":"nutley","ov":"65.2","brief":"_GLEN-RIDGE-BRIEF.md"},{"city":"verona","svc":"infrared-roof-leak-detection","e":"veronaInfraredRoofLeakDetection","sib":"nutley","ov":"74.1","brief":"_VERONA-BRIEF.md"},{"city":"verona","svc":"commercial-roof-replacement","e":"veronaCommercialRoofReplacement","sib":"newark","ov":"64.7","brief":"_VERONA-BRIEF.md"},{"city":"verona","svc":"historic-roof-restoration","e":"veronaHistoricRoofRestoration","sib":"cedar-grove","ov":"60.0","brief":"_VERONA-BRIEF.md"},{"city":"cedar-grove","svc":"spray-foam-roofing","e":"cedarGroveSprayFoamRoofing","sib":"nutley","ov":"76.8","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"gutter-guard-installation","e":"cedarGroveGutterGuardInstallation","sib":"nutley","ov":"73.6","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"cedar-shake-roof-replacement","e":"cedarGroveCedarShakeRoofReplacement","sib":"nutley","ov":"70.3","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"insurance-roof-replacement","e":"cedarGroveInsuranceRoofReplacement","sib":"nutley","ov":"67.9","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"commercial-roof-repair","e":"cedarGroveCommercialRoofRepair","sib":"nutley","ov":"64.6","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"storm-damage-roof-replacement","e":"cedarGroveStormDamageRoofReplacement","sib":"belleville","ov":"60.3","brief":"_CEDAR-GROVE-BRIEF.md"},{"city":"cedar-grove","svc":"historic-roof-restoration","e":"cedarGroveHistoricRoofRestoration","sib":"verona","ov":"60.0","brief":"_CEDAR-GROVE-BRIEF.md"}]
log(`Differentiating ${targets.length} combos…`)

function prompt(t) {
  const path = `src/data/combo-content/${t.city}/${t.svc}.ts`
  const sibPath = `src/data/combo-content/${t.sib}/${t.svc}.ts`
  const cityName = t.city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return `You are DIFFERENTIATING one Newark Quality Roofing service×city combo page (a local-SEO roofing site). File: ${path}

WHY: an 8-gram near-duplicate analysis found this ${t.city} "${t.svc}" combo overlaps the committed ${t.sib} version at ~${t.ov}% (overlap-coefficient) — too high. "${t.svc}" is a process-heavy / low-localizability service whose standardized facts (codes, cost ranges, install steps, named-source stats) read near-identically city-to-city. Your job: make the ${cityName} page lead with ${cityName}-SPECIFIC local application so it no longer mirrors ${t.sib}, WITHOUT changing any sourced fact.

STEPS:
1. Read ${path} (the file to rewrite) AND ${sibPath} (the committed sibling it currently overlaps — see what to DIVERGE from; do NOT copy it).
2. Read the ${cityName} author brief: .planning/content-system/combo-batch9-west-essex/${t.city}/${t.brief} (§C ${cityName} facts + §F differentiation) for the verified local anchors.
3. REWRITE \`overview\`, \`challenges\`, \`process\`, and the \`faqs\` answers so each LEADS with the ${cityName}-specific situation (its building stock, its verified neighborhoods/corridors, its COA posture, its reservation/canopy/flood geography, its owner/tenant mix) BEFORE the standardized facts. Re-order and re-frame; vary sentence structure away from the ${t.sib} version.

HARD CONSTRAINTS (violating these fails the gate):
- PRESERVE \`directAnswer\` and \`definition\` BYTE-IDENTICAL — do NOT touch those two fields at all.
- PRESERVE every cited figure and its named source (InterNACHI lifespans, NRCA 90–95% flashing, ASTM/IRC/N.J.A.C. code sections, HomeAdvisor/Modernize/Josten/SPRI cost ranges, Triple-I 2.8%, IIBEC qualitative wind, etc.) — differentiation changes WHICH local facts LEAD, never the sourced numbers. Do not invent new figures.
- Keep the ${cityName} facts ACCURATE to the brief: correct COA posture, ONLY the verified neighborhoods, the correct reservations (NEVER import another city's reservation/COA), qualitative geography (no city-specific degree/gust/%).
- Answer-first ≤40 words: the first string of overview/challenges/process and each faq answer's FIRST SENTENCE must be ≤40 words (count " — " as a word). Bold 1–3 named topics with ** in each lead; each following body string re-opens by re-bolding a lead topic in order.
- NO modality (will/should/need to/must/has to/have to) in declaratives (FAQ questions exempt). NO de-fab literals (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, manufacturer brands as NQR creds). NO "licensed" for NQR (keep third-party licensed cites). NO ** in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks, FAQ question). NO links. metaDescription ≤160 chars. Apostrophes inside single-quoted TS strings escaped (\\').
- Keep schema counts in range (overview 3–5, challenges 2–4, process 2–4, faqs 3–6) and keep the export name \`${t.e}\`, serviceId '${t.svc}', cityId '${t.city}'. Keep exactly one cost FAQ.
- The file must remain ONE valid \`export const ${t.e}: ComboContent = { … };\` that parses.

Use Read + Edit (edit in place). Return ONE line: "${t.city}/${t.svc}: differentiated (was ~${t.ov}% vs ${t.sib})".`
}

const CHUNK = 5
const results = []
for (let i = 0; i < targets.length; i += CHUNK) {
  const batch = targets.slice(i, i + CHUNK)
  log(`Diff batch ${Math.floor(i / CHUNK) + 1}/${Math.ceil(targets.length / CHUNK)}: ${batch.map(t => t.city + '/' + t.svc).join(', ')}`)
  const res = await parallel(batch.map(t => () => agent(prompt(t), { label: `diff:${t.city}/${t.svc}`, phase: 'Differentiate' })))
  results.push(...res)
}
const ok = results.filter(Boolean).length
log(`Differentiate phase complete: ${ok}/${targets.length}`)
return { differentiated: ok, total: targets.length, statuses: results }
