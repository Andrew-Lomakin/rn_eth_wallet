// @flow
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Clipboard } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';

import { NavigationService, routes } from '~/navigation';
import Text from '~/components/Text';
import Button from '~/components/Button';
import ChangePath from '~/components/ChangePath';
import History from '~/components/History';
import { getBalance as getBalanceAction, changePath as changePatchAction } from '~/store/wallet/actions';
import { toEth } from '~/utils/convert';
import styles from './styles';

type Props = {
  address: string,
  balance: string,
  path: string,
  getBalance: ({ address: string }) => void,
  changePatch: (path: string) => void,
  navigation: {
    openDrawer: () => void
  }
}

const Dashboard = ({
  address, balance, path, getBalance, changePatch, navigation,
}: Props) => {
  const [addressOpen, setAddressOpen] = useState(false);
  const [visibleChangePath, setVisibleChangePath] = useState(false);
  useEffect(() => {
    getBalance({ address });
  }, []);
  const handleAddress = () => setAddressOpen(!addressOpen);
  const handleAddressCopy = () => {
    Clipboard.setString(address);
    Toast.show('address copied to clipboard', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };
  const handleSend = () => NavigationService.navigate(routes.Home.Send);
  const handleReceive = () => NavigationService.navigate(routes.Home.Receive);
  const handleCloseChangePath = () => setVisibleChangePath(false);
  const handleOpenChangePath = () => setVisibleChangePath(true);
  const handleMenu = () => {
    navigation.openDrawer();
  };
  const hitSlop = {
    top: 40, left: 40, bottom: 40, right: 40,
  };
  return (
    <>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.drawer}
            onPress={handleMenu}
            hitSlop={hitSlop}
          >
            <Text style={styles.menu}>&#9776;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pathBlock}
            onPress={handleOpenChangePath}
            hitSlop={hitSlop}
          >
            <Text style={styles.path}>{`Path: ${path}  `}</Text>
            <Text style={styles.changePath}>change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.addressContainer, addressOpen && styles.addressContainerOpen]}
          onPress={handleAddress}
        >
          <Text numberOfLines={1 + addressOpen} ellipsizeMode="middle" style={styles.address}>{address}</Text>
          {!addressOpen && <Text style={styles.addressHint}>click to show full address </Text>}
        </TouchableOpacity>
        {addressOpen && (
          <TouchableOpacity style={styles.addressCopyContainer} onPress={handleAddressCopy}>
            <Text style={styles.addressCopy}>Copy</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.balance}>
          {`Balance: ${toEth(balance)} `}
          {balance && <Text style={styles.balanceCode}>ETH</Text>}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleSend} style={styles.button} disabled={!balance}>Send</Button>
        <Button onPress={handleReceive} style={styles.button}>Receive</Button>
      </View>

      <History />
      <ChangePath
        visible={visibleChangePath}
        path={path}
        change={changePatch}
        close={handleCloseChangePath}
      />
    </>
  );
};

export default connect(state => ({
  address: state.wallet.address,
  balance: state.wallet.balance,
  path: state.wallet.path,
}), {
  getBalance: getBalanceAction,
  changePatch: changePatchAction,
})(Dashboard);
