import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ContainerProps {
  type: 'outline' | 'filled';
}

interface ContentProps {
  type: 'outline' | 'filled';
}

interface TitleProps {
  type: 'outline' | 'filled';
}

export const Container = styled(RectButton)<ContainerProps>`
  border-radius: 5px;

  ${props =>
    props.type === 'filled' &&
    css`
      background: ${colors.light.main};
    `}
`;

export const Content = styled.View<ContentProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 38px;
  border-radius: 5px;

  ${props =>
    props.type === 'outline' &&
    css`
      border: 1px solid ${colors.light.main};
    `}
`;
export const Title = styled.Text<TitleProps>`
  ${fonts.secondary};

  ${props =>
    props.type === 'outline' &&
    css`
      color: ${colors.light.main};
    `}

  ${props =>
    props.type === 'filled' &&
    css`
      color: ${colors.light.background};
    `}
`;
