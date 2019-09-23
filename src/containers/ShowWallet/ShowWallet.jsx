// @flow
import React from 'react';
import { View, Clipboard, Share } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';

import { routes } from '~/navigation';
import Text from '~/components/Text';
import Button from '~/components/Button';
import styles from './styles';

type Props = {
  mnemonic: string,
  rootKey: string,
  navigation: {
    navigate: (string) => void
  }
}

const ShowWallet = ({ mnemonic, rootKey, navigation }: Props) => {
  const handleCopy = (text: string) => {
    Clipboard.setString(text);
    Toast.show('copied to clipboard', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };
  const handleShare = (text: string) => {
    Share.share({ message: text });
  };
  const handleBack = () => {
    navigation.navigate(routes.Home.Dashboard);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Phrase mnemonic</Text>
        <Text style={styles.text}>{mnemonic}</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => handleCopy(mnemonic)} secondary>copy</Button>
          <Button style={styles.button} onPress={() => handleShare(mnemonic)} secondary>
            share
          </Button>
        </View>
        <View style={styles.space} />
        <Text>Root key (bip32)</Text>
        <Text style={styles.text}>{rootKey}</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => handleCopy(rootKey)} secondary>copy</Button>
          <Button style={styles.button} onPress={() => handleShare(rootKey)} secondary>
            share
          </Button>
        </View>
      </View>

      <Button style={styles.button} onPress={handleBack} secondary>
          return to the wallet screen
      </Button>
    </View>
  );
};

export default connect(state => ({
  mnemonic: state.wallet.mnemonic,
  rootKey: state.wallet.rootKey,
}))(ShowWallet);
