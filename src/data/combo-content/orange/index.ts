import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { orangeRoofRepair } from './roof-repair';
import { orangeRoofReplacement } from './roof-replacement';
import { orangeEmergencyRoofRepair } from './emergency-roof-repair';
import { orangeRoofInspection } from './roof-inspection';
import { orangeRoofMaintenancePrograms } from './roof-maintenance-programs';
import { orangeRoofLeakRepair } from './roof-leak-repair';
import { orangeStormDamageRoofRepair } from './storm-damage-roof-repair';
import { orangeHailDamageRoofRepair } from './hail-damage-roof-repair';
import { orangeWindDamageRoofRepair } from './wind-damage-roof-repair';
import { orangeRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { orangeResidentialRoofInstallation } from './residential-roof-installation';
import { orangeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { orangeSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { orangeWoodShakeRoofing } from './wood-shake-roofing';
import { orangeMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { orangeFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { orangeTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { orangeCedarShakeRoofing } from './cedar-shake-roofing';
import { orangeRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { orangeTpoRoofingInstallation } from './tpo-roofing-installation';
import { orangeEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { orangeModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { orangeBuiltUpRoofing } from './built-up-roofing';
import { orangeCommercialMetalRoofing } from './commercial-metal-roofing';
import { orangePvcRoofing } from './pvc-roofing';
import { orangeGreenRoofInstallation } from './green-roof-installation';
import { orangeSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { orangeRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { orangeChimneyFlashingRepair } from './chimney-flashing-repair';
import { orangeGutterInstallationRepair } from './gutter-installation-repair';
import { orangeGutterGuardInstallation } from './gutter-guard-installation';
import { orangeSkylightInstallationRepair } from './skylight-installation-repair';
import { orangeFasciaInstallationRepair } from './fascia-installation-repair';
import { orangeSoffitInstallationRepair } from './soffit-installation-repair';
import { orangeRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { orangeRoofWaterproofing } from './roof-waterproofing';
import { orangeRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { orangeSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { orangeSolarShingleInstallation } from './solar-shingle-installation';
import { orangeEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { orangeSiliconeRoofCoating } from './silicone-roof-coating';
import { orangeSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { orangeCommercialRoofInstallation } from './commercial-roof-installation';
import { orangeCommercialRoofRepair } from './commercial-roof-repair';
import { orangeCommercialRoofReplacement } from './commercial-roof-replacement';
import { orangeRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { orangeInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { orangeCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { orangeHistoricRoofRestoration } from './historic-roof-restoration';
import { orangeRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { orangeFullRoofTearOff } from './full-roof-tear-off';
import { orangeRoofOverlayInstallation } from './roof-overlay-installation';
import { orangeReRoofing } from './re-roofing';
import { orangeInsuranceRoofReplacement } from './insurance-roof-replacement';
import { orangeStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { orangeAgingRoofReplacement } from './aging-roof-replacement';
import { orangeRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { orangeFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { orangeRoofReplacementCost } from './roof-replacement-cost';
import { orangeAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { orangeMetalRoofReplacement } from './metal-roof-replacement';
import { orangeSlateRoofReplacement } from './slate-roof-replacement';
import { orangeTileRoofReplacement } from './tile-roof-replacement';
import { orangeFlatRoofReplacement } from './flat-roof-replacement';
import { orangeCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Orange combo content objects at module load.
// Build crashes immediately on invalid data.

export const orangeComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  orangeRoofRepair,
  orangeRoofReplacement,
  orangeEmergencyRoofRepair,
  orangeRoofInspection,
  orangeRoofMaintenancePrograms,
  orangeRoofLeakRepair,
  orangeStormDamageRoofRepair,
  orangeHailDamageRoofRepair,
  orangeWindDamageRoofRepair,
  orangeRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  orangeResidentialRoofInstallation,
  orangeAsphaltShingleRoofing,
  orangeSlateRoofInstallationRepair,
  orangeWoodShakeRoofing,
  orangeMetalRoofInstallationRepair,
  orangeFlatRoofInstallationRepair,
  orangeTileRoofInstallationRepair,
  orangeCedarShakeRoofing,
  orangeRubberRoofingEpdm,

  // Commercial Roof Types (8)
  orangeTpoRoofingInstallation,
  orangeEpdmCommercialRoofing,
  orangeModifiedBitumenRoofing,
  orangeBuiltUpRoofing,
  orangeCommercialMetalRoofing,
  orangePvcRoofing,
  orangeGreenRoofInstallation,
  orangeSprayFoamRoofing,

  // Components-Specialty (10)
  orangeRoofFlashingInstallationRepair,
  orangeChimneyFlashingRepair,
  orangeGutterInstallationRepair,
  orangeGutterGuardInstallation,
  orangeSkylightInstallationRepair,
  orangeFasciaInstallationRepair,
  orangeSoffitInstallationRepair,
  orangeRoofVentInstallationRepair,
  orangeRoofWaterproofing,
  orangeRoofDeckRepairReplacement,

  // Energy/Solar (5)
  orangeSolarPanelRoofingInstallation,
  orangeSolarShingleInstallation,
  orangeEnergyEfficientRoofingSolutions,
  orangeSiliconeRoofCoating,
  orangeSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  orangeCommercialRoofInstallation,
  orangeCommercialRoofRepair,
  orangeCommercialRoofReplacement,
  orangeRoofThermalImagingInspections,
  orangeInfraredRoofLeakDetection,

  // Design/Consultation (3)
  orangeCustomRoofDesignConsultation,
  orangeHistoricRoofRestoration,
  orangeRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  orangeFullRoofTearOff,
  orangeRoofOverlayInstallation,
  orangeReRoofing,
  orangeInsuranceRoofReplacement,
  orangeStormDamageRoofReplacement,
  orangeAgingRoofReplacement,
  orangeRoofReplacementAfterLeak,
  orangeFireDamageRoofReplacement,
  orangeRoofReplacementCost,
  orangeAsphaltShingleRoofReplacement,
  orangeMetalRoofReplacement,
  orangeSlateRoofReplacement,
  orangeTileRoofReplacement,
  orangeFlatRoofReplacement,
  orangeCedarShakeRoofReplacement,
]);
