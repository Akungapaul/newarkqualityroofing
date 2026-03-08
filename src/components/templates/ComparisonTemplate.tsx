import type { Comparison } from '@/lib/types';
import type { ComparisonContent } from '@/data/comparison-content/schema';
import { getServiceMenuGroups } from '@/data/nav-data';
import type { NavServiceGroup } from '@/data/nav-data';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';
import { ComparisonHero } from '@/components/sections/ComparisonHero';
import { ComparisonIntro } from '@/components/sections/ComparisonIntro';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { ComparisonAnalysis } from '@/components/sections/ComparisonAnalysis';
import { ComparisonVerdict } from '@/components/sections/ComparisonVerdict';
import { ComparisonFaqs } from '@/components/sections/ComparisonFaqs';
import { ComparisonRelated } from '@/components/sections/ComparisonRelated';
import { StickyFormSidebar } from '@/components/sections/StickyFormSidebar';
import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { ComparisonLearnMore } from '@/components/sections/ComparisonLearnMore';
import { getMoneyPageArticle } from '@/data/linking/link-engine';

// ─── Content loader (graceful fallback until Plan 03 creates aggregator) ──

function loadComparisonContent(comparisonId: string): ComparisonContent | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('@/data/comparison-content');
    if (typeof mod.getComparisonContent === 'function') {
      return mod.getComparisonContent(comparisonId);
    }
    return null;
  } catch {
    // Aggregator not yet created -- render placeholder
    return null;
  }
}

// ─── Template Component ─────────────────────────────────────────────────────

interface ComparisonTemplateProps {
  comparison: Comparison;
}

export default function ComparisonTemplate({ comparison }: ComparisonTemplateProps) {
  const serviceGroups = getServiceMenuGroups();
  const content = loadComparisonContent(comparison.id);

  if (!content) {
    return <ComparisonPlaceholder comparison={comparison} serviceGroups={serviceGroups} />;
  }

  return (
    <>
      <FloatingCtaButton />

      <ComparisonHero
        comparison={comparison}
        serviceGroups={serviceGroups}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        {/* Main content column */}
        <div className="space-y-12 pb-16 lg:col-span-2">
          <ComparisonIntro
            heading={content.introHeading}
            paragraphs={content.introParagraphs}
          />

          <ComparisonTable
            comparison={comparison}
            rows={content.comparisonRows}
          />

          <ComparisonAnalysis
            analysis={content.detailedAnalysis}
            njSpecific={content.njSpecific}
            homeownerSection={content.homeownerSection}
            businessOwnerSection={content.businessOwnerSection}
          />

          <ComparisonVerdict verdict={content.verdict} />

          <ComparisonFaqs faqs={content.faqs} />

          {/* Learn More — reverse silo link to position-1 article */}
          {(() => {
            const article = getMoneyPageArticle(comparison.id, 'comparison');
            return article ? <ComparisonLearnMore article={article} comparisonName={comparison.name} /> : null;
          })()}
        </div>

        {/* Sticky sidebar */}
        <StickyFormSidebar>
          <LeadForm
            variant="standard"
            serviceGroups={serviceGroups}
          />
        </StickyFormSidebar>
      </div>

      <ComparisonRelated comparison={comparison} />
    </>
  );
}

// ─── Placeholder for comparisons without content yet ──────────────────────

function ComparisonPlaceholder({
  comparison,
  serviceGroups,
}: {
  comparison: Comparison;
  serviceGroups: NavServiceGroup[];
}) {
  return (
    <>
      <FloatingCtaButton />

      <ComparisonHero
        comparison={comparison}
        serviceGroups={serviceGroups}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div className="space-y-8 pb-16 lg:col-span-2">
          <div className="rounded-sm border border-border bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-forest">
              {comparison.name}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Newark Quality Roofing helps homeowners and businesses make informed roofing
              decisions. Our expert comparison guides break down the key differences
              between materials, services, and approaches so you can choose with confidence.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Contact us for a free consultation and personalized recommendation based on
              your property, budget, and goals.
            </p>
            <div className="mt-6">
              <PhoneNumber size="lg" className="text-copper font-semibold hover:text-copper-dark" />
            </div>
          </div>
        </div>

        <StickyFormSidebar>
          <LeadForm
            variant="standard"
            serviceGroups={serviceGroups}
          />
        </StickyFormSidebar>
      </div>

      <ComparisonRelated comparison={comparison} />
    </>
  );
}
