import { GcmData } from './GcmData';

export interface MonthlyAverageData extends GcmData {
  readonly monthVals: number[];
}
