import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${getStatusBarHeight() + 150}px 60px 76px 60px;
  background: ${props => props.theme.colors.background};
`;

export const Illustration = styled.Image``;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 32px;
`;

export const Title = styled.Text`
  ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.primary};
`;

export const Description = styled.Text`
  text-align: center;
  ${props => props.theme.fonts.secondary};
  ${props => props.theme.colors.text_primary};
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
  width: 100%;
`;
