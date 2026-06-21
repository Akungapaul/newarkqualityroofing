export const meta = {
  name: 'combo-batch10-leadfix',
  description: 'Tighten the 56 answer-length lead overruns (>40w) across 44 west-essex combo files to ≤40w, preserving facts/sources/bold/COA',
  phases: [
    { title: 'Tighten', detail: 'one agent per file tightens only its flagged leads to ≤40 words, surgical edits' },
  ],
}

phase('Tighten')
const files = [{"city":"caldwell","svc":"built-up-roofing","viol":[{"field":"overview[0]","words":43}]},{"city":"caldwell","svc":"roof-deck-repair-replacement","viol":[{"field":"overview[0]","words":48}]},{"city":"caldwell","svc":"custom-roof-design-consultation","viol":[{"field":"challenges[0]","words":53}]},{"city":"caldwell","svc":"insurance-roof-replacement","viol":[{"field":"overview[0]","words":59}]},{"city":"north-caldwell","svc":"silicone-roof-coating","viol":[{"field":"overview[0]","words":51}]},{"city":"north-caldwell","svc":"roof-overlay-installation","viol":[{"field":"overview[0]","words":41}]},{"city":"north-caldwell","svc":"roof-replacement-cost","viol":[{"field":"overview[0]","words":54}]},{"city":"north-caldwell","svc":"metal-roof-replacement","viol":[{"field":"faq[4].answer","words":43}]},{"city":"essex-fells","svc":"custom-roof-design-consultation","viol":[{"field":"faq[5].answer","words":46}]},{"city":"essex-fells","svc":"historic-roof-restoration","viol":[{"field":"faq[1].answer","words":43},{"field":"faq[5].answer","words":42}]},{"city":"essex-fells","svc":"metal-roof-replacement","viol":[{"field":"faq[4].answer","words":43}]},{"city":"fairfield","svc":"hail-damage-roof-repair","viol":[{"field":"overview[0]","words":42},{"field":"challenges[0]","words":42}]},{"city":"fairfield","svc":"slate-roof-installation-repair","viol":[{"field":"faq[5].answer","words":50}]},{"city":"fairfield","svc":"epdm-commercial-roofing","viol":[{"field":"overview[0]","words":43}]},{"city":"fairfield","svc":"green-roof-installation","viol":[{"field":"overview[0]","words":46},{"field":"faq[5].answer","words":42}]},{"city":"fairfield","svc":"gutter-installation-repair","viol":[{"field":"overview[0]","words":45}]},{"city":"fairfield","svc":"gutter-guard-installation","viol":[{"field":"overview[0]","words":44},{"field":"process[0]","words":52}]},{"city":"fairfield","svc":"solar-panel-roofing-installation","viol":[{"field":"faq[0].answer","words":46},{"field":"faq[4].answer","words":51}]},{"city":"fairfield","svc":"silicone-roof-coating","viol":[{"field":"overview[0]","words":44}]},{"city":"fairfield","svc":"roof-thermal-imaging-inspections","viol":[{"field":"overview[0]","words":60},{"field":"challenges[0]","words":64}]},{"city":"fairfield","svc":"infrared-roof-leak-detection","viol":[{"field":"challenges[0]","words":45}]},{"city":"fairfield","svc":"historic-roof-restoration","viol":[{"field":"faq[1].answer","words":47}]},{"city":"fairfield","svc":"full-roof-tear-off","viol":[{"field":"overview[0]","words":50}]},{"city":"fairfield","svc":"roof-replacement-cost","viol":[{"field":"overview[0]","words":62},{"field":"challenges[0]","words":45},{"field":"process[0]","words":58}]},{"city":"fairfield","svc":"metal-roof-replacement","viol":[{"field":"faq[3].answer","words":43}]},{"city":"roseland","svc":"slate-roof-installation-repair","viol":[{"field":"faq[5].answer","words":51}]},{"city":"roseland","svc":"cedar-shake-roofing","viol":[{"field":"faq[4].answer","words":51},{"field":"faq[5].answer","words":47}]},{"city":"roseland","svc":"roof-flashing-installation-repair","viol":[{"field":"faq[0].answer","words":41}]},{"city":"roseland","svc":"fascia-installation-repair","viol":[{"field":"overview[0]","words":42}]},{"city":"roseland","svc":"custom-roof-design-consultation","viol":[{"field":"overview[0]","words":45}]},{"city":"roseland","svc":"full-roof-tear-off","viol":[{"field":"overview[0]","words":45}]},{"city":"roseland","svc":"insurance-roof-replacement","viol":[{"field":"overview[0]","words":47}]},{"city":"roseland","svc":"metal-roof-replacement","viol":[{"field":"faq[3].answer","words":43}]}]
log(`Tightening ${files.length} files (${files.reduce((a, f) => a + f.viol.length, 0)} lead overruns)…`)

