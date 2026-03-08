interface ComparisonIntroProps {
  heading: string;
  paragraphs: string[];
}

export function ComparisonIntro({ heading, paragraphs }: ComparisonIntroProps) {
  return (
    <section aria-labelledby="comparison-intro-heading">
      <h2
        id="comparison-intro-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-primary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
