import { MonthlyDataSchemaType } from './validation/types';

export const DEFAULT_FORM_VALUES: MonthlyDataSchemaType = {
  gcmName: '',
  monthValues: Array(12).fill(0),
};
