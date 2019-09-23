// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { routes } from '~/navigation';
import Text from '~/components/Text';
import styles from './styles';

type Props = {
  navigation: {
    navigate: (string) => void,
    closeDrawer: () => void
  }
}

const Drawer = ({ navigation }: Props) => {
  const handleWallet = () => navigation.closeDrawer();
  const handleSend = () => navigation.navigate(routes.Home.Send);
  const handleReceive = () => navigation.navigate(routes.Home.Receive);
  const handleSettings = () => navigation.navigate(routes.Home.Settings);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleWallet} style={styles.button}>
        <Text>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReceive} style={styles.button}>
        <Text>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettings} style={styles.button}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;
