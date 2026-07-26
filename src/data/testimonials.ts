// ─── Customer testimonials (homepage social proof) ───────────────────────────
//
// Real NQR customer reviews, confirmed by the owner for publication (2026-07).
// Rendered as visible content by Testimonials.tsx. Deliberately NOT emitted as
// Review/AggregateRating JSON-LD: Google discourages self-serving review markup
// on a business's own site, and it risks a structured-data manual action.

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'After a nor’easter tore shingles off three sides of our house, Newark Quality Roofing had a tarp up the same afternoon and a full replacement plan within 48 hours. The insurance documentation they provided got our claim approved without a single dispute. New architectural shingles installed in two days.',
    attribution: 'Homeowner, Weequahic',
  },
  {
    quote:
      'We manage six multi-family properties in the Ironbound. Flat roof leaks were costing us thousands in tenant complaints and interior damage every year. They replaced all six roofs with TPO membrane systems over three months — on schedule, on budget, with zero tenant displacement.',
    attribution: 'Property Manager, Ironbound District',
  },
  {
    quote:
      'Our 1902 Victorian in Forest Hill needed a complete slate roof restoration. They sourced matching slate, installed new copper flashing and period-appropriate ridge caps, and coordinated everything with the preservation requirements. The roof looks exactly as it should — and it will last another century.',
    attribution: 'Homeowner, Forest Hill',
  },
];
