import { createContext, useState, useEffect } from 'react';

const StorageKey = 'features-color-theme';

export const getTheme = () => {
  let theme = localStorage.getItem(StorageKey);

  if (!theme) {
    localStorage.setItem(StorageKey, 'light');
    theme = 'light';
  }

  return theme;
};

const supportedThemes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext(undefined && supportedThemes);

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
