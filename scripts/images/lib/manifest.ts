// ─── Manifest Read/Write Operations ─────────────────────────────────────────
// Reads and writes the image manifest at src/data/image-manifest.ts.
// Uses AST-free string replacement: finds the imageManifest array between markers.

import fs from 'fs';
import path from 'path';
import type { ImageEntry } from './types';

const MANIFEST_PATH = path.resolve(
  process.cwd(),
  'src/data/image-manifest.ts'
);

// Markers in the manifest file for the data array
const MANIFEST_START = '// MANIFEST_START';
const MANIFEST_END = '// MANIFEST_END';

/**
 * Read the current manifest entries from src/data/image-manifest.ts.
 * Parses the imageManifest array between the MANIFEST_START and MANIFEST_END markers.
 */
export function readManifest(): ImageEntry[] {
  const content = fs.readFileSync(MANIFEST_PATH, 'utf-8');

  const startIdx = content.indexOf(MANIFEST_START);
  const endIdx = content.indexOf(MANIFEST_END);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      'Could not find MANIFEST_START/MANIFEST_END markers in image-manifest.ts'
    );
  }

  // Extract the array content between markers
  const arraySection = content.slice(
    startIdx + MANIFEST_START.length,
    endIdx
  );

  // Find the array literal: look for `= [` pattern to skip type annotations like `ImageEntry[]`
  const assignmentMatch = arraySection.match(/=\s*\[/);
  if (!assignmentMatch || assignmentMatch.index === undefined) {
    return [];
  }

  const arrayStart = arraySection.indexOf('[', assignmentMatch.index);
  const arrayEnd = arraySection.lastIndexOf(']');

  if (arrayStart === -1 || arrayEnd === -1 || arrayEnd <= arrayStart) {
    return [];
  }

  const arrayContent = arraySection.slice(arrayStart, arrayEnd + 1);

  // Fast check for empty array
  if (arrayContent.trim() === '[]') {
    return [];
  }

  // Parse the array -- it's valid JSON-like TypeScript
  // We need to handle TypeScript syntax (no trailing comma issues in JSON.parse)
  try {
    // Remove trailing commas for JSON.parse compatibility
    const jsonSafe = arrayContent.replace(/,(\s*[}\]])/g, '$1');
    return JSON.parse(jsonSafe) as ImageEntry[];
  } catch {
    // If parsing fails, the array is empty or malformed
    console.warn('Could not parse manifest array, returning empty');
    return [];
  }
}

/**
 * Write entries to the image manifest, preserving the module structure
 * (imports, schema, lookup helpers) and only updating the imageManifest array.
 */
export function writeManifest(entries: ImageEntry[]): void {
  const content = fs.readFileSync(MANIFEST_PATH, 'utf-8');

  const startIdx = content.indexOf(MANIFEST_START);
  const endIdx = content.indexOf(MANIFEST_END);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      'Could not find MANIFEST_START/MANIFEST_END markers in image-manifest.ts'
    );
  }

  // Serialize entries as TypeScript array
  const serialized = serializeEntries(entries);

  // Replace the section between markers
  const before = content.slice(0, startIdx + MANIFEST_START.length);
  const after = content.slice(endIdx);

  const newContent = `${before}\nexport const imageManifest: ImageEntry[] = ${serialized};\n${after}`;

  fs.writeFileSync(MANIFEST_PATH, newContent, 'utf-8');
  console.log(`Manifest updated: ${entries.length} entries written`);
}

/**
 * Add entries to the manifest, merging by id (replacing duplicates).
 */
export function addToManifest(newEntries: ImageEntry[]): void {
  const existing = readManifest();

  // Create a map of existing entries by id
  const entryMap = new Map<string, ImageEntry>();
  for (const entry of existing) {
    entryMap.set(entry.id, entry);
  }

  // Add/replace with new entries
  for (const entry of newEntries) {
    entryMap.set(entry.id, entry);
  }

  // Sort by category then id for consistent output
  const merged = Array.from(entryMap.values()).sort((a, b) => {
    const catCmp = a.category.localeCompare(b.category);
    return catCmp !== 0 ? catCmp : a.id.localeCompare(b.id);
  });

  writeManifest(merged);
}

/**
 * Serialize ImageEntry array to formatted TypeScript.
 */
function serializeEntries(entries: ImageEntry[]): string {
  if (entries.length === 0) return '[]';

  const lines = entries.map((entry) => {
    const fields: string[] = [
      `    id: ${JSON.stringify(entry.id)}`,
      `    filename: ${JSON.stringify(entry.filename)}`,
      `    path: ${JSON.stringify(entry.path)}`,
      `    alt: ${JSON.stringify(entry.alt)}`,
      `    width: ${entry.width}`,
      `    height: ${entry.height}`,
      `    category: ${JSON.stringify(entry.category)}`,
      `    pageType: ${JSON.stringify(entry.pageType)}`,
    ];

    if (entry.pageId !== undefined) {
      fields.push(`    pageId: ${JSON.stringify(entry.pageId)}`);
    }

    fields.push(`    prompt: ${JSON.stringify(entry.prompt)}`);

    if (entry.generatedAt !== undefined) {
      fields.push(`    generatedAt: ${JSON.stringify(entry.generatedAt)}`);
    }

    return `  {\n${fields.join(',\n')},\n  }`;
  });

  return `[\n${lines.join(',\n')},\n]`;
}
