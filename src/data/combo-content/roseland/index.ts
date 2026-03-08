import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { roselandRoofRepair } from './roof-repair';
import { roselandRoofReplacement } from './roof-replacement';
import { roselandEmergencyRoofRepair } from './emergency-roof-repair';
import { roselandRoofInspection } from './roof-inspection';
import { roselandRoofMaintenancePrograms } from './roof-maintenance-programs';
import { roselandRoofLeakRepair } from './roof-leak-repair';
import { roselandStormDamageRoofRepair } from './storm-damage-roof-repair';
import { roselandHailDamageRoofRepair } from './hail-damage-roof-repair';
import { roselandWindDamageRoofRepair } from './wind-damage-roof-repair';
import { roselandRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { roselandResidentialRoofInstallation } from './residential-roof-installation';
import { roselandAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { roselandSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { roselandWoodShakeRoofing } from './wood-shake-roofing';
import { roselandMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { roselandFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { roselandTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { roselandCedarShakeRoofing } from './cedar-shake-roofing';
import { roselandRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { roselandTpoRoofingInstallation } from './tpo-roofing-installation';
import { roselandEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { roselandModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { roselandBuiltUpRoofing } from './built-up-roofing';
import { roselandCommercialMetalRoofing } from './commercial-metal-roofing';
import { roselandPvcRoofing } from './pvc-roofing';
import { roselandGreenRoofInstallation } from './green-roof-installation';
import { roselandSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { roselandRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { roselandChimneyFlashingRepair } from './chimney-flashing-repair';
import { roselandGutterInstallationRepair } from './gutter-installation-repair';
import { roselandGutterGuardInstallation } from './gutter-guard-installation';
import { roselandSkylightInstallationRepair } from './skylight-installation-repair';
import { roselandFasciaInstallationRepair } from './fascia-installation-repair';
import { roselandSoffitInstallationRepair } from './soffit-installation-repair';
import { roselandRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { roselandRoofWaterproofing } from './roof-waterproofing';
import { roselandRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { roselandSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { roselandSolarShingleInstallation } from './solar-shingle-installation';
import { roselandEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { roselandSiliconeRoofCoating } from './silicone-roof-coating';
import { roselandSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { roselandCommercialRoofInstallation } from './commercial-roof-installation';
import { roselandCommercialRoofRepair } from './commercial-roof-repair';
import { roselandCommercialRoofReplacement } from './commercial-roof-replacement';
import { roselandRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { roselandInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { roselandCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { roselandHistoricRoofRestoration } from './historic-roof-restoration';
import { roselandRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { roselandFullRoofTearOff } from './full-roof-tear-off';
import { roselandRoofOverlayInstallation } from './roof-overlay-installation';
import { roselandReRoofing } from './re-roofing';
import { roselandInsuranceRoofReplacement } from './insurance-roof-replacement';
import { roselandStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { roselandAgingRoofReplacement } from './aging-roof-replacement';
import { roselandRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { roselandFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { roselandRoofReplacementCost } from './roof-replacement-cost';
import { roselandAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { roselandMetalRoofReplacement } from './metal-roof-replacement';
import { roselandSlateRoofReplacement } from './slate-roof-replacement';
import { roselandTileRoofReplacement } from './tile-roof-replacement';
import { roselandFlatRoofReplacement } from './flat-roof-replacement';
import { roselandCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Roseland combo content objects at module load.
// Build crashes immediately on invalid data.

export const roselandComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  roselandRoofRepair,
  roselandRoofReplacement,
  roselandEmergencyRoofRepair,
  roselandRoofInspection,
  roselandRoofMaintenancePrograms,
  roselandRoofLeakRepair,
  roselandStormDamageRoofRepair,
  roselandHailDamageRoofRepair,
  roselandWindDamageRoofRepair,
  roselandRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  roselandResidentialRoofInstallation,
  roselandAsphaltShingleRoofing,
  roselandSlateRoofInstallationRepair,
  roselandWoodShakeRoofing,
  roselandMetalRoofInstallationRepair,
  roselandFlatRoofInstallationRepair,
  roselandTileRoofInstallationRepair,
  roselandCedarShakeRoofing,
  roselandRubberRoofingEpdm,

  // Commercial Roof Types (8)
  roselandTpoRoofingInstallation,
  roselandEpdmCommercialRoofing,
  roselandModifiedBitumenRoofing,
  roselandBuiltUpRoofing,
  roselandCommercialMetalRoofing,
  roselandPvcRoofing,
  roselandGreenRoofInstallation,
  roselandSprayFoamRoofing,

  // Components-Specialty (10)
  roselandRoofFlashingInstallationRepair,
  roselandChimneyFlashingRepair,
  roselandGutterInstallationRepair,
  roselandGutterGuardInstallation,
  roselandSkylightInstallationRepair,
  roselandFasciaInstallationRepair,
  roselandSoffitInstallationRepair,
  roselandRoofVentInstallationRepair,
  roselandRoofWaterproofing,
  roselandRoofDeckRepairReplacement,

  // Energy/Solar (5)
  roselandSolarPanelRoofingInstallation,
  roselandSolarShingleInstallation,
  roselandEnergyEfficientRoofingSolutions,
  roselandSiliconeRoofCoating,
  roselandSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  roselandCommercialRoofInstallation,
  roselandCommercialRoofRepair,
  roselandCommercialRoofReplacement,
  roselandRoofThermalImagingInspections,
  roselandInfraredRoofLeakDetection,

  // Design/Consultation (3)
  roselandCustomRoofDesignConsultation,
  roselandHistoricRoofRestoration,
  roselandRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  roselandFullRoofTearOff,
  roselandRoofOverlayInstallation,
  roselandReRoofing,
  roselandInsuranceRoofReplacement,
  roselandStormDamageRoofReplacement,
  roselandAgingRoofReplacement,
  roselandRoofReplacementAfterLeak,
  roselandFireDamageRoofReplacement,
  roselandRoofReplacementCost,
  roselandAsphaltShingleRoofReplacement,
  roselandMetalRoofReplacement,
  roselandSlateRoofReplacement,
  roselandTileRoofReplacement,
  roselandFlatRoofReplacement,
  roselandCedarShakeRoofReplacement,
]);
