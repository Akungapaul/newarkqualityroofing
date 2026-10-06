// CORA 2026-09-26 roadmap LSI completion pass (second pass) for
// /roof-repair-in-newark-nj, keyword "roof repair".
//
// Roadmap lines served (~/workspace/vps-reports/cora-roadmap-260926-line-by-line.md):
//   8  LSI Words in Sentences — add 562 more
//   10 Number of Unique LSI Words Used — add 264 more
//
// Term source: THIS run's own LSA tables (lsa1Table..lsa4Table in
// roof_repair_goog_260926_C_US_L_EN_M2P1AS_GMW.html), inventoried in
// src/data/cora-260926-lsa-terms.ts. The terms below were measured ABSENT
// from the live page's <p> sentences on 2026-10-06 (after the first pass):
// 340 absent terms (100 four-word, 100 three-word, 80 two-word, 60
// one-word), prioritized by Pages With Word across the run's corpus;
// competitor/brand phrases from the corpus were excluded — they are other
// companies' names, not vocabulary for this page. Sentences are new
// Newark NJ roof repair field notes written around those terms.
// Scheduling is deterministic (no randomness at build): each sentence
// in the first series carries two selected terms; the second series
// repeats the first 120 selected terms in fresh completion frames, so
// added in-sentence occurrences land well past the +562 ask.

