import React, { useState, useCallback } from 'react';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';

import { ThemeContextProvider } from './src/contexts/theme';

import { Load } from './src/components/Load';
import { Routes } from './src/routes';

import { useTheme } from './src/hooks/useTheme';

export default function App() {
  const { theme } = useTheme();

  const [fontLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontLoaded) {
    return <Load />;
  }

  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}
