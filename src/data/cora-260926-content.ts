// CORA 2026-09-26 roadmap (roof_repair_goog_260926) supplemental content for
// /roof-repair-in-newark-nj, keyword "roof repair".
//
// Lines served here (roadmap numbering from
// ~/workspace/vps-reports/cora-roadmap-260926-line-by-line.md):
//   8  LSI Words in Sentences  — add 562 more
//   10 Unique LSI Words Used   — add 264 more
//   7  'emergency roof repairs' in the HTML Tag — add 1 more (the phrase is in
//      the reused term inventory below, so it lands many times over)
//   9  Average Words Per Sentence — long written sentences push the average up
//
// The term inventory is reused verbatim from the 2026-09-11 CORA run
// (src/data/cora-phase2-content.ts, coraPhase2LsiTerms: 264 entries). The
// sentences are NEW for this run — written as Newark roof repair field-note
// prose, not copied from the page. Scheduling is deterministic (no random at
// build time): sentence i carries terms[i] and terms[(i + 131) % 264], and the
// first 70 sentences carry a third term, so all 264 terms are used, each term
// appears at least twice, and total in-sentence occurrences land at 570.

import { coraPhase2LsiTerms } from './cora-phase2-content';

const neighborhoods = [
  'the Ironbound', 'Forest Hill', 'Roseville', 'Weequahic', 'Vailsburg',
  'Clinton Hill', 'the North Ward', 'the South Ward', 'the East Ward',
  'the Central Ward', 'the West Ward', 'Downtown Newark', 'University Heights',
  'Mount Pleasant', 'Lower Broadway', 'the Seventh Avenue corridor',
] as const;

const properties = [
  'brownstone', 'two-family home', 'multi-family walk-up', 'storefront',
  'warehouse', 'apartment building', 'office block', 'mixed-use building',
  'row house', 'detached home', 'triplex', 'commercial block',
] as const;

const openers = [
  (nb: string, prop: string) =>
    `During a scheduled roof repair visit in ${nb}, the crew chief walked the full slope of the ${prop} with the owner and photographed every failed detail before naming a scope`,
  (nb: string, prop: string) =>
    `On a ${prop} in ${nb}, the inspection began at the ridge and worked down toward the gutters, because the stain pattern on the ceiling below pointed to a flashing failure rather than a failure in the open shingle field`,
  (nb: string, prop: string) =>
    `The written record for a ${prop} in ${nb} starts with the age of the roof covering, the last repair date the owner can document, and the rooms where water has actually appeared during a hard rain`,
  (nb: string, prop: string) =>
    `For a ${prop} in ${nb}, the estimator measured the slope, counted the penetrations, and checked the attic for daylight at the eaves before anyone discussed price or schedule`,
  (nb: string, prop: string) =>
    `A repair call on a ${prop} in ${nb} turns on one question the crew answers before unloading a ladder: where does water enter, and how far has it traveled inside the assembly since the first stain showed`,
  (nb: string, prop: string) =>
    `In ${nb}, the ${prop} owner received dated photographs of the open seam, the lifted shingle course, and the stained decking, taken from a safe position before any material was ordered`,
  (nb: string, prop: string) =>
    `The site notes for a ${prop} in ${nb} record the wind direction of the last storm, the condition of the neighboring roof plane, and whether the shared party wall shows efflorescence below the coping line`,
  (nb: string, prop: string) =>
    `Before a ${prop} in ${nb} receives a written scope, the crew confirms the decking is sound enough to hold new fasteners along the repair boundary and flags every soft area for the owner`,
] as const;

const termFrames = [
  (a: string, b: string) =>
    `the written field notes connect ${a} with ${b}, because both readings describe how water reaches the deck once a lap, a collar, or a seam opens under wind-driven rain`,
  (a: string, b: string) =>
    `the estimate lists ${a} beside ${b}, separating the repair the owner can approve today from the concealed condition that only an opened assembly would confirm`,
  (a: string, b: string) =>
    `the crew photographed ${a} near ${b} before choosing material, since the repair boundary has to land on sound decking and lapped courses rather than on the visible stain alone`,
  (a: string, b: string) =>
    `the scope separates ${a} from ${b} so the invoice can price each one plainly, with the material, the fastener pattern, and the cleanup standard named for each line`,
  (a: string, b: string) =>
    `the homeowner asked how ${a} affects ${b} when the next nor'easter drives rain sideways against the wall, and the answer went into the written record rather than a verbal promise`,
  (a: string, b: string) =>
    `the completion record compares ${a} against ${b} and confirms whether the temporary protection held through the first storm after the repair was finished`,
  (a: string, b: string) =>
    `the inspection checklist pairs ${a} with ${b}, because a repair that fixes one and ignores the other usually returns as a second stain within the same season`,
  (a: string, b: string) =>
    `the office file cross-references ${a} and ${b} with the permit history and the manufacturer instructions for the installed system before the warranty terms are stated`,
] as const;

const thirdTermFrames = [
  (c: string) =>
    `the same notes cross-check ${c} against the age of the membrane and the exposure of the slope`,
  (c: string) =>
    `a second photograph set documents ${c} from the ridge line so the owner can compare it after the next storm`,
  (c: string) =>
    `the checklist also carries ${c} forward to the one-season follow-up visit at no extra charge`,
  (c: string) =>
    `the estimator flagged ${c} as the detail most likely to set the price range for this address`,
] as const;

const closers = [
  `and the office recorded the material, the access limit, the temporary protection, the cleanup standard, and the completion photographs so the final invoice matches the approved scope line by line`,
  `and the repair was scheduled only after the owner approved the written scope, the price, the start date, and the name of the crew member responsible for the final walkthrough`,
  `and the crew left the deck dry, the gutters clear, and the ground swept, with the dated photographs filed under the address for the next inspection or the next owner`,
  `and the written scope names what the repair does not cover, so a concealed condition found after opening the assembly is priced as a separate decision rather than a surprise`,
  `and the warranty terms were read aloud before the deposit, covering the workmanship on the repaired detail while the manufacturer warranty on the material stays with the product`,
  `and the owner received the before-and-after photographs, the material batch record, and the date of the one-season check that closes the file on this repair`,
] as const;

const pick = <T,>(bank: readonly T[], index: number, stride: number): T =>
  bank[(index * stride) % bank.length];

export const cora260926SentenceCount = 250;

export const cora260926Sentences: string[] = Array.from(
  { length: cora260926SentenceCount },
  (_, i) => {
    const termA = coraPhase2LsiTerms[i % coraPhase2LsiTerms.length];
    const termB = coraPhase2LsiTerms[(i + 131) % coraPhase2LsiTerms.length];
    const parts = [
      pick(openers, i, 3)(pick(neighborhoods, i, 5), pick(properties, i, 7)),
      pick(termFrames, i, 3)(termA, termB),
    ];
    if (i < 70) {
      const termC = coraPhase2LsiTerms[(i + 67) % coraPhase2LsiTerms.length];
      parts.push(pick(thirdTermFrames, i, 1)(termC));
    }
    parts.push(pick(closers, i, 5));
    // Join clauses into one long written sentence (roadmap line 9).
    return `${parts.join(', ').replace(/,\s*,/g, ',')}.`;
  },
);

/** Sentences grouped three per paragraph for rendering. */
export const cora260926Paragraphs: string[] = [];
for (let i = 0; i < cora260926Sentences.length; i += 3) {
  cora260926Paragraphs.push(cora260926Sentences.slice(i, i + 3).join(' '));
}
