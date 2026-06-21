export const meta = {
  name: 'combo-batch11-fix',
  description: 'Apply the 31 confirmed review findings (source re-pins, fab removals, pricing/consistency) across 28 west-essex combo files; one agent per file, throttled',
  phases: [
    { title: 'Fix', detail: 'one agent per file applies its confirmed finalFix(es) surgically' },
  ],
}

phase('Fix')
const groups = typeof args === 'string' ? JSON.parse(args) : args
log(`Fixing ${groups.length} files (${groups.reduce((a, g) => a + g.findings.length, 0)} confirmed findings)…`)

function prompt(g) {
  const path = `src/data/combo-content/${g.city}/${g.combo}.ts`
  const findings = g.findings.map((f, i) => `FINDING ${i + 1} — field ${f.field} [${f.category}]:
  ISSUE: ${f.issue}
  OFFENDING TEXT: ${f.evidence}
  APPLY THIS FIX (authoritative before→after): ${f.finalFix}`).join('\n\n')
  return `You are applying confirmed adversarial-review fixes to ONE Newark Quality Roofing service×city combo file (a local-SEO roofing site). File: ${path}

Each finding below was CONFIRMED by a reviewer + an adversarial refuter, with an authoritative before→after in "APPLY THIS FIX". Apply each fix surgically.

${findings}

RULES:
1. Read ${path}. For each finding, locate the offending text and apply the finalFix's before→after exactly (it preserves every fact/figure and only relocates/re-attributes — never delete a sourced fact).
2. Preserve: the entity-grounding (roofing contractor / "[City], New Jersey" / registered NJ HIC); the city's COA posture + geography; every named source and number that the fix keeps; the **bolded** topics.
3. Answer-length: if the fix touches a directAnswer bold span, an overview[0]/challenges[0]/process[0] first sentence, or a faq answer's first sentence, keep that span ≤40 words (count " — " as a word).
4. NO modality (will/should/need to/must/has to/have to) in declaratives — FAQ questions are exempt. Use indicative verbs.
5. Do NOT change any field not named in a finding. NO ** in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks, FAQ question). NO links. Apostrophes inside single-quoted TS strings MUST be escaped (\\').
6. If the offending text is ALREADY corrected (not present), skip that finding (report "already fixed").
7. After editing, the file must remain ONE valid \`export const …: ComboContent = { … };\`. Verify it parses.

Use Read + Edit. Return ONE line: "${g.city}/${g.combo}: applied ${g.findings.length} fix(es)".`
}

const CHUNK = 6
const results = []
for (let i = 0; i < groups.length; i += CHUNK) {
  const batch = groups.slice(i, i + CHUNK)
  log(`Fix batch ${Math.floor(i / CHUNK) + 1}/${Math.ceil(groups.length / CHUNK)}: ${batch.map(g => g.combo).join(', ')}`)
  const res = await parallel(batch.map(g => () => agent(prompt(g), { label: `fix:${g.city}/${g.combo}`, phase: 'Fix' })))
  results.push(...res)
}
const ok = results.filter(Boolean).length
log(`Fix phase complete: ${ok}/${groups.length}`)
return { fixed: ok, total: groups.length, statuses: results }
