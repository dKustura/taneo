import { GCM_DISPLAY_NAMES } from './constants';

export const getDisplayNameForGCM = (gcm: string) => {
  return GCM_DISPLAY_NAMES[gcm] || 'N/A';
};
