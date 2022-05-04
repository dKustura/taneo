import { scaleLinear } from 'd3-scale';
import { colorRanges } from 'components/Theme/colors';
import { GCM_DISPLAY_NAMES } from './constants';

export const getDisplayNameForGCM = (gcm: string) => {
  return GCM_DISPLAY_NAMES[gcm] || gcm;
};

export const getTemperatureColor = (min: number, max: number, value: number) => {
  return getColorFromScale(value, [min, max], colorRanges.temperature);
};
export const getPrecipitationColor = (min: number, max: number, value: number) => {
  return getColorFromScale(value, [min, max], colorRanges.precipitation);
};

const getColorFromScale = (value: number, domain: number[], range: string[]) => {
  const scale = scaleLinear(domain, range);
  return scale(value);
};

export const getMinMax = (values: number[]) => ({
  min: Math.min(...values),
  max: Math.max(...values),
});
