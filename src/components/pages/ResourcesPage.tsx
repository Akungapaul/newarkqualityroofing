import Link from 'next/link';
import { articles } from '@/data/articles';
import type { Article } from '@/data/articles';

// ─── Group articles by parentType ───────────────────────────────────────────

type ArticleGroup = {
  key: Article['parentType'];
  label: string;
  description: string;
  articles: Article[];
};

const GROUP_CONFIG: Record<
  Article['parentType'],
  { label: string; description: string }
> = {
  service: {
    label: 'Service Guides',
    description:
      'In-depth guides covering costs, decision-making, and what to expect from each roofing service.',
  },
  comparison: {
    label: 'Roofing Comparisons',
    description:
      'Side-by-side comparisons to help you choose the right materials, methods, and contractors.',
  },
  core: {
    label: 'General Resources',
    description:
      'Essential roofing knowledge for Essex County homeowners and businesses.',
  },
};

const GROUP_ORDER: Article['parentType'][] = ['core', 'service', 'comparison'];

function groupArticles(allArticles: Article[]): ArticleGroup[] {
  const grouped = new Map<Article['parentType'], Article[]>();

  for (const article of allArticles) {
    const existing = grouped.get(article.parentType) ?? [];
    existing.push(article);
    grouped.set(article.parentType, existing);
  }

  return GROUP_ORDER.filter((key) => grouped.has(key)).map((key) => ({
    key,
    ...GROUP_CONFIG[key],
    articles: grouped.get(key)!,
  }));
}

// ─── Resources Page Component ───────────────────────────────────────────────

export default function ResourcesPage() {
  const groups = groupArticles(articles);

  return (
    <div className="min-h-screen bg-parchment">
      <header className="px-6 pb-4 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Roofing Resources &amp; Guides
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-body text-base text-text-secondary">
          Expert roofing guides, cost breakdowns, and decision-making
          resources for Essex County NJ homeowners and businesses.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-8">
        <div className="space-y-16">
          {groups.map((group) => (
            <section key={group.key}>
              <div className="mb-6 border-b border-border pb-4">
                <h2 className="mb-2 font-heading text-2xl font-bold text-forest">
                  {group.label}
                </h2>
                <p className="font-body text-sm text-text-secondary">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/${article.slug}`}
                    className="group rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:border-copper/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
                  >
                    <h3 className="font-heading text-base font-semibold text-forest transition-colors duration-150 group-hover:text-copper">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                      {article.metaDescription}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1 font-body text-sm font-medium text-copper transition-colors duration-150 group-hover:text-copper-dark"
                      aria-hidden="true"
                    >
                      Read guide
                      <svg
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Article count summary */}
        <div className="mt-16 rounded-lg border border-copper/30 bg-copper/5 p-5 text-center">
          <p className="font-body text-sm text-text-secondary">
            Browse our library of{' '}
            <strong className="text-forest">{articles.length}</strong> expert
            roofing guides covering services, materials, and cost
            breakdowns for Essex County NJ.
          </p>
        </div>
      </main>
    </div>
  );
}
