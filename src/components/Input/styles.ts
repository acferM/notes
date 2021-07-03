import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  border: 2px solid ${props => props.theme.colors.text_secondary};
  border-radius: 10px;
  height: 40px;
  max-width: 305px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 14px;

  ${props =>
    props.isFilled &&
    css`
      border-color: ${props.theme.colors.primary};
    `}
`;
