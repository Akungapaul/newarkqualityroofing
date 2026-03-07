interface CityOverviewProps {
  paragraphs: string[];
  cityName: string;
  weatherChallenges: {
    heading: string;
    content: string[];
  };
}

export function CityOverview({
  paragraphs,
  cityName,
  weatherChallenges,
}: CityOverviewProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
          Roofing in {cityName}: Local Expertise You Can Trust
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
      </div>

      <div>
        <h3 className="font-heading text-xl font-bold text-forest sm:text-2xl">
          {weatherChallenges.heading}
        </h3>
        <div className="mt-3 space-y-3">
          {weatherChallenges.content.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
