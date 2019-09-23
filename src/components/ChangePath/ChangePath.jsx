// @flow
import React, { useEffect, useState } from 'react';
import {
  Modal, View, TextInput, TouchableOpacity,
} from 'react-native';

import Button from '~/components/Button';
import Text from '~/components/Text';
import styles from './styles';

type Props = {
  path: string,
  visible: boolean,
  change: (string) => {},
  close: () => {}
}

export default ({
  path, visible, change, close,
}: Props) => {
  const [_path, setPath] = useState('');

  useEffect(() => {
    setPath(path);
  }, [visible]);

  const pushSymbol = symbol => setPath(`${_path}${symbol}`);
  const reset = () => setPath("m/44'/60'/0'/0/0");
  const handleChange = () => {
    close();
    change(_path);
  };
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.block}>
          <TextInput
            value={_path}
            onChangeText={setPath}
            style={styles.input}
          />
          <View style={styles.supportBlock}>
            <TouchableOpacity style={styles.support} onPress={() => pushSymbol('/')}>
              <Text style={styles.supportText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.support} onPress={() => pushSymbol('\'')}>
              <Text style={styles.supportText}>{'\''}</Text>
            </TouchableOpacity>
          </View>
          <Button onPress={handleChange}>Ok</Button>
          <Button onPress={close} secondary>Close</Button>

          <Button onPress={reset} style={styles.reset} secondary>set default</Button>
        </View>
      </View>
    </Modal>
  );
};
