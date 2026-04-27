// Meta title/description length audit script
// Run with: npx tsx scripts/audit-meta.ts
// Checks metaTitle (target: <= 60 chars) and metaDescription (target: <= 160 chars)
// Reports violations per page type.

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { getCityContent } from '@/data/city-content';

// ─── Types ──────────────────────────────────────────────────────────────────

interface MetaIssue {
  pageType: string;
  pageId: string;
  field: 'title' | 'description';
  current: string;
  length: number;
  limit: number;
  issue: string;
}

// ─── Audit Logic ────────────────────────────────────────────────────────────

const TITLE_MAX = 60;
const DESC_MAX = 160;

function checkMeta(
  pageType: string,
  pageId: string,
  title: string | undefined,
  description: string | undefined,
): MetaIssue[] {
  const issues: MetaIssue[] = [];

  if (!title) {
    issues.push({
      pageType,
      pageId,
      field: 'title',
      current: '(empty)',
      length: 0,
      limit: TITLE_MAX,
      issue: 'Missing meta title',
    });
  } else if (title.length > TITLE_MAX) {
    issues.push({
      pageType,
      pageId,
      field: 'title',
      current: title,
      length: title.length,
      limit: TITLE_MAX,
      issue: `Title too long (${title.length}/${TITLE_MAX})`,
    });
  }

  if (!description) {
    issues.push({
      pageType,
      pageId,
      field: 'description',
      current: '(empty)',
      length: 0,
      limit: DESC_MAX,
      issue: 'Missing meta description',
    });
  } else if (description.length > DESC_MAX) {
    issues.push({
      pageType,
      pageId,
      field: 'description',
      current: description,
      length: description.length,
      limit: DESC_MAX,
      issue: `Description too long (${description.length}/${DESC_MAX})`,
    });
  }

  return issues;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('=== Meta Title & Description Audit ===\n');

  const allIssues: MetaIssue[] = [];
  let totalPages = 0;

  // Services
  for (const service of services) {
    totalPages++;
    allIssues.push(...checkMeta('service', service.id, service.metaTitle, service.metaDescription));
  }

  // Cities
  for (const city of cities) {
    totalPages++;
    const cityContent = getCityContent(city.id);
    allIssues.push(
      ...checkMeta(
        'city',
        city.id,
        cityContent.metaTitle,
        cityContent.metaDescription,
      ),
    );
  }

  // Combos
  for (const combo of combos) {
    totalPages++;
    allIssues.push(...checkMeta('combo', combo.slug, combo.metaTitle, combo.metaDescription));
  }

  // Comparisons
  for (const comparison of comparisons) {
    totalPages++;
    allIssues.push(
      ...checkMeta('comparison', comparison.id, comparison.metaTitle, comparison.metaDescription),
    );
  }

  // Articles
  for (const article of articles) {
    totalPages++;
    allIssues.push(
      ...checkMeta('article', article.id, article.metaTitle, article.metaDescription),
    );
  }

  // Core pages
  for (const page of corePages) {
    totalPages++;
    allIssues.push(...checkMeta('core', page.id, page.metaTitle, page.metaDescription));
  }

  // ─── Summary ────────────────────────────────────────────────────────────

  const titleIssues = allIssues.filter((i) => i.field === 'title');
  const descIssues = allIssues.filter((i) => i.field === 'description');
  const tooLongTitles = titleIssues.filter((i) => i.length > TITLE_MAX);
  const tooLongDescs = descIssues.filter((i) => i.length > DESC_MAX);
  const missingTitles = titleIssues.filter((i) => i.length === 0);
  const missingDescs = descIssues.filter((i) => i.length === 0);

  console.log('SUMMARY');
  console.log('-------');
  console.log(`Total pages checked: ${totalPages}`);
  console.log(`Titles too long (>${TITLE_MAX}): ${tooLongTitles.length}`);
  console.log(`Descriptions too long (>${DESC_MAX}): ${tooLongDescs.length}`);
  console.log(`Missing titles: ${missingTitles.length}`);
  console.log(`Missing descriptions: ${missingDescs.length}`);
  console.log(`Total issues: ${allIssues.length}`);

  if (allIssues.length === 0) {
    console.log('\nAll meta tags within acceptable limits.');
    return;
  }

  // ─── Detail by type ─────────────────────────────────────────────────────

  const byType = new Map<string, MetaIssue[]>();
  for (const issue of allIssues) {
    const existing = byType.get(issue.pageType) ?? [];
    existing.push(issue);
    byType.set(issue.pageType, existing);
  }

  console.log('\n\nDETAILED REPORT');
  console.log('===============');

  for (const [type, issues] of byType) {
    console.log(`\n## ${type.toUpperCase()} PAGES (${issues.length} issues)`);
    console.log('-'.repeat(50));

    for (const issue of issues.slice(0, 15)) {
      console.log(`  Page: ${issue.pageId}`);
      console.log(`  Field: ${issue.field}`);
      console.log(`  Issue: ${issue.issue}`);
      if (issue.length > 0) {
        console.log(`  Value: "${issue.current.slice(0, 80)}${issue.current.length > 80 ? '...' : ''}"`);
      }
      console.log('');
    }

    if (issues.length > 15) {
      console.log(`  ... and ${issues.length - 15} more`);
    }
  }
}

main();
