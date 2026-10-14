import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSlugs, getPageDataBySlug } from '@/data/slug-registry';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { getCityContent } from '@/data/city-content';
import { getComboContent } from '@/data/combo-content';
import { getComparisonContent } from '@/data/comparison-content';
import { generateCityPageSlug, generateServicePageSlug } from '@/lib/slug-utils';
import { isNoindex, isRedirect } from '@/data/url-classification';
import { SEO_CONFIG } from '@/lib/seo-config';
import { getOGImage } from '@/data/image-manifest';
import { buildServiceDescription, buildCityDescription } from '@/lib/seo-utils';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getSurferPage } from '@/lib/surfer-verbatim';
import { comboSlugPhrase } from '@/lib/slug-phrase';
import {
  coraMaplewoodTitle,
  coraMaplewoodMetaDescription,
  coraMaplewoodMetaKeywords,
} from '@/data/cora-261012-maplewood-content';
import {
  coraMontclairTitle,
  coraMontclairMetaDescription,
  coraMontclairMetaKeywords,
} from '@/data/cora-261012-montclair-content';
import { coraMontclairPhraseOgSiteName } from '@/data/cora-261013-montclair-content';
import {
  coraEastOrangeTitle,
  coraEastOrangeMetaDescription,
  coraEastOrangeMetaKeywords,
} from '@/data/cora-261012-east-orange-content';
import {
  coraLivingstonTitle,
  coraLivingstonMetaDescription,
  coraLivingstonMetaKeywords,
} from '@/data/cora-261012-livingston-content';
import {
  coraRoselandTitle,
  coraRoselandMetaDescription,
  coraRoselandMetaKeywords,
} from '@/data/cora-261012-roseland-content';
import {
  coraIrvingtonTitle,
  coraIrvingtonMetaDescription,
  coraIrvingtonMetaKeywords,
} from '@/data/cora-261012-irvington-content';
import {
  coraNutleyTitle,
  coraNutleyMetaDescription,
  coraNutleyMetaKeywords,
} from '@/data/cora-261013-nutley-content';
import {
  coraEssexFellsTitle,
  coraEssexFellsMetaKeywords,
} from '@/data/cora-261013-essex-fells-content';
import {
  coraVeronaTitle,
  coraVeronaMetaDescription,
  coraVeronaMetaKeywords,
} from '@/data/cora-261013-verona-content';
import {
  coraBloomfieldTitle,
  coraBloomfieldMetaDescription,
  coraBloomfieldMetaKeywords,
} from '@/data/cora-261013-bloomfield-content';
import {
  coraCaldwellTitle,
  coraCaldwellMetaDescription,
  coraCaldwellMetaKeywords,
} from '@/data/cora-261013-caldwell-content';
import {
  coraBellevilleTitle,
  coraBellevilleMetaDescription,
  coraBellevilleMetaKeywords,
} from '@/data/cora-261013-belleville-content';
import {
  coraNorthCaldwellTitle,
  coraNorthCaldwellMetaDescription,
  coraNorthCaldwellMetaKeywords,
} from '@/data/cora-261013-north-caldwell-content';
import {
  coraOrangeTitle,
  coraOrangeMetaDescription,
  coraOrangeMetaKeywords,
} from '@/data/cora-261013-orange-content';
import {
  coraFairfieldMetaDescription,
  coraFairfieldMetaKeywords,
  coraFairfieldTitle,
} from '@/data/cora-261013-fairfield-content';
import {
  coraWestOrangeMetaDescription,
  coraWestOrangeMetaKeywords,
  coraWestOrangeTitle,
} from '@/data/cora-261014-west-orange-content';
import {
  coraMillburnMetaDescription,
  coraMillburnMetaKeywords,
  coraMillburnTitle,
} from '@/data/cora-261014-millburn-content';
import {
  coraSouthOrangeMetaDescription,
  coraSouthOrangeMetaKeywords,
  coraSouthOrangeTitle,
} from '@/data/cora-261014-south-orange-content';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import CityTemplate from '@/components/templates/CityTemplate';
import ComboTemplate from '@/components/templates/ComboTemplate';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import ArticleTemplate from '@/components/templates/ArticleTemplate';
import CoreTemplate from '@/components/templates/CoreTemplate';

// ─── SSG: Generate all static pages at build time ────────────────────────────

