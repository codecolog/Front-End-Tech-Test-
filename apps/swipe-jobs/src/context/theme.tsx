import { createTheme, Theme } from '@mui/material';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import themes, { ITheme, ThemeContextType } from '../theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(createTheme(themes.default));

  const changeTheme = (theme: ITheme) => {
    setTheme(createTheme(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
