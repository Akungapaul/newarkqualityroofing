interface ServiceAudienceProps {
  variant: 'residential' | 'commercial';
  heading: string;
  content: string[];
  ctaLabel: string;
}

export function ServiceAudience({
  variant,
  heading,
  content,
  ctaLabel,
}: ServiceAudienceProps) {
  const isCommercial = variant === 'commercial';
  const accentColor = isCommercial ? 'copper' : 'forest';
  const borderClass = isCommercial
    ? 'border-l-4 border-copper pl-6'
    : 'border-l-4 border-forest pl-6';

  return (
    <section aria-labelledby={`service-${variant}-heading`}>
      <div className={borderClass}>
        <h2
          id={`service-${variant}-heading`}
          className={`font-heading text-2xl font-bold sm:text-3xl ${
            isCommercial ? 'text-copper-dark' : 'text-forest'
          }`}
        >
          {heading}
        </h2>
        <div className="mt-4 space-y-4">
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <a
          href="#lead-form"
          className={`mt-6 inline-block rounded-lg px-6 py-3 font-heading text-base font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none ${
            isCommercial
              ? 'bg-copper text-text-on-copper hover:bg-copper-dark focus-visible:ring-copper-light'
              : 'bg-forest text-text-on-dark hover:bg-forest-dark focus-visible:ring-forest-light'
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
