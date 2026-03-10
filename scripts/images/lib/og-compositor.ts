// ─── OG Image Compositor ────────────────────────────────────────────────────
// Creates branded 1200x630 OG social sharing images by compositing a photo
// background with an SVG text overlay (gradient, copper accent bar, company name,
// and page title). Uses sharp's composite API for SVG overlay on photos.

import sharp from 'sharp';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface OGCompositeOptions {
  /** Path to the source background photo */
  backgroundImage: string;
  /** Main page title text */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Output file path for the OG image */
  outputPath: string;
}

// ─── Brand Constants ────────────────────────────────────────────────────────

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const COPPER = '#C17F4E';
const PARCHMENT = '#F5F0E8';
const MARGIN_X = 60;
const MAX_TEXT_WIDTH = OG_WIDTH - MARGIN_X * 2; // 1080px
const CHAR_WIDTH_36 = 19; // Approximate serif char width at 36px

// ─── XML Escaping ───────────────────────────────────────────────────────────

/**
 * Escape special characters for safe SVG text embedding.
 */
export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ─── Text Wrapping ──────────────────────────────────────────────────────────

interface TitleLayout {
  lines: string[];
  /** Y position for each line */
  lineYs: number[];
  /** Y position for subtitle (if present) */
  subtitleY: number;
}

/**
 * Calculate title layout with automatic line wrapping for long titles.
 * Splits text to max 2 lines based on approximate character width.
 */
function layoutTitle(title: string, hasSubtitle: boolean): TitleLayout {
  const approxWidth = title.length * CHAR_WIDTH_36;

  // Single line fits
  if (approxWidth <= MAX_TEXT_WIDTH) {
    return {
      lines: [title],
      lineYs: [560],
      subtitleY: hasSubtitle ? 595 : 0,
    };
  }

  // Need to split to two lines
  const midpoint = Math.floor(title.length / 2);
  let splitIdx = -1;

  // Find nearest space before midpoint
  for (let i = midpoint; i >= 0; i--) {
    if (title[i] === ' ') {
      splitIdx = i;
      break;
    }
  }

  // If no space found before midpoint, look after
  if (splitIdx === -1) {
    for (let i = midpoint + 1; i < title.length; i++) {
      if (title[i] === ' ') {
        splitIdx = i;
        break;
      }
    }
  }

  // If still no space found, hard truncate
  if (splitIdx === -1) {
    const maxChars = Math.floor(MAX_TEXT_WIDTH / CHAR_WIDTH_36);
    return {
      lines: [title.slice(0, maxChars - 1) + '\u2026'],
      lineYs: [560],
      subtitleY: hasSubtitle ? 595 : 0,
    };
  }

  let line1 = title.slice(0, splitIdx);
  let line2 = title.slice(splitIdx + 1);

  // Truncate line 2 if still too long
  const maxCharsPerLine = Math.floor(MAX_TEXT_WIDTH / CHAR_WIDTH_36);
  if (line2.length > maxCharsPerLine) {
    line2 = line2.slice(0, maxCharsPerLine - 1) + '\u2026';
  }
  if (line1.length > maxCharsPerLine) {
    line1 = line1.slice(0, maxCharsPerLine - 1) + '\u2026';
  }

  return {
    lines: [line1, line2],
    lineYs: [545, 585],
    subtitleY: hasSubtitle ? 615 : 0,
  };
}

// ─── SVG Overlay Builder ────────────────────────────────────────────────────

function buildSVGOverlay(
  title: string,
  subtitle?: string
): string {
  const layout = layoutTitle(title, !!subtitle);

  const titleLines = layout.lines
    .map(
      (line, i) =>
        `<text x="${MARGIN_X}" y="${layout.lineYs[i]}" font-family="serif" font-size="36" font-weight="700" fill="${PARCHMENT}">${escapeXml(line)}</text>`
    )
    .join('\n      ');

  const subtitleSvg = subtitle
    ? `<text x="${MARGIN_X}" y="${layout.subtitleY}" font-family="serif" font-size="20" fill="${PARCHMENT}" opacity="0.8">${escapeXml(subtitle)}</text>`
    : '';

  return `<svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(15,34,24,0)" />
        <stop offset="50%" stop-color="rgba(15,34,24,0.3)" />
        <stop offset="100%" stop-color="rgba(15,34,24,0.85)" />
      </linearGradient>
    </defs>

    <!-- Dark forest gradient overlay for text readability -->
    <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#overlay)" />

    <!-- Copper accent bar -->
    <rect x="${MARGIN_X}" y="480" width="80" height="4" rx="2" fill="${COPPER}" />

    <!-- Company name -->
    <text x="${MARGIN_X}" y="510" font-family="serif" font-size="18" font-weight="600" fill="${COPPER}" letter-spacing="2">NEWARK QUALITY ROOFING</text>

    <!-- Page title -->
    ${titleLines}

    <!-- Subtitle -->
    ${subtitleSvg}
  </svg>`;
}

// ─── Main Compositor ────────────────────────────────────────────────────────

/**
 * Create a branded OG image (1200x630) by compositing a photo background
 * with an SVG text overlay containing gradient, copper accent bar,
 * company name, and page title.
 *
 * - Resizes background to 1200x630 with fit 'cover', position 'centre'
 * - Overlays dark gradient from transparent (top) to 85% opacity forest green (bottom)
 * - Adds copper accent bar, company name in copper, page title in parchment
 * - Long titles auto-wrap to two lines
 * - Outputs as WebP quality 85
 */
export async function createOGImage(options: OGCompositeOptions): Promise<void> {
  const { backgroundImage, title, subtitle, outputPath } = options;

  const svgOverlay = buildSVGOverlay(title, subtitle);

  await sharp(backgroundImage)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .webp({ quality: 85 })
    .toFile(outputPath);
}
