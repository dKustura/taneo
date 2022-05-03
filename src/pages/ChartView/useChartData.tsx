import { useCallback, useMemo, useState } from 'react';
import { useAnnualAverageDataQuery } from 'api/climate';

import { FilterData } from 'helpers/types';
import { AnnualAverageData } from 'api/models';
import { getDisplayNameForGCM } from 'helpers/dataDisplay';

// TODO: try share some logic later between this and useTableData
const useChartData = (filter: FilterData) => {
  const [customAnnualData, setCustomAnnualData] = useState<AnnualAverageData[]>([]);

  const { data, ...queryResult } = useAnnualAverageDataQuery(
    filter.climateVariable,
    filter.country.code,
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
      setCustomAnnualData((prevData) => [...prevData, newData]);
    },
    [filter.climateVariable, filter.timePeriod.endYear, filter.timePeriod.startYear]
  );

  const formattedChartData = useMemo(() => {
    let allAnnualData = customAnnualData;
    if (data) {
      allAnnualData = [...data, ...customAnnualData];
    }

    return allAnnualData.map((d) => ({
      key: getDisplayNameForGCM(d.gcm),
      value: d.annualData[0],
    }));
  }, [data, customAnnualData]);

  return { data: formattedChartData, addData, ...queryResult };
};

export default useChartData;
