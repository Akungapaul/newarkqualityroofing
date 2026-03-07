import { renderParagraphWithLinks } from '@/lib/render-inline-links';

interface ComboChallengesProps {
  paragraphs: string[];
  cityName: string;
}

export function ComboChallenges({ paragraphs, cityName }: ComboChallengesProps) {
  return (
    <section aria-labelledby="combo-challenges-heading">
      <h2
        id="combo-challenges-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Local Challenges in {cityName}
      </h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className="rounded-sm bg-forest/[0.03] p-4"
          >
            <p className="font-body text-base leading-relaxed text-text-secondary">
              {renderParagraphWithLinks(paragraph)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
