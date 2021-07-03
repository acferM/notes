import React, { useCallback, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Illustration,
  TextContainer,
  Title,
  Description,
  ButtonsContainer,
} from './styles';

import illustrationImg from '../../assets/illustration.png';
import { Button } from '../../components/Button';
import { useTheme } from '../../hooks/useTheme';

export function Welcome(): JSX.Element {
  const navigation = useNavigation();

  const redirect = useCallback(
    destination => {
      navigation.navigate(destination);
    },
    [navigation],
  );

  return (
    <Container>
      <Illustration source={illustrationImg} />

      <TextContainer>
        <Title>Explore sua criatividade!</Title>
        <Description>
          Anote, desenhe e explore cada vez mais. O infinito é a nossa meta e
          além é o nosso limite!
        </Description>
      </TextContainer>

      <ButtonsContainer>
        <Button styleType="outline" onPress={() => redirect('Login')}>
          FAZER LOGIN
        </Button>
        <Button
          active
          containerStyles={{ marginTop: 8 }}
          onPress={() => redirect('Signup')}
        >
          CADASTRE-SE
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
