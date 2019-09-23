// @flow
import React from 'react';
import { Text as RNText } from 'react-native';

type Props = {
  children: string,
  res: any,
}

const Text = ({ children, ...res }: Props) => (
  // $FlowFixMe
  <RNText {...res}>
    {children}
  </RNText>
);

export default Text;
