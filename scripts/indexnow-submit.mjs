/**
 * IndexNow Bulk URL Submission
 * Submits all site URLs to Bing and Yandex for instant indexing.
 * Usage: node scripts/indexnow-submit.mjs
 */

const BASE_URL = 'https://newarkqualityroofing.com';
const KEY = '0b164d9594882048e914c781eab6616c';
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

// IndexNow endpoints
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

async function getAllUrls() {
  // Dynamic import of TS files via tsx
  const { services } = await import('../src/data/services.ts');
  const { cities } = await import('../src/data/cities.ts');
  const { combos } = await import('../src/data/combos.ts');
  const { comparisons } = await import('../src/data/comparisons.ts');
  const { articles } = await import('../src/data/articles.ts');
  const { corePages } = await import('../src/data/core-pages.ts');

  const urls = [
    // Homepage
    BASE_URL,
    // Core pages
    ...corePages.map((p) => `${BASE_URL}/${p.slug}`),
    // Services
    ...services.map((s) => `${BASE_URL}/${s.slug}`),
    // Cities
    ...cities.map((c) => `${BASE_URL}/roofing-in-${c.slug}-nj`),
    // Combos
    ...combos.map((c) => `${BASE_URL}/${c.slug}`),
    // Comparisons
    ...comparisons.map((c) => `${BASE_URL}/${c.slug}`),
    // Articles
    ...articles.map((a) => `${BASE_URL}/${a.slug}`),
  ];

  return urls;
}

async function submitBatch(endpoint, urlBatch) {
  const body = {
    host: 'newarkqualityroofing.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlBatch,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  return { status: res.status, ok: res.ok };
}

async function main() {
  const urls = await getAllUrls();
  console.log(`Found ${urls.length} URLs to submit\n`);

  // IndexNow accepts up to 10,000 URLs per request
  const BATCH_SIZE = 10000;

  for (const endpoint of ENDPOINTS) {
    const name = new URL(endpoint).hostname;
    console.log(`Submitting to ${name}...`);

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      try {
        const { status, ok } = await submitBatch(endpoint, batch);
        const label = ok ? 'OK' : 'ISSUE';
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${label} (HTTP ${status}) - ${batch.length} URLs`);
      } catch (err) {
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: FAILED - ${err.message}`);
      }
    }
    console.log();
  }

  console.log('Done!');
}

main().catch(console.error);
