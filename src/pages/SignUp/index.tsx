import React from 'react';
import { Text } from 'react-native';
import { Input } from '../../components/Input';
import { Container } from './styles';

export function SignUp(): JSX.Element {
  return (
    <Container>
      <Input name="email" placeholder="testando" />
    </Container>
  );
}
