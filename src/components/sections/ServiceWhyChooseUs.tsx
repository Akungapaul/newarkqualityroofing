import { parseRichText } from '@/lib/rich-text';

interface ServiceWhyChooseUsProps {
  heading: string;
  reasons: { title: string; description: string }[];
}

/* Themed SVG icons keyed by pattern-matched reason titles.
   Falls back to a numbered circle for unrecognized reasons. */
const REASON_ICONS: { pattern: RegExp; icon: React.ReactNode }[] = [
  {
    pattern: /licens|certif/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    pattern: /year|experience/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    pattern: /pric|transparen|honest/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    pattern: /material|warranti|premium/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    pattern: /emergenc|same.day|24\/7|response/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    pattern: /family|communit|local|owned/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

function getIconForReason(title: string, index: number) {
  const match = REASON_ICONS.find((r) => r.pattern.test(title));
  if (match) return match.icon;
  return (
    <span className="font-heading text-xs font-bold" aria-hidden="true">
      {index + 1}
    </span>
  );
}

export function ServiceWhyChooseUs({ heading, reasons }: ServiceWhyChooseUsProps) {
  return (
    <section aria-labelledby="service-why-heading">
      <h2
        id="service-why-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="rounded-sm border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                {getIconForReason(reason.title, index)}
              </span>
              <div>
                <h4 className="font-heading text-base font-bold text-forest">
                  {reason.title}
                </h4>
                <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                  {parseRichText(reason.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