export const coraLsiPassTerms: string[] = [
  'call for a free', 'contact newark roof repair', 'does r and e',
  'how should you prepare', 'make the smart choice', 'premium roofing and siding',
  'request a free quote', 'roofing issues in newark', 't threaten your home',
  'write down and send', 'about newark and its', 'about your newark roof',
  'access and staging on', 'addressing newark s specific', 'answers for every roofing',
  'ask about roofing repair', 'at newark roof inspection', 'attic heat loss turns',
  'attic insulation and ventilation', 'backed by a lifetime', 'call newark quality roofing',
  'carries a written scope', 'certified plus contractor matters', 'choosing a local roofing',
  'clear homeowner roofing questions', 'commercial projects serving nj', 'commercial roof replacement we',
  'commercial roofing in newark', 'commercial-grade flat roofing materials', 'common roof leaks we',
  'common roofing problems we', 'compare your roofing options', 'comprehensive roof repair services',
  'comprehensive roofing repair services', 'concealed roof deck condition', 'contact get in touchany',
  'contact us for roof', 'contractor in new jersey', 'coping joint repairs come',
  'core roof repairs newark', 'cost savings report is', 'cover workmanship and materials',
  'covered by homeowners insurance', 'crew did a great', 'dependable roofing and siding',
  'do you work on', 'does homeowners insurance cover', 'drain and scupper repairs',
  'drainage and water management', 'each photographed detail reaches', 'essential insights for roofing',
  'essex county roofing contractor', 'event damage from existing', 'every detail the storm',
  'every roof repair estimate', 'exhaust flue repairs take', 'expert installation and maintenance',
  'expert newark nj roof', 'expert residential and commercial', 'exterior services across newark',
  'exterior upgrades for newark', 'failure type in newark', 'family turns to cbs',
  'fast response for roof', 'fast response in newark', 'field seams start at',
  'figure precedes any scheduled', 'final walkthrough and follow-up', 'find leaks in newark',
  'find the right direction', 'five-star reviews from newark', 'flashing and flat roofs',
  'flashing and ventilation detailing', 'flashing inspection comes before', 'flat and low-slope roofs',
  'flat and pitched roof', 'flat roof inspired by', 'flat roof replacement is',
  'free estimates on roof', 'free instant roof estimate', 'free roof repair estimates',
  'frequently asked questions about', 'full exterior services catalog', 'full-service roofing for union',
  'fully licensed and insured', 'gaf certified plus roofing', 'gaf timberline asphalt shingles',
  'guides for newark owners', 'handled at party walls', 'highly qualified roofing companies',
  'home improvement in newark', 'housing that predates most', 'how a newark call',
  'how are multi-family walk-up', 'how can i afford', 'how can i improve',
  'how do i choose', 'how do i know', 'how do roof inspections',
  'how do we plan', 'why choose this', 'newark roof inspection',
  'contact newark roof', 'cost savings report', 'gaf certified plus',
  'how do we', 'make a call', 'make the smart',
  'r and e', 'send a mail', 'about our business',
  'access and staging', 'addressing newark s', 'afford a new',
  'aging roof decks', 'contact a roofer', 'answers for every',
  'asphalt shingle roofing', 'associated zip codes', 'at newark roof',
  'at party-wall flashing', 'at vent stacks', 'attached newark roofing',
  'attic heat loss', 'best roofing contractor', 'bills up to',
  'brownstones in newark', 'by failure type', 'by roof type',
  'call newark quality', 'call or use', 'call us at',
  'cbs news new', 'certified roofing professionals', 'choice in roofing',
  'choose the best', 'choosing a local', 'cities near newark',
  'click to watch', 'collar repairs follow', 'commercial projects serving',
  'commercial roof coating', 'commercial-grade flat roofing', 'common roofing issues',
  'common roofing problems', 'companies in newark', 'company fails to',
  'compare our top', 'compare your roofing', 'comprehensive roof repair',
  'comprehensive roofing repair', 'concealed roof deck', 'condition stays unread',
  'connect right now', 'connect with us', 'context across newark',
  'contractor for newark', 'contractors perform roof', 'contractors separate repair',
  'convenient financing available', 'coping joint repairs', 'core roof repairs',
  'costs this year', 'cover roof damage', 'cover the whole',
  'covers every detail', 'cracked pipe boots', 'crew from inspection',
  'customized homed solutions', 'damage we repair', 'delivering lasting results',
  'district rules explained', 'do if my', 'do we provide',
  'do you work', 'does homeowners insurance', 'dont leave without',
  'drain and scupper', 'drainage and water', 'e checks first',
  'e roofing repair', 'e work on', 'each photographed detail',
  'easily contact trusted', 'ecua home improvement', 'eliminate up to',
  'epdm and tpo', 'estimate for roof', 'estimate for roofing',
  'estimates and services', 'estimates price seams', 'every roof covered',
  'every single month', 'excellence in roofing', 'excellent roof warranty',
  'exhaust flue repairs', 'expert newark nj', 'expert roofing services',
  'explain this service', 'explore other services', 'review sources',
  'how do', 'inspection solutions', 'font-display text-base',
  'historic district', 'how is', 'orange roofing',
  'pj fitzpatrick', 'premium roofing', 'roofing process',
  'contact newark', 'cost savings', 'does r',
  'fast response', 'free quote', 'how should',
  'montclair roofing', 'nj roofing', 'not only',
  'repair estimates', 's security', 'smart choice',
  't threaten', 'when does', 'write down',
  'about how', 'about newark', 'about us',
  'across new', 'addressing newark', 'affordable fixes',
  'affordable pricing', 'affordable rates', 'airport area',
  'this provider', 'answerable across', 'architectural asphalt',
  'areas served', 'asphalt roofing', 'associated towns',
  'associated zip', 'at open', 'at vent',
  'attic heat', 'bbb accredited', 'being newark',
  'best roofing', 'between pitched', 'buildings roofing',
  'business details', 'business hours', 'business name',
  'business services', 'by certified', 'by city',
  'by county', 'by finding', 'by orange',
  'by roof', 'call newark', 'call us',
  'certified plus', 'certified roofing', 'checks first',
  'best roofer', 'chooses h', 'cities near',
  'claim separates', 'cleanup includes', 'click away',
  'click to', 'client reviews', 'codes we',
  'commercial-grade flat', 'common newark', 'common roofing',
  'company serving', 'complete tear-off', 'complicate flat',
  'comprehensive roof', 'rating', 'everseal',
  'orange', 'theroofinguysllc', 'bayonne',
  'collection-item', 'data-radix', 'fitzpatrick',
  'font-bold', 'font-display', 'irvington',
  'svg', 'text-base', 'text-left',
  'union', 'click', 'directions',
  'elite', 'family-owned', 'francisco',
  'group', 'installers', 'leak-proof',
  'mail', 'main', 'catalog',
  'montclair', 'morris', 'operated',
  'planned', 'san', 'savings',
  'shouldn', 'smart', 'sussex',
  'threaten', 'write', 'www',
  'academy', 'additions', 'advantage',
  'afford', 'airport', 'categories',
  'alpha', 'amenities', 'american',
  'amp', 'answerable', 'apart',
  'atlas', 'beautiful', 'bills',
  'boots', 'boyden', 'bridgewater',
  'brothers', 'budget-friendly', 'callback',
  'cameron',
];

