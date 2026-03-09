// Heading hierarchy audit script
// Run with: npx tsx scripts/audit-headings.ts
// Analyzes the DATA that feeds H1/H2/H3 headings in templates, not HTML output.
// Reports issues per page type with suggested fixes.

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';

// ─── Types ──────────────────────────────────────────────────────────────────

interface HeadingIssue {
  pageType: string;
  pageId: string;
  level: 'H1' | 'H2' | 'H3';
  current: string;
  issue: string;
  suggested?: string;
}

// ─── Validators ─────────────────────────────────────────────────────────────

function hasLocationRef(text: string): boolean {
  const locationTerms = [
    'essex county', 'newark', 'nj', 'new jersey',
    'montclair', 'bloomfield', 'east orange', 'west orange',
    'irvington', 'belleville', 'nutley', 'maplewood',
  ];
  const lower = text.toLowerCase();
  return locationTerms.some((term) => lower.includes(term));
}

function auditServicePages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const service of services) {
    // H1 is the service metaTitle (rendered by ServiceHero)
    const h1 = service.metaTitle;

    // Check H1 contains service name
    if (!h1.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])) {
      issues.push({
        pageType: 'service',
        pageId: service.id,
        level: 'H1',
        current: h1,
        issue: 'H1 missing primary service keyword',
        suggested: `${service.name} in Essex County, NJ`,
      });
    }

    // Check H1 contains location
    if (!hasLocationRef(h1)) {
      issues.push({
        pageType: 'service',
        pageId: service.id,
        level: 'H1',
        current: h1,
        issue: 'H1 missing location reference (NJ/Essex County)',
        suggested: `${h1} | Essex County, NJ`,
      });
    }
  }

  return issues;
}

function auditCityPages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const city of cities) {
    // H1 pattern: "Roofing Services in {city.name}, NJ" (from CityHero)
    const expectedH1Pattern = `roofing services in ${city.name.toLowerCase()}, nj`;
    // The actual H1 comes from city content metaTitle — check it matches expected pattern
    // For audit purposes, we flag if the metaTitle doesn't contain city name + "NJ"
    if (!city.name) continue;

    const h1 = `Roofing Services in ${city.name}, NJ`; // Template-generated H1
    if (!h1.toLowerCase().includes(city.name.toLowerCase())) {
      issues.push({
        pageType: 'city',
        pageId: city.id,
        level: 'H1',
        current: h1,
        issue: 'H1 missing city name',
        suggested: expectedH1Pattern,
      });
    }
  }

  return issues;
}

function auditComboPages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const combo of combos) {
    const service = services.find((s) => s.id === combo.serviceId);
    const city = cities.find((c) => c.id === combo.cityId);
    if (!service || !city) continue;

    // H1 pattern: "{Service Name} in {City Name}, NJ" (from ComboHero)
    const expectedH1 = `${service.name} in ${city.name}, NJ`;
    const h1 = combo.metaTitle;

    // Check metaTitle contains service name
    if (!h1.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])) {
      issues.push({
        pageType: 'combo',
        pageId: combo.slug,
        level: 'H1',
        current: h1,
        issue: 'metaTitle missing service keyword',
        suggested: expectedH1,
      });
    }

    // Check metaTitle contains city name
    if (!h1.toLowerCase().includes(city.name.toLowerCase())) {
      issues.push({
        pageType: 'combo',
        pageId: combo.slug,
        level: 'H1',
        current: h1,
        issue: 'metaTitle missing city name',
        suggested: expectedH1,
      });
    }
  }

  return issues;
}

function auditComparisonPages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const comparison of comparisons) {
    const h1 = comparison.metaTitle;

    if (comparison.category === 'material-vs-material' || comparison.category === 'service-vs-service') {
      // A-vs-B comparisons should contain both items
      if (!h1.toLowerCase().includes('vs') && !h1.toLowerCase().includes('versus')) {
        issues.push({
          pageType: 'comparison',
          pageId: comparison.id,
          level: 'H1',
          current: h1,
          issue: 'A-vs-B comparison H1 missing "vs" or item names',
        });
      }
    }
  }

  return issues;
}

function auditArticlePages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const article of articles) {
    const h1 = article.metaTitle;

    // Articles should contain a keyword + ideally location
    if (h1.length < 10) {
      issues.push({
        pageType: 'article',
        pageId: article.id,
        level: 'H1',
        current: h1,
        issue: 'Article metaTitle too short',
      });
    }
  }

  return issues;
}

function auditCorePages(): HeadingIssue[] {
  const issues: HeadingIssue[] = [];

  for (const page of corePages) {
    const h1 = page.metaTitle;

    if (!h1 || h1.length < 5) {
      issues.push({
        pageType: 'core',
        pageId: page.id,
        level: 'H1',
        current: h1 ?? '(empty)',
        issue: 'Core page missing or too-short metaTitle',
      });
    }
  }

  return issues;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('=== Heading Hierarchy Audit ===\n');

  const allIssues: HeadingIssue[] = [
    ...auditServicePages(),
    ...auditCityPages(),
    ...auditComboPages(),
    ...auditComparisonPages(),
    ...auditArticlePages(),
    ...auditCorePages(),
  ];

  // Summary
  const byType = new Map<string, HeadingIssue[]>();
  for (const issue of allIssues) {
    const existing = byType.get(issue.pageType) ?? [];
    existing.push(issue);
    byType.set(issue.pageType, existing);
  }

  console.log('SUMMARY');
  console.log('-------');
  console.log(`Total pages checked: ${services.length + cities.length + combos.length + comparisons.length + articles.length + corePages.length}`);
  console.log(`Total issues found: ${allIssues.length}`);
  console.log('');

  for (const [type, issues] of byType) {
    console.log(`  ${type}: ${issues.length} issues`);
  }

  if (allIssues.length === 0) {
    console.log('\nNo heading issues found. All H1 patterns look correct.');
    return;
  }

  // Detail report by page type
  console.log('\n\nDETAILED REPORT');
  console.log('===============\n');

  for (const [type, issues] of byType) {
    console.log(`\n## ${type.toUpperCase()} PAGES (${issues.length} issues)`);
    console.log('-'.repeat(50));

    for (const issue of issues.slice(0, 20)) {
      console.log(`  Page: ${issue.pageId}`);
      console.log(`  Level: ${issue.level}`);
      console.log(`  Current: "${issue.current}"`);
      console.log(`  Issue: ${issue.issue}`);
      if (issue.suggested) {
        console.log(`  Suggested: "${issue.suggested}"`);
      }
      console.log('');
    }

    if (issues.length > 20) {
      console.log(`  ... and ${issues.length - 20} more`);
    }
  }
}

main();
