import { AnnualAverageData } from 'api/models';
import { ClimateVariable } from 'helpers/types';

export type CustomAnnualData = {
  [key in ClimateVariable]: AnnualAverageData[];
};
