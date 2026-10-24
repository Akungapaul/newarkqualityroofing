// Roof Repair Newark NJ restructure (Cora run 261014, 2026-10-23).
//
// NEWARK_REPAIR_FAQS: the six questions of the blueprint's FAQ section.
// They render on the page as six collapsed <details> accordions (question
// H3 in the <summary>) and are also appended to the page's FAQPage JSON-LD
// in ServiceTemplate, extending the schema that was already there rather
// than replacing it.
//
// NEWARK_REPAIR_SUPPLEMENTAL: REMOVED 2026-10-24 by the POP pass (report
// 1982649, Paul's direction). POP's direction on this page is a reduction
// pass and supersedes the Cora-built mass here: the supplemental accordion
// came out entirely, and the few POP add-terms it carried were redistributed
// into the visible copy of LeanRoofRepairNewark.

export interface RestructureFaq {
  question: string;
  answer: string;
}

// POP pass 2026-10-24 (report 1982649): questions and answers rewritten to
// POP's heading and main-content term ranges (no 'roof repair' / 'roof
// leak' / 'emergency roof' phrases in the questions, shorter answers). The
// FAQPage schema in ServiceTemplate follows this array, as before.
export const NEWARK_REPAIR_FAQS: RestructureFaq[] = [
  {
    question: 'How much does a repair cost in Newark?',
    answer:
      'Most focused repairs run $350 to $1,500. The price depends on access to the failed detail, how much flashing must be rebuilt, and the condition of the deck underneath, and it is fixed in a written scope before work begins.',
  },
  {
    question: 'Can a leak be repaired, or does the roof need replacing?',
    answer:
      'Usually, yes. A leak that traces to one failed detail (a pipe boot, a flashing joint, an open seam) is a repair. Replacement enters the conversation only when failures are spread across the whole field or the deck has gone soft in several places.',
  },
  {
    question: 'Do you repair both flat and shingled roofs?',
    answer:
      'Yes. Roofing Newark properties means both systems: asphalt shingle systems on pitched roofs and EPDM, TPO, and built-up membranes on low-slope roofs, and many Newark properties carry both on the same structure.',
  },
  {
    question: 'Can you handle emergency repairs after a storm?',
    answer:
      'Yes. We tarp the opening, photograph everything for your insurer, and price the permanent repair in writing once the roof is dry and safe to work.',
  },
  {
    question: 'What warranty do you offer on repairs?',
    answer:
      'Every repair carries a written workmanship warranty stated in the scope, and the manufacturer material warranty applies to the products installed. Both are filed with your photo record at the end of the job.',
  },
  {
    question: 'Does homeowners insurance cover storm damage?',
    answer:
      'Often, when the damage came from a covered event like wind. We document the failed detail and the resulting damage with dated photographs and a written scope, the same evidence an adjuster needs to open the claim.',
  },
];
