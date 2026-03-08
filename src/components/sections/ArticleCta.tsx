import Link from 'next/link';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface ArticleCtaProps {
  heading: string;
  text: string;
  moneyPageName: string;
  moneyPageSlug: string;
}

export function ArticleCta({
  heading,
  text,
  moneyPageName,
  moneyPageSlug,
}: ArticleCtaProps) {
  return (
    <aside
      className="mt-14 rounded-lg border border-copper/30 bg-parchment-dark/50 px-6 py-8 sm:px-8"
      aria-label="Call to action"
    >
      {/* Copper accent bar */}
      <div className="mb-6 h-1 w-16 rounded-full bg-copper" aria-hidden="true" />

      <h2 className="font-heading text-2xl font-bold text-forest">
        {heading}
      </h2>

      <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
        {text}
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={moneyPageSlug}
          className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3 font-body text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
        >
          Learn More About {moneyPageName}
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        <span className="font-body text-sm text-text-secondary">or</span>

        <PhoneNumber size="md" />
      </div>
    </aside>
  );
}
