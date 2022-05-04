import { ClimateVariable } from 'helpers/types';

export interface GcmData {
  readonly gcm: string;
  readonly variable: ClimateVariable;
  readonly fromYear: number;
  readonly toYear: number;
}
