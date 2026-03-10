// ─── Image Prompt Definitions ───────────────────────────────────────────────
// All ~137 prompt definitions for the AI image generation system.
// Each prompt includes id, filename, category, target dimensions, scene description, and alt text.

import type { PromptDefinition, ImageCategory } from './types';
import { DIMENSIONS } from './types';

// ─── Shared Style Constants ─────────────────────────────────────────────────
// NOTE: Uses "soft natural daylight" NOT "golden hour" to avoid double-warming
// with the CSS .photo-treatment overlay (see Research Pitfall 5).

export const STYLE_PREFIX =
  'Soft natural daylight with slightly warm undertones, shallow depth of field, magazine-quality editorial photography. New Jersey residential context with East Coast architecture, deciduous trees, and brick or vinyl siding homes.';

export const BRAND_ELEMENTS =
  'Workers wearing forest green (#1A3A2A) uniforms. Work trucks in matching forest green. No text, logos, signs, or watermarks in the image.';

/**
 * Build a full generation prompt by combining style prefix, brand elements, and scene description.
 */
export function buildPrompt(sceneDescription: string): string {
  return `${STYLE_PREFIX} ${BRAND_ELEMENTS} ${sceneDescription}`;
}

// ─── Helper to create PromptDefinition ──────────────────────────────────────

function hp(
  id: string,
  scene: string,
  alt: string
): PromptDefinition {
  return {
    id,
    filename: id,
    category: 'homepage',
    pageType: 'homepage',
    targetWidth: DIMENSIONS.HERO.width,
    targetHeight: DIMENSIONS.HERO.height,
    sceneDescription: scene,
    alt,
  };
}

function sh(
  serviceId: string,
  scene: string,
  alt: string
): PromptDefinition {
  return {
    id: `service-${serviceId}`,
    filename: `service-${serviceId}`,
    category: 'service-hero',
    pageType: 'service',
    pageId: serviceId,
    targetWidth: DIMENSIONS.HERO.width,
    targetHeight: DIMENSIONS.HERO.height,
    sceneDescription: scene,
    alt,
  };
}

function ch(
  cityId: string,
  scene: string,
  alt: string
): PromptDefinition {
  return {
    id: `city-${cityId}`,
    filename: `city-${cityId}`,
    category: 'city-hero',
    pageType: 'city',
    pageId: cityId,
    targetWidth: DIMENSIONS.HERO.width,
    targetHeight: DIMENSIONS.HERO.height,
    sceneDescription: scene,
    alt,
  };
}

function gb(
  pairId: string,
  scene: string,
  alt: string
): PromptDefinition {
  return {
    id: `gallery-before-${pairId}`,
    filename: `gallery-before-${pairId}`,
    category: 'gallery-before',
    pageType: 'shared',
    targetWidth: DIMENSIONS.GALLERY.width,
    targetHeight: DIMENSIONS.GALLERY.height,
    sceneDescription: scene,
    alt,
  };
}

function ga(
  pairId: string,
  scene: string,
  alt: string
): PromptDefinition {
  return {
    id: `gallery-after-${pairId}`,
    filename: `gallery-after-${pairId}`,
    category: 'gallery-after',
    pageType: 'shared',
    targetWidth: DIMENSIONS.GALLERY.width,
    targetHeight: DIMENSIONS.GALLERY.height,
    sceneDescription: scene,
    alt,
  };
}

function cp(
  id: string,
  category: ImageCategory,
  scene: string,
  alt: string,
  square: boolean = false
): PromptDefinition {
  const dims = square ? DIMENSIONS.CARD : DIMENSIONS.CONTENT;
  return {
    id,
    filename: id,
    category,
    pageType: 'shared',
    targetWidth: dims.width,
    targetHeight: dims.height,
    sceneDescription: scene,
    alt,
  };
}

// ─── Homepage Prompts (~15) ─────────────────────────────────────────────────

