interface ServiceOverviewProps {
  paragraphs: string[];
}

export function ServiceOverview({ paragraphs }: ServiceOverviewProps) {
  return (
    <section aria-labelledby="service-overview-heading">
      <h2
        id="service-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Overview
      </h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
