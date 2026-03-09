interface CityResidentialProps {
  heading: string;
  content: string[];
}

export function CityResidential({ heading, content }: CityResidentialProps) {
  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <h2 id="residential-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
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
    </div>
  );
}