const HOMEPAGE_PROMPTS: PromptDefinition[] = [
  hp(
    'hero-main',
    'Wide shot of a professional roofing crew working on a large colonial-style home. Lead roofer standing on the roof ridge directing the team below. Ladders propped against the house, bundles of architectural shingles visible. Clear autumn sky with mature oaks and maples in the background. Confident, organized work scene.',
    'Professional roofing crew installing new roof on colonial home in Essex County NJ'
  ),
  hp(
    'residential-split',
    'Close-up of a skilled roofer replacing architectural shingles on a two-story Dutch colonial home. Hands carefully aligning a new shingle with a nail gun. Old worn shingles partially removed, new underlayment visible beneath. Crisp detail on the shingle texture and craftsmanship.',
    'Residential roof repair close-up showing shingle replacement on a two-story home in NJ'
  ),
  hp(
    'commercial-split',
    'Commercial flat roof scene on a mid-rise office building. Worker in safety harness applying TPO membrane with a hot-air welder. HVAC units and ductwork visible in the background. Urban rooftop with New Jersey skyline in the distance.',
    'Commercial flat roof membrane installation on office building in Essex County NJ'
  ),
  hp(
    'why-licensed',
    'Professional roofing contractor reviewing blueprints and project plans on the covered porch of a craftsman-style home. Homeowner beside him pointing at the documents. Clipboard, measuring tape, and samples visible. Trust and professionalism conveyed through body language.',
    'Licensed roofing contractor reviewing project plans with homeowner in New Jersey'
  ),
  hp(
    'why-experience',
    'Experienced roofer in his 50s carefully inspecting a ridge cap along the peak of a suburban home. Essex County tree-lined neighborhood visible behind the roofline. Focus on expertise and attention to detail. Weathered hands showing years of trade knowledge.',
    'Experienced roofer inspecting ridge cap on suburban home in Essex County NJ'
  ),
  hp(
    'why-warranty',
    'Tight close-up of hands installing a premium architectural shingle, pressing it into place with precision. The texture and layering of the GAF Timberline-style shingle clearly visible. Quality craftsmanship detail shot emphasizing warranty-grade installation.',
    'Quality architectural shingle installation detail showing premium craftsmanship'
  ),
  hp(
    'why-team',
    'Full crew of six roofers posed in front of a completed residential roofing project. New charcoal-gray architectural shingle roof behind them. Friendly, approachable group photo. Mix of ages, all in matching uniforms. Tools and ladder visible. Proud completion moment.',
    'Professional roofing team in front of completed residential roof project in NJ'
  ),
  hp(
    'pricing-estimate',
    'Roofing contractor on a ladder measuring the roof edge of a Cape Cod-style home with a measuring tape. Tablet device tucked under one arm for digital estimating. Clipboard notes visible. Methodical, professional estimation scene.',
    'Roofing contractor measuring roof for cost estimate on Cape Cod home in NJ'
  ),
  hp(
    'repair-services',
    'Active roof replacement scene from a medium distance. Workers removing old weathered shingles and stacking them in a dump trailer below. Fresh synthetic underlayment exposed on half the roof, new shingles being carried up on the other half. Dynamic work in progress.',
    'Active roof replacement showing old shingle removal and new installation in NJ'
  ),
  hp(
    'consultation',
    'Roofing contractor and homeowner walking together in the front yard of a two-story Victorian home, both looking up at the roof. Contractor pointing at a trouble area near the chimney flashing. Collaborative consultation moment.',
    'Roofing consultation with homeowner examining roof issues on Victorian home in NJ'
  ),
  hp(
    'faq-options',
    'Homeowner seated at a patio table examining roofing material samples laid out before them. Contractor explaining options -- various shingle colors, metal panel swatches, and a slate tile sample visible. Educational, decision-making scene.',
    'Homeowner reviewing roofing material options with contractor in New Jersey'
  ),
  hp(
    'service-map',
    'Elevated neighborhood view of a typical Essex County NJ suburban street. Mix of colonial, Cape Cod, and split-level homes with varying roof types. Mature deciduous trees along the street. A forest green work truck parked on the residential street.',
    'Aerial view of Essex County NJ residential neighborhood with varied roof types'
  ),
  hp(
    'trust-bar',
    'Close-up of a roofer securing a copper drip edge along a fascia board. Gloved hands working with tin snips and a hammer. Precise metalwork craftsmanship. The copper gleaming against dark wood fascia.',
    'Expert roofer installing copper drip edge showing precision metalwork'
  ),
  hp(
    'cta-final',
    'Warm dusk scene of a beautifully completed residential roof on a two-story colonial home. The new dark charcoal shingles gleaming under a gentle sky. Warm porch lights on, manicured lawn. Curb appeal transformation shot.',
    'Beautifully completed residential roof at dusk on colonial home in Essex County NJ'
  ),
  hp(
    'emergency-banner',
    'Dramatic post-storm scene of a roofer securing a blue emergency tarp over a damaged roof section. Wind-blown leaves and a dark gray sky in the background. Urgency and professionalism captured in one frame.',
    'Emergency roof tarping after storm damage by professional roofer in NJ'
  ),
];

// ─── Service Hero Prompts (65) ──────────────────────────────────────────────

