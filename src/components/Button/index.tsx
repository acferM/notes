import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Content, Title } from './styles';

interface ButtonProps {
  type?: 'outline' | 'filled';
  children: React.ReactText;
  containerStyles?: ViewStyle;
  onPress: () => void;
}

export function Button({
  type = 'filled',
  children,
  containerStyles = {},
  onPress,
}: ButtonProps): JSX.Element {
  return (
    <Container style={containerStyles} type={type} onPress={onPress}>
      <Content type={type}>
        <Title type={type}>{children}</Title>
      </Content>
    </Container>
  );
}
