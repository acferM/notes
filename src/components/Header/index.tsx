import React from 'react';

import userImg from '../../assets/user_boilerplate.jpg';

import {
  Container,
  AvatarContainer,
  UserAvatar,
  WelcomeTextContainer,
  WelcomeText,
  WelcomeUserText,
} from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <AvatarContainer>
        <UserAvatar source={userImg} />
      </AvatarContainer>

      <WelcomeTextContainer>
        <WelcomeText>Olá, </WelcomeText>
        <WelcomeUserText>Matheus</WelcomeUserText>
        <WelcomeText>!</WelcomeText>
      </WelcomeTextContainer>
    </Container>
  );
}
