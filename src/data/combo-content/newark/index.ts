import { z } from 'zod';
import { ComboContentSchema } from '../schema';
import { newarkRoofRepair } from './roof-repair';
import { newarkRoofReplacement } from './roof-replacement';
import { newarkEmergencyRoofRepair } from './emergency-roof-repair';
import { newarkRoofInspection } from './roof-inspection';
import { newarkRoofMaintenancePrograms } from './roof-maintenance-programs';

// Validated at module level -- build crashes on invalid data
export const newarkComboContent = z.array(ComboContentSchema).parse([
  newarkRoofRepair,
  newarkRoofReplacement,
  newarkEmergencyRoofRepair,
  newarkRoofInspection,
  newarkRoofMaintenancePrograms,
]);
