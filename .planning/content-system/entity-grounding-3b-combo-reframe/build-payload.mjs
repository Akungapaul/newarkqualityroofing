// Build the per-service author payload: group the 195 combo directAnswers by
// serviceId, attach the gold 2a service directAnswer. Emits _payload.json =
// array of 65 objects { serviceId, gold, newark, eastOrange, orange }.
import fs from 'fs';

const DIR = '.planning/content-system/entity-grounding-3b-combo-reframe';
const gold = JSON.parse(fs.readFileSync(`${DIR}/_gold.json`, 'utf8'));
const current = JSON.parse(fs.readFileSync(`${DIR}/_current.json`, 'utf8'));

// group current by serviceId -> { cityId: {directAnswer, hasCredentialTail} }
const byService = {};
for (const r of current) {
  (byService[r.serviceId] ??= {})[r.cityId] = {
    directAnswer: r.directAnswer,
    hasCredentialTail: r.hasCredentialTail,
  };
}

const CITY_KEY = { newark: 'newark', 'east-orange': 'eastOrange', orange: 'orange' };
const payload = [];
const problems = [];
for (const serviceId of Object.keys(byService)) {
  const g = gold[serviceId];
  if (!g) { problems.push(`no gold for ${serviceId}`); continue; }
  const cities = byService[serviceId];
  for (const c of ['newark', 'east-orange', 'orange']) {
    if (!cities[c]) problems.push(`${serviceId} missing ${c}`);
  }
  payload.push({
    serviceId,
    gold: g,
    newark: cities['newark']?.directAnswer ?? '',
    eastOrange: cities['east-orange']?.directAnswer ?? '',
    orange: cities['orange']?.directAnswer ?? '',
    newarkHasTail: cities['newark']?.hasCredentialTail ?? false,
    eastOrangeHasTail: cities['east-orange']?.hasCredentialTail ?? false,
    orangeHasTail: cities['orange']?.hasCredentialTail ?? false,
  });
}

if (problems.length) {
  console.error('PROBLEMS:\n' + problems.join('\n'));
  process.exit(1);
}

fs.writeFileSync(`${DIR}/_payload.json`, JSON.stringify(payload, null, 2));
console.log(`Wrote ${payload.length} service payloads -> _payload.json`);
