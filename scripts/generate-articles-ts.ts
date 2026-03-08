/**
 * Script to generate src/data/articles.ts with 252 article definitions.
 * Run: npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts
 */
import { services } from '../src/data/services';
import { comparisons } from '../src/data/comparisons';

interface RawArticle {
  id: string;
  title: string;
  slug: string;
  parentId: string;
  parentType: 'service' | 'comparison' | 'core';
  position: number;
  metaTitle: string;
  metaDescription: string;
}

const excluded = new Set(['silicone-elastomeric-roof-coating', 'roof-replacement-cost']);
const articleServices = services.filter(s => excluded.has(s.id) === false);

// Helper to truncate to char limit
function truncTitle(s: string, max: number = 60): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 3).trim() + '...';
}

function truncDesc(s: string, max: number = 150): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 3).trim() + '...';
}

// Slug helpers - build long-tail slugs that won't collide with short service slugs
function makeSlug(parts: string[]): string {
  return parts
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ─── Service Article Templates ──────────────────────────────────────────────
// Position 1: signs/symptoms angle
// Position 2: cost/guide angle
// Position 3: decision/education angle

function serviceSignsArticle(s: typeof articleServices[0]): RawArticle {
  const name = s.name;
  const shortName = name.replace(/ and /g, ' & ').replace(/ Services/g, '');

  // Build descriptive slug
  let slug: string;
  if (s.category === 'repair-maintenance') {
    slug = makeSlug(['signs-you-need', s.slug, 'nj']);
  } else if (s.category === 'residential-roof-types' || s.category === 'commercial-roof-types') {
    slug = makeSlug([s.slug, 'warning-signs-nj']);
  } else if (s.category === 'components-specialty') {
    slug = makeSlug(['when-to-replace', s.slug, 'nj']);
  } else if (s.category === 'energy-solar') {
    slug = makeSlug(['is', s.slug, 'right-for-your-home']);
  } else if (s.category === 'commercial-services') {
    slug = makeSlug(['signs-your-building-needs', s.slug]);
  } else if (s.category === 'design-consultation') {
    slug = makeSlug(['when-to-consider', s.slug, 'nj']);
  } else {
    slug = makeSlug(['signs-you-need', s.slug, 'nj']);
  }

  const title = truncTitle(`Signs You Need ${shortName} in NJ`, 90); // title field no max, but keep reasonable
  const metaTitle = truncTitle(`Signs You Need ${shortName} | NJ Guide`);
  const metaDescription = truncDesc(`How to tell if you need ${name.toLowerCase()} in New Jersey. Warning signs, timing, and what to expect from Essex County roofers.`);

  return {
    id: `${s.id}-signs`,
    title,
    slug,
    parentId: s.id,
    parentType: 'service',
    position: 1,
    metaTitle,
    metaDescription,
  };
}

function serviceCostArticle(s: typeof articleServices[0]): RawArticle {
  const name = s.name;
  const shortName = name.replace(/ and /g, ' & ').replace(/ Services/g, '');

  let slug: string;
  if (s.category === 'replacement-sub-pages') {
    slug = makeSlug([s.slug, 'cost-breakdown-nj']);
  } else {
    slug = makeSlug(['how-much-does', s.slug, 'cost-in-nj']);
  }

  const title = `${shortName} Cost in NJ: What to Expect`;
  const metaTitle = truncTitle(`${shortName} Cost in NJ | Pricing Guide`);
  const metaDescription = truncDesc(`${name} cost in New Jersey. Average prices, factors that affect cost, and how to get the best value in Essex County.`);

  return {
    id: `${s.id}-cost-guide`,
    title,
    slug,
    parentId: s.id,
    parentType: 'service',
    position: 2,
    metaTitle,
    metaDescription,
  };
}

function serviceDecisionArticle(s: typeof articleServices[0]): RawArticle {
  const name = s.name;
  const shortName = name.replace(/ and /g, ' & ').replace(/ Services/g, '');

  let slug: string;
  let title: string;
  if (s.category === 'repair-maintenance') {
    slug = makeSlug(['choosing-the-right', s.slug, 'contractor-nj']);
    title = `Choosing the Right ${shortName} Contractor in NJ`;
  } else if (s.category === 'residential-roof-types' || s.category === 'commercial-roof-types') {
    slug = makeSlug([s.slug, 'pros-and-cons-nj-homeowners']);
    title = `${shortName}: Pros and Cons for NJ Properties`;
  } else if (s.category === 'components-specialty') {
    slug = makeSlug([s.slug, 'complete-homeowner-guide-nj']);
    title = `${shortName}: Complete NJ Homeowner Guide`;
  } else if (s.category === 'energy-solar') {
    slug = makeSlug([s.slug, 'nj-incentives-and-savings']);
    title = `${shortName}: NJ Incentives and Savings`;
  } else if (s.category === 'commercial-services') {
    slug = makeSlug([s.slug, 'what-business-owners-should-know']);
    title = `${shortName}: What NJ Business Owners Should Know`;
  } else if (s.category === 'design-consultation') {
    slug = makeSlug([s.slug, 'what-to-expect-nj']);
    title = `${shortName}: What to Expect in NJ`;
  } else {
    slug = makeSlug([s.slug, 'complete-guide-nj']);
    title = `Complete Guide to ${shortName} in NJ`;
  }

  const metaTitle = truncTitle(title.length <= 60 ? title : `${shortName} Guide | NJ`);
  const metaDescription = truncDesc(`Everything NJ homeowners need to know about ${name.toLowerCase()}. Expert advice from Essex County roofing professionals.`);

  return {
    id: `${s.id}-decision`,
    title,
    slug,
    parentId: s.id,
    parentType: 'service',
    position: 3,
    metaTitle,
    metaDescription,
  };
}

// ─── Comparison Article Templates ───────────────────────────────────────────
// Position 1: buyer guide ("How to Choose")
// Position 2: expert recommendation ("What NJ Contractors Recommend")

function compBuyerGuide(c: typeof comparisons[0]): RawArticle {
  const slug = makeSlug(['how-to-choose', c.slug, 'nj']);
  const shortName = c.name.length > 35 ? c.name.slice(0, 35).trim() : c.name;
  const title = `How to Choose: ${c.name} in NJ`;
  const metaTitle = truncTitle(`How to Choose: ${shortName} | NJ`);
  const metaDescription = truncDesc(`A NJ homeowner guide to choosing between ${c.name.toLowerCase()}. Key factors, local considerations, and expert advice.`);

  return {
    id: `${c.id}-buyers-guide`,
    title,
    slug,
    parentId: c.id,
    parentType: 'comparison',
    position: 1,
    metaTitle,
    metaDescription,
  };
}

function compExpertPicks(c: typeof comparisons[0]): RawArticle {
  const slug = makeSlug(['what-nj-roofers-recommend', c.slug]);
  const shortName = c.name.length > 30 ? c.name.slice(0, 30).trim() : c.name;
  const title = `What NJ Roofers Recommend: ${c.name}`;
  const metaTitle = truncTitle(`NJ Roofer Picks: ${shortName}`);
  const metaDescription = truncDesc(`What New Jersey roofing contractors actually recommend for ${c.name.toLowerCase()}. Professional insights from Essex County.`);

  return {
    id: `${c.id}-expert-picks`,
    title,
    slug,
    parentId: c.id,
    parentType: 'comparison',
    position: 2,
    metaTitle,
    metaDescription,
  };
}

// ─── Core (Homepage) Articles ───────────────────────────────────────────────

const coreArticles: RawArticle[] = [
  {
    id: 'homepage-nj-roofing-guide',
    title: 'Complete NJ Roofing Guide for Homeowners',
    slug: 'complete-nj-roofing-guide-homeowners',
    parentId: 'homepage',
    parentType: 'core',
    position: 1,
    metaTitle: 'Complete NJ Roofing Guide | Homeowners',
    metaDescription: 'Everything NJ homeowners need to know about roofing. Materials, costs, maintenance, and finding a contractor in Essex County.',
  },
  {
    id: 'homepage-finding-roofer-essex-county',
    title: 'Finding a Reliable Roofer in Essex County NJ',
    slug: 'finding-reliable-roofer-essex-county-nj',
    parentId: 'homepage',
    parentType: 'core',
    position: 2,
    metaTitle: 'Find a Roofer in Essex County NJ',
    metaDescription: 'How to find and vet a reliable roofing contractor in Essex County NJ. Licensing, insurance, and red flags to watch for.',
  },
  {
    id: 'homepage-nj-roofing-licensing-insurance',
    title: 'NJ Roofing Licensing and Insurance Guide',
    slug: 'nj-roofing-licensing-insurance-guide',
    parentId: 'homepage',
    parentType: 'core',
    position: 3,
    metaTitle: 'NJ Roofing Licensing & Insurance Guide',
    metaDescription: 'Understanding NJ roofing contractor licensing and insurance requirements. What homeowners should verify before hiring.',
  },
];

// ─── Assemble All Articles ──────────────────────────────────────────────────

const allArticles: RawArticle[] = [];

// Service articles (189)
for (const s of articleServices) {
  allArticles.push(serviceSignsArticle(s));
  allArticles.push(serviceCostArticle(s));
  allArticles.push(serviceDecisionArticle(s));
}

// Comparison articles (60)
for (const c of comparisons) {
  allArticles.push(compBuyerGuide(c));
  allArticles.push(compExpertPicks(c));
}

// Core articles (3)
allArticles.push(...coreArticles);

// ─── Validate uniqueness ────────────────────────────────────────────────────

const slugSet = new Set<string>();
const idSet = new Set<string>();
const errors: string[] = [];

for (const a of allArticles) {
  if (slugSet.has(a.slug)) {
    errors.push(`Duplicate slug: ${a.slug}`);
  }
  slugSet.add(a.slug);

  if (idSet.has(a.id)) {
    errors.push(`Duplicate id: ${a.id}`);
  }
  idSet.add(a.id);

  if (a.metaTitle.length > 60) {
    errors.push(`metaTitle too long (${a.metaTitle.length}): ${a.id} => "${a.metaTitle}"`);
  }
  if (a.metaDescription.length > 160) {
    errors.push(`metaDescription too long (${a.metaDescription.length}): ${a.id} => "${a.metaDescription}"`);
  }
  if (!/^[a-z0-9-]+$/.test(a.slug)) {
    errors.push(`Invalid slug chars: ${a.id} => "${a.slug}"`);
  }
}

if (errors.length > 0) {
  console.error('VALIDATION ERRORS:');
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}

// ─── Output TypeScript File ─────────────────────────────────────────────────

const lines: string[] = [];
lines.push(`import { z } from 'zod';`);
lines.push(``);
lines.push(`// ─── Article Schema ─────────────────────────────────────────────────────────`);
lines.push(``);
lines.push(`export const ArticleSchema = z.object({`);
lines.push(`  id: z.string(),`);
lines.push(`  title: z.string(),`);
lines.push(`  slug: z.string().regex(/^[a-z0-9-]+$/),`);
lines.push(`  parentId: z.string(),`);
lines.push(`  parentType: z.enum(['service', 'comparison', 'core']),`);
lines.push(`  position: z.number().min(1).max(3),`);
lines.push(`  metaTitle: z.string().max(60),`);
lines.push(`  metaDescription: z.string().max(160),`);
lines.push(`});`);
lines.push(``);
lines.push(`export type Article = z.infer<typeof ArticleSchema>;`);
lines.push(``);
lines.push(`// ─── Raw Article Data (252 articles) ─────────────────────────────────────────`);
lines.push(`// 63 services x 3 articles = 189 service articles`);
lines.push(`// 30 comparisons x 2 articles = 60 comparison articles`);
lines.push(`// 1 homepage x 3 articles = 3 core articles`);
lines.push(`// Excluded services: silicone-elastomeric-roof-coating, roof-replacement-cost`);
lines.push(``);
lines.push(`const rawArticles: Article[] = [`);

for (const a of allArticles) {
  lines.push(`  {`);
  lines.push(`    id: '${a.id}',`);
  lines.push(`    title: '${a.title.replace(/'/g, "\\'")}',`);
  lines.push(`    slug: '${a.slug}',`);
  lines.push(`    parentId: '${a.parentId}',`);
  lines.push(`    parentType: '${a.parentType}',`);
  lines.push(`    position: ${a.position},`);
  lines.push(`    metaTitle: '${a.metaTitle.replace(/'/g, "\\'")}',`);
  lines.push(`    metaDescription: '${a.metaDescription.replace(/'/g, "\\'")}',`);
  lines.push(`  },`);
}

lines.push(`];`);
lines.push(``);
lines.push(`// ─── Runtime Validation ──────────────────────────────────────────────────────`);
lines.push(``);
lines.push(`export const articles: Article[] = z.array(ArticleSchema).parse(rawArticles);`);
lines.push(``);

console.log(lines.join('\n'));
