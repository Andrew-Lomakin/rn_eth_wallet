// @flow
const Web3 = require('web3');

export const toEth = (amount: string): string => {
  let eth = Web3.utils.fromWei(amount);
  if (eth.split('.')[1] && eth.split('.')[1].length > 4) {
    eth = [eth.split('.')[0], eth.split('.')[1].slice(0, 4)].join('.');
  }
  return eth;
};
