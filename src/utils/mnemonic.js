// @flow
import bip39 from 'react-native-bip39';

export const generateMnemonic = async (): Promise<string> => {
  const mnemonic: string = await bip39.generateMnemonic(128);
  return mnemonic;
};
