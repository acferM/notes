import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { StackRoutes } from './stack.routes';
import { useTheme } from '../hooks/useTheme';

export function Routes(): JSX.Element {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
