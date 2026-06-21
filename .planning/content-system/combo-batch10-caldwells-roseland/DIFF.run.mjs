export const meta = {
  name: 'combo-batch10-differentiate',
  description: 'Differentiate 25 process-heavy west-essex combos that overlap committed siblings ≥60% — foreground city-specific local facts, preserve directAnswer+definition+cited figures',
  phases: [
    { title: 'Differentiate', detail: 'one agent per combo foregrounds local application; throttled' },
  ],
}

phase('Differentiate')
const targets = [{"city":"north-caldwell","svc":"roof-ice-dam-prevention","sib":"west-orange","ov":75.1,"e":"northCaldwellRoofIceDamPrevention","brief":"_NORTH-CALDWELL-BRIEF.md"},{"city":"essex-fells","svc":"infrared-roof-leak-detection","sib":"west-orange","ov":69.6,"e":"essexFellsInfraredRoofLeakDetection","brief":"_ESSEX-FELLS-BRIEF.md"},{"city":"caldwell","svc":"silicone-elastomeric-roof-coating","sib":"orange","ov":67.1,"e":"caldwellSiliconeElastomericRoofCoating","brief":"_CALDWELL-BRIEF.md"},{"city":"caldwell","svc":"commercial-roof-repair","sib":"north-caldwell","ov":66.9,"e":"caldwellCommercialRoofRepair","brief":"_CALDWELL-BRIEF.md"},{"city":"north-caldwell","svc":"commercial-roof-repair","sib":"caldwell","ov":66.9,"e":"northCaldwellCommercialRoofRepair","brief":"_NORTH-CALDWELL-BRIEF.md"},{"city":"caldwell","svc":"roof-maintenance-programs","sib":"nutley","ov":60,"e":"caldwellRoofMaintenancePrograms","brief":"_CALDWELL-BRIEF.md"},{"city":"north-caldwell","svc":"fascia-installation-repair","sib":"verona","ov":64.2,"e":"northCaldwellFasciaInstallationRepair","brief":"_NORTH-CALDWELL-BRIEF.md"}]
log(`Differentiating ${targets.length} combos…`)

function prompt(t) {
  const path = `src/data/combo-content/${t.city}/${t.svc}.ts`
  const sibPath = `src/data/combo-content/${t.sib}/${t.svc}.ts`
  const cityName = t.city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return `You are DIFFERENTIATING one Newark Quality Roofing service×city combo page (a local-SEO roofing site). File: ${path}

WHY: an 8-gram near-duplicate analysis found this ${t.city} "${t.svc}" combo overlaps the committed ${t.sib} version at ~${t.ov}% (overlap-coefficient) — too high. "${t.svc}" is a process-heavy / low-localizability service whose standardized facts (codes, cost ranges, install steps, named-source stats) read near-identically city-to-city. Your job: make the ${cityName} page lead with ${cityName}-SPECIFIC local application so it no longer mirrors ${t.sib}, WITHOUT changing any sourced fact.

STEPS:
1. Read ${path} (the file to rewrite) AND ${sibPath} (the committed sibling it currently overlaps — see what to DIVERGE from; do NOT copy it).
2. Read the ${cityName} author brief: .planning/content-system/combo-batch10-caldwells-roseland/${t.city}/${t.brief} (§C ${cityName} facts + §F differentiation) for the verified local anchors.
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
