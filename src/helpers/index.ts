import { FilterData } from './types';

export const getCustomDataKey = (filter: FilterData) => {
  return `${filter.country.code}_${filter.timePeriod.startYear}-${filter.timePeriod.endYear}_${filter.climateVariable}`;
};
