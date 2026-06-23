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
const OUT = join(REPO, 'src', 'data', 'article-content', 'design-consultation.ts');

// Fixed identity (current design-consultation.ts) — agents never touch these.
const IDENTITY = {
  'custom-roof-design-consultation-signs':      { parentId: 'custom-roof-design-consultation', parentType: 'service', position: 1 },
  'custom-roof-design-consultation-cost-guide': { parentId: 'custom-roof-design-consultation', parentType: 'service', position: 2 },
  'custom-roof-design-consultation-decision':   { parentId: 'custom-roof-design-consultation', parentType: 'service', position: 3 },
  'historic-roof-restoration-signs':            { parentId: 'historic-roof-restoration', parentType: 'service', position: 1 },
  'historic-roof-restoration-cost-guide':       { parentId: 'historic-roof-restoration', parentType: 'service', position: 2 },
  'historic-roof-restoration-decision':         { parentId: 'historic-roof-restoration', parentType: 'service', position: 3 },
  'roof-ice-dam-prevention-signs':              { parentId: 'roof-ice-dam-prevention', parentType: 'service', position: 1 },
  'roof-ice-dam-prevention-cost-guide':         { parentId: 'roof-ice-dam-prevention', parentType: 'service', position: 2 },
  'roof-ice-dam-prevention-decision':           { parentId: 'roof-ice-dam-prevention', parentType: 'service', position: 3 },
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

// ─── Design & Consultation Article Content ──────────────────────────────────
// 3 services x 3 articles = 9 articles (parentType: 'service').
// custom-roof-design-consultation, historic-roof-restoration, roof-ice-dam-prevention.
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7).

export const designConsultationArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
