'use client';

import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { SEO_CONFIG } from '@/lib/seo-config';
import { getGalleryPairs } from '@/data/image-manifest';

// ─── Fallback Gallery Data ──────────────────────────────────────────────────
// Used when the manifest has fewer than 4 before/after pairs (i.e., images not yet generated).

const FALLBACK_PROJECTS = [
  {
    id: 'residential-shingle',
    before: '/images/gallery/gallery-before-residential-shingles.webp',
    after: '/images/newark-roofing-at-work.jpg',
    caption: 'Residential Shingle Repair — Newark, NJ',
    altBefore: 'Before residential shingle repair in Newark NJ',
    altAfter: 'After residential shingle repair in Newark NJ',
  },
  {
    id: 'commercial-flat',
    before: '/images/commercial-roofing-newark.jpg',
    after: '/images/newark-roofing-team.jpg',
    caption: 'Commercial Flat Roof Installation — East Orange, NJ',
    altBefore: 'Before commercial flat roof installation in East Orange NJ',
    altAfter: 'After commercial flat roof installation in East Orange NJ',
  },
  {
    id: 'residential-replacement',
    before: '/images/homeowner-roofing-options.jpg',
    after: '/images/roof-replacement-newark.jpg',
    caption: 'Full Roof Replacement — Montclair, NJ',
    altBefore: 'Before full roof replacement in Montclair NJ',
    altAfter: 'After full roof replacement in Montclair NJ',
  },
  {
    id: 'commercial-tpo',
    before: '/images/essex-county-experience.jpg',
    after: '/images/manufacturer-warranty.jpg',
    caption: 'Commercial TPO Membrane — Bloomfield, NJ',
    altBefore: 'Before commercial TPO membrane installation in Bloomfield NJ',
    altAfter: 'After commercial TPO membrane installation in Bloomfield NJ',
  },
];

// ─── Caption mapping for manifest-sourced gallery pairs ─────────────────────

const PAIR_CAPTIONS: Record<string, string> = {
  'residential-shingles': 'Residential Shingle Repair — Newark, NJ',
  'leak-damage': 'Chimney Leak Repair — East Orange, NJ',
  'aged-roof': 'Full Roof Replacement — Montclair, NJ',
  'storm-damage': 'Storm Damage Restoration — Bloomfield, NJ',
  'commercial-ponding': 'Commercial Drainage Fix — Newark, NJ',
  'commercial-membrane': 'TPO Membrane Installation — West Orange, NJ',
  'commercial-metal': 'Metal Roof Restoration — Caldwell, NJ',
  'commercial-bur': 'Modified Bitumen Replacement — Irvington, NJ',
};

/** Build gallery projects from manifest pairs, falling back to hardcoded data */
function buildGalleryProjects() {
  const manifestPairs = getGalleryPairs();

  // Require at least 4 pairs from the manifest before switching away from fallback
  if (manifestPairs.length < 4) {
    return FALLBACK_PROJECTS;
  }

  // Use up to 8 manifest pairs
  return manifestPairs.map((pair) => {
    // Extract pair ID from the before entry (e.g., "gallery-before-residential-shingles" -> "residential-shingles")
    const pairId = pair.before.id.replace('gallery-before-', '');
    return {
      id: pairId,
      before: pair.before.path,
      after: pair.after.path,
      caption: PAIR_CAPTIONS[pairId] ?? `Roofing Project — Essex County, NJ`,
      altBefore: pair.before.alt,
      altAfter: pair.after.alt,
    };
  });
}

const galleryProjects = buildGalleryProjects();

// ─── ImageObject JSON-LD ────────────────────────────────────────────────────

function buildGalleryJsonLd() {
  const images = galleryProjects.flatMap((project) => [
    {
      '@type': 'ImageObject',
      contentUrl: `${SEO_CONFIG.BASE_URL}${project.after}`,
      name: project.altAfter,
      caption: project.caption,
      width: 900,
      height: 600,
    },
    {
      '@type': 'ImageObject',
      contentUrl: `${SEO_CONFIG.BASE_URL}${project.before}`,
      name: project.altBefore,
      caption: `${project.caption} (before)`,
      width: 900,
      height: 600,
    },
  ]);

  return images;
}

// ─── Slider Component ───────────────────────────────────────────────────────

interface SliderItemProps {
  project: (typeof galleryProjects)[number];
}

function SliderItem({ project }: SliderItemProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="photo-treatment relative aspect-[3/2] cursor-ew-resize select-none overflow-hidden"
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="slider"
        aria-label={`Before and after comparison: ${project.caption}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
          if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
        }}
      >
        {/* After image -- full width background */}
        <Image
          src={project.after}
          alt={project.altAfter}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ pointerEvents: 'none' }}
          loading="lazy"
        />

        {/* Before image -- clipped */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={project.before}
            alt={project.altBefore}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ pointerEvents: 'none' }}
            loading="lazy"
          />
        </div>

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-copper"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          {/* Circular grab indicator */}
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-copper bg-white shadow-lg">
            <svg
              className="h-5 w-5 text-copper"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <polyline points="8 4 4 8 8 12" />
              <polyline points="16 4 20 8 16 12" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 rounded-md bg-forest/80 px-2 py-1 font-body text-xs font-semibold text-text-on-dark">
          Before
        </span>
        <span className="absolute top-3 right-3 z-10 rounded-md bg-copper/80 px-2 py-1 font-body text-xs font-semibold text-white">
          After
        </span>
      </div>

      <p className="font-body text-sm text-text-secondary">
        {project.caption}
      </p>
    </div>
  );
}

// ─── Gallery Section ────────────────────────────────────────────────────────

export function BeforeAfterGallery() {
  const jsonLdData = buildGalleryJsonLd();

  return (
    <AnimateIn as="section">
      <div
        className="bg-parchment py-16 lg:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="gallery-heading"
              className="font-heading text-3xl font-bold text-forest sm:text-4xl"
            >
              Our Recent Projects
            </h2>
            <p className="mt-3 font-body text-base text-text-secondary">
              Drag the slider to see before and after
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {galleryProjects.map((project) => (
              <SliderItem key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ImageObject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </div>
    </AnimateIn>
  );
}
