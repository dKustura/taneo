import { SxProps, Theme } from '@mui/material';

const appName: SxProps<Theme> = (theme) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexGrow: 1,
  },
  [theme.breakpoints.up('md')]: {
    mr: 8,
  },
});

const menuItem: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
});

const styles = {
  appName,
  menuItem,
};

export default styles;
