// ─── Homepage "Roofing Contractor Services" detail block ─────────────────────
//
// Added for the Cora "Roofing Contractor" run (2026-09-01), whose homepage
// roadmap asks for +14 H3 tags, +13 H4 tags, +15 H3 variations, +10 exact
// matches in H3 and +34 variations in <b> tags. One section closes all of them.
//
// Vocabulary source: the LSA tabs of that run's own HTML export, hand-vetted.
// Cora's LSA numeric columns are degenerate (every row reads 1 for both "Pages
// With Word" and "Occurances on Tracked Page"), so only the PHRASE inventory
// was used, never its deficits. Every term below is a service Newark Quality
// Roofing sells (verified against services.ts) or standard roofing vocabulary.
// DELIBERATELY EXCLUDED as unverified for this business: siding, vinyl siding,
// masonry, new construction roofing, roof asset management, gutter cleaning,
// synthetic slate, and NRCA membership (NRCA may only ever be cited as a
// source, never claimed as an affiliation).
//
// Rich-text markers: {{text}} -> <b>, **text** -> <strong>, //text// -> <i>.

export interface HomeServiceDetail {
  h3: string;
  img: { src: string; alt: string };
  body: string[];
  point: { h4: string; body: string };
}

export const homeServicesDetailH2 =
  'What Our Roofing Contractors Handle Across Newark and Essex County, NJ';

export const homeServicesDetailIntro =
  '**Newark Quality Roofing works as a full-service roofing contractor on steep-slope and low-slope buildings alike.** The sections below set out what each service covers, the materials it uses, and the failure it answers.';

