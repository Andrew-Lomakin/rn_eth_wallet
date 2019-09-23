// @flow
import types from './types';

type SetWallet = {
  rootKey: string,
  mnemonic: string,
  address: string,
  path: string,
};

export const setWallet = ({
  rootKey, mnemonic, address, path,
}: SetWallet): {} => ({
  type: types.SET_WALLET,
  payload: {
    rootKey, mnemonic, address, path,
  },
});

export const setBalance = (balance: string): {} => ({
  type: types.SET_BALANCE,
  payload: { balance },
});

export const getBalance = ({ address }: {address: string}): {} => ({
  type: types.GET_BALANCE,
  payload: { address },
});

export const addHistory = (history: {to: string,
  amount: string,
  transactionHash: string, }): {} => ({
  type: types.ADD_HISTORY,
  payload: { history },
});

export const changePath = (path: string): {} => ({
  type: types.CHANGE_PATH,
  payload: { path },
});

type ChangeAddress = {
  path: string,
  address: string,
}

export const changeAddress = ({ path, address }: ChangeAddress): {} => ({
  type: types.CHANGE_ADDRESS,
  payload: { path, address },
});

type Send = {
  address: string,
  amount: string,
  fee: string,
}

export const send = ({ address, amount, fee }: Send): {} => ({
  type: types.SEND,
  payload: { address, amount, fee },
});

export const quit = (): {} => ({
  type: types.QUIT,
});
