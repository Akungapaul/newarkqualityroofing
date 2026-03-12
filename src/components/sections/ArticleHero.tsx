import Image from 'next/image';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/sections/Breadcrumbs';
import type { Article } from '@/data/articles';

interface ArticleHeroProps {
  article: Article;
  moneyPageName: string;
  moneyPageSlug: string;
  wordCount?: number;
  heroImage?: { src: string; alt: string };
}

function estimateReadingTime(wordCount: number): string {
  const minutes = Math.max(1, Math.ceil(wordCount / 250));
  return `${minutes} min read`;
}

function buildBreadcrumbs(
  article: Article,
  moneyPageName: string,
  moneyPageSlug: string,
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  // Core articles have no intermediate parent page
  if (article.parentType !== 'core') {
    items.push({ label: moneyPageName, href: moneyPageSlug });
  }

  items.push({ label: article.title });
  return items;
}

export function ArticleHero({
  article,
  moneyPageName,
  moneyPageSlug,
  wordCount = 800,
  heroImage,
}: ArticleHeroProps) {
  const breadcrumbs = buildBreadcrumbs(article, moneyPageName, moneyPageSlug);
  const readingTime = estimateReadingTime(wordCount);

  return (
    <section
      className="relative overflow-hidden bg-parchment"
      aria-labelledby="article-hero-heading"
    >
      {/* Subtle texture overlay for editorial depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 pb-10 pt-14 lg:px-8 lg:pt-16">
        <Breadcrumbs items={breadcrumbs} />

        <h1
          id="article-hero-heading"
          className="font-heading text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl"
        >
          {article.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 font-body text-sm text-text-secondary">
          {/* Clock icon */}
          <svg
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{readingTime}</span>
          <span aria-hidden="true" className="text-border">|</span>
          <span>Newark Quality Roofing</span>
        </div>

        {/* Divider */}
        <div
          className="mt-8 h-px bg-gradient-to-r from-copper/40 via-copper/20 to-transparent"
          aria-hidden="true"
        />

        {heroImage && (
          <div className="mt-8 overflow-hidden rounded-lg">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={960}
              height={320}
              className="photo-treatment aspect-[3/1] w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
      </div>
    </section>
  );
}
