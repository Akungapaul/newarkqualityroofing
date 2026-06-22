import Image from 'next/image';
import { ProseLead } from './ProseLead';
import { parseRichText } from '@/lib/rich-text';

interface ArticleBodyProps {
  /** Answer-first ≤40w lead to the question-form H1 (semantic ruleset R2). When
   *  present it renders as the copper-rail lead with `intro` as its supporting
   *  paragraph; when absent the article falls back to the plain intro. */
  directAnswer?: string;
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
  conclusion: string;
  sectionImage?: { src: string; alt: string };
}

export function ArticleBody({ directAnswer, intro, sections, conclusion, sectionImage }: ArticleBodyProps) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Answer-first lead (rewritten articles) or plain editorial intro (legacy) */}
      {directAnswer ? (
        <ProseLead paragraphs={[directAnswer, intro]} />
      ) : (
        <p className="font-body text-lg leading-relaxed text-text-primary">
          {parseRichText(intro)}
        </p>
      )}

      {/* Content sections */}
      {sections.map((section, index) => (
        <div key={index}>
          {/* Visual break between section 1 and section 2 */}
          {index === 1 && sectionImage && (
            <div className="mt-10 overflow-hidden rounded-lg">
              <Image
                src={sectionImage.src}
                alt={sectionImage.alt}
                width={960}
                height={411}
                className="photo-treatment aspect-[21/9] w-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-semibold leading-snug text-forest sm:text-[1.625rem]">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="font-body text-base leading-relaxed text-text-primary [&_strong]:font-semibold [&_strong]:text-forest"
                >
                  {parseRichText(paragraph)}
                </p>
              ))}
            </div>
          </section>
        </div>
      ))}

      {/* Conclusion */}
      <div className="mt-10 border-l-2 border-copper/30 pl-6">
        <p className="font-body text-base leading-relaxed text-text-secondary italic [&_strong]:font-semibold [&_strong]:text-forest">
          {parseRichText(conclusion)}
        </p>
      </div>
    </article>
  );
}
