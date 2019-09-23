// @flow
import bip39 from 'react-native-bip39';

export const mnemonicValid = (mnemonic: string): boolean => bip39.validateMnemonic(mnemonic);
