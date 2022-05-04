import * as yup from 'yup';
import { annualDataSchema } from './schema';

export type AnnualDataSchemaType = yup.InferType<typeof annualDataSchema>;
