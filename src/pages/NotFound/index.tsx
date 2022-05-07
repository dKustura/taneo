import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import NotFoundSvg from './NotFoundSvg';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Grid container justifyContent="center" sx={{ pt: 6 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h3" textTransform="uppercase">
            Page not found
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={10} lg={7} xl={6}>
        <NotFoundSvg />
      </Grid>
    </Grid>
  );
};

export default NotFound;
