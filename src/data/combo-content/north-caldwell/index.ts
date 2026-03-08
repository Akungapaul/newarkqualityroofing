import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { northCaldwellRoofRepair } from './roof-repair';
import { northCaldwellRoofReplacement } from './roof-replacement';
import { northCaldwellEmergencyRoofRepair } from './emergency-roof-repair';
import { northCaldwellRoofInspection } from './roof-inspection';
import { northCaldwellRoofMaintenancePrograms } from './roof-maintenance-programs';
import { northCaldwellRoofLeakRepair } from './roof-leak-repair';
import { northCaldwellStormDamageRoofRepair } from './storm-damage-roof-repair';
import { northCaldwellHailDamageRoofRepair } from './hail-damage-roof-repair';
import { northCaldwellWindDamageRoofRepair } from './wind-damage-roof-repair';
import { northCaldwellRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { northCaldwellResidentialRoofInstallation } from './residential-roof-installation';
import { northCaldwellAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { northCaldwellSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { northCaldwellWoodShakeRoofing } from './wood-shake-roofing';
import { northCaldwellMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { northCaldwellFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { northCaldwellTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { northCaldwellCedarShakeRoofing } from './cedar-shake-roofing';
import { northCaldwellRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { northCaldwellTpoRoofingInstallation } from './tpo-roofing-installation';
import { northCaldwellEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { northCaldwellModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { northCaldwellBuiltUpRoofing } from './built-up-roofing';
import { northCaldwellCommercialMetalRoofing } from './commercial-metal-roofing';
import { northCaldwellPvcRoofing } from './pvc-roofing';
import { northCaldwellGreenRoofInstallation } from './green-roof-installation';
import { northCaldwellSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { northCaldwellRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { northCaldwellChimneyFlashingRepair } from './chimney-flashing-repair';
import { northCaldwellGutterInstallationRepair } from './gutter-installation-repair';
import { northCaldwellGutterGuardInstallation } from './gutter-guard-installation';
import { northCaldwellSkylightInstallationRepair } from './skylight-installation-repair';
import { northCaldwellFasciaInstallationRepair } from './fascia-installation-repair';
import { northCaldwellSoffitInstallationRepair } from './soffit-installation-repair';
import { northCaldwellRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { northCaldwellRoofWaterproofing } from './roof-waterproofing';
import { northCaldwellRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { northCaldwellSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { northCaldwellSolarShingleInstallation } from './solar-shingle-installation';
import { northCaldwellEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { northCaldwellSiliconeRoofCoating } from './silicone-roof-coating';
import { northCaldwellSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { northCaldwellCommercialRoofInstallation } from './commercial-roof-installation';
import { northCaldwellCommercialRoofRepair } from './commercial-roof-repair';
import { northCaldwellCommercialRoofReplacement } from './commercial-roof-replacement';
import { northCaldwellRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { northCaldwellInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { northCaldwellCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { northCaldwellHistoricRoofRestoration } from './historic-roof-restoration';
import { northCaldwellRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { northCaldwellFullRoofTearOff } from './full-roof-tear-off';
import { northCaldwellRoofOverlayInstallation } from './roof-overlay-installation';
import { northCaldwellReRoofing } from './re-roofing';
import { northCaldwellInsuranceRoofReplacement } from './insurance-roof-replacement';
import { northCaldwellStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { northCaldwellAgingRoofReplacement } from './aging-roof-replacement';
import { northCaldwellRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { northCaldwellFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { northCaldwellRoofReplacementCost } from './roof-replacement-cost';
import { northCaldwellAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { northCaldwellMetalRoofReplacement } from './metal-roof-replacement';
import { northCaldwellSlateRoofReplacement } from './slate-roof-replacement';
import { northCaldwellTileRoofReplacement } from './tile-roof-replacement';
import { northCaldwellFlatRoofReplacement } from './flat-roof-replacement';
import { northCaldwellCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 North Caldwell combo content objects at module load.
// Build crashes immediately on invalid data.

export const northCaldwellComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  northCaldwellRoofRepair,
  northCaldwellRoofReplacement,
  northCaldwellEmergencyRoofRepair,
  northCaldwellRoofInspection,
  northCaldwellRoofMaintenancePrograms,
  northCaldwellRoofLeakRepair,
  northCaldwellStormDamageRoofRepair,
  northCaldwellHailDamageRoofRepair,
  northCaldwellWindDamageRoofRepair,
  northCaldwellRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  northCaldwellResidentialRoofInstallation,
  northCaldwellAsphaltShingleRoofing,
  northCaldwellSlateRoofInstallationRepair,
  northCaldwellWoodShakeRoofing,
  northCaldwellMetalRoofInstallationRepair,
  northCaldwellFlatRoofInstallationRepair,
  northCaldwellTileRoofInstallationRepair,
  northCaldwellCedarShakeRoofing,
  northCaldwellRubberRoofingEpdm,

  // Commercial Roof Types (8)
  northCaldwellTpoRoofingInstallation,
  northCaldwellEpdmCommercialRoofing,
  northCaldwellModifiedBitumenRoofing,
  northCaldwellBuiltUpRoofing,
  northCaldwellCommercialMetalRoofing,
  northCaldwellPvcRoofing,
  northCaldwellGreenRoofInstallation,
  northCaldwellSprayFoamRoofing,

  // Components-Specialty (10)
  northCaldwellRoofFlashingInstallationRepair,
  northCaldwellChimneyFlashingRepair,
  northCaldwellGutterInstallationRepair,
  northCaldwellGutterGuardInstallation,
  northCaldwellSkylightInstallationRepair,
  northCaldwellFasciaInstallationRepair,
  northCaldwellSoffitInstallationRepair,
  northCaldwellRoofVentInstallationRepair,
  northCaldwellRoofWaterproofing,
  northCaldwellRoofDeckRepairReplacement,

  // Energy/Solar (5)
  northCaldwellSolarPanelRoofingInstallation,
  northCaldwellSolarShingleInstallation,
  northCaldwellEnergyEfficientRoofingSolutions,
  northCaldwellSiliconeRoofCoating,
  northCaldwellSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  northCaldwellCommercialRoofInstallation,
  northCaldwellCommercialRoofRepair,
  northCaldwellCommercialRoofReplacement,
  northCaldwellRoofThermalImagingInspections,
  northCaldwellInfraredRoofLeakDetection,

  // Design/Consultation (3)
  northCaldwellCustomRoofDesignConsultation,
  northCaldwellHistoricRoofRestoration,
  northCaldwellRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  northCaldwellFullRoofTearOff,
  northCaldwellRoofOverlayInstallation,
  northCaldwellReRoofing,
  northCaldwellInsuranceRoofReplacement,
  northCaldwellStormDamageRoofReplacement,
  northCaldwellAgingRoofReplacement,
  northCaldwellRoofReplacementAfterLeak,
  northCaldwellFireDamageRoofReplacement,
  northCaldwellRoofReplacementCost,
  northCaldwellAsphaltShingleRoofReplacement,
  northCaldwellMetalRoofReplacement,
  northCaldwellSlateRoofReplacement,
  northCaldwellTileRoofReplacement,
  northCaldwellFlatRoofReplacement,
  northCaldwellCedarShakeRoofReplacement,
]);
