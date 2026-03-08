import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { millburnRoofRepair } from './roof-repair';
import { millburnRoofReplacement } from './roof-replacement';
import { millburnEmergencyRoofRepair } from './emergency-roof-repair';
import { millburnRoofInspection } from './roof-inspection';
import { millburnRoofMaintenancePrograms } from './roof-maintenance-programs';
import { millburnRoofLeakRepair } from './roof-leak-repair';
import { millburnStormDamageRoofRepair } from './storm-damage-roof-repair';
import { millburnHailDamageRoofRepair } from './hail-damage-roof-repair';
import { millburnWindDamageRoofRepair } from './wind-damage-roof-repair';
import { millburnRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { millburnResidentialRoofInstallation } from './residential-roof-installation';
import { millburnAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { millburnSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { millburnWoodShakeRoofing } from './wood-shake-roofing';
import { millburnMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { millburnFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { millburnTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { millburnCedarShakeRoofing } from './cedar-shake-roofing';
import { millburnRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { millburnTpoRoofingInstallation } from './tpo-roofing-installation';
import { millburnEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { millburnModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { millburnBuiltUpRoofing } from './built-up-roofing';
import { millburnCommercialMetalRoofing } from './commercial-metal-roofing';
import { millburnPvcRoofing } from './pvc-roofing';
import { millburnGreenRoofInstallation } from './green-roof-installation';
import { millburnSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { millburnRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { millburnChimneyFlashingRepair } from './chimney-flashing-repair';
import { millburnGutterInstallationRepair } from './gutter-installation-repair';
import { millburnGutterGuardInstallation } from './gutter-guard-installation';
import { millburnSkylightInstallationRepair } from './skylight-installation-repair';
import { millburnFasciaInstallationRepair } from './fascia-installation-repair';
import { millburnSoffitInstallationRepair } from './soffit-installation-repair';
import { millburnRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { millburnRoofWaterproofing } from './roof-waterproofing';
import { millburnRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { millburnSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { millburnSolarShingleInstallation } from './solar-shingle-installation';
import { millburnEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { millburnSiliconeRoofCoating } from './silicone-roof-coating';
import { millburnSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { millburnCommercialRoofInstallation } from './commercial-roof-installation';
import { millburnCommercialRoofRepair } from './commercial-roof-repair';
import { millburnCommercialRoofReplacement } from './commercial-roof-replacement';
import { millburnRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { millburnInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { millburnCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { millburnHistoricRoofRestoration } from './historic-roof-restoration';
import { millburnRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { millburnFullRoofTearOff } from './full-roof-tear-off';
import { millburnRoofOverlayInstallation } from './roof-overlay-installation';
import { millburnReRoofing } from './re-roofing';
import { millburnInsuranceRoofReplacement } from './insurance-roof-replacement';
import { millburnStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { millburnAgingRoofReplacement } from './aging-roof-replacement';
import { millburnRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { millburnFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { millburnRoofReplacementCost } from './roof-replacement-cost';
import { millburnAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { millburnMetalRoofReplacement } from './metal-roof-replacement';
import { millburnSlateRoofReplacement } from './slate-roof-replacement';
import { millburnTileRoofReplacement } from './tile-roof-replacement';
import { millburnFlatRoofReplacement } from './flat-roof-replacement';
import { millburnCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Millburn combo content objects at module load.
// Build crashes immediately on invalid data.

export const millburnComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  millburnRoofRepair,
  millburnRoofReplacement,
  millburnEmergencyRoofRepair,
  millburnRoofInspection,
  millburnRoofMaintenancePrograms,
  millburnRoofLeakRepair,
  millburnStormDamageRoofRepair,
  millburnHailDamageRoofRepair,
  millburnWindDamageRoofRepair,
  millburnRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  millburnResidentialRoofInstallation,
  millburnAsphaltShingleRoofing,
  millburnSlateRoofInstallationRepair,
  millburnWoodShakeRoofing,
  millburnMetalRoofInstallationRepair,
  millburnFlatRoofInstallationRepair,
  millburnTileRoofInstallationRepair,
  millburnCedarShakeRoofing,
  millburnRubberRoofingEpdm,

  // Commercial Roof Types (8)
  millburnTpoRoofingInstallation,
  millburnEpdmCommercialRoofing,
  millburnModifiedBitumenRoofing,
  millburnBuiltUpRoofing,
  millburnCommercialMetalRoofing,
  millburnPvcRoofing,
  millburnGreenRoofInstallation,
  millburnSprayFoamRoofing,

  // Components-Specialty (10)
  millburnRoofFlashingInstallationRepair,
  millburnChimneyFlashingRepair,
  millburnGutterInstallationRepair,
  millburnGutterGuardInstallation,
  millburnSkylightInstallationRepair,
  millburnFasciaInstallationRepair,
  millburnSoffitInstallationRepair,
  millburnRoofVentInstallationRepair,
  millburnRoofWaterproofing,
  millburnRoofDeckRepairReplacement,

  // Energy/Solar (5)
  millburnSolarPanelRoofingInstallation,
  millburnSolarShingleInstallation,
  millburnEnergyEfficientRoofingSolutions,
  millburnSiliconeRoofCoating,
  millburnSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  millburnCommercialRoofInstallation,
  millburnCommercialRoofRepair,
  millburnCommercialRoofReplacement,
  millburnRoofThermalImagingInspections,
  millburnInfraredRoofLeakDetection,

  // Design/Consultation (3)
  millburnCustomRoofDesignConsultation,
  millburnHistoricRoofRestoration,
  millburnRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  millburnFullRoofTearOff,
  millburnRoofOverlayInstallation,
  millburnReRoofing,
  millburnInsuranceRoofReplacement,
  millburnStormDamageRoofReplacement,
  millburnAgingRoofReplacement,
  millburnRoofReplacementAfterLeak,
  millburnFireDamageRoofReplacement,
  millburnRoofReplacementCost,
  millburnAsphaltShingleRoofReplacement,
  millburnMetalRoofReplacement,
  millburnSlateRoofReplacement,
  millburnTileRoofReplacement,
  millburnFlatRoofReplacement,
  millburnCedarShakeRoofReplacement,
]);
