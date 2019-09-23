// @flow
import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

const styles = StyleSheet.create({
  qrcodeCamera: {
    flex: 1,
    width: '100%',
  },
  qrcodeClose: {
    position: 'absolute',
    width: '50%',
    left: '25%',
    bottom: 28,
  },
});

type Props = {
  visible: boolean,
  found: () => void,
  close: () => void
}

export default ({ visible, found, close }: Props) => (
  <Modal
    animationType="slide"
    visible={visible}
  >
    <RNCamera
      style={styles.qrcodeCamera}
      captureAudio={false}
      onGoogleVisionBarcodesDetected={found}
    >
      <Button style={styles.qrcodeClose} onPress={close}>Сancel</Button>
    </RNCamera>
  </Modal>
);
