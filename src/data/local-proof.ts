import type { City, Service } from '@/lib/types';

const cityProfiles: Record<string, { propertyTypes: string[]; roofPatterns: string[]; localRisks: string[]; neighborhoods: string[] }> = {
  newark: {
    neighborhoods: ['Ironbound', 'Forest Hill', 'North Ward', 'Downtown', 'Vailsburg'],
    propertyTypes: ['brownstones and row houses', 'flat-roof commercial blocks', 'mixed-use downtown buildings', 'multi-family walk-ups'],
    roofPatterns: ['party-wall flashing leaks', 'low-slope drainage issues', 'parapet and coping failures', 'urban heat-island membrane wear'],
    localRisks: ['tight access from narrow lots', 'older masonry transitions', 'wind-driven rain off Newark Bay', 'rooftop HVAC punctures'],
  },
  'east-orange': {
    neighborhoods: ['Ampere', 'Greenwood', 'Presidential Estates', 'Doddtown'],
    propertyTypes: ['older multi-family homes', 'single-family colonials', 'apartment buildings', 'small commercial corridors'],
    roofPatterns: ['aging shingle roofs', 'porch roof leaks', 'flat-roof ponding', 'chimney flashing wear'],
    localRisks: ['dense tree cover', 'older roof decking', 'shared drainage on multifamily properties'],
  },
  bloomfield: {
    neighborhoods: ['Brookdale', 'Watsessing', 'Halcyon Park', 'Oak View'],
    propertyTypes: ['colonials', 'cape cod homes', 'garden apartments', 'retail storefronts'],
    roofPatterns: ['valley leaks', 'gutter overflow', 'storm-lifted shingles', 'skylight flashing wear'],
    localRisks: ['mature tree debris', 'freeze-thaw cycles', 'older attic ventilation'],
  },
  montclair: {
    neighborhoods: ['Upper Montclair', 'Watchung Plaza', 'Walnut Street', 'South End'],
    propertyTypes: ['historic homes', 'slate and cedar roofs', 'luxury residences', 'walkable commercial buildings'],
    roofPatterns: ['slate repair needs', 'cedar shake aging', 'complex valleys', 'copper flashing details'],
    localRisks: ['historic material matching', 'steep roof access', 'tree canopy moisture'],
  },
  belleville: {
    neighborhoods: ['Silver Lake', 'Branch Brook Park area', 'Washington Avenue corridor'],
    propertyTypes: ['two-family homes', 'row homes', 'small commercial roofs', 'post-war houses'],
    roofPatterns: ['gutter and fascia deterioration', 'flat porch roof leaks', 'aging shingles', 'chimney flashing failures'],
    localRisks: ['dense lots', 'older drainage details', 'storm debris from mature trees'],
  },
  irvington: {
    neighborhoods: ['Clinton Avenue corridor', 'Springfield Avenue', 'Stuyvesant Avenue'],
    propertyTypes: ['multi-family houses', 'row homes', 'small apartment buildings', 'storefront properties'],
    roofPatterns: ['flat-roof leaks', 'rear addition roof failures', 'party-wall seepage', 'old flashing systems'],
    localRisks: ['tight access', 'aging decking', 'shared roof lines'],
  },
};

const serviceProfiles: Record<string, { decisionFactors: string[]; proofPoints: string[]; failureRisks: string[] }> = {
  'roof-repair': {
    decisionFactors: ['source of leak vs. visible stain', 'flashing condition', 'deck softness', 'repair durability window'],
    proofPoints: ['photo-documented diagnosis', 'temporary water-control plan', 'material-matched repair', 'post-repair inspection notes'],
    failureRisks: ['patching symptoms instead of leak paths', 'missing party-wall migration', 'ignoring attic ventilation'],
  },
  'roof-leak-repair': {
    decisionFactors: ['active water entry point', 'travel path through attic or wall cavity', 'roof penetration condition', 'interior damage risk'],
    proofPoints: ['moisture tracing', 'before/after repair photos', 'sealant and flashing notes', 'follow-up rain check guidance'],
    failureRisks: ['water traveling from a different roof plane', 'failed plumbing vent boots', 'hidden decking rot'],
  },
  'emergency-roof-repair': {
    decisionFactors: ['active leak severity', 'safe access', 'temporary dry-in needs', 'insurance documentation'],
    proofPoints: ['rapid response triage', 'tarp or membrane dry-in', 'damage photos', 'permanent repair scope'],
    failureRisks: ['unsafe storm access', 'temporary patches left too long', 'undocumented insurance damage'],
  },
  'roof-replacement': {
    decisionFactors: ['remaining roof life', 'deck condition', 'ventilation', 'material/warranty fit'],
    proofPoints: ['tear-off findings', 'decking replacement notes', 'manufacturer system details', 'warranty documentation'],
    failureRisks: ['overlaying bad decking', 'poor ventilation', 'mismatched flashing details'],
  },
  'flat-roof-installation-repair': {
    decisionFactors: ['slope and drainage', 'membrane type', 'penetrations', 'parapet details'],
    proofPoints: ['ponding-water map', 'seam inspection', 'flashing detail review', 'maintenance plan'],
    failureRisks: ['trapped water at scuppers', 'HVAC punctures', 'unsealed parapet coping'],
  },
};

const fallbackCity = {
  neighborhoods: ['nearby Essex County neighborhoods', 'main residential corridors', 'local commercial blocks'],
  propertyTypes: ['single-family homes', 'multi-family properties', 'small commercial buildings'],
  roofPatterns: ['storm damage', 'aging shingles', 'flashing wear', 'gutter and drainage problems'],
  localRisks: ['freeze-thaw cycles', 'heavy rain', 'tree debris', 'older roof ventilation'],
};

const fallbackService = {
  decisionFactors: ['roof age', 'material condition', 'leak history', 'access and safety'],
  proofPoints: ['written estimate', 'photo documentation', 'licensed workmanship', 'clear warranty guidance'],
  failureRisks: ['hidden decking damage', 'poor flashing details', 'deferred maintenance'],
};

export function getCityProofProfile(city: City) {
  return cityProfiles[city.id] ?? fallbackCity;
}

export function getServiceProofProfile(service: Service) {
  return serviceProfiles[service.id] ?? fallbackService;
}

export function getLocalProofSummary(service?: Service, city?: City): string {
  if (service && city) {
    const c = getCityProofProfile(city);
    return `${service.name} in ${city.name} is evaluated around ${c.roofPatterns.slice(0, 2).join(' and ')}, not just a generic roofing checklist.`;
  }
  if (city) return `${city.name} roofing content is grounded in local property types, neighborhoods, roof patterns, and access constraints.`;
  if (service) return `${service.name} content is structured around diagnosis, risk, material fit, documentation, and warranty confidence.`;
  return 'This content is structured to help Google and homeowners understand the page purpose, local relevance, and trust signals.';
}
