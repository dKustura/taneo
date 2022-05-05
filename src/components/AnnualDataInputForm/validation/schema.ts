import * as yup from 'yup';
import { MAX_GCM_NAME_LENGTH } from 'helpers/constants';

export const annualDataSchema = yup.object({
  gcmName: yup
    .string()
    .max(
      MAX_GCM_NAME_LENGTH,
      `Name of the GCM must be at most ${MAX_GCM_NAME_LENGTH} characters long.`
    )
    .required('Name is required.'),
  annualAverage: yup
    .number()
    .typeError('Value must be a number.')
    .min(0, 'Value must be greater than or equal to 0.')
    .required('Annual average value is required.'),
});
