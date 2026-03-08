import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { maplewoodRoofRepair } from './roof-repair';
import { maplewoodRoofReplacement } from './roof-replacement';
import { maplewoodEmergencyRoofRepair } from './emergency-roof-repair';
import { maplewoodRoofInspection } from './roof-inspection';
import { maplewoodRoofMaintenancePrograms } from './roof-maintenance-programs';
import { maplewoodRoofLeakRepair } from './roof-leak-repair';
import { maplewoodStormDamageRoofRepair } from './storm-damage-roof-repair';
import { maplewoodHailDamageRoofRepair } from './hail-damage-roof-repair';
import { maplewoodWindDamageRoofRepair } from './wind-damage-roof-repair';
import { maplewoodRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { maplewoodResidentialRoofInstallation } from './residential-roof-installation';
import { maplewoodAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { maplewoodSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { maplewoodWoodShakeRoofing } from './wood-shake-roofing';
import { maplewoodMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { maplewoodFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { maplewoodTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { maplewoodCedarShakeRoofing } from './cedar-shake-roofing';
import { maplewoodRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { maplewoodTpoRoofingInstallation } from './tpo-roofing-installation';
import { maplewoodEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { maplewoodModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { maplewoodBuiltUpRoofing } from './built-up-roofing';
import { maplewoodCommercialMetalRoofing } from './commercial-metal-roofing';
import { maplewoodPvcRoofing } from './pvc-roofing';
import { maplewoodGreenRoofInstallation } from './green-roof-installation';
import { maplewoodSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { maplewoodRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { maplewoodChimneyFlashingRepair } from './chimney-flashing-repair';
import { maplewoodGutterInstallationRepair } from './gutter-installation-repair';
import { maplewoodGutterGuardInstallation } from './gutter-guard-installation';
import { maplewoodSkylightInstallationRepair } from './skylight-installation-repair';
import { maplewoodFasciaInstallationRepair } from './fascia-installation-repair';
import { maplewoodSoffitInstallationRepair } from './soffit-installation-repair';
import { maplewoodRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { maplewoodRoofWaterproofing } from './roof-waterproofing';
import { maplewoodRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { maplewoodSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { maplewoodSolarShingleInstallation } from './solar-shingle-installation';
import { maplewoodEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { maplewoodSiliconeRoofCoating } from './silicone-roof-coating';
import { maplewoodSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { maplewoodCommercialRoofInstallation } from './commercial-roof-installation';
import { maplewoodCommercialRoofRepair } from './commercial-roof-repair';
import { maplewoodCommercialRoofReplacement } from './commercial-roof-replacement';
import { maplewoodRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { maplewoodInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { maplewoodCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { maplewoodHistoricRoofRestoration } from './historic-roof-restoration';
import { maplewoodRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { maplewoodFullRoofTearOff } from './full-roof-tear-off';
import { maplewoodRoofOverlayInstallation } from './roof-overlay-installation';
import { maplewoodReRoofing } from './re-roofing';
import { maplewoodInsuranceRoofReplacement } from './insurance-roof-replacement';
import { maplewoodStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { maplewoodAgingRoofReplacement } from './aging-roof-replacement';
import { maplewoodRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { maplewoodFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { maplewoodRoofReplacementCost } from './roof-replacement-cost';
import { maplewoodAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { maplewoodMetalRoofReplacement } from './metal-roof-replacement';
import { maplewoodSlateRoofReplacement } from './slate-roof-replacement';
import { maplewoodTileRoofReplacement } from './tile-roof-replacement';
import { maplewoodFlatRoofReplacement } from './flat-roof-replacement';
import { maplewoodCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Maplewood combo content objects at module load.
// Build crashes immediately on invalid data.

export const maplewoodComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  maplewoodRoofRepair,
  maplewoodRoofReplacement,
  maplewoodEmergencyRoofRepair,
  maplewoodRoofInspection,
  maplewoodRoofMaintenancePrograms,
  maplewoodRoofLeakRepair,
  maplewoodStormDamageRoofRepair,
  maplewoodHailDamageRoofRepair,
  maplewoodWindDamageRoofRepair,
  maplewoodRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  maplewoodResidentialRoofInstallation,
  maplewoodAsphaltShingleRoofing,
  maplewoodSlateRoofInstallationRepair,
  maplewoodWoodShakeRoofing,
  maplewoodMetalRoofInstallationRepair,
  maplewoodFlatRoofInstallationRepair,
  maplewoodTileRoofInstallationRepair,
  maplewoodCedarShakeRoofing,
  maplewoodRubberRoofingEpdm,

  // Commercial Roof Types (8)
  maplewoodTpoRoofingInstallation,
  maplewoodEpdmCommercialRoofing,
  maplewoodModifiedBitumenRoofing,
  maplewoodBuiltUpRoofing,
  maplewoodCommercialMetalRoofing,
  maplewoodPvcRoofing,
  maplewoodGreenRoofInstallation,
  maplewoodSprayFoamRoofing,

  // Components-Specialty (10)
  maplewoodRoofFlashingInstallationRepair,
  maplewoodChimneyFlashingRepair,
  maplewoodGutterInstallationRepair,
  maplewoodGutterGuardInstallation,
  maplewoodSkylightInstallationRepair,
  maplewoodFasciaInstallationRepair,
  maplewoodSoffitInstallationRepair,
  maplewoodRoofVentInstallationRepair,
  maplewoodRoofWaterproofing,
  maplewoodRoofDeckRepairReplacement,

  // Energy/Solar (5)
  maplewoodSolarPanelRoofingInstallation,
  maplewoodSolarShingleInstallation,
  maplewoodEnergyEfficientRoofingSolutions,
  maplewoodSiliconeRoofCoating,
  maplewoodSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  maplewoodCommercialRoofInstallation,
  maplewoodCommercialRoofRepair,
  maplewoodCommercialRoofReplacement,
  maplewoodRoofThermalImagingInspections,
  maplewoodInfraredRoofLeakDetection,

  // Design/Consultation (3)
  maplewoodCustomRoofDesignConsultation,
  maplewoodHistoricRoofRestoration,
  maplewoodRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  maplewoodFullRoofTearOff,
  maplewoodRoofOverlayInstallation,
  maplewoodReRoofing,
  maplewoodInsuranceRoofReplacement,
  maplewoodStormDamageRoofReplacement,
  maplewoodAgingRoofReplacement,
  maplewoodRoofReplacementAfterLeak,
  maplewoodFireDamageRoofReplacement,
  maplewoodRoofReplacementCost,
  maplewoodAsphaltShingleRoofReplacement,
  maplewoodMetalRoofReplacement,
  maplewoodSlateRoofReplacement,
  maplewoodTileRoofReplacement,
  maplewoodFlatRoofReplacement,
  maplewoodCedarShakeRoofReplacement,
]);
