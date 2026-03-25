interface ComboWhyChooseUsProps {
  reasons: string[];
  serviceName: string;
  cityName: string;
}

/**
 * Renders a contextual "Why Choose Us" section.
 * Combines the service-specific first reason with localized trust signals.
 * The first reason is always service+city specific; the remaining reasons
 * blend company credentials with local relevance.
 */
export function ComboWhyChooseUs({ reasons, serviceName, cityName }: ComboWhyChooseUsProps) {
  // Build contextual reasons that reference both the service and city
  const contextualReasons = buildContextualReasons(serviceName, cityName, reasons);

  return (
    <section aria-labelledby="combo-why-heading">
      <h2
        id="combo-why-heading"
        className="font-heading text-xl font-bold text-forest sm:text-2xl"
      >
        Why Choose Us for {serviceName} in {cityName}
      </h2>
      <ul className="mt-4 space-y-3">
        {contextualReasons.map((reason, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-sm border-l-4 border-copper/50 bg-white p-3 shadow-sm"
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-copper"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-body text-sm leading-relaxed text-text-secondary">
              {reason}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Build reasons that are specific to the service and city combination.
 * Replaces the generic boilerplate with contextual trust signals.
 */
function buildContextualReasons(
  serviceName: string,
  cityName: string,
  _originalReasons: string[],
): string[] {
  const serviceLC = serviceName.toLowerCase();

  return [
    `Specialized ${serviceLC} experience in ${cityName} — we know the local building stock, codes, and common issues specific to ${cityName} homes and businesses.`,
    `NJ licensed and GAF Certified with 15+ years of ${serviceLC} projects across Essex County.`,
    `Transparent, written estimates for every ${serviceLC} project — no hidden fees and no pressure to commit.`,
    `Local ${cityName} crew providing same-day estimates and 24/7 emergency response when you need us most.`,
  ];
}
