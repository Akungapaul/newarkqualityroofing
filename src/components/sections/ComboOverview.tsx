import { renderParagraphWithLinks } from '@/lib/render-inline-links';

interface ComboOverviewProps {
  paragraphs: string[];
}

export function ComboOverview({ paragraphs }: ComboOverviewProps) {
  return (
    <section aria-labelledby="combo-overview-heading">
      <h2
        id="combo-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Overview
      </h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className={`rounded-sm border-l-4 border-copper/60 p-4 ${
              index % 2 === 0 ? 'bg-parchment' : 'bg-white'
            }`}
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
