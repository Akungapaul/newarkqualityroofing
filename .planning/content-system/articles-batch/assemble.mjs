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
const OUT = join(REPO, 'src', 'data', 'article-content', 'energy-solar.ts');

// Fixed identity (current energy-solar.ts) — agents never touch these.
const IDENTITY = {
  'solar-panel-roofing-installation-signs':       { parentId: 'solar-panel-roofing-installation', parentType: 'service', position: 1 },
  'solar-panel-roofing-installation-cost-guide':  { parentId: 'solar-panel-roofing-installation', parentType: 'service', position: 2 },
  'solar-panel-roofing-installation-decision':    { parentId: 'solar-panel-roofing-installation', parentType: 'service', position: 3 },
  'solar-shingle-installation-signs':             { parentId: 'solar-shingle-installation', parentType: 'service', position: 1 },
  'solar-shingle-installation-cost-guide':        { parentId: 'solar-shingle-installation', parentType: 'service', position: 2 },
  'solar-shingle-installation-decision':          { parentId: 'solar-shingle-installation', parentType: 'service', position: 3 },
  'energy-efficient-roofing-solutions-signs':      { parentId: 'energy-efficient-roofing-solutions', parentType: 'service', position: 1 },
  'energy-efficient-roofing-solutions-cost-guide': { parentId: 'energy-efficient-roofing-solutions', parentType: 'service', position: 2 },
  'energy-efficient-roofing-solutions-decision':   { parentId: 'energy-efficient-roofing-solutions', parentType: 'service', position: 3 },
  'silicone-roof-coating-signs':                  { parentId: 'silicone-roof-coating', parentType: 'service', position: 1 },
  'silicone-roof-coating-cost-guide':             { parentId: 'silicone-roof-coating', parentType: 'service', position: 2 },
  'silicone-roof-coating-decision':               { parentId: 'silicone-roof-coating', parentType: 'service', position: 3 },
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

// ─── Energy & Solar Article Content ─────────────────────────────────────────
// 4 services x 3 articles = 12 articles (parentType: 'service').
// solar-panel-roofing-installation, solar-shingle-installation,
// energy-efficient-roofing-solutions, silicone-roof-coating.
// Rewritten answer-first + de-fabbed + 2026-currency-corrected (semantic-content ruleset v1.7).

export const energySolarArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
