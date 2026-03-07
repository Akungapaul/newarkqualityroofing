import { z } from 'zod';
import { ComboContentSchema } from '../schema';

import { bloomfieldRoofRepair } from './roof-repair';
import { bloomfieldAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { bloomfieldTpoRoofingInstallation } from './tpo-roofing-installation';
import { bloomfieldGutterInstallationRepair } from './gutter-installation-repair';
import { bloomfieldCommercialRoofInstallation } from './commercial-roof-installation';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 5 Bloomfield combo content objects at module load.
// Build crashes immediately on invalid data.

export const bloomfieldComboContent = z.array(ComboContentSchema).parse([
  bloomfieldRoofRepair,
  bloomfieldAsphaltShingleRoofing,
  bloomfieldTpoRoofingInstallation,
  bloomfieldGutterInstallationRepair,
  bloomfieldCommercialRoofInstallation,
]);
