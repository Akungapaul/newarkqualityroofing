/** Transparent before/after measurements for the 2026-09-26 CORA roadmap
 * implementation on /roof-repair-in-newark-nj (keyword "roof repair").
 * Extends the scripts/measure-cora-phase2.ts pattern: live production HTML
 * ("before") vs the local production build ("after"). A CORA rerun by the
 * owner remains the authoritative check; this only proves the adds landed.
 *
 * Run after `npm run build`:
 *   npx tsx scripts/measure-cora-260926.ts
 * Optional: CORA_LIVE_HTML=/path/to/live.html to use a saved live snapshot
 * instead of fetching (fetch falls back to this automatically on failure).
 */
import fs from 'node:fs';
import { parse } from 'node-html-parser';
import { coraPhase2LsiTerms } from '../src/data/cora-phase2-content';

const normalize = (value: string) =>
  value.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]+/g, ' ').trim();
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const countTerm = (text: string, term: string) =>
  [...normalize(text).matchAll(new RegExp(`(?<![a-z0-9'-])${escape(normalize(term))}(?![a-z0-9'-])`, 'g'))].length;

const variationSet = [
  'roof repair services', 'emergency roof repairs', 'emergency roof repair',
  'roof leak repair', 'flat roof repair', 'flashing repair', 'chimney repair',
  'gutter repair', 'best roof repair', 'roof repair costs', 'free roof repair',
  'metal roof repair', 'roof repair', 'roof', 'repair',
];

const socialDomains = [
  'www.youtube.com', 'www.instagram.com', 'twitter.com', 'www.facebook.com',
  'www.linkedin.com', 'maps.app.goo.gl', 'www.gaf.ca',
];

