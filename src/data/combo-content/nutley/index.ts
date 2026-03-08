import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { nutleyRoofRepair } from './roof-repair';
import { nutleyRoofReplacement } from './roof-replacement';
import { nutleyEmergencyRoofRepair } from './emergency-roof-repair';
import { nutleyRoofInspection } from './roof-inspection';
import { nutleyRoofMaintenancePrograms } from './roof-maintenance-programs';
import { nutleyRoofLeakRepair } from './roof-leak-repair';
import { nutleyStormDamageRoofRepair } from './storm-damage-roof-repair';
import { nutleyHailDamageRoofRepair } from './hail-damage-roof-repair';
import { nutleyWindDamageRoofRepair } from './wind-damage-roof-repair';
import { nutleyRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { nutleyResidentialRoofInstallation } from './residential-roof-installation';
import { nutleyAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { nutleySlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { nutleyWoodShakeRoofing } from './wood-shake-roofing';
import { nutleyMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { nutleyFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { nutleyTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { nutleyCedarShakeRoofing } from './cedar-shake-roofing';
import { nutleyRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { nutleyTpoRoofingInstallation } from './tpo-roofing-installation';
import { nutleyEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { nutleyModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { nutleyBuiltUpRoofing } from './built-up-roofing';
import { nutleyCommercialMetalRoofing } from './commercial-metal-roofing';
import { nutleyPvcRoofing } from './pvc-roofing';
import { nutleyGreenRoofInstallation } from './green-roof-installation';
import { nutleySprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { nutleyRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { nutleyChimneyFlashingRepair } from './chimney-flashing-repair';
import { nutleyGutterInstallationRepair } from './gutter-installation-repair';
import { nutleyGutterGuardInstallation } from './gutter-guard-installation';
import { nutleySkylightInstallationRepair } from './skylight-installation-repair';
import { nutleyFasciaInstallationRepair } from './fascia-installation-repair';
import { nutleySoffitInstallationRepair } from './soffit-installation-repair';
import { nutleyRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { nutleyRoofWaterproofing } from './roof-waterproofing';
import { nutleyRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { nutleySolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { nutleySolarShingleInstallation } from './solar-shingle-installation';
import { nutleyEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { nutleySiliconeRoofCoating } from './silicone-roof-coating';
import { nutleySiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { nutleyCommercialRoofInstallation } from './commercial-roof-installation';
import { nutleyCommercialRoofRepair } from './commercial-roof-repair';
import { nutleyCommercialRoofReplacement } from './commercial-roof-replacement';
import { nutleyRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { nutleyInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { nutleyCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { nutleyHistoricRoofRestoration } from './historic-roof-restoration';
import { nutleyRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { nutleyFullRoofTearOff } from './full-roof-tear-off';
import { nutleyRoofOverlayInstallation } from './roof-overlay-installation';
import { nutleyReRoofing } from './re-roofing';
import { nutleyInsuranceRoofReplacement } from './insurance-roof-replacement';
import { nutleyStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { nutleyAgingRoofReplacement } from './aging-roof-replacement';
import { nutleyRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { nutleyFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { nutleyRoofReplacementCost } from './roof-replacement-cost';
import { nutleyAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { nutleyMetalRoofReplacement } from './metal-roof-replacement';
import { nutleySlateRoofReplacement } from './slate-roof-replacement';
import { nutleyTileRoofReplacement } from './tile-roof-replacement';
import { nutleyFlatRoofReplacement } from './flat-roof-replacement';
import { nutleyCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Nutley combo content objects at module load.
// Build crashes immediately on invalid data.

export const nutleyComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  nutleyRoofRepair,
  nutleyRoofReplacement,
  nutleyEmergencyRoofRepair,
  nutleyRoofInspection,
  nutleyRoofMaintenancePrograms,
  nutleyRoofLeakRepair,
  nutleyStormDamageRoofRepair,
  nutleyHailDamageRoofRepair,
  nutleyWindDamageRoofRepair,
  nutleyRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  nutleyResidentialRoofInstallation,
  nutleyAsphaltShingleRoofing,
  nutleySlateRoofInstallationRepair,
  nutleyWoodShakeRoofing,
  nutleyMetalRoofInstallationRepair,
  nutleyFlatRoofInstallationRepair,
  nutleyTileRoofInstallationRepair,
  nutleyCedarShakeRoofing,
  nutleyRubberRoofingEpdm,

  // Commercial Roof Types (8)
  nutleyTpoRoofingInstallation,
  nutleyEpdmCommercialRoofing,
  nutleyModifiedBitumenRoofing,
  nutleyBuiltUpRoofing,
  nutleyCommercialMetalRoofing,
  nutleyPvcRoofing,
  nutleyGreenRoofInstallation,
  nutleySprayFoamRoofing,

  // Components-Specialty (10)
  nutleyRoofFlashingInstallationRepair,
  nutleyChimneyFlashingRepair,
  nutleyGutterInstallationRepair,
  nutleyGutterGuardInstallation,
  nutleySkylightInstallationRepair,
  nutleyFasciaInstallationRepair,
  nutleySoffitInstallationRepair,
  nutleyRoofVentInstallationRepair,
  nutleyRoofWaterproofing,
  nutleyRoofDeckRepairReplacement,

  // Energy/Solar (5)
  nutleySolarPanelRoofingInstallation,
  nutleySolarShingleInstallation,
  nutleyEnergyEfficientRoofingSolutions,
  nutleySiliconeRoofCoating,
  nutleySiliconeElastomericRoofCoating,

  // Commercial Services (5)
  nutleyCommercialRoofInstallation,
  nutleyCommercialRoofRepair,
  nutleyCommercialRoofReplacement,
  nutleyRoofThermalImagingInspections,
  nutleyInfraredRoofLeakDetection,

  // Design/Consultation (3)
  nutleyCustomRoofDesignConsultation,
  nutleyHistoricRoofRestoration,
  nutleyRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  nutleyFullRoofTearOff,
  nutleyRoofOverlayInstallation,
  nutleyReRoofing,
  nutleyInsuranceRoofReplacement,
  nutleyStormDamageRoofReplacement,
  nutleyAgingRoofReplacement,
  nutleyRoofReplacementAfterLeak,
  nutleyFireDamageRoofReplacement,
  nutleyRoofReplacementCost,
  nutleyAsphaltShingleRoofReplacement,
  nutleyMetalRoofReplacement,
  nutleySlateRoofReplacement,
  nutleyTileRoofReplacement,
  nutleyFlatRoofReplacement,
  nutleyCedarShakeRoofReplacement,
]);
