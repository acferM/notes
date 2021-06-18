import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${getStatusBarHeight() + 150}px 60px 75px 60px;
  background: ${colors.light.background};
`;

export const Illustration = styled.Image``;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

export const Title = styled.Text`
  ${fonts.title};
  color: ${colors.light.main};
`;

export const Description = styled.Text`
  text-align: center;
  ${fonts.secondary};
  ${colors.light.text_primary};
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
  width: 100%;
`;
