import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { newarkRoofRepair } from './roof-repair';
import { newarkRoofReplacement } from './roof-replacement';
import { newarkEmergencyRoofRepair } from './emergency-roof-repair';
import { newarkRoofInspection } from './roof-inspection';
import { newarkRoofMaintenancePrograms } from './roof-maintenance-programs';
import { newarkRoofLeakRepair } from './roof-leak-repair';
import { newarkStormDamageRoofRepair } from './storm-damage-roof-repair';
import { newarkHailDamageRoofRepair } from './hail-damage-roof-repair';
import { newarkWindDamageRoofRepair } from './wind-damage-roof-repair';
import { newarkRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { newarkResidentialRoofInstallation } from './residential-roof-installation';
import { newarkAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { newarkSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { newarkWoodShakeRoofing } from './wood-shake-roofing';
import { newarkMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { newarkFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { newarkTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { newarkCedarShakeRoofing } from './cedar-shake-roofing';
import { newarkRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { newarkTpoRoofingInstallation } from './tpo-roofing-installation';
import { newarkEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { newarkModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { newarkBuiltUpRoofing } from './built-up-roofing';
import { newarkCommercialMetalRoofing } from './commercial-metal-roofing';
import { newarkPvcRoofing } from './pvc-roofing';
import { newarkGreenRoofInstallation } from './green-roof-installation';
import { newarkSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { newarkRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { newarkChimneyFlashingRepair } from './chimney-flashing-repair';
import { newarkGutterInstallationRepair } from './gutter-installation-repair';
import { newarkGutterGuardInstallation } from './gutter-guard-installation';
import { newarkSkylightInstallationRepair } from './skylight-installation-repair';
import { newarkFasciaInstallationRepair } from './fascia-installation-repair';
import { newarkSoffitInstallationRepair } from './soffit-installation-repair';
import { newarkRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { newarkRoofWaterproofing } from './roof-waterproofing';
import { newarkRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { newarkSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { newarkSolarShingleInstallation } from './solar-shingle-installation';
import { newarkEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { newarkSiliconeRoofCoating } from './silicone-roof-coating';
import { newarkSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { newarkCommercialRoofInstallation } from './commercial-roof-installation';
import { newarkCommercialRoofRepair } from './commercial-roof-repair';
import { newarkCommercialRoofReplacement } from './commercial-roof-replacement';
import { newarkRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { newarkInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { newarkCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { newarkHistoricRoofRestoration } from './historic-roof-restoration';
import { newarkRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { newarkFullRoofTearOff } from './full-roof-tear-off';
import { newarkRoofOverlayInstallation } from './roof-overlay-installation';
import { newarkReRoofing } from './re-roofing';
import { newarkInsuranceRoofReplacement } from './insurance-roof-replacement';
import { newarkStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { newarkAgingRoofReplacement } from './aging-roof-replacement';
import { newarkRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { newarkFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { newarkRoofReplacementCost } from './roof-replacement-cost';
import { newarkAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { newarkMetalRoofReplacement } from './metal-roof-replacement';
import { newarkSlateRoofReplacement } from './slate-roof-replacement';
import { newarkTileRoofReplacement } from './tile-roof-replacement';
import { newarkFlatRoofReplacement } from './flat-roof-replacement';
import { newarkCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Newark combo content objects at module load.
// Build crashes immediately on invalid data.

export const newarkComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  newarkRoofRepair,
  newarkRoofReplacement,
  newarkEmergencyRoofRepair,
  newarkRoofInspection,
  newarkRoofMaintenancePrograms,
  newarkRoofLeakRepair,
  newarkStormDamageRoofRepair,
  newarkHailDamageRoofRepair,
  newarkWindDamageRoofRepair,
  newarkRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  newarkResidentialRoofInstallation,
  newarkAsphaltShingleRoofing,
  newarkSlateRoofInstallationRepair,
  newarkWoodShakeRoofing,
  newarkMetalRoofInstallationRepair,
  newarkFlatRoofInstallationRepair,
  newarkTileRoofInstallationRepair,
  newarkCedarShakeRoofing,
  newarkRubberRoofingEpdm,

  // Commercial Roof Types (8)
  newarkTpoRoofingInstallation,
  newarkEpdmCommercialRoofing,
  newarkModifiedBitumenRoofing,
  newarkBuiltUpRoofing,
  newarkCommercialMetalRoofing,
  newarkPvcRoofing,
  newarkGreenRoofInstallation,
  newarkSprayFoamRoofing,

  // Components-Specialty (10)
  newarkRoofFlashingInstallationRepair,
  newarkChimneyFlashingRepair,
  newarkGutterInstallationRepair,
  newarkGutterGuardInstallation,
  newarkSkylightInstallationRepair,
  newarkFasciaInstallationRepair,
  newarkSoffitInstallationRepair,
  newarkRoofVentInstallationRepair,
  newarkRoofWaterproofing,
  newarkRoofDeckRepairReplacement,

  // Energy/Solar (5)
  newarkSolarPanelRoofingInstallation,
  newarkSolarShingleInstallation,
  newarkEnergyEfficientRoofingSolutions,
  newarkSiliconeRoofCoating,
  newarkSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  newarkCommercialRoofInstallation,
  newarkCommercialRoofRepair,
  newarkCommercialRoofReplacement,
  newarkRoofThermalImagingInspections,
  newarkInfraredRoofLeakDetection,

  // Design/Consultation (3)
  newarkCustomRoofDesignConsultation,
  newarkHistoricRoofRestoration,
  newarkRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  newarkFullRoofTearOff,
  newarkRoofOverlayInstallation,
  newarkReRoofing,
  newarkInsuranceRoofReplacement,
  newarkStormDamageRoofReplacement,
  newarkAgingRoofReplacement,
  newarkRoofReplacementAfterLeak,
  newarkFireDamageRoofReplacement,
  newarkRoofReplacementCost,
  newarkAsphaltShingleRoofReplacement,
  newarkMetalRoofReplacement,
  newarkSlateRoofReplacement,
  newarkTileRoofReplacement,
  newarkFlatRoofReplacement,
  newarkCedarShakeRoofReplacement,
]);
