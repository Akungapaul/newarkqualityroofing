import { z } from 'zod';
import { ComboContentSchema } from '../schema';

import { millburnRoofRepair } from './roof-repair';
import { millburnAsphaltShingleRoofing } from './asphalt-shingle-roofing';
import { millburnTpoRoofingInstallation } from './tpo-roofing-installation';
import { millburnGutterInstallationRepair } from './gutter-installation-repair';
import { millburnCommercialRoofInstallation } from './commercial-roof-installation';

// ─── Millburn Combo Content (5 services) ────────────────────────────────────
// Affluent Suburban representative: estate properties, premium materials,
// architect collaboration, copper/slate expertise, luxury market focus.

export const millburnComboContent = z.array(ComboContentSchema).parse([
  millburnRoofRepair,
  millburnAsphaltShingleRoofing,
  millburnTpoRoofingInstallation,
  millburnGutterInstallationRepair,
  millburnCommercialRoofInstallation,
]);