// Slug types served by their OWN dedicated app/ route segments (the glossary and
// the 6 hub scaffolds), not by this flat [slug] dispatcher — whose switch has no
// case for them. Excluding them here stops the dynamic route from double-claiming
// those paths and shipping a dead notFound() fall-through if a dedicated route is
// ever removed/changed (CR-01). They stay registered for getAllSlugs/validate-flat-urls.
const DEDICATED_ROUTE_TYPES = new Set(['hub', 'glossary']);

export async function generateStaticParams() {
  // D-05: redirected combo slugs (168) are NOT prerendered — next.config.ts 301s
  // them before the route resolves. Excluding them here keeps the prerender set
  // and the sitemap aligned (redirected slugs appear in neither).
  return getAllSlugs()
    .filter((slug) => {
      if (isRedirect(slug)) return false;
      const entry = getPageDataBySlug(slug);
      return entry !== undefined && !DEDICATED_ROUTE_TYPES.has(entry.type);
    })
    .map((slug) => ({ slug }));
}

// Reject unknown slugs with 404
export const dynamicParams = false;

// ─── Metadata ────────────────────────────────────────────────────────────────

// Owner rule (2026-09-24): every page's <title> is its H1, character for
// character. Each case below takes its title from the same source the page's
// hero renders as the H1. The one exception is /roof-repair-in-newark-nj,
// which the owner asked to leave exactly as it is.
const TITLE_H1_EXCLUDE = new Set(['roof-repair']);

/** Pages that should have robots noindex */
const NOINDEX_PAGES = new Set(['thank-you', 'privacy-policy']);

