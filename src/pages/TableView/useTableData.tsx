import { useCallback, useMemo, useState } from 'react';
import { useMonthlyAverageDataQuery } from 'api/climate';
import { MonthlyAverageData } from 'api/models';

import { FilterData } from 'helpers/types';
import { mergeMonthlyAverageQueryResults } from 'helpers/dataMerge';

const useTableData = (filter: FilterData) => {
  const [customMonthlyData, setCustomMonthlyData] = useState<MonthlyAverageData[]>([]);

  const queryResults = useMonthlyAverageDataQuery(
    filter.climateVariable,
    filter.country,
    filter.timePeriod.startYear,
    filter.timePeriod.endYear
  );

  const addData = useCallback(
    (gcm: string, monthVals: number[]) => {
      const newData: MonthlyAverageData = {
        gcm,
        monthVals,
        variable: filter.climateVariable,
        fromYear: filter.timePeriod.startYear,
        toYear: filter.timePeriod.endYear,
      };
      setCustomMonthlyData((prevData) => [...prevData, newData]);
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

    return mergeMonthlyAverageQueryResults(queryResults);
  }, [isError, isLoading, queryResults]);

  const allMonthlyData = useMemo(() => {
    if (mergedQueryData) {
      return [...mergedQueryData, ...customMonthlyData];
    } else {
      return customMonthlyData;
    }
  }, [mergedQueryData, customMonthlyData]);

  return { data: allMonthlyData, addData, isLoading, isError };
};

export default useTableData;
