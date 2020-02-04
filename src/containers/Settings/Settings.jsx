// @flow
import React from 'react';
import {
  View, Alert, Linking, Clipboard,
} from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';

import { routes } from '~/navigation';
import { quit as quitAction } from '~/store/wallet/actions';
import Button from '~/components/Button';
import styles from './styles';

type Props = {
  quit: () => void,
  navigation: {
    navigate: (string) => void
  }
}

const Settings = ({ quit, navigation }: Props) => {
  const handleWallet = () => {
    navigation.navigate(routes.Home.ShowWallet);
  };
  const handleContactEmail = () => {
    Linking.openURL('mailto:alomakin@sfxdx.ru?subject=MobileApp');
  };
  const handleContactTelegram = () => {
    Linking.openURL('tg://resolve?domain=found_null').catch(() => {
      Clipboard.setString('@found_null');
      Toast.show('Telegram username copied to clipboard', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
      });
    });
  };
  const handleQuit = () => {
    Alert.alert('Remove wallet?', 'This action cannot be undone.', [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      {
        text: 'Remove and quit',
        onPress: () => {
          quit();
          navigation.navigate(routes.root.Welcome);
        },
      },
    ]);
  };
  const handleBack = () => {
    navigation.navigate(routes.Home.Dashboard);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button style={styles.button} onPress={handleWallet}>
          Show wallet phrase and root key
        </Button>
        <Button style={styles.button} onPress={handleQuit}>Remove wallet</Button>
      </View>
      <View>
        <Button style={styles.button} onPress={handleContactEmail}>Contact me by email</Button>
        <Button style={styles.button} onPress={handleContactTelegram}>
          Contact me by telegram
        </Button>
        <View style={styles.space} />
        <View style={styles.space} />
        <Button style={styles.button} onPress={handleBack} secondary>
          return to the wallet screen
        </Button>
      </View>
    </View>
  );
};

export default connect(null, ({
  quit: quitAction,
}))(Settings);
