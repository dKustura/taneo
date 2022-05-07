import { MonthlyDataSchemaType } from './validation';

export const DEFAULT_FORM_VALUES: MonthlyDataSchemaType = {
  gcmName: '',
  monthValues: Array(12).fill(0),
};
