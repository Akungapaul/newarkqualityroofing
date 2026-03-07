import { z } from 'zod';
import { ComboContentSchema } from '../schema';

import { montclairRoofRepair } from './roof-repair';
import { montclairAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { montclairTpoRoofingInstallation } from './tpo-roofing-installation';
import { montclairGutterInstallationRepair } from './gutter-installation-repair';
import { montclairCommercialRoofInstallation } from './commercial-roof-installation';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 5 Montclair combo content objects at module load.
// Build crashes immediately on invalid data.

export const montclairComboContent = z.array(ComboContentSchema).parse([
  montclairRoofRepair,
  montclairAsphaltShingleRoofing,
  montclairTpoRoofingInstallation,
  montclairGutterInstallationRepair,
  montclairCommercialRoofInstallation,
]);
