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
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

async function getAllUrls() {
  const { services } = await import('../src/data/services.ts');
  const { cities } = await import('../src/data/cities.ts');
  const { combos } = await import('../src/data/combos.ts');
  const { comparisons } = await import('../src/data/comparisons.ts');
  const { articles } = await import('../src/data/articles.ts');
  const { corePages } = await import('../src/data/core-pages.ts');

  const urls = [
    BASE_URL,
    ...corePages.map((p) => `${BASE_URL}/${p.slug}`),
    ...services.map((s) => `${BASE_URL}/${s.slug}`),
    ...cities.map((c) => `${BASE_URL}/roofing-in-${c.slug}-nj`),
    ...combos.map((c) => `${BASE_URL}/${c.slug}`),
    ...comparisons.map((c) => `${BASE_URL}/${c.slug}`),
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const urls = await getAllUrls();
  console.log(`Found ${urls.length} URLs to submit\n`);

  // Use smaller batches for compatibility
  const BATCH_SIZE = 500;

  for (const endpoint of ENDPOINTS) {
    const name = new URL(endpoint).hostname;
    console.log(`Submitting to ${name}...`);
    let totalOk = 0;

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      try {
        const { status, ok } = await submitBatch(endpoint, batch);
        const label = ok ? 'OK' : `ISSUE (${status})`;
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${label} - ${batch.length} URLs`);
        if (ok) totalOk += batch.length;
      } catch (err) {
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: FAILED - ${err.message}`);
      }
      // Small delay between batches
      await sleep(1000);
    }
    console.log(`  Total accepted: ${totalOk}/${urls.length}\n`);
  }

  // Ping Google to re-read sitemaps
  console.log('Pinging Google sitemap...');
  try {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/sitemap.xml`)}`;
    const res = await fetch(pingUrl);
    console.log(`  Google ping: ${res.ok ? 'OK' : `ISSUE (${res.status})`}\n`);
  } catch (err) {
    console.log(`  Google ping: FAILED - ${err.message}\n`);
  }

  console.log('Done!');
}

main().catch(console.error);
