// @flow
import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Animated, Clipboard, TouchableOpacity, Modal,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { mnemonicValid } from '~/utils/validate';
import { generateMnemonic } from '~/utils/mnemonic';
import Button from '~/components/Button';
import Text from '~/components/Text';
import ScanQRCode from '~/components/ScanQRCode';
import { createWallet as createWalletAction } from '~/store/welcome/actions';
import { init as initAction } from '~/store/init/actions';

const opacity = new Animated.Value(0);

type Props = {
  createWallet: (mnemonic: string) => void,
  init: () => {}
}
// slab shuffle liquid hedgehod eternal photo coil east rabbit shuffle blush hire
const CreateWallet = ({ createWallet, init }: Props) => {
  const [mnemonic, setMnemonic] = useState('');
  const [qrcodeScan, setQrcodeScan] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const buttonAnimation = (toValue: number) => {
    Animated.timing(
      opacity,
      { toValue, duration: 300 },
    ).start();
  };

  useEffect(() => { init(); }, []);

  useEffect(() => {
    if (mnemonic.length === 1) {
      buttonAnimation(1);
    }
    if (mnemonic.length === 0) {
      buttonAnimation(0);
    }
  }, [mnemonic]);

  const handleNext = () => {
    createWallet(mnemonic);
  };

  const handlePaste = async () => {
    const paste = await Clipboard.getString();
    buttonAnimation(+!!paste);
    setMnemonic(paste);
  };

  const handleClear = () => {
    buttonAnimation(0);
    setMnemonic('');
  };

  const valid = mnemonicValid(mnemonic);

  const qrcodeFound = ({ barcodes }) => {
    if (!barcodes[0].data) return;
    setQrcodeScan(false);
    setMnemonic(barcodes[0].data);
    buttonAnimation(1);
  };

  const generateWallet = async (): Promise<void> => {
    setShowWarning(true);
    setMnemonic(await generateMnemonic());
    buttonAnimation(1);
  };

  const openQRCode = () => setQrcodeScan(true);
  const closeQRCode = () => setQrcodeScan(false);
  const closeWarning = () => setShowWarning(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button onPress={openQRCode}>Scan QRcode</Button>
          <Button onPress={generateWallet} secondary>Create wallet</Button>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={mnemonic}
            placeholder="Enter phase"
            onChangeText={setMnemonic}
            style={styles.input}
            multiline
          />
          <TouchableOpacity style={styles.paste} onPress={handlePaste}>
            <Text style={styles.pasteText}>paste from buffer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clear} onPress={handleClear}>
            <Text style={styles.clearText}>clear</Text>
          </TouchableOpacity>
          {mnemonic.length > 0
            && !valid
            && <Text style={styles.invalid}>invalid phrase</Text>}
        </View>
        <View />
        <Animated.View style={[styles.bottomContainer, { opacity }]}>
          <Button
            disabled={!valid}
            onPress={handleNext}
            style={styles.next}
          >
            Next
          </Button>
        </Animated.View>
      </View>
      <ScanQRCode
        visible={qrcodeScan}
        found={qrcodeFound}
        close={closeQRCode}
      />
      <Modal
        animationType="fade"
        visible={showWarning}
      >
        <Text style={styles.warningText}>
          {`Attention!!\n
Save the recovery phrase in a safe place.`}
        </Text>
        <Button style={styles.qrcodeClose} onPress={closeWarning}>All right!</Button>
      </Modal>
    </>
  );
};


export default connect(null, {
  createWallet: createWalletAction,
  init: initAction,
})(CreateWallet);
