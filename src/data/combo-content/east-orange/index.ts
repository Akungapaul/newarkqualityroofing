import { z } from 'zod';
import { ComboContentSchema } from '../schema';

// ─── East Orange Combo Content (5 sample services) ─────────────────────────
import { eastOrangeRoofRepair } from './roof-repair';
import { eastOrangeAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { eastOrangeTpoRoofingInstallation } from './tpo-roofing-installation';
import { eastOrangeGutterInstallationRepair } from './gutter-installation-repair';
import { eastOrangeCommercialRoofInstallation } from './commercial-roof-installation';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 5 East Orange combo content objects at module load.
// Build crashes immediately on invalid data.

export const eastOrangeComboContent = z.array(ComboContentSchema).parse([
  eastOrangeRoofRepair,
  eastOrangeAsphaltShingleRoofing,
  eastOrangeTpoRoofingInstallation,
  eastOrangeGutterInstallationRepair,
  eastOrangeCommercialRoofInstallation,
]);
