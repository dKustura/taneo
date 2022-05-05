import { SxProps, Theme } from '@mui/material';

export const link: SxProps<Theme> = {
  display: 'inline',
  transition: 'background-size 0.2s ease-in-out 0s',
  backgroundImage: 'linear-gradient(transparent 90%, currentColor 90%, currentColor 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: 'bottom',
  backgroundPositionX: '0%',
  backgroundSize: '0% 100%',

  '&:hover': {
    backgroundSize: '100% 100%',
  },
  textDecoration: 'none',
};

export const linkActive: SxProps<Theme> = {
  ...link,
  backgroundSize: '100% 100%',
};

const styles = {
  link,
  linkActive,
};

export default styles;
