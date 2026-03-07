import { z } from 'zod';
import { ComboContentSchema } from '../schema';

import { caldwellRoofRepair } from './roof-repair';
import { caldwellAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { caldwellTpoRoofingInstallation } from './tpo-roofing-installation';
import { caldwellGutterInstallationRepair } from './gutter-installation-repair';
import { caldwellCommercialRoofInstallation } from './commercial-roof-installation';

// ─── Validated aggregator ───────────────────────────────────────────────────
// Zod validates all 5 Caldwell combo content objects at module load.
// Build crashes immediately on invalid data.

export const caldwellComboContent = z.array(ComboContentSchema).parse([
  caldwellRoofRepair,
  caldwellAsphaltShingleRoofing,
  caldwellTpoRoofingInstallation,
  caldwellGutterInstallationRepair,
  caldwellCommercialRoofInstallation,
]);
