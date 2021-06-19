import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

interface InputProps extends TextInputProps {
  name: string;
}

export function Input({ name, ...rest }: InputProps): JSX.Element {
  return <TextInput style={styles.container} {...rest} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    borderWidth: 1,
    borderColor: '#B6B6B6',
    borderStyle: 'solid',
    borderRadius: 10,
    color: colors.light.text_secondary,
    paddingLeft: 14,
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },
});
