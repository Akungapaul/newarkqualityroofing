import { Fragment } from 'react';

interface CityStatsBarProps {
  cityName: string;
}

/**
 * Verifiable, non-fabricated trust band. The previous version rendered a
 * fabricated project count, star rating, and "serving since" year (none source
 * verified) that escaped the semantic gate. Replaced with defensible facts that
 * hold for every city — no invented numbers.
 */
export function CityStatsBar({ cityName }: CityStatsBarProps) {
  const facts = [
    'Licensed & Insured',
    'Free Roof Inspections & Estimates',
    `Serving ${cityName} & All of Essex County`,
  ];

  return (
    <section
      className="border-y border-border bg-parchment-dark"
      aria-label={`${cityName} roofing service highlights`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-6 py-6 sm:flex-row sm:gap-10 lg:gap-16 lg:px-8">
        {facts.map((fact, index) => (
          <Fragment key={fact}>
            {index > 0 && (
              <div
                className="hidden h-8 w-px bg-copper/30 sm:block"
                aria-hidden="true"
              />
            )}
            <div className="flex items-center gap-2.5">
              <svg
                className="h-5 w-5 shrink-0 text-copper"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-heading text-base font-semibold text-forest sm:text-lg">
                {fact}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
