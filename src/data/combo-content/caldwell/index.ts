import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { caldwellRoofRepair } from './roof-repair';
import { caldwellRoofReplacement } from './roof-replacement';
import { caldwellEmergencyRoofRepair } from './emergency-roof-repair';
import { caldwellRoofInspection } from './roof-inspection';
import { caldwellRoofMaintenancePrograms } from './roof-maintenance-programs';
import { caldwellRoofLeakRepair } from './roof-leak-repair';
import { caldwellStormDamageRoofRepair } from './storm-damage-roof-repair';
import { caldwellHailDamageRoofRepair } from './hail-damage-roof-repair';
import { caldwellWindDamageRoofRepair } from './wind-damage-roof-repair';
import { caldwellRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { caldwellResidentialRoofInstallation } from './residential-roof-installation';
import { caldwellAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { caldwellSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { caldwellWoodShakeRoofing } from './wood-shake-roofing';
import { caldwellMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { caldwellFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { caldwellTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { caldwellCedarShakeRoofing } from './cedar-shake-roofing';
import { caldwellRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { caldwellTpoRoofingInstallation } from './tpo-roofing-installation';
import { caldwellEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { caldwellModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { caldwellBuiltUpRoofing } from './built-up-roofing';
import { caldwellCommercialMetalRoofing } from './commercial-metal-roofing';
import { caldwellPvcRoofing } from './pvc-roofing';
import { caldwellGreenRoofInstallation } from './green-roof-installation';
import { caldwellSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { caldwellRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { caldwellChimneyFlashingRepair } from './chimney-flashing-repair';
import { caldwellGutterInstallationRepair } from './gutter-installation-repair';
import { caldwellGutterGuardInstallation } from './gutter-guard-installation';
import { caldwellSkylightInstallationRepair } from './skylight-installation-repair';
import { caldwellFasciaInstallationRepair } from './fascia-installation-repair';
import { caldwellSoffitInstallationRepair } from './soffit-installation-repair';
import { caldwellRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { caldwellRoofWaterproofing } from './roof-waterproofing';
import { caldwellRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { caldwellSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { caldwellSolarShingleInstallation } from './solar-shingle-installation';
import { caldwellEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { caldwellSiliconeRoofCoating } from './silicone-roof-coating';
import { caldwellSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { caldwellCommercialRoofInstallation } from './commercial-roof-installation';
import { caldwellCommercialRoofRepair } from './commercial-roof-repair';
import { caldwellCommercialRoofReplacement } from './commercial-roof-replacement';
import { caldwellRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { caldwellInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { caldwellCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { caldwellHistoricRoofRestoration } from './historic-roof-restoration';
import { caldwellRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { caldwellFullRoofTearOff } from './full-roof-tear-off';
import { caldwellRoofOverlayInstallation } from './roof-overlay-installation';
import { caldwellReRoofing } from './re-roofing';
import { caldwellInsuranceRoofReplacement } from './insurance-roof-replacement';
import { caldwellStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { caldwellAgingRoofReplacement } from './aging-roof-replacement';
import { caldwellRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { caldwellFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { caldwellRoofReplacementCost } from './roof-replacement-cost';
import { caldwellAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { caldwellMetalRoofReplacement } from './metal-roof-replacement';
import { caldwellSlateRoofReplacement } from './slate-roof-replacement';
import { caldwellTileRoofReplacement } from './tile-roof-replacement';
import { caldwellFlatRoofReplacement } from './flat-roof-replacement';
import { caldwellCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Caldwell combo content objects at module load.
// Build crashes immediately on invalid data.

export const caldwellComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  caldwellRoofRepair,
  caldwellRoofReplacement,
  caldwellEmergencyRoofRepair,
  caldwellRoofInspection,
  caldwellRoofMaintenancePrograms,
  caldwellRoofLeakRepair,
  caldwellStormDamageRoofRepair,
  caldwellHailDamageRoofRepair,
  caldwellWindDamageRoofRepair,
  caldwellRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  caldwellResidentialRoofInstallation,
  caldwellAsphaltShingleRoofing,
  caldwellSlateRoofInstallationRepair,
  caldwellWoodShakeRoofing,
  caldwellMetalRoofInstallationRepair,
  caldwellFlatRoofInstallationRepair,
  caldwellTileRoofInstallationRepair,
  caldwellCedarShakeRoofing,
  caldwellRubberRoofingEpdm,

  // Commercial Roof Types (8)
  caldwellTpoRoofingInstallation,
  caldwellEpdmCommercialRoofing,
  caldwellModifiedBitumenRoofing,
  caldwellBuiltUpRoofing,
  caldwellCommercialMetalRoofing,
  caldwellPvcRoofing,
  caldwellGreenRoofInstallation,
  caldwellSprayFoamRoofing,

  // Components-Specialty (10)
  caldwellRoofFlashingInstallationRepair,
  caldwellChimneyFlashingRepair,
  caldwellGutterInstallationRepair,
  caldwellGutterGuardInstallation,
  caldwellSkylightInstallationRepair,
  caldwellFasciaInstallationRepair,
  caldwellSoffitInstallationRepair,
  caldwellRoofVentInstallationRepair,
  caldwellRoofWaterproofing,
  caldwellRoofDeckRepairReplacement,

  // Energy/Solar (5)
  caldwellSolarPanelRoofingInstallation,
  caldwellSolarShingleInstallation,
  caldwellEnergyEfficientRoofingSolutions,
  caldwellSiliconeRoofCoating,
  caldwellSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  caldwellCommercialRoofInstallation,
  caldwellCommercialRoofRepair,
  caldwellCommercialRoofReplacement,
  caldwellRoofThermalImagingInspections,
  caldwellInfraredRoofLeakDetection,

  // Design/Consultation (3)
  caldwellCustomRoofDesignConsultation,
  caldwellHistoricRoofRestoration,
  caldwellRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  caldwellFullRoofTearOff,
  caldwellRoofOverlayInstallation,
  caldwellReRoofing,
  caldwellInsuranceRoofReplacement,
  caldwellStormDamageRoofReplacement,
  caldwellAgingRoofReplacement,
  caldwellRoofReplacementAfterLeak,
  caldwellFireDamageRoofReplacement,
  caldwellRoofReplacementCost,
  caldwellAsphaltShingleRoofReplacement,
  caldwellMetalRoofReplacement,
  caldwellSlateRoofReplacement,
  caldwellTileRoofReplacement,
  caldwellFlatRoofReplacement,
  caldwellCedarShakeRoofReplacement,
]);
