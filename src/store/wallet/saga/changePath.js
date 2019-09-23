// @flow
import { takeLatest, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import hdkey from 'ethereumjs-wallet/hdkey';
import { changeAddress, getBalance } from '~/store/wallet/actions';
import types from '../types';

import { store } from '~/store';

type Action = {
  payload: {
    path: string
  }
}

export function* changePathSaga({ payload: { path } }: Action): any {
  try {
    const { rootKey } = yield store.getState().wallet;
    const hdwallet = yield hdkey.fromExtendedKey(rootKey);
    const wallet = hdwallet.derivePath(path).getWallet();
    const address = wallet.getAddressString();

    yield put(changeAddress({ path, address }));
    yield put(getBalance({ address }));
  } catch (e) {
    const error = e.message;
    Alert.alert('Error', error);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.CHANGE_PATH, changePathSaga);
}