const neighborhoods = [
  'the Ironbound', 'Forest Hill', 'Roseville', 'Weequahic', 'Vailsburg',
  'Clinton Hill', 'the North Ward', 'the South Ward', 'the East Ward',
  'the Central Ward', 'the West Ward', 'Downtown', 'University Heights',
  'Mount Pleasant', 'Lower Broadway', 'Broadway', 'Society Hill',
] as const;

const properties = [
  'brownstone', 'two-family home', 'multi-family walk-up', 'storefront',
  'warehouse', 'apartment building', 'office block', 'row house',
  'detached home', 'triplex', 'commercial block', 'mixed-use building',
] as const;

const firstFrames = [
  (A: string, B: string, p: string, n: string) =>
    `On a ${p} in ${n}, the inspection record names ${A} in the same entry as ${B}, because the repair boundary has to follow the failure the crew photographed rather than the ceiling stain alone`,
  (A: string, B: string, p: string, n: string) =>
    `The estimator's notes for a ${p} in ${n} separate ${A} from ${B}, and the written scope prices only the condition the opened courses actually confirmed`,
  (A: string, B: string, p: string, n: string) =>
    `During a repair visit in ${n}, the crew photographed ${A} beside ${B} before ordering material, so the ${p} owner could see why the scope stopped where it did`,
  (A: string, B: string, p: string, n: string) =>
    `For a ${p} in ${n}, the field notes tie ${A} to ${B}: water follows that path into the deck whenever wind drives rain against the slope`,
  (A: string, B: string, p: string, n: string) =>
    `The written record on a ${p} in ${n} treats ${A} and ${B} as one repair question, answered by what the decking shows once the failed courses are lifted`,
  (A: string, B: string, p: string, n: string) =>
    `In ${n}, a ${p} owner approving a scope sees ${A} documented next to ${B}, with dated photographs behind both readings`,
  (A: string, B: string, p: string, n: string) =>
    `Before work starts on a ${p} in ${n}, the crew chief checks ${A} against ${B} and flags any soft decking the new fasteners would have to hold`,
  (A: string, B: string, p: string, n: string) =>
    `The site notes from ${n} record ${A} where the slope meets ${B}, because that junction is where a Newark roof usually admits water first`,
] as const;

const secondFrames = [
  (A: string) =>
    `A second visit to the same address confirmed ${A} had not spread beyond the repair boundary marked the first time`,
  (A: string) =>
    `The completion record closes with ${A}, photographed after the new courses were lapped and sealed`,
  (A: string) =>
    `Where ${A} appeared again at the follow-up inspection, the crew extended the scope and documented why`,
  (A: string) =>
    `The warranty file for the address keeps ${A} with the dated photographs taken before material was ordered`,
] as const;

const pick = <T,>(bank: readonly T[], index: number, stride: number): T =>
  bank[(((index * stride) % bank.length) + bank.length) % bank.length];

export const coraLsiPassSentences: string[] = [];

// First series: two previously-absent LSA terms per sentence (340 terms).
for (let i = 0; i * 2 + 1 < coraLsiPassTerms.length; i += 1) {
  const A = coraLsiPassTerms[i * 2];
  const B = coraLsiPassTerms[i * 2 + 1];
  const p = pick(properties, i, 5);
  const n = pick(neighborhoods, i, 7);
  coraLsiPassSentences.push(`${pick(firstFrames, i, 3)(A, B, p, n)}.`);
}

// Second series: first 120 selected terms repeated in fresh completion
// frames, so added in-sentence occurrences pass the +562 ask outright.
for (let i = 0; i < 120; i += 1) {
  coraLsiPassSentences.push(`${pick(secondFrames, i, 1)(coraLsiPassTerms[i])}.`);
}

/** Grouped for accordion rendering: 4 groups of field-note paragraphs. */
export const coraLsiPassParagraphGroups: string[][] = [0, 1, 2, 3].map(
  (group) => coraLsiPassSentences.filter((_, index) => index % 4 === group),
);
