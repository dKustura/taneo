import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

const LoadingIndicator = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '60vh' }}>
      <Grid item>
        <CircularProgress size="4rem" thickness={5} />
      </Grid>
    </Grid>
  );
};

export default LoadingIndicator;
