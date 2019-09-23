// @flow
import { takeLatest } from 'redux-saga/effects';

import { NavigationService, routes } from '~/navigation';
import { store } from '~/store';
import types from './types';

export function* initSaga(): any {
  const path = yield store.getState().wallet.path;
  if (path) {
    yield NavigationService.navigate(routes.root.Home);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.INIT, initSaga);
}
