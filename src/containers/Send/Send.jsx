// @flow
import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Clipboard, Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { NavigationService } from '~/navigation';
import Text from '~/components/Text';
import Button from '~/components/Button';
import ScanQRCode from '~/components/ScanQRCode';
import { send as sendAction } from '~/store/wallet/actions';
import { toEth } from '~/utils/convert';
import styles from './styles';

const Web3 = require('web3');

type Props = {
  balance: string,
  send: ({
    address: string,
    amount: string,
    fee: string,
  }) => void,
}

const Send = ({ balance, send }: Props) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('0');
  const [fee, setFee] = useState('0');
  const [qrcodeScan, setQrcodeScan] = useState(false);
  const [loading, setLoading] = useState(false);

  const getFee = async () => {
    try {
      const web3 = new Web3(
        new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/__'),
      );
      const _fee = await web3.eth.getGasPrice();
      setFee(`${Math.ceil(_fee * 0.00000001)}`);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  useEffect(() => {
    getFee();
  }, []);

  const handlePaste = async () => {
    const paste = await Clipboard.getString();
    setAddress(paste);
  };

  const qrcodeFound = ({ barcodes }) => {
    if (!barcodes[0].data) return;
    setQrcodeScan(false);
    setAddress(barcodes[0].data);
  };

  const handleBack = () => NavigationService.pop();
  const openQRCode = () => setQrcodeScan(true);
  const closeQRCode = () => setQrcodeScan(false);

  const handleSend = () => {
    setLoading(true);
    send({ address, amount, fee });
  };

  const addressIsValid = Web3.utils.isAddress(address);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.balance}>{`Your balance: ${toEth(balance)}`}</Text>
          <Text style={styles.placeholder}>{!!address && 'Recipient'}</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Recipient"
            style={styles.input}
          />
          <View style={styles.subscriptionContainer}>
            <Button
              onPress={handlePaste}
              style={styles.subscription}
              styleText={styles.subscriptionText}
              secondary
            >
              paste
            </Button>
            <Button
              onPress={openQRCode}
              style={styles.subscription}
              styleText={styles.subscriptionText}
              secondary
            >
              scan qrcode
            </Button>
          </View>

          <Text style={styles.placeholder}>{!!amount && 'Amount'}</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Amount"
            style={styles.input}
          />

          <Text style={styles.placeholder}>{!!fee && 'Gas Prices in Gwei'}</Text>
          <TextInput
            value={fee}
            onChangeText={setFee}
            placeholder="Gas Prices in Gwei"
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleBack}
            style={styles.back}
            secondary
          >
            {'Cancel'}
          </Button>
          <Button
            onPress={handleSend}
            style={styles.send}
            disabled={!addressIsValid || loading}
          >
            {loading ? 'Sending to server...' : 'Send'}
          </Button>
        </View>
      </View>
      <ScanQRCode
        visible={qrcodeScan}
        found={qrcodeFound}
        close={closeQRCode}
      />
    </>
  );
};

export default connect(state => ({
  balance: state.wallet.balance,
}), {
  send: sendAction,
})(Send);
