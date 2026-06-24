// Deterministic assemble for the repair-maintenance articles sub-batch.
// Reads _authored.json (the AUTHOR result's `articles` array), merges the authored
// content fields with the FIXED identity fields (orchestrator-owned, never agent-authored),
// and emits src/data/article-content/repair-maintenance.ts.
// JSON.stringify => valid TS object literals => zero escaping bugs (hubs-batch lesson).
//
// Run: node .planning/content-system/articles-batch/assemble.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..', '..');
const AUTHORED = join(HERE, '_authored.json');
const OUT = join(REPO, 'src', 'data', 'article-content', 'repair-maintenance.ts');

// Fixed identity (current repair-maintenance.ts) — agents never touch these.
// 10 parent repair/maintenance services x 3 articles = 30.
const svc = (parentId) => ({ parentId, parentType: 'service' });
const SERVICES = [
  'roof-repair',
  'roof-replacement',
  'emergency-roof-repair',
  'roof-inspection',
  'roof-maintenance-programs',
  'roof-leak-repair',
  'storm-damage-roof-repair',
  'hail-damage-roof-repair',
  'wind-damage-roof-repair',
  'roof-cleaning-moss-removal',
];
const IDENTITY = {};
for (const id of SERVICES) {
  IDENTITY[`${id}-signs`] = { ...svc(id), position: 1 };
  IDENTITY[`${id}-cost-guide`] = { ...svc(id), position: 2 };
  IDENTITY[`${id}-decision`] = { ...svc(id), position: 3 };
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

// ─── Repair & Maintenance Article Content ────────────────────────────────────
// 10 services x 3 articles = 30 articles (parentType: 'service').
// roof-repair, roof-replacement, emergency-roof-repair, roof-inspection,
// roof-maintenance-programs, roof-leak-repair, storm-damage-roof-repair,
// hail-damage-roof-repair, wind-damage-roof-repair, roof-cleaning-moss-removal.
// signs / cost-guide / decision.
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7), grounded in the
// committed parent gold service-content/repair-maintenance.ts.

export const repairMaintenanceArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
