/* eslint-disable react/prop-types */
import React, {
  forwardRef,
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { useField } from '@unform/core';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface InputProps extends TextInputProps {
  name: string;
  isPassword?: boolean;
  containerStyle?: any;
  formInputState: (state: boolean) => void;
}

type InputValueReference = {
  value: string;
};

type InputRef = {
  focus(): void;
};

const InputBase: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, containerStyle = {}, isPassword = false, formInputState, ...rest },
  ref,
) => {
  const { theme } = useTheme();
  const { registerField, fieldName } = useField(name);

  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const [isFilled, setIsFilled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  useEffect(() => {
    formInputState(isFilled);
  }, [isFilled, formInputState]);

  return (
    <Container isFilled={isFilled} style={containerStyle}>
      <TextInput
        ref={inputElementRef}
        onChangeText={value => {
          setIsFilled(!!value);
          inputValueRef.current.value = value;
        }}
        {...rest}
        placeholderTextColor={theme.colors.text_secondary}
        style={{
          color: theme.colors.primary,
          width: '85%',
          fontFamily: 'Inter_400Regular',
          fontSize: 13,
        }}
        secureTextEntry={isPassword && !isVisible}
      />

      {isPassword && isFilled && (
        <TouchableOpacity onPress={() => setIsVisible(state => !state)}>
          <Feather
            name={isVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
