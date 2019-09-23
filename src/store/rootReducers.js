import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import wallet from './wallet/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  wallet: persistReducer(rootPersistConfig, wallet),
});
