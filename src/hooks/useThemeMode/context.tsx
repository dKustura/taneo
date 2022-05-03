import { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeMode } from './constants';

type State = ThemeMode;
type Dispatch = () => void;
type ThemeModeProviderProps = { children: ReactNode };

const ThemeModeStateContext = createContext<State | undefined>(undefined);
const ThemeModeDispatchContext = createContext<Dispatch | undefined>(undefined);

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const initialState: State = ThemeMode.Light;
  const [themeMode, setThemeMode] = useState<State>(initialState);

  const toggleThemeMode = () => {
    let mode = ThemeMode.Light;

    if (themeMode === ThemeMode.Light) {
      mode = ThemeMode.Dark;
    }
    setThemeMode(mode);
  };

  return (
    <ThemeModeStateContext.Provider value={themeMode}>
      <ThemeModeDispatchContext.Provider value={toggleThemeMode}>
        {children}
      </ThemeModeDispatchContext.Provider>
    </ThemeModeStateContext.Provider>
  );
};

const useThemeModeState = () => {
  const context = useContext(ThemeModeStateContext);

  if (context === undefined) {
    throw new Error('useThemeModeState must be used within a ThemeModeProvider');
  }

  return context;
};

const useThemeModeDispatch = () => {
  const context = useContext(ThemeModeDispatchContext);

  if (context === undefined) {
    throw new Error('useThemeModeDispatch must be used within a ThemeModeProvider');
  }

  return context;
};

const useThemeMode = () => {
  return [useThemeModeState(), useThemeModeDispatch()] as [State, Dispatch];
};

export { ThemeModeProvider, useThemeMode };