export const homeServicesDetail: HomeServiceDetail[] = [
  {
    h3: 'Roofing Contractors Diagnose the Failure Before Quoting Roof Repair',
    img: { src: '/images/sections/combo/section-process-inspection.webp', alt: 'Roofing contractor tracing a moisture path down a roof slope during a repair diagnosis' },
    body: [
      '**A roof repair quote follows a diagnosis, not a glance at the stain.** Water enters at one detail and travels before it shows inside, so the entry point and the ceiling mark are rarely in the same place.',
      'Our {{roofing contractors}} read the flashing, the laps, and the penetrations before the open field, because the detail fails before the covering does. A written record names each failure point found, and each one reaches the estimate as its own priced item. {{Roof repair cost}} in this market runs from a single pipe boot at the low end to a valley rebuild at the high end.',
    ],
    point: {
      h4: 'Shingle Damage, Stains, and Missing Asphalt Granules',
      body: 'The three readings that put a {{roof}} on the repair list are {{shingle damage}} visible from the ground, {{stains}} spreading across an interior ceiling, and //missing asphalt granules// collecting as sandy grit in the gutters. Granule loss strips the mineral layer shielding the asphalt from ultraviolet light, so the bared course weathers faster than the field around it.',
    },
  },
  {
    h3: 'Roofing Contractors Match Roof Replacement Materials to the Building',
    img: { src: '/images/heroes/service-full-roof-tear-off.webp', alt: 'Full roof tear-off exposing the sheathing before a roof replacement' },
    body: [
      '**Roof replacement starts from the structure, not the catalogue.** Deck condition, framing capacity, and roof pitch decide which coverings the building can carry before any product is chosen.',
      'A {{complete tear off}} removes every course to the {{roof decks}} beneath, which is the only way concealed rot is found and corrected. Where the existing assembly is sound and code permits it, a {{re roof}} over the original covering is the lower-cost path. Our {{roofing company}} names which case applies in writing before the crew is scheduled.',
    ],
    point: {
      h4: 'Complete Tear Off Compared With a Roof Recover',
      body: 'A tear-off exposes the sheathing so soft or delaminated panels are replaced; a {{recover}} leaves the original layer in place and adds weight to the structure. New Jersey limits how many layers a {{roof}} may carry, so the count already present governs whether a recover remains available at all.',
    },
  },
  {
    h3: 'Roofing Contractors Set Asphalt Shingle Roofs in Staggered Courses',
    img: { src: '/images/content/content-materials-shingles.webp', alt: 'Architectural asphalt shingles stacked and ready for installation' },
    body: [
      '**Asphalt shingle roofing is the covering most Newark, NJ homes carry.** Each course laps the one below it and covers that course\'s fastener line, which is what makes the assembly shed water rather than hold it.',
      'Newark Quality Roofing installs {{GAF}} Timberline and Timberline HDZ, {{Owens Corning}} roofing, and CertainTeed shingle products. {{Energy efficient shingles}} with reflective granules lower surface temperature on sun-exposed elevations. A manufacturer\'s {{lifetime warranty}} covers the material itself; our workmanship coverage answers the installation beneath it.',
    ],
    point: {
      h4: 'High Impact Resistant Roofing for Hail Exposure',
      body: 'Impact-rated {{shingles}} are classified by how they withstand a steel-ball drop test, with Class 4 the highest rating. {{High impact resistant roofing}} matters most on elevations that have already taken hail bruising, and some insurers price the rating into the policy.',
    },
  },
  {
    h3: 'Standing Seam Metal Roofs, Steel Panels, and Copper Roofing',
    img: { src: '/images/heroes/service-commercial-metal-roofing.webp', alt: 'Standing seam metal roof panels running to the ridge of a commercial building' },
    body: [
      '**Standing seam metal roofs join their panels at a raised vertical seam above the water line.** The fastener sits under the seam rather than through the panel face, which is why the assembly outlasts an exposed-fastener roof.',
      'Panel substrate sets the service life: {{steel}} carries a coating that governs corrosion resistance, {{aluminum}} resists salt-driven corrosion, {{zinc}} and {{copper roofing}} weather to a stable patina rather than rusting. A {{rusty metal roof}} is read at the fasteners and the panel laps first, because that is where the coating breaks down.',
    ],
    point: {
      h4: 'Metal Roof Retrofit Over an Existing Assembly',
      body: 'A {{retrofit}} frames a new metal system above the {{roof}} already in place, most often on a low-slope commercial building where tear-off would interrupt operations. The framing transfers load to the structure below, so capacity is confirmed before the sub-purlins go down.',
    },
  },
  {
    h3: 'Slate, Concrete Tile, and Historic Roof Coverings in Newark, NJ',
    img: { src: '/images/heroes/service-historic-roof-restoration.webp', alt: 'Historic slate roof restoration on a Victorian-era Newark, NJ property' },
    body: [
      '**Slate and concrete tile are the heaviest coverings a Newark roof carries.** Both outlast asphalt by decades, and both demand framing rated for the load before a single piece is set.',
      'Forest Hill and the North Ward hold Victorian-era slate that predates modern building codes. Repair on those roofs replaces individual slates and the copper flashing worked around them, rather than resurfacing the plane. Matching the existing size, colour, and exposure is what keeps a repair invisible from the street.',
    ],
    point: {
      h4: 'Snow Retention on Steep Slate and Metal Slopes',
      body: '{{Snow retention}} systems hold accumulated snow on the slope so it melts in place instead of releasing in a sheet. {{Snow guards}} mounted above entries and walkways are the component that does it, and slate and metal need them more than asphalt because their surfaces shed faster.',
    },
  },
  {
    h3: 'Flat Roof Repair, Coating, and Single Ply Roofing Membranes',
    img: { src: '/images/heroes/service-silicone-roof-coating.webp', alt: 'Silicone roof coating rolled across a weathered low-slope membrane' },
    body: [
      '**Flat roof repair answers a covering that drains slowly rather than sheds.** Ponding water remaining more than 48 hours counts as a defect, and the minimum drainage slope is a quarter inch per foot, per NRCA.',
      '{{Single ply roofing membranes}} — TPO, PVC, and {{EPDM}} — are joined at overlapped laps rather than fastened through the field. {{Low slope roofing}} fails at those laps, at parapet transitions, and at rooftop penetrations long before the sheet itself wears out. {{Asphalt roll roofing}} and modified bitumen behave the same way at their seams.',
    ],
    point: {
      h4: 'Flat Roof Coating as a Restoration Path',
      body: 'A {{flat roof coating}} in silicone or acrylic is applied over a membrane that is weathered but still sound and still drained. It restores the surface and the reflectivity; it does not correct a low spot, a wet insulation layer, or an open seam, all of which are repaired first.',
    },
  },
  {
    h3: 'EPDM Rubber Roof Systems on Newark, NJ Commercial Buildings',
    img: { src: '/images/heroes/service-epdm-commercial-roofing.webp', alt: 'EPDM rubber membrane adhered across a flat commercial roof deck' },
    body: [
      '**An EPDM rubber roof is a single sheet of synthetic rubber ballasted, adhered, or mechanically fastened to the deck.** {{Flat rubber roofing}} is the same product under the name most building owners use for it.',
      'The Ironbound\'s warehouses and light-industrial blocks carry more of this membrane than any other covering. Its failures concentrate at the seams, at the flashing where the field turns up a parapet, and at the HVAC curbs punched through it. {{Commercial shingle}} work on the same buildings is limited to the pitched street-facing sections.',
    ],
    point: {
      h4: 'Rooftop HVAC Curbs and Service Traffic',
      body: 'Mechanical units concentrate both penetrations and foot traffic on one part of the {{roof}}. Every curb is a flashed detail with its own failure schedule, and the walking path between them wears the membrane faster than the field around it. Walk pads and a maintenance record address both.',
    },
  },
  {
    h3: 'Roof Decks, Fascia and Soffit Carry the Roof Above Them',
    img: { src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof deck sheathing replaced where the original panels had softened' },
    body: [
      '**The roof decks, fascia and soffit are structure, not trim.** The deck carries the fasteners, the fascia carries the gutter, and the soffit carries the intake ventilation the roof depends on.',
      'Water running behind a failed drip edge reaches these first and shows there before it shows inside. A repair that renews the covering above wet trim leaves the decay in place beneath a finished surface, so the reading order runs deck, trim, then covering.',
    ],
    point: {
      h4: 'Radiant Barrier and Attic Ventilation Work as One System',
      body: 'Intake at the soffit and exhaust at the ridge move air under the deck; a {{radiant barrier}} reduces the heat that reaches it by reflection. Neither substitutes for the other, and a repair at the eave that ignores the heat load above it returns the same ice dam the following winter.',
    },
  },
  {
    h3: 'Gutter Repair and Downspouts Move Water Off the Roof',
    img: { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Gutter and downspout carrying runoff away from a roof eave' },
    body: [
      '**Gutter repair restores the path water takes once it leaves the covering.** A gutter that has pulled from the fascia, split at a seam, or lost its pitch sends runoff down the wall instead of away from the foundation.',
      '{{Downspouts}} carry that water to grade, and an outlet blocked at the top loads the gutter until the hangers give. Concentrated runoff below a downspout outlet also strips granules from the course beneath it, which is a roof problem produced by a gutter fault.',
    ],
    point: {
      h4: 'Gutter Guards and Seasonal Debris Load',
      body: 'Guards reduce how much leaf litter reaches the trough, which matters most under mature street trees. They do not eliminate maintenance: fine grit still settles, and the outlet is still the first place a blockage forms.',
    },
  },
  {
    h3: 'Storm Restoration After Windstorm and Hail in Essex County, NJ',
    img: { src: '/images/heroes/service-wind-damage-roof-repair.webp', alt: 'Wind-damaged shingle courses lifted along a fastener line after a storm' },
    body: [
      '**Storm restoration covers every component one event opened, not the single opening that produced the stain.** A {{windstorm}} that strips courses on one plane commonly lifts flashing at the adjoining wall and opens a vent collar two planes away.',
      'Wind uplift creases tabs along a fastener line; hail bruises the mat at a measurable density. Both are datable, which is what separates event damage from accumulated wear when a claim is filed.',
    ],
    point: {
      h4: 'Code Upgrade Coverage on a Storm Claim',
      body: '{{Code upgrade coverage}} — ordinance-and-law cover on many policies — pays the difference between rebuilding the {{roof}} that was there and building one that meets current code. It matters most on older Newark buildings whose existing assembly predates the requirements now in force.',
    },
  },
  {
    h3: 'Roof Inspections and Maintenance Extend a Roof Service Life',
    img: { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Roofing contractor documenting flashing details during a roof inspection' },
    body: [
      '**Inspections and maintenance are what let a covering reach the top of its rated range.** Twice a year is the working cadence here, once after winter and once before it, because freeze-thaw and summer heat load work the same details in opposite directions.',
      'A {{roof assessment}} reads every penetration, the flashing at each chimney and vent, the laps across the field, and the drainage path to the gutter line. It establishes whether a roof needs work now or holds another season, which is a cheaper question to answer early.',
    ],
    point: {
      h4: 'The Written Record Is What an Adjuster Reads',
      body: 'Photographed detail with dates turns a maintenance file into evidence. When a storm claim follows, the record showing a detail was sound last spring is what separates event damage from a pre-existing condition.',
    },
  },
  {
    h3: 'Roof Valley Details Concentrate the Water Two Planes Shed',
    img: { src: '/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Ice dam holding meltwater behind a snow-covered roof eave and valley' },
    body: [
      '**A roof valley carries the runoff of both slopes that meet in it.** That concentration is why valley metal fails before the field on either side of it.',
      'An open valley leaves the metal exposed; a closed valley runs the courses across it. Either can hold, and either fails at the same place — the point where the lining terminates at the eave. Replacing valley metal removes and resets the shingle courses on both adjoining planes, which is why it prices at the top of the repair range.',
    ],
    point: {
      h4: 'Ice Dams Form Where Valley Meltwater Refreezes',
      body: 'A warm deck melts the snow lying on it, the meltwater runs to the cold eave, and the ice built up behind the dam holds standing water against the courses. Valleys concentrate that flow, so they dam first and hold the most water when they do.',
    },
  },
  {
    h3: 'Energy Efficient Roofing Surfaces Lower Cooling Load',
    img: { src: '/images/content/content-materials-ridge-vent.webp', alt: 'Ridge vent set along the roof peak to exhaust attic heat' },
    body: [
      '**Reflective roof surfaces cut the heat a building absorbs through its roof.** The EPA documents cool roofs as a heat-island measure, and Newark\'s dense blocks are exactly the setting the measure addresses.',
      'On low-slope buildings the reflective surface is the membrane or a coating over it. On pitched roofs it is {{energy efficient shingles}} with reflective granules. Neither replaces attic ventilation; they reduce the load the ventilation then has to move.',
    ],
    point: {
      h4: 'Solar Roofing Sits on the Assembly Beneath It',
      body: '{{Solar roofing}} — panel arrays and solar shingle systems — is mounted through or onto the covering, so the {{roof}} under it should have service life left before the array goes on. Removing and resetting an array to repair the roof beneath costs more than sequencing the two correctly.',
    },
  },
  {
    h3: 'Roofing Contractors Serving West Caldwell, NJ and Essex County',
    img: { src: '/images/sections/city/section-city-overview-west-caldwell.webp', alt: 'Residential street in West Caldwell, NJ with pitched asphalt shingle roofs' },
    body: [
      '**Newark Quality Roofing works across Essex County, NJ, not only the city of Newark.** {{West Caldwell}}, the Caldwells, Montclair, Bloomfield, Livingston, Maplewood, and the rest of the county are served on the same terms.',
      'Building stock changes across that footprint. Newark\'s attached brownstones and flat commercial blocks give way to detached suburban homes with steeper pitches and more roof area. The diagnosis starts with the address because the roof does.',
    ],
    point: {
      h4: 'Free Estimates Across the Whole Service Area',
      body: 'A written estimate carries no charge anywhere in the coverage area, and no obligation attaches to the visit. Cost is settled in writing before any crew is scheduled.',
    },
  },
];
