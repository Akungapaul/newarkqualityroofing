export const meta = {
  name: 'combo-batch11-leadfix',
  description: 'Tighten the 56 answer-length lead overruns (>40w) across 44 west-essex combo files to ≤40w, preserving facts/sources/bold/COA',
  phases: [
    { title: 'Tighten', detail: 'one agent per file tightens only its flagged leads to ≤40 words, surgical edits' },
  ],
}

phase('Tighten')
const files = typeof args === 'string' ? JSON.parse(args) : args
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
