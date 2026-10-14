// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-roseland-nj (keyword "roof repair roseland nj").
// Work order: the CLEAN 9-line list in
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-roseland-2026-10-13.md
// as ruled in cora-artifact-verification-roseland-2026-10-13.md, plus
// the Paul-approved HTML Comment Tags gray-zone residue (+2, from the
// +3 ask). Everything here is consumed by
// CoraRoadmap261012Roseland.tsx, inside the existing collapsed
// supplemental block; the page H1 is untouched.

// ─── Phase 11: Variations in Style Tags (+24, adjusted from +67) ────
// Cora's factor (CP465d) is "number of matches in web page style
// tags". The +67 headline was set by one goal-setter's 284 KB of
// inline builder CSS; excluding it, the goal falls to the Shared
// Page-1 Average (24), corroborated in-set by another goal-setter at
// 23 — so 24 verbatim variation phrases for THIS run's phrase
// keyword are served, none of which appeared in the 2026-10-12 style
// block (verified against the prerendered page). The component stamps
// them into a second <style> element exactly the way the 2026-10-12
// pass served its style-tag line: slugified forms as CSS custom
// properties plus the verbatim phrases in the style comment. (The
// East Orange phrase pass used the same mechanism for its +24, with
// the same standing caveat: Cora tracked 0 style-tag matches there
// despite the earlier style block being present in served HTML — the
// rerun is the arbiter.)
export const coraRoselandPhraseStylePhrases: string[] = [
  "roseland nj roof repair company",
  "roseland nj roofer",
  "roseland roof repairs nj",
  "roseland roofer",
  "nj roof repair in roseland",
  "repair a roof roseland nj",
  "repair my roof roseland nj",
  "repair the roof roseland nj",
  "repaired roofs in roseland nj",
  "repairing a roof roseland nj",
  "repairing roofs in roseland nj",
  "repairs to roofs roseland nj",
  "roof fix in roseland nj",
  "roof fixed roseland nj",
  "roof fixes in roseland nj",
  "roof leak repairs roseland nj",
  "roof repair company in roseland nj",
  "roof repair contractor in roseland nj",
  "roof repair in roseland nj",
  "roof repair essex county nj",
  "roof repaired in roseland nj",
  "roof repairing in roseland nj",
  "roof repairs in roseland nj",
  "roofer roseland nj",
];

// ─── Phase 1: the six question headings (+6 / +6 / +1) ──────────────
// Number of Questions In Headings +6, Number of Questions In H3 Tags
// +6, Headings Has Question +1 — a corroborated pattern (the setter's
// six questions are real H3 FAQ headings; the field corroborates at
// 5-7), and genuinely owed: the live page serves ZERO questions in any
// heading tag, because the 2026-10-12 pass's questions live in the FAQ
// accordion's <summary> elements and the FAQPage JSON-LD, which these
// factors do not count. The six questions below are rendered as real
// <h3> elements, each ending in a question mark, each followed by the
// answer the estimator actually gives. Token coordination (the
// variation-presence lines ride on the same headings):
//   - exactly ONE question carries the verbatim 'roseland nj'
//     variation string (question 1) -> 'roseland nj' in H3 +1
//   - exactly ONE question carries the word 'roofing' (question 2)
//     -> 'roofing' in H3 +1
// The section's H2 lead-in carries 'roseland nj' and 'roofing' once
// each -> 'roseland nj' in H2 +1 and 'roofing' in H2 +1.
export const coraRoselandQuestionSectionHeading =
  'Roseland NJ Roofing Questions: What Homeowners Ask Us Before a Repair';

export const coraRoselandQuestionSectionIntro =
  'These are the questions Roseland homeowners ask most often when they call about a roof — the same six the estimator answers at the kitchen table, written down with the answers the crew actually gives.';

export const coraRoselandQuestions: { question: string; answer: string }[] = [
  {
    question: 'How much does roof repair cost in Roseland NJ?',
    answer:
      'It follows the detail that failed. A split pipe boot, a short run of lifted flashing, or a handful of wind-torn shingles is a small repair; rotted decking, a leaking chimney saddle, or a slope worn past its service life costs more, because more of the roof has to be opened and rebuilt. Every job here starts with a free inspection, and the price you sign is the written estimate from that visit — scope, materials, and warranty spelled out before any work begins.',
  },
  {
    question: 'What roofing materials hold up best on a Roseland home?',
    answer:
      'Most of the borough\u2019s colonials, capes, and split-levels wear architectural asphalt shingles, and a quality architectural shingle with proper underlayment and ventilation is the right answer for most of them. The older slate roofs get replacement slate matched to the original and copper flashing at the chimneys and valleys. Low-slope sections — porch roofs, additions, the flat stretches along the parkway side of town — get membrane, because shingles were never meant to shed water that slowly.',
  },
  {
    question: 'How do I know whether my roof needs a repair or a full replacement?',
    answer:
      'Look at how far the failure has spread. One failed detail on an otherwise sound roof — a cracked boot, a loose ridge cap, a single leaking valley — is a repair. Granule loss, curling, and soft decking across several slopes at once mean the system itself is at the end of its life, and patching it buys months, not years. The inspection photographs settle the question either way, and the written report shows you exactly what the crew saw before you decide.',
  },
  {
    question: 'Do you offer free inspections and written estimates before the work begins?',
    answer:
      'Yes. The inspection is free, and so is the written estimate that follows it — the scope of work, the materials by name, the warranty terms, and the price, all on paper. Nothing is started on a verbal go-ahead, and the estimate does not change because a job turned out harder than it looked; if the crew opens a slope and finds damage the inspection could not see, you get photographs and a written revision before that extra work is touched.',
  },
  {
    question: 'How quickly can a crew respond when a roof starts leaking during a storm?',
    answer:
      'Emergency calls go to the front of the schedule. When the weather allows safe ladder work, the first visit secures the opening — a tarp or a temporary board-and-membrane patch that keeps the water out — and the permanent repair is booked as soon as the roof surface is dry enough to work on. A ceiling stain that is actively dripping should never wait for a regular appointment slot; call it in as an emergency and say so.',
  },
  {
    question: 'Are you licensed and insured to work on homes in New Jersey?',
    answer:
      'Yes. Newark Quality Roofing is registered with the New Jersey Division of Consumer Affairs as a home improvement contractor and carries full insurance coverage, and the crew will show you the paperwork before you sign anything. The references section above links the state\u2019s own verification page, so you can check the registration yourself — the same check worth running on any contractor who knocks after a storm.',
  },
];
