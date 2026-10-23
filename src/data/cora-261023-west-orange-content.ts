// CORA 261023 rerun (M3, 2026-10-23) data for the WEST ORANGE roof
// REPLACEMENT page ("roof replacement west orange nj") — the
// reoptimization pass over the 10 implementable-open lines the
// rerun left after the 261022 implementation (PR #63) was credited
// on 18 of its 19 built lines. Title / meta exports keep the SAME
// names as the 261022 file so page.tsx only changes its import
// source. The meta description and meta keywords are byte-identical
// to the 261022 exports (no roadmap line asks for a meta change;
// the Phase 6 summary lines are SERP-measured and carried). The
// title gains exactly ONE 'Roof Repair, ' insertion (roadmap line:
// Variation 'roof repair' in Title Tag, Add 1; tracked 0, goal 1).
// The Rule 7 lead "Roof Replacement West Orange, NJ" is untouched
// and the '| West Orange NJ' segment (261022 line 2, credited
// closed in 261023) is preserved character for character.

export const coraReplWestOrangeTitle =
  'Roof Replacement West Orange, NJ \u2014 Roofing Company for Roof Repair, Roof Replacement & New Roof Installation in West Orange, New Jersey | GAF Timberline, Slate & Copper | West Orange NJ | Newark Quality Roofing';

export const coraReplWestOrangeMetaDescription =
  'Roof replacement in West Orange, NJ by a roofing company that starts at the deck: tear-off and full roof replacement in asphalt shingles, slate, copper, and EPDM membrane for West Orange homes across Essex County, New Jersey \u2014 free written estimates from Newark Quality Roofing.';

export const coraReplWestOrangeMetaKeywords = [
  'roof replacement west orange nj',
  'roof replacement west orange',
  'roofing company west orange nj',
  'roof replacement',
  'roofing contractor west orange',
  'new roof west orange nj',
  'roof replacement cost west orange nj',
  'slate roof replacement west orange',
  'essex county roofing contractor',
];

// The site's REAL service-area inventory for the JSON-LD
// areaServed build (roadmap line: Number Of JSON-LD Areas Served,
// tracked 8, goal 225, Add 217): the 21 municipalities defined in
// src/data/cities.ts — every town this site publishes service
// pages for — each in Essex County, New Jersey (the cities data
// carries county 'Essex' uniformly). Rendered in the 261023
// component as City objects named "Town, NJ" with a
// containedInPlace AdministrativeArea of Essex County, NJ, plus
// the county itself and the State of New Jersey as closing
// entries: 23 distinct areaServed entries. No duplicates, no
// invented places: where the honest distinct inventory lands
// against Cora's occurrence model is reported plainly in the
// implementation report (study §4); Paul's rerun arbitrates.
export const cora261023WoTowns: string[] = [
  'Newark',
  'East Orange',
  'Orange',
  'West Orange',
  'Montclair',
  'Bloomfield',
  'Belleville',
  'Nutley',
  'Irvington',
  'Maplewood',
  'South Orange',
  'Livingston',
  'Millburn',
  'Cedar Grove',
  'Verona',
  'Glen Ridge',
  'Caldwell',
  'Essex Fells',
  'Fairfield',
  'North Caldwell',
  'Roseland',
];

// Button labels for the Phase 11 Button Tags line (CPXR011:
// Variations in Button Tags, tracked 2, goal 17, Add 15). Each
// label is one keyword-variation form taken verbatim from the
// 261023 run's own keyword/variation inventory, rendered as the
// inner text of one real <button type="button"> element in the
// 261023 block's service index. 18 buttons = +18 candidate
// variation matches against the +15 ask (margin per house
// practice; Cora's rerun arbitrates the credited count).
export const cora261023WoButtons: string[] = [
  'Roof Replacement West Orange NJ',
  'Roof Repair West Orange NJ',
  'Roof Replacement Cost West Orange NJ',
  'Roof Replacement Company West Orange NJ',
  'Roof Replacement Contractor West Orange NJ',
  'Roof Replacement Services West Orange NJ',
  'Roof Replacement Companies West Orange NJ',
  'Best Roof Replacement West Orange NJ',
  'Affordable Roof Replacement West Orange NJ',
  'Cheap Roof Replacement West Orange NJ',
  'Shingle Replacement West Orange NJ',
  'Roof Replacement Estimate',
  'Roof Replacement Quote',
  'Roof Replacement Installation',
  'Roofing Replacement West Orange NJ',
  'Roof Replacement Near West Orange NJ',
  'Roof Replacement in West Orange NJ',
  'West Orange Roof Replacement',
];
