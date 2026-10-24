// Roof Repair Newark NJ restructure (Cora run 261014, 2026-10-23).
//
// NEWARK_REPAIR_FAQS: the six questions of the blueprint's FAQ section.
// They render on the page as six collapsed <details> accordions (question
// H3 in the <summary>) and are also appended to the page's FAQPage JSON-LD
// in ServiceTemplate, extending the schema that was already there rather
// than replacing it.
//
// NEWARK_REPAIR_SUPPLEMENTAL: the collapsed supplemental accordion Paul
// directed on 2026-10-23 ("anything implementable that does not fit
// naturally in the visible copy goes in a collapsed supplemental accordion
// as supplemental content, built to goal"). Real sentences built from run
// 261014's own inventories: the Keywords sheet's grammatical variation
// forms, the Entities sheet's deficit entities, and the report HTML's
// LSA (lsa1-lsa4) deficit terms. Copy uses only facts the site already
// asserts. The LSI000/LSI002 constant pair is NOT built against (Cora
// export constants, classified measurement-artifact exceptions).

export interface RestructureFaq {
  question: string;
  answer: string;
}

export const NEWARK_REPAIR_FAQS: RestructureFaq[] = [
  {
    question: 'How much does roof repair cost in Newark?',
    answer:
      'Most repairs run $350 to $1,500, depending on the failed component, the materials, roof access, and what the inspection finds. Your free written estimate fixes the price for your roof before any work begins, and there is no obligation to proceed with the repair after you receive it.',
  },
  {
    question: 'Can a roof leak be repaired, or does the roof need replacing?',
    answer:
      'Most leaks are repairable, because most leaks start at one failed detail: flashing, a pipe boot, a valley, or a section of damaged shingles. Replacement becomes the honest answer when the shingle field itself is worn out across the whole roof. The inspection tells us which case yours is, and the written scope explains the reasoning either way.',
  },
  {
    question: 'Do you repair both flat and shingle roofs in Newark?',
    answer:
      "Yes. Our crews repair asphalt shingle roofs and the flat and low-slope systems common on Newark homes and businesses, including EPDM, TPO, and modified bitumen. Each material is repaired to its manufacturer's specification, with seams and patches bonded using the approved system for that membrane.",
  },
  {
    question: 'Can you handle emergency roof repairs in Newark?',
    answer:
      'Yes. When a storm opens a roof or a leak turns active, emergency tarping comes first so water entry stops, and emergency repairs secure the damaged area until the permanent repair is scoped. The permanent work is then inspected, priced in a written estimate, and scheduled as soon as the roof is dry enough to bond.',
  },
  {
    question: 'What warranty do you offer on roof repairs in Newark?',
    answer:
      "Every repair carries a written workmanship warranty covering the labor on the detail we repaired. The warranty is issued with the before-and-after photographs and the final scope at the end of the job. Manufacturer material warranties on the products installed stay in force alongside it, because the repair is installed to the manufacturer's specification.",
  },
  {
    question: 'Does homeowners insurance cover roof damage in Newark?',
    answer:
      'Coverage depends on your policy and on what caused the damage, and we cannot promise what an insurer will pay. What we can do is document the damage properly: timestamped photographs and a written scope are part of every storm repair, and that record is what a homeowner sends the insurer to support a claim.',
  },
];

