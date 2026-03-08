import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { southOrangeRoofRepair } from './roof-repair';
import { southOrangeRoofReplacement } from './roof-replacement';
import { southOrangeEmergencyRoofRepair } from './emergency-roof-repair';
import { southOrangeRoofInspection } from './roof-inspection';
import { southOrangeRoofMaintenancePrograms } from './roof-maintenance-programs';
import { southOrangeRoofLeakRepair } from './roof-leak-repair';
import { southOrangeStormDamageRoofRepair } from './storm-damage-roof-repair';
import { southOrangeHailDamageRoofRepair } from './hail-damage-roof-repair';
import { southOrangeWindDamageRoofRepair } from './wind-damage-roof-repair';
import { southOrangeRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { southOrangeResidentialRoofInstallation } from './residential-roof-installation';
import { southOrangeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { southOrangeSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { southOrangeWoodShakeRoofing } from './wood-shake-roofing';
import { southOrangeMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { southOrangeFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { southOrangeTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { southOrangeCedarShakeRoofing } from './cedar-shake-roofing';
import { southOrangeRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { southOrangeTpoRoofingInstallation } from './tpo-roofing-installation';
import { southOrangeEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { southOrangeModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { southOrangeBuiltUpRoofing } from './built-up-roofing';
import { southOrangeCommercialMetalRoofing } from './commercial-metal-roofing';
import { southOrangePvcRoofing } from './pvc-roofing';
import { southOrangeGreenRoofInstallation } from './green-roof-installation';
import { southOrangeSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { southOrangeRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { southOrangeChimneyFlashingRepair } from './chimney-flashing-repair';
import { southOrangeGutterInstallationRepair } from './gutter-installation-repair';
import { southOrangeGutterGuardInstallation } from './gutter-guard-installation';
import { southOrangeSkylightInstallationRepair } from './skylight-installation-repair';
import { southOrangeFasciaInstallationRepair } from './fascia-installation-repair';
import { southOrangeSoffitInstallationRepair } from './soffit-installation-repair';
import { southOrangeRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { southOrangeRoofWaterproofing } from './roof-waterproofing';
import { southOrangeRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { southOrangeSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { southOrangeSolarShingleInstallation } from './solar-shingle-installation';
import { southOrangeEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { southOrangeSiliconeRoofCoating } from './silicone-roof-coating';
import { southOrangeSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { southOrangeCommercialRoofInstallation } from './commercial-roof-installation';
import { southOrangeCommercialRoofRepair } from './commercial-roof-repair';
import { southOrangeCommercialRoofReplacement } from './commercial-roof-replacement';
import { southOrangeRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { southOrangeInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { southOrangeCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { southOrangeHistoricRoofRestoration } from './historic-roof-restoration';
import { southOrangeRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { southOrangeFullRoofTearOff } from './full-roof-tear-off';
import { southOrangeRoofOverlayInstallation } from './roof-overlay-installation';
import { southOrangeReRoofing } from './re-roofing';
import { southOrangeInsuranceRoofReplacement } from './insurance-roof-replacement';
import { southOrangeStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { southOrangeAgingRoofReplacement } from './aging-roof-replacement';
import { southOrangeRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { southOrangeFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { southOrangeRoofReplacementCost } from './roof-replacement-cost';
import { southOrangeAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { southOrangeMetalRoofReplacement } from './metal-roof-replacement';
import { southOrangeSlateRoofReplacement } from './slate-roof-replacement';
import { southOrangeTileRoofReplacement } from './tile-roof-replacement';
import { southOrangeFlatRoofReplacement } from './flat-roof-replacement';
import { southOrangeCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 South Orange combo content objects at module load.
// Build crashes immediately on invalid data.

export const southOrangeComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  southOrangeRoofRepair,
  southOrangeRoofReplacement,
  southOrangeEmergencyRoofRepair,
  southOrangeRoofInspection,
  southOrangeRoofMaintenancePrograms,
  southOrangeRoofLeakRepair,
  southOrangeStormDamageRoofRepair,
  southOrangeHailDamageRoofRepair,
  southOrangeWindDamageRoofRepair,
  southOrangeRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  southOrangeResidentialRoofInstallation,
  southOrangeAsphaltShingleRoofing,
  southOrangeSlateRoofInstallationRepair,
  southOrangeWoodShakeRoofing,
  southOrangeMetalRoofInstallationRepair,
  southOrangeFlatRoofInstallationRepair,
  southOrangeTileRoofInstallationRepair,
  southOrangeCedarShakeRoofing,
  southOrangeRubberRoofingEpdm,

  // Commercial Roof Types (8)
  southOrangeTpoRoofingInstallation,
  southOrangeEpdmCommercialRoofing,
  southOrangeModifiedBitumenRoofing,
  southOrangeBuiltUpRoofing,
  southOrangeCommercialMetalRoofing,
  southOrangePvcRoofing,
  southOrangeGreenRoofInstallation,
  southOrangeSprayFoamRoofing,

  // Components-Specialty (10)
  southOrangeRoofFlashingInstallationRepair,
  southOrangeChimneyFlashingRepair,
  southOrangeGutterInstallationRepair,
  southOrangeGutterGuardInstallation,
  southOrangeSkylightInstallationRepair,
  southOrangeFasciaInstallationRepair,
  southOrangeSoffitInstallationRepair,
  southOrangeRoofVentInstallationRepair,
  southOrangeRoofWaterproofing,
  southOrangeRoofDeckRepairReplacement,

  // Energy/Solar (5)
  southOrangeSolarPanelRoofingInstallation,
  southOrangeSolarShingleInstallation,
  southOrangeEnergyEfficientRoofingSolutions,
  southOrangeSiliconeRoofCoating,
  southOrangeSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  southOrangeCommercialRoofInstallation,
  southOrangeCommercialRoofRepair,
  southOrangeCommercialRoofReplacement,
  southOrangeRoofThermalImagingInspections,
  southOrangeInfraredRoofLeakDetection,

  // Design/Consultation (3)
  southOrangeCustomRoofDesignConsultation,
  southOrangeHistoricRoofRestoration,
  southOrangeRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  southOrangeFullRoofTearOff,
  southOrangeRoofOverlayInstallation,
  southOrangeReRoofing,
  southOrangeInsuranceRoofReplacement,
  southOrangeStormDamageRoofReplacement,
  southOrangeAgingRoofReplacement,
  southOrangeRoofReplacementAfterLeak,
  southOrangeFireDamageRoofReplacement,
  southOrangeRoofReplacementCost,
  southOrangeAsphaltShingleRoofReplacement,
  southOrangeMetalRoofReplacement,
  southOrangeSlateRoofReplacement,
  southOrangeTileRoofReplacement,
  southOrangeFlatRoofReplacement,
  southOrangeCedarShakeRoofReplacement,
]);
