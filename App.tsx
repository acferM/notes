import React from 'react';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Load } from './src/components/Load'
import { Routes } from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_500Medium, 
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return <Load />
  }

  return (
    <Routes />
  )
}
