import { useCallback, useState } from 'react';

import {
  ClimateVariable,
  Country,
  FilterData,
  TimePeriod,
} from 'helpers/types';
import { COUNTRIES, TIME_PERIODS } from 'helpers/constants';

const initialData: FilterData = {
  country: COUNTRIES[0],
  timePeriod: TIME_PERIODS[0],
  climateVariable: ClimateVariable.Temperature,
};

const useFilterData = () => {
  const [filterData, setFilterData] = useState(initialData);

  const onCountryChange = useCallback(
    (newCountry: Country) =>
      setFilterData((prev) => ({ ...prev, country: newCountry })),
    [],
  );

  const onTimePeriodChange = useCallback(
    (newTimePeriod: TimePeriod) =>
      setFilterData((prev) => ({ ...prev, timePeriod: newTimePeriod })),
    [],
  );

  const onClimateVariableChange = useCallback(
    (newClimateVariable: ClimateVariable) =>
      setFilterData((prev) => ({
        ...prev,
        climateVariable: newClimateVariable,
      })),
    [],
  );

  return {
    filterData,
    onChangeHandlers: {
      onCountryChange,
      onTimePeriodChange,
      onClimateVariableChange,
    },
  };
};

export default useFilterData;
