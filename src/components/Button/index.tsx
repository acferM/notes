import React from 'react'
import { ViewStyle } from 'react-native'

import { Container, Content, Title } from './styles'

interface ButtonProps {
  type?: 'outline' | 'filled'
  children: React.ReactText
  containerStyles?: ViewStyle
}

export function Button({ type = 'filled', children, containerStyles={}}: ButtonProps) {
  return (
    <Container style={containerStyles} type={type}>
      <Content type={type}>
        <Title type={type}>{children}</Title>
      </Content>
    </Container>
  )
}