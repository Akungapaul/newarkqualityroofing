interface ServiceApproachProps {
  heading: string;
  content: string[];
}

export function ServiceApproach({ heading, content }: ServiceApproachProps) {
  return (
    <section aria-labelledby="service-approach-heading">
      <h2
        id="service-approach-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
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
    </section>
  );
}
