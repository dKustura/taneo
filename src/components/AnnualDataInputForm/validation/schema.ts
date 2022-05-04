import * as yup from 'yup';
import { MAX_GCM_NAME_LENGTH } from './constants';

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
    .typeError('Annual average must be a number.')
    .min(0, 'Annual average must be greater than or equal to 0.')
    .required('Annual average is required.'),
});
