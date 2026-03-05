import type { Comparison } from '@/lib/types';

interface ComparisonTemplateProps {
  comparison: Comparison;
}

export default function ComparisonTemplate({ comparison }: ComparisonTemplateProps) {
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <main className="mx-auto max-w-3xl">
        {/* Page type badge */}
        <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
          Comparison
        </span>

        {/* Comparison name */}
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
          {comparison.name}
        </h1>

        {/* Category */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-sm border border-border px-2 py-1 font-body text-xs text-text-secondary">
            {comparison.category}
          </span>
        </div>

        {/* Placeholder content area */}
        <div className="mt-12 rounded-sm border-2 border-dashed border-border p-8 text-center">
          <p className="font-body text-text-secondary">
            Full comparison content coming in Phase 5
          </p>
        </div>

        {/* Placeholder lead form area */}
        <div className="mt-8 rounded-sm border-2 border-dashed border-copper/40 bg-copper/5 p-8 text-center">
          <p className="font-heading text-lg font-semibold text-forest">
            Need Help Choosing? Get Expert Advice
          </p>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Lead form coming in Phase 6
          </p>
        </div>
      </main>
    </div>
  );
}