function metrics(html: string) {
  const root = parse(html);
  const visible = (node?: { text: string } | null) => (node?.text ?? '').replace(/\s+/g, ' ').trim();

  const title = visible(root.querySelector('title'));
  const metaDesc = root.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
  const ogType = root.querySelector('meta[property="og:type"]')?.getAttribute('content') ?? '';
  const twitterText = root
    .querySelectorAll('meta[name^="twitter:"]')
    .map((m) => m.getAttribute('content') ?? '')
    .join(' ');
  const ldJson = root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((s) => s.text)
    .join('\n');

  const headings = (tag: string) =>
    root.querySelectorAll(tag).map((h) => visible(h));
  const allHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].flatMap(headings);

  const bodyText = (() => {
    const clone = parse(html);
    clone.querySelectorAll('script,style').forEach((el) => el.remove());
    return visible(clone);
  })();

  const anchors = root.querySelectorAll('a[href]');
  const hrefs = anchors.map((a) => a.getAttribute('href') ?? '');
  const isExternal = (href: string) => {
    try {
      const u = new URL(href, 'https://newarkqualityroofing.com');
      return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname !== 'newarkqualityroofing.com' && !u.hostname.endsWith('.newarkqualityroofing.com');
    } catch {
      return false;
    }
  };
  const externalAnchors = anchors.filter((a) => isExternal(a.getAttribute('href') ?? ''));
  const nofollowExternal = externalAnchors.filter((a) =>
    (a.getAttribute('rel') ?? '').split(/\s+/).includes('nofollow'),
  );

  const images = root.querySelectorAll('img');
  const imagesNoAlt = images.filter((img) => {
    const alt = img.getAttribute('alt');
    return alt === undefined || alt.trim() === '';
  });

  const paragraphs = root.querySelectorAll('p').map((p) => visible(p)).filter(Boolean);
  const segmenter = new Intl.Segmenter('en', { granularity: 'sentence' });
  const sentences = paragraphs.flatMap((p) =>
    Array.from(segmenter.segment(p), ({ segment }) => segment).filter((s) => s.trim().length > 0),
  );
  const sentenceText = sentences.join(' ');
  const sentenceWords = sentences.reduce(
    (sum, s) => sum + normalize(s).split(' ').filter(Boolean).length, 0,
  );
  const lsiOccurrences = coraPhase2LsiTerms.reduce((sum, term) => sum + countTerm(sentenceText, term), 0);
  const lsiUnique = coraPhase2LsiTerms.filter((term) => countTerm(sentenceText, term) > 0).length;

  const styleText = root.querySelectorAll('style').map((s) => s.text).join(' ');
  const optionTexts = root.querySelectorAll('option').map((o) => visible(o));
  const valueAttrs = root
    .querySelectorAll('[value]')
    .map((el) => el.getAttribute('value') ?? '');
  const uTexts = root.querySelectorAll('u').map((u) => visible(u));
  const variationHits = (texts: string[]) =>
    variationSet.filter((v) => texts.some((t) => countTerm(t, v) > 0)).length;

  return {
    titleLength: title.length,
    titleHasRoofRepairServices: countTerm(title, 'roof repair services'),
    metaDescLength: metaDesc.length,
    metaDescRoofCount: countTerm(metaDesc, 'roof'),
    metaDescRoofRepairServices: countTerm(metaDesc, 'roof repair services'),
    ogType,
    twitterVariationHits: variationHits([twitterText]),
    metaGenerator: Boolean(root.querySelector('meta[name="generator"]')),
    googleSiteVerification: Boolean(root.querySelector('meta[name="google-site-verification"]')),
    h1Count: headings('h1').length,
    h1Text: headings('h1')[0] ?? '',
    questionHeadings: allHeadings.filter((h) => h.includes('?')).length,
    roofRepairServicesInH2: headings('h2').filter((h) => countTerm(h, 'roof repair services') > 0).length,
    roofRepairServicesInH3: headings('h3').filter((h) => countTerm(h, 'roof repair services') > 0).length,
    emergencyRoofRepairsInText: countTerm(bodyText, 'emergency roof repairs'),
    sentences: sentences.length,
    avgWordsPerSentence: sentences.length ? sentenceWords / sentences.length : 0,
    lsiOccurrencesInSentences: lsiOccurrences,
    lsiUniqueTermsInSentences: lsiUnique,
    images: images.length,
    imagesWithoutAlt: imagesNoAlt.length,
    absoluteUrlAnchors: hrefs.filter((h) => /^https?:\/\//i.test(h)).length,
    linksByDomain: Object.fromEntries(
      socialDomains.map((d) => [d, hrefs.filter((h) => h.includes(d)).length]),
    ),
    externalLinks: externalAnchors.length,
    nofollowExternalLinks: nofollowExternal.length,
    nofollowExternalPct: externalAnchors.length
      ? Math.round((1000 * nofollowExternal.length) / externalAnchors.length) / 10
      : 0,
    jsonLd: {
      areaServedOccurrences: (ldJson.match(/"areaServed"/g) ?? []).length,
      latitude: ldJson.includes('"latitude"'),
      longitude: ldJson.includes('"longitude"'),
      aggregateRating: ldJson.includes('AggregateRating'),
      worstRating: ldJson.includes('worstRating'),
    },
    microdataAreaServed: /itemprop="areaServed"/i.test(html),
    microformatsHCard: html.includes('h-card'),
    emailAddressOccurrences: (html.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ?? []).length,
    cssIncludes: root.querySelectorAll('link[rel="stylesheet"]').length,
    styleTagVariationHits: variationHits([styleText]),
    styleTagRoadmapVarHits: [
      'roof repair services', 'emergency roof repairs', 'flat roof repair',
      'roof leak repair', 'chimney repair', 'gutter repair', 'best roof repair',
      'roof repair costs', 'free roof repair', 'metal roof repair',
    ].filter((v) => countTerm(styleText, v) > 0).length,
    optionTagVariationHits: variationHits(optionTexts),
    valueAttrVariationHits: variationHits(valueAttrs),
    uTagVariationHits: variationHits(uTexts),
    trademarkSymbols: (bodyText.match(/[®™]/g) ?? []).length,
  };
}

async function main() {
  let liveHtml: string;
  try {
    liveHtml = await (await fetch('https://newarkqualityroofing.com/roof-repair-in-newark-nj')).text();
  } catch {
    const fallback = process.env.CORA_LIVE_HTML ?? '/home/hatch/workspace/vps-reports/live/roof-repair-live.html';
    liveHtml = fs.readFileSync(fallback, 'utf8');
  }
  const builtHtml = fs.readFileSync('.next/server/app/roof-repair-in-newark-nj.html', 'utf8');
  const before = metrics(liveHtml);
  const after = metrics(builtHtml);
  const numericDelta = (b: Record<string, unknown>, a: Record<string, unknown>) =>
    Object.fromEntries(
      Object.keys(a)
        .filter((k) => typeof a[k] === 'number' && typeof b[k] === 'number')
        .map((k) => [k, (a[k] as number) - (b[k] as number)]),
    );
  console.log(
    JSON.stringify(
      {
        method:
          'Normalized whole-term comparison of live production HTML with the local production build; CORA rerun remains authoritative.',
        before,
        after,
        delta: numericDelta(before as never, after as never),
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
