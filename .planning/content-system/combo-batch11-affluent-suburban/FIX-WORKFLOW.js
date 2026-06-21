export const meta = {
  name: 'combo-batch11-fix',
  description: 'Apply confirmed + selected-low review findings to the 32 affected Maplewood/South Orange combo files (one agent per file, edits src in place)',
  phases: [{ title: 'Fix', detail: 'one agent per file applies its findings precisely, preserving directAnswer + definition' }],
}

phase('Fix')
const groups = __FIX_GROUPS__
log(`Fixing ${groups.length} files (${groups.reduce((a, g) => a + g.findings.length, 0)} findings)…`)

function prompt(g) {
  const findings = g.findings.map((f, i) =>
    `FINDING ${i + 1} [${f.kind}] field: ${f.field}\n  issue: ${f.issue}\n  evidence: ${f.evidence}\n  FIX TO APPLY: ${f.fix}`
  ).join('\n\n')
  return `You are applying verified review findings to ONE service×city combo file for a local-SEO roofing site. File: src/data/combo-content/${g.city}/${g.combo}.ts (city ${g.city}, Essex County, NJ).

Use Read then Edit. STEPS:
1. READ src/data/combo-content/${g.city}/${g.combo}.ts in full.
2. Apply EACH finding below by making the precise before→after edit described in its "FIX TO APPLY". The fixes are pre-verified against the fact packs — apply them as specified. If a fix gives an exact before/after string, match it; if it describes a de-quantification or re-attribution, apply it to EVERY matching instance in this file (some patterns recur across overview/challenges/process/faqs in the same file).

FINDINGS FOR THIS FILE:
${findings}

HARD RULES (do not break the gate — this file currently passes):
- PRESERVE the directAnswer field and the definition field BYTE-FOR-BYTE — do NOT edit them (no finding targets them).
- PRESERVE every OTHER cited fact and named source not named in a finding. Relocate/re-attribute per the findings; never delete a fact or invent a new number or source not present in the fix text.
- Keep answer-first: after your edits, the directAnswer bold span, the FIRST string of overview/challenges/process, and each faq answer's FIRST SENTENCE must each stay ≤40 words (count standalone " — " em-dash tokens as words). If a fix lengthens a first sentence past 40 words, split it into two sentences.
- CREDENTIAL: NQR is "a registered New Jersey Home Improvement Contractor" / "fully insured" — NEVER "licensed" for NQR. Keep third-party "licensed public adjuster/engineer/Construction Official/asbestos abatement" cites.
- NO de-fab literals (GAF Certified, same-day, 24/7, 15+ years, 500+, top-rated, response-time claims). NO will/should/need-to/must modality in declaratives (FAQ questions exempt). NO ** markdown in raw fields (whyChooseUs, pricing.range, pricing.note, metaDescription, conversionHooks.*, faq question). NO links/URLs.
- Apostrophes inside single-quoted TS strings MUST be escaped (e.g. ${g.city === 'south-orange' ? "South Orange\\'s" : "Maplewood\\'s"}) — an unescaped apostrophe breaks the build. After editing, the file must remain valid TypeScript (a single \`export const … : ComboContent = { … };\`).

Edit the file IN PLACE at src/data/combo-content/${g.city}/${g.combo}.ts. Do NOT create a new file. Do NOT touch any other file.

Return ONE line: "${g.city}/${g.combo}: applied <N> findings".`
}

const results = await parallel(groups.map(g => () =>
  agent(prompt(g), { label: `fix:${g.city}/${g.combo}`, phase: 'Fix' })
))
const ok = results.filter(Boolean).length
log(`Fix phase complete: ${ok}/${groups.length} files returned`)
return { fixed: ok, total: groups.length, statuses: results }
