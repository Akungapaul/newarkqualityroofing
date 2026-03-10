// ─── Central Image Manifest ─────────────────────────────────────────────────
// Populated by the approve script, committed to git.
// All components look up images from this manifest rather than hardcoding paths.

import { z } from 'zod';

// ─── Schema ─────────────────────────────────────────────────────────────────

export const ImageEntrySchema = z.object({
  id: z.string(),
  filename: z.string(),
  path: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  category: z.enum([
    'homepage',
    'service-hero',
    'city-hero',
    'gallery-before',
    'gallery-after',
    'content-crew',
    'content-materials',
    'content-consultation',
    'content-seasonal',
    'og',
  ]),
  pageType: z.enum(['homepage', 'service', 'city', 'combo', 'shared']),
  pageId: z.string().optional(),
  prompt: z.string(),
  generatedAt: z.string().optional(),
});

export type ImageEntry = z.infer<typeof ImageEntrySchema>;

// ─── Manifest Data ──────────────────────────────────────────────────────────
// MANIFEST_START
export const imageManifest: ImageEntry[] = [];
// MANIFEST_END

// ─── Lookup Helpers ─────────────────────────────────────────────────────────

/** Get the hero image for a specific service page */
export function getServiceHeroImage(serviceId: string): ImageEntry | undefined {
  return imageManifest.find(
    (e) => e.category === 'service-hero' && e.pageId === serviceId
  );
}

/** Get the hero image for a specific city page */
export function getCityHeroImage(cityId: string): ImageEntry | undefined {
  return imageManifest.find(
    (e) => e.category === 'city-hero' && e.pageId === cityId
  );
}

/** Get the OG image for a specific page */
export function getOGImage(
  pageType: string,
  pageId?: string
): ImageEntry | undefined {
  return imageManifest.find(
    (e) =>
      e.category === 'og' &&
      e.pageType === pageType &&
      (pageId ? e.pageId === pageId : !e.pageId)
  );
}

/** Get all homepage images */
export function getHomepageImages(): ImageEntry[] {
  return imageManifest.filter((e) => e.category === 'homepage');
}

/** Get gallery before/after pairs (sorted by id for consistent pairing) */
export function getGalleryPairs(): {
  before: ImageEntry;
  after: ImageEntry;
}[] {
  const befores = imageManifest
    .filter((e) => e.category === 'gallery-before')
    .sort((a, b) => a.id.localeCompare(b.id));
  const afters = imageManifest
    .filter((e) => e.category === 'gallery-after')
    .sort((a, b) => a.id.localeCompare(b.id));

  const pairs: { before: ImageEntry; after: ImageEntry }[] = [];
  for (let i = 0; i < Math.min(befores.length, afters.length); i++) {
    pairs.push({ before: befores[i], after: afters[i] });
  }
  return pairs;
}

/** Get content pool images by subcategory */
export function getContentPoolImages(
  subcategory: 'crew' | 'materials' | 'consultation' | 'seasonal'
): ImageEntry[] {
  const categoryMap = {
    crew: 'content-crew',
    materials: 'content-materials',
    consultation: 'content-consultation',
    seasonal: 'content-seasonal',
  } as const;
  return imageManifest.filter((e) => e.category === categoryMap[subcategory]);
}

/** Get a specific homepage image by id */
export function getHomepageImage(id: string): ImageEntry | undefined {
  return imageManifest.find(
    (e) => e.category === 'homepage' && e.id === id
  );
}
