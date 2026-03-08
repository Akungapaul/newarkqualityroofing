import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { livingstonRoofRepair } from './roof-repair';
import { livingstonRoofReplacement } from './roof-replacement';
import { livingstonEmergencyRoofRepair } from './emergency-roof-repair';
import { livingstonRoofInspection } from './roof-inspection';
import { livingstonRoofMaintenancePrograms } from './roof-maintenance-programs';
import { livingstonRoofLeakRepair } from './roof-leak-repair';
import { livingstonStormDamageRoofRepair } from './storm-damage-roof-repair';
import { livingstonHailDamageRoofRepair } from './hail-damage-roof-repair';
import { livingstonWindDamageRoofRepair } from './wind-damage-roof-repair';
import { livingstonRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { livingstonResidentialRoofInstallation } from './residential-roof-installation';
import { livingstonAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { livingstonSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { livingstonWoodShakeRoofing } from './wood-shake-roofing';
import { livingstonMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { livingstonFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { livingstonTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { livingstonCedarShakeRoofing } from './cedar-shake-roofing';
import { livingstonRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { livingstonTpoRoofingInstallation } from './tpo-roofing-installation';
import { livingstonEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { livingstonModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { livingstonBuiltUpRoofing } from './built-up-roofing';
import { livingstonCommercialMetalRoofing } from './commercial-metal-roofing';
import { livingstonPvcRoofing } from './pvc-roofing';
import { livingstonGreenRoofInstallation } from './green-roof-installation';
import { livingstonSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { livingstonRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { livingstonChimneyFlashingRepair } from './chimney-flashing-repair';
import { livingstonGutterInstallationRepair } from './gutter-installation-repair';
import { livingstonGutterGuardInstallation } from './gutter-guard-installation';
import { livingstonSkylightInstallationRepair } from './skylight-installation-repair';
import { livingstonFasciaInstallationRepair } from './fascia-installation-repair';
import { livingstonSoffitInstallationRepair } from './soffit-installation-repair';
import { livingstonRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { livingstonRoofWaterproofing } from './roof-waterproofing';
import { livingstonRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { livingstonSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { livingstonSolarShingleInstallation } from './solar-shingle-installation';
import { livingstonEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { livingstonSiliconeRoofCoating } from './silicone-roof-coating';
import { livingstonSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { livingstonCommercialRoofInstallation } from './commercial-roof-installation';
import { livingstonCommercialRoofRepair } from './commercial-roof-repair';
import { livingstonCommercialRoofReplacement } from './commercial-roof-replacement';
import { livingstonRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { livingstonInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { livingstonCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { livingstonHistoricRoofRestoration } from './historic-roof-restoration';
import { livingstonRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { livingstonFullRoofTearOff } from './full-roof-tear-off';
import { livingstonRoofOverlayInstallation } from './roof-overlay-installation';
import { livingstonReRoofing } from './re-roofing';
import { livingstonInsuranceRoofReplacement } from './insurance-roof-replacement';
import { livingstonStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { livingstonAgingRoofReplacement } from './aging-roof-replacement';
import { livingstonRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { livingstonFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { livingstonRoofReplacementCost } from './roof-replacement-cost';
import { livingstonAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { livingstonMetalRoofReplacement } from './metal-roof-replacement';
import { livingstonSlateRoofReplacement } from './slate-roof-replacement';
import { livingstonTileRoofReplacement } from './tile-roof-replacement';
import { livingstonFlatRoofReplacement } from './flat-roof-replacement';
import { livingstonCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Livingston combo content objects at module load.
// Build crashes immediately on invalid data.

export const livingstonComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  livingstonRoofRepair,
  livingstonRoofReplacement,
  livingstonEmergencyRoofRepair,
  livingstonRoofInspection,
  livingstonRoofMaintenancePrograms,
  livingstonRoofLeakRepair,
  livingstonStormDamageRoofRepair,
  livingstonHailDamageRoofRepair,
  livingstonWindDamageRoofRepair,
  livingstonRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  livingstonResidentialRoofInstallation,
  livingstonAsphaltShingleRoofing,
  livingstonSlateRoofInstallationRepair,
  livingstonWoodShakeRoofing,
  livingstonMetalRoofInstallationRepair,
  livingstonFlatRoofInstallationRepair,
  livingstonTileRoofInstallationRepair,
  livingstonCedarShakeRoofing,
  livingstonRubberRoofingEpdm,

  // Commercial Roof Types (8)
  livingstonTpoRoofingInstallation,
  livingstonEpdmCommercialRoofing,
  livingstonModifiedBitumenRoofing,
  livingstonBuiltUpRoofing,
  livingstonCommercialMetalRoofing,
  livingstonPvcRoofing,
  livingstonGreenRoofInstallation,
  livingstonSprayFoamRoofing,

  // Components-Specialty (10)
  livingstonRoofFlashingInstallationRepair,
  livingstonChimneyFlashingRepair,
  livingstonGutterInstallationRepair,
  livingstonGutterGuardInstallation,
  livingstonSkylightInstallationRepair,
  livingstonFasciaInstallationRepair,
  livingstonSoffitInstallationRepair,
  livingstonRoofVentInstallationRepair,
  livingstonRoofWaterproofing,
  livingstonRoofDeckRepairReplacement,

  // Energy/Solar (5)
  livingstonSolarPanelRoofingInstallation,
  livingstonSolarShingleInstallation,
  livingstonEnergyEfficientRoofingSolutions,
  livingstonSiliconeRoofCoating,
  livingstonSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  livingstonCommercialRoofInstallation,
  livingstonCommercialRoofRepair,
  livingstonCommercialRoofReplacement,
  livingstonRoofThermalImagingInspections,
  livingstonInfraredRoofLeakDetection,

  // Design/Consultation (3)
  livingstonCustomRoofDesignConsultation,
  livingstonHistoricRoofRestoration,
  livingstonRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  livingstonFullRoofTearOff,
  livingstonRoofOverlayInstallation,
  livingstonReRoofing,
  livingstonInsuranceRoofReplacement,
  livingstonStormDamageRoofReplacement,
  livingstonAgingRoofReplacement,
  livingstonRoofReplacementAfterLeak,
  livingstonFireDamageRoofReplacement,
  livingstonRoofReplacementCost,
  livingstonAsphaltShingleRoofReplacement,
  livingstonMetalRoofReplacement,
  livingstonSlateRoofReplacement,
  livingstonTileRoofReplacement,
  livingstonFlatRoofReplacement,
  livingstonCedarShakeRoofReplacement,
]);
