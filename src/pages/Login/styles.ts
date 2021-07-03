import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${getStatusBarHeight()}px 35px 0 35px;
`;

export const Title = styled.Text`
  ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.primary};
`;

export const LoginForm = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const SignUpTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const SignUpText = styled.Text`
  ${props => props.theme.fonts.aux};
  color: ${props => props.theme.colors.text_primary};
`;

export const SignUpRedirectButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const SignUpRedirectText = styled.Text`
  ${props => props.theme.fonts.aux};
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
`;
