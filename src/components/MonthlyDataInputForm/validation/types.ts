import * as yup from 'yup';
import { monthlyDataSchema } from './schema';

export type MonthlyDataSchemaType = yup.InferType<typeof monthlyDataSchema>;
