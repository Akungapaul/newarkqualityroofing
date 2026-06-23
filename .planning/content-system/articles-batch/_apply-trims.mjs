// Deterministic ≤40w lead trims for the commercial-roof-types pre-gate.
// Each patch asserts the exact current value (old) before replacing (val) — preserves
// every fact, source, and bold topic; only trims the over-limit lead. path: 'da' =
// directAnswer; 's<i>b0' = sections[i].body[0].
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const P = [
  // tpo-roofing-installation-signs
  { id: 'tpo-roofing-installation-signs', path: 'da',
    old: "**The signs you need TPO roofing installation are a low-slope membrane past its 7-to-20-year service life, welded or taped seams that separate and leak, damage across more than 25 to 30% of the roof, ponding water over 48 hours, or new construction needing a code-compliant low-slope roof** (InterNACHI; single-ply field guidance; NRCA).",
    val: "**The signs you need TPO roofing installation are a membrane past its 7-to-20-year service life, separating welded or taped seams, damage over 25 to 30% of the roof, ponding past 48 hours, or new low-slope construction** (InterNACHI; single-ply field guidance; NRCA)." },
  { id: 'tpo-roofing-installation-signs', path: 's1b0',
    old: "**Welded or taped seams that separate and leak repeatedly are the dominant TPO failure, damage across more than 25 to 30% of the roof crosses the flat-roof replacement threshold, and ponding water standing over 48 hours counts as a defect** (single-ply field guidance; flat-roof repair guidance; NRCA, ARMA).",
    val: "**Welded or taped seams that separate and leak repeatedly are the dominant TPO failure, and damage across more than 25 to 30% of the roof crosses the flat-roof replacement threshold.** Ponding water standing over 48 hours counts as a defect, per single-ply field guidance, flat-roof repair guidance, and the NRCA and ARMA." },
  { id: 'tpo-roofing-installation-signs', path: 's2b0',
    old: "**A new commercial building or addition needs a single-ply membrane engineered for wind uplift and drainage before occupancy, and a dark heat-absorbing membrane over a cooled space calls for a reflective white TPO surface** that reflects roughly 70 to 85% of solar radiation per ASTM C1549 and the CRRC.",
    val: "**A new commercial building or addition needs a single-ply membrane engineered for wind uplift and drainage before occupancy.** A dark heat-absorbing membrane over a cooled space calls for a reflective white TPO surface that reflects roughly 70 to 85% of solar radiation per ASTM C1549 and the CRRC." },
  // tpo-roofing-installation-cost-guide
  { id: 'tpo-roofing-installation-cost-guide', path: 's2b0',
    old: "**New Jersey ranges sit 10 to 40% above national figures**, because labor accounts for a large share of a membrane install and NJ code is stricter, while a reflective white TPO membrane lowers rooftop heat gain over the roof's life, per regional roofing cost data and ASTM C1549. A free written estimate prices the specific roof.",
    val: "**New Jersey ranges sit 10 to 40% above national figures**, because labor is a large share of a membrane install and NJ code is stricter, while a reflective white TPO membrane lowers rooftop heat gain (per ASTM C1549). A free written estimate prices the specific roof." },
  // tpo-roofing-installation-decision
  { id: 'tpo-roofing-installation-decision', path: 'da',
    old: "**TPO roofing's advantages are heat-welded seams that fuse the sheets into one continuous water layer, a reflective white cool-roof surface that reflects roughly 70 to 85% of solar radiation, and a lower installed cost; its drawback is a shorter 7-to-20-year life that fails at the welded seam** (InterNACHI; ASTM C1549; CRRC).",
    val: "**TPO roofing's advantages are heat-welded seams that fuse into one water layer, a white cool-roof surface reflecting roughly 70 to 85%, and a lower installed cost; its drawback is a shorter 7-to-20-year life that fails at the seam** (InterNACHI; ASTM C1549; CRRC)." },
  // epdm-commercial-roofing-signs
  { id: 'epdm-commercial-roofing-signs', path: 'da',
    old: "**The signs you need EPDM commercial roofing are open or separated splice seams, a rubber membrane shrinking away from perimeters and curbs, ponding water beyond 48 hours, damage across more than 25 to 30% of the roof, recurring same-spot leaks, or a membrane reaching its 15-to-25-year service life** (NRCA, InterNACHI, HomeGuide).",
    val: "**The signs you need EPDM commercial roofing are separated splice seams, a membrane shrinking from perimeters and curbs, ponding past 48 hours, damage over 25 to 30%, recurring same-spot leaks, or a membrane past its 15-to-25-year life** (NRCA, InterNACHI, HomeGuide)." },
  { id: 'epdm-commercial-roofing-signs', path: 's0b0',
    old: "**An EPDM membrane reaches end-of-life at 15 to 25 years**, per the InterNACHI life-expectancy chart, with a service-life study attributed via Progressive Materials placing EPDM at 25 to 30 years; seam separation is the dominant EPDM failure mode that ends that service, per NRCA technical guidance.",
    val: "**An EPDM membrane reaches end-of-life at 15 to 25 years, per the InterNACHI life-expectancy chart**, with a service-life study attributed via Progressive Materials placing EPDM at 25 to 30 years. Seam separation is the dominant EPDM failure mode that ends that service, per NRCA technical guidance." },
  { id: 'epdm-commercial-roofing-signs', path: 's1b0',
    old: "**The membrane signs that signal EPDM failure are open or separated splice seams, a rubber sheet pulling away from perimeters, curbs, and penetrations through shrinkage, and ponding water standing more than 48 hours** — the seam being the dominant failure mode, per NRCA technical guidance.",
    val: "**The membrane signs of EPDM failure are open or separated splice seams, a rubber sheet pulling away from perimeters, curbs, and penetrations through shrinkage, and ponding water standing more than 48 hours.** The splice seam is the dominant failure mode, per NRCA technical guidance." },
  { id: 'epdm-commercial-roofing-signs', path: 's2b0',
    old: "**Damage across more than 25 to 30% of the roof area crosses the flat-roof replacement threshold, and recurring same-spot leaks signal systemic failure that favors replacement regardless of area** — the thresholds tracing to Parish, Modernize, and HomeGuide flat-roof guidance and HomeAdvisor.",
    val: "**Damage across more than 25 to 30% of the roof area crosses the flat-roof replacement threshold, and recurring same-spot leaks signal systemic failure that favors replacement regardless of area.** The thresholds trace to Parish, Modernize, and HomeGuide flat-roof guidance and HomeAdvisor." },
  // epdm-commercial-roofing-cost-guide
  { id: 'epdm-commercial-roofing-cost-guide', path: 's0b0',
    old: "**EPDM commercial roofing in New Jersey runs $7.00 to $10.00 per square foot installed**, per Josten Roofing NJ pricing, with flat-roof repair at $2.50 to $10.00 per square foot and EPDM repair and install at $5 to $9 per square foot, per HomeGuide and HomeAdvisor cost data. The square-foot rate is the figure that scales to any roof, which is why a per-square-foot range describes EPDM more accurately than a lump-sum total.",
    val: "**EPDM commercial roofing in New Jersey runs $7.00 to $10.00 per square foot installed**, per Josten Roofing NJ pricing, with flat-roof repair at $2.50 to $10.00 per square foot, per HomeGuide and HomeAdvisor cost data. The square-foot rate is the figure that scales to any roof, which is why a per-square-foot range describes EPDM more accurately than a lump-sum total." },
  // modified-bitumen-roofing-signs
  { id: 'modified-bitumen-roofing-signs', path: 'da',
    old: "**The signs you need modified bitumen roofing are alligator cracking across the bituminous cap, blistering and delamination between plies, flashing separation at penetrations and parapets, ponding water held over 48 hours, a roof at or past 20 years, or damage across more than 25 to 30% of the area**, per ARMA, NRCA, and the InterNACHI life-expectancy chart.",
    val: "**The signs you need modified bitumen roofing are alligator cracking across the cap, blistering between plies, flashing separation at penetrations, ponding over 48 hours, a roof at or past 20 years, or damage over 25 to 30%**, per ARMA, NRCA, and the InterNACHI life-expectancy chart." },
  { id: 'modified-bitumen-roofing-signs', path: 's1b0',
    old: "**Blistering and delamination between the plies, flashing separation at penetrations and parapets, and ponding water held over 48 hours** are the surface and ply signs of a failing modified bitumen roof, per ARMA, NRCA, and the NRCA and ARMA drainage standard. Each concentrates where the multi-ply assembly or its details break down.",
    val: "**Blistering and delamination between the plies, flashing separation at penetrations and parapets, and ponding water held over 48 hours** are the surface and ply signs of a failing modified bitumen roof, per ARMA and NRCA. Each concentrates where the multi-ply assembly or its details break down." },
  // modified-bitumen-roofing-decision
  { id: 'modified-bitumen-roofing-decision', path: 's0b0',
    old: "**Modified bitumen's advantages** are a multi-ply assembly that absorbs the foot traffic and concentrated loads of HVAC service access, a granulated cap with built-in UV and slip protection, and SBS cold flexibility for the Essex County winter, per ARMA and the InterNACHI life-expectancy chart.",
    val: "**Modified bitumen's advantages** are a multi-ply assembly that absorbs HVAC foot traffic, a granulated cap with built-in UV and slip protection, and SBS cold flexibility for the Essex County winter, per ARMA and the InterNACHI life-expectancy chart." },
  { id: 'modified-bitumen-roofing-decision', path: 's1b0',
    old: "**Modified bitumen's drawbacks** are a 20-year life shorter than built-up roofing at 30 years and PVC at 20 to 30 years, torch application that bonds by open flame, and failure modes that concentrate at alligator cracking and blistering, per the InterNACHI life-expectancy chart, ARMA, and NRCA.",
    val: "**Modified bitumen's drawbacks** are a 20-year life shorter than built-up roofing at 30 years, torch application that bonds by open flame, and failure modes that concentrate at alligator cracking and blistering, per the InterNACHI life-expectancy chart, ARMA, and NRCA." },
  // built-up-roofing-cost-guide
  { id: 'built-up-roofing-cost-guide', path: 's1b0',
    old: "**Ply count and surfacing drive the installed price of built-up roofing**, because a 4-ply or 5-ply system adds reinforcing fabric and bitumen over a 3-ply build, and a reflective coating and a gravel flood coat carry different material and labor, per NRCA low-slope construction and maintenance guidance.",
    val: "**Ply count and surfacing drive the installed price of built-up roofing**, because a 4-ply or 5-ply system adds fabric and bitumen over a 3-ply build. A reflective coating and a gravel flood coat carry different material and labor, per NRCA low-slope construction and maintenance guidance." },
  // built-up-roofing-decision
  { id: 'built-up-roofing-decision', path: 's0b0',
    old: "**Built-up roofing lasts 30 years, the longest membrane life on the InterNACHI life-expectancy chart**, ahead of EPDM at 15-25 years, modified bitumen at 20 years, and TPO at 7-20 years, because each mopped ply of reinforcing fabric in hot bitumen adds an independent waterproofing layer.",
    val: "**Built-up roofing lasts 30 years, the longest membrane life on the InterNACHI life-expectancy chart**, ahead of EPDM at 15-25 years, modified bitumen at 20 years, and TPO at 7-20 years. Each mopped ply of reinforcing fabric in hot bitumen adds an independent waterproofing layer." },
  // commercial-metal-roofing-signs
  { id: 'commercial-metal-roofing-signs', path: 's1b0',
    old: "**Panel corrosion across more than 20 to 25% of the roof, or seam-connection damage across more than 25% of a standing-seam roof, crosses the metal repair-vs-replace threshold**, the point at which full replacement returns more value than continued repair, per metal-roofing industry consensus.",
    val: "**Panel corrosion across more than 20 to 25% of the roof, or seam-connection damage over 25% of a standing-seam roof, crosses the metal repair-vs-replace threshold.** Above it, full replacement returns more value than continued repair, per metal-roofing industry consensus." },
  // commercial-metal-roofing-cost-guide
  { id: 'commercial-metal-roofing-cost-guide', path: 's0b0',
    old: "**Commercial metal roofing costs $9.00 to $16.00 per square foot installed in New Jersey**, with panel repair or replacement at $3 to $14 per square foot and premium copper up to $30 per square foot, per Josten Roofing NJ pricing and HomeAdvisor cost data.",
    val: "**Commercial metal roofing costs $9.00 to $16.00 per square foot installed in New Jersey**, with panel repair at $3 to $14 per square foot and copper up to $30 per square foot, per Josten Roofing NJ and HomeAdvisor." },
  // pvc-roofing-signs
  { id: 'pvc-roofing-signs', path: 'da',
    old: "**The signs you need PVC roofing are a roof carrying grease, animal-fat, or oil exhaust, chemical or solvent exhaust from a lab or shop, an EPDM or TPO membrane embrittled and split at the seams, a high cooling load, or ponding past 48 hours** (NRCA technical library, Duro-Last, InterNACHI).",
    val: "**The signs you need PVC roofing are a roof carrying grease, animal-fat, or chemical exhaust from a kitchen, lab, or shop, an EPDM or TPO membrane split at the seams, a high cooling load, or ponding past 48 hours** (NRCA technical library, Duro-Last, InterNACHI)." },
  { id: 'pvc-roofing-signs', path: 's0b0',
    old: "**Grease, animal fats, and oil from kitchen and food-processing exhaust, and chemical or solvent exhaust from a laboratory, automotive shop, or manufacturing process, call for PVC**, because these substances soften and degrade EPDM and TPO but not PVC, per the NRCA technical library.",
    val: "**Grease, animal fats, and oil from kitchen exhaust, and chemical or solvent exhaust from a laboratory or shop, call for PVC**, because these substances soften and degrade EPDM and TPO but not PVC, per the NRCA technical library." },
  { id: 'pvc-roofing-signs', path: 's1b0',
    old: "**An existing EPDM or TPO membrane embrittled, cracked, or split at the welded seams** signals a chemically attacked or end-of-life low-slope roof that a PVC replacement resolves, because EPDM lasts 15 to 25 years and TPO 7 to 20 years, per the InterNACHI life-expectancy chart.",
    val: "**An existing EPDM or TPO membrane embrittled, cracked, or split at the welded seams** signals a chemically attacked or end-of-life low-slope roof that a PVC replacement resolves. EPDM lasts 15 to 25 years and TPO 7 to 20 years, per the InterNACHI life-expectancy chart." },
  { id: 'pvc-roofing-signs', path: 's2b0',
    old: "**A high cooling load on a large low-slope footprint, or ponding water held more than 48 hours after rain, applies to a PVC decision** — a white PVC cool roof reflects roughly 70 to 85% of solar radiation per ASTM C1549, and ponding past 48 hours counts as a defect (Duro-Last, the Cool Roof Rating Council, NRCA, ARMA).",
    val: "**A high cooling load on a large low-slope footprint, or ponding water held more than 48 hours after rain, applies to a PVC decision.** A white PVC cool roof reflects roughly 70 to 85% of solar radiation per ASTM C1549, and ponding past 48 hours counts as a defect, per Duro-Last, the Cool Roof Rating Council, the NRCA, and ARMA." },
  // pvc-roofing-decision
  { id: 'pvc-roofing-decision', path: 'da',
    old: "**PVC roofing's advantages are grease and chemical resistance no other single-ply membrane matches, hot-air-welded seams that re-fuse for a permanent repair, a 20-to-30-year life, and a white cool-roof surface; its drawbacks are a higher cost than TPO and plasticizer-loss embrittlement over decades**, per the NRCA, the Single Ply Roofing Industry, and Duro-Last.",
    val: "**PVC roofing's advantages are grease and chemical resistance no other single-ply matches, hot-air-welded seams that re-fuse, a 20-to-30-year life, and a white cool-roof surface; its drawbacks are a higher cost than TPO and plasticizer-loss embrittlement**, per the NRCA, the Single Ply Roofing Industry, and Duro-Last." },
  { id: 'pvc-roofing-decision', path: 's1b0',
    old: "**PVC's drawbacks are a higher installed cost than TPO, plasticizer-loss embrittlement that reduces flexibility over decades, and the fact that the membrane is overkill on a roof without grease or chemical exposure**, per commercial cost guides and the NRCA technical library. The cost and aging trade-offs are real, not cosmetic.",
    val: "**PVC's drawbacks are a higher installed cost than TPO, plasticizer-loss embrittlement that reduces flexibility over decades, and a membrane that is overkill on a roof without grease or chemical exposure**, per commercial cost guides and the NRCA. The cost and aging trade-offs are real, not cosmetic." },
  { id: 'pvc-roofing-decision', path: 's2b0',
    old: "**PVC fits a commercial low-slope roof carrying grease, oil, or chemical exhaust — a restaurant, food-processing plant, laboratory, or automotive shop — or a high cooling load; a roof without chemical exposure favors lower-cost TPO or EPDM**, per the NRCA technical library and Duro-Last. The exhaust the roof carries decides the match.",
    val: "**PVC fits a commercial low-slope roof carrying grease, oil, or chemical exhaust — a restaurant, food-processing plant, laboratory, or automotive shop — or a high cooling load.** A roof without chemical exposure favors lower-cost TPO or EPDM, per the NRCA technical library and Duro-Last. The exhaust the roof carries decides the match." },
  // green-roof-installation-signs
  { id: 'green-roof-installation-signs', path: 'da',
    old: "**The signs you need green roof installation are a municipal stormwater program offering green-infrastructure fee credits, a low-slope roof at its membrane service life, a high top-floor cooling load, a LEED or WELL certification target, or an unused roof suited to an amenity** (InterNACHI; Single Ply Roofing Industry).",
    val: "**The signs you need green roof installation are a stormwater program offering green-infrastructure fee credits, a low-slope roof at its membrane life, a high cooling load, a LEED or WELL target, or an unused roof for an amenity** (InterNACHI; Single Ply Roofing Industry)." },
  { id: 'green-roof-installation-signs', path: 's0b0',
    old: "**A municipal stormwater program offering green-infrastructure fee credits and a high top-floor cooling load** are the two operating signs that point to a green roof, because a green roof retains rainfall on the roof and the growing media adds thermal mass an exposed membrane lacks (Single Ply Roofing Industry).",
    val: "**A municipal stormwater program offering green-infrastructure fee credits and a high top-floor cooling load** are the two operating signs that point to a green roof. A green roof retains rainfall on the roof, and the growing media adds thermal mass an exposed membrane lacks (Single Ply Roofing Industry)." },
  { id: 'green-roof-installation-signs', path: 's1b0',
    old: "**A low-slope membrane reaching its service life and a LEED or WELL certification target** open the green roof opportunity, because a re-roof exposes the assembly for a planted build and a vegetated roof scores sustainable-sites, water-efficiency, and energy credit categories the certification programs award (InterNACHI; Single Ply Roofing Industry).",
    val: "**A low-slope membrane reaching its service life and a LEED or WELL certification target** open the green roof opportunity. A re-roof exposes the assembly for a planted build, and a vegetated roof scores the sustainable-sites, water-efficiency, and energy credit categories the certification programs award (InterNACHI; Single Ply Roofing Industry)." },
  { id: 'green-roof-installation-signs', path: 's2b0',
    old: "**An unused low-slope roof area suited to a rooftop amenity and a corporate sustainability mandate for visible green infrastructure** are the building conditions that suit a green roof, because deeper growing media supports an intensive amenity and a vegetated roof converts a conventional roof into measurable green infrastructure (gold green-roof signs).",
    val: "**An unused low-slope roof area suited to a rooftop amenity and a corporate sustainability mandate for visible green infrastructure** are the building conditions that suit a green roof. Deeper growing media supports an intensive amenity, and a vegetated roof converts a conventional roof into measurable green infrastructure." },
  // green-roof-installation-cost-guide
  { id: 'green-roof-installation-cost-guide', path: 's0b0',
    old: "**The green-roof-rated waterproofing membrane substrate installs at $6 to $12 per square foot in New Jersey**, with a PVC single-ply substrate near the top of that range, NJ TPO flat-roof membrane at $8 to $12, and EPDM at $7 to $10 per square foot (commercial cost guides citing M&M Roofing and WeatherStar; Josten Roofing NJ).",
    val: "**The green-roof-rated waterproofing membrane substrate installs at $6 to $12 per square foot in New Jersey**, with a PVC single-ply substrate near the top of that range. NJ TPO flat-roof membrane runs $8 to $12 and EPDM $7 to $10 per square foot, per commercial cost guides citing M&M Roofing and WeatherStar and Josten Roofing NJ." },
  { id: 'green-roof-installation-cost-guide', path: 's1b0',
    old: "**The structural capacity for the saturated green-roof load and the green-roof type drive the total cost above the membrane substrate**, because the growing media, water-retention, and vegetation layers add weight a structural assessment confirms, and the type sets the media depth and plant palette (gold; Single Ply Roofing Industry).",
    val: "**The structural capacity for the saturated green-roof load and the green-roof type drive the total cost above the membrane substrate.** The growing media, water-retention, and vegetation layers add weight a structural assessment confirms, and the type sets the media depth and plant palette." },
  // spray-foam-roofing-signs
  { id: 'spray-foam-roofing-signs', path: 'da',
    old: "**The signs you need spray foam roofing are a low-slope roof with minimal insulation, ponding water held past 48 hours, a surface broken by many penetrations and curbs, repeated seam failures, a sound roof under fewer than 2 layers, or an eroded coating exposing foam** (SPFA / NRCA).",
    val: "**The signs you need spray foam roofing are minimal insulation, ponding past 48 hours, a surface broken by many penetrations and curbs, repeated seam failures, a sound roof under 2 layers, or an eroded coating exposing foam** (SPFA / NRCA)." },
  { id: 'spray-foam-roofing-signs', path: 's0b0',
    old: "**Minimal insulation and ponding water that lingers past 48 hours** are the two condition signs that point toward a spray foam roof, because foam adds an aged R-value of R-6.0 to R-6.5 per inch and builds positive drainage into its own thickness. ICC-ES reports and the SPFA attribute that aged R-6.0 to R-6.5 per inch to spray polyurethane foam, a figure no single-ply membrane provides.",
    val: "**Minimal insulation and ponding water that lingers past 48 hours** are the two condition signs that point toward a spray foam roof, because foam adds an aged R-6.0 to R-6.5 per inch and builds positive drainage into its thickness. ICC-ES reports and the SPFA attribute that aged R-6.0 to R-6.5 per inch to spray polyurethane foam, a figure no single-ply membrane provides." },
  // spray-foam-roofing-cost-guide
  { id: 'spray-foam-roofing-cost-guide', path: 's0b0',
    old: "**Spray foam roofing costs $4 to $8 per square foot installed in New Jersey**, per commercial roofing cost guides, with the rate set by foam thickness, the protective coating, and whether the work recovers a sound roof or follows a tear-off.",
    val: "**Spray foam roofing costs $4 to $8 per square foot installed in New Jersey**, per commercial roofing cost guides, with the rate set by foam thickness, the coating, and whether it recovers a sound roof or follows a tear-off." },
  { id: 'spray-foam-roofing-cost-guide', path: 's1b0',
    old: "**Foam thickness and the coating recoat cycle** drive the installed price, because each inch of foam adds an aged R-6.0 to R-6.5 of insulation per ICC-ES reports and the SPFA, so a higher R-value target raises the applied thickness and the material cost.",
    val: "**Foam thickness and the coating recoat cycle** drive the installed price, because each inch of foam adds an aged R-6.0 to R-6.5 of insulation, per ICC-ES reports and the SPFA. A higher R-value target raises the applied thickness and the material cost." },
  // spray-foam-roofing-decision
  { id: 'spray-foam-roofing-decision', path: 'da',
    old: "**Spray foam roofing's advantages are a seamless monolithic surface with no seams to fail and built-in R-6.0-to-6.5-per-inch insulation that recovers over an existing roof; its drawback is a UV-sensitive foam that requires a maintained coating recoated every 10 to 20 years** (SPFA / ICC-ES).",
    val: "**Spray foam roofing's advantages are a seamless surface with no seams to fail and built-in R-6.0-to-6.5-per-inch insulation that recovers over an existing roof; its drawback is a UV-sensitive foam requiring a coating recoated every 10 to 20 years** (SPFA / ICC-ES)." },
  { id: 'spray-foam-roofing-decision', path: 's2b0',
    old: "**Spray foam fits** an under-insulated low-slope roof broken by many penetrations or plagued by recurring seam failures, where a recover over a sound roof beats a tear-off; a roof prioritizing a no-maintenance surface favors a single-ply membrane or metal instead, per the SPFA and InterNACHI.",
    val: "**Spray foam fits** an under-insulated low-slope roof broken by many penetrations or plagued by recurring seam failures, where a recover over a sound roof beats a tear-off. A roof prioritizing a no-maintenance surface favors a single-ply membrane or metal instead, per the SPFA and InterNACHI." },
];

let applied = 0, failed = 0;
for (const p of P) {
  const a = byId.get(p.id);
  if (!a) { console.error(`NO ARTICLE ${p.id}`); failed++; continue; }
  if (p.path === 'da') {
    if (a.directAnswer !== p.old) { console.error(`OLD MISMATCH ${p.id} da`); failed++; continue; }
    a.directAnswer = p.val; applied++;
  } else {
    const m = p.path.match(/^s(\d)b0$/);
    const i = +m[1];
    if (a.sections[i].body[0] !== p.old) { console.error(`OLD MISMATCH ${p.id} ${p.path}`); failed++; continue; }
    a.sections[i].body[0] = p.val; applied++;
  }
}
console.log(`applied ${applied}, failed ${failed} of ${P.length}`);
if (failed) process.exit(1);
writeFileSync(F, JSON.stringify(data, null, 2));
console.log('wrote _authored.json');