function prompt(f) {
  const path = `src/data/combo-content/${f.city}/${f.svc}.ts`
  const list = f.viol.map(v => `  - ${v.field}: currently ${v.words} words (must become ≤40)`).join('\n')
  return `You are tightening answer-length overruns in ONE Newark Quality Roofing service×city combo file (a local-SEO roofing site). File: ${path}

The semantic-content ruleset requires every answer-first lead to be a definitive ≤40-word answer. An audit flagged these spans in THIS file as too long:
${list}

MEASUREMENT RULES (which span must be ≤40 words):
- directAnswer → the BOLD SPAN only (the text inside the first **…**), not the whole sentence. Tighten by ending the bold earlier or trimming inside the bold; the credential tail "as a registered New Jersey Home Improvement Contractor." stays OUTSIDE the bold.
- overview[0] / challenges[0] / process[0] → the FIRST SENTENCE (up to the first . ! or ?).
- faq[N].answer → the FIRST SENTENCE of that answer.
- Count a standalone em-dash " — " as one word. Tighten to 38 or fewer to be safe.

HOW TO TIGHTEN (do ALL of this):
1. Read ${path}.
2. For EACH flagged field, shorten its measured span to ≤40 words WITHOUT deleting any fact, figure, named source, or bolded topic — relocate trailing clauses into a SECOND sentence (or a later element of the same array / a later FAQ sentence), split at a natural boundary (e.g. after the ordinance name, after the first cost figure), and prefer plain indicative verbs.
3. PRESERVE: every named source (per the NRCA / per N.J.A.C. 5:23-2.7 / per HomeAdvisor / per the InterNACHI life-expectancy chart / per Essex County Parks, etc.); every hard number; the entity-grounding (roofing contractor / "[City], New Jersey" / registered NJ HIC); the city's exact COA posture and geography; the **bolded** topics (keep them bolded; you may move a bold topic into the second sentence if you split).
4. DO NOT introduce modality (no will/should/need to/must/has to/have to) in declaratives — FAQ questions are exempt.
5. DO NOT change any field that was NOT flagged. DO NOT touch the definition field, metaDescription, pricing, whyChooseUs, or any raw field. NO ** markdown in raw fields. NO links.
6. Apostrophes inside single-quoted TS strings MUST be escaped (\\'). After editing, the file must remain ONE valid \`export const …: ComboContent = { … };\`.

Use Read + Edit. After editing, verify each flagged span is now ≤40 words and the file still parses.

Return ONE line: "${f.city}/${f.svc}: tightened ${f.viol.length} lead(s)".`
}

const results = await parallel(files.map(f => () =>
  agent(prompt(f), { label: `leadfix:${f.city}/${f.svc}`, phase: 'Tighten' })
))
const ok = results.filter(Boolean).length
log(`Tighten phase complete: ${ok}/${files.length}`)
return { tightened: ok, total: files.length, statuses: results }
