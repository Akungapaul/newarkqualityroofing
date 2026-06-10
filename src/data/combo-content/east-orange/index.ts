import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ─────────────────────────────────────────────────────
import { eastOrangeRoofRepair } from './roof-repair';
import { eastOrangeRoofReplacement } from './roof-replacement';
import { eastOrangeEmergencyRoofRepair } from './emergency-roof-repair';
import { eastOrangeRoofInspection } from './roof-inspection';
import { eastOrangeRoofMaintenancePrograms } from './roof-maintenance-programs';
import { eastOrangeRoofLeakRepair } from './roof-leak-repair';
import { eastOrangeStormDamageRoofRepair } from './storm-damage-roof-repair';
import { eastOrangeHailDamageRoofRepair } from './hail-damage-roof-repair';
import { eastOrangeWindDamageRoofRepair } from './wind-damage-roof-repair';
import { eastOrangeRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ──────────────────────────────────────────────────
import { eastOrangeResidentialRoofInstallation } from './residential-roof-installation';
import { eastOrangeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { eastOrangeSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { eastOrangeWoodShakeRoofing } from './wood-shake-roofing';
import { eastOrangeMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { eastOrangeFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { eastOrangeTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { eastOrangeCedarShakeRoofing } from './cedar-shake-roofing';
import { eastOrangeRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ───────────────────────────────────────────────────
import { eastOrangeTpoRoofingInstallation } from './tpo-roofing-installation';
import { eastOrangeEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { eastOrangeModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { eastOrangeBuiltUpRoofing } from './built-up-roofing';
import { eastOrangeCommercialMetalRoofing } from './commercial-metal-roofing';
import { eastOrangePvcRoofing } from './pvc-roofing';
import { eastOrangeGreenRoofInstallation } from './green-roof-installation';
import { eastOrangeSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ───────────────────────────────────────────────────
import { eastOrangeRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { eastOrangeChimneyFlashingRepair } from './chimney-flashing-repair';
import { eastOrangeGutterInstallationRepair } from './gutter-installation-repair';
import { eastOrangeGutterGuardInstallation } from './gutter-guard-installation';
import { eastOrangeSkylightInstallationRepair } from './skylight-installation-repair';
import { eastOrangeFasciaInstallationRepair } from './fascia-installation-repair';
import { eastOrangeSoffitInstallationRepair } from './soffit-installation-repair';
import { eastOrangeRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { eastOrangeRoofWaterproofing } from './roof-waterproofing';
import { eastOrangeRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ────────────────────────────────────────────────────────────
import { eastOrangeSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { eastOrangeSolarShingleInstallation } from './solar-shingle-installation';
import { eastOrangeEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { eastOrangeSiliconeRoofCoating } from './silicone-roof-coating';
import { eastOrangeSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ─────────────────────────────────────────────────────
import { eastOrangeCommercialRoofInstallation } from './commercial-roof-installation';
import { eastOrangeCommercialRoofRepair } from './commercial-roof-repair';
import { eastOrangeCommercialRoofReplacement } from './commercial-roof-replacement';
import { eastOrangeRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { eastOrangeInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ─────────────────────────────────────────────────────
import { eastOrangeCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { eastOrangeHistoricRoofRestoration } from './historic-roof-restoration';
import { eastOrangeRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ──────────────────────────────────────────────────
import { eastOrangeFullRoofTearOff } from './full-roof-tear-off';
import { eastOrangeRoofOverlayInstallation } from './roof-overlay-installation';
import { eastOrangeReRoofing } from './re-roofing';
import { eastOrangeInsuranceRoofReplacement } from './insurance-roof-replacement';
import { eastOrangeStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { eastOrangeAgingRoofReplacement } from './aging-roof-replacement';
import { eastOrangeRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { eastOrangeFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { eastOrangeRoofReplacementCost } from './roof-replacement-cost';
import { eastOrangeAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { eastOrangeMetalRoofReplacement } from './metal-roof-replacement';
import { eastOrangeSlateRoofReplacement } from './slate-roof-replacement';
import { eastOrangeTileRoofReplacement } from './tile-roof-replacement';
import { eastOrangeFlatRoofReplacement } from './flat-roof-replacement';
import { eastOrangeCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ────────────────────────────────────────────────────
// Zod validates all 65 East Orange combo content objects at module load.
// Build crashes immediately on invalid data.

export const eastOrangeComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  eastOrangeRoofRepair,
  eastOrangeRoofReplacement,
  eastOrangeEmergencyRoofRepair,
  eastOrangeRoofInspection,
  eastOrangeRoofMaintenancePrograms,
  eastOrangeRoofLeakRepair,
  eastOrangeStormDamageRoofRepair,
  eastOrangeHailDamageRoofRepair,
  eastOrangeWindDamageRoofRepair,
  eastOrangeRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  eastOrangeResidentialRoofInstallation,
  eastOrangeAsphaltShingleRoofing,
  eastOrangeSlateRoofInstallationRepair,
  eastOrangeWoodShakeRoofing,
  eastOrangeMetalRoofInstallationRepair,
  eastOrangeFlatRoofInstallationRepair,
  eastOrangeTileRoofInstallationRepair,
  eastOrangeCedarShakeRoofing,
  eastOrangeRubberRoofingEpdm,

  // Commercial Roof Types (8)
  eastOrangeTpoRoofingInstallation,
  eastOrangeEpdmCommercialRoofing,
  eastOrangeModifiedBitumenRoofing,
  eastOrangeBuiltUpRoofing,
  eastOrangeCommercialMetalRoofing,
  eastOrangePvcRoofing,
  eastOrangeGreenRoofInstallation,
  eastOrangeSprayFoamRoofing,

  // Components-Specialty (10)
  eastOrangeRoofFlashingInstallationRepair,
  eastOrangeChimneyFlashingRepair,
  eastOrangeGutterInstallationRepair,
  eastOrangeGutterGuardInstallation,
  eastOrangeSkylightInstallationRepair,
  eastOrangeFasciaInstallationRepair,
  eastOrangeSoffitInstallationRepair,
  eastOrangeRoofVentInstallationRepair,
  eastOrangeRoofWaterproofing,
  eastOrangeRoofDeckRepairReplacement,

  // Energy/Solar (5)
  eastOrangeSolarPanelRoofingInstallation,
  eastOrangeSolarShingleInstallation,
  eastOrangeEnergyEfficientRoofingSolutions,
  eastOrangeSiliconeRoofCoating,
  eastOrangeSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  eastOrangeCommercialRoofInstallation,
  eastOrangeCommercialRoofRepair,
  eastOrangeCommercialRoofReplacement,
  eastOrangeRoofThermalImagingInspections,
  eastOrangeInfraredRoofLeakDetection,

  // Design/Consultation (3)
  eastOrangeCustomRoofDesignConsultation,
  eastOrangeHistoricRoofRestoration,
  eastOrangeRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  eastOrangeFullRoofTearOff,
  eastOrangeRoofOverlayInstallation,
  eastOrangeReRoofing,
  eastOrangeInsuranceRoofReplacement,
  eastOrangeStormDamageRoofReplacement,
  eastOrangeAgingRoofReplacement,
  eastOrangeRoofReplacementAfterLeak,
  eastOrangeFireDamageRoofReplacement,
  eastOrangeRoofReplacementCost,
  eastOrangeAsphaltShingleRoofReplacement,
  eastOrangeMetalRoofReplacement,
  eastOrangeSlateRoofReplacement,
  eastOrangeTileRoofReplacement,
  eastOrangeFlatRoofReplacement,
  eastOrangeCedarShakeRoofReplacement,
]);
