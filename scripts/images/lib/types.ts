// ─── Image System Shared Types ──────────────────────────────────────────────

/** Categories of images in the manifest */
export type ImageCategory =
  | 'homepage'
  | 'service-hero'
  | 'city-hero'
  | 'gallery-before'
  | 'gallery-after'
  | 'content-crew'
  | 'content-materials'
  | 'content-consultation'
  | 'content-seasonal'
  | 'og';

/** Page types that images can be associated with */
export type PageType = 'homepage' | 'service' | 'city' | 'combo' | 'shared';

/** Predefined image dimension presets */
export interface ImageDimensions {
  width: number;
  height: number;
}

/** Dimension presets for different image use cases */
export const DIMENSIONS = {
  /** Hero images: 1920x1080 (16:9) -- final output after sharp upscale */
  HERO: { width: 1920, height: 1080 } as const,
  /** Content images: 1200x900 (4:3) */
  CONTENT: { width: 1200, height: 900 } as const,
  /** Gallery before/after: 1200x800 (3:2) */
  GALLERY: { width: 1200, height: 800 } as const,
  /** Card/thumbnail images: 800x800 (1:1) */
  CARD: { width: 800, height: 800 } as const,
  /** OG social sharing: 1200x630 */
  OG: { width: 1200, height: 630 } as const,
  /** OpenAI API landscape output: 1536x1024 */
  API_LANDSCAPE: { width: 1536, height: 1024 } as const,
  /** OpenAI API square output: 1024x1024 */
  API_SQUARE: { width: 1024, height: 1024 } as const,
} as const;

/** Prompt definition for a single image to generate */
export interface PromptDefinition {
  /** Unique image identifier (e.g., 'hero-main', 'service-roof-repair') */
  id: string;
  /** Output filename without extension (e.g., 'hero-main') */
  filename: string;
  /** Image category for organization and filtering */
  category: ImageCategory;
  /** Page type this image is associated with */
  pageType: PageType;
  /** Optional page identifier (service slug, city slug, etc.) */
  pageId?: string;
  /** Target output width after sharp processing */
  targetWidth: number;
  /** Target output height after sharp processing */
  targetHeight: number;
  /** Scene-specific description (combined with style prefix at generation time) */
  sceneDescription: string;
  /** SEO-optimized alt text for the image */
  alt: string;
}

/** Entry in the image manifest (committed to git) */
export interface ImageEntry {
  /** Unique image identifier matching PromptDefinition.id */
  id: string;
  /** Filename with extension (e.g., 'hero-main.webp') */
  filename: string;
  /** Path relative to public/ (e.g., '/images/homepage/hero-main.webp') */
  path: string;
  /** SEO-optimized alt text */
  alt: string;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
  /** Image category */
  category: ImageCategory;
  /** Page type association */
  pageType: PageType;
  /** Optional page identifier */
  pageId?: string;
  /** Generation prompt (for regeneration) */
  prompt: string;
  /** ISO timestamp of when image was generated */
  generatedAt?: string;
}

/** Result of generating a single image */
export interface GenerationResult {
  /** Image identifier */
  id: string;
  /** Generation status */
  status: 'success' | 'failed' | 'skipped';
  /** Path to staged image file */
  stagingPath?: string;
  /** Error message if failed */
  error?: string;
  /** Estimated cost in USD */
  costEstimate: number;
  /** Time taken in milliseconds */
  durationMs: number;
}

/** Report summarizing an entire generation run */
export interface GenerationReport {
  /** ISO timestamp of when the run started */
  timestamp: string;
  /** Total number of images requested */
  totalRequested: number;
  /** Number of successfully generated images */
  succeeded: number;
  /** Number of failed generations */
  failed: number;
  /** Number of skipped images (already exist, etc.) */
  skipped: number;
  /** Total estimated cost in USD */
  estimatedCost: number;
  /** Total duration in milliseconds */
  durationMs: number;
  /** Individual results */
  results: GenerationResult[];
}

/** OpenAI API size options for gpt-image-1 */
export type APIImageSize = '1536x1024' | '1024x1024' | '1024x1536';

/** Cost constants per image (USD, medium quality) */
export const COST_CONSTANTS = {
  /** Landscape 1536x1024, medium quality */
  LANDSCAPE_MEDIUM: 0.05,
  /** Square 1024x1024, medium quality */
  SQUARE_MEDIUM: 0.034,
} as const;
