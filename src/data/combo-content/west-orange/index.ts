import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { westOrangeRoofRepair } from './roof-repair';
import { westOrangeRoofReplacement } from './roof-replacement';
import { westOrangeEmergencyRoofRepair } from './emergency-roof-repair';
import { westOrangeRoofInspection } from './roof-inspection';
import { westOrangeRoofMaintenancePrograms } from './roof-maintenance-programs';
import { westOrangeRoofLeakRepair } from './roof-leak-repair';
import { westOrangeStormDamageRoofRepair } from './storm-damage-roof-repair';
import { westOrangeHailDamageRoofRepair } from './hail-damage-roof-repair';
import { westOrangeWindDamageRoofRepair } from './wind-damage-roof-repair';
import { westOrangeRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { westOrangeResidentialRoofInstallation } from './residential-roof-installation';
import { westOrangeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { westOrangeSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { westOrangeWoodShakeRoofing } from './wood-shake-roofing';
import { westOrangeMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { westOrangeFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { westOrangeTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { westOrangeCedarShakeRoofing } from './cedar-shake-roofing';
import { westOrangeRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { westOrangeTpoRoofingInstallation } from './tpo-roofing-installation';
import { westOrangeEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { westOrangeModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { westOrangeBuiltUpRoofing } from './built-up-roofing';
import { westOrangeCommercialMetalRoofing } from './commercial-metal-roofing';
import { westOrangePvcRoofing } from './pvc-roofing';
import { westOrangeGreenRoofInstallation } from './green-roof-installation';
import { westOrangeSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { westOrangeRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { westOrangeChimneyFlashingRepair } from './chimney-flashing-repair';
import { westOrangeGutterInstallationRepair } from './gutter-installation-repair';
import { westOrangeGutterGuardInstallation } from './gutter-guard-installation';
import { westOrangeSkylightInstallationRepair } from './skylight-installation-repair';
import { westOrangeFasciaInstallationRepair } from './fascia-installation-repair';
import { westOrangeSoffitInstallationRepair } from './soffit-installation-repair';
import { westOrangeRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { westOrangeRoofWaterproofing } from './roof-waterproofing';
import { westOrangeRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { westOrangeSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { westOrangeSolarShingleInstallation } from './solar-shingle-installation';
import { westOrangeEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { westOrangeSiliconeRoofCoating } from './silicone-roof-coating';
import { westOrangeSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { westOrangeCommercialRoofInstallation } from './commercial-roof-installation';
import { westOrangeCommercialRoofRepair } from './commercial-roof-repair';
import { westOrangeCommercialRoofReplacement } from './commercial-roof-replacement';
import { westOrangeRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { westOrangeInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { westOrangeCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { westOrangeHistoricRoofRestoration } from './historic-roof-restoration';
import { westOrangeRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { westOrangeFullRoofTearOff } from './full-roof-tear-off';
import { westOrangeRoofOverlayInstallation } from './roof-overlay-installation';
import { westOrangeReRoofing } from './re-roofing';
import { westOrangeInsuranceRoofReplacement } from './insurance-roof-replacement';
import { westOrangeStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { westOrangeAgingRoofReplacement } from './aging-roof-replacement';
import { westOrangeRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { westOrangeFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { westOrangeRoofReplacementCost } from './roof-replacement-cost';
import { westOrangeAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { westOrangeMetalRoofReplacement } from './metal-roof-replacement';
import { westOrangeSlateRoofReplacement } from './slate-roof-replacement';
import { westOrangeTileRoofReplacement } from './tile-roof-replacement';
import { westOrangeFlatRoofReplacement } from './flat-roof-replacement';
import { westOrangeCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 West Orange combo content objects at module load.
// Build crashes immediately on invalid data.

export const westOrangeComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  westOrangeRoofRepair,
  westOrangeRoofReplacement,
  westOrangeEmergencyRoofRepair,
  westOrangeRoofInspection,
  westOrangeRoofMaintenancePrograms,
  westOrangeRoofLeakRepair,
  westOrangeStormDamageRoofRepair,
  westOrangeHailDamageRoofRepair,
  westOrangeWindDamageRoofRepair,
  westOrangeRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  westOrangeResidentialRoofInstallation,
  westOrangeAsphaltShingleRoofing,
  westOrangeSlateRoofInstallationRepair,
  westOrangeWoodShakeRoofing,
  westOrangeMetalRoofInstallationRepair,
  westOrangeFlatRoofInstallationRepair,
  westOrangeTileRoofInstallationRepair,
  westOrangeCedarShakeRoofing,
  westOrangeRubberRoofingEpdm,

  // Commercial Roof Types (8)
  westOrangeTpoRoofingInstallation,
  westOrangeEpdmCommercialRoofing,
  westOrangeModifiedBitumenRoofing,
  westOrangeBuiltUpRoofing,
  westOrangeCommercialMetalRoofing,
  westOrangePvcRoofing,
  westOrangeGreenRoofInstallation,
  westOrangeSprayFoamRoofing,

  // Components-Specialty (10)
  westOrangeRoofFlashingInstallationRepair,
  westOrangeChimneyFlashingRepair,
  westOrangeGutterInstallationRepair,
  westOrangeGutterGuardInstallation,
  westOrangeSkylightInstallationRepair,
  westOrangeFasciaInstallationRepair,
  westOrangeSoffitInstallationRepair,
  westOrangeRoofVentInstallationRepair,
  westOrangeRoofWaterproofing,
  westOrangeRoofDeckRepairReplacement,

  // Energy/Solar (5)
  westOrangeSolarPanelRoofingInstallation,
  westOrangeSolarShingleInstallation,
  westOrangeEnergyEfficientRoofingSolutions,
  westOrangeSiliconeRoofCoating,
  westOrangeSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  westOrangeCommercialRoofInstallation,
  westOrangeCommercialRoofRepair,
  westOrangeCommercialRoofReplacement,
  westOrangeRoofThermalImagingInspections,
  westOrangeInfraredRoofLeakDetection,

  // Design/Consultation (3)
  westOrangeCustomRoofDesignConsultation,
  westOrangeHistoricRoofRestoration,
  westOrangeRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  westOrangeFullRoofTearOff,
  westOrangeRoofOverlayInstallation,
  westOrangeReRoofing,
  westOrangeInsuranceRoofReplacement,
  westOrangeStormDamageRoofReplacement,
  westOrangeAgingRoofReplacement,
  westOrangeRoofReplacementAfterLeak,
  westOrangeFireDamageRoofReplacement,
  westOrangeRoofReplacementCost,
  westOrangeAsphaltShingleRoofReplacement,
  westOrangeMetalRoofReplacement,
  westOrangeSlateRoofReplacement,
  westOrangeTileRoofReplacement,
  westOrangeFlatRoofReplacement,
  westOrangeCedarShakeRoofReplacement,
]);
