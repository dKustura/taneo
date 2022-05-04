import axios from 'axios';
import { useQueries, useQuery } from 'react-query';
import { getQueryKey } from './queryKeys';
import { AnnualAverageData, MonthlyAverageData } from './models';
import { ClimateVariable, Country, CountryCode, Measure } from 'helpers/types';
import { DefaultQueryOptions } from './queryOptions';
import { isCountryUnion } from 'helpers/typeGuards';
import { useQueriesMemo } from 'hooks/useQueriesMemo';

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
  country: Country,
  startYear: number,
  endYear: number
) => {
  const queries = useQueriesMemo(
    useQueries(
      getCountryCodesForQueries(country).map((countryCode) => {
        return {
          queryKey: getQueryKey(Measure.AnnualAverage, variable, countryCode, startYear, endYear),
          queryFn: () => getAnnualAverageData(variable, countryCode, startYear, endYear),
          ...DefaultQueryOptions,
        };
      })
    )
  );

  return queries;
};

const getCountryCodesForQueries = (country: Country) => {
  if (isCountryUnion(country)) return country.memberCountries;
  return [country.code];
};
