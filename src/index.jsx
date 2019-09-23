// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../shim';

import { RootNavigator, NavigationService } from '~/navigation';
import { store, persistor } from '~/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    </PersistGate>
  </Provider>
);

export default App;
