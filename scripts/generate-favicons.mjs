import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// SVG source for favicon (simplified for small sizes - no text)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="96" fill="#1A3A2A"/>
  <path d="M96 370L256 110L416 370" stroke="#C17F4E" stroke-width="44" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="338" y="165" width="44" height="88" rx="4" fill="#C17F4E"/>
  <path d="M164 278L256 140L348 278" stroke="#F5F0E8" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.35"/>
</svg>`;

// SVG with NQR text for larger sizes
const faviconSvgLarge = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="96" fill="#1A3A2A"/>
  <path d="M96 360L256 100L416 360" stroke="#C17F4E" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="340" y="155" width="40" height="85" rx="4" fill="#C17F4E"/>
  <path d="M160 270L256 130L352 270" stroke="#F5F0E8" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.35"/>
  <text x="256" y="445" font-family="Georgia, serif" font-size="100" font-weight="700" fill="#F5F0E8" text-anchor="middle" letter-spacing="12" opacity="0.9">NQR</text>
</svg>`;

// OG Image SVG (1200x630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#1A3A2A"/>
  <!-- Subtle texture pattern -->
  <defs>
    <pattern id="grain" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="4" fill="transparent"/>
      <rect x="1" y="1" width="1" height="1" fill="#F5F0E8" opacity="0.03"/>
      <rect x="3" y="0" width="1" height="1" fill="#F5F0E8" opacity="0.02"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grain)"/>
  <!-- Decorative roof line -->
  <path d="M200 420L600 120L1000 420" stroke="#C17F4E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.15"/>
  <!-- Copper accent lines -->
  <line x1="100" y1="530" x2="1100" y2="530" stroke="#C17F4E" stroke-width="2" opacity="0.3"/>
  <line x1="100" y1="100" x2="1100" y2="100" stroke="#C17F4E" stroke-width="2" opacity="0.3"/>
  <!-- Logo mark -->
  <g transform="translate(460, 140)">
    <path d="M40 180L140 30L240 180" stroke="#C17F4E" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="196" y="60" width="16" height="50" rx="2" fill="#C17F4E"/>
  </g>
  <!-- Company name -->
  <text x="600" y="400" font-family="Georgia, serif" font-size="64" font-weight="700" fill="#F5F0E8" text-anchor="middle" letter-spacing="2">
    Newark Quality Roofing
  </text>
  <!-- Tagline -->
  <text x="600" y="460" font-family="Georgia, serif" font-size="24" fill="#C17F4E" text-anchor="middle" letter-spacing="6" font-weight="400">
    ESSEX COUNTY'S TRUSTED ROOFER
  </text>
  <!-- Location info -->
  <text x="600" y="500" font-family="Georgia, serif" font-size="18" fill="#F5F0E8" text-anchor="middle" letter-spacing="3" opacity="0.6">
    LICENSED &amp; INSURED  |  SERVING NORTHERN NEW JERSEY
  </text>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(faviconSvg);
  const svgLargeBuffer = Buffer.from(faviconSvgLarge);

  // Generate PNGs at various sizes
  const sizes = [
    { size: 16, svg: svgBuffer, name: 'favicon-16x16.png' },
    { size: 32, svg: svgBuffer, name: 'favicon-32x32.png' },
    { size: 48, svg: svgBuffer, name: 'favicon-48x48.png' },
    { size: 192, svg: svgLargeBuffer, name: 'android-chrome-192x192.png' },
    { size: 512, svg: svgLargeBuffer, name: 'android-chrome-512x512.png' },
    { size: 180, svg: svgLargeBuffer, name: 'apple-touch-icon.png' },
  ];

  for (const { size, svg, name } of sizes) {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(join(root, 'public', name));
    console.log(`Generated: public/${name}`);
  }

  // Generate ICO (32x32 PNG wrapped as ICO)
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // Build ICO file (simple multi-size ICO format)
  const ico = buildIco([png16, png32, png48]);
  writeFileSync(join(root, 'src', 'app', 'favicon.ico'), ico);
  console.log('Generated: src/app/favicon.ico');

  // Generate OG image
  const ogBuffer = Buffer.from(ogSvg);
  await sharp(ogBuffer)
    .resize(1200, 630)
    .png()
    .toFile(join(root, 'public', 'og-image.png'));
  console.log('Generated: public/og-image.png');

  console.log('\nAll favicons generated successfully!');
}

function buildIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let dataOffset = headerSize + dirSize;

  // ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);      // Reserved
  header.writeUInt16LE(1, 2);      // Type: ICO
  header.writeUInt16LE(numImages, 4); // Count

  const dirEntries = [];
  const imageSizes = [16, 32, 48];

  for (let i = 0; i < numImages; i++) {
    const entry = Buffer.alloc(dirEntrySize);
    const size = imageSizes[i];
    entry.writeUInt8(size === 256 ? 0 : size, 0);  // Width
    entry.writeUInt8(size === 256 ? 0 : size, 1);  // Height
    entry.writeUInt8(0, 2);       // Color palette
    entry.writeUInt8(0, 3);       // Reserved
    entry.writeUInt16LE(1, 4);    // Color planes
    entry.writeUInt16LE(32, 6);   // Bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8);  // Image data size
    entry.writeUInt32LE(dataOffset, 12);            // Offset to image data
    dirEntries.push(entry);
    dataOffset += pngBuffers[i].length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

generate().catch(console.error);