export const NEWARK_REPAIR_SUPPLEMENTAL: { heading: string; body: string }[] = [
  {
    heading: 'Leak diagnosis notes',
    body: 'Homeowners trying to find roof repair in Newark usually start with a stain, a drip, or a bucket on the floor. Our field notes from Newark roof repair jobs show the same pattern season after season: the entry point is a flashing detail, a pipe boot, a valley, or a seam, and the stain shows somewhere else entirely. That is why a roof leak repair begins with tracing, not patching. The expertise is in the tracing: following the water path across the deck and the attic framing until the failed component is found, then writing the repair against that component.',
  },
  {
    heading: 'Flashing repair notes',
    body: 'Flashing repair is the most common line in our Newark work because flashing guards every transition on the roof: chimneys, walls, skylights, valleys, and vents. Step flashing and counter-flashing corrode, lift, and lose their seal in sequence, and each failure lets water behind the shingle field. A correct flashing repair rebuilds the metal detail with the right lap and seal, matched to the existing roof, instead of coating the joint and hoping. Roofers who skip the rebuild are the reason the same chimney leaks twice.',
  },
  {
    heading: 'Flat roof repair notes',
    body: 'A flat roof in Newark is rarely flat: it is a low-slope system in EPDM, TPO, or modified bitumen, and it fails where water stands. Flat roof repair means finding the seam, puncture, or ponding area that opened, then bonding a patch with the system the manufacturer approves for that membrane. Commercial roof sections on Newark stores and apartment buildings get the same treatment as the flat roof over a rear extension on a house: inspection, written scope, bonded repair, verification.',
  },
  {
    heading: 'Scope notes',
    body: 'Roof repair services in Newark cover more ground than a single leak call. In one week a crew may complete a shingle roof repair in Forest Hill, a roof leak repair in the Ironbound, flat roof repair on a Downtown storefront, and storm damage roof repair in Vailsburg. Each of those roof repair services is scoped separately, priced in the same written format, and verified the same way, so a homeowner comparing a roof repair company can compare scopes line by line instead of comparing promises.',
  },
  {
    heading: 'Roof repair costs notes',
    body: 'Roof repair costs in Newark follow the failed component, not the size of the stain. A roof repair cost for a lifted shingle course is small; a chimney flashing rebuild with decking replaced under it is not. Homeowners who ask for a roof repair estimate before an inspection are asking for a guess, and guesses are how small repairs turn into disputes. Our answer is a no obligation inspection: we look, we photograph, we write the scope, and the roof repair costs are fixed in writing before work begins.',
  },
  {
    heading: 'Storm work notes',
    body: "Storm damage in Essex County arrives as wind first and water second: lifted shingles, torn flashing, branches through the deck. Emergency roof repair after a storm means tarping and sealing so the interior stays dry, then a documented permanent repair once the roof can bond. Photographs taken the day of the storm, with the written scope, are what an insurer works from, and they are part of every storm file we close. Homeowners dealing with water damage should ask any roofer for that photo record before signing anything.",
  },
  {
    heading: 'Shingle work notes',
    body: "A shingle roof ages from the surface down: granules shed, tabs curl, fasteners back out, and the field loses its seal a course at a time. Shingle repair replaces the damaged courses with matching material set to the manufacturer's fastener pattern, and it includes a check of the courses around the repair, because shingles that share a slope usually share an age. When the whole field is worn, we write that down too. Expert roof repair includes knowing when a repair is no longer the right spend.",
  },
  {
    heading: 'Choosing a contractor notes',
    body: "Newark homeowners have no shortage of roofing contractors, roofers, and handymen offering roof repair. The differences show in the paperwork. A roof repair contractor who inspects first, writes the scope, photographs the work, and warrants the labor in writing gives the homeowner something to hold. Roof repair Newark homeowners can verify is the only kind we sell: the failed component named, the specification written, the photographs delivered, the warranty signed.",
  },
  {
    heading: 'Housing stock notes',
    body: "Newark roof repair is shaped by the buildings: brownstones and row houses with shared party walls, triple-deckers with flat rear roofs, and older homes in the Forest Hill historic district where slate and tile still cover some of the finest roofs in the city. Each stock type fails differently, and the repair has to match the building. A detail that works on a shingle roof in Weequahic is wrong on a slate roof in Forest Hill, and a roofer who treats them the same is guessing with somebody's ceiling.",
  },
  {
    heading: 'Verification notes',
    body: "Every roof repair on this page ends the same way: a lead walks the repair, checks the detail, sweeps for nails, and closes the file with before-and-after photographs, field notes, and the written workmanship warranty. That record is the homeowner's proof for an insurer, a home inspector, or a future buyer, and it is our proof that the repair was built to specification. Roof repairs that cannot be verified should not be paid for, and we do not ask anyone to pay for one.",
  },
];
