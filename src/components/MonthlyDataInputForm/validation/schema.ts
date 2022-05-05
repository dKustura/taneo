import * as yup from 'yup';
import { MAX_GCM_NAME_LENGTH } from 'helpers/constants';

export const monthlyDataSchema = yup.object({
  gcmName: yup
    .string()
    .max(
      MAX_GCM_NAME_LENGTH,
      `Name of the GCM must be at most ${MAX_GCM_NAME_LENGTH} characters long.`
    )
    .required('Name is required.'),
  monthValues: yup
    .array()
    .of(
      yup
        .number()
        .typeError('Value must be a number.')
        .min(0, 'Must be positive or zero.')
        .required('Value is required.')
    )
    .required('Monthly average values are required.'),
});
