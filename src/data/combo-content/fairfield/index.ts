import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { fairfieldRoofRepair } from './roof-repair';
import { fairfieldRoofReplacement } from './roof-replacement';
import { fairfieldEmergencyRoofRepair } from './emergency-roof-repair';
import { fairfieldRoofInspection } from './roof-inspection';
import { fairfieldRoofMaintenancePrograms } from './roof-maintenance-programs';
import { fairfieldRoofLeakRepair } from './roof-leak-repair';
import { fairfieldStormDamageRoofRepair } from './storm-damage-roof-repair';
import { fairfieldHailDamageRoofRepair } from './hail-damage-roof-repair';
import { fairfieldWindDamageRoofRepair } from './wind-damage-roof-repair';
import { fairfieldRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { fairfieldResidentialRoofInstallation } from './residential-roof-installation';
import { fairfieldAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { fairfieldSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { fairfieldWoodShakeRoofing } from './wood-shake-roofing';
import { fairfieldMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { fairfieldFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { fairfieldTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { fairfieldCedarShakeRoofing } from './cedar-shake-roofing';
import { fairfieldRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { fairfieldTpoRoofingInstallation } from './tpo-roofing-installation';
import { fairfieldEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { fairfieldModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { fairfieldBuiltUpRoofing } from './built-up-roofing';
import { fairfieldCommercialMetalRoofing } from './commercial-metal-roofing';
import { fairfieldPvcRoofing } from './pvc-roofing';
import { fairfieldGreenRoofInstallation } from './green-roof-installation';
import { fairfieldSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { fairfieldRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { fairfieldChimneyFlashingRepair } from './chimney-flashing-repair';
import { fairfieldGutterInstallationRepair } from './gutter-installation-repair';
import { fairfieldGutterGuardInstallation } from './gutter-guard-installation';
import { fairfieldSkylightInstallationRepair } from './skylight-installation-repair';
import { fairfieldFasciaInstallationRepair } from './fascia-installation-repair';
import { fairfieldSoffitInstallationRepair } from './soffit-installation-repair';
import { fairfieldRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { fairfieldRoofWaterproofing } from './roof-waterproofing';
import { fairfieldRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { fairfieldSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { fairfieldSolarShingleInstallation } from './solar-shingle-installation';
import { fairfieldEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { fairfieldSiliconeRoofCoating } from './silicone-roof-coating';
import { fairfieldSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { fairfieldCommercialRoofInstallation } from './commercial-roof-installation';
import { fairfieldCommercialRoofRepair } from './commercial-roof-repair';
import { fairfieldCommercialRoofReplacement } from './commercial-roof-replacement';
import { fairfieldRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { fairfieldInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { fairfieldCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { fairfieldHistoricRoofRestoration } from './historic-roof-restoration';
import { fairfieldRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { fairfieldFullRoofTearOff } from './full-roof-tear-off';
import { fairfieldRoofOverlayInstallation } from './roof-overlay-installation';
import { fairfieldReRoofing } from './re-roofing';
import { fairfieldInsuranceRoofReplacement } from './insurance-roof-replacement';
import { fairfieldStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { fairfieldAgingRoofReplacement } from './aging-roof-replacement';
import { fairfieldRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { fairfieldFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { fairfieldRoofReplacementCost } from './roof-replacement-cost';
import { fairfieldAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { fairfieldMetalRoofReplacement } from './metal-roof-replacement';
import { fairfieldSlateRoofReplacement } from './slate-roof-replacement';
import { fairfieldTileRoofReplacement } from './tile-roof-replacement';
import { fairfieldFlatRoofReplacement } from './flat-roof-replacement';
import { fairfieldCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Fairfield combo content objects at module load.
// Build crashes immediately on invalid data.

export const fairfieldComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  fairfieldRoofRepair,
  fairfieldRoofReplacement,
  fairfieldEmergencyRoofRepair,
  fairfieldRoofInspection,
  fairfieldRoofMaintenancePrograms,
  fairfieldRoofLeakRepair,
  fairfieldStormDamageRoofRepair,
  fairfieldHailDamageRoofRepair,
  fairfieldWindDamageRoofRepair,
  fairfieldRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  fairfieldResidentialRoofInstallation,
  fairfieldAsphaltShingleRoofing,
  fairfieldSlateRoofInstallationRepair,
  fairfieldWoodShakeRoofing,
  fairfieldMetalRoofInstallationRepair,
  fairfieldFlatRoofInstallationRepair,
  fairfieldTileRoofInstallationRepair,
  fairfieldCedarShakeRoofing,
  fairfieldRubberRoofingEpdm,

  // Commercial Roof Types (8)
  fairfieldTpoRoofingInstallation,
  fairfieldEpdmCommercialRoofing,
  fairfieldModifiedBitumenRoofing,
  fairfieldBuiltUpRoofing,
  fairfieldCommercialMetalRoofing,
  fairfieldPvcRoofing,
  fairfieldGreenRoofInstallation,
  fairfieldSprayFoamRoofing,

  // Components-Specialty (10)
  fairfieldRoofFlashingInstallationRepair,
  fairfieldChimneyFlashingRepair,
  fairfieldGutterInstallationRepair,
  fairfieldGutterGuardInstallation,
  fairfieldSkylightInstallationRepair,
  fairfieldFasciaInstallationRepair,
  fairfieldSoffitInstallationRepair,
  fairfieldRoofVentInstallationRepair,
  fairfieldRoofWaterproofing,
  fairfieldRoofDeckRepairReplacement,

  // Energy/Solar (5)
  fairfieldSolarPanelRoofingInstallation,
  fairfieldSolarShingleInstallation,
  fairfieldEnergyEfficientRoofingSolutions,
  fairfieldSiliconeRoofCoating,
  fairfieldSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  fairfieldCommercialRoofInstallation,
  fairfieldCommercialRoofRepair,
  fairfieldCommercialRoofReplacement,
  fairfieldRoofThermalImagingInspections,
  fairfieldInfraredRoofLeakDetection,

  // Design/Consultation (3)
  fairfieldCustomRoofDesignConsultation,
  fairfieldHistoricRoofRestoration,
  fairfieldRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  fairfieldFullRoofTearOff,
  fairfieldRoofOverlayInstallation,
  fairfieldReRoofing,
  fairfieldInsuranceRoofReplacement,
  fairfieldStormDamageRoofReplacement,
  fairfieldAgingRoofReplacement,
  fairfieldRoofReplacementAfterLeak,
  fairfieldFireDamageRoofReplacement,
  fairfieldRoofReplacementCost,
  fairfieldAsphaltShingleRoofReplacement,
  fairfieldMetalRoofReplacement,
  fairfieldSlateRoofReplacement,
  fairfieldTileRoofReplacement,
  fairfieldFlatRoofReplacement,
  fairfieldCedarShakeRoofReplacement,
]);
