import { useCallback, useMemo, useState } from 'react';
import { GcmData } from 'api/models';

import { FilterData } from 'helpers/types';
import { getCustomDataKey } from 'helpers';
import { CustomData } from './types';

const useCustomData = <T extends GcmData>(filter: FilterData) => {
  const [customData, setCustomData] = useState<CustomData<T>>({});
  const customDataKey = useMemo(() => getCustomDataKey(filter), [filter]);

  const addNewCustomData = useCallback(
    (newData: T) => {
      setCustomData((prevData) => {
        const prevRecords = prevData[customDataKey] ?? [];
        return {
          ...prevData,
          [customDataKey]: [...prevRecords, newData],
        };
      });
    },
    [customDataKey]
  );

  return { customData, customDataKey, addNewCustomData };
};

export default useCustomData;
