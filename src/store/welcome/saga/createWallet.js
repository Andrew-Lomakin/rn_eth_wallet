// @flow
import { takeLatest, put } from 'redux-saga/effects';
import bip39 from 'react-native-bip39';
import hdkey from 'ethereumjs-wallet/hdkey';
import { setWallet } from '~/store/wallet/actions';
import { NavigationService, routes } from '~/navigation';
import types from '../types';

type Action = {
  payload: {
    mnemonic: string
  }
}

export function* createWalletSaga({ payload: { mnemonic } }: Action): any {
  try {
    const seed = yield bip39.mnemonicToSeed(mnemonic);
    const hdwallet = yield hdkey.fromMasterSeed(seed);
    const path = "m/44'/60'/0'/0/0";
    const rootKey = hdwallet.privateExtendedKey();
    const wallet = hdwallet.derivePath(path).getWallet();
    const address = wallet.getAddressString();

    yield put(setWallet({
      rootKey, mnemonic, address, path,
    }));

    NavigationService.navigate(routes.Home.Dashboard);
  } catch (e) {
    console.warn(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.CREATE_WALLET, createWalletSaga);
}
