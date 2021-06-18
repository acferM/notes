import React from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';

import loadAnimation from '../../assets/load.json';

export function Load(): JSX.Element {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{
          backgroundColor: 'transparent',
          width: 200,
          height: 200,
        }}
      />
    </Container>
  );
}
