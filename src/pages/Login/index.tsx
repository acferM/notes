import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
  Container,
  LoginForm,
  Title,
  SignUpTextContainer,
  SignUpText,
  SignUpRedirectButton,
  SignUpRedirectText,
} from './styles';

interface FormData {
  text: string;
}

export function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [emailInputFilled, setEmailInputFilled] = useState(false);
  const [passwordInputFilled, setPasswordInputFilled] = useState(false);

  function handleSubmit(data: FormData) {
    console.log('teste');
    Alert.alert(JSON.stringify(data));
  }

  return (
    <Container>
      <Title>Que bom ter você de volta!</Title>

      <LoginForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            ref={emailInputRef}
            name="email"
            placeholder="Seu melhor e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={passwordInputRef.current?.focus}
            formInputState={setEmailInputFilled}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            placeholder="Sua senha mais segura"
            isPassword
            containerStyle={{ marginTop: 20 }}
            textContentType="newPassword"
            returnKeyType="send"
            onSubmitEditing={formRef.current?.submitForm}
            formInputState={setPasswordInputFilled}
          />

          <Button
            onPress={() => {
              if (emailInputFilled && passwordInputFilled)
                formRef.current?.submitForm();
              else Alert.alert('Todos os campos precisam ser preenchidos');
            }}
            containerStyles={{ marginTop: 20 }}
            styleType="filled"
            active={emailInputFilled && passwordInputFilled}
          >
            FAZER LOGIN
          </Button>
        </Form>
      </LoginForm>

      <SignUpTextContainer>
        <SignUpText>Não tem conta ?</SignUpText>
        <SignUpRedirectButton>
          <SignUpRedirectText>Crie uma agora!</SignUpRedirectText>
        </SignUpRedirectButton>
      </SignUpTextContainer>
    </Container>
  );
}
