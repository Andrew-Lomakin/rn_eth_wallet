// @flow
import types from './types';

export type Wallet = {
  rootKey: string,
  mnemonic: string,
  address: string,
  balance: string,
  address: string,
  path: string,
  history: Array<{
    to: string,
    amount: string,
    transactionHash: string,
    date: number,
  }>,
};

type actionType = {
  type: string,
  payload: Wallet,
};

const initialState = {
  rootKey: '',
  mnemonic: '',
  path: '',
  balance: '',
  address: '',
  history: [],
};

export default (state: Wallet = initialState, action: actionType) => {
  switch (action.type) {
    case types.SET_WALLET: {
      return {
        ...state,
        rootKey: action.payload.rootKey,
        mnemonic: action.payload.mnemonic,
        address: action.payload.address,
        path: action.payload.path,
      };
    }
    case types.SET_BALANCE: {
      return {
        ...state,
        balance: action.payload.balance,
      };
    }
    case types.ADD_HISTORY: {
      return {
        ...state,
        history: [
          action.payload.history,
          ...state.history,
        ],
      };
    }
    case types.CHANGE_ADDRESS: {
      return {
        ...state,
        address: action.payload.address,
        path: action.payload.path,
      };
    }
    case types.QUIT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
