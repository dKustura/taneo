import axios from 'axios';
import { useQuery } from 'react-query';
import { getQueryKey } from './queryKeys';
import { AnnualAverageData, MonthlyAverageData } from './models';
import { ClimateVariable, CountryCode, Measure } from 'helpers/types';
import { DefaultQueryOptions } from './queryOptions';

axios.defaults.baseURL = 'https://taneo-climate-api.herokuapp.com/v1/country';

const getMonthlyAverageData = async (
  variable: ClimateVariable,
  countryCode: CountryCode,
  startYear: number,
  endYear: number
) => {
  const { data } = await axios.get<MonthlyAverageData[]>(
    `/${Measure.MonthlyAverage}/${variable}/${startYear}/${endYear}/${countryCode}`
  );
  return data;
};

const getAnnualAverageData = async (
  variable: ClimateVariable,
  countryCode: CountryCode,
  startYear: number,
  endYear: number
) => {
  const { data } = await axios.get<AnnualAverageData[]>(
    `/${Measure.AnnualAverage}/${variable}/${startYear}/${endYear}/${countryCode}`
  );
  return data;
};

export const useMonthlyAverageDataQuery = (
  variable: ClimateVariable,
  countryCode: CountryCode,
  startYear: number,
  endYear: number
) => {
  return useQuery(
    getQueryKey(Measure.MonthlyAverage, variable, countryCode, startYear, endYear),
    () => getMonthlyAverageData(variable, countryCode, startYear, endYear),
    DefaultQueryOptions
  );
};

export const useAnnualAverageDataQuery = (
  variable: ClimateVariable,
  countryCode: CountryCode,
  startYear: number,
  endYear: number
) => {
  return useQuery(
    getQueryKey(Measure.AnnualAverage, variable, countryCode, startYear, endYear),
    () => getAnnualAverageData(variable, countryCode, startYear, endYear),
    DefaultQueryOptions
  );
};
