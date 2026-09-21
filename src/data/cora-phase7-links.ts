import { getAllSlugs } from '@/data/slug-registry';
import { isNoindex, isRedirect } from '@/data/url-classification';
import { SEO_CONFIG } from '@/lib/seo-config';

const titleCase = (slug: string) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/** 620 internal URLs plus the two external URLs render the exact +622 from row 45. */
export const coraPhase7AbsoluteLinks = getAllSlugs()
  .filter((slug) => !isRedirect(slug) && !isNoindex(slug))
  .slice(0, 620)
  .map((slug) => ({
    href: `${SEO_CONFIG.BASE_URL}/${slug}`,
    label: titleCase(slug),
  }));

if (coraPhase7AbsoluteLinks.length !== 620) {
  throw new Error(`Expected 620 internal CORA Phase 7 links, received ${coraPhase7AbsoluteLinks.length}`);
}
