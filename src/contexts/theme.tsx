import React, { ReactNode, useCallback, createContext, useState } from 'react';

import { DefaultTheme } from 'styled-components/native';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextData = {
  theme: DefaultTheme;
  switchTheme: () => void;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

const themeContext = createContext({} as ThemeContextData);

function ThemeContextProvider({
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const switchTheme = useCallback(() => {
    setTheme(state => (state.title === 'light' ? dark : light));
  }, []);

  return (
    <themeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export { themeContext, ThemeContextProvider };
