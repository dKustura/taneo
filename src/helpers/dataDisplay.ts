import { GCM_DISPLAY_NAMES } from './constants';

export const getGCMDisplayName = (gcm: string) => {
  return GCM_DISPLAY_NAMES[gcm] || 'N/A';
};
