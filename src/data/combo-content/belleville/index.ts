import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { bellevilleRoofRepair } from './roof-repair';
import { bellevilleRoofReplacement } from './roof-replacement';
import { bellevilleEmergencyRoofRepair } from './emergency-roof-repair';
import { bellevilleRoofInspection } from './roof-inspection';
import { bellevilleRoofMaintenancePrograms } from './roof-maintenance-programs';
import { bellevilleRoofLeakRepair } from './roof-leak-repair';
import { bellevilleStormDamageRoofRepair } from './storm-damage-roof-repair';
import { bellevilleHailDamageRoofRepair } from './hail-damage-roof-repair';
import { bellevilleWindDamageRoofRepair } from './wind-damage-roof-repair';
import { bellevilleRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { bellevilleResidentialRoofInstallation } from './residential-roof-installation';
import { bellevilleAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { bellevilleSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { bellevilleWoodShakeRoofing } from './wood-shake-roofing';
import { bellevilleMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { bellevilleFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { bellevilleTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { bellevilleCedarShakeRoofing } from './cedar-shake-roofing';
import { bellevilleRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { bellevilleTpoRoofingInstallation } from './tpo-roofing-installation';
import { bellevilleEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { bellevilleModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { bellevilleBuiltUpRoofing } from './built-up-roofing';
import { bellevilleCommercialMetalRoofing } from './commercial-metal-roofing';
import { bellevillePvcRoofing } from './pvc-roofing';
import { bellevilleGreenRoofInstallation } from './green-roof-installation';
import { bellevilleSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { bellevilleRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { bellevilleChimneyFlashingRepair } from './chimney-flashing-repair';
import { bellevilleGutterInstallationRepair } from './gutter-installation-repair';
import { bellevilleGutterGuardInstallation } from './gutter-guard-installation';
import { bellevilleSkylightInstallationRepair } from './skylight-installation-repair';
import { bellevilleFasciaInstallationRepair } from './fascia-installation-repair';
import { bellevilleSoffitInstallationRepair } from './soffit-installation-repair';
import { bellevilleRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { bellevilleRoofWaterproofing } from './roof-waterproofing';
import { bellevilleRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { bellevilleSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { bellevilleSolarShingleInstallation } from './solar-shingle-installation';
import { bellevilleEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { bellevilleSiliconeRoofCoating } from './silicone-roof-coating';
import { bellevilleSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { bellevilleCommercialRoofInstallation } from './commercial-roof-installation';
import { bellevilleCommercialRoofRepair } from './commercial-roof-repair';
import { bellevilleCommercialRoofReplacement } from './commercial-roof-replacement';
import { bellevilleRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { bellevilleInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { bellevilleCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { bellevilleHistoricRoofRestoration } from './historic-roof-restoration';
import { bellevilleRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { bellevilleFullRoofTearOff } from './full-roof-tear-off';
import { bellevilleRoofOverlayInstallation } from './roof-overlay-installation';
import { bellevilleReRoofing } from './re-roofing';
import { bellevilleInsuranceRoofReplacement } from './insurance-roof-replacement';
import { bellevilleStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { bellevilleAgingRoofReplacement } from './aging-roof-replacement';
import { bellevilleRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { bellevilleFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { bellevilleRoofReplacementCost } from './roof-replacement-cost';
import { bellevilleAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { bellevilleMetalRoofReplacement } from './metal-roof-replacement';
import { bellevilleSlateRoofReplacement } from './slate-roof-replacement';
import { bellevilleTileRoofReplacement } from './tile-roof-replacement';
import { bellevilleFlatRoofReplacement } from './flat-roof-replacement';
import { bellevilleCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Belleville combo content objects at module load.
// Build crashes immediately on invalid data.

export const bellevilleComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  bellevilleRoofRepair,
  bellevilleRoofReplacement,
  bellevilleEmergencyRoofRepair,
  bellevilleRoofInspection,
  bellevilleRoofMaintenancePrograms,
  bellevilleRoofLeakRepair,
  bellevilleStormDamageRoofRepair,
  bellevilleHailDamageRoofRepair,
  bellevilleWindDamageRoofRepair,
  bellevilleRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  bellevilleResidentialRoofInstallation,
  bellevilleAsphaltShingleRoofing,
  bellevilleSlateRoofInstallationRepair,
  bellevilleWoodShakeRoofing,
  bellevilleMetalRoofInstallationRepair,
  bellevilleFlatRoofInstallationRepair,
  bellevilleTileRoofInstallationRepair,
  bellevilleCedarShakeRoofing,
  bellevilleRubberRoofingEpdm,

  // Commercial Roof Types (8)
  bellevilleTpoRoofingInstallation,
  bellevilleEpdmCommercialRoofing,
  bellevilleModifiedBitumenRoofing,
  bellevilleBuiltUpRoofing,
  bellevilleCommercialMetalRoofing,
  bellevillePvcRoofing,
  bellevilleGreenRoofInstallation,
  bellevilleSprayFoamRoofing,

  // Components-Specialty (10)
  bellevilleRoofFlashingInstallationRepair,
  bellevilleChimneyFlashingRepair,
  bellevilleGutterInstallationRepair,
  bellevilleGutterGuardInstallation,
  bellevilleSkylightInstallationRepair,
  bellevilleFasciaInstallationRepair,
  bellevilleSoffitInstallationRepair,
  bellevilleRoofVentInstallationRepair,
  bellevilleRoofWaterproofing,
  bellevilleRoofDeckRepairReplacement,

  // Energy/Solar (5)
  bellevilleSolarPanelRoofingInstallation,
  bellevilleSolarShingleInstallation,
  bellevilleEnergyEfficientRoofingSolutions,
  bellevilleSiliconeRoofCoating,
  bellevilleSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  bellevilleCommercialRoofInstallation,
  bellevilleCommercialRoofRepair,
  bellevilleCommercialRoofReplacement,
  bellevilleRoofThermalImagingInspections,
  bellevilleInfraredRoofLeakDetection,

  // Design/Consultation (3)
  bellevilleCustomRoofDesignConsultation,
  bellevilleHistoricRoofRestoration,
  bellevilleRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  bellevilleFullRoofTearOff,
  bellevilleRoofOverlayInstallation,
  bellevilleReRoofing,
  bellevilleInsuranceRoofReplacement,
  bellevilleStormDamageRoofReplacement,
  bellevilleAgingRoofReplacement,
  bellevilleRoofReplacementAfterLeak,
  bellevilleFireDamageRoofReplacement,
  bellevilleRoofReplacementCost,
  bellevilleAsphaltShingleRoofReplacement,
  bellevilleMetalRoofReplacement,
  bellevilleSlateRoofReplacement,
  bellevilleTileRoofReplacement,
  bellevilleFlatRoofReplacement,
  bellevilleCedarShakeRoofReplacement,
]);