/** Build OG metadata for a page (uses per-page OG image when available, otherwise shared default) */
function buildOG(
  title: string,
  description: string,
  slug: string,
  type: 'website' | 'article' = 'website',
  ogImagePath?: string,
  siteNameOverride?: string
) {
  return {
    title,
    description,
    url: `/${slug}`,
    siteName: siteNameOverride ?? SEO_CONFIG.SITE_NAME,
    type,
    images: [
      ogImagePath
        ? { url: ogImagePath, width: 1200, height: 630 }
        : { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageDataBySlug(slug);
  if (!pageData) return {};

  switch (pageData.type) {
    case 'service': {
      const service = services.find((s) => s.id === pageData.serviceId);
      if (!service) return {};
      const serviceOg = getOGImage('service', service.id);
      const serviceDesc = buildServiceDescription(service);
      const serviceOgDescription = service.id === 'roof-repair'
        ? `${serviceDesc} Roof repair contractor.`
        : serviceDesc;
      const servicePageSlug = generateServicePageSlug(service.slug);
      const serviceSurfer = getSurferPage(servicePageSlug);
      const serviceTitle = TITLE_H1_EXCLUDE.has(service.id)
        ? service.metaTitle
        : serviceSurfer?.h1 ?? HEADING_CONFIG.serviceH1Overrides[service.id] ?? HEADING_CONFIG.service.h1(service.name);
      const serviceDescription = serviceSurfer?.metaDescription ?? serviceDesc;
      const isRoofRepair = service.id === 'roof-repair';
      return {
        title: { absolute: serviceTitle },
        description: serviceDescription,
        // Emitted only for services that declare it (currently roof-repair).
        // Google has ignored the keywords tag since 2009 — this is here because
        // the client's on-page tool scores it, not for ranking value.
        keywords: service.metaKeywords,
        alternates: { canonical: `/${servicePageSlug}` },
        // CORA 2026-09-26 line 43: OpenGraph type "article" for this page only.
        openGraph: buildOG(serviceTitle, serviceSurfer?.metaDescription ?? serviceOgDescription, servicePageSlug, isRoofRepair ? 'article' : 'website', serviceOg?.path ?? undefined),
        ...(isRoofRepair
          ? {
              // CORA 2026-09-26 lines 32 (variations in Twitter meta content),
              // 55 (Google site verification meta — same property token as
              // public/google12bec62df3c068a7.html), 62 (meta generator tag).
              // Scoped to /roof-repair-in-newark-nj only.
              twitter: {
                card: 'summary_large_image' as const,
                title: serviceTitle,
                description:
                  'Roof repair services in Newark, NJ: roof repair, roof leak repair, flat roof repair, flashing repair, and emergency roof repair with free written estimates from Newark Quality Roofing.',
                images: [serviceOg?.path ?? SEO_CONFIG.OG_IMAGE.url],
              },
              verification: { google: '12bec62df3c068a7' },
              generator: 'Next.js',
            }
          : {}),
      };
    }
    case 'city': {
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!city) return {};
      const cityContent = getCityContent(city.id);
      const citySlug = generateCityPageSlug(city.slug);
      const cityOg = getOGImage('city', city.id);
      const citySurfer = getSurferPage(citySlug);
      const cityDesc = citySurfer?.metaDescription ?? buildCityDescription(cityContent, city);
      const cityTitle = HEADING_CONFIG.city.h1(city.name);
      return {
        title: { absolute: cityTitle },
        description: cityDesc,
        alternates: { canonical: `/${citySlug}` },
        openGraph: buildOG(cityTitle, cityDesc, citySlug, 'website', cityOg?.path ?? undefined),
      };
    }
    case 'combo': {
      const combo = combos.find(
        (c) => c.serviceId === pageData.serviceId && c.cityId === pageData.cityId
      );
      if (!combo) return {};
      // Use hand-written metaDescription from combo content when available
      let comboDescription = combo.metaDescription;
      try {
        const comboContent = getComboContent(combo.serviceId, combo.cityId);
        if (comboContent.metaDescription) {
          comboDescription = comboContent.metaDescription;
        }
      } catch {
        // No hand-written content for this combo -- use auto-generated description
      }
      const comboSurfer = getSurferPage(combo.slug);
      if (comboSurfer?.metaDescription) comboDescription = comboSurfer.metaDescription;
      // Owner rule (2026-10-04): combo title = H1 = the slug-derived
      // "[Keyword] [City], NJ" phrase (src/lib/slug-phrase.ts), character for
      // character — no Surfer H1 or service.name "and"-insertion variants.
      let comboTitle = comboSlugPhrase(combo.slug);
      // CORA 2026-10-12 (Maplewood only): title-tag / meta-description /
      // meta-keywords edits from the roof_repair_maplewood roadmap. Direct
      // title/meta edits are the prescribed treatment for those lines; the
      // H1 rendered by ComboTemplate still uses the slug phrase untouched,
      // and the slug itself does not change. Scoped to this one slug —
      // every other combo's metadata is computed exactly as before.
      const isCoraMaplewood = combo.slug === 'roof-repair-maplewood-nj';
      if (isCoraMaplewood) {
        comboTitle = coraMaplewoodTitle;
        comboDescription = coraMaplewoodMetaDescription;
      }
      // CORA 2026-10-12 (Montclair only): same treatment from the
      // roof_repair_montclair roadmap — title/meta/keywords for this slug
      // only; H1 and slug untouched, every other combo unchanged.
      const isCoraMontclair = combo.slug === 'roof-repair-montclair-nj';
      if (isCoraMontclair) {
        comboTitle = coraMontclairTitle;
        comboDescription = coraMontclairMetaDescription;
      }
      // CORA 2026-10-12 (East Orange only): same treatment from the
      // roof_repair_east_orange roadmap — title/meta/keywords for this
      // slug only; H1 and slug untouched, every other combo unchanged.
      const isCoraEastOrange = combo.slug === 'roof-repair-east-orange-nj';
      if (isCoraEastOrange) {
        comboTitle = coraEastOrangeTitle;
        comboDescription = coraEastOrangeMetaDescription;
      }
      // CORA 2026-10-12 (Livingston only): same treatment from the
      // roof_repair_livingston roadmap — title/meta/keywords for this
      // slug only; H1 and slug untouched, every other combo unchanged.
      const isCoraLivingston = combo.slug === 'roof-repair-livingston-nj';
      if (isCoraLivingston) {
        comboTitle = coraLivingstonTitle;
        comboDescription = coraLivingstonMetaDescription;
      }
      // CORA 2026-10-12 (Roseland only): same treatment from the
      // roof_repair_roseland roadmap — title/meta/keywords for this slug
      // only; H1 and slug untouched, every other combo unchanged.
      const isCoraRoseland = combo.slug === 'roof-repair-roseland-nj';
      if (isCoraRoseland) {
        comboTitle = coraRoselandTitle;
        comboDescription = coraRoselandMetaDescription;
      }
      // CORA 2026-10-12 (Irvington only): same treatment from the
      // roof_repair_irvington roadmap — title/meta/keywords for this slug
      // only; H1 and slug untouched, every other combo unchanged.
      const isCoraIrvington = combo.slug === 'roof-repair-irvington-nj';
      if (isCoraIrvington) {
        comboTitle = coraIrvingtonTitle;
        comboDescription = coraIrvingtonMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Nutley only — this city's FIRST
      // Cora pass): title/meta/keywords edits from the
      // roof_repair_nutley_nj phrase roadmap. Direct title/meta edits
      // are the prescribed treatment for those lines; the H1 rendered
      // by ComboTemplate still uses the slug phrase untouched, and
      // the slug itself does not change. Scoped to this one slug —
      // every other combo's metadata is computed exactly as before.
      const isCoraNutley = combo.slug === 'roof-repair-nutley-nj';
      if (isCoraNutley) {
        comboTitle = coraNutleyTitle;
        comboDescription = coraNutleyMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Essex Fells only — this city's
      // FIRST Cora pass): the title is rewritten to exactly 49
      // characters (Search Result Link Text Length +22; the roadmap's
      // title entity/variation lines ride the same edit). This roadmap
      // carries NO meta-description line among its approved set, so the
      // description is NOT overridden here. The H1 rendered by
      // ComboTemplate still uses the slug phrase untouched, and the
      // slug itself does not change. Scoped to this one slug only.
      const isCoraEssexFells = combo.slug === 'roof-repair-essex-fells-nj';
      if (isCoraEssexFells) {
        comboTitle = coraEssexFellsTitle;
      }
      // CORA 2026-10-13 phrase pass (Verona only — this city's FIRST
      // Cora pass): title/meta/keywords edits from the
      // roof_repair_verona_nj phrase roadmap. Direct title/meta edits
      // are the prescribed treatment for those lines; the H1 rendered
      // by ComboTemplate still uses the slug phrase untouched, and
      // the slug itself does not change. Scoped to this one slug —
      // every other combo's metadata is computed exactly as before.
      const isCoraVerona = combo.slug === 'roof-repair-verona-nj';
      if (isCoraVerona) {
        comboTitle = coraVeronaTitle;
        comboDescription = coraVeronaMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Bloomfield only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_bloomfield_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the H1
      // rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped to
      // this one slug — every other combo's metadata is computed
      // exactly as before.
      const isCoraBloomfield = combo.slug === 'roof-repair-bloomfield-nj';
      if (isCoraBloomfield) {
        comboTitle = coraBloomfieldTitle;
        comboDescription = coraBloomfieldMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Caldwell only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_caldwell_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the
      // H1 rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped to
      // this one slug — every other combo's metadata is computed
      // exactly as before.
      const isCoraCaldwell = combo.slug === 'roof-repair-caldwell-nj';
      if (isCoraCaldwell) {
        comboTitle = coraCaldwellTitle;
        comboDescription = coraCaldwellMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Belleville only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_belleville_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the H1
      // rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped to
      // this one slug — every other combo's metadata is computed
      // exactly as before.
      const isCoraBelleville = combo.slug === 'roof-repair-belleville-nj';
      if (isCoraBelleville) {
        comboTitle = coraBellevilleTitle;
        comboDescription = coraBellevilleMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (North Caldwell only — this
      // city's FIRST Cora pass): title/meta/keywords edits from
      // the roof_repair_north_caldwell_nj phrase roadmap. Direct
      // title/meta edits are the prescribed treatment for those
      // lines; the H1 rendered by ComboTemplate still uses the
      // slug phrase untouched, and the slug itself does not
      // change. Scoped to this one slug — every other combo's
      // metadata is computed exactly as before.
      const isCoraNorthCaldwell = combo.slug === 'roof-repair-north-caldwell-nj';
      if (isCoraNorthCaldwell) {
        comboTitle = coraNorthCaldwellTitle;
        comboDescription = coraNorthCaldwellMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Orange only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_orange_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the
      // H1 rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped
      // to this one slug — every other combo's metadata is
      // computed exactly as before.
      const isCoraOrange = combo.slug === 'roof-repair-orange-nj';
      if (isCoraOrange) {
        comboTitle = coraOrangeTitle;
        comboDescription = coraOrangeMetaDescription;
      }
      // CORA 2026-10-13 phrase pass (Fairfield only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_fairfield_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the
      // H1 rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped
      // to this one slug — every other combo's metadata is
      // computed exactly as before.
      const isCoraFairfield = combo.slug === 'roof-repair-fairfield-nj';
      if (isCoraFairfield) {
        comboTitle = coraFairfieldTitle;
        comboDescription = coraFairfieldMetaDescription;
      }
      // CORA 2026-10-14 phrase pass (West Orange only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_west_orange_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the H1
      // rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped to
      // this one slug — every other combo's metadata is computed
      // exactly as before.
      const isCoraWestOrange = combo.slug === 'roof-repair-west-orange-nj';
      if (isCoraWestOrange) {
        comboTitle = coraWestOrangeTitle;
        comboDescription = coraWestOrangeMetaDescription;
      }
      // CORA 2026-10-14 phrase pass (Millburn only — this city's
      // FIRST Cora pass): title/meta/keywords edits from the
      // roof_repair_millburn_nj phrase roadmap. Direct title/meta
      // edits are the prescribed treatment for those lines; the H1
      // rendered by ComboTemplate still uses the slug phrase
      // untouched, and the slug itself does not change. Scoped to
      // this one slug — every other combo's metadata is computed
      // exactly as before.
      const isCoraMillburn = combo.slug === 'roof-repair-millburn-nj';
      if (isCoraMillburn) {
        comboTitle = coraMillburnTitle;
        comboDescription = coraMillburnMetaDescription;
      }
      // CORA 2026-10-14 phrase pass (South Orange only — this
      // city's FIRST Cora pass): title/meta/keywords edits from
      // the roof_repair_south_orange_nj phrase roadmap. Direct
      // title/meta edits are the prescribed treatment for those
      // lines; the H1 rendered by ComboTemplate still uses the
      // slug phrase untouched, and the slug itself does not
      // change. Scoped to this one slug — every other combo's
      // metadata is computed exactly as before.
      const isCoraSouthOrange = combo.slug === 'roof-repair-south-orange-nj';
      if (isCoraSouthOrange) {
        comboTitle = coraSouthOrangeTitle;
        comboDescription = coraSouthOrangeMetaDescription;
      }
      // Reuse service OG image for combo pages
      const comboOg = getOGImage('service', combo.serviceId);
      // D-04 indexation gate: 738 combos are KEEP-INDEX; the 402 zero-demand
      // phantom combos are NOINDEX, so isNoindex() applies
      // robots:{index:false,follow:true} (live 200, excluded from sitemap + links).
      //
      // The KEEP arm must be an EXPLICIT object, not `undefined`. Next.js treats
      // an explicitly-returned `undefined` as an override, so `: undefined` wiped
      // the root layout's robots directive and KEEP combos rendered no robots meta
      // at all — verified in the prerender before this fix. Mirrors layout.tsx.
      // Canonical is ALWAYS the combo's OWN slug
      // (self-canonical) — never point a combo at a parent or unrelated page.
      return {
        title: { absolute: comboTitle },
        description: comboDescription,
        ...(isCoraMaplewood ? { keywords: coraMaplewoodMetaKeywords } : {}),
        ...(isCoraMontclair ? { keywords: coraMontclairMetaKeywords } : {}),
        ...(isCoraEastOrange ? { keywords: coraEastOrangeMetaKeywords } : {}),
        ...(isCoraLivingston ? { keywords: coraLivingstonMetaKeywords } : {}),
        ...(isCoraRoseland ? { keywords: coraRoselandMetaKeywords } : {}),
        ...(isCoraIrvington ? { keywords: coraIrvingtonMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Nutley only): the served page
        // had NO meta keywords tag; this creates it with the 9-keyword
        // set from the roof_repair_nutley_nj phrase roadmap.
        ...(isCoraNutley ? { keywords: coraNutleyMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Essex Fells only): the served
        // page had NO meta keywords tag (Cora's tracked "1" was a
        // phantom read); this creates it with the 10-keyword set from
        // the roof_repair_essex_fells_nj phrase roadmap.
        ...(isCoraEssexFells ? { keywords: coraEssexFellsMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Verona only): the served page
        // had NO meta keywords tag (Cora's tracked "1" was a phantom
        // read); this creates it with the 8-keyword set from the
        // roof_repair_verona_nj phrase roadmap.
        ...(isCoraVerona ? { keywords: coraVeronaMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Bloomfield only): the served
        // page had NO meta keywords tag (Cora's tracked "1" was a
        // phantom read); this creates it with the 9-keyword set from
        // the roof_repair_bloomfield_nj phrase roadmap.
        ...(isCoraBloomfield ? { keywords: coraBloomfieldMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Caldwell only): the served
        // page had NO meta keywords tag (Cora's tracked "1" was a
        // phantom read); this creates it with the 9-keyword set
        // from the roof_repair_caldwell_nj phrase roadmap (the
        // goal is R1's real, live-verified 9-keyword list).
        ...(isCoraCaldwell ? { keywords: coraCaldwellMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Belleville only): the served
        // page had NO meta keywords tag (Cora's tracked "1" was a
        // phantom read); this creates it with the 9-keyword set
        // from the roof_repair_belleville_nj phrase roadmap (the
        // headline goal is R9's lone 19-keyword list, adjusted to
        // R1's field-supported 9).
        ...(isCoraBelleville ? { keywords: coraBellevilleMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (North Caldwell only): the
        // served page had NO meta keywords tag (Cora's tracked
        // "1" was a phantom read); this creates it with the
        // 6-keyword set from the roof_repair_north_caldwell_nj
        // phrase roadmap (the goal is R3's real, head-captured
        // 6-keyword list).
        ...(isCoraNorthCaldwell ? { keywords: coraNorthCaldwellMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (North Caldwell only):
        // Variations in Meta Twitter Description +1 — the served
        // twitter:description otherwise falls back to the root
        // layout's static string; for this slug only it carries
        // the same rewritten meta string as the description and
        // og:description (card/title/images still inherit from
        // the layout).
        ...(isCoraNorthCaldwell ? { twitter: { description: coraNorthCaldwellMetaDescription } } : {}),
        // CORA 2026-10-13 phrase pass (Orange only): the served
        // page had NO meta keywords tag (Cora's tracked "1" was a
        // phantom read); this creates it with the 9-keyword set
        // from the roof_repair_orange_nj phrase roadmap (the goal
        // is R4's real, live-verified 9-keyword list).
        ...(isCoraOrange ? { keywords: coraOrangeMetaKeywords } : {}),
        // CORA 2026-10-13 phrase pass (Orange only): Variations
        // in Meta Twitter Description +3 (adjusted) — the served
        // twitter:description otherwise falls back to the root
        // layout's static string; for this slug only it carries
        // the same rewritten meta string as the description and
        // og:description (card/title/images still inherit from
        // the layout).
        ...(isCoraOrange ? { twitter: { description: coraOrangeMetaDescription } } : {}),
        // CORA 2026-10-13 phrase pass (Fairfield only): the served
        // page had NO meta keywords tag (Cora's tracked "1" is a
        // field-wide phantom — 91 of 100 results track exactly 1);
        // this creates it with the 3-keyword set from the
        // roof_repair_fairfield_nj phrase roadmap (the goal is
        // the Shared Average of 3, shown in the verification to
        // rest on real field lists at exactly that size).
        ...(isCoraFairfield ? { keywords: coraFairfieldMetaKeywords } : {}),
        // CORA 2026-10-14 phrase pass (West Orange only): the served
        // page had NO meta keywords tag (Cora's tracked "1" is a
        // field-wide phantom — 93 of 100 results track exactly 1);
        // this creates it with the 3-keyword set from the
        // roof_repair_west_orange_nj phrase roadmap (the goal is
        // the Shared Average of 3; the verification's ruling and
        // the field distribution are recorded in the change list).
        ...(isCoraWestOrange ? { keywords: coraWestOrangeMetaKeywords } : {}),
        // CORA 2026-10-14 phrase pass (Millburn only): the served
        // page had NO meta keywords tag (Cora's tracked "1" is a
        // field-wide phantom — 90 of 100 results track exactly 1);
        // this creates it with the 4-keyword set from the
        // roof_repair_millburn_nj phrase roadmap (the goal 3.2 is
        // the Page-1 Average; 4 is the smallest real list in this
        // field and the Roadmap ask's whole target).
        ...(isCoraMillburn ? { keywords: coraMillburnMetaKeywords } : {}),
        // CORA 2026-10-14 phrase pass (South Orange only): the
        // served page had NO meta keywords tag (Cora's tracked
        // "1" is the field-wide phantom); this creates it with
        // the 9-keyword set from the roof_repair_south_orange_nj
        // phrase roadmap (the goal 9 is R1's REAL nine-keyword
        // tag — the batch's first real setter count, taken at
        // face value per the verification).
        ...(isCoraSouthOrange ? { keywords: coraSouthOrangeMetaKeywords } : {}),
        alternates: { canonical: `/${combo.slug}` },
        robots: isNoindex(combo.slug)
          ? { index: false, follow: true }
          : { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
        // CORA 2026-10-13 PHRASE pass (Montclair only): OG site name
        // carries one added variation occurrence ('roof repair') —
        // Variations in OpenGraph Site Name +1 (adjusted). Every other
        // page keeps SEO_CONFIG.SITE_NAME via buildOG's default.
        openGraph: buildOG(comboTitle, comboDescription, combo.slug, 'website', comboOg?.path ?? undefined, isCoraMontclair ? coraMontclairPhraseOgSiteName : undefined),
      };
    }
    case 'comparison': {
      const comparison = comparisons.find((c) => c.id === pageData.comparisonId);
      if (!comparison) return {};
      // Use hand-written metaDescription from comparison content when available
      let description = comparison.metaDescription;
      try {
        const content = getComparisonContent(comparison.id);
        if (content.metaDescription) {
          description = content.metaDescription;
        }
      } catch {
        // No content yet -- use base metaDescription
      }
      const comparisonTitle = HEADING_CONFIG.comparison.h1(comparison.name);
      return {
        title: { absolute: comparisonTitle },
        description,
        alternates: { canonical: `/${comparison.slug}` },
        openGraph: buildOG(comparisonTitle, description, comparison.slug),
      };
    }
    case 'article': {
      const article = articles.find((a) => a.id === pageData.articleId);
      if (!article) return {};
      return {
        title: { absolute: article.title },
        description: article.metaDescription,
        alternates: { canonical: `/${article.slug}` },
        openGraph: buildOG(article.title, article.metaDescription, article.slug, 'article'),
      };
    }
    case 'core': {
      const corePage = corePages.find((c) => c.id === pageData.corePageId);
      if (!corePage) return {};
      // Look up per-page OG image for homepage; other core pages use default
      const coreOg = corePage.id === 'homepage' ? getOGImage('homepage', 'homepage') : undefined;
      const base: Metadata = {
        title: corePage.metaTitle,
        description: corePage.metaDescription,
        alternates: { canonical: `/${corePage.slug}` },
        openGraph: buildOG(corePage.metaTitle, corePage.metaDescription, corePage.slug, 'website', coreOg?.path ?? undefined),
      };
      // Add noindex for thank-you and privacy-policy pages
      if (NOINDEX_PAGES.has(corePage.id)) {
        base.robots = { index: false, follow: false };
      }
      return base;
    }
    default:
      return {};
  }
}

// ─── Page Dispatcher ─────────────────────────────────────────────────────────

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = getPageDataBySlug(slug);

  if (!pageData) {
    notFound();
  }

  switch (pageData.type) {
    case 'service': {
      const service = services.find((s) => s.id === pageData.serviceId);
      if (!service) notFound();
      return <ServiceTemplate service={service} />;
    }
    case 'city': {
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!city) notFound();
      return <CityTemplate city={city} />;
    }
    case 'combo': {
      const service = services.find((s) => s.id === pageData.serviceId);
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!service || !city) notFound();
      return <ComboTemplate service={service} city={city} />;
    }
    case 'comparison': {
      const comparison = comparisons.find((c) => c.id === pageData.comparisonId);
      if (!comparison) notFound();
      return <ComparisonTemplate comparison={comparison} />;
    }
    case 'article': {
      const article = articles.find((a) => a.id === pageData.articleId);
      if (!article) notFound();
      return <ArticleTemplate article={article} />;
    }
    case 'core': {
      const corePage = corePages.find((c) => c.id === pageData.corePageId);
      if (!corePage) notFound();
      return <CoreTemplate corePage={corePage} />;
    }
    default:
      notFound();
  }
}
