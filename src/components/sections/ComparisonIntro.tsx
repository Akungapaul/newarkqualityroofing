import { ProseLead } from './ProseLead';

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
      <div className="mt-6">
        <ProseLead paragraphs={paragraphs} />
      </div>
    </section>
  );
}
