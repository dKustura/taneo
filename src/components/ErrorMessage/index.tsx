import { Grid, Typography } from '@mui/material';

const ErrorMessage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '50vh' }}>
      <Grid item>
        <Typography variant="h2">Oops. Please try again...</Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorMessage;
