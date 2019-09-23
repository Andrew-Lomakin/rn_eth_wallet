// @flow
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

type Props = {
  children: string,
  onPress: () => void,
  secondary: boolean,
  style: View.propTypes.style,
  styleText: Text.propTypes.style,
  disabled: boolean
}

const Button = ({
  children, onPress, secondary, style, styleText, disabled,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      secondary && styles.containerSecondary,
      disabled && styles.containerDisabled,
      style]}
    disabled={disabled}
  >
    <Text
      style={[styles.text, secondary && styles.textSecondary, styleText]}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
