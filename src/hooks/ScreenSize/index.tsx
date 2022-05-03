import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

export const useIsScreenSize = (screenSize: Breakpoint) => {
  const isMatch = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only(screenSize),
  );

  return isMatch;
};
export const useIsScreenSizeDown = (screenSize: Breakpoint) => {
  const isMatch = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(screenSize),
  );

  return isMatch;
};
