import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { glenRidgeRoofRepair } from './roof-repair';
import { glenRidgeRoofReplacement } from './roof-replacement';
import { glenRidgeEmergencyRoofRepair } from './emergency-roof-repair';
import { glenRidgeRoofInspection } from './roof-inspection';
import { glenRidgeRoofMaintenancePrograms } from './roof-maintenance-programs';
import { glenRidgeRoofLeakRepair } from './roof-leak-repair';
import { glenRidgeStormDamageRoofRepair } from './storm-damage-roof-repair';
import { glenRidgeHailDamageRoofRepair } from './hail-damage-roof-repair';
import { glenRidgeWindDamageRoofRepair } from './wind-damage-roof-repair';
import { glenRidgeRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { glenRidgeResidentialRoofInstallation } from './residential-roof-installation';
import { glenRidgeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { glenRidgeSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { glenRidgeWoodShakeRoofing } from './wood-shake-roofing';
import { glenRidgeMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { glenRidgeFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { glenRidgeTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { glenRidgeCedarShakeRoofing } from './cedar-shake-roofing';
import { glenRidgeRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { glenRidgeTpoRoofingInstallation } from './tpo-roofing-installation';
import { glenRidgeEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { glenRidgeModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { glenRidgeBuiltUpRoofing } from './built-up-roofing';
import { glenRidgeCommercialMetalRoofing } from './commercial-metal-roofing';
import { glenRidgePvcRoofing } from './pvc-roofing';
import { glenRidgeGreenRoofInstallation } from './green-roof-installation';
import { glenRidgeSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { glenRidgeRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { glenRidgeChimneyFlashingRepair } from './chimney-flashing-repair';
import { glenRidgeGutterInstallationRepair } from './gutter-installation-repair';
import { glenRidgeGutterGuardInstallation } from './gutter-guard-installation';
import { glenRidgeSkylightInstallationRepair } from './skylight-installation-repair';
import { glenRidgeFasciaInstallationRepair } from './fascia-installation-repair';
import { glenRidgeSoffitInstallationRepair } from './soffit-installation-repair';
import { glenRidgeRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { glenRidgeRoofWaterproofing } from './roof-waterproofing';
import { glenRidgeRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { glenRidgeSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { glenRidgeSolarShingleInstallation } from './solar-shingle-installation';
import { glenRidgeEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { glenRidgeSiliconeRoofCoating } from './silicone-roof-coating';
import { glenRidgeSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { glenRidgeCommercialRoofInstallation } from './commercial-roof-installation';
import { glenRidgeCommercialRoofRepair } from './commercial-roof-repair';
import { glenRidgeCommercialRoofReplacement } from './commercial-roof-replacement';
import { glenRidgeRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { glenRidgeInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { glenRidgeCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { glenRidgeHistoricRoofRestoration } from './historic-roof-restoration';
import { glenRidgeRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { glenRidgeFullRoofTearOff } from './full-roof-tear-off';
import { glenRidgeRoofOverlayInstallation } from './roof-overlay-installation';
import { glenRidgeReRoofing } from './re-roofing';
import { glenRidgeInsuranceRoofReplacement } from './insurance-roof-replacement';
import { glenRidgeStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { glenRidgeAgingRoofReplacement } from './aging-roof-replacement';
import { glenRidgeRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { glenRidgeFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { glenRidgeRoofReplacementCost } from './roof-replacement-cost';
import { glenRidgeAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { glenRidgeMetalRoofReplacement } from './metal-roof-replacement';
import { glenRidgeSlateRoofReplacement } from './slate-roof-replacement';
import { glenRidgeTileRoofReplacement } from './tile-roof-replacement';
import { glenRidgeFlatRoofReplacement } from './flat-roof-replacement';
import { glenRidgeCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Glen Ridge combo content objects at module load.
// Build crashes immediately on invalid data.

export const glenRidgeComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  glenRidgeRoofRepair,
  glenRidgeRoofReplacement,
  glenRidgeEmergencyRoofRepair,
  glenRidgeRoofInspection,
  glenRidgeRoofMaintenancePrograms,
  glenRidgeRoofLeakRepair,
  glenRidgeStormDamageRoofRepair,
  glenRidgeHailDamageRoofRepair,
  glenRidgeWindDamageRoofRepair,
  glenRidgeRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  glenRidgeResidentialRoofInstallation,
  glenRidgeAsphaltShingleRoofing,
  glenRidgeSlateRoofInstallationRepair,
  glenRidgeWoodShakeRoofing,
  glenRidgeMetalRoofInstallationRepair,
  glenRidgeFlatRoofInstallationRepair,
  glenRidgeTileRoofInstallationRepair,
  glenRidgeCedarShakeRoofing,
  glenRidgeRubberRoofingEpdm,

  // Commercial Roof Types (8)
  glenRidgeTpoRoofingInstallation,
  glenRidgeEpdmCommercialRoofing,
  glenRidgeModifiedBitumenRoofing,
  glenRidgeBuiltUpRoofing,
  glenRidgeCommercialMetalRoofing,
  glenRidgePvcRoofing,
  glenRidgeGreenRoofInstallation,
  glenRidgeSprayFoamRoofing,

  // Components-Specialty (10)
  glenRidgeRoofFlashingInstallationRepair,
  glenRidgeChimneyFlashingRepair,
  glenRidgeGutterInstallationRepair,
  glenRidgeGutterGuardInstallation,
  glenRidgeSkylightInstallationRepair,
  glenRidgeFasciaInstallationRepair,
  glenRidgeSoffitInstallationRepair,
  glenRidgeRoofVentInstallationRepair,
  glenRidgeRoofWaterproofing,
  glenRidgeRoofDeckRepairReplacement,

  // Energy/Solar (5)
  glenRidgeSolarPanelRoofingInstallation,
  glenRidgeSolarShingleInstallation,
  glenRidgeEnergyEfficientRoofingSolutions,
  glenRidgeSiliconeRoofCoating,
  glenRidgeSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  glenRidgeCommercialRoofInstallation,
  glenRidgeCommercialRoofRepair,
  glenRidgeCommercialRoofReplacement,
  glenRidgeRoofThermalImagingInspections,
  glenRidgeInfraredRoofLeakDetection,

  // Design/Consultation (3)
  glenRidgeCustomRoofDesignConsultation,
  glenRidgeHistoricRoofRestoration,
  glenRidgeRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  glenRidgeFullRoofTearOff,
  glenRidgeRoofOverlayInstallation,
  glenRidgeReRoofing,
  glenRidgeInsuranceRoofReplacement,
  glenRidgeStormDamageRoofReplacement,
  glenRidgeAgingRoofReplacement,
  glenRidgeRoofReplacementAfterLeak,
  glenRidgeFireDamageRoofReplacement,
  glenRidgeRoofReplacementCost,
  glenRidgeAsphaltShingleRoofReplacement,
  glenRidgeMetalRoofReplacement,
  glenRidgeSlateRoofReplacement,
  glenRidgeTileRoofReplacement,
  glenRidgeFlatRoofReplacement,
  glenRidgeCedarShakeRoofReplacement,
]);
