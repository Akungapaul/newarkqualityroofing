export const meta = {
  name: 'eg3b-combo-reframe-review',
  description: 'Entity-grounding 3b adversarial review: per-service, audit the 3 reframed combo directAnswers against the gold + originals for naturalness, preserved city-specifics, factual drift, credential accuracy',
  phases: [{ title: 'Review', detail: '65 per-service reviewers in parallel' }],
};

const PAYLOAD = [
  {
    "serviceId": "roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof repair across Newark, New Jersey, and Essex County**, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof repair across Newark and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on row houses, brownstones, and Ironbound flat roofs as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides roof repair across East Orange and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on pre-war apartments, multi-family walk-ups, and older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof repair across Orange, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on two- and three-family homes, Valley Arts lofts, and Main Street commercial roofs as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof repair across Newark, New Jersey, and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on row houses, brownstones, and Ironbound flat roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof repair across East Orange, New Jersey, and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on pre-war apartments, multi-family walk-ups, and older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof repair across Orange, New Jersey, and Essex County, fixing roof leaks, missing and cracked shingles, flashing failures, and storm damage** on two- and three-family homes, Valley Arts lofts, and Main Street commercial roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Newark, New Jersey, and Essex County**, stripping the roof to the deck and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces residential and commercial roofs across Newark**, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system to manufacturer specification as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces roofs across East Orange**, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system on pre-war apartments, walk-ups, and single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces residential and commercial roofs across Orange and Essex County, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system** on two- and three-family homes, Seven Oaks houses, and Valley Arts buildings."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Newark, New Jersey, and Essex County**, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system to manufacturer specification as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing roofs across East Orange, New Jersey, and Essex County**, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system on pre-war apartments, walk-ups, and single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Orange, New Jersey, and Essex County**, stripping the roof to the deck, repairing the sheathing, and installing a new underlayment-and-cover system on two- and three-family homes, Seven Oaks houses, and Valley Arts buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "emergency-roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing emergency roof repair across Newark, New Jersey, and Essex County**, stabilizing active leaks, storm-stripped shingles, fallen-tree punctures, and ice-dam intrusion as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides emergency roof repair across Newark**, stabilizing active interior leaks, wind-stripped shingles or membrane, debris punctures, and ice-dam backup on the city's row houses, brownstones, and flat-roof commercial buildings.",
      "eastOrange": "**Newark Quality Roofing provides emergency roof repair across East Orange and Essex County, stabilizing active interior leaks, wind-stripped covering, fallen-tree punctures, and ice-dam backup** on multi-family walk-ups and older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides emergency roof repair across Orange and Essex County, stabilizing active leaks, wind-stripped shingles and membrane, fallen-branch punctures, and ice-dam backup** on two- and three-family rentals, Valley Arts loft roofs, and Main Street commercial buildings."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing emergency roof repair across Newark, New Jersey, and Essex County**, stabilizing active interior leaks, wind-stripped shingles or membrane, debris punctures, and ice-dam backup on the city's row houses, brownstones, and flat-roof commercial buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing emergency roof repair across East Orange, New Jersey, and Essex County**, stabilizing active interior leaks, wind-stripped covering, fallen-tree punctures, and ice-dam backup on multi-family walk-ups and older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing emergency roof repair across Orange, New Jersey, and Essex County**, stabilizing active leaks, wind-stripped shingles and membrane, fallen-branch punctures, and ice-dam backup on two- and three-family rentals, Valley Arts loft roofs, and Main Street commercial buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-inspection",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof inspection across Newark, New Jersey, and Essex County**, assessing roof-covering condition, flashing, drainage, ventilation, and the deck before a leak appears as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof inspection across Newark and Essex County, assessing the roof-covering, flashing, drainage, ventilation, and the deck** to document findings before a leak appears, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides roof inspection across East Orange and Essex County, documenting roof-covering condition, flashing, drainage, ventilation, and the deck** on pre-war apartments, two- and three-family walk-ups, and older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof inspection across Orange and Essex County, assessing roof-covering condition, flashing, drainage, ventilation, and the deck** on two- and three-family homes, Valley Arts lofts, and Main Street commercial roofs as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof inspection across Newark, New Jersey, and Essex County**, assessing the roof-covering, flashing, drainage, ventilation, and the deck to document findings before a leak appears as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof inspection across East Orange, New Jersey, and Essex County**, documenting roof-covering condition, flashing, drainage, ventilation, and the deck on pre-war apartments, two- and three-family walk-ups, and older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof inspection across Orange, New Jersey, and Essex County**, assessing roof-covering condition, flashing, drainage, ventilation, and the deck on two- and three-family homes, Valley Arts lofts, and Main Street commercial roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-maintenance-programs",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof maintenance programs across Newark, New Jersey, and Essex County**, scheduling biannual roof inspections, drainage clearing, sealant maintenance, and a written condition report as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof maintenance programs across Newark**, scheduling biannual inspections, drainage clearing, sealant maintenance, and a written condition report for residential and commercial properties as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides roof maintenance programs across East Orange, scheduling biannual roof inspections, drainage clearing, sealant maintenance, and a written condition report** on multi-family, pre-war apartment, and flat-roof buildings as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof maintenance programs across Orange**, scheduling biannual inspections, drainage clearing, sealant maintenance, and a written condition report on two-/three-family, converted-loft, and flat-roof buildings as a New Jersey Home Improvement Contractor, licensed and insured."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof maintenance programs across Newark, New Jersey, and Essex County**, scheduling biannual inspections, drainage clearing, sealant maintenance, and a written condition report for residential and commercial properties as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof maintenance programs across East Orange, New Jersey, and Essex County**, scheduling biannual inspections, drainage clearing, sealant maintenance, and a written condition report on multi-family, pre-war apartment, and flat-roof buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof maintenance programs across Orange, New Jersey, and Essex County**, scheduling biannual inspections, drainage clearing, sealant maintenance, and a written condition report on two-/three-family, converted-loft, and flat-roof buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-leak-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor that locates and repairs roof leaks across Newark, New Jersey, and Essex County**, tracing the leak to the source flashing, shingle, pipe-boot, or valley detail as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof leak repair across Newark and Essex County, tracing leaks to the source detail — flashing, party-wall junctions, pipe boots, and flat-roof membrane seams** — as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides roof leak repair across East Orange, tracing the moisture path to the root-cause flashing, shingle, pipe-boot, or membrane detail** on multi-family walk-ups and older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof leak repair across Orange and Essex County, tracing leaks to the source detail — flashing, pipe boots, valley metal, and flat-roof membrane seams** — as a New Jersey Home Improvement Contractor, licensed and insured."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that locates and repairs roof leaks across Newark, New Jersey, and Essex County**, tracing leaks to the source detail — flashing, party-wall junctions, pipe boots, and flat-roof membrane seams — as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that locates and repairs roof leaks across East Orange, New Jersey, and Essex County**, tracing the moisture path to the root-cause flashing, shingle, pipe-boot, or membrane detail on multi-family walk-ups and older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that locates and repairs roof leaks across Orange, New Jersey, and Essex County**, tracing leaks to the source detail — flashing, pipe boots, valley metal, and flat-roof membrane seams — as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "storm-damage-roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing storm damage roof repair across Newark, New Jersey, and Essex County**, repairing wind-lifted shingles, hail-bruised surfaces, debris punctures, and storm-opened flashing as a registered New Jersey Home Improvement Contractor, with insurance-claim documentation.",
    "originals": {
      "newark": "**Newark Quality Roofing provides storm damage roof repair across Newark**, repairing **wind-lifted shingles**, hail-bruised surfaces, debris punctures, and storm-opened flashing as a New Jersey Home Improvement Contractor, with insurance-claim documentation.",
      "eastOrange": "**Newark Quality Roofing provides storm damage roof repair across East Orange**, working the **landlord-owned walk-ups and apartment blocks** one storm exposes at once, with portfolio-wide insurance-claim documentation as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides storm damage roof repair across Orange and Essex County, repairing wind-lifted shingles, hail-bruised surfaces, debris punctures, and storm-opened flashing** as a New Jersey Home Improvement Contractor, with insurance-claim documentation."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing storm damage roof repair across Newark, New Jersey, and Essex County**, repairing wind-lifted shingles, hail-bruised surfaces, debris punctures, and storm-opened flashing as a registered New Jersey Home Improvement Contractor, with insurance-claim documentation.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing storm damage roof repair across East Orange, New Jersey, and Essex County**, working the landlord-owned walk-ups and apartment blocks one storm exposes at once, with portfolio-wide insurance-claim documentation as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing storm damage roof repair across Orange, New Jersey, and Essex County**, repairing wind-lifted shingles, hail-bruised surfaces, debris punctures, and storm-opened flashing as a registered New Jersey Home Improvement Contractor, with insurance-claim documentation."
    }
  },
  {
    "serviceId": "hail-damage-roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing hail damage roof repair across Newark, New Jersey, and Essex County**, assessing impact bruises, granule loss, and cracked shingles as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides hail damage roof repair across Newark**, assessing impact bruises, granule loss, and cracked shingles, then documenting the damage for an insurance claim as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides hail damage roof repair across East Orange and Essex County, documenting impact bruising, granule loss, and dented flashing for the insurance adjuster and resealing the damage** on multi-family, pre-war apartment, and single-family roofs.",
      "orange": "**Newark Quality Roofing provides hail damage roof repair across Orange and Essex County, assessing impact bruises, granule loss, and cracked shingles, then documenting the damage for an insurance claim** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing hail damage roof repair across Newark, New Jersey, and Essex County**, assessing impact bruises, granule loss, and cracked shingles, then documenting the damage for an insurance claim as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing hail damage roof repair across East Orange, New Jersey, and Essex County**, documenting impact bruising, granule loss, and dented flashing for the insurance adjuster and resealing the damage on multi-family, pre-war apartment, and single-family roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing hail damage roof repair across Orange, New Jersey, and Essex County**, assessing impact bruises, granule loss, and cracked shingles, then documenting the damage for an insurance claim as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "wind-damage-roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing wind damage roof repair across Newark, New Jersey, and Essex County**, replacing wind-lifted and blown-off shingles, resealing lifted flashing, and refastening loosened low-slope membrane as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides wind damage roof repair across Newark**, replacing **wind-lifted and blown-off shingles**, resealing displaced flashing, and refastening loosened low-slope membrane as a New Jersey Home Improvement Contractor, with insurance-claim documentation.",
      "eastOrange": "**Newark Quality Roofing provides wind damage roof repair across East Orange and Essex County, replacing blown-off and seal-broken shingles, resealing lifted flashing, and refastening loosened low-slope membrane** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides wind damage roof repair across Orange and Essex County, replacing wind-lifted and blown-off shingles, resealing displaced flashing, and refastening loosened low-slope membrane** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing wind damage roof repair across Newark, New Jersey, and Essex County**, replacing wind-lifted and blown-off shingles, resealing displaced flashing, and refastening loosened low-slope membrane as a registered New Jersey Home Improvement Contractor, with insurance-claim documentation.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing wind damage roof repair across East Orange, New Jersey, and Essex County**, replacing blown-off and seal-broken shingles, resealing lifted flashing, and refastening loosened low-slope membrane as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing wind damage roof repair across Orange, New Jersey, and Essex County**, replacing wind-lifted and blown-off shingles, resealing displaced flashing, and refastening loosened low-slope membrane as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-cleaning-moss-removal",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof cleaning and moss removal across Newark, New Jersey, and Essex County**, removing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof cleaning and moss removal across Newark**, clearing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that kills growth at the root without stripping the protective granules.",
      "eastOrange": "**Newark Quality Roofing provides roof cleaning and moss removal across East Orange and Essex County, removing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that protects roof granules** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof cleaning and moss removal across Orange and Essex County, removing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that protects roof granules** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof cleaning and moss removal across Newark, New Jersey, and Essex County**, clearing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that kills growth at the root without stripping the protective granules, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof cleaning and moss removal across East Orange, New Jersey, and Essex County**, removing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that protects roof granules, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof cleaning and moss removal across Orange, New Jersey, and Essex County**, removing moss, Gloeocapsa magma algae, and lichen with a low-pressure chemical wash that protects roof granules, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "residential-roof-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs residential roofs across Newark, New Jersey, and Essex County**, building the complete deck-to-ridge system on new construction and full replacements to manufacturer specification as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs residential roofs across Newark, building the complete deck-to-ridge system on the city's row houses, brownstones, two- and three-family homes, and new construction** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs residential roofs across East Orange, building the complete deck-to-ridge system on new construction and full replacements** on single-family homes, two- and three-family walk-ups, and pre-war apartments as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs residential roofs across Orange** — deck-to-ridge **new construction and full replacements** on the city's two- and three-family rentals, older detached Seven Oaks homes, and converted Valley lofts — as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs residential roofs across Newark, New Jersey, and Essex County**, building the complete deck-to-ridge system on the city's row houses, brownstones, two- and three-family homes, and new construction as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs residential roofs across East Orange, New Jersey, and Essex County**, building the complete deck-to-ridge system on new construction and full replacements on single-family homes, two- and three-family walk-ups, and pre-war apartments as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs residential roofs across Orange, New Jersey, and Essex County**, building the complete deck-to-ridge system on new construction and full replacements for the city's two- and three-family rentals, older detached Seven Oaks homes, and converted Valley lofts as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "asphalt-shingle-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs asphalt shingle roofing across Newark, New Jersey, and Essex County**, fitting 3-tab and architectural shingles with ice barrier, underlayment, flashing, and balanced ventilation as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and replaces asphalt shingle roofing across Newark**, fitting architectural and 3-tab shingles with an ice barrier, synthetic underlayment, and balanced ventilation on the city's pitched row houses and single-family homes.",
      "eastOrange": "**Newark Quality Roofing installs asphalt shingle roofing across East Orange and Essex County, fitting 3-tab and architectural shingles** to the deck with ice barrier, synthetic underlayment, flashing, and balanced ventilation as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs asphalt shingle roofing across Orange and Essex County, fitting 3-tab and architectural shingles to the deck with ice barrier, synthetic underlayment, flashing, and balanced ventilation** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing asphalt shingle roofing across Newark, New Jersey, and Essex County**, fitting architectural and 3-tab shingles with an ice barrier, synthetic underlayment, and balanced ventilation on the city's pitched row houses and single-family homes as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing asphalt shingle roofing across East Orange, New Jersey, and Essex County**, fitting 3-tab and architectural shingles to the deck with ice barrier, synthetic underlayment, flashing, and balanced ventilation as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing asphalt shingle roofing across Orange, New Jersey, and Essex County**, fitting 3-tab and architectural shingles to the deck with ice barrier, synthetic underlayment, flashing, and balanced ventilation as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "slate-roof-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and repairs natural slate roofs across Newark, New Jersey, and Essex County**, replacing broken tiles, corroded fasteners, and failed flashing as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs natural slate roofs across Newark**, setting new slate on copper or stainless-steel fasteners and replacing broken tiles, corroded fasteners, and failed flashing, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs natural slate roofs across East Orange and Essex County, setting new slate on copper or stainless-steel fasteners and replacing broken tiles, corroded fasteners, and failed flashing** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs natural slate roofs across Orange and Essex County, setting new slate, replacing broken tiles, resecuring corroded fasteners, and rebuilding copper flashing** on older detached and historic-district homes as a New Jersey contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and repairs natural slate roofs across Newark, New Jersey, and Essex County**, setting new slate on copper or stainless-steel fasteners and replacing broken tiles, corroded fasteners, and failed flashing as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and repairs natural slate roofs across East Orange, New Jersey, and Essex County**, setting new slate on copper or stainless-steel fasteners and replacing broken tiles, corroded fasteners, and failed flashing as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and repairs natural slate roofs across Orange, New Jersey, and Essex County**, setting new slate, replacing broken tiles, resecuring corroded fasteners, and rebuilding copper flashing on older detached and historic-district homes as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "wood-shake-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing wood shake roofing across Newark, New Jersey, and Essex County**, installing, repairing, and maintaining cedar shake and shingle systems on a ventilated assembly as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides wood shake roofing across Newark**, installing, repairing, and maintaining **western red cedar shake and shingle** roofs on a ventilated deck, as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides wood shake roofing across East Orange and Essex County, installing, repairing, and maintaining western red cedar shake and shingle systems on a ventilated assembly** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides wood shake roofing across Orange and Essex County, installing, repairing, and maintaining western red cedar shake and shingle systems on a ventilated assembly** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing wood shake roofing across Newark, New Jersey, and Essex County**, installing, repairing, and maintaining western red cedar shake and shingle roofs on a ventilated deck as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing wood shake roofing across East Orange, New Jersey, and Essex County**, installing, repairing, and maintaining western red cedar shake and shingle systems on a ventilated assembly as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing wood shake roofing across Orange, New Jersey, and Essex County**, installing, repairing, and maintaining western red cedar shake and shingle systems on a ventilated assembly as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "metal-roof-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and repairs metal roofs across Newark, New Jersey, and Essex County**, fitting standing-seam panels and resealing seams, fasteners, and corroded sections as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs metal roofs across Newark**, fitting **standing-seam panels and metal shingles** and resealing failed seams, fasteners, and corroded sections on row-houses, brownstones, and Ironbound buildings as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs metal roofs across East Orange, fitting standing-seam panels and metal shingles and resealing failed seams, fasteners, and corroded sections** on multi-family, walk-up, and single-family roofs as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs metal roofs across Orange**, fitting **standing-seam panels and metal shingles** to Seven Oaks homes, Valley Arts lofts, and Main Street storefronts and resealing failed seams, fasteners, and corroded sections."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and repairs metal roofs across Newark, New Jersey, and Essex County**, fitting standing-seam panels and metal shingles and resealing failed seams, fasteners, and corroded sections on row-houses, brownstones, and Ironbound buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and repairs metal roofs across East Orange, New Jersey, and Essex County**, fitting standing-seam panels and metal shingles and resealing failed seams, fasteners, and corroded sections on multi-family, walk-up, and single-family roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and repairs metal roofs across Orange, New Jersey, and Essex County**, fitting standing-seam panels and metal shingles to Seven Oaks homes, Valley Arts lofts, and Main Street storefronts and resealing failed seams, fasteners, and corroded sections as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "flat-roof-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and repairs flat and low-slope roofs across Newark, New Jersey, and Essex County**, servicing EPDM, TPO, and modified-bitumen membranes with manufacturer-approved bonding as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs flat and low-slope roofs across Newark and Essex County, servicing EPDM rubber, TPO, and modified-bitumen membranes** as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing installs and repairs flat and low-slope roofs across East Orange, servicing EPDM, TPO, and modified-bitumen membranes** on pre-war apartment walk-ups, two- and three-family buildings, and Central Avenue mixed-use blocks, as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs flat and low-slope roofs across Orange and Essex County, servicing EPDM rubber, TPO, and modified-bitumen membranes** on Valley Arts loft buildings, Main Street commercial roofs, and two- and three-family homes."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and repairs flat and low-slope roofs across Newark, New Jersey, and Essex County**, servicing EPDM rubber, TPO, and modified-bitumen membranes as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and repairs flat and low-slope roofs across East Orange, New Jersey, and Essex County**, servicing EPDM, TPO, and modified-bitumen membranes on pre-war apartment walk-ups, two- and three-family buildings, and Central Avenue mixed-use blocks as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and repairs flat and low-slope roofs across Orange, New Jersey, and Essex County**, servicing EPDM rubber, TPO, and modified-bitumen membranes on Valley Arts loft buildings, Main Street commercial roofs, and two- and three-family homes as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "tile-roof-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and repairs clay and concrete tile roofs across Newark, New Jersey, and Essex County**, replacing broken tiles, failed underlayment, and flashing details as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs clay and concrete tile roofs across Newark**, replacing **broken tiles**, restoring **failed underlayment**, and resealing ridge, hip, and flashing details as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs clay and concrete tile roofs across East Orange and Essex County, replacing broken tiles, renewing failed underlayment, and resealing ridge, hip, and flashing details** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs clay and concrete tile roofs across Orange, replacing broken tiles, renewing failed underlayment, and resealing ridge, hip, and flashing details** on older detached and historic-district homes as a New Jersey contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and repairs clay and concrete tile roofs across Newark, New Jersey, and Essex County**, replacing broken tiles, restoring failed underlayment, and resealing ridge, hip, and flashing details as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and repairs clay and concrete tile roofs across East Orange, New Jersey, and Essex County**, replacing broken tiles, renewing failed underlayment, and resealing ridge, hip, and flashing details as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and repairs clay and concrete tile roofs across Orange, New Jersey, and Essex County**, replacing broken tiles, renewing failed underlayment, and resealing ridge, hip, and flashing details on older detached and historic-district homes as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "cedar-shake-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing cedar shake roofing across Newark, New Jersey, and Essex County**, installing and repairing western red cedar shake roofs over a ventilated deck as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides cedar shake roofing across Newark**, installing and repairing **western red cedar shake** roofs over a ventilated deck on the city's historic single-family stock, as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides cedar shake roofing across East Orange and Essex County, installing and repairing western red cedar shake roofs over a ventilated deck** on older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs cedar shake roofing across Orange and Essex County**, laying hand-split western red cedar over a ventilated deck on Seven Oaks detached homes and designated-district properties as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing cedar shake roofing across Newark, New Jersey, and Essex County**, installing and repairing western red cedar shake roofs over a ventilated deck on the city's historic single-family stock as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing cedar shake roofing across East Orange, New Jersey, and Essex County**, installing and repairing western red cedar shake roofs over a ventilated deck on older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing cedar shake roofing across Orange, New Jersey, and Essex County**, laying hand-split western red cedar over a ventilated deck on Seven Oaks detached homes and designated-district properties as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "rubber-roofing-epdm",
    "gold": "**Newark Quality Roofing is a roofing contractor providing rubber roofing EPDM across Newark, New Jersey, and Essex County**, installing, repairing, and reseaming EPDM single-ply membrane on flat and low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs, repairs, and reseams EPDM rubber roofing across Newark**, waterproofing the flat and low-slope roofs common to Ironbound commercial buildings and Newark row-house extensions, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides rubber roofing EPDM across East Orange and Essex County, installing, reseaming, and repairing EPDM single-ply membrane on the flat and low-slope roofs** of pre-war apartments, walk-ups, and multi-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs, reseams, and repairs EPDM rubber membrane across Orange and Essex County** on Valley Arts loft flat roofs, Main Street commercial buildings, and two- and three-family rear extensions, as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing rubber roofing EPDM across Newark, New Jersey, and Essex County**, installing, repairing, and reseaming EPDM single-ply membrane on the flat and low-slope roofs of Ironbound commercial buildings and Newark row-house extensions as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing rubber roofing EPDM across East Orange, New Jersey, and Essex County**, installing, reseaming, and repairing EPDM single-ply membrane on the flat and low-slope roofs of pre-war apartments, walk-ups, and multi-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing rubber roofing EPDM across Orange, New Jersey, and Essex County**, installing, reseaming, and repairing EPDM single-ply membrane on Valley Arts loft flat roofs, Main Street commercial buildings, and two- and three-family rear extensions as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "tpo-roofing-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor installing TPO roofing across Newark, New Jersey, and Essex County**, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams to commercial and residential low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs TPO roofing across Newark and Essex County, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams to commercial and residential low-slope roofs** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs TPO roofing across East Orange and Essex County, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams** to the low-slope roofs on its apartment blocks, pre-war walk-ups, and Central Avenue buildings as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs TPO roofing across Orange and Essex County, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams** to the low-slope roofs on its Valley Arts lofts, Main Street commercial blocks, and two- and three-family stock."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing TPO roofing across Newark, New Jersey, and Essex County**, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams to commercial and residential low-slope roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing TPO roofing across East Orange, New Jersey, and Essex County**, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams to the low-slope roofs on its apartment blocks, pre-war walk-ups, and Central Avenue buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing TPO roofing across Orange, New Jersey, and Essex County**, applying thermoplastic-polyolefin single-ply membrane with heat-welded seams to the low-slope roofs on its Valley Arts lofts, Main Street commercial blocks, and two- and three-family stock as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "epdm-commercial-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing EPDM commercial roofing across Newark, New Jersey, and Essex County**, installing and servicing EPDM rubber membrane on flat and low-slope commercial roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides EPDM commercial roofing in Newark**, installing and servicing **EPDM rubber membrane** on flat and low-slope commercial and Ironbound industrial roofs, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides EPDM commercial roofing across East Orange and Essex County, installing and servicing EPDM rubber membrane on the flat and low-slope roofs of mixed-use, multi-family, and commercial buildings** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides EPDM commercial roofing in Orange**, installing and servicing **EPDM rubber membrane** on the flat roofs of Valley Arts converted-industrial lofts, Main Street commercial blocks, and multi-family buildings, as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing EPDM commercial roofing across Newark, New Jersey, and Essex County**, installing and servicing EPDM rubber membrane on flat and low-slope commercial and Ironbound industrial roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing EPDM commercial roofing across East Orange, New Jersey, and Essex County**, installing and servicing EPDM rubber membrane on the flat and low-slope roofs of mixed-use, multi-family, and commercial buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing EPDM commercial roofing across Orange, New Jersey, and Essex County**, installing and servicing EPDM rubber membrane on the flat roofs of Valley Arts converted-industrial lofts, Main Street commercial blocks, and multi-family buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "modified-bitumen-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor installing modified bitumen roofing across Newark, New Jersey, and Essex County**, building a multi-ply SBS or APP membrane for commercial and residential low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs modified bitumen roofing across Newark and Essex County, building a multi-ply SBS or APP membrane over the deck** on the low-slope roofs of the Ironbound and downtown, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs modified bitumen roofing across East Orange and Essex County**, building a multi-ply SBS or APP membrane on the flat roofs of pre-war apartments, walk-ups, and Central Avenue commercial buildings, as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs modified bitumen roofing across Orange and Essex County, building a multi-ply SBS or APP membrane over the deck** on Valley Arts converted-industrial lofts and Main Street commercial roofs as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing modified bitumen roofing across Newark, New Jersey, and Essex County**, building a multi-ply SBS or APP membrane over the deck on the low-slope roofs of the Ironbound and downtown, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing modified bitumen roofing across East Orange, New Jersey, and Essex County**, building a multi-ply SBS or APP membrane on the flat roofs of pre-war apartments, walk-ups, and Central Avenue commercial buildings, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing modified bitumen roofing across Orange, New Jersey, and Essex County**, building a multi-ply SBS or APP membrane over the deck on Valley Arts converted-industrial lofts and Main Street commercial roofs, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "built-up-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing built-up roofing across Newark, New Jersey, and Essex County**, installing and restoring multi-ply BUR membranes on commercial low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and restores built-up roofing across Newark**, building and resurfacing multi-ply BUR membranes on commercial low-slope and older flat-roof buildings as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides built-up roofing across East Orange and Essex County, installing and restoring multi-ply BUR membranes** on the commercial, mixed-use, and multi-family low-slope roofs along Central Avenue, as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and restores built-up roofing across Orange**, building and resurfacing multi-ply BUR membranes on commercial low-slope and older flat-roof buildings as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing built-up roofing across Newark, New Jersey, and Essex County**, building and resurfacing multi-ply BUR membranes on commercial low-slope and older flat-roof buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing built-up roofing across East Orange, New Jersey, and Essex County**, installing and restoring multi-ply BUR membranes on the commercial, mixed-use, and multi-family low-slope roofs along Central Avenue, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing built-up roofing across Orange, New Jersey, and Essex County**, building and resurfacing multi-ply BUR membranes on commercial low-slope and older flat-roof buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "commercial-metal-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and services commercial metal roofing across Newark, New Jersey, and Essex County**, fitting standing-seam and exposed-fastener panels on warehouses and industrial buildings as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and services commercial metal roofing across Newark**, fitting **standing-seam and exposed-fastener panels** on Ironbound warehouses, Ferry Street flat-roof commercial buildings, and adaptive-reuse conversions as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and services commercial metal roofing across East Orange and Essex County, fitting standing-seam and exposed-fastener panels** on mixed-use buildings, multi-family properties, and institutional roofs as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and services commercial metal roofing across the City of Orange Township**, fitting **standing-seam and exposed-fastener panels** on Main Street downtown commercial blocks and Valley Arts converted-industrial buildings as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and services commercial metal roofing across Newark, New Jersey, and Essex County**, fitting standing-seam and exposed-fastener panels on Ironbound warehouses, Ferry Street flat-roof commercial buildings, and adaptive-reuse conversions as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and services commercial metal roofing across East Orange, New Jersey, and Essex County**, fitting standing-seam and exposed-fastener panels on mixed-use buildings, multi-family properties, and institutional roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and services commercial metal roofing across Orange, New Jersey, and Essex County**, fitting standing-seam and exposed-fastener panels on Main Street downtown commercial blocks and Valley Arts converted-industrial buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "pvc-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs and services PVC roofing across Newark, New Jersey, and Essex County**, welding chemical-resistant membrane on commercial low-slope roofs carrying grease and chemical exhaust as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and services PVC single-ply roofing across Newark**, welding chemical-resistant **white membrane** on the city's commercial and flat-roof low-slope buildings as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing installs and services PVC single-ply roofing across East Orange and Essex County, welding chemical-resistant white membrane on flat and low-slope commercial, mixed-use, and multi-family roofs** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and services PVC single-ply roofing across Orange and Essex County, welding chemical-resistant white membrane on commercial low-slope roofs that carry grease, oil, and rooftop exhaust** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs and services PVC roofing across Newark, New Jersey, and Essex County**, welding chemical-resistant white membrane on the city's commercial and flat-roof low-slope buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs and services PVC roofing across East Orange, New Jersey, and Essex County**, welding chemical-resistant white membrane on flat and low-slope commercial, mixed-use, and multi-family roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs and services PVC roofing across Orange, New Jersey, and Essex County**, welding chemical-resistant white membrane on commercial low-slope roofs that carry grease, oil, and rooftop exhaust as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "green-roof-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor installing green roof systems across Newark, New Jersey, and Essex County**, building waterproofing membrane, root barrier, drainage, and growing media that carry a planted roof as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs green roof systems across Newark and Essex County, building the waterproofing membrane, root barrier, drainage layer, and growing media that carry a planted roof** as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing installs green roofs across East Orange and Essex County, building the green-roof-rated waterproofing membrane, root barrier, drainage layer, and engineered growing media that carry a planted roof** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs green roof systems across Orange and Essex County, building the waterproofing membrane, root barrier, drainage layer, and growing media that carry a planted roof** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing green roof systems across Newark, New Jersey, and Essex County**, building the waterproofing membrane, root barrier, drainage layer, and growing media that carry a planted roof as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing green roofs across East Orange, New Jersey, and Essex County**, building the green-roof-rated waterproofing membrane, root barrier, drainage layer, and engineered growing media that carry a planted roof as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing green roof systems across Orange, New Jersey, and Essex County**, building the waterproofing membrane, root barrier, drainage layer, and growing media that carry a planted roof as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "spray-foam-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing spray foam roofing across Newark, New Jersey, and Essex County**, applying seamless spray polyurethane foam and a protective coating over commercial low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides spray foam roofing across Newark**, spraying seamless **spray polyurethane foam** and a protective coating over commercial low-slope roofs as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides spray foam roofing across East Orange and Essex County, applying seamless spray polyurethane foam and a protective coating** over the flat and low-slope roofs of multi-family walk-ups and commercial buildings.",
      "orange": "**Newark Quality Roofing provides spray foam roofing across Orange**, spraying seamless **spray polyurethane foam** and a protective coating over the low-slope decks of Valley Arts loft and Main Street commercial buildings, licensed and insured."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing spray foam roofing across Newark, New Jersey, and Essex County**, applying seamless spray polyurethane foam and a protective coating over commercial low-slope roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing spray foam roofing across East Orange, New Jersey, and Essex County**, applying seamless spray polyurethane foam and a protective coating over the flat and low-slope roofs of multi-family walk-ups and commercial buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing spray foam roofing across Orange, New Jersey, and Essex County**, applying seamless spray polyurethane foam and a protective coating over the low-slope decks of Valley Arts loft and Main Street commercial buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-flashing-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor installing and repairing roof flashing across Newark, New Jersey, and Essex County**, sealing the chimneys, walls, valleys, skylights, and penetrations where most roof leaks originate as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs roof flashing across Newark**, sealing the chimneys, sidewalls, valleys, skylights, and penetrations where most roof leaks originate on the city's brownstones, row houses, and Ironbound flat-roof commercial blocks.",
      "eastOrange": "**Newark Quality Roofing installs and repairs roof flashing across East Orange and Essex County, sealing the chimneys, sidewalls, valleys, dormers, and penetrations where most roof leaks originate** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs roof flashing across Orange and Essex County, sealing the chimneys, walls, valleys, skylights, and penetrations where most roof leaks originate** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing and repairing roof flashing across Newark, New Jersey, and Essex County**, sealing the chimneys, sidewalls, valleys, skylights, and penetrations where most roof leaks originate on the city's brownstones, row houses, and Ironbound flat-roof commercial blocks as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing and repairing roof flashing across East Orange, New Jersey, and Essex County**, sealing the chimneys, sidewalls, valleys, dormers, and penetrations where most roof leaks originate as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing roof flashing across Orange, New Jersey, and Essex County**, sealing the chimneys, walls, valleys, skylights, and penetrations where most roof leaks originate as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "chimney-flashing-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor repairing chimney flashing across Newark, New Jersey, and Essex County**, rebuilding the two-part base-and-counter flashing system that seals the chimney as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing repairs chimney flashing across Newark and Essex County, rebuilding the two-part base-and-counter system** that seals the chimney, the roof’s largest and most leak-prone penetration, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing repairs chimney flashing across East Orange and Essex County, rebuilding the two-part base-and-counter flashing system that seals the chimney, the roof's largest and most leak-prone penetration** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing repairs chimney flashing on Orange's aging masonry chimneys**, rebuilding the **two-part base-and-counter system** where step flashing meets century-old mortar across the city's dense two- and three-family stock, as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor repairing chimney flashing across Newark, New Jersey, and Essex County**, rebuilding the two-part base-and-counter system that seals the chimney, the roof's largest and most leak-prone penetration, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor repairing chimney flashing across East Orange, New Jersey, and Essex County**, rebuilding the two-part base-and-counter flashing system that seals the chimney, the roof's largest and most leak-prone penetration, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor repairing chimney flashing across Orange, New Jersey, and Essex County**, rebuilding the two-part base-and-counter system where step flashing meets century-old mortar on the city's dense two- and three-family stock, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "gutter-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor installing and repairing gutters across Newark, New Jersey, and Essex County**, fitting aluminum, copper, and steel gutters and matched downspouts, resealing leaks and clogged runs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs gutters across Newark**, fitting **seamless aluminum, copper, and steel gutters** and downspouts and resealing leaks, sagging runs, and clogs on row houses, brownstones, and flat-roof buildings, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs gutters across East Orange**, fitting seamless aluminum, copper, and steel gutters, matched downspouts, and resealing leaks, sagging runs, and clogged systems as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs gutters across Orange and Essex County, fitting seamless aluminum, copper, and steel gutters, matched downspouts, and resealing leaks, sagging runs, and clogged systems** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing and repairing gutters across Newark, New Jersey, and Essex County**, fitting seamless aluminum, copper, and steel gutters and downspouts and resealing leaks, sagging runs, and clogs on row houses, brownstones, and flat-roof buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing and repairing gutters across East Orange, New Jersey, and Essex County**, fitting seamless aluminum, copper, and steel gutters and matched downspouts and resealing leaks, sagging runs, and clogged systems as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing gutters across Orange, New Jersey, and Essex County**, fitting seamless aluminum, copper, and steel gutters and matched downspouts and resealing leaks, sagging runs, and clogged systems as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "gutter-guard-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor installing gutter guards across Newark, New Jersey, and Essex County**, fitting micro-mesh, screen, reverse-curve, foam, and brush guards over the gutters to reduce debris clogging as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs gutter guards across Newark and Essex County, fitting micro-mesh, screen, reverse-curve, foam, and brush guards** over Forest Hill, Roseville, and Ironbound gutters as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs gutter guards across East Orange and Essex County, fitting micro-mesh, screen, reverse-curve, foam, and brush guards over the gutters of multi-family, pre-war walk-up, and single-family buildings** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs gutter guards across the City of Orange Township and Essex County, fitting micro-mesh, screen, reverse-curve, foam, and brush guards** over Seven Oaks, Valley Arts, and Main Street gutters as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing gutter guards across Newark, New Jersey, and Essex County**, fitting micro-mesh, screen, reverse-curve, foam, and brush guards over Forest Hill, Roseville, and Ironbound gutters as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing gutter guards across East Orange, New Jersey, and Essex County**, fitting micro-mesh, screen, reverse-curve, foam, and brush guards over the gutters of multi-family, pre-war walk-up, and single-family buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing gutter guards across Orange, New Jersey, and Essex County**, fitting micro-mesh, screen, reverse-curve, foam, and brush guards over Seven Oaks, Valley Arts, and Main Street gutters as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "skylight-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor installing and repairing skylights across Newark, New Jersey, and Essex County**, sealing leaks at failed flashing, replacing fogged units, and curb-mounting skylights on low-slope roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs skylights across Newark**, sealing leaks at the failed flashing, replacing fogged units, and curb-mounting skylights on **Ironbound flat roofs**, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs skylights across East Orange and Essex County, sealing leaks at the failed flashing, replacing fogged units, and curb-mounting skylights on flat and low-slope roofs** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs skylights across Orange, sealing leaks at the failed flashing, replacing fogged units, and curb-mounting skylights on Valley Arts low-slope roofs** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing and repairing skylights across Newark, New Jersey, and Essex County**, sealing leaks at failed flashing, replacing fogged units, and curb-mounting skylights on Ironbound flat roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing and repairing skylights across East Orange, New Jersey, and Essex County**, sealing leaks at failed flashing, replacing fogged units, and curb-mounting skylights on flat and low-slope roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing skylights across Orange, New Jersey, and Essex County**, sealing leaks at failed flashing, replacing fogged units, and curb-mounting skylights on Valley Arts low-slope roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "fascia-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor installing and repairing fascia across Newark, New Jersey, and Essex County**, replacing the rotted board that closes the rafter-tail ends and mounts the gutter system as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs fascia across Newark**, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system, as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing installs and repairs fascia across East Orange and Essex County, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs fascia across Orange, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system** on the city's two- and three-family homes as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing and repairing fascia across Newark, New Jersey, and Essex County**, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing and repairing fascia across East Orange, New Jersey, and Essex County**, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing fascia across Orange, New Jersey, and Essex County**, replacing the rotted edge board that closes the rafter-tail ends and mounts the gutter system on the city's two- and three-family homes as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "soffit-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing soffit installation and repair across Newark, New Jersey, and Essex County**, replacing rotted board, clearing intake vents, and installing baffles to restore attic airflow as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs soffit across Newark**, replacing rotted soffit board, clearing blocked intake vents, and setting insulation baffles to restore attic airflow, as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides soffit installation and repair across East Orange and Essex County, replacing rotted soffit board, clearing blocked intake vents, and installing insulation baffles to restore attic airflow** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs soffit across Orange and Essex County, replacing rotted soffit board, clearing blocked intake vents, and setting insulation baffles** to restore attic airflow as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing soffit installation and repair across Newark, New Jersey, and Essex County, replacing rotted soffit board, clearing blocked intake vents, and setting insulation baffles to restore attic airflow** as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing soffit installation and repair across East Orange, New Jersey, and Essex County, replacing rotted soffit board, clearing blocked intake vents, and installing insulation baffles to restore attic airflow** as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing soffit installation and repair across Orange, New Jersey, and Essex County, replacing rotted soffit board, clearing blocked intake vents, and setting insulation baffles** to restore attic airflow as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-vent-installation-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor installing and repairing roof vents across Newark, New Jersey, and Essex County**, building a balanced intake-and-exhaust system from soffit, ridge, turbine, gable, and powered vents as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs and repairs roof vents across Newark**, building a balanced intake-and-exhaust system from soffit, ridge, box, turbine, gable, and powered vents as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs and repairs roof vents across East Orange and Essex County, building a balanced soffit-intake and ridge-exhaust system** on multi-family walk-ups, pre-war apartments, and older single-family homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs and repairs roof vents across Orange, building a balanced soffit-intake and ridge-exhaust system** on the city's two- and three-family homes, Valley Arts lofts, and older Seven Oaks houses as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing and repairing roof vents across Newark, New Jersey, and Essex County**, building a balanced intake-and-exhaust system from soffit, ridge, box, turbine, gable, and powered vents as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing and repairing roof vents across East Orange, New Jersey, and Essex County**, building a balanced soffit-intake and ridge-exhaust system on multi-family walk-ups, pre-war apartments, and older single-family homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing and repairing roof vents across Orange, New Jersey, and Essex County**, building a balanced soffit-intake and ridge-exhaust system on the city's two- and three-family homes, Valley Arts lofts, and older Seven Oaks houses as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-waterproofing",
    "gold": "**Newark Quality Roofing is a roofing contractor that waterproofs roofs across Newark, New Jersey, and Essex County**, sealing the roof deck, eaves, valleys, and flashing so water sheds before reaching the attic as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing waterproofs roofs across Newark**, sealing the roof deck, ice-prone eaves, valleys, and flashing details on the city's row houses, brownstones, and Ironbound flat-roof buildings, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing waterproofs roofs across East Orange and Essex County, sealing the roof deck, the eaves, the valleys and penetrations, and the low-slope and flashing details** on multi-family walk-ups and older homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing waterproofs roofs across Orange and Essex County, sealing the roof deck, ice-prone eaves, valleys, penetrations, and low-slope flashing details** on two-/three-family homes, Valley Arts lofts, and Main Street commercial roofs as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that waterproofs roofs across Newark, New Jersey, and Essex County**, sealing the roof deck, ice-prone eaves, valleys, and flashing details on the city's row houses, brownstones, and Ironbound flat-roof buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that waterproofs roofs across East Orange, New Jersey, and Essex County**, sealing the roof deck, eaves, valleys, penetrations, and low-slope and flashing details on multi-family walk-ups and older homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that waterproofs roofs across Orange, New Jersey, and Essex County**, sealing the roof deck, ice-prone eaves, valleys, penetrations, and low-slope flashing details on two-/three-family homes, Valley Arts lofts, and Main Street commercial roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-deck-repair-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor repairing and replacing roof decks across Newark, New Jersey, and Essex County**, removing rotted sheathing so the deck grips fasteners and holds the covering as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing repairs and replaces roof decks across Newark**, removing rotted plywood and swollen OSB sheathing and re-decking the roof so the **deck** grips fasteners and supports the covering, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing repairs and replaces roof decks across East Orange, removing rotted plywood and OSB sheathing and re-decking the roof so the deck grips fasteners and supports the covering** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing repairs and replaces roof decks across Orange and Essex County, removing rotted plywood and OSB sheathing and re-decking the roof so the deck grips fasteners and supports the covering** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor repairing and replacing roof decks across Newark, New Jersey, and Essex County**, removing rotted plywood and swollen OSB sheathing and re-decking the roof so the deck grips fasteners and supports the covering, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor repairing and replacing roof decks across East Orange, New Jersey, and Essex County**, removing rotted plywood and OSB sheathing and re-decking the roof so the deck grips fasteners and supports the covering, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor repairing and replacing roof decks across Orange, New Jersey, and Essex County**, removing rotted plywood and OSB sheathing and re-decking the roof so the deck grips fasteners and supports the covering, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "solar-panel-roofing-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor handling the roofing side of solar panel installation across Newark, New Jersey, and Essex County**, flashing each mount watertight and coordinating with the solar installer as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing handles the roofing side of solar panel installation across Newark** — flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer, as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing handles the roofing side of solar panel installation across East Orange and Essex County, flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing handles the roofing side of solar panel installation across Orange and Essex County — flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor handling the roofing side of solar panel installation across Newark, New Jersey, and Essex County**, flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor handling the roofing side of solar panel installation across East Orange, New Jersey, and Essex County**, flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor handling the roofing side of solar panel installation across Orange, New Jersey, and Essex County**, flashing each rack-mount foot watertight, verifying the structure, and coordinating with the solar installer as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "solar-shingle-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor that installs solar shingles across Newark, New Jersey, and Essex County**, replacing the roof covering with photovoltaic shingles that serve as the roof itself as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs solar shingles across Newark and Essex County, replacing the roof covering with building-integrated solar shingles that generate power while serving as the roof itself** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs solar shingles across East Orange and Essex County, replacing the roof covering with building-integrated solar shingles** that generate power while serving as the roof itself on owner-occupied homes, as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs solar shingles across Orange and Essex County, replacing the roof covering with building-integrated solar shingles that generate power while serving as the roof itself** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor that installs solar shingles across Newark, New Jersey, and Essex County**, replacing the roof covering with building-integrated solar shingles that generate power while serving as the roof itself, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor that installs solar shingles across East Orange, New Jersey, and Essex County**, replacing the roof covering with building-integrated solar shingles that generate power while serving as the roof itself on owner-occupied homes, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor that installs solar shingles across Orange, New Jersey, and Essex County**, replacing the roof covering with building-integrated solar shingles that generate power while serving as the roof itself, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "energy-efficient-roofing-solutions",
    "gold": "**Newark Quality Roofing is a roofing contractor providing energy efficient roofing solutions across Newark, New Jersey, and Essex County**, installing reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides energy efficient roofing solutions across Newark and Essex County, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides energy efficient roofing solutions across East Orange and Essex County, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides energy efficient roofing solutions across Orange and Essex County, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing energy efficient roofing solutions across Newark, New Jersey, and Essex County**, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing energy efficient roofing solutions across East Orange, New Jersey, and Essex County**, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing energy efficient roofing solutions across Orange, New Jersey, and Essex County**, installing cool reflective membranes and coatings, above-deck insulation, radiant barriers, and balanced attic ventilation as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "silicone-roof-coating",
    "gold": "**Newark Quality Roofing is a roofing contractor providing silicone roof coating across Newark, New Jersey, and Essex County**, restoring low-slope and flat roofs with a liquid-applied membrane that resists ponding water as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides silicone roof coating across Newark**, restoring the low-slope and flat roofs on **Ironbound commercial buildings, Broad Street properties, and row-home rear sections** with a liquid-applied silicone membrane, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides silicone roof coating across East Orange, restoring the flat roofs on its pre-war apartments and commercial blocks with a liquid-applied silicone membrane that resists ponding and reflects sunlight** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides silicone roof coating across Orange and Essex County, restoring low-slope and flat commercial and multi-family roofs with a liquid-applied silicone membrane that resists ponding water and reflects sunlight** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing silicone roof coating across Newark, New Jersey, and Essex County**, restoring the low-slope and flat roofs on Ironbound commercial buildings, Broad Street properties, and row-home rear sections with a liquid-applied silicone membrane as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing silicone roof coating across East Orange, New Jersey, and Essex County**, restoring the flat roofs on its pre-war apartments and commercial blocks with a liquid-applied silicone membrane that resists ponding and reflects sunlight as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing silicone roof coating across Orange, New Jersey, and Essex County**, restoring low-slope and flat commercial and multi-family roofs with a liquid-applied silicone membrane that resists ponding water and reflects sunlight as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "silicone-elastomeric-roof-coating",
    "gold": "**Newark Quality Roofing is a roofing contractor applying silicone elastomeric roof coating across Newark, New Jersey, and Essex County**, matching the chemistry to the roof's ponding, dirt-pickup, and thermal-movement conditions as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing applies silicone elastomeric roof coating on commercial and flat residential roofs across Essex County, matching the chemistry — silicone or acrylic — to the ponding and dirt-pickup condition** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing applies silicone elastomeric roof coating across East Orange, matching the chemistry — silicone or acrylic — to each low-slope roof's ponding, dirt-pickup, and thermal-movement conditions** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing applies silicone elastomeric roof coating on Orange's commercial, Valley Arts converted-industrial, and 2-/3-family flat roofs, selecting silicone or acrylic to match the ponding, dirt-pickup, and thermal-movement conditions** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor applying silicone elastomeric roof coating across Newark, New Jersey, and Essex County**, matching the chemistry — silicone or acrylic — to the ponding and dirt-pickup condition on commercial and flat residential roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor applying silicone elastomeric roof coating across East Orange, New Jersey, and Essex County**, matching the chemistry — silicone or acrylic — to each low-slope roof's ponding, dirt-pickup, and thermal-movement conditions as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor applying silicone elastomeric roof coating across Orange, New Jersey, and Essex County**, selecting silicone or acrylic to match the ponding, dirt-pickup, and thermal-movement conditions on commercial, Valley Arts converted-industrial, and 2-/3-family flat roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "commercial-roof-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor installing commercial roofs across Newark, New Jersey, and Essex County**, engineering and applying TPO, EPDM, PVC, modified-bitumen, built-up, and metal systems as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs commercial roofs across Newark and Essex County, engineering and applying TPO, EPDM, PVC, modified-bitumen, built-up, spray-foam, and metal systems** on the city's flat-roof commercial blocks as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing installs commercial roofs across East Orange** — the **flat-roof storefronts, high-rises, and apartment blocks** along the Central Avenue corridor — as a New Jersey Home Improvement Contractor applying single-ply, foam, and metal systems.",
      "orange": "**Newark Quality Roofing installs commercial roofs across the City of Orange Township, applying TPO, EPDM, PVC, modified-bitumen, built-up, spray-foam, and metal systems** on Valley Arts loft and Main Street flat-roof buildings as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing commercial roofs across Newark, New Jersey, and Essex County**, engineering and applying TPO, EPDM, PVC, modified-bitumen, built-up, spray-foam, and metal systems on the city's flat-roof commercial blocks as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing commercial roofs across East Orange, New Jersey, and Essex County**, applying single-ply, foam, and metal systems to the flat-roof storefronts, high-rises, and apartment blocks along the Central Avenue corridor as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing commercial roofs across Orange, New Jersey, and Essex County**, applying TPO, EPDM, PVC, modified-bitumen, built-up, spray-foam, and metal systems on Valley Arts loft and Main Street flat-roof buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "commercial-roof-repair",
    "gold": "**Newark Quality Roofing is a roofing contractor providing commercial roof repair across Newark, New Jersey, and Essex County**, repairing seam, puncture, flashing, and ponding-water failures on low-slope EPDM, TPO, and modified-bitumen roofs as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides commercial roof repair across Newark**, repairing seam separations, membrane punctures, flashing failures, and ponding-water damage on low-slope EPDM, TPO, PVC, and modified-bitumen roofs as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides commercial roof repair in East Orange**, resealing seam separations, membrane punctures, flashing failures, and ponding-water damage on low-slope EPDM, TPO, PVC, and modified-bitumen roofs as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides commercial roof repair across Orange and Essex County, repairing seam separations, membrane punctures, flashing failures, and ponding-water damage** on the low-slope EPDM, TPO, and modified-bitumen roofs of Valley Arts lofts and Main Street commercial buildings."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing commercial roof repair across Newark, New Jersey, and Essex County**, repairing seam separations, membrane punctures, flashing failures, and ponding-water damage on low-slope EPDM, TPO, PVC, and modified-bitumen roofs as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing commercial roof repair across East Orange, New Jersey, and Essex County**, resealing seam separations, membrane punctures, flashing failures, and ponding-water damage on low-slope EPDM, TPO, PVC, and modified-bitumen roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing commercial roof repair across Orange, New Jersey, and Essex County**, repairing seam separations, membrane punctures, flashing failures, and ponding-water damage on the low-slope EPDM, TPO, and modified-bitumen roofs of Valley Arts lofts and Main Street commercial buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "commercial-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing commercial roofs across Newark, New Jersey, and Essex County**, stripping the low-slope membrane to the deck and installing a new insulation-and-membrane system as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces commercial roofs across Newark**, tearing the low-slope membrane to the deck and installing a new insulation-and-membrane system on Ironbound and Downtown buildings as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces commercial roofs across East Orange and Essex County, stripping the low-slope membrane to the deck, repairing the deck, and installing a new insulation-and-membrane system to manufacturer specification** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces commercial and low-slope roofs across Orange and Essex County, stripping the membrane to the deck, repairing the deck, and installing a new insulation-and-membrane system to manufacturer specification** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing commercial roofs across Newark, New Jersey, and Essex County**, tearing the low-slope membrane to the deck and installing a new insulation-and-membrane system on Ironbound and Downtown buildings as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing commercial roofs across East Orange, New Jersey, and Essex County**, stripping the low-slope membrane to the deck, repairing the deck, and installing a new insulation-and-membrane system to manufacturer specification as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing commercial and low-slope roofs across Orange, New Jersey, and Essex County**, stripping the membrane to the deck, repairing the deck, and installing a new insulation-and-membrane system to manufacturer specification as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-thermal-imaging-inspections",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof thermal imaging inspections across Newark, New Jersey, and Essex County**, locating wet insulation in low-slope roofing systems with infrared imaging under ASTM C1153 as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof thermal imaging inspections across Newark, locating wet insulation in low-slope roofing systems with infrared imaging under ASTM C1153** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides roof thermal imaging inspections across East Orange, mapping wet insulation under the flat and low-slope membranes that cover its apartment, walk-up, and Central Avenue commercial stock** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing scans Orange's flat and low-slope roofs with infrared imaging** — the **Valley Arts converted-loft and Main Street commercial buildings** and the **two-/three-family rental stock** — to map wet insulation, as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof thermal imaging inspections across Newark, New Jersey, and Essex County**, locating wet insulation in low-slope roofing systems with infrared imaging under ASTM C1153 as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof thermal imaging inspections across East Orange, New Jersey, and Essex County**, mapping wet insulation under the flat and low-slope membranes that cover its apartment, walk-up, and Central Avenue commercial stock as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof thermal imaging inspections across Orange, New Jersey, and Essex County**, scanning the flat and low-slope roofs of Valley Arts converted-loft and Main Street commercial buildings and the two-/three-family rental stock with infrared imaging to map wet insulation, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "infrared-roof-leak-detection",
    "gold": "**Newark Quality Roofing is a roofing contractor providing infrared roof leak detection across Newark, New Jersey, and Essex County**, scanning low-slope roofs to ASTM C1153 to locate wet insulation behind a leak as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides infrared roof leak detection across Newark**, scanning Ironbound and Downtown low-slope commercial roofs and flat residential sections to **ASTM C1153** to locate wet insulation, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides infrared roof leak detection across East Orange and Essex County, scanning the flat and low-slope roofs of pre-war apartments, walk-ups, and Central Avenue commercial blocks to ASTM C1153** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides infrared roof leak detection across Orange and Essex County, scanning the Valley Arts converted-industrial lofts, Main Street commercial buildings, and two- and three-family flat roofs to ASTM C1153** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing infrared roof leak detection across Newark, New Jersey, and Essex County**, scanning Ironbound and Downtown low-slope commercial roofs and flat residential sections to ASTM C1153 to locate wet insulation as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing infrared roof leak detection across East Orange, New Jersey, and Essex County**, scanning the flat and low-slope roofs of pre-war apartments, walk-ups, and Central Avenue commercial blocks to ASTM C1153 as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing infrared roof leak detection across Orange, New Jersey, and Essex County**, scanning the Valley Arts converted-industrial lofts, Main Street commercial buildings, and two- and three-family flat roofs to ASTM C1153 as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "custom-roof-design-consultation",
    "gold": "**Newark Quality Roofing is a roofing contractor providing custom roof design and consultation across Newark, New Jersey, and Essex County**, evaluating roof geometry, materials, and code to produce a written roofing specification as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides custom roof design and consultation across Newark**, evaluating roof geometry, material options, and code requirements to produce a **written roofing specification** as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing provides custom roof design and consultation across East Orange and Essex County, evaluating roof geometry, material options, and code requirements to produce a written roofing specification** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides custom roof design and consultation across Orange**, evaluating roof geometry, material options, and code requirements to produce a **written roofing specification** as a New Jersey Home Improvement Contractor, licensed and insured."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing custom roof design and consultation across Newark, New Jersey, and Essex County**, evaluating roof geometry, material options, and code requirements to produce a written roofing specification as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing custom roof design and consultation across East Orange, New Jersey, and Essex County**, evaluating roof geometry, material options, and code requirements to produce a written roofing specification as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing custom roof design and consultation across Orange, New Jersey, and Essex County**, evaluating roof geometry, material options, and code requirements to produce a written roofing specification as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "historic-roof-restoration",
    "gold": "**Newark Quality Roofing is a roofing contractor providing historic roof restoration across Newark, New Jersey, and Essex County**, repairing slate, tile, wood, and metal roofs in kind under federal preservation standards as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides historic roof restoration across Newark**, repairing and matching period slate, clay tile, wood shingle, and metal roofs in kind under the Secretary of the Interior's Standards as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides historic roof restoration across East Orange and Essex County, repairing and matching period slate, clay tile, wood shingle, and metal roofs in kind under the Secretary of the Interior's Standards** as a New Jersey contractor.",
      "orange": "**Newark Quality Roofing provides historic roof restoration across Orange**, repairing and matching period **slate, clay tile, wood shingle, and metal** roofs in kind under the Secretary of the Interior's Standards as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing historic roof restoration across Newark, New Jersey, and Essex County**, repairing and matching period slate, clay tile, wood shingle, and metal roofs in kind under the Secretary of the Interior's Standards as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing historic roof restoration across East Orange, New Jersey, and Essex County**, repairing and matching period slate, clay tile, wood shingle, and metal roofs in kind under the Secretary of the Interior's Standards as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing historic roof restoration across Orange, New Jersey, and Essex County**, repairing and matching period slate, clay tile, wood shingle, and metal roofs in kind under the Secretary of the Interior's Standards as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-ice-dam-prevention",
    "gold": "**Newark Quality Roofing is a roofing contractor providing roof ice dam prevention across Newark, New Jersey, and Essex County**, correcting attic heat escape with air-sealing, insulation, ventilation, and an eave ice barrier as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides roof ice dam prevention across Newark**, correcting **attic heat escape** with air-sealing, code-minimum insulation, and balanced ventilation, and installing the **code eave ice barrier**, as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides roof ice dam prevention across East Orange and Essex County, correcting attic heat escape with air-sealing, code-minimum insulation, balanced ventilation, and a code eave ice barrier** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides roof ice dam prevention across Orange and Essex County, correcting attic heat escape with air-sealing, code-minimum insulation, balanced ventilation, and a code eave ice barrier** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing roof ice dam prevention across Newark, New Jersey, and Essex County**, correcting attic heat escape with air-sealing, code-minimum insulation, and balanced ventilation, and installing the code eave ice barrier, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing roof ice dam prevention across East Orange, New Jersey, and Essex County**, correcting attic heat escape with air-sealing, code-minimum insulation, balanced ventilation, and a code eave ice barrier as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing roof ice dam prevention across Orange, New Jersey, and Essex County**, correcting attic heat escape with air-sealing, code-minimum insulation, balanced ventilation, and a code eave ice barrier as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "full-roof-tear-off",
    "gold": "**Newark Quality Roofing is a roofing contractor providing full roof tear off across Newark, New Jersey, and Essex County**, stripping every roof layer to the deck and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides full roof tear-off across Newark**, stripping every existing roof layer to the deck, repairing the sheathing, and installing a new underlayment-and-cover system as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing provides full roof tear off across East Orange and Essex County, stripping every existing roof layer to the deck, repairing the sheathing, then installing a new underlayment-and-cover system** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides full roof tear-off across Orange**, stripping every existing roof layer to the deck, repairing the sheathing, and installing a new underlayment-and-cover system as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing full roof tear off across Newark, New Jersey, and Essex County**, stripping every existing roof layer to the deck, repairing the sheathing, and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing full roof tear off across East Orange, New Jersey, and Essex County**, stripping every existing roof layer to the deck, repairing the sheathing, then installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing full roof tear off across Orange, New Jersey, and Essex County**, stripping every existing roof layer to the deck, repairing the sheathing, and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-overlay-installation",
    "gold": "**Newark Quality Roofing is a roofing contractor installing roof overlays across Newark, New Jersey, and Essex County**, applying a second layer of asphalt shingles over one existing sound asphalt layer as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing installs roof overlays across Newark**, applying a second layer of asphalt shingles over one existing sound asphalt layer without a tear-off, as a **New Jersey Home Improvement Contractor, licensed and insured**.",
      "eastOrange": "**Newark Quality Roofing installs roof overlays across East Orange and Essex County, applying a second layer of asphalt shingles over one existing sound asphalt layer without a tear-off** on qualifying homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing installs roof overlays across the City of Orange Township, applying a second asphalt-shingle layer over one existing sound asphalt layer with no tear-off** on qualifying Seven Oaks detached and two-/three-family roofs as a New Jersey licensed contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor installing roof overlays across Newark, New Jersey, and Essex County**, applying a second layer of asphalt shingles over one existing sound asphalt layer without a tear-off as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor installing roof overlays across East Orange, New Jersey, and Essex County**, applying a second layer of asphalt shingles over one existing sound asphalt layer without a tear-off on qualifying homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor installing roof overlays across Orange, New Jersey, and Essex County**, applying a second asphalt-shingle layer over one existing sound asphalt layer with no tear-off on qualifying Seven Oaks detached and two-/three-family roofs as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "re-roofing",
    "gold": "**Newark Quality Roofing is a roofing contractor providing re-roofing across Newark, New Jersey, and Essex County**, replacing a worn covering with a new underlayment-and-cover system once the roof crosses the replacement threshold as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides re-roofing across Newark**, replacing a worn roof covering with a new underlayment-and-cover system once the existing roof crosses the replacement threshold by age or condition.",
      "eastOrange": "**Newark Quality Roofing provides re-roofing across East Orange and Essex County, recovering or replacing a worn roof covering with a new underlayment-and-cover system** once the existing roof crosses the replacement threshold, as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing re-roofs homes and buildings across Orange and Essex County, replacing a worn covering with a new underlayment-and-cover system** on two- and three-family rentals, Seven Oaks detached homes, and Valley Arts low-slope roofs as a NJ contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing re-roofing across Newark, New Jersey, and Essex County**, replacing a worn roof covering with a new underlayment-and-cover system once the existing roof crosses the replacement threshold by age or condition, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing re-roofing across East Orange, New Jersey, and Essex County**, recovering or replacing a worn roof covering with a new underlayment-and-cover system once the existing roof crosses the replacement threshold, as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing re-roofing across Orange, New Jersey, and Essex County**, replacing a worn covering with a new underlayment-and-cover system on two- and three-family rentals, Seven Oaks detached homes, and Valley Arts low-slope roofs, as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "insurance-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor providing insurance roof replacement across Newark, New Jersey, and Essex County**, inspecting the roof, photographing storm and hail damage, and meeting the adjuster on site as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides insurance roof replacement across Newark**, inspecting the roof, photographing storm, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site as a roofing contractor, not an adjuster.",
      "eastOrange": "**Newark Quality Roofing provides insurance roof replacement across East Orange, inspecting the roof, photographing storm, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides insurance roof replacement across Orange and Essex County, inspecting the roof, photographing storm, wind, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site** as a roofing contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing insurance roof replacement across Newark, New Jersey, and Essex County**, inspecting the roof, photographing storm, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing insurance roof replacement across East Orange, New Jersey, and Essex County**, inspecting the roof, photographing storm, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing insurance roof replacement across Orange, New Jersey, and Essex County**, inspecting the roof, photographing storm, wind, hail, and fire damage, writing a scope and estimate, and meeting the adjuster on site as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "storm-damage-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing storm-damaged roofs across Newark, New Jersey, and Essex County**, documenting wind and hail damage with photographs and a scope, then installing a new roof as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing** provides **storm damage roof replacement** across Newark and Essex County, documenting wind, hail, and nor'easter damage with photographs, then replacing the roof to manufacturer specification as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing replaces storm-damaged roofs across East Orange**, documenting wind, hail, and nor'easter damage with photographs and a detailed scope, then installing a new roof on multi-family and single-family buildings as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces storm-damaged roofs across Orange and Essex County, documenting wind, hail, and nor'easter damage with photographs and a detailed scope, then installing a new roof to manufacturer specification** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing storm-damaged roofs across Newark, New Jersey, and Essex County**, documenting wind, hail, and nor'easter damage with photographs, then replacing the roof to manufacturer specification as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing storm-damaged roofs across East Orange, New Jersey, and Essex County**, documenting wind, hail, and nor'easter damage with photographs and a detailed scope, then installing a new roof on multi-family and single-family buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing storm-damaged roofs across Orange, New Jersey, and Essex County**, documenting wind, hail, and nor'easter damage with photographs and a detailed scope, then installing a new roof to manufacturer specification as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "aging-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing aging roofs across Newark, New Jersey, and Essex County**, stripping a roof at the end of its lifespan and installing a new roof as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces aging roofs across Newark**, stripping a roof at the end of its material lifespan to the deck and installing a new underlayment-and-cover system before age-driven failure, as a **New Jersey Home Improvement Contractor.**",
      "eastOrange": "**Newark Quality Roofing replaces aging roofs across East Orange, stripping a roof past its material lifespan to the deck and installing a new underlayment-and-cover system** on pre-war apartments, walk-ups, and older homes as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces aging roofs across Orange and Essex County, stripping a roof at the end of its material lifespan to the deck and installing a new underlayment-and-cover system** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing aging roofs across Newark, New Jersey, and Essex County**, stripping a roof at the end of its material lifespan to the deck and installing a new underlayment-and-cover system before age-driven failure, as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing aging roofs across East Orange, New Jersey, and Essex County**, stripping a roof past its material lifespan to the deck and installing a new underlayment-and-cover system on pre-war apartments, walk-ups, and older homes as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing aging roofs across Orange, New Jersey, and Essex County**, stripping a roof at the end of its material lifespan to the deck and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-replacement-after-leak",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing a roof after a chronic leak across Newark, New Jersey, and Essex County**, stripping the failed roof to the deck and replacing rotted sheathing as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces a roof after a chronic leak across Newark**, stripping the failed roof to the deck, replacing the rotted sheathing a leak leaves behind, and installing a new system, as a **New Jersey Home Improvement Contractor.**",
      "eastOrange": "**Newark Quality Roofing replaces a roof after a chronic leak across East Orange**, stripping the roof to the deck, replacing rotted sheathing, and installing new underlayment-and-cover over pre-war walk-ups and multi-family buildings as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces a roof after a chronic leak across Orange and Essex County, stripping the failed roof to the deck, replacing rotted sheathing, and installing a new underlayment-and-cover system** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing a roof after a chronic leak across Newark, New Jersey, and Essex County**, stripping the failed roof to the deck, replacing the rotted sheathing a leak leaves behind, and installing a new system as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing a roof after a chronic leak across East Orange, New Jersey, and Essex County**, stripping the roof to the deck, replacing rotted sheathing, and installing new underlayment-and-cover over pre-war walk-ups and multi-family buildings as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing a roof after a chronic leak across Orange, New Jersey, and Essex County**, stripping the failed roof to the deck, replacing rotted sheathing, and installing a new underlayment-and-cover system as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "fire-damage-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing fire-damaged roofs across Newark, New Jersey, and Essex County**, tearing off the charred covering and deck and rebuilding a Class A fire-rated roof as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces fire-damaged roofs across Newark and Essex County**, tearing off the charred covering and deck, replacing heat-weakened framing to a structural assessment, and rebuilding a **Class A fire-rated roof** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces fire-damaged roofs across East Orange and Essex County, tearing off the charred covering and deck, replacing heat-weakened framing, and rebuilding a Class A fire-rated roof** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces fire-damaged roofs across Orange and Essex County, tearing off the charred covering and deck, replacing heat-weakened framing to a structural assessment, and rebuilding a Class A fire-rated roof** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing fire-damaged roofs across Newark, New Jersey, and Essex County**, tearing off the charred covering and deck, replacing heat-weakened framing to a structural assessment, and rebuilding a Class A fire-rated roof as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing fire-damaged roofs across East Orange, New Jersey, and Essex County**, tearing off the charred covering and deck, replacing heat-weakened framing, and rebuilding a Class A fire-rated roof as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing fire-damaged roofs across Orange, New Jersey, and Essex County**, tearing off the charred covering and deck, replacing heat-weakened framing to a structural assessment, and rebuilding a Class A fire-rated roof as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "roof-replacement-cost",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Newark, New Jersey, and Essex County**, with a replacement costing $10,000-$25,000 for a typical home as a registered New Jersey Home Improvement Contractor, per HomeAdvisor data.",
    "originals": {
      "newark": "**Newark Quality Roofing prices and replaces residential and commercial roofs across Newark and Essex County**, itemizing roof size, material, tear-off, decking, and the NJ code path in a free written estimate as a **New Jersey Home Improvement Contractor**.",
      "eastOrange": "**Newark Quality Roofing prices and performs roof replacements across East Orange, itemizing cost from roof size, material, tear-off, decking, and NJ code** on multi-family, pre-war walk-up, and older single-family roofs as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing prices and performs roof replacements across Orange and Essex County**, estimating tear-off, decking, material, and NJ labor on two-/three-family, converted-loft, and detached homes as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Newark, New Jersey, and Essex County**, itemizing roof size, material, tear-off, decking, and the NJ code path in a free written estimate as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across East Orange, New Jersey, and Essex County**, itemizing cost from roof size, material, tear-off, decking, and NJ code on multi-family, pre-war walk-up, and older single-family roofs as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing residential and commercial roofs across Orange, New Jersey, and Essex County**, estimating tear-off, decking, material, and NJ labor on two-/three-family, converted-loft, and detached homes as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "asphalt-shingle-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor providing asphalt shingle roof replacement across Newark, New Jersey, and Essex County**, stripping the roof to the deck and installing new 3-tab or architectural shingles as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing provides asphalt shingle roof replacement across Newark**, stripping the roof to the deck, repairing the sheathing, and installing new 3-tab or architectural shingles to manufacturer specification as a New Jersey Home Improvement Contractor, licensed and insured.",
      "eastOrange": "**Newark Quality Roofing replaces asphalt shingle roofs across East Orange, stripping the roof to the deck and installing new 3-tab or architectural shingles** on single-family homes, two- and three-family walk-ups, and pre-war apartments as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing provides asphalt shingle roof replacement across the City of Orange Township, stripping the roof to the deck, repairing the sheathing, and installing new 3-tab or architectural shingles** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor providing asphalt shingle roof replacement across Newark, New Jersey, and Essex County**, stripping the roof to the deck, repairing the sheathing, and installing new 3-tab or architectural shingles to manufacturer specification as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor providing asphalt shingle roof replacement across East Orange, New Jersey, and Essex County**, stripping the roof to the deck and installing new 3-tab or architectural shingles on single-family homes, two- and three-family walk-ups, and pre-war apartments as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor providing asphalt shingle roof replacement across Orange, New Jersey, and Essex County**, stripping the roof to the deck, repairing the sheathing, and installing new 3-tab or architectural shingles as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "metal-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing roofs with new metal across Newark, New Jersey, and Essex County**, stripping the old roof to the deck and installing standing-seam or panel systems as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces roofs with new metal across Newark and Essex County** — stripping the old roof to the deck and installing **standing-seam, metal-panel, or metal-shingle** systems — as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces roofs with new metal across East Orange, stripping the old roof to the deck and installing standing-seam, metal-panel, or metal-shingle systems that last 40 to 80 years** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces roofs with new metal across Orange and Essex County, installing standing-seam, metal-panel, or metal-shingle systems** on two-/three-family homes, Seven Oaks detached houses, and Valley Arts loft buildings as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing roofs with new metal across Newark, New Jersey, and Essex County**, stripping the old roof to the deck and installing standing-seam, metal-panel, or metal-shingle systems as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing roofs with new metal across East Orange, New Jersey, and Essex County**, stripping the old roof to the deck and installing standing-seam, metal-panel, or metal-shingle systems that last 40 to 80 years as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing roofs with new metal across Orange, New Jersey, and Essex County**, installing standing-seam, metal-panel, or metal-shingle systems on two-/three-family homes, Seven Oaks detached houses, and Valley Arts loft buildings as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "slate-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing slate roofs across Newark, New Jersey, and Essex County**, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces slate roofs across Newark and Essex County, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces slate roofs across East Orange and Essex County, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces slate roofs across Orange and Essex County, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing slate roofs across Newark, New Jersey, and Essex County**, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing slate roofs across East Orange, New Jersey, and Essex County**, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing slate roofs across Orange, New Jersey, and Essex County**, stripping the slate to the deck, repairing the sheathing, and reinstalling natural or synthetic slate on copper or stainless fasteners as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "tile-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing tile roofs across Newark, New Jersey, and Essex County**, stripping the clay or concrete tile and underlayment to the deck and installing new tile as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces clay and concrete tile roofs across Newark**, stripping the tile and failed underlayment to the deck and installing a new underlayment-and-tile system over a load-rated structure as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces clay and concrete tile roofs across East Orange, stripping the tile and failed underlayment to the deck and installing a new underlayment-and-tile system over a load-rated structure** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces clay and concrete tile roofs across Orange and Essex County**, stripping the tile and failed underlayment to the deck and re-laying tile over a load-rated structure as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing tile roofs across Newark, New Jersey, and Essex County**, stripping the clay or concrete tile and failed underlayment to the deck and installing a new underlayment-and-tile system over a load-rated structure as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing tile roofs across East Orange, New Jersey, and Essex County**, stripping the clay or concrete tile and failed underlayment to the deck and installing a new underlayment-and-tile system over a load-rated structure as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing tile roofs across Orange, New Jersey, and Essex County**, stripping the clay or concrete tile and failed underlayment to the deck and re-laying tile over a load-rated structure as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "flat-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing flat and low-slope roofs across Newark, New Jersey, and Essex County**, stripping the failed membrane and installing a single-ply or modified-bitumen roof as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces flat and low-slope roofs across Newark**, stripping the failed membrane to the deck, repairing the substrate, then installing a new **single-ply or modified-bitumen system** as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces flat and low-slope roofs across East Orange and Essex County, stripping the failed membrane to the deck, repairing the substrate, then installing a new single-ply or modified-bitumen system** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces flat and low-slope roofs across Orange and Essex County, stripping the failed membrane to the deck, repairing the substrate, then installing a new single-ply or modified-bitumen system** as a New Jersey Home Improvement Contractor."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing flat and low-slope roofs across Newark, New Jersey, and Essex County**, stripping the failed membrane to the deck, repairing the substrate, then installing a new single-ply or modified-bitumen system as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing flat and low-slope roofs across East Orange, New Jersey, and Essex County**, stripping the failed membrane to the deck, repairing the substrate, then installing a new single-ply or modified-bitumen system as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing flat and low-slope roofs across Orange, New Jersey, and Essex County**, stripping the failed membrane to the deck, repairing the substrate, then installing a new single-ply or modified-bitumen system as a registered New Jersey Home Improvement Contractor."
    }
  },
  {
    "serviceId": "cedar-shake-roof-replacement",
    "gold": "**Newark Quality Roofing is a roofing contractor replacing cedar shake roofs across Newark, New Jersey, and Essex County**, stripping aging cedar to the deck and installing new cedar over a ventilated base as a registered New Jersey Home Improvement Contractor.",
    "originals": {
      "newark": "**Newark Quality Roofing replaces cedar shake and cedar shingle roofs across Newark**, stripping aging wood to the deck and installing new cedar on a ventilated nailing base as a New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing replaces cedar shake and cedar shingle roofs across East Orange and Essex County, stripping aging cedar to the deck and installing new cedar on a ventilated nailing base** as a New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing replaces cedar shake and cedar shingle roofs on Orange's older detached homes**, working as a New Jersey Home Improvement Contractor and coordinating the **Certificate of Appropriateness** where a designated historic district applies."
    },
    "reframed": {
      "newark": "**Newark Quality Roofing is a roofing contractor replacing cedar shake roofs across Newark, New Jersey, and Essex County**, stripping aging wood to the deck and installing new cedar on a ventilated nailing base as a registered New Jersey Home Improvement Contractor.",
      "eastOrange": "**Newark Quality Roofing is a roofing contractor replacing cedar shake roofs across East Orange, New Jersey, and Essex County**, stripping aging cedar to the deck and installing new cedar on a ventilated nailing base as a registered New Jersey Home Improvement Contractor.",
      "orange": "**Newark Quality Roofing is a roofing contractor replacing cedar shake roofs across Orange, New Jersey, and Essex County**, working on the city's older detached homes and coordinating the Certificate of Appropriateness where a designated historic district applies, as a registered New Jersey Home Improvement Contractor."
    }
  }
];
const OUTDIR = '/Users/akungapaul/Projects/Newarkqualityroofing/.planning/content-system/entity-grounding-3b-combo-reframe/findings';

