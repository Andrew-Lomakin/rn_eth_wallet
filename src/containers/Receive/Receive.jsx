// @flow
import React from 'react';
import { View, Clipboard, Share } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import QRCode from 'react-native-qrcode-smooth';

import { NavigationService, routes } from '~/navigation';
import Text from '~/components/Text';
import Button from '~/components/Button';
import styles from './styles';

type Props = {
  address: string
}

const Receive = ({ address }: Props) => {
  const handleCopy = () => {
    Clipboard.setString(address);
    Toast.show('address copied to clipboard', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };
  const handleShare = () => {
    Share.share({ message: address });
  };
  const handleBack = () => NavigationService.navigate(routes.Home.Dashboard);
  return (
    <View style={styles.container}>
      <QRCode
        value={address}
        size={300}
        color="black"
        backgroundColor="white"
      />
      <Text style={styles.address}>{address}</Text>
      <View>
        <Button style={styles.button} onPress={handleCopy}>Copy to clipboard</Button>
        <Button style={styles.button} onPress={handleShare}>Share address</Button>
        <Button style={styles.button} onPress={handleBack} secondary>
          return to the wallet screen
        </Button>
      </View>
    </View>
  );
};


export default connect(state => ({ address: state.wallet.address }))(Receive);
