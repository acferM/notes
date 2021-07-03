import React, { useRef, useState, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  SingupForm,
  Title,
  LoginTextContainer,
  LoginText,
  LoginRedirectButton,
  LoginRedirectText,
} from './styles';
import getValidationErros from '../../utils/getValidationErrors';

type FormData = {
  text: string;
};

export function SignUp(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmationInputRef = useRef<TextInput>(null);

  const [nameInputFilled, setNameInputFilled] = useState(false);
  const [emailInputFilled, setEmailInputFilled] = useState(false);
  const [passwordInputFilled, setPasswordInputFilled] = useState(false);
  const [passwordConfirmationInputFilled, setPasswordConfirmationInputFilled] =
    useState(false);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Password')
          .min(6, 'A senha deve ter no mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        console.log(JSON.stringify(errors, null, 2));
      }
    }
  }, []);

  return (
    <Container>
      <Title>Que bom ter você aqui!</Title>

      <SingupForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            ref={nameInputRef}
            name="name"
            placeholder="Seu nome e sobrenome"
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={emailInputRef.current?.focus}
            formInputState={setNameInputFilled}
          />
          <Input
            ref={emailInputRef}
            name="email"
            placeholder="Seu melhor e-mail"
            containerStyle={{ marginTop: 20 }}
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
            returnKeyType="next"
            onSubmitEditing={passwordConfirmationInputRef.current?.focus}
            formInputState={setPasswordInputFilled}
          />
          <Input
            ref={passwordConfirmationInputRef}
            name="password_confirmation"
            placeholder="Repita sua senha"
            isPassword
            containerStyle={{ marginTop: 20 }}
            textContentType="newPassword"
            returnKeyType="send"
            onSubmitEditing={formRef.current?.submitForm}
            formInputState={setPasswordConfirmationInputFilled}
          />

          <Button
            onPress={() => {
              if (
                nameInputFilled &&
                emailInputFilled &&
                passwordInputFilled &&
                passwordConfirmationInputFilled
              )
                formRef.current?.submitForm();
              else Alert.alert('Preencha todos os campos');
            }}
            containerStyles={{ marginTop: 20 }}
            styleType="filled"
            active={
              nameInputFilled &&
              emailInputFilled &&
              passwordInputFilled &&
              passwordConfirmationInputFilled
            }
          >
            CRIAR CONTA
          </Button>
        </Form>
      </SingupForm>

      <LoginTextContainer>
        <LoginText>Já tem conta ?</LoginText>
        <LoginRedirectButton>
          <LoginRedirectText>Entrar agora!</LoginRedirectText>
        </LoginRedirectButton>
      </LoginTextContainer>
    </Container>
  );
}
