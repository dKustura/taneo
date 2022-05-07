import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeMode } from 'hooks/useThemeMode';
import { ThemeOptions } from '@mui/material/styles/createTheme';

import LinkBehavior from 'components/LinkBehavior';

import colors from './colors';
import { LinkProps as MuiLinkProps } from '@mui/material';

export const getTheme = (mode: ThemeMode) => {
  return mode === ThemeMode.Light ? lightTheme : darkTheme;
};

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    h2: {
      fontSize: '1.5rem',
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1300,
      xl: 1900,
    },
  },
  shape: {
    borderRadius: 4,
  },
};

const commonPalette = {
  success: {
    main: colors.success,
  },
  error: {
    main: colors.error,
  },
  warning: {
    main: colors.warning,
  },
  info: {
    main: colors.info,
  },
};

const commonOverrides = {
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        fontSize: '3rem',
      },
      fontSizeInherit: {
        fontSize: '2rem',
      },
      fontSizeSmall: {
        fontSize: '1rem',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as MuiLinkProps, // https://github.com/mui/material-ui/issues/29942
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
};

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: ThemeMode.Light,
      background: {
        default: colors.white,
      },
      primary: {
        main: colors.blue,
      },
      secondary: {
        main: colors.orange,
      },
      ...commonPalette,
    },
    components: {
      ...commonOverrides,
    },
    ...commonTheme,
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: ThemeMode.Dark,
      background: {
        default: '#212121',
      },
      primary: {
        main: colors.teal,
      },
      secondary: {
        main: colors.yellow,
      },
      ...commonPalette,
    },
    components: {
      ...commonOverrides,
    },
    ...commonTheme,
  })
);
