// @flow
import { takeLatest, put } from 'redux-saga/effects';
import hdkey from 'ethereumjs-wallet/hdkey';
import { Alert } from 'react-native';

import { NavigationService, routes } from '~/navigation';
import { addHistory } from '~/store/wallet/actions';
import { store } from '~/store';
import types from '../types';


const Web3 = require('web3');

type Action = {
  payload: {
    address: string,
    amount: string,
    fee: string,
  }
}

export function* sendSaga({ payload: { address, amount, fee } }: Action): any {
  try {
    const { path, rootKey } = store.getState().wallet;

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/__'),
    );

    const hdwallet = yield hdkey.fromExtendedKey(rootKey);
    const wallet = yield hdwallet.derivePath(path).getWallet();
    const privateKey = yield wallet.getPrivateKeyString();

    const tx = {
      to: address,
      value: web3.utils.toWei(amount),
      gasPrice: web3.utils.toWei(fee, 'gwei'),
      gas: 21000,
    };

    const transaction = yield web3.eth.accounts.signTransaction(tx, privateKey);

    const { transactionHash } = yield web3.eth.sendSignedTransaction(transaction.rawTransaction);
    yield put(addHistory({
      to: address,
      amount,
      transactionHash,
      date: Date.now(),
    }));

    NavigationService.navigate(routes.Home.Dashboard);
  } catch (e) {
    const error = e.message;
    Alert.alert('Error', error);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.SEND, sendSaga);
}
