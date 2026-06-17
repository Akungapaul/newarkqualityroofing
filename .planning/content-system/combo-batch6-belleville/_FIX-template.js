export const meta = {
  name: 'combo-batch6-belleville-fix',
  description: 'Apply confirmed + low review findings to the Belleville combos (Combo Batch 6), one agent per file',
  phases: [
    { title: 'Fix', detail: 'one agent per affected combo file applies its findings verbatim and parse-checks' },
  ],
}

phase('Fix')
const byFile = __FIX_JSON__
const entries = Object.entries(byFile)
log(`Applying review findings to ${entries.length} Belleville combo files…`)

const FIX_SCHEMA = {
  type: 'object',
  required: ['combo', 'editsApplied', 'parseOk'],
  properties: {
    combo: { type: 'string' },
    editsApplied: { type: 'number' },
    parseOk: { type: 'boolean' },
    notes: { type: 'string', description: 'any finding you could NOT apply, and why' },
  },
}

function prompt(combo, findings) {
  const file = `src/data/combo-content/belleville/${combo}.ts`
  const list = findings.map((f, i) => `FINDING ${i + 1} — field ${f.field} (${f.severity}/${f.category})\n  ISSUE: ${f.issue}\n  FIX (apply this exactly): ${f.fix}`).join('\n\n')
  return `You are applying adversarial-review findings to ONE Belleville service×city combo file: ${file}. Apply ONLY the findings listed below, exactly as the reviewer specified. This is a precision source-attribution / de-fabrication fix pass — preserve every other word of the file.

STEPS:
1. READ the file ${file} in full.
2. For EACH finding below, locate the exact field and apply the reviewer's BEFORE→AFTER fix. Where the finding gives an explicit "Before:"/"After:" pair, replace the BEFORE text with the AFTER text VERBATIM. Where it gives only an intent (e.g. "re-pin to per the NRCA"), make the smallest edit that satisfies it, preserving all facts — relocate or re-attribute, never delete substantive content. If the file's actual text differs slightly from the reviewer's quoted "before", match the file's real text and apply the equivalent change.
3. HARD CONSTRAINTS:
   - Use the Edit tool with exact string matches. Do NOT rewrite the whole file.
   - Escape apostrophes inside single-quoted TS strings as \\' (e.g. Belleville\\'s) — an unescaped apostrophe breaks the string. After editing, the file MUST still be valid TypeScript.
   - Do NOT touch any field not named in a finding. Do NOT alter any N.J.A.C. 5:23-6.4 material list or any ventilation "25%" wording — those were already corrected by a separate sweep; leave them as-is.
   - NQR credential stays "registered New Jersey Home Improvement Contractor"/"fully insured" — never introduce "licensed" for NQR.
   - If you touch a directAnswer bold span, an overview/challenges/process first string, or a faq answer's first sentence, keep that answer ≤40 words (count standalone " — " em-dash tokens as words).
   - No markdown links, no de-fab literals, no modality (will/should/need-to/must) in declaratives.
4. After your edits, run a mental parse check: every string literal is closed, every apostrophe escaped, commas intact.

FINDINGS FOR ${combo}:
${list}

Return: combo="${combo}", editsApplied=<count>, parseOk=<true/false>, notes=<anything you could not apply>.`
}

const results = await parallel(entries.map(([combo, findings]) => () =>
  agent(prompt(combo, findings), { label: `fix:${combo}`, phase: 'Fix', schema: FIX_SCHEMA })
))

const ok = results.filter(Boolean)
log(`Fix phase complete: ${ok.length}/${entries.length} files processed`)
return {
  filesProcessed: ok.length,
  totalFiles: entries.length,
  totalEdits: ok.reduce((a, r) => a + (r.editsApplied || 0), 0),
  parseFailures: ok.filter(r => !r.parseOk).map(r => r.combo),
  notes: ok.filter(r => r.notes).map(r => ({ combo: r.combo, notes: r.notes })),
}
