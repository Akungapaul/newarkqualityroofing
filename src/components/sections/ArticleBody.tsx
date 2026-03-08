interface ArticleBodyProps {
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
  conclusion: string;
}

export function ArticleBody({ intro, sections, conclusion }: ArticleBodyProps) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Intro paragraph -- slightly larger for editorial emphasis */}
      <p className="font-body text-lg leading-relaxed text-text-primary">
        {intro}
      </p>

      {/* Content sections */}
      {sections.map((section, index) => (
        <section key={index} className="mt-10">
          <h2 className="font-heading text-2xl font-semibold leading-snug text-forest sm:text-[1.625rem]">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.body.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="font-body text-base leading-relaxed text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Conclusion */}
      <div className="mt-10 border-l-2 border-copper/30 pl-6">
        <p className="font-body text-base leading-relaxed text-text-secondary italic">
          {conclusion}
        </p>
      </div>
    </article>
  );
}
