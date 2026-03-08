import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { montclairRoofRepair } from './roof-repair';
import { montclairRoofReplacement } from './roof-replacement';
import { montclairEmergencyRoofRepair } from './emergency-roof-repair';
import { montclairRoofInspection } from './roof-inspection';
import { montclairRoofMaintenancePrograms } from './roof-maintenance-programs';
import { montclairRoofLeakRepair } from './roof-leak-repair';
import { montclairStormDamageRoofRepair } from './storm-damage-roof-repair';
import { montclairHailDamageRoofRepair } from './hail-damage-roof-repair';
import { montclairWindDamageRoofRepair } from './wind-damage-roof-repair';
import { montclairRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { montclairResidentialRoofInstallation } from './residential-roof-installation';
import { montclairAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { montclairSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { montclairWoodShakeRoofing } from './wood-shake-roofing';
import { montclairMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { montclairFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { montclairTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { montclairCedarShakeRoofing } from './cedar-shake-roofing';
import { montclairRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { montclairTpoRoofingInstallation } from './tpo-roofing-installation';
import { montclairEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { montclairModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { montclairBuiltUpRoofing } from './built-up-roofing';
import { montclairCommercialMetalRoofing } from './commercial-metal-roofing';
import { montclairPvcRoofing } from './pvc-roofing';
import { montclairGreenRoofInstallation } from './green-roof-installation';
import { montclairSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { montclairRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { montclairChimneyFlashingRepair } from './chimney-flashing-repair';
import { montclairGutterInstallationRepair } from './gutter-installation-repair';
import { montclairGutterGuardInstallation } from './gutter-guard-installation';
import { montclairSkylightInstallationRepair } from './skylight-installation-repair';
import { montclairFasciaInstallationRepair } from './fascia-installation-repair';
import { montclairSoffitInstallationRepair } from './soffit-installation-repair';
import { montclairRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { montclairRoofWaterproofing } from './roof-waterproofing';
import { montclairRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { montclairSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { montclairSolarShingleInstallation } from './solar-shingle-installation';
import { montclairEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { montclairSiliconeRoofCoating } from './silicone-roof-coating';
import { montclairSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { montclairCommercialRoofInstallation } from './commercial-roof-installation';
import { montclairCommercialRoofRepair } from './commercial-roof-repair';
import { montclairCommercialRoofReplacement } from './commercial-roof-replacement';
import { montclairRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { montclairInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { montclairCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { montclairHistoricRoofRestoration } from './historic-roof-restoration';
import { montclairRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { montclairFullRoofTearOff } from './full-roof-tear-off';
import { montclairRoofOverlayInstallation } from './roof-overlay-installation';
import { montclairReRoofing } from './re-roofing';
import { montclairInsuranceRoofReplacement } from './insurance-roof-replacement';
import { montclairStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { montclairAgingRoofReplacement } from './aging-roof-replacement';
import { montclairRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { montclairFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { montclairRoofReplacementCost } from './roof-replacement-cost';
import { montclairAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { montclairMetalRoofReplacement } from './metal-roof-replacement';
import { montclairSlateRoofReplacement } from './slate-roof-replacement';
import { montclairTileRoofReplacement } from './tile-roof-replacement';
import { montclairFlatRoofReplacement } from './flat-roof-replacement';
import { montclairCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Montclair combo content objects at module load.
// Build crashes immediately on invalid data.

export const montclairComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  montclairRoofRepair,
  montclairRoofReplacement,
  montclairEmergencyRoofRepair,
  montclairRoofInspection,
  montclairRoofMaintenancePrograms,
  montclairRoofLeakRepair,
  montclairStormDamageRoofRepair,
  montclairHailDamageRoofRepair,
  montclairWindDamageRoofRepair,
  montclairRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  montclairResidentialRoofInstallation,
  montclairAsphaltShingleRoofing,
  montclairSlateRoofInstallationRepair,
  montclairWoodShakeRoofing,
  montclairMetalRoofInstallationRepair,
  montclairFlatRoofInstallationRepair,
  montclairTileRoofInstallationRepair,
  montclairCedarShakeRoofing,
  montclairRubberRoofingEpdm,

  // Commercial Roof Types (8)
  montclairTpoRoofingInstallation,
  montclairEpdmCommercialRoofing,
  montclairModifiedBitumenRoofing,
  montclairBuiltUpRoofing,
  montclairCommercialMetalRoofing,
  montclairPvcRoofing,
  montclairGreenRoofInstallation,
  montclairSprayFoamRoofing,

  // Components-Specialty (10)
  montclairRoofFlashingInstallationRepair,
  montclairChimneyFlashingRepair,
  montclairGutterInstallationRepair,
  montclairGutterGuardInstallation,
  montclairSkylightInstallationRepair,
  montclairFasciaInstallationRepair,
  montclairSoffitInstallationRepair,
  montclairRoofVentInstallationRepair,
  montclairRoofWaterproofing,
  montclairRoofDeckRepairReplacement,

  // Energy/Solar (5)
  montclairSolarPanelRoofingInstallation,
  montclairSolarShingleInstallation,
  montclairEnergyEfficientRoofingSolutions,
  montclairSiliconeRoofCoating,
  montclairSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  montclairCommercialRoofInstallation,
  montclairCommercialRoofRepair,
  montclairCommercialRoofReplacement,
  montclairRoofThermalImagingInspections,
  montclairInfraredRoofLeakDetection,

  // Design/Consultation (3)
  montclairCustomRoofDesignConsultation,
  montclairHistoricRoofRestoration,
  montclairRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  montclairFullRoofTearOff,
  montclairRoofOverlayInstallation,
  montclairReRoofing,
  montclairInsuranceRoofReplacement,
  montclairStormDamageRoofReplacement,
  montclairAgingRoofReplacement,
  montclairRoofReplacementAfterLeak,
  montclairFireDamageRoofReplacement,
  montclairRoofReplacementCost,
  montclairAsphaltShingleRoofReplacement,
  montclairMetalRoofReplacement,
  montclairSlateRoofReplacement,
  montclairTileRoofReplacement,
  montclairFlatRoofReplacement,
  montclairCedarShakeRoofReplacement,
]);
