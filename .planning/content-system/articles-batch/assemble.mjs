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
const OUT = join(REPO, 'src', 'data', 'article-content', 'commercial-services.ts');

// Fixed identity (current commercial-services.ts) — agents never touch these.
const IDENTITY = {
  'commercial-roof-installation-signs':          { parentId: 'commercial-roof-installation', parentType: 'service', position: 1 },
  'commercial-roof-installation-cost-guide':     { parentId: 'commercial-roof-installation', parentType: 'service', position: 2 },
  'commercial-roof-installation-decision':       { parentId: 'commercial-roof-installation', parentType: 'service', position: 3 },
  'commercial-roof-repair-signs':                { parentId: 'commercial-roof-repair', parentType: 'service', position: 1 },
  'commercial-roof-repair-cost-guide':           { parentId: 'commercial-roof-repair', parentType: 'service', position: 2 },
  'commercial-roof-repair-decision':             { parentId: 'commercial-roof-repair', parentType: 'service', position: 3 },
  'commercial-roof-replacement-signs':           { parentId: 'commercial-roof-replacement', parentType: 'service', position: 1 },
  'commercial-roof-replacement-cost-guide':      { parentId: 'commercial-roof-replacement', parentType: 'service', position: 2 },
  'commercial-roof-replacement-decision':        { parentId: 'commercial-roof-replacement', parentType: 'service', position: 3 },
  'roof-thermal-imaging-inspections-signs':      { parentId: 'roof-thermal-imaging-inspections', parentType: 'service', position: 1 },
  'roof-thermal-imaging-inspections-cost-guide': { parentId: 'roof-thermal-imaging-inspections', parentType: 'service', position: 2 },
  'roof-thermal-imaging-inspections-decision':   { parentId: 'roof-thermal-imaging-inspections', parentType: 'service', position: 3 },
  'infrared-roof-leak-detection-signs':          { parentId: 'infrared-roof-leak-detection', parentType: 'service', position: 1 },
  'infrared-roof-leak-detection-cost-guide':     { parentId: 'infrared-roof-leak-detection', parentType: 'service', position: 2 },
  'infrared-roof-leak-detection-decision':       { parentId: 'infrared-roof-leak-detection', parentType: 'service', position: 3 },
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

// ─── Commercial Services Article Content ─────────────────────────────────────
// 5 services x 3 articles = 15 articles (parentType: 'service').
// commercial-roof-installation, commercial-roof-repair, commercial-roof-replacement,
// roof-thermal-imaging-inspections, infrared-roof-leak-detection.
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7), grounded in the
// committed parent gold service-content/commercial-services.ts.

export const commercialServicesArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
