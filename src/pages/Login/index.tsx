import React, { useCallback, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
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
import getValidationErros from '../../utils/getValidationErrors';

interface FormData {
  text: string;
}

export function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [emailInputFilled, setEmailInputFilled] = useState(false);
  const [passwordInputFilled, setPasswordInputFilled] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Digite um e-mail')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Digite uma senha'),
      });

      try {
        await schema.validate(data, { abortEarly: false });

        navigation.navigate('Home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          console.log(JSON.stringify(errors, null, 2));
        }
      }
    },
    [navigation],
  );

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
