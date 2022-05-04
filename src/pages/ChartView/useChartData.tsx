import { useCallback, useMemo, useState } from 'react';
import { useAnnualAverageDataQuery } from 'api/climate';
import { AnnualAverageData } from 'api/models';

import { ClimateVariable, FilterData } from 'helpers/types';
import { getDisplayNameForGCM } from 'helpers/dataDisplay';
import { mergeAnnualAverageQueryResults } from 'helpers/dataMerge';

import { CustomAnnualData } from './types';

const useChartData = (filter: FilterData) => {
  const [customAnnualData, setCustomAnnualData] = useState<CustomAnnualData>({
    [ClimateVariable.Temperature]: [],
    [ClimateVariable.Precipitation]: [],
  });

  const queryResults = useAnnualAverageDataQuery(
    filter.climateVariable,
    filter.country,
    filter.timePeriod.startYear,
    filter.timePeriod.endYear
  );

  const addData = useCallback(
    (gcm: string, annualData: number) => {
      const newData: AnnualAverageData = {
        gcm,
        annualData: [annualData],
        variable: filter.climateVariable,
        fromYear: filter.timePeriod.startYear,
        toYear: filter.timePeriod.endYear,
      };
      setCustomAnnualData((prevData) => ({
        ...prevData,
        [filter.climateVariable]: [...prevData[filter.climateVariable], newData],
      }));
    },
    [filter.climateVariable, filter.timePeriod.endYear, filter.timePeriod.startYear]
  );

  // If at least one query is loading then the data is loading. The same goes for errors.
  const isLoading = useMemo(() => queryResults.some((result) => result.isLoading), [queryResults]);
  const isError = useMemo(() => queryResults.some((result) => result.isError), [queryResults]);

  // Data combined from the results of queries
  const mergedQueryData = useMemo(() => {
    const dataResults = queryResults.map((result) => result.data);
    const allFetched = dataResults.every((data) => data !== undefined);
    if (isLoading || isError || !allFetched) return undefined;

    return mergeAnnualAverageQueryResults(queryResults);
  }, [isError, isLoading, queryResults]);

  // All data formatted for charting
  const formattedChartData = useMemo(() => {
    let allAnnualData = customAnnualData[filter.climateVariable];
    if (mergedQueryData) {
      allAnnualData = [...mergedQueryData, ...customAnnualData[filter.climateVariable]];
    }

    return allAnnualData.map((d) => ({
      key: getDisplayNameForGCM(d.gcm),
      value: d.annualData[0],
    }));
  }, [customAnnualData, mergedQueryData, filter.climateVariable]);

  return { data: formattedChartData, addData, isLoading, isError };
};

export default useChartData;
