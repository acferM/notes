import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const AvatarContainer = styled.View`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  height: ${getStatusBarHeight() + 88}px;
  align-items: center;
  justify-content: flex-end;
`;

export const UserAvatar = styled.Image`
  background: transparent;
  height: 88px;
  width: 88px;
  border-radius: 44px;
  border: 10px solid ${props => props.theme.colors.background};
  margin-bottom: -44px;
`;

export const WelcomeTextContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  ${props => props.theme.fonts.subtitle};
  color: ${props => props.theme.colors.text_primary};
`;

export const WelcomeUserText = styled.Text`
  ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.primary};
`;
