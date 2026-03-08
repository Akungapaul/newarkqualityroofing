import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { bloomfieldRoofRepair } from './roof-repair';
import { bloomfieldRoofReplacement } from './roof-replacement';
import { bloomfieldEmergencyRoofRepair } from './emergency-roof-repair';
import { bloomfieldRoofInspection } from './roof-inspection';
import { bloomfieldRoofMaintenancePrograms } from './roof-maintenance-programs';
import { bloomfieldRoofLeakRepair } from './roof-leak-repair';
import { bloomfieldStormDamageRoofRepair } from './storm-damage-roof-repair';
import { bloomfieldHailDamageRoofRepair } from './hail-damage-roof-repair';
import { bloomfieldWindDamageRoofRepair } from './wind-damage-roof-repair';
import { bloomfieldRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { bloomfieldResidentialRoofInstallation } from './residential-roof-installation';
import { bloomfieldAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { bloomfieldSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { bloomfieldWoodShakeRoofing } from './wood-shake-roofing';
import { bloomfieldMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { bloomfieldFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { bloomfieldTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { bloomfieldCedarShakeRoofing } from './cedar-shake-roofing';
import { bloomfieldRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { bloomfieldTpoRoofingInstallation } from './tpo-roofing-installation';
import { bloomfieldEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { bloomfieldModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { bloomfieldBuiltUpRoofing } from './built-up-roofing';
import { bloomfieldCommercialMetalRoofing } from './commercial-metal-roofing';
import { bloomfieldPvcRoofing } from './pvc-roofing';
import { bloomfieldGreenRoofInstallation } from './green-roof-installation';
import { bloomfieldSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { bloomfieldRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { bloomfieldChimneyFlashingRepair } from './chimney-flashing-repair';
import { bloomfieldGutterInstallationRepair } from './gutter-installation-repair';
import { bloomfieldGutterGuardInstallation } from './gutter-guard-installation';
import { bloomfieldSkylightInstallationRepair } from './skylight-installation-repair';
import { bloomfieldFasciaInstallationRepair } from './fascia-installation-repair';
import { bloomfieldSoffitInstallationRepair } from './soffit-installation-repair';
import { bloomfieldRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { bloomfieldRoofWaterproofing } from './roof-waterproofing';
import { bloomfieldRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { bloomfieldSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { bloomfieldSolarShingleInstallation } from './solar-shingle-installation';
import { bloomfieldEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { bloomfieldSiliconeRoofCoating } from './silicone-roof-coating';
import { bloomfieldSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { bloomfieldCommercialRoofInstallation } from './commercial-roof-installation';
import { bloomfieldCommercialRoofRepair } from './commercial-roof-repair';
import { bloomfieldCommercialRoofReplacement } from './commercial-roof-replacement';
import { bloomfieldRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { bloomfieldInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { bloomfieldCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { bloomfieldHistoricRoofRestoration } from './historic-roof-restoration';
import { bloomfieldRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { bloomfieldFullRoofTearOff } from './full-roof-tear-off';
import { bloomfieldRoofOverlayInstallation } from './roof-overlay-installation';
import { bloomfieldReRoofing } from './re-roofing';
import { bloomfieldInsuranceRoofReplacement } from './insurance-roof-replacement';
import { bloomfieldStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { bloomfieldAgingRoofReplacement } from './aging-roof-replacement';
import { bloomfieldRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { bloomfieldFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { bloomfieldRoofReplacementCost } from './roof-replacement-cost';
import { bloomfieldAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { bloomfieldMetalRoofReplacement } from './metal-roof-replacement';
import { bloomfieldSlateRoofReplacement } from './slate-roof-replacement';
import { bloomfieldTileRoofReplacement } from './tile-roof-replacement';
import { bloomfieldFlatRoofReplacement } from './flat-roof-replacement';
import { bloomfieldCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Bloomfield combo content objects at module load.
// Build crashes immediately on invalid data.

export const bloomfieldComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  bloomfieldRoofRepair,
  bloomfieldRoofReplacement,
  bloomfieldEmergencyRoofRepair,
  bloomfieldRoofInspection,
  bloomfieldRoofMaintenancePrograms,
  bloomfieldRoofLeakRepair,
  bloomfieldStormDamageRoofRepair,
  bloomfieldHailDamageRoofRepair,
  bloomfieldWindDamageRoofRepair,
  bloomfieldRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  bloomfieldResidentialRoofInstallation,
  bloomfieldAsphaltShingleRoofing,
  bloomfieldSlateRoofInstallationRepair,
  bloomfieldWoodShakeRoofing,
  bloomfieldMetalRoofInstallationRepair,
  bloomfieldFlatRoofInstallationRepair,
  bloomfieldTileRoofInstallationRepair,
  bloomfieldCedarShakeRoofing,
  bloomfieldRubberRoofingEpdm,

  // Commercial Roof Types (8)
  bloomfieldTpoRoofingInstallation,
  bloomfieldEpdmCommercialRoofing,
  bloomfieldModifiedBitumenRoofing,
  bloomfieldBuiltUpRoofing,
  bloomfieldCommercialMetalRoofing,
  bloomfieldPvcRoofing,
  bloomfieldGreenRoofInstallation,
  bloomfieldSprayFoamRoofing,

  // Components-Specialty (10)
  bloomfieldRoofFlashingInstallationRepair,
  bloomfieldChimneyFlashingRepair,
  bloomfieldGutterInstallationRepair,
  bloomfieldGutterGuardInstallation,
  bloomfieldSkylightInstallationRepair,
  bloomfieldFasciaInstallationRepair,
  bloomfieldSoffitInstallationRepair,
  bloomfieldRoofVentInstallationRepair,
  bloomfieldRoofWaterproofing,
  bloomfieldRoofDeckRepairReplacement,

  // Energy/Solar (5)
  bloomfieldSolarPanelRoofingInstallation,
  bloomfieldSolarShingleInstallation,
  bloomfieldEnergyEfficientRoofingSolutions,
  bloomfieldSiliconeRoofCoating,
  bloomfieldSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  bloomfieldCommercialRoofInstallation,
  bloomfieldCommercialRoofRepair,
  bloomfieldCommercialRoofReplacement,
  bloomfieldRoofThermalImagingInspections,
  bloomfieldInfraredRoofLeakDetection,

  // Design/Consultation (3)
  bloomfieldCustomRoofDesignConsultation,
  bloomfieldHistoricRoofRestoration,
  bloomfieldRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  bloomfieldFullRoofTearOff,
  bloomfieldRoofOverlayInstallation,
  bloomfieldReRoofing,
  bloomfieldInsuranceRoofReplacement,
  bloomfieldStormDamageRoofReplacement,
  bloomfieldAgingRoofReplacement,
  bloomfieldRoofReplacementAfterLeak,
  bloomfieldFireDamageRoofReplacement,
  bloomfieldRoofReplacementCost,
  bloomfieldAsphaltShingleRoofReplacement,
  bloomfieldMetalRoofReplacement,
  bloomfieldSlateRoofReplacement,
  bloomfieldTileRoofReplacement,
  bloomfieldFlatRoofReplacement,
  bloomfieldCedarShakeRoofReplacement,
]);
