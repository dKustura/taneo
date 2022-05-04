import { useEffect, useRef } from 'react';
import { UseQueryResult } from 'react-query';

// https://medium.com/@trisianto/react-query-how-to-memoize-results-from-usequeries-hook-eaed9a0ec700

export const useQueriesMemo = <T, E>(array: UseQueryResult<T, E>[]): UseQueryResult<T, E>[] => {
  // This holds reference to previous value
  const ref = useRef<UseQueryResult<T, E>[]>([]);

  // Check if each data element of the old and new array match
  const isDataConsideredTheSame =
    ref.current && array.length === ref.current.length
      ? array.every((element, i) => {
          return element.data === ref.current?.[i].data;
        })
      : // Initially there's no old array defined, so set to false
        false;

  useEffect(() => {
    // Only update previous results if arrays are not considered the same
    if (!isDataConsideredTheSame && ref.current) {
      ref.current = array;
    }
  }, [isDataConsideredTheSame, array]);

  return isDataConsideredTheSame ? ref.current : array;
};
