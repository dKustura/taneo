import { useCallback, useMemo, useState } from 'react';
import { useMonthlyAverageDataQuery } from 'api/climate';

import { FilterData } from 'helpers/types';
import { MonthlyAverageData } from 'api/models';

const useTableData = (filter: FilterData) => {
  const [customMonthlyData, setCustomMonthlyData] = useState<MonthlyAverageData[]>([]);

  const { data, ...queryResult } = useMonthlyAverageDataQuery(
    filter.climateVariable,
    filter.country.code,
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

  const allMonthlyData = useMemo(() => {
    if (data) {
      return [...data, ...customMonthlyData];
    } else {
      return customMonthlyData;
    }
  }, [data, customMonthlyData]);

  return { data: allMonthlyData, addData, ...queryResult };
};

export default useTableData;
