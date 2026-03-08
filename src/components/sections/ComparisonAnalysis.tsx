import type { ComparisonContent } from '@/data/comparison-content/schema';

interface ComparisonAnalysisProps {
  analysis: ComparisonContent['detailedAnalysis'];
  njSpecific: ComparisonContent['njSpecific'];
  homeownerSection: ComparisonContent['homeownerSection'];
  businessOwnerSection: ComparisonContent['businessOwnerSection'];
}

export function ComparisonAnalysis({
  analysis,
  njSpecific,
  homeownerSection,
  businessOwnerSection,
}: ComparisonAnalysisProps) {
  return (
    <section aria-labelledby="comparison-analysis-heading">
      <h2
        id="comparison-analysis-heading"
        className="sr-only"
      >
        Detailed Analysis
      </h2>

      {/* Detailed analysis items */}
      <div className="space-y-10">
        {analysis.map((item, index) => (
          <div key={index}>
            <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
              {item.heading}
            </h2>
            <div className="mt-4 space-y-3">
              {item.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="font-body text-base leading-relaxed text-text-primary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* NJ-Specific section */}
      <div className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
          {njSpecific.heading}
        </h2>
        <div className="mt-4 space-y-3">
          {njSpecific.content.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base leading-relaxed text-text-primary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Audience subsections */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* For Homeowners */}
        <div className="border-l-4 border-copper pl-6">
          <h3 className="font-heading text-xl font-bold text-forest">
            {homeownerSection.heading}
          </h3>
          <div className="mt-3 space-y-3">
            {homeownerSection.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-sm leading-relaxed text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* For Business Owners */}
        <div className="border-l-4 border-forest pl-6">
          <h3 className="font-heading text-xl font-bold text-forest">
            {businessOwnerSection.heading}
          </h3>
          <div className="mt-3 space-y-3">
            {businessOwnerSection.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-sm leading-relaxed text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
