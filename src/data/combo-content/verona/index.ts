import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── Repair-Maintenance (10) ────────────────────────────────────────────────
import { veronaRoofRepair } from './roof-repair';
import { veronaRoofReplacement } from './roof-replacement';
import { veronaEmergencyRoofRepair } from './emergency-roof-repair';
import { veronaRoofInspection } from './roof-inspection';
import { veronaRoofMaintenancePrograms } from './roof-maintenance-programs';
import { veronaRoofLeakRepair } from './roof-leak-repair';
import { veronaStormDamageRoofRepair } from './storm-damage-roof-repair';
import { veronaHailDamageRoofRepair } from './hail-damage-roof-repair';
import { veronaWindDamageRoofRepair } from './wind-damage-roof-repair';
import { veronaRoofCleaningMossRemoval } from './roof-cleaning-moss-removal';

// ─── Residential Roof Types (9) ─────────────────────────────────────────────
import { veronaResidentialRoofInstallation } from './residential-roof-installation';
import { veronaAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { veronaSlateRoofInstallationRepair } from './slate-roof-installation-repair';
import { veronaWoodShakeRoofing } from './wood-shake-roofing';
import { veronaMetalRoofInstallationRepair } from './metal-roof-installation-repair';
import { veronaFlatRoofInstallationRepair } from './flat-roof-installation-repair';
import { veronaTileRoofInstallationRepair } from './tile-roof-installation-repair';
import { veronaCedarShakeRoofing } from './cedar-shake-roofing';
import { veronaRubberRoofingEpdm } from './rubber-roofing-epdm';

// ─── Commercial Roof Types (8) ──────────────────────────────────────────────
import { veronaTpoRoofingInstallation } from './tpo-roofing-installation';
import { veronaEpdmCommercialRoofing } from './epdm-commercial-roofing';
import { veronaModifiedBitumenRoofing } from './modified-bitumen-roofing';
import { veronaBuiltUpRoofing } from './built-up-roofing';
import { veronaCommercialMetalRoofing } from './commercial-metal-roofing';
import { veronaPvcRoofing } from './pvc-roofing';
import { veronaGreenRoofInstallation } from './green-roof-installation';
import { veronaSprayFoamRoofing } from './spray-foam-roofing';

// ─── Components-Specialty (10) ──────────────────────────────────────────────
import { veronaRoofFlashingInstallationRepair } from './roof-flashing-installation-repair';
import { veronaChimneyFlashingRepair } from './chimney-flashing-repair';
import { veronaGutterInstallationRepair } from './gutter-installation-repair';
import { veronaGutterGuardInstallation } from './gutter-guard-installation';
import { veronaSkylightInstallationRepair } from './skylight-installation-repair';
import { veronaFasciaInstallationRepair } from './fascia-installation-repair';
import { veronaSoffitInstallationRepair } from './soffit-installation-repair';
import { veronaRoofVentInstallationRepair } from './roof-vent-installation-repair';
import { veronaRoofWaterproofing } from './roof-waterproofing';
import { veronaRoofDeckRepairReplacement } from './roof-deck-repair-replacement';

// ─── Energy/Solar (5) ───────────────────────────────────────────────────────
import { veronaSolarPanelRoofingInstallation } from './solar-panel-roofing-installation';
import { veronaSolarShingleInstallation } from './solar-shingle-installation';
import { veronaEnergyEfficientRoofingSolutions } from './energy-efficient-roofing-solutions';
import { veronaSiliconeRoofCoating } from './silicone-roof-coating';
import { veronaSiliconeElastomericRoofCoating } from './silicone-elastomeric-roof-coating';

// ─── Commercial Services (5) ────────────────────────────────────────────────
import { veronaCommercialRoofInstallation } from './commercial-roof-installation';
import { veronaCommercialRoofRepair } from './commercial-roof-repair';
import { veronaCommercialRoofReplacement } from './commercial-roof-replacement';
import { veronaRoofThermalImagingInspections } from './roof-thermal-imaging-inspections';
import { veronaInfraredRoofLeakDetection } from './infrared-roof-leak-detection';

// ─── Design/Consultation (3) ────────────────────────────────────────────────
import { veronaCustomRoofDesignConsultation } from './custom-roof-design-consultation';
import { veronaHistoricRoofRestoration } from './historic-roof-restoration';
import { veronaRoofIceDamPrevention } from './roof-ice-dam-prevention';

// ─── Replacement Sub-Pages (15) ─────────────────────────────────────────────
import { veronaFullRoofTearOff } from './full-roof-tear-off';
import { veronaRoofOverlayInstallation } from './roof-overlay-installation';
import { veronaReRoofing } from './re-roofing';
import { veronaInsuranceRoofReplacement } from './insurance-roof-replacement';
import { veronaStormDamageRoofReplacement } from './storm-damage-roof-replacement';
import { veronaAgingRoofReplacement } from './aging-roof-replacement';
import { veronaRoofReplacementAfterLeak } from './roof-replacement-after-leak';
import { veronaFireDamageRoofReplacement } from './fire-damage-roof-replacement';
import { veronaRoofReplacementCost } from './roof-replacement-cost';
import { veronaAsphaltShingleRoofReplacement } from './asphalt-shingle-roof-replacement';
import { veronaMetalRoofReplacement } from './metal-roof-replacement';
import { veronaSlateRoofReplacement } from './slate-roof-replacement';
import { veronaTileRoofReplacement } from './tile-roof-replacement';
import { veronaFlatRoofReplacement } from './flat-roof-replacement';
import { veronaCedarShakeRoofReplacement } from './cedar-shake-roof-replacement';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 65 Verona combo content objects at module load.
// Build crashes immediately on invalid data.

export const veronaComboContent = z.array(ComboContentSchema).parse([
  // Repair-Maintenance (10)
  veronaRoofRepair,
  veronaRoofReplacement,
  veronaEmergencyRoofRepair,
  veronaRoofInspection,
  veronaRoofMaintenancePrograms,
  veronaRoofLeakRepair,
  veronaStormDamageRoofRepair,
  veronaHailDamageRoofRepair,
  veronaWindDamageRoofRepair,
  veronaRoofCleaningMossRemoval,

  // Residential Roof Types (9)
  veronaResidentialRoofInstallation,
  veronaAsphaltShingleRoofing,
  veronaSlateRoofInstallationRepair,
  veronaWoodShakeRoofing,
  veronaMetalRoofInstallationRepair,
  veronaFlatRoofInstallationRepair,
  veronaTileRoofInstallationRepair,
  veronaCedarShakeRoofing,
  veronaRubberRoofingEpdm,

  // Commercial Roof Types (8)
  veronaTpoRoofingInstallation,
  veronaEpdmCommercialRoofing,
  veronaModifiedBitumenRoofing,
  veronaBuiltUpRoofing,
  veronaCommercialMetalRoofing,
  veronaPvcRoofing,
  veronaGreenRoofInstallation,
  veronaSprayFoamRoofing,

  // Components-Specialty (10)
  veronaRoofFlashingInstallationRepair,
  veronaChimneyFlashingRepair,
  veronaGutterInstallationRepair,
  veronaGutterGuardInstallation,
  veronaSkylightInstallationRepair,
  veronaFasciaInstallationRepair,
  veronaSoffitInstallationRepair,
  veronaRoofVentInstallationRepair,
  veronaRoofWaterproofing,
  veronaRoofDeckRepairReplacement,

  // Energy/Solar (5)
  veronaSolarPanelRoofingInstallation,
  veronaSolarShingleInstallation,
  veronaEnergyEfficientRoofingSolutions,
  veronaSiliconeRoofCoating,
  veronaSiliconeElastomericRoofCoating,

  // Commercial Services (5)
  veronaCommercialRoofInstallation,
  veronaCommercialRoofRepair,
  veronaCommercialRoofReplacement,
  veronaRoofThermalImagingInspections,
  veronaInfraredRoofLeakDetection,

  // Design/Consultation (3)
  veronaCustomRoofDesignConsultation,
  veronaHistoricRoofRestoration,
  veronaRoofIceDamPrevention,

  // Replacement Sub-Pages (15)
  veronaFullRoofTearOff,
  veronaRoofOverlayInstallation,
  veronaReRoofing,
  veronaInsuranceRoofReplacement,
  veronaStormDamageRoofReplacement,
  veronaAgingRoofReplacement,
  veronaRoofReplacementAfterLeak,
  veronaFireDamageRoofReplacement,
  veronaRoofReplacementCost,
  veronaAsphaltShingleRoofReplacement,
  veronaMetalRoofReplacement,
  veronaSlateRoofReplacement,
  veronaTileRoofReplacement,
  veronaFlatRoofReplacement,
  veronaCedarShakeRoofReplacement,
]);
