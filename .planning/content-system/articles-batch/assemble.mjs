// Deterministic assemble for the comparisons articles sub-batch (9/9, FINAL).
// Reads _authored.json (the merged `articles` array), merges the authored content
// fields with the FIXED identity fields (orchestrator-owned, never agent-authored),
// and emits src/data/article-content/comparisons.ts.
// JSON.stringify => valid TS object literals => zero escaping bugs.
//
// Run: node .planning/content-system/articles-batch/assemble.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..', '..');
const AUTHORED = join(HERE, '_authored.json');
const OUT = join(REPO, 'src', 'data', 'article-content', 'comparisons.ts');

// Fixed identity (current comparisons.ts) — agents never touch these.
// 30 comparisons x 2 articles = 60. position 1 = buyers-guide, position 2 = expert-picks.
const COMPARISONS = [
  'asphalt-shingles-vs-metal-roofing',
  'slate-vs-tile-roofing',
  'tpo-vs-epdm-roofing',
  'metal-vs-tile-roofing',
  'asphalt-vs-slate-roofing',
  'wood-shake-vs-asphalt-shingles',
  'pvc-vs-tpo-roofing',
  'standing-seam-vs-corrugated-metal',
  'modified-bitumen-vs-tpo',
  'rubber-roofing-vs-tpo',
  'cedar-shake-vs-wood-shingle',
  'built-up-roofing-vs-modified-bitumen',
  'spray-foam-vs-tpo',
  'green-roof-vs-traditional-roofing',
  'solar-shingles-vs-solar-panels',
  'roof-repair-vs-replacement',
  'roof-coating-vs-replacement',
  'roof-overlay-vs-tear-off',
  'patching-vs-full-roof-repair',
  'preventive-maintenance-vs-emergency-repair',
  'best-roofing-material-nj-weather',
  'best-commercial-roofing-material',
  'best-roofing-for-flat-roofs',
  'best-roofing-for-historic-homes-nj',
  'cheapest-vs-most-durable-roofing',
  'most-energy-efficient-roofing-materials',
  'architectural-vs-3-tab-shingles',
  'diy-vs-professional-roof-repair',
  'best-roofing-for-essex-county-colonial-homes',
  'roof-warranty-comparison-guide',
];
const IDENTITY = {};
for (const c of COMPARISONS) {
  IDENTITY[`${c}-buyers-guide`] = { parentId: c, parentType: 'comparison', position: 1 };
  IDENTITY[`${c}-expert-picks`] = { parentId: c, parentType: 'comparison', position: 2 };
}
const ORDER = Object.keys(IDENTITY);

const raw = JSON.parse(readFileSync(AUTHORED, 'utf8'));
const authored = Array.isArray(raw) ? raw : raw.articles;
const byId = new Map(authored.map((a) => [a.articleId, a]));

for (const id of ORDER) {
  if (!byId.has(id)) { console.error(`MISSING authored content for ${id}`); process.exit(1); }
}

const objects = ORDER.map((id) => {
  const a = byId.get(id);
  return {
    articleId: id,
    parentId: IDENTITY[id].parentId,
    parentType: IDENTITY[id].parentType,
    position: IDENTITY[id].position,
    directAnswer: a.directAnswer,
    intro: a.intro,
    sections: a.sections.map((s) => ({ heading: s.heading, body: s.body })),
    conclusion: a.conclusion,
    ctaHeading: a.ctaHeading,
    ctaText: a.ctaText,
    metaDescription: a.metaDescription,
  };
});

const header = `import type { ArticleContent } from './schema';

// ─── Comparison Article Content ─────────────────────────────────────────────
// 30 comparisons x 2 articles each = 60 articles (parentType: 'comparison').
// Position 1: buyer's guide (decision framework) — H1 "Which Is Better: A vs B?".
// Position 2: expert picks (contractor recommendation) — H1 "What Do NJ Roofers Recommend for A vs B?".
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7), grounded in the
// committed parent gold comparison-content/{material-vs-material,service-vs-service,decision-helper}.ts.

export const comparisonArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