const SPEC = `
You are an ADVERSARIAL reviewer auditing a TARGETED reframe of combo-page directAnswers for Newark Quality Roofing (a NJ roofing company). The reframe’s ONLY job was to: (a) make each directAnswer read like the service-page GOLD — "is a roofing contractor providing {service} across {City}, New Jersey, and Essex County … as a registered New Jersey Home Improvement Contractor"; (b) swap in the correct city; (c) keep each city’s OWN local specifics; (d) replace any "licensed" self-claim with "registered". The deterministic gate ALREADY confirmed: ≤40-word bold span, balanced **, "roofing contractor" present, correct "[City], New Jersey" present, zero "licensed", "registered" credential, no modality. Do NOT re-report those — they pass.

Your job is the QUALITATIVE layer. Flag ONLY genuine problems in these dimensions:
1. NATURAL READ — the reframe produced awkward grammar, a doubled/garbled clause, a dangling phrase, or a broken sentence.
2. PRESERVED CITY-SPECIFICS — the reframed string DROPPED the city’s distinctive local detail that the ORIGINAL had (e.g. Newark row houses/brownstones/Ironbound; East Orange pre-war apartments/multi-family walk-ups; Orange two-/three-family/Valley Arts/Main Street/Seven Oaks) and replaced it with the gold’s generic specifics — this would make the three cities read identically (a duplicate-content risk). Flag if local specifics were lost.
3. FACTUAL DRIFT — the reframe INVENTED a neighborhood, building type, material, or claim that was NOT in that city’s original directAnswer or the gold.
4. WRONG-CITY SPECIFICS — a city’s string carries another city’s landmark/neighborhood (e.g. Orange string mentioning "Ironbound", which is Newark).
5. CREDENTIAL/DE-FAB — any residual self-promotional fabrication, or the credential reads unnaturally.

For each genuine issue return a finding: {city: "newark"|"eastOrange"|"orange", severity: "high"|"med"|"low", issue: "...", suggestedFix: "full corrected directAnswer string"}.
If all three are clean, return an EMPTY findings array. Be precise — do not invent issues; a faithful, natural reframe that preserves specifics is a PASS.
`;

