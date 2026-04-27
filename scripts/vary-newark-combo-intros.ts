import { services } from '@/data/services';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const leadPatterns = [
  (service: string) => `Need ${service.toLowerCase()} in a city where row houses, flat roofs, and commercial blocks share tight rooflines? `,
  () => 'More than half of Newark roof problems trace back to age, access, drainage, or weather exposure. ',
  (service: string) => `When ${service.toLowerCase()} cannot wait, the first priority is controlling water before it spreads. `,
  () => 'For generations, Newark buildings have mixed historic masonry, tight lots, and modern roofing systems on the same blocks. ',
  (service: string) => `Our crews approach ${service.toLowerCase()} with service-specific diagnostics, documentation, and material planning. `,
  () => 'Picture a Newark roof after a hard coastal storm: wind-driven rain, blocked drains, and aging flashing all competing at once. ',
];

const seenByCategory = new Map<string, number>();

for (const service of services) {
  const file = join(root, 'src/data/combo-content/newark', `${service.slug}.ts`);
  if (!existsSync(file)) continue;

  const categoryIndex = seenByCategory.get(service.category) ?? 0;
  seenByCategory.set(service.category, categoryIndex + 1);

  const lead = leadPatterns[categoryIndex % leadPatterns.length](service.name);
  let source = readFileSync(file, 'utf8');

  if (source.includes(lead)) continue;

  source = source.replace(
    /(overview:\s*\[\s*\n\s*')([^']+)/,
    (_match, prefix: string, firstParagraph: string) => `${prefix}${lead}${firstParagraph}`,
  );

  writeFileSync(file, source);
}

console.log('Updated Newark combo intro lead variation.');
