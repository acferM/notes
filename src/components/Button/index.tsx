import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Content, Title } from './styles';

interface ButtonProps {
  styleType?: 'outline' | 'filled';
  children: React.ReactText;
  containerStyles?: ViewStyle;
  onPress: () => void;
  active?: boolean;
}

export function Button({
  styleType = 'filled',
  children,
  containerStyles = {},
  onPress,
  active,
}: ButtonProps): JSX.Element {
  return (
    <Container
      active={active}
      style={containerStyles}
      type={styleType}
      onPress={onPress}
    >
      <Content type={styleType}>
        <Title type={styleType}>{children}</Title>
      </Content>
    </Container>
  );
}
