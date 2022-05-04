import { UseQueryResult } from 'react-query';
import { AnnualAverageData, GcmData, MonthlyAverageData } from 'api/models';
import { Country, CountryUnion } from './types';

export const isCountryUnion = (country: Country): country is CountryUnion => {
  return (country as CountryUnion).memberCountries !== undefined;
};

// export const areAnnualAverageQueryResults = (
//   queryResults: UseQueryResult<AnnualAverageData[] | MonthlyAverageData[], unknown>[]
// ): queryResults is UseQueryResult<AnnualAverageData[], unknown>[] => {
//   const sample = queryResults?.[0].data?.[0];
//   if (!sample) return true; // TODO: check return

//   return (sample as AnnualAverageData).annualData !== undefined;
// };

// export const isAnnualAverageData = (data: GcmData): data is AnnualAverageData => {
//   return (data as AnnualAverageData).annualData !== undefined;
// };

// export const isMonthlyAverageData = (data: GcmData): data is MonthlyAverageData => {
//   return (data as MonthlyAverageData).monthVals !== undefined;
// };

// export const isAnnualAverageDataArray = (data: GcmData[]): data is AnnualAverageData[] => {
//   return isAnnualAverageData(data[0]);
// };
