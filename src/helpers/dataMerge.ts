import { UseQueryResult } from 'react-query';
import { AnnualAverageData, MonthlyAverageData } from 'api/models';

export const mergeAnnualAverageQueryResults = (
  queryResults: UseQueryResult<AnnualAverageData[], unknown>[]
) => {
  const dataResults = queryResults.map((result) => result.data ?? []);
  return mergeAnnualAverageData(dataResults);
};

const mergeAnnualAverageData = (data: AnnualAverageData[][]): AnnualAverageData[] => {
  if (!data || !data.length || !data[0].length) return [];

  const countryCount = data.length;

  // Only GCMs contained in all of the result arrays are retained.
  const firstCountryGcms = data[0];
  let commonGCMs = new Set<string>(firstCountryGcms.map((d) => d.gcm));

  // Initial result
  const resultMap = Object.fromEntries<AnnualAverageData>(
    firstCountryGcms.map((item) => [
      item.gcm,
      {
        gcm: item.gcm,
        variable: item.variable,
        fromYear: item.fromYear,
        toYear: item.toYear,
        annualData: [0],
      },
    ])
  );

  // For each array of GCMs in data
  data.forEach((gcms) => {
    // For each GCM in that array, calculate the new average and remove any GCMs that are not in common
    const currentGCMs = new Set<string>();
    gcms.forEach((item) => {
      if (resultMap[item.gcm]) {
        resultMap[item.gcm].annualData[0] += item.annualData[0] / countryCount;
      }
      currentGCMs.add(item.gcm);
    });
    // Intersection of GCM sets
    commonGCMs = new Set([...commonGCMs].filter((x) => currentGCMs.has(x)));
  });

  return Object.values(resultMap).filter((item) => commonGCMs.has(item.gcm));
};

export const mergeMonthlyAverageQueryResults = (
  queryResults: UseQueryResult<MonthlyAverageData[], unknown>[]
) => {
  const dataResults = queryResults.map((result) => result.data ?? []);
  return mergeMonthlyAverageData(dataResults);
};

const mergeMonthlyAverageData = (data: MonthlyAverageData[][]): MonthlyAverageData[] => {
  if (!data || !data.length || !data[0].length) return [];

  const countryCount = data.length;

  // Only GCMs contained in all of the result arrays are retained.
  const firstCountryGcms = data[0];
  let commonGCMs = new Set<string>(firstCountryGcms.map((d) => d.gcm));

  // Initial result
  const resultMap = Object.fromEntries<MonthlyAverageData>(
    firstCountryGcms.map((item) => [
      item.gcm,
      {
        gcm: item.gcm,
        variable: item.variable,
        fromYear: item.fromYear,
        toYear: item.toYear,
        monthVals: Array(12).fill(0),
      },
    ])
  );

  // For each array of GCMs in data
  data.forEach((gcms) => {
    // For each GCM in that array, calculate the new averages and remove any GCMs that are not in common
    const currentGCMs = new Set<string>();
    gcms.forEach((item) => {
      if (resultMap[item.gcm]) {
        // Update average of each month
        item.monthVals.forEach((newMonthValue, index) => {
          resultMap[item.gcm].monthVals[index] += newMonthValue / countryCount;
        });
      }
      currentGCMs.add(item.gcm);
    });
    // Intersection of GCM sets
    commonGCMs = new Set([...commonGCMs].filter((x) => currentGCMs.has(x)));
  });

  return Object.values(resultMap).filter((item) => commonGCMs.has(item.gcm));
};
