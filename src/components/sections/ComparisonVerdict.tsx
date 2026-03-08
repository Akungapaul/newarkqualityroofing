import { PhoneNumber } from '@/components/ui/PhoneNumber';
import type { ComparisonContent } from '@/data/comparison-content/schema';

interface ComparisonVerdictProps {
  verdict: ComparisonContent['verdict'];
}

export function ComparisonVerdict({ verdict }: ComparisonVerdictProps) {
  return (
    <section aria-labelledby="comparison-verdict-heading">
      <h2
        id="comparison-verdict-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Our Verdict
      </h2>

      <div className="mt-6 rounded-lg border-2 border-copper/30 bg-copper/5 p-6 sm:p-8">
        {/* Winner statement */}
        <p className="font-heading text-xl font-bold text-forest">
          {verdict.winner}
        </p>

        {/* Reasoning */}
        <p className="mt-4 font-body text-base leading-relaxed text-text-primary">
          {verdict.reasoning}
        </p>

        {/* Alternate scenario */}
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary italic">
          {verdict.alternateScenario}
        </p>

        {/* Consultation CTA */}
        <div className="mt-6 border-t border-copper/20 pt-6">
          <p className="font-body text-sm font-semibold text-forest">
            Not sure which is right for you? Call for a free consultation.
          </p>
          <div className="mt-2">
            <PhoneNumber size="lg" className="text-copper font-semibold hover:text-copper-dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
