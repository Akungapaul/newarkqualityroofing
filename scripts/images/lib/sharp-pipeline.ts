// ─── Sharp Image Processing Pipeline ────────────────────────────────────────
// Resize, convert to WebP, and optimize images for production use.

import sharp from 'sharp';

/**
 * Process an image: resize to target dimensions and convert to optimized WebP.
 * Uses 'cover' fit with centre position for consistent cropping.
 */
export async function processImage(
  inputPath: string,
  outputPath: string,
  targetWidth: number,
  targetHeight: number
): Promise<void> {
  await sharp(inputPath)
    .resize(targetWidth, targetHeight, {
      fit: 'cover',
      position: 'centre',
    })
    .webp({
      quality: 80,
      effort: 6,
    })
    .toFile(outputPath);
}

/**
 * Get image metadata: dimensions and file size.
 * Useful for reporting and validation.
 */
export async function getImageInfo(
  imagePath: string
): Promise<{ width: number; height: number; size: number; format: string }> {
  const metadata = await sharp(imagePath).metadata();
  const stats = await sharp(imagePath).toBuffer({ resolveWithObject: true });

  return {
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    size: stats.info.size,
    format: metadata.format ?? 'unknown',
  };
}

/**
 * Process a batch of images from staging to their final destination.
 * Returns a summary of processed images.
 */
export async function processBatch(
  items: {
    inputPath: string;
    outputPath: string;
    targetWidth: number;
    targetHeight: number;
  }[]
): Promise<{ processed: number; failed: number; errors: string[] }> {
  let processed = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const item of items) {
    try {
      await processImage(
        item.inputPath,
        item.outputPath,
        item.targetWidth,
        item.targetHeight
      );
      processed++;
    } catch (error) {
      failed++;
      errors.push(
        `${item.inputPath}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  return { processed, failed, errors };
}
