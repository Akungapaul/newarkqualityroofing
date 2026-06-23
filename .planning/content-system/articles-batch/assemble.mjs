// Deterministic assemble for the homepage CORE articles sub-batch.
// Reads _authored.json (the AUTHOR workflow result's `articles` array), merges the
// authored content fields with the FIXED identity fields (orchestrator-owned, never
// agent-authored), and emits src/data/article-content/homepage.ts.
// JSON.stringify => valid TS object literals => zero escaping bugs (hubs-batch lesson).
//
// Run: node .planning/content-system/articles-batch/assemble.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..', '..');
const AUTHORED = join(HERE, '_authored.json');
const OUT = join(REPO, 'src', 'data', 'article-content', 'homepage.ts');

// Fixed identity (current homepage.ts) — agents never touch these.
const IDENTITY = {
  'homepage-nj-roofing-guide':            { parentId: 'homepage', parentType: 'core', position: 1 },
  'homepage-finding-roofer-essex-county': { parentId: 'homepage', parentType: 'core', position: 2 },
  'homepage-nj-roofing-licensing-insurance': { parentId: 'homepage', parentType: 'core', position: 3 },
};
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

// ─── Homepage Article Content ─────────────────────────────────
// 3 core articles for the homepage (parentType: 'core', parentId: 'homepage').
// Broad NJ roofing guides, rewritten answer-first (semantic-content ruleset).

export const homepageArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
