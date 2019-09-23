// @flow

import types from './types';

export const createWallet = (mnemonic: string): {} => ({
  type: types.CREATE_WALLET,
  payload: { mnemonic },
});
