export const meta = {
  name: 'cities-batchA-bold-topics',
  description: 'Add **bold** markup around the NAMED MAIN TOPICS inside each answer (directAnswer, the 4 section leads, and each FAQ answer) for the 4 urban-core cities. Insert ONLY ** markers — change no other character. Output full revised CityContent snippets.',
  phases: [
    { title: 'Bold', detail: 'one agent per city → bolded <cityId>.snippet.ts' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/cities-batchA`;
const SOURCE = `${PROJECT}/src/data/city-content/urban-core.ts`;

const RULES = `
You are a typographic editor. READ ${SOURCE} and find the object whose cityId matches your assignment. Your ONLY job: add **bold** markdown around the NAMED MAIN TOPICS inside each ANSWER, so a reader scans the key entities. You insert "**" markers and change NOTHING else — not one word, space, figure, citation, or punctuation mark moves.

WHERE TO BOLD (answers only):
- directAnswer — RE-MARK it: the field currently wraps the WHOLE answer clause in one ** ... ** pair. Remove that outer pair and instead bold only the 1-3 main topics inside (the services/roof types/area the answer names). Example transform: "**Newark Quality Roofing provides roofing in Newark ... repairing and replacing asphalt, slate, metal, and flat membrane roofs ...**" -> "Newark Quality Roofing provides roofing in **Newark** and across **Essex County**, repairing and replacing **asphalt, slate, metal, and flat membrane roofs** ..." (pick the most useful 1-3 spans; keep it readable).
- overview[0] — the answer-first lead. Bold the named main topics (e.g. the enumerated stressors: **nor'easter wind**, **freeze-thaw cycling**, **dense party-wall flashing**).
- residential.content[0] — bold the named material tracks / roof types.
- commercial.content[0] — bold the named membrane systems / roof types.
- weatherChallenges.content[0] — bold the named stressors.
- faqs[].answer — for EACH faq, bold the 1-2 key topic terms in the answer's FIRST sentence (the definitive answer). Do NOT bold anything in the second/expansion sentences.

DO NOT bold:
- Any body paragraph after the lead (overview[1..], residential.content[1..], commercial.content[1..], weatherChallenges.content[1..]) — leave them exactly as-is, no **.
- Headlines, headings, neighborhoods, projectSpotlights, whyChoose, pricing, meta, credentialsHighlight — leave exactly as-is, no **.
- Whole clauses or sentences; do not bold for SEO keyword-stuffing. Bold the ENTITY/topic, 1-3 spans per answer max, never more than ~6 words per span.

HARD CONSTRAINTS:
- Insert ONLY the 4-character pattern around a span: a leading "**" and trailing "**". Every "**" you open you must close. No nested **. No * single-asterisk italics.
- Do not change wording, order, numbers, named sources, or punctuation. A diff that strips all "**" from your output MUST equal the original byte-for-byte.
- Preserve the existing string delimiters exactly (a field already in single quotes stays single-quoted with its \\' escapes; a field already in backticks stays backtick). Do NOT convert delimiters. (Bold markup contains no quotes, so this is safe.)
- The leads must still read as <=40-word answers (you are not adding words, so length is unchanged).
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<cityId>.snippet.ts — the COMPLETE object literal with ** added in the answer fields only, everything else byte-identical. Start with "// ─── <City Name> ───" then "{" and end "},". It concatenates between "export const urbanCoreContent: CityContent[] = [" and "];" so it MUST parse as one array element.
(B) ${OUT}/<cityId>.bold.md — list every span you bolded, grouped by field, so the edit is auditable.
SELF-AUDIT before finishing: (1) mentally strip all ** from your snippet and confirm it equals the current object byte-for-byte (no word/number/punctuation changed); (2) every ** is opened and closed, no nesting; (3) ** appears ONLY in directAnswer, the 4 section leads, and faqs[].answer first sentences — NOT in body paragraphs, neighborhoods, spotlights, whyChoose, pricing, or meta; (4) 1-3 bold spans per answer, each an entity/topic not a whole clause.
Return a JSON summary (do not paste the whole snippet back).
`;

const CITIES = [
  { id: 'newark', name: 'Newark' },
  { id: 'east-orange', name: 'East Orange' },
  { id: 'orange', name: 'Orange' },
  { id: 'irvington', name: 'Irvington' },
];

phase('Bold');
const SUMMARY_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['cityId', 'wrote', 'boldedSpans', 'stripEqualsOriginal', 'onlyAnswersBolded'],
  properties: {
    cityId: { type: 'string' },
    wrote: { type: 'array', items: { type: 'string' } },
    boldedSpans: { type: 'array', items: { type: 'string' }, description: 'each bolded span, grouped by field (directAnswer / overview / residential / commercial / weather / faq-N)' },
    stripEqualsOriginal: { type: 'string', description: 'confirm: stripping all ** from the snippet yields the original object byte-for-byte (no word/number/punctuation changed)' },
    onlyAnswersBolded: { type: 'string', description: 'confirm ** appears ONLY in directAnswer + 4 section leads + faq answer first sentences; NOT in bodies/neighborhoods/spotlights/whyChoose/pricing/meta' },
  },
};

const results = await parallel(CITIES.map((c) => () =>
  agent(
    `You are bolding the named main topics inside the answers for "${c.name}" (cityId: ${c.id}) in urban-core.ts. Insert ** markers only; change no other character.\n\n${RULES}\n${SNIPPET_SPEC}`,
    { label: `bold:${c.id}`, phase: 'Bold', schema: SUMMARY_SCHEMA }
  )
));

return { bolded: results.filter(Boolean) };
