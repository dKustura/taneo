import { ClimateVariable, CountryCode, Measure } from 'helpers/types';

export const getQueryKey = (
  measure: Measure,
  variable: ClimateVariable,
  countryCode: CountryCode,
  startYear: number,
  endYear: number
) => {
  return [{ measure, variable, countryCode, startYear, endYear }] as const;
};
