import React from 'react';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { ThemeContextProvider } from './src/contexts/theme';

import { Load } from './src/components/Load';
import { Routes } from './src/routes';

export default function App() {
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
