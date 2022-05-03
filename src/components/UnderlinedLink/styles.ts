import { SxProps, Theme } from '@mui/material';

export const link: SxProps<Theme> = (theme) => ({
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
});

const styles = {
  link,
};

export default styles;
