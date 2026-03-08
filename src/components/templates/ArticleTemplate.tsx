import type { Article } from '@/data/articles';

interface ArticleTemplateProps {
  article: Article;
}

/**
 * Placeholder ArticleTemplate -- renders article title and metadata.
 * Will be replaced with full editorial layout in Plan 02.
 */
export default function ArticleTemplate({ article }: ArticleTemplateProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-4xl font-bold text-forest">
        {article.title}
      </h1>
      <p className="mt-4 font-body text-lg text-text-secondary">
        Supporting article for{' '}
        <span className="capitalize">{article.parentType}</span> page.
        Full content coming soon.
      </p>
    </main>
  );
}
