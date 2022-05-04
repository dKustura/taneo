import { GcmData } from './GcmData';

export interface AnnualAverageData extends GcmData {
  readonly annualData: number[];
}
