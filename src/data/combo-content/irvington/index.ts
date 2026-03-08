import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { irvingtonRoofRepair } from './roof-repair';
import { irvingtonRoofReplacement } from './roof-replacement';
import { irvingtonEmergencyRoofRepair } from './emergency-roof-repair';
import { irvingtonRoofInspection } from './roof-inspection';
import { irvingtonRoofMaintenancePrograms } from './roof-maintenance-programs';
import { irvingtonRoofLeakRepair } from './roof-leak-repair';
import { irvingtonStormDamageRoofRepair } from './storm-damage-roof-repair';
import { irvingtonHailDamageRoofRepair } from './hail-damage-roof-repair';
import { irvingtonWindDamageRoofRepair } from './wind-damage-roof-repair';
import { irvingtonRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { irvingtonResidentialRoofInstallation } from './residential-roof-installation';
import { irvingtonAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { irvingtonSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { irvingtonWoodShakeRoofing } from './wood-shake-roofing';
import { irvingtonMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { irvingtonFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { irvingtonTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { irvingtonCedarShakeRoofing } from './cedar-shake-roofing';
import { irvingtonRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { irvingtonTpoRoofingInstallation } from './tpo-roofing-installation';
import { irvingtonEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { irvingtonModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { irvingtonBuiltUpRoofing } from './built-up-roofing';
import { irvingtonCommercialMetalRoofing } from './commercial-metal-roofing';
import { irvingtonPvcRoofing } from './pvc-roofing';
import { irvingtonGreenRoofInstallation } from './green-roof-installation';
import { irvingtonSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { irvingtonRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { irvingtonChimneyFlashingRepair } from './chimney-flashing-repair';
import { irvingtonGutterInstallationRepair } from './gutter-installation-repair';
import { irvingtonGutterGuardInstallation } from './gutter-guard-installation';
import { irvingtonSkylightInstallationRepair } from './skylight-installation-repair';
import { irvingtonFasciaInstallationRepair } from './fascia-installation-repair';
import { irvingtonSoffitInstallationRepair } from './soffit-installation-repair';
import { irvingtonRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { irvingtonRoofWaterproofing } from './roof-waterproofing';
import { irvingtonRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { irvingtonSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { irvingtonSolarShingleInstallation } from './solar-shingle-installation';
import { irvingtonEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { irvingtonSiliconeRoofCoating } from './silicone-roof-coating';
import { irvingtonSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { irvingtonCommercialRoofInstallation } from './commercial-roof-installation';
import { irvingtonCommercialRoofRepair } from './commercial-roof-repair';
import { irvingtonCommercialRoofReplacement } from './commercial-roof-replacement';
import { irvingtonRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { irvingtonInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { irvingtonCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { irvingtonHistoricRoofRestoration } from './historic-roof-restoration';
import { irvingtonRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { irvingtonFullRoofTearOff } from './full-roof-tear-off';
import { irvingtonRoofOverlayInstallation } from './roof-overlay-installation';
import { irvingtonReRoofing } from './re-roofing';
import { irvingtonInsuranceRoofReplacement } from './insurance-roof-replacement';
import { irvingtonStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { irvingtonAgingRoofReplacement } from './aging-roof-replacement';
import { irvingtonRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { irvingtonFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { irvingtonRoofReplacementCost } from './roof-replacement-cost';
import { irvingtonAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { irvingtonMetalRoofReplacement } from './metal-roof-replacement';
import { irvingtonSlateRoofReplacement } from './slate-roof-replacement';
import { irvingtonTileRoofReplacement } from './tile-roof-replacement';
import { irvingtonFlatRoofReplacement } from './flat-roof-replacement';
import { irvingtonCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Irvington combo content objects at module load.
// Build crashes immediately on invalid data.

export const irvingtonComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  irvingtonRoofRepair,
  irvingtonRoofReplacement,
  irvingtonEmergencyRoofRepair,
  irvingtonRoofInspection,
  irvingtonRoofMaintenancePrograms,
  irvingtonRoofLeakRepair,
  irvingtonStormDamageRoofRepair,
  irvingtonHailDamageRoofRepair,
  irvingtonWindDamageRoofRepair,
  irvingtonRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  irvingtonResidentialRoofInstallation,
  irvingtonAsphaltShingleRoofing,
  irvingtonSlateRoofInstallationRepair,
  irvingtonWoodShakeRoofing,
  irvingtonMetalRoofInstallationRepair,
  irvingtonFlatRoofInstallationRepair,
  irvingtonTileRoofInstallationRepair,
  irvingtonCedarShakeRoofing,
  irvingtonRubberRoofingEpdm,

  // Commercial Roof Types (8)
  irvingtonTpoRoofingInstallation,
  irvingtonEpdmCommercialRoofing,
  irvingtonModifiedBitumenRoofing,
  irvingtonBuiltUpRoofing,
  irvingtonCommercialMetalRoofing,
  irvingtonPvcRoofing,
  irvingtonGreenRoofInstallation,
  irvingtonSprayFoamRoofing,

  // Components-Specialty (10)
  irvingtonRoofFlashingInstallationRepair,
  irvingtonChimneyFlashingRepair,
  irvingtonGutterInstallationRepair,
  irvingtonGutterGuardInstallation,
  irvingtonSkylightInstallationRepair,
  irvingtonFasciaInstallationRepair,
  irvingtonSoffitInstallationRepair,
  irvingtonRoofVentInstallationRepair,
  irvingtonRoofWaterproofing,
  irvingtonRoofDeckRepairReplacement,

  // Energy/Solar (5)
  irvingtonSolarPanelRoofingInstallation,
  irvingtonSolarShingleInstallation,
  irvingtonEnergyEfficientRoofingSolutions,
  irvingtonSiliconeRoofCoating,
  irvingtonSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  irvingtonCommercialRoofInstallation,
  irvingtonCommercialRoofRepair,
  irvingtonCommercialRoofReplacement,
  irvingtonRoofThermalImagingInspections,
  irvingtonInfraredRoofLeakDetection,

  // Design/Consultation (3)
  irvingtonCustomRoofDesignConsultation,
  irvingtonHistoricRoofRestoration,
  irvingtonRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  irvingtonFullRoofTearOff,
  irvingtonRoofOverlayInstallation,
  irvingtonReRoofing,
  irvingtonInsuranceRoofReplacement,
  irvingtonStormDamageRoofReplacement,
  irvingtonAgingRoofReplacement,
  irvingtonRoofReplacementAfterLeak,
  irvingtonFireDamageRoofReplacement,
  irvingtonRoofReplacementCost,
  irvingtonAsphaltShingleRoofReplacement,
  irvingtonMetalRoofReplacement,
  irvingtonSlateRoofReplacement,
  irvingtonTileRoofReplacement,
  irvingtonFlatRoofReplacement,
  irvingtonCedarShakeRoofReplacement,
]);
