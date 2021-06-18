import React from 'react'

import { 
  Container, 
  Illustration, 
  TextContainer, 
  Title, 
  Description,
  ButtonsContainer
} from './styles'

import illustrationImg from '../../assets/illustration.png'
import { Button } from '../../components/Button'

export function Welcome() {
  return (
    <Container>
      <Illustration source={illustrationImg} />
    
      <TextContainer>
        <Title>Explore sua criatividade!</Title>
        <Description>Anote, desenhe e explore cada vez mais. O infinito é a nossa meta e além é o nosso limite!</Description>
      </TextContainer>

      <ButtonsContainer>
        <Button type="outline" >FAZER LOGIN</Button>
        <Button containerStyles={{marginTop: 8}} >CADASTRE-SE</Button>
      </ButtonsContainer>
    </Container>
  )
}