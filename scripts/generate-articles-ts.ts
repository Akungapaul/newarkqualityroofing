/**
 * Script to generate src/data/articles.ts with 252 article definitions.
 * Run: npx tsx scripts/generate-articles-ts.ts > src/data/articles.ts
 */
import { services } from '../src/data/services';
import { comparisons } from '../src/data/comparisons';

type Cluster =
  | 'roof-problems'
  | 'roof-components'
  | 'roofing-materials'
  | 'roofing-process'
  | 'roofing-costs'
  | 'local-roofing-knowledge';

interface RawArticle {
  id: string;
  title: string;
  slug: string;
  parentId: string;
  parentType: 'service' | 'comparison' | 'core';
  position: number;
  metaTitle: string;
  metaDescription: string;
  cluster: Cluster;
}

// ─── Cluster Classification ──────────────────────────────────────────────────
// Every article is deterministically assigned to one of six topical clusters so
// later phases (KB folding, knowledge-graph linking) can group by cluster.
// Derivation (all from data the generator already holds — category + position):
//   - cost/pricing article (service position 2)          → roofing-costs
//   - core/homepage articles (NJ guide, roofer, licensing) → local-roofing-knowledge
//   - comparison articles (material/option selection)     → roofing-materials
//   - service articles (position 1 or 3) by category:
//       repair-maintenance        → roof-problems
//       residential-roof-types    → roofing-materials
//       commercial-roof-types     → roofing-materials
//       components-specialty      → roof-components
//       energy-solar              → roofing-materials
//       commercial-services       → roofing-process
//       design-consultation       → roofing-process
//       replacement-sub-pages     → roofing-process
function clusterForServiceArticle(
  category: string,
  position: number
): Cluster {
  // The cost/pricing article (position 2) belongs to the costs cluster
  // regardless of the parent service category.
  if (position === 2) return 'roofing-costs';

  switch (category) {
    case 'repair-maintenance':
      return 'roof-problems';
    case 'residential-roof-types':
    case 'commercial-roof-types':
    case 'energy-solar':
      return 'roofing-materials';
    case 'components-specialty':
      return 'roof-components';
    case 'commercial-services':
    case 'design-consultation':
    case 'replacement-sub-pages':
      return 'roofing-process';
    default:
      return 'roofing-process';
  }
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

// Title-scoped display name (H1s only — metaTitles/metaDescriptions keep the
// original shortName so they stay byte-identical). Restores the missing
// conjunction in the six "X Installation Repair" service names.
function titleName(name: string): string {
  return name
    .replace(/ and /g, ' & ')
    .replace(/ Services/g, '')
    .replace(/ Installation Repair$/, ' Installation & Repair');
}

// Per-article H1 overrides for titles the templates render awkwardly.
// Applied by id after assembly, before validation.
const TITLE_OVERRIDES: Record<string, string> = {
  // Template would keep the broken plural "Programs Contractor".
  'roof-maintenance-programs-decision': 'How to Choose a Roof Maintenance Program Contractor in NJ',
  // "Roof Warranty Comparison Guide" is not a chooseable thing.
  'roof-warranty-comparison-guide-buyers-guide': 'How to Compare Roof Warranties in NJ',
  'roof-warranty-comparison-guide-expert-picks': 'Roof Warranties: What NJ Roofers Recommend',
};

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

  const title = `Signs You Need ${titleName(name)} in NJ`; // on-page H1 (no length cap); statement form (2026-08 H1 policy)
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
    cluster: clusterForServiceArticle(s.category, 1),
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

  const title = `${titleName(name)} Cost in NJ`;
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
    cluster: clusterForServiceArticle(s.category, 2),
  };
}

function serviceDecisionArticle(s: typeof articleServices[0]): RawArticle {
  const name = s.name;
  const shortName = name.replace(/ and /g, ' & ').replace(/ Services/g, '');
  const tn = titleName(name);

  let slug: string;
  let title: string;
  // metaTitleBase keeps the original concise declarative SERP wording so the
  // ≤60-char metaTitle stays decoupled from the on-page H1 (D-12).
  let metaTitleBase: string;
  if (s.category === 'repair-maintenance') {
    slug = makeSlug(['choosing-the-right', s.slug, 'contractor-nj']);
    title = `How to Choose ${/^[aeiou]/i.test(tn) ? 'an' : 'a'} ${tn} Contractor in NJ`;
    metaTitleBase = `Choosing the Right ${shortName} Contractor in NJ`;
  } else if (s.category === 'residential-roof-types') {
    slug = makeSlug([s.slug, 'pros-and-cons-nj-homeowners']);
    title = `Pros and Cons of ${tn} for NJ Homes`;
    metaTitleBase = `${shortName}: Pros and Cons for NJ Properties`;
  } else if (s.category === 'commercial-roof-types') {
    slug = makeSlug([s.slug, 'pros-and-cons-nj-homeowners']);
    title = `Pros and Cons of ${tn} for NJ Buildings`;
    metaTitleBase = `${shortName}: Pros and Cons for NJ Properties`;
  } else if (s.category === 'components-specialty') {
    slug = makeSlug([s.slug, 'complete-homeowner-guide-nj']);
    title = `What to Know About ${tn} in NJ`;
    metaTitleBase = `${shortName}: Complete NJ Homeowner Guide`;
  } else if (s.category === 'energy-solar') {
    slug = makeSlug([s.slug, 'nj-incentives-and-savings']);
    title = `NJ Incentives and Savings for ${tn}`;
    metaTitleBase = `${shortName}: NJ Incentives and Savings`;
  } else if (s.category === 'commercial-services') {
    slug = makeSlug([s.slug, 'what-business-owners-should-know']);
    title = `What NJ Business Owners Should Know About ${tn}`;
    metaTitleBase = `${shortName}: What NJ Business Owners Should Know`;
  } else if (s.category === 'design-consultation') {
    slug = makeSlug([s.slug, 'what-to-expect-nj']);
    title = `What to Expect From ${tn} in NJ`;
    metaTitleBase = `${shortName}: What to Expect in NJ`;
  } else {
    slug = makeSlug([s.slug, 'complete-guide-nj']);
    title = `What to Know About ${tn} in NJ`;
    metaTitleBase = `Complete Guide to ${shortName} in NJ`;
  }

  const metaTitle = truncTitle(metaTitleBase.length <= 60 ? metaTitleBase : `${shortName} Guide | NJ`);
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
    cluster: clusterForServiceArticle(s.category, 3),
  };
}

