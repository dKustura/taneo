import { ClimateVariable } from 'helpers/types';

export interface AnnualAverageData {
  readonly gcm: string;
  readonly variable: ClimateVariable;
  readonly fromYear: number;
  readonly toYear: number;
  readonly annualData: number[];
}
