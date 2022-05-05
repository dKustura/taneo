import { FastField, FieldArray, FieldProps, Form, Formik } from 'formik';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { monthlyDataSchema } from './validation';

import { DEFAULT_FORM_VALUES } from './constants';
import { MonthlyDataSchemaType } from './validation/types';
import { MONTHS } from 'helpers/constants';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => unknown;
  readonly onSubmit: (gcmName: string, monthValues: number[]) => unknown;
};

const AnnualDataInputForm = ({ isOpen, onClose, onSubmit }: Props) => {
  return (
    <Formik
      initialValues={DEFAULT_FORM_VALUES}
      validationSchema={monthlyDataSchema}
      onSubmit={(values, helpers) => {
        onSubmit(values.gcmName, values.monthValues);
        onClose();
        helpers.resetForm();
      }}
    >
      {({ resetForm }) => {
        const handleClose = () => {
          onClose();
          resetForm();
        };

        return (
          <Dialog open={isOpen} onClose={handleClose}>
            <Form>
              <DialogTitle>Add new entry</DialogTitle>
              <DialogContent>
                <Grid container spacing={2} sx={{ p: 2 }}>
                  <Grid item xs={12}>
                    <FastField name="gcmName">
                      {({ field, meta: { touched, error } }: FieldProps<MonthlyDataSchemaType>) => (
                        <TextField
                          id="value"
                          name={field.name}
                          variant="outlined"
                          label="GCM Name"
                          fullWidth
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value}
                          error={touched && Boolean(error)}
                          helperText={touched && error ? error : ' '}
                        />
                      )}
                    </FastField>
                  </Grid>
                  <FieldArray
                    name="monthValues"
                    render={() =>
                      MONTHS.map((monthName, index) => (
                        <Grid key={`month-${monthName}`} item xs={12} sm={4}>
                          <FastField name={`monthValues.${index}`}>
                            {({
                              field,
                              meta: { touched, error },
                            }: FieldProps<MonthlyDataSchemaType>) => (
                              <TextField
                                id="value"
                                name={field.name}
                                variant="outlined"
                                label={monthName}
                                fullWidth
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                value={field.value}
                                error={touched && Boolean(error)}
                                helperText={touched && error ? error : ' '}
                              />
                            )}
                          </FastField>
                        </Grid>
                      ))
                    }
                  />
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </DialogActions>
            </Form>
          </Dialog>
        );
      }}
    </Formik>
  );
};

export default AnnualDataInputForm;