// ─── Comparison Article Templates ───────────────────────────────────────────
// Position 1: buyer guide ("How to Choose")
// Position 2: expert recommendation ("What NJ Contractors Recommend")

function compBuyerGuide(c: typeof comparisons[0]): RawArticle {
  const slug = makeSlug(['how-to-choose', c.slug, 'nj']);
  const shortName = c.name.length > 35 ? c.name.slice(0, 35).trim() : c.name;
  // "X vs Y" names become "How to Choose Between X and Y in NJ"; decision-helper
  // names (no " vs ") become "How to Choose the {name}". Neither collapses to the
  // bare comparison name, which is the comparison PAGE's H1.
  const title = c.name.includes(' vs ')
    ? `How to Choose Between ${c.name.replace(' vs ', ' and ')} in NJ`
    : `How to Choose the ${c.name}${/\bNJ\b/.test(c.name) ? '' : ' in NJ'}`;
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
    // Comparison articles help readers choose between materials/options.
    cluster: 'roofing-materials',
  };
}

function compExpertPicks(c: typeof comparisons[0]): RawArticle {
  const slug = makeSlug(['what-nj-roofers-recommend', c.slug]);
  const shortName = c.name.length > 30 ? c.name.slice(0, 30).trim() : c.name;
  // Suffix form keeps this distinct from both the comparison page H1 (bare
  // name + " in NJ") and the buyer-guide article ("How to Choose …").
  const title = `${c.name}: What NJ Roofers Recommend`;
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
    // Comparison articles help readers choose between materials/options.
    cluster: 'roofing-materials',
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
    cluster: 'local-roofing-knowledge',
  },
  {
    id: 'homepage-finding-roofer-essex-county',
    title: 'How to Find a Reliable Roofer in Essex County, NJ',
    slug: 'finding-reliable-roofer-essex-county-nj',
    parentId: 'homepage',
    parentType: 'core',
    position: 2,
    metaTitle: 'Find a Roofer in Essex County NJ',
    metaDescription: 'How to find and vet a reliable roofing contractor in Essex County NJ. Licensing, insurance, and red flags to watch for.',
    cluster: 'local-roofing-knowledge',
  },
  {
    id: 'homepage-nj-roofing-licensing-insurance',
    title: 'NJ Roofing Licensing and Insurance Requirements',
    slug: 'nj-roofing-licensing-insurance-guide',
    parentId: 'homepage',
    parentType: 'core',
    position: 3,
    metaTitle: 'NJ Roofing Licensing & Insurance Guide',
    metaDescription: 'Understanding NJ roofing contractor licensing and insurance requirements. What homeowners should verify before hiring.',
    cluster: 'local-roofing-knowledge',
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

// Per-id H1 overrides (grammar/readability fixes the templates can't express)
for (const a of allArticles) {
  const override = TITLE_OVERRIDES[a.id];
  if (override) a.title = override;
}

// ─── Validate uniqueness ────────────────────────────────────────────────────

const slugSet = new Set<string>();
const idSet = new Set<string>();
const titleSet = new Set<string>();
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

  if (titleSet.has(a.title)) {
    errors.push(`Duplicate title: ${a.title}`);
  }
  titleSet.add(a.title);

  if (/\?\s*$/.test(a.title)) {
    errors.push(`Question-form title (H1s must be statements): ${a.id} => "${a.title}"`);
  }

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
lines.push(`  cluster: z.enum([`);
lines.push(`    'roof-problems',`);
lines.push(`    'roof-components',`);
lines.push(`    'roofing-materials',`);
lines.push(`    'roofing-process',`);
lines.push(`    'roofing-costs',`);
lines.push(`    'local-roofing-knowledge',`);
lines.push(`  ]),`);
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
  lines.push(`    cluster: '${a.cluster}',`);
  lines.push(`  },`);
}

lines.push(`];`);
lines.push(``);
lines.push(`// ─── Runtime Validation ──────────────────────────────────────────────────────`);
lines.push(``);
lines.push(`export const articles: Article[] = z.array(ArticleSchema).parse(rawArticles);`);
lines.push(``);

console.log(lines.join('\n'));
