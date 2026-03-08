import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { essexFellsRoofRepair } from './roof-repair';
import { essexFellsRoofReplacement } from './roof-replacement';
import { essexFellsEmergencyRoofRepair } from './emergency-roof-repair';
import { essexFellsRoofInspection } from './roof-inspection';
import { essexFellsRoofMaintenancePrograms } from './roof-maintenance-programs';
import { essexFellsRoofLeakRepair } from './roof-leak-repair';
import { essexFellsStormDamageRoofRepair } from './storm-damage-roof-repair';
import { essexFellsHailDamageRoofRepair } from './hail-damage-roof-repair';
import { essexFellsWindDamageRoofRepair } from './wind-damage-roof-repair';
import { essexFellsRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { essexFellsResidentialRoofInstallation } from './residential-roof-installation';
import { essexFellsAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { essexFellsSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { essexFellsWoodShakeRoofing } from './wood-shake-roofing';
import { essexFellsMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { essexFellsFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { essexFellsTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { essexFellsCedarShakeRoofing } from './cedar-shake-roofing';
import { essexFellsRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { essexFellsTpoRoofingInstallation } from './tpo-roofing-installation';
import { essexFellsEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { essexFellsModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { essexFellsBuiltUpRoofing } from './built-up-roofing';
import { essexFellsCommercialMetalRoofing } from './commercial-metal-roofing';
import { essexFellsPvcRoofing } from './pvc-roofing';
import { essexFellsGreenRoofInstallation } from './green-roof-installation';
import { essexFellsSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { essexFellsRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { essexFellsChimneyFlashingRepair } from './chimney-flashing-repair';
import { essexFellsGutterInstallationRepair } from './gutter-installation-repair';
import { essexFellsGutterGuardInstallation } from './gutter-guard-installation';
import { essexFellsSkylightInstallationRepair } from './skylight-installation-repair';
import { essexFellsFasciaInstallationRepair } from './fascia-installation-repair';
import { essexFellsSoffitInstallationRepair } from './soffit-installation-repair';
import { essexFellsRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { essexFellsRoofWaterproofing } from './roof-waterproofing';
import { essexFellsRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { essexFellsSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { essexFellsSolarShingleInstallation } from './solar-shingle-installation';
import { essexFellsEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { essexFellsSiliconeRoofCoating } from './silicone-roof-coating';
import { essexFellsSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { essexFellsCommercialRoofInstallation } from './commercial-roof-installation';
import { essexFellsCommercialRoofRepair } from './commercial-roof-repair';
import { essexFellsCommercialRoofReplacement } from './commercial-roof-replacement';
import { essexFellsRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { essexFellsInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { essexFellsCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { essexFellsHistoricRoofRestoration } from './historic-roof-restoration';
import { essexFellsRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { essexFellsFullRoofTearOff } from './full-roof-tear-off';
import { essexFellsRoofOverlayInstallation } from './roof-overlay-installation';
import { essexFellsReRoofing } from './re-roofing';
import { essexFellsInsuranceRoofReplacement } from './insurance-roof-replacement';
import { essexFellsStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { essexFellsAgingRoofReplacement } from './aging-roof-replacement';
import { essexFellsRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { essexFellsFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { essexFellsRoofReplacementCost } from './roof-replacement-cost';
import { essexFellsAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { essexFellsMetalRoofReplacement } from './metal-roof-replacement';
import { essexFellsSlateRoofReplacement } from './slate-roof-replacement';
import { essexFellsTileRoofReplacement } from './tile-roof-replacement';
import { essexFellsFlatRoofReplacement } from './flat-roof-replacement';
import { essexFellsCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Essex Fells combo content objects at module load.
// Build crashes immediately on invalid data.

export const essexFellsComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  essexFellsRoofRepair,
  essexFellsRoofReplacement,
  essexFellsEmergencyRoofRepair,
  essexFellsRoofInspection,
  essexFellsRoofMaintenancePrograms,
  essexFellsRoofLeakRepair,
  essexFellsStormDamageRoofRepair,
  essexFellsHailDamageRoofRepair,
  essexFellsWindDamageRoofRepair,
  essexFellsRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  essexFellsResidentialRoofInstallation,
  essexFellsAsphaltShingleRoofing,
  essexFellsSlateRoofInstallationRepair,
  essexFellsWoodShakeRoofing,
  essexFellsMetalRoofInstallationRepair,
  essexFellsFlatRoofInstallationRepair,
  essexFellsTileRoofInstallationRepair,
  essexFellsCedarShakeRoofing,
  essexFellsRubberRoofingEpdm,

  // Commercial Roof Types (8)
  essexFellsTpoRoofingInstallation,
  essexFellsEpdmCommercialRoofing,
  essexFellsModifiedBitumenRoofing,
  essexFellsBuiltUpRoofing,
  essexFellsCommercialMetalRoofing,
  essexFellsPvcRoofing,
  essexFellsGreenRoofInstallation,
  essexFellsSprayFoamRoofing,

  // Components-Specialty (10)
  essexFellsRoofFlashingInstallationRepair,
  essexFellsChimneyFlashingRepair,
  essexFellsGutterInstallationRepair,
  essexFellsGutterGuardInstallation,
  essexFellsSkylightInstallationRepair,
  essexFellsFasciaInstallationRepair,
  essexFellsSoffitInstallationRepair,
  essexFellsRoofVentInstallationRepair,
  essexFellsRoofWaterproofing,
  essexFellsRoofDeckRepairReplacement,

  // Energy/Solar (5)
  essexFellsSolarPanelRoofingInstallation,
  essexFellsSolarShingleInstallation,
  essexFellsEnergyEfficientRoofingSolutions,
  essexFellsSiliconeRoofCoating,
  essexFellsSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  essexFellsCommercialRoofInstallation,
  essexFellsCommercialRoofRepair,
  essexFellsCommercialRoofReplacement,
  essexFellsRoofThermalImagingInspections,
  essexFellsInfraredRoofLeakDetection,

  // Design/Consultation (3)
  essexFellsCustomRoofDesignConsultation,
  essexFellsHistoricRoofRestoration,
  essexFellsRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  essexFellsFullRoofTearOff,
  essexFellsRoofOverlayInstallation,
  essexFellsReRoofing,
  essexFellsInsuranceRoofReplacement,
  essexFellsStormDamageRoofReplacement,
  essexFellsAgingRoofReplacement,
  essexFellsRoofReplacementAfterLeak,
  essexFellsFireDamageRoofReplacement,
  essexFellsRoofReplacementCost,
  essexFellsAsphaltShingleRoofReplacement,
  essexFellsMetalRoofReplacement,
  essexFellsSlateRoofReplacement,
  essexFellsTileRoofReplacement,
  essexFellsFlatRoofReplacement,
  essexFellsCedarShakeRoofReplacement,
]);