const SERVICE_HERO_PROMPTS: PromptDefinition[] = [
  // --- repair-maintenance (10) ---
  sh('roof-repair', 'Roofer carefully removing damaged shingles and installing new ones on a two-story colonial home. Close angle showing the repair zone with old versus new shingles clearly visible. Tool belt and nail gun in hand.', 'Roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('roof-replacement', 'Full roof replacement in progress on a large suburban home. One half stripped to the deck with new underlayment, the other half with fresh architectural shingles. Multiple workers coordinating. Dump trailer with old debris below.', 'Roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('emergency-roof-repair', 'Roofer working urgently to patch a storm-damaged section of roof with plywood and a tarp under overcast skies. Rain gear visible. Broken tree limb on the ground nearby. Fast-response emergency scene.', 'Emergency roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('roof-inspection', 'Professional roofer on a roof conducting a detailed inspection, bending down to examine shingle condition near a vent pipe. Digital camera in one hand, clipboard in the other. Systematic assessment scene.', 'Roof inspection services in Essex County NJ by licensed roofing contractor'),
  sh('roof-maintenance-programs', 'Roofer clearing debris and leaves from roof valleys and gutters during a scheduled maintenance visit. Leaf blower in hand, clean section contrasting with debris-filled section. Preventive care scene.', 'Roof maintenance program services in Essex County NJ by licensed roofing contractor'),
  sh('roof-leak-repair', 'Roofer carefully lifting shingles around a chimney base to locate and seal a leak point. Caulk gun and flashing cement visible. Water stain trace visible on the exposed deck. Diagnostic repair scene.', 'Roof leak repair services in Essex County NJ by licensed roofing contractor'),
  sh('storm-damage-roof-repair', 'Worker documenting and repairing storm damage on a residential roof. Missing shingles and exposed underlayment visible. Clipboard with damage notes. Dark post-storm sky clearing in the background.', 'Storm damage roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('hail-damage-roof-repair', 'Close-up of hail-dented and cracked shingles on a residential roof, with a roofer marking the damage with chalk circles. Insurance documentation clipboard visible. Granule loss and impact craters visible.', 'Hail damage roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('wind-damage-roof-repair', 'Roof with several shingles blown back and lifted by wind, exposing the underlayment beneath. A roofer securing new shingles in the wind-damaged zone. Fallen branch nearby.', 'Wind damage roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('roof-cleaning-moss-removal', 'Worker on a residential roof using a soft-wash spray system to clean moss and algae from dark-stained shingles. Half the roof cleaned (bright) versus half still stained (green-black). Dramatic before/after split.', 'Roof cleaning and moss removal services in Essex County NJ by licensed roofing contractor'),

  // --- residential-roof-types (9) ---
  sh('residential-roof-installation', 'Beautiful completed residential roof installation on a two-story colonial home. New charcoal architectural shingles with clean ridge cap. Pristine gutters, crisp fascia trim. Perfect curb appeal shot.', 'Residential roof installation services in Essex County NJ by licensed roofing contractor'),
  sh('asphalt-shingle-roofing', 'Stunning completed asphalt shingle roof on a large Cape Cod home. Dimensional architectural shingles in weathered wood color, showing beautiful shadow lines and depth. Clean ridge vent, matching hip caps.', 'Asphalt shingle roofing services in Essex County NJ by licensed roofing contractor'),
  sh('slate-roof-installation-repair', 'Close-up of a genuine slate roof on a Victorian home. Individual slate tiles in variegated grays and purples, copper flashings gleaming at valleys and chimneys. Historic elegance and permanence.', 'Slate roof installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('wood-shake-roofing', 'Completed wood shake roof on a craftsman-style bungalow. Natural cedar shakes with silver-gray patina, showing the textured, rustic character. Copper ridge cap and finials. Mature trees surrounding the home.', 'Wood shake roofing services in Essex County NJ by licensed roofing contractor'),
  sh('metal-roof-installation-repair', 'Standing seam metal roof on a modern farmhouse-style home. Deep charcoal metal panels with crisp vertical seams gleaming in the light. Clean lines and contemporary aesthetic. Snow guards visible at eaves.', 'Metal roof installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('flat-roof-installation-repair', 'Residential flat roof section on a contemporary split-level home viewed from a slight elevation. Clean white TPO membrane with neat seams. Scupper drain and railing visible. Modern suburban architecture.', 'Flat roof installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('tile-roof-installation-repair', 'Mediterranean-style home with a clay tile roof in terracotta color. Rows of barrel tiles creating dramatic shadow patterns. Ridge tiles and hip details visible. Stucco exterior complementing the tile.', 'Tile roof installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('cedar-shake-roofing', 'Fresh cedar shake installation in progress on a Tudor-style home. Worker hand-nailing individual cedar shakes, showing the graduated exposure pattern. Rich warm cedar color against the half-timbered exterior.', 'Cedar shake roofing services in Essex County NJ by licensed roofing contractor'),
  sh('rubber-roofing-epdm', 'Worker applying EPDM rubber membrane on a residential flat roof. Black rubber sheet being carefully rolled out and adhered. Seam roller and adhesive bucket visible. Clean, methodical installation.', 'Rubber roofing EPDM services in Essex County NJ by licensed roofing contractor'),

  // --- commercial-roof-types (8) ---
  sh('tpo-roofing-installation', 'Commercial roof with bright white TPO membrane being heat-welded by a worker in safety gear. Hot-air welder creating a seam. HVAC units in background. Clean commercial rooftop scene.', 'TPO roofing installation services in Essex County NJ by licensed roofing contractor'),
  sh('epdm-commercial-roofing', 'Wide commercial flat roof with EPDM rubber membrane. Worker checking a seam near a roof drain. Industrial rooftop with pipes and vents. Warehouse building below.', 'EPDM commercial roofing services in Essex County NJ by licensed roofing contractor'),
  sh('modified-bitumen-roofing', 'Torch-applied modified bitumen roofing installation on a commercial building. Worker with a torch carefully heating and rolling the membrane. Distinctive granulated surface visible. Professional fire-safe technique.', 'Modified bitumen roofing services in Essex County NJ by licensed roofing contractor'),
  sh('built-up-roofing', 'Cross-section view of a built-up roof system being installed on a commercial structure. Multiple layers visible: base sheet, interply felts, and flood coat. Mop and kettle visible. Multi-layer system detail.', 'Built-up roofing services in Essex County NJ by licensed roofing contractor'),
  sh('commercial-metal-roofing', 'Large commercial building with standing seam metal roof panels in galvalume silver. Low-angle shot showing the long clean runs of metal panels. Parapet walls and commercial HVAC. Industrial scale roofing.', 'Commercial metal roofing services in Essex County NJ by licensed roofing contractor'),
  sh('pvc-roofing', 'Bright white PVC membrane roof on a restaurant or retail building. Worker checking a heat-welded seam near a roof penetration. Clean white surface reflecting light. Energy-efficient commercial roof.', 'PVC roofing services in Essex County NJ by licensed roofing contractor'),
  sh('green-roof-installation', 'Vegetated green roof system on a modern commercial building. Sedum plants growing in trays on the rooftop. Drainage layers visible at the edge. Urban garden-style commercial roof with city skyline.', 'Green roof installation services in Essex County NJ by licensed roofing contractor'),
  sh('spray-foam-roofing', 'Spray polyurethane foam being applied to a commercial roof by a worker in full PPE with a spray gun. Foam expanding and forming a seamless layer. Equipment hoses trailing back to a truck-mounted rig.', 'Spray foam roofing services in Essex County NJ by licensed roofing contractor'),

  // --- components-specialty (10) ---
  sh('roof-flashing-installation-repair', 'Close-up of a roofer installing step flashing along a dormer wall intersection. Aluminum flashing pieces being woven between shingle courses. Precision metalwork with tin snips and hammer.', 'Roof flashing installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('chimney-flashing-repair', 'Roofer installing new lead and copper counter-flashing around a brick chimney on a colonial home. Mortar joint being sealed with flashing cement. Chimney cap visible above. Critical waterproofing detail.', 'Chimney flashing repair services in Essex County NJ by licensed roofing contractor'),
  sh('gutter-installation-repair', 'Worker installing seamless aluminum gutters along the fascia of a residential home. Gutter machine on the ground forming the continuous gutter. Downspout connection being secured. Clean drainage system.', 'Gutter installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('gutter-guard-installation', 'Close-up of micro-mesh gutter guards being snapped into place over an existing gutter. Leaf debris visible on the guard surface while water flows through. Maintenance-free protection being installed.', 'Gutter guard installation services in Essex County NJ by licensed roofing contractor'),
  sh('skylight-installation-repair', 'Worker carefully installing a Velux-style skylight into a roof opening. Flashing kit components laid out nearby. Interior light streaming through from below. Precision framing and waterproofing.', 'Skylight installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('fascia-installation-repair', 'Roofer installing new prefinished aluminum fascia wrap over wood fascia boards. Clean white aluminum being bent and nailed into place. Old rotted wood fascia section removed beside the new installation.', 'Fascia installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('soffit-installation-repair', 'Worker installing perforated vinyl soffit panels under a roof overhang. Ventilation channels visible. J-channel trim being aligned. Attic ventilation and clean underside finishing work.', 'Soffit installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('roof-vent-installation-repair', 'Roofer installing a ridge vent along the peak of a residential roof. Shingle-over ridge vent being nailed in place. Proper ventilation system installation showing the gap cut along the ridge.', 'Roof vent installation and repair services in Essex County NJ by licensed roofing contractor'),
  sh('roof-waterproofing', 'Worker applying a liquid waterproofing membrane to a flat roof deck area around a penetration. Roller and bucket of elastomeric coating. Creating a seamless waterproof barrier. Detail-focused waterproofing work.', 'Roof waterproofing services in Essex County NJ by licensed roofing contractor'),
  sh('roof-deck-repair-replacement', 'Roofer replacing rotted plywood roof decking on a stripped roof. Old damaged decking removed showing rafters beneath. New CDX plywood sheet being positioned and nailed. Structural repair in progress.', 'Roof deck repair and replacement services in Essex County NJ by licensed roofing contractor'),

  // --- energy-solar (5) ---
  sh('solar-panel-roofing-installation', 'Solar panel array being installed on a residential asphalt shingle roof. Worker securing racking system with mounting bolts. Panels half-installed showing the progression. Bright suburban NJ setting.', 'Solar panel roofing installation services in Essex County NJ by licensed roofing contractor'),
  sh('solar-shingle-installation', 'Close-up of solar shingles integrated seamlessly into a residential roof. The photovoltaic shingles visually blending with surrounding standard shingles. Sleek, modern appearance. Generating clean energy.', 'Solar shingle installation services in Essex County NJ by licensed roofing contractor'),
  sh('energy-efficient-roofing-solutions', 'Split view of an energy-efficient cool roof on a residential home. White reflective membrane on one section, radiant barrier visible on exposed attic rafters. Energy savings and comfort focus.', 'Energy efficient roofing solutions in Essex County NJ by licensed roofing contractor'),
  sh('silicone-roof-coating', 'Worker spraying silicone roof coating onto an existing flat commercial roof. White reflective coating being applied evenly with an airless sprayer. Previously coated section gleaming white beside the uncoated area.', 'Silicone roof coating services in Essex County NJ by licensed roofing contractor'),
  sh('silicone-elastomeric-roof-coating', 'Close-up of elastomeric roof coating being rolled onto a weathered flat roof surface. Thick white coating covering hairline cracks and seams. Restoration without full replacement. Cost-effective solution detail.', 'Silicone elastomeric roof coating services in Essex County NJ by licensed roofing contractor'),

  // --- commercial-services (5) ---
  sh('commercial-roof-installation', 'Large-scale commercial roof installation on a warehouse building. Crane lifting rolls of TPO membrane onto the roof. Full crew working in safety harnesses. Industrial-scale roofing operation.', 'Commercial roof installation services in Essex County NJ by licensed roofing contractor'),
  sh('commercial-roof-repair', 'Commercial building roof with a worker patching a damaged section of membrane. Tool kit and repair materials spread nearby. Office building HVAC units in background. Professional commercial maintenance.', 'Commercial roof repair services in Essex County NJ by licensed roofing contractor'),
  sh('commercial-roof-replacement', 'Massive commercial reroof project. Old built-up roofing being torn off and new insulation boards being laid on a retail building. Multiple workers, large debris containers. Major project scope.', 'Commercial roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('roof-thermal-imaging-inspections', 'Roofing inspector on a commercial flat roof holding a thermal imaging camera pointed at the roof surface. The thermal camera display showing heat patterns indicating moisture. High-tech diagnostic scene.', 'Roof thermal imaging inspection services in Essex County NJ by licensed roofing contractor'),
  sh('infrared-roof-leak-detection', 'Inspector using a handheld infrared scanner on a large commercial flat roof at dawn. Temperature differential patterns revealing hidden moisture. Diagnostic technology for leak detection.', 'Infrared roof leak detection services in Essex County NJ by licensed roofing contractor'),

  // --- design-consultation (3) ---
  sh('custom-roof-design-consultation', 'Architect and roofing contractor collaborating over roof design drawings on a large worktable. Material samples, color swatches, and architectural plans visible. Premium home renovation planning scene.', 'Custom roof design and consultation services in Essex County NJ by licensed roofing contractor'),
  sh('historic-roof-restoration', 'Worker carefully restoring a slate roof on a Victorian-era home. Salvaged slate tiles being reinstalled with copper nails. Original ornate ridge cresting visible. Historic preservation craftsmanship.', 'Historic roof restoration services in Essex County NJ by licensed roofing contractor'),
  sh('roof-ice-dam-prevention', 'Cross-section view of a roof eave showing ice dam prevention measures: heated cable along the eave edge, proper ventilation baffles in the attic, and ice and water shield membrane. Winter scene with snow on roof.', 'Roof ice dam prevention services in Essex County NJ by licensed roofing contractor'),

  // --- replacement-sub-pages (15) ---
  sh('full-roof-tear-off', 'Workers aggressively stripping an entire old roof down to the bare decking. Shingle debris cascading into a dumpster via chutes. Full decking exposed, ready for new underlayment. Complete teardown action.', 'Full roof tear off services in Essex County NJ by licensed roofing contractor'),
  sh('roof-overlay-installation', 'New architectural shingles being laid directly over an existing layer of older shingles. Worker nailing new shingles with the old layer visible beneath at the starter edge. Overlay installation technique.', 'Roof overlay installation services in Essex County NJ by licensed roofing contractor'),
  sh('re-roofing', 'Mid-process reroof on a ranch-style home. Half the roof with fresh new shingles, the other half with old weathered shingles. Sharp contrast line where new meets old. Transformation in progress.', 'Re-roofing services in Essex County NJ by licensed roofing contractor'),
  sh('insurance-roof-replacement', 'Roofing contractor and homeowner reviewing insurance claim paperwork on the front porch. Damaged roof visible in background with a tarp. Clipboard, insurance forms, and documentation. Claims process scene.', 'Insurance roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('storm-damage-roof-replacement', 'Residential home after severe storm with significant roof damage. Tree limb on the roof, missing shingles, and exposed decking. Emergency crew arriving with tarps and equipment to begin replacement.', 'Storm damage roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('aging-roof-replacement', 'Side-by-side comparison of an aging, curling, moss-covered roof and the same home with a brand-new architectural shingle roof. Dramatic before/after curb appeal transformation.', 'Aging roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('roof-replacement-after-leak', 'Interior view looking up at a ceiling with water stain damage, transitioning to an exterior view of the corresponding roof area being replaced. Water damage motivation for full replacement.', 'Roof replacement after leak services in Essex County NJ by licensed roofing contractor'),
  sh('fire-damage-roof-replacement', 'Partially fire-damaged residential roof with charred rafters and burned-through decking. Restoration crew beginning the rebuild with new lumber and structural materials. Recovery and rebuilding.', 'Fire damage roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('roof-replacement-cost', 'Roofing contractor at a desk with a calculator, material price sheets, and a laptop showing an estimate. Shingle samples and a tape measure on the desk. Cost planning and estimation scene.', 'Roof replacement cost estimation in Essex County NJ by licensed roofing contractor'),
  sh('asphalt-shingle-roof-replacement', 'Worker installing new asphalt architectural shingles on a fully stripped and prepped colonial home roof. Fresh ice and water shield visible at eaves. Clean new installation in progress.', 'Asphalt shingle roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('metal-roof-replacement', 'Old asphalt shingle roof being replaced with new standing seam metal panels. Half metal installed, half still showing the stripped deck. Metal panels being lifted into position by two workers.', 'Metal roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('slate-roof-replacement', 'Skilled craftsman replacing damaged slate tiles on a historic Essex County home. Individual slates being positioned with a slate ripper tool and copper nails. Precision historic material replacement.', 'Slate roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('tile-roof-replacement', 'Workers removing old cracked clay roof tiles and replacing with new matching terracotta tiles on a Mediterranean-style home. Old versus new tiles visible side by side on the roof.', 'Tile roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('flat-roof-replacement', 'Commercial flat roof being completely replaced. Old membrane torn off, new insulation boards being laid, and fresh TPO membrane being rolled out. Layered system installation on a large flat surface.', 'Flat roof replacement services in Essex County NJ by licensed roofing contractor'),
  sh('cedar-shake-roof-replacement', 'Old weathered cedar shake roof being replaced with new hand-split cedar shakes. Contrast between silver-gray aged shakes being removed and rich brown new shakes being installed. Natural beauty.', 'Cedar shake roof replacement services in Essex County NJ by licensed roofing contractor'),
];

// ─── City Hero Prompts (21) ─────────────────────────────────────────────────

const CITY_HERO_PROMPTS: PromptDefinition[] = [
  ch('newark', 'Urban Newark NJ streetscape with brownstone row houses and historic brick buildings. Forest green roofing truck parked on the street. Worker on a brownstone roof with the downtown Newark skyline visible. Industrial meets residential neighborhood.', 'Professional roofing services in Newark NJ -- brownstone and urban row house neighborhood'),
  ch('east-orange', 'East Orange NJ residential street with Victorian two-family homes and garden apartment buildings. Mature street trees lining the sidewalk. Forest green truck in the foreground. Multi-family housing neighborhood with varied roof lines.', 'Professional roofing services in East Orange NJ -- Victorian multi-family neighborhood'),
  ch('orange', 'Compact Orange NJ residential street with tightly packed colonial and Cape Cod homes. Main Street storefronts visible in the background. Worker on a roof with the Essex County skyline in the distance. Revitalizing community feel.', 'Professional roofing services in Orange NJ -- compact residential neighborhood'),
  ch('west-orange', 'West Orange NJ hillside homes ascending toward the Watchung ridge. Mix of colonials and split-levels at varying elevations. Forest green truck winding up a hill street. Mountain backdrop with suburban homes.', 'Professional roofing services in West Orange NJ -- hillside residential neighborhood'),
  ch('montclair', 'Tree-lined Montclair NJ street with ornate Victorian and Tudor-style homes. Decorative gables, turrets, and steep pitched roofs. Forest green truck in the dappled shade of old-growth trees. Affluent, architecturally rich neighborhood.', 'Professional roofing services in Montclair NJ -- Victorian and Tudor home neighborhood'),
  ch('bloomfield', 'Bloomfield NJ residential block with well-maintained colonial and Cape Cod homes. Neat front yards with picket fences. Mature shade trees. Forest green truck on a quiet suburban street. Community pride neighborhood.', 'Professional roofing services in Bloomfield NJ -- colonial and Cape Cod neighborhood'),
  ch('belleville', 'Belleville NJ residential street with compact homes on smaller lots. Italian-American neighborhood character with brick-front ranches and colonials. Close-set homes with varied roof lines. Forest green truck visible.', 'Professional roofing services in Belleville NJ -- compact residential neighborhood'),
  ch('nutley', 'Nutley NJ tree-canopied street with Tudor and colonial homes. Distinctive half-timber Tudor facades with steep-pitched roofs. Well-maintained suburban neighborhood. Forest green truck parked near a Tudor home.', 'Professional roofing services in Nutley NJ -- Tudor and colonial home neighborhood'),
  ch('irvington', 'Irvington NJ residential street with multi-family Victorian homes and apartment buildings. Urban residential neighborhood with mature trees. Forest green truck in the foreground. Working-class community character.', 'Professional roofing services in Irvington NJ -- multi-family residential neighborhood'),
  ch('maplewood', 'Maplewood NJ Village district-adjacent residential street. Charming mix of Victorian, Tudor, and colonial homes with lush landscaping. Wide tree-lined street with sidewalks. Forest green truck near a Victorian home.', 'Professional roofing services in Maplewood NJ -- Village district residential neighborhood'),
  ch('south-orange', 'South Orange NJ upscale residential street near the Village center. Large Victorian and colonial homes with wraparound porches and complex roof lines. Seton Hall University campus glimpsed in the distance. Forest green truck.', 'Professional roofing services in South Orange NJ -- upscale Victorian neighborhood'),
  ch('livingston', 'Livingston NJ suburban street with split-level and raised ranch homes from the 1960s-70s. Well-maintained mid-century suburban neighborhood. Wide driveways and mature landscaping. Forest green truck on the street.', 'Professional roofing services in Livingston NJ -- split-level suburban neighborhood'),
  ch('millburn', 'Millburn-Short Hills NJ estate neighborhood with large luxury homes featuring slate and copper roofing. Long driveways, stone walls, and professionally landscaped grounds. Prestigious residential setting. Forest green truck.', 'Professional roofing services in Millburn NJ -- luxury estate neighborhood'),
  ch('cedar-grove', 'Cedar Grove NJ ranch-home-dominated street with low-pitch roofs. Watchung foothills visible in the background. Compact suburban neighborhood with mature trees. Forest green truck visible in the scene.', 'Professional roofing services in Cedar Grove NJ -- ranch home neighborhood'),
  ch('verona', 'Verona NJ residential street with split-level and bi-level homes featuring multi-plane roofs. Typical mid-century Essex County suburban development. Well-kept homes with colorful autumn foliage. Forest green truck.', 'Professional roofing services in Verona NJ -- split-level home neighborhood'),
  ch('glen-ridge', 'Glen Ridge NJ historic district with gas-lit streets and Victorian-era homes. Ornate gingerbread trim, slate roofs, and wraparound porches. Protected historic architecture. Forest green truck carefully parked.', 'Professional roofing services in Glen Ridge NJ -- historic Victorian neighborhood'),
  ch('caldwell', 'Caldwell NJ small-town Main Street area with nearby residential streets of colonial homes. Charming borough center with small shops and tree-lined residential blocks. Community character. Forest green truck.', 'Professional roofing services in Caldwell NJ -- small-town residential neighborhood'),
  ch('essex-fells', 'Essex Fells NJ secluded estate-style homes on large wooded lots. Long winding driveways through dense tree canopy. Slate and copper roofing on substantial homes. Exclusive, private setting. Forest green truck.', 'Professional roofing services in Essex Fells NJ -- estate home neighborhood'),
  ch('fairfield', 'Fairfield NJ Route 46 corridor visible in background with residential homes in the foreground. Mix of newer construction and established suburban homes. Commercial and residential dual character. Forest green truck.', 'Professional roofing services in Fairfield NJ -- suburban residential neighborhood'),
  ch('north-caldwell', 'North Caldwell NJ premium residential street with large colonial and contemporary homes on generous lots. Manicured lawns and mature landscaping. Upscale suburban neighborhood. Forest green truck.', 'Professional roofing services in North Caldwell NJ -- premium residential neighborhood'),
  ch('roseland', 'Roseland NJ residential street with Eagle Rock Avenue visible. Corporate office buildings glimpsed behind residential colonials. Mix of residential and corporate park character. Forest green truck.', 'Professional roofing services in Roseland NJ -- residential and corporate park neighborhood'),
];

// ─── Gallery Before/After Prompts (16 -- 8 pairs) ──────────────────────────

const GALLERY_PROMPTS: PromptDefinition[] = [
  // Pair 1: Missing shingles -> pristine
  gb('residential-shingles', 'Residential roof with a large section of missing and wind-damaged shingles. Exposed tar paper and nail holes visible. Granule-covered gutter. Realistic moderate damage, not catastrophic.', 'Before: missing and wind-damaged shingles on residential roof in NJ'),
  ga('residential-shingles', 'Same residential roof with brand-new architectural shingles installed. Pristine charcoal shingles with clean ridge cap and hip caps. No damage visible. Perfect completion.', 'After: new architectural shingle installation completed on residential roof in NJ'),

  // Pair 2: Active leak -> sealed
  gb('leak-damage', 'Residential roof area around a chimney with visible water damage. Dark water stains on the surrounding shingles, deteriorated flashing, and moss growth. Moisture damage zone.', 'Before: active roof leak around chimney with water damage and deteriorated flashing'),
  ga('leak-damage', 'Same chimney area with brand-new copper step and counter flashing. New shingles surrounding the chimney. Clean, watertight seal. Professional flashing craftsmanship.', 'After: professional chimney flashing repair with new copper flashing and shingles'),

  // Pair 3: Worn aged roof -> new architectural
  gb('aged-roof', 'Twenty-year-old residential roof with curling, cracking, and fading three-tab shingles. Moss in the valleys. Granule loss exposing the asphalt. End-of-life roof condition.', 'Before: aging 20-year-old roof with curling and cracking shingles'),
  ga('aged-roof', 'Same home with a stunning new dimensional architectural shingle roof. Rich color depth and shadow lines. Clean valleys, ridge vent, and drip edge. Dramatic transformation.', 'After: new dimensional architectural shingle roof installation with dramatic transformation'),

  // Pair 4: Storm damage -> complete replacement
  gb('storm-damage', 'Residential roof after a major storm. Multiple shingle sections torn off, exposed underlayment, a broken vent pipe boot, and debris scattered. Tree branch resting on the damaged area.', 'Before: severe storm damage with torn shingles and exposed roof deck'),
  ga('storm-damage', 'Completely replaced residential roof after storm damage. New shingles, new vent boots, new ridge cap. No trace of prior damage. Full restoration complete.', 'After: complete roof replacement restoring home after storm damage'),

  // Pair 5: Ponding flat roof -> new drainage
  gb('commercial-ponding', 'Commercial flat roof with standing water (ponding) in low spots. Debris floating in the water. Deteriorated membrane visible at the edges of the pond. Drainage failure evident.', 'Before: commercial flat roof with ponding water and drainage failure'),
  ga('commercial-ponding', 'Same commercial flat roof with new TPO membrane, tapered insulation for positive drainage, and new roof drains. No standing water. Clean white membrane surface.', 'After: new TPO membrane with tapered insulation for proper drainage on commercial roof'),

  // Pair 6: Torn membrane -> new TPO
  gb('commercial-membrane', 'Commercial flat roof with large tears and separations in an old EPDM membrane. Seams pulling apart, substrate visible through the tears. Patched areas failing.', 'Before: torn and separated EPDM membrane on commercial flat roof'),
  ga('commercial-membrane', 'Same commercial roof with fresh white TPO membrane installed. Heat-welded seams, clean termination bars at parapet walls. Professional commercial roof system.', 'After: new TPO membrane installation on commercial flat roof with heat-welded seams'),

  // Pair 7: Deteriorated metal -> restored metal
  gb('commercial-metal', 'Commercial metal roof with heavy rust, corrosion, and loose fasteners. Panels lifting at seams. Paint peeling and weathering. Years of neglect visible.', 'Before: rusted and corroded commercial metal roof with loose panels'),
  ga('commercial-metal', 'Same commercial building with restored metal roof panels. Fresh coating, new fasteners, sealed seams. Matching replacement panels where needed. Industrial-quality restoration.', 'After: restored commercial metal roof with new coating and sealed seams'),

  // Pair 8: Failing BUR -> new modified bitumen
  gb('commercial-bur', 'Failing built-up roof with alligator cracking, blisters, and exposed felt layers. Gravel surface eroded in patches. Obvious end-of-life BUR system.', 'Before: failing built-up roof with cracking, blistering, and exposed layers'),
  ga('commercial-bur', 'New modified bitumen roof replacing the old BUR system. Smooth granulated cap sheet with neat torch-applied seams. Clean edges and flashing. Modern flat roof system.', 'After: new modified bitumen roofing system replacing failing built-up roof'),
];

// ─── Shared Content Pool Prompts (~20) ──────────────────────────────────────

const CONTENT_POOL_PROMPTS: PromptDefinition[] = [
  // content-crew (~5)
  cp('content-crew-working', 'content-crew', 'Two roofers working side by side on a residential roof, one nailing shingles while the other feeds materials. Synchronized teamwork. Suburban NJ home below.', 'NJ roofing crew members working together on residential roof installation'),
  cp('content-crew-meeting', 'content-crew', 'Roofing crew gathered around the tailgate of a work truck for a morning briefing. Foreman pointing at a project plan. Hard hats and tool belts. Team coordination before starting work.', 'NJ roofing team morning briefing and project planning at job site'),
  cp('content-crew-safety', 'content-crew', 'Close-up of a roofer putting on fall protection harness and clipping into a roof anchor point. Safety glasses, hard hat, and gloves. Proper PPE compliance on a steep roof.', 'NJ roofer demonstrating proper fall protection and safety equipment'),
  cp('content-crew-loading', 'content-crew', 'Workers loading bundles of shingles from a delivery truck onto a conveyor/ladder hoist. Heavy material handling in a residential driveway. Organized staging area.', 'NJ roofing crew loading shingle materials for residential roof project'),
  cp('content-crew-break', 'content-crew', 'Roofing crew on a lunch break sitting on the tailgate and coolers. Friendly camaraderie, water bottles and lunch boxes. Suburban backdrop. Real workers, genuine moment.', 'NJ roofing crew taking a well-deserved break during residential project'),

  // content-materials (~5)
  cp('content-materials-shingles', 'content-materials', 'Stack of premium architectural shingle bundles in various colors on a pallet. Close-up showing the dimensional texture and color options. Material selection display.', 'Premium architectural roofing shingle bundles showing color variety', true),
  cp('content-materials-copper', 'content-materials', 'Close-up of copper flashing pieces and copper ridge cap sections. Bright new copper color with distinctive patina starting at edges. Precision-cut metalwork pieces.', 'Copper roofing flashing materials for premium residential installations', true),
  cp('content-materials-underlayment', 'content-materials', 'Roll of synthetic roof underlayment partially unrolled showing the distinctive textured surface. Brand-neutral view of the moisture barrier material. Protective layer.', 'Synthetic roof underlayment roll for moisture protection', true),
  cp('content-materials-ridge-vent', 'content-materials', 'Ridge vent product close-up showing the profile design with baffles and filter mesh. Cross-section visible. Proper attic ventilation component detail.', 'Ridge vent component for residential roof ventilation system', true),
  cp('content-materials-membrane', 'content-materials', 'Roll of white TPO commercial membrane material with cut samples showing the material thickness and reinforcement scrim. Commercial-grade roofing material.', 'TPO commercial roofing membrane material roll for flat roof systems', true),

  // content-consultation (~5)
  cp('content-consultation-measuring', 'content-consultation', 'Contractor on a roof measuring dimensions with a long tape measure and recording notes on a tablet. Systematic measurement process for accurate estimation.', 'NJ roofing contractor measuring roof dimensions for project estimate'),
  cp('content-consultation-plans', 'content-consultation', 'Contractor and homeowner at a kitchen table reviewing roofing project plans and timeline. Material samples spread out. Transparent planning conversation.', 'NJ roofing contractor discussing project plans with homeowner'),
  cp('content-consultation-contract', 'content-consultation', 'Homeowner and contractor at a desk reviewing a printed contract. Pen in hand, clear terms visible. Professional business transaction. Trust and transparency.', 'NJ homeowner reviewing roofing contract with licensed contractor'),
  cp('content-consultation-pointing', 'content-consultation', 'Contractor and homeowner in the backyard, both looking up and pointing at a problem area on the roof. Gutters and fascia visible. Collaborative assessment.', 'NJ roofing contractor pointing out roof issues during consultation'),
  cp('content-consultation-samples', 'content-consultation', 'Contractor showing color sample boards of architectural shingles to a couple in their living room. Large sample boards with multiple options. Decision-making scene.', 'NJ roofing contractor showing shingle color samples to homeowners'),

  // content-seasonal (~5)
  cp('content-seasonal-winter', 'content-seasonal', 'New Jersey home in winter with snow on the roof and visible ice dams forming at the eaves. Icicles hanging from gutters. Cold weather roofing challenge illustration.', 'Winter ice dam formation on NJ residential roof requiring prevention', true),
  cp('content-seasonal-fall', 'content-seasonal', 'Gutters overflowing with autumn leaves on a NJ residential home. Colorful fall foliage in the yard. Neglected gutter maintenance illustration. Seasonal preparation need.', 'Fall leaf-covered gutters on NJ home needing seasonal maintenance', true),
  cp('content-seasonal-spring', 'content-seasonal', 'Residential roof after a spring storm showing lifted shingles and scattered small debris. Fresh green leaves on surrounding trees. Post-storm inspection needed.', 'Spring storm damage on NJ residential roof requiring repair assessment', true),
  cp('content-seasonal-summer', 'content-seasonal', 'Roofing crew working on a new installation on a bright summer day. Clear blue sky, full sunshine. Workers properly hydrated with water bottles nearby. Peak roofing season activity.', 'NJ roofing crew installing new roof during peak summer season', true),
  cp('content-seasonal-rain', 'content-seasonal', 'Close-up of rain water cascading off a well-functioning roof into clean gutters and downspout. Heavy rainfall. The drainage system performing perfectly. Wet weather protection.', 'NJ roof and gutter system properly handling heavy rainfall', true),
];

// ─── Combined Export ────────────────────────────────────────────────────────

/**
 * All prompt definitions (~137 total).
 */
export const ALL_PROMPTS: PromptDefinition[] = [
  ...HOMEPAGE_PROMPTS,
  ...SERVICE_HERO_PROMPTS,
  ...CITY_HERO_PROMPTS,
  ...GALLERY_PROMPTS,
  ...CONTENT_POOL_PROMPTS,
];

/**
 * Get all prompts for a specific category.
 */
export function getPromptsByCategory(
  category: ImageCategory
): PromptDefinition[] {
  return ALL_PROMPTS.filter((p) => p.category === category);
}

/**
 * Get a single prompt by its unique id.
 */
export function getPromptById(id: string): PromptDefinition | undefined {
  return ALL_PROMPTS.find((p) => p.id === id);
}
