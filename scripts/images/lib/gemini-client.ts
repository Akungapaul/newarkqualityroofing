// ─── Gemini Nano Banana Image Generation Client ────────────────────────────
// Uses Google Gemini API REST endpoint for photorealistic image generation.

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import type { PromptDefinition, GenerationResult } from './types';

// ─── Constants ──────────────────────────────────────────────────────────────

const MODEL = 'gemini-3-pro-image-preview';
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// ─── Helpers ────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getApiKey(): string {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error(
      'GEMINI_API_KEY not set. Add it to your .env file: GEMINI_API_KEY=AIza...'
    );
  }
  return process.env.GEMINI_API_KEY;
}

/** Map dimensions to Gemini aspect ratio string */
function getAspectRatio(width: number, height: number): string {
  const ratio = width / height;
  if (Math.abs(ratio - 16 / 9) < 0.05) return '16:9';
  if (Math.abs(ratio - 4 / 3) < 0.05) return '4:3';
  if (Math.abs(ratio - 3 / 2) < 0.05) return '3:2';
  if (Math.abs(ratio - 1) < 0.05) return '1:1';
  if (ratio > 1.5) return '16:9';
  if (ratio > 1.2) return '4:3';
  if (ratio < 0.8) return '9:16';
  return '1:1';
}

/** Pick resolution tier based on target dimensions */
function getImageSize(width: number, height: number): string {
  const maxDim = Math.max(width, height);
  if (maxDim <= 512) return '512';
  if (maxDim <= 1024) return '1K';
  return '2K';
}

// ─── Generation ─────────────────────────────────────────────────────────────

/**
 * Generate a single image using Gemini Nano Banana.
 * Returns a Buffer containing PNG data.
 */
async function generateImage(
  prompt: string,
  width: number,
  height: number
): Promise<Buffer> {
  const apiKey = getApiKey();

  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: {
        aspectRatio: getAspectRatio(width, height),
        imageSize: getImageSize(width, height),
      },
    },
  };

  const response = await fetch(`${BASE_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API ${response.status}: ${errorText.substring(0, 200)}`);
  }

  const data = await response.json();

  // Find the image part in the response
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!parts) {
    throw new Error('No response parts from Gemini API');
  }

  const imagePart = parts.find(
    (p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData
  );
  if (!imagePart?.inlineData?.data) {
    throw new Error('No image data in Gemini response');
  }

  return Buffer.from(imagePart.inlineData.data, 'base64');
}

/**
 * Generate and save to disk with retries.
 */
async function generateAndSave(
  prompt: string,
  outputPath: string,
  width: number,
  height: number,
  retries: number = 3
): Promise<void> {
  let lastError: unknown;
  let backoff = 5000;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const buffer = await generateImage(prompt, width, height);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, buffer);
      return;
    } catch (error) {
      lastError = error;
      const msg = error instanceof Error ? error.message : String(error);
      const isRateLimit = msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED');
      const isAuthError = msg.includes('401') || msg.includes('403') || msg.includes('Forbidden');

      // Don't retry auth errors
      if (isAuthError) throw error;

      if (isRateLimit && attempt < retries) {
        console.warn(
          `Rate limited (attempt ${attempt + 1}/${retries + 1}). Waiting ${backoff / 1000}s...`
        );
        await sleep(backoff);
        backoff = Math.min(backoff * 2, 60000);
      } else if (attempt < retries) {
        console.warn(
          `Generation failed (attempt ${attempt + 1}/${retries + 1}): ${msg}`
        );
        await sleep(2000);
      }
    }
  }

  throw lastError;
}

// ─── Batch Generation with Concurrency ──────────────────────────────────────

/**
 * Generate multiple images with controlled concurrency.
 */
export async function generateWithConcurrency(
  items: PromptDefinition[],
  buildPromptFn: (scene: string) => string,
  stagingDir: string,
  concurrency: number = 3,
  delayMs: number = 1000
): Promise<GenerationResult[]> {
  const results: GenerationResult[] = [];
  const queue = [...items];

  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift()!;
      const startTime = Date.now();
      const fullPrompt = buildPromptFn(item.sceneDescription);
      const stagingPath = path.join(stagingDir, `${item.filename}.png`);

      try {
        await generateAndSave(
          fullPrompt,
          stagingPath,
          item.targetWidth,
          item.targetHeight
        );
        results.push({
          id: item.id,
          status: 'success',
          stagingPath,
          costEstimate: 0, // Free tier
          durationMs: Date.now() - startTime,
        });
        console.log(
          `[OK] ${item.id} (${((Date.now() - startTime) / 1000).toFixed(1)}s)`
        );
      } catch (error) {
        results.push({
          id: item.id,
          status: 'failed',
          error: error instanceof Error ? error.message : String(error),
          costEstimate: 0,
          durationMs: Date.now() - startTime,
        });
        console.error(
          `[FAIL] ${item.id}: ${error instanceof Error ? error.message : String(error)}`
        );
      }

      await sleep(delayMs);
    }
  });

  await Promise.all(workers);
  return results;
}
