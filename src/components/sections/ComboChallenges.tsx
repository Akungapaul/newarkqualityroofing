import Image from 'next/image';
import { renderParagraphWithLinks } from '@/lib/render-inline-links';
import { getSectionImages } from '@/data/image-manifest';

interface ComboChallengesProps {
  paragraphs: string[];
  cityName: string;
}

export function ComboChallenges({ paragraphs, cityName }: ComboChallengesProps) {
  const challengeImages = getSectionImages('section-challenges');

  return (
    <section aria-labelledby="combo-challenges-heading">
      <h2
        id="combo-challenges-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Local Challenges in {cityName}
      </h2>

      {/* Challenge images grid */}
      {challengeImages.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {challengeImages.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-sm">
              <Image
                src={img.path}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

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
