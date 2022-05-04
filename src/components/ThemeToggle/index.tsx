import { IconButton, Tooltip, Zoom } from '@mui/material';
import { WbSunny as SunIcon, NightsStay as MoonIcon } from '@mui/icons-material';

import useThemeMode, { ThemeMode } from 'hooks/useThemeMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <Tooltip TransitionComponent={Zoom} title="Change theme">
      <IconButton aria-label="toggle theme" color="inherit" onClick={toggleTheme}>
        {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
