import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  type: 'outline' | 'filled';
  active?: boolean;
}

interface ContentProps {
  type: 'outline' | 'filled';
}

interface TitleProps {
  type: 'outline' | 'filled';
}

export const Container = styled(RectButton)<ContainerProps>`
  border-radius: 5px;
  max-width: 305px;
  width: 100%;
  margin: 0 auto;

  ${props =>
    props.type === 'filled' &&
    css`
      background: ${props.theme.colors.primary};
      opacity: 0.6;
    `}

  ${props =>
    props.type === 'filled' &&
    props.active &&
    css`
      opacity: 1;
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
      border: 1px solid ${props.theme.colors.primary};
    `}
`;

export const Title = styled.Text<TitleProps>`
  ${props => props.theme.fonts.paragraph};

  ${props =>
    props.type === 'outline' &&
    css`
      color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.type === 'filled' &&
    css`
      color: ${props.theme.colors.background};
    `}
`;
