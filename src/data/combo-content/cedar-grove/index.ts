import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { cedarGroveRoofRepair } from './roof-repair';
import { cedarGroveRoofReplacement } from './roof-replacement';
import { cedarGroveEmergencyRoofRepair } from './emergency-roof-repair';
import { cedarGroveRoofInspection } from './roof-inspection';
import { cedarGroveRoofMaintenancePrograms } from './roof-maintenance-programs';
import { cedarGroveRoofLeakRepair } from './roof-leak-repair';
import { cedarGroveStormDamageRoofRepair } from './storm-damage-roof-repair';
import { cedarGroveHailDamageRoofRepair } from './hail-damage-roof-repair';
import { cedarGroveWindDamageRoofRepair } from './wind-damage-roof-repair';
import { cedarGroveRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { cedarGroveResidentialRoofInstallation } from './residential-roof-installation';
import { cedarGroveAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { cedarGroveSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { cedarGroveWoodShakeRoofing } from './wood-shake-roofing';
import { cedarGroveMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { cedarGroveFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { cedarGroveTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { cedarGroveCedarShakeRoofing } from './cedar-shake-roofing';
import { cedarGroveRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { cedarGroveTpoRoofingInstallation } from './tpo-roofing-installation';
import { cedarGroveEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { cedarGroveModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { cedarGroveBuiltUpRoofing } from './built-up-roofing';
import { cedarGroveCommercialMetalRoofing } from './commercial-metal-roofing';
import { cedarGrovePvcRoofing } from './pvc-roofing';
import { cedarGroveGreenRoofInstallation } from './green-roof-installation';
import { cedarGroveSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { cedarGroveRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { cedarGroveChimneyFlashingRepair } from './chimney-flashing-repair';
import { cedarGroveGutterInstallationRepair } from './gutter-installation-repair';
import { cedarGroveGutterGuardInstallation } from './gutter-guard-installation';
import { cedarGroveSkylightInstallationRepair } from './skylight-installation-repair';
import { cedarGroveFasciaInstallationRepair } from './fascia-installation-repair';
import { cedarGroveSoffitInstallationRepair } from './soffit-installation-repair';
import { cedarGroveRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { cedarGroveRoofWaterproofing } from './roof-waterproofing';
import { cedarGroveRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { cedarGroveSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { cedarGroveSolarShingleInstallation } from './solar-shingle-installation';
import { cedarGroveEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { cedarGroveSiliconeRoofCoating } from './silicone-roof-coating';
import { cedarGroveSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { cedarGroveCommercialRoofInstallation } from './commercial-roof-installation';
import { cedarGroveCommercialRoofRepair } from './commercial-roof-repair';
import { cedarGroveCommercialRoofReplacement } from './commercial-roof-replacement';
import { cedarGroveRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { cedarGroveInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { cedarGroveCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { cedarGroveHistoricRoofRestoration } from './historic-roof-restoration';
import { cedarGroveRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { cedarGroveFullRoofTearOff } from './full-roof-tear-off';
import { cedarGroveRoofOverlayInstallation } from './roof-overlay-installation';
import { cedarGroveReRoofing } from './re-roofing';
import { cedarGroveInsuranceRoofReplacement } from './insurance-roof-replacement';
import { cedarGroveStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { cedarGroveAgingRoofReplacement } from './aging-roof-replacement';
import { cedarGroveRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { cedarGroveFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { cedarGroveRoofReplacementCost } from './roof-replacement-cost';
import { cedarGroveAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { cedarGroveMetalRoofReplacement } from './metal-roof-replacement';
import { cedarGroveSlateRoofReplacement } from './slate-roof-replacement';
import { cedarGroveTileRoofReplacement } from './tile-roof-replacement';
import { cedarGroveFlatRoofReplacement } from './flat-roof-replacement';
import { cedarGroveCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Cedar Grove combo content objects at module load.
// Build crashes immediately on invalid data.

export const cedarGroveComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  cedarGroveRoofRepair,
  cedarGroveRoofReplacement,
  cedarGroveEmergencyRoofRepair,
  cedarGroveRoofInspection,
  cedarGroveRoofMaintenancePrograms,
  cedarGroveRoofLeakRepair,
  cedarGroveStormDamageRoofRepair,
  cedarGroveHailDamageRoofRepair,
  cedarGroveWindDamageRoofRepair,
  cedarGroveRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  cedarGroveResidentialRoofInstallation,
  cedarGroveAsphaltShingleRoofing,
  cedarGroveSlateRoofInstallationRepair,
  cedarGroveWoodShakeRoofing,
  cedarGroveMetalRoofInstallationRepair,
  cedarGroveFlatRoofInstallationRepair,
  cedarGroveTileRoofInstallationRepair,
  cedarGroveCedarShakeRoofing,
  cedarGroveRubberRoofingEpdm,

  // Commercial Roof Types (8)
  cedarGroveTpoRoofingInstallation,
  cedarGroveEpdmCommercialRoofing,
  cedarGroveModifiedBitumenRoofing,
  cedarGroveBuiltUpRoofing,
  cedarGroveCommercialMetalRoofing,
  cedarGrovePvcRoofing,
  cedarGroveGreenRoofInstallation,
  cedarGroveSprayFoamRoofing,

  // Components-Specialty (10)
  cedarGroveRoofFlashingInstallationRepair,
  cedarGroveChimneyFlashingRepair,
  cedarGroveGutterInstallationRepair,
  cedarGroveGutterGuardInstallation,
  cedarGroveSkylightInstallationRepair,
  cedarGroveFasciaInstallationRepair,
  cedarGroveSoffitInstallationRepair,
  cedarGroveRoofVentInstallationRepair,
  cedarGroveRoofWaterproofing,
  cedarGroveRoofDeckRepairReplacement,

  // Energy/Solar (5)
  cedarGroveSolarPanelRoofingInstallation,
  cedarGroveSolarShingleInstallation,
  cedarGroveEnergyEfficientRoofingSolutions,
  cedarGroveSiliconeRoofCoating,
  cedarGroveSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  cedarGroveCommercialRoofInstallation,
  cedarGroveCommercialRoofRepair,
  cedarGroveCommercialRoofReplacement,
  cedarGroveRoofThermalImagingInspections,
  cedarGroveInfraredRoofLeakDetection,

  // Design/Consultation (3)
  cedarGroveCustomRoofDesignConsultation,
  cedarGroveHistoricRoofRestoration,
  cedarGroveRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  cedarGroveFullRoofTearOff,
  cedarGroveRoofOverlayInstallation,
  cedarGroveReRoofing,
  cedarGroveInsuranceRoofReplacement,
  cedarGroveStormDamageRoofReplacement,
  cedarGroveAgingRoofReplacement,
  cedarGroveRoofReplacementAfterLeak,
  cedarGroveFireDamageRoofReplacement,
  cedarGroveRoofReplacementCost,
  cedarGroveAsphaltShingleRoofReplacement,
  cedarGroveMetalRoofReplacement,
  cedarGroveSlateRoofReplacement,
  cedarGroveTileRoofReplacement,
  cedarGroveFlatRoofReplacement,
  cedarGroveCedarShakeRoofReplacement,
]);