function promptFor(item) {
  const path = `${OUTDIR}/${item.serviceId}.json`;
  return `${SPEC}

SERVICE: ${item.serviceId}

GOLD (service-page directAnswer — the intended framing):
  ${item.gold}

PER CITY — ORIGINAL (pre-reframe) vs REFRAMED (current):
  NEWARK
    ORIGINAL:  ${item.originals.newark}
    REFRAMED:  ${item.reframed.newark}
  EAST ORANGE
    ORIGINAL:  ${item.originals.eastOrange}
    REFRAMED:  ${item.reframed.eastOrange}
  ORANGE
    ORIGINAL:  ${item.originals.orange}
    REFRAMED:  ${item.reframed.orange}

Audit all three. Then use the Write tool to write EXACTLY this file (valid JSON, no markdown fence):
PATH: ${path}
CONTENT:
{
  "serviceId": "${item.serviceId}",
  "findings": [ { "city": "...", "severity": "...", "issue": "...", "suggestedFix": "..." } ]
}
(findings = [] if all three are clean.) JSON-escape only quote and backslash. After writing, return ONE line: "<serviceId>: <N> findings".`;
}

phase('Review');
const results = await parallel(
  PAYLOAD.map((item) => () => agent(promptFor(item), { label: `review:${item.serviceId}`, phase: 'Review' }))
);
log(`review agents completed: ${results.filter(Boolean).length}/${PAYLOAD.length}`);
return { completed: results.filter(Boolean).length, total: PAYLOAD.length };
