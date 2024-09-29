import { Text, StyleSheet, View, TextInputProps } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor';

interface ThemedTextInputProps extends TextInputProps {
  lightColor?: string;
  darkColor?: string;
  style?: any;
}

export default function ThemedTextInput({
  lightColor,
  darkColor,
  style,
  ...rest
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background')
  const textColor = useThemeColor({light: lightColor, dark: darkColor}, 'text')

  return (
    <TextInput
    {...rest}
    style={[{backgroundColor, color: textColor}, styles.textInput, style]}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16
  }
})