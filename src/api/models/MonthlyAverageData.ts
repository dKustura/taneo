import { ClimateVariable } from 'helpers/types';

export interface MonthlyAverageData {
  readonly gcm: string;
  readonly variable: ClimateVariable;
  readonly fromYear: number;
  readonly toYear: number;
  readonly monthVals: number[];
}
