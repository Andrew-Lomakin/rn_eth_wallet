// @flow
import { takeLatest, put } from 'redux-saga/effects';

import { setBalance } from '~/store/wallet/actions';
import types from '../types';

const Web3 = require('web3');

type Action = {
  payload: {
    address: string
  }
}

export function* getBalanceSaga({ payload: { address } }: Action): any {
  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/__'),
    );

    const amount = yield web3.eth.getBalance(address);
    yield put(setBalance(amount));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.GET_BALANCE, getBalanceSaga);
}
