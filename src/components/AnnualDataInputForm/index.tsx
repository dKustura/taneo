import { Form, useFormik } from 'formik';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { annualDataSchema } from './validation';

import { DEFAULT_FORM_VALUES } from './constants';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => unknown;
  readonly onSubmit: (gcmName: string, annualAverage: number) => unknown;
};

const AnnualDataInputForm = ({ isOpen, onClose, onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: DEFAULT_FORM_VALUES,
    validationSchema: annualDataSchema,
    onSubmit: (values, helpers) => {
      onSubmit(values.gcmName, values.annualAverage);
      handleClose();
    },
  });

  const handleClose = () => {
    onClose();
    formik.resetForm();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="xs">
      <Form>
        <DialogTitle>Add new entry</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="gcmName"
                variant="outlined"
                label="GCM Name"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gcmName}
                error={formik.touched.gcmName && Boolean(formik.errors.gcmName)}
                helperText={
                  formik.touched.gcmName && formik.errors.gcmName ? formik.errors.gcmName : ' '
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="value"
                name="annualAverage"
                variant="outlined"
                label="Annual average"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.annualAverage}
                error={formik.touched.annualAverage && Boolean(formik.errors.annualAverage)}
                helperText={
                  formik.touched.annualAverage && formik.errors.annualAverage
                    ? formik.errors.annualAverage
                    : ' '
                }
              />
            </Grid>
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
};

export default AnnualDataInputForm;
