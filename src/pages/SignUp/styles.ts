import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${getStatusBarHeight()}px 35px 0 35px;
`;

export const Title = styled.Text``;

export const Form = styled.View``;
