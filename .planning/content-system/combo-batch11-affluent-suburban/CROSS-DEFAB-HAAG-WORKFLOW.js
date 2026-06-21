export const meta = {
  name: 'combo-batch11-haag-defab',
  description: 'Cross-batch de-fab: remove the fabricated HAAG Engineering hail-assessment brand from the 12 committed cities\' hail-damage-roof-repair combos, re-attributing to IBHS per the committed caldwell gold (HAAG-only changes; everything else byte-identical)',
  phases: [{ title: 'HAAG-defab', detail: 'one agent per committed hail combo removes every HAAG reference, re-attributes to IBHS, preserves all other prose' }],
}

phase('HAAG-defab')

// The 12 committed cities whose hail-damage-roof-repair.ts still carries the fabricated HAAG Engineering brand
// (caldwells-roseland 5 + livingston/millburn are already clean). batch-10 surfaced this as a fab class:
// HAAG Engineering is NOT a hail-inspection STANDARD — the gold form attributes hail assessment to IBHS and
// describes a generic "test-square method" (one roofing square of 100 square feet), per the committed caldwell combo.
const CITIES = ['belleville', 'bloomfield', 'cedar-grove', 'glen-ridge', 'irvington', 'maplewood', 'montclair', 'newark', 'nutley', 'south-orange', 'verona', 'west-orange']

const BDIR = '.planning/content-system/combo-batch11-affluent-suburban/_haag'

function prompt(city) {
  const src = `src/data/combo-content/${city}/hail-damage-roof-repair.ts`
  const out = `${BDIR}/${city}.hail.defab.ts`
  return `You are doing a SURGICAL cross-batch de-fabrication edit on ONE committed combo file for a local-SEO roofing site. File: ${src} (export const for ${city}/hail-damage-roof-repair). This file already passes every gate and is gold-quality EXCEPT for one fabricated brand you must remove.

THE FAB: the file attributes hail assessment to "HAAG Engineering" (a "HAAG Engineering Test Square method," "per HAAG Engineering," "per HAAG Engineering and IBHS … guidance," "HAAG-standard …," "the standard hail-inspection procedure since the 1960s," and project-spotlight titles like "HAAG Test-Square Assessment"). HAAG Engineering is NOT a published hail-inspection standard — this brand attribution is fabricated and must be removed. The real, supported authority is IBHS, and the inspection technique is a generic per-square ("test-square") method.

READ FIRST — the GOLD exemplar (already de-fabbed, committed): src/data/combo-content/caldwell/hail-damage-roof-repair.ts. Note how it (a) attributes hail-assessment claims "per IBHS hail-assessment guidance" with NO HAAG; (b) describes the technique as "a test-square method, a 10-by-10-foot square marked on each slope … treating 8 functional impacts per 100 square feet as the benchmark, per IBHS hail-assessment guidance"; (c) uses no "since the 1960s," no "HAAG-standard," no HAAG in any project-spotlight title.

THEN read ${src} and produce a de-fabbed copy applying ONLY these transformations:
- "per HAAG Engineering and IBHS hail-assessment guidance" → "per IBHS hail-assessment guidance"
- "per HAAG Engineering and IBHS guidance" → "per IBHS guidance"
- "per HAAG Engineering hail-assessment guidance" → "per IBHS hail-assessment guidance"
- "per HAAG Engineering and Integrity Home Exteriors guidance" → "per IBHS and Integrity Home Exteriors guidance"
- "per HAAG Engineering impact-density guidance" → "per IBHS hail-mitigation guidance"
- "the HAAG Engineering Test Square method" (any case) → "a test-square method" — and ensure the surrounding sentence still conveys the 10-by-10-foot / one-roofing-square / 100-square-feet description (it already does in most cases; if a sentence loses that detail, keep the existing "100 square feet" wording that is already there — do NOT invent new numbers).
- "per HAAG Engineering, the standard hail-inspection procedure since the 1960s" → "per IBHS hail-assessment guidance, the standard hail-inspection procedure" (drop "since the 1960s")
- "HAAG-standard" (e.g. "HAAG-standard documentation/findings") → "test-square" (e.g. "test-square documentation/findings")
- "per HAAG Engineering" (any remaining standalone source cite) → "per IBHS hail-assessment guidance"
- project-spotlight titles / descriptions that start with or contain "HAAG Test Square"/"HAAG Test-Square"/"HAAG test-square" → drop "HAAG ", keeping correct capitalization for a title (e.g. "HAAG Test-Square Assessment" → "Test-Square Assessment"; "HAAG test-square assessment, slate and …" → "Test-square assessment, slate and …")
- any other residual "HAAG"/"HAAG Engineering" → remove it the same gold way (attribute to IBHS for a source cite, or drop the brand for a method/title), so that ZERO "HAAG" remains.

HARD CONSTRAINTS:
- Change ONLY the HAAG references and their immediate grammar. EVERY other character — every other fact, number, source, sentence, field, the directAnswer, the definition, serviceId, cityId, export name, metaDescription, pricing, whyChooseUs, conversionHooks — must be BYTE-IDENTICAL to the original. Do not "improve" anything else.
- Keep all answer-first leads ≤40 words (your edits only shorten or swap a source, so this holds — verify the overview[0]/challenges[0]/process[0] first sentence and each faq answer first sentence are still ≤40 words).
- No new modality (will/should/need-to/must) in declaratives; no de-fab literals; no "licensed" for NQR; no ** in raw fields; no links.
- Preserve the exact import line and the trailing "};".

OUTPUT: write the COMPLETE de-fabbed file to ${out}. First line EXACTLY "import type { ComboContent } from '../schema';", then blank line, then the export. Output ONLY valid TypeScript (no code fences, no commentary).

Return ONE line: "${city}: HAAG removed, <N> replacements, 0 HAAG remaining".`
}

const results = await parallel(CITIES.map(c => () => agent(prompt(c), { label: `haag:${c}`, phase: 'HAAG-defab' })))
log(`HAAG de-fab complete: ${results.filter(Boolean).length}/${CITIES.length}`)
return { done: results.filter(Boolean).length, total: CITIES.length, statuses: results }
