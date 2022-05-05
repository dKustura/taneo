import { GcmData } from 'api/models';

export type CustomData<T extends GcmData> = {
  // Unique key identifying records related to a Country-TimePeriod-ClimateVariable combination
  [key: string]: T[];
};
