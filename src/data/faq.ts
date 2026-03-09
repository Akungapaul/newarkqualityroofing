export interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How much does a roof replacement cost in NJ?',
    answer:
      'A typical residential replacement in the Newark area ranges from $8,500 to $25,000 depending on size, materials, and complexity. We provide free, no-obligation estimates so you know exactly what to expect.',
    linkText: 'See full replacement pricing',
    linkHref: '/roof-replacement-cost',
  },
  {
    question: 'Do you help with insurance claims for storm damage?',
    answer:
      'Yes. We work directly with your insurance company throughout the claims process — documenting damage, providing detailed estimates in approved formats, and meeting with your adjuster on-site.',
    linkText: 'Learn about storm damage help',
    linkHref: '/storm-damage-roof-repair',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements are completed in 1 to 3 days depending on size and weather. Larger commercial roofing projects may take longer. We provide a clear timeline before starting.',
    linkText: 'Explore replacement options',
    linkHref: '/roof-replacement',
  },
  {
    question: 'Do you offer emergency roof repair services?',
    answer:
      'Yes — we offer 24/7 emergency help throughout Essex County. Storm damage, sudden leaks, or fallen trees — our crew responds quickly to secure your property.',
    linkText: 'Emergency help details',
    linkHref: '/emergency-roof-repair',
  },
  {
    question: 'What warranty do you offer on roofing work?',
    answer:
      'We provide a workmanship warranty of up to 25 years, plus the manufacturer warranty on materials (typically 25 to 50 years). We walk you through all warranty details before your project begins.',
    linkText: 'View our credentials',
    linkHref: '/about',
  },
  {
    question: 'How do I know if I need a repair or a full replacement?',
    answer:
      'Signs you may need a roof replacement include curling, cracking, or missing shingles, visible sagging, persistent leaks, and a roof over 20 years old. Our free roofing inspection gives you an honest assessment.',
    linkText: 'Schedule a free inspection',
    linkHref: '/roof-inspection',
  },
  {
    question: 'What is the difference between residential and commercial roofing?',
    answer:
      'Commercial roofing structures are typically flat or low-slope using TPO, EPDM, or modified bitumen, while residential roofs are steeper and use asphalt shingles, slate, or metal. Our roofing team handles both.',
    linkText: 'Compare residential and commercial',
    linkHref: '/commercial-roof-installation',
  },
  {
    question: 'Is the estimate really free?',
    answer:
      'Every roofing estimate is completely free with no obligation. We inspect your roof, discuss your options, and provide a detailed written estimate — no pressure to commit.',
    linkText: 'Request your free estimate',
    linkHref: '/contact',
  },
  {
    question: 'What is the 25% rule in roofing?',
    answer:
      'If more than 25% of the roof is damaged, most building codes and insurance policies require a full roof replacement rather than a partial repair. Our roofing team can inspect and explain which option applies.',
    linkText: 'Learn about the 25% rule',
    linkHref: '/roof-replacement',
  },
  {
    question: 'Is it cheaper to repair or replace a roof?',
    answer:
      'Roof repair costs $350 to $1,500, while full roof replacement ranges from $8,500 to $25,000. If the roof is over 20 years old or has widespread damage, replacement is often more cost-effective long-term. We provide a free roofing inspection and honest recommendation.',
    linkText: 'Compare costs',
    linkHref: '/roof-replacement-cost',
  },
  {
    question: 'What time of year is the cheapest to replace a roof?',
    answer:
      'Late fall and winter are typically the most affordable times for a roof replacement in Newark. Demand for roofing services drops in colder months, meaning shorter wait times and potential savings. Our roofing crews work year-round.',
    linkText: 'Get a seasonal quote',
    linkHref: '/roof-replacement',
  },
];
