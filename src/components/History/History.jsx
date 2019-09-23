// @flow
import React from 'react';
import { FlatList, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import Text from '~/components/Text';
import Button from '~/components/Button';

import styles from './styles';

type ItemT = {
  to: string,
  amount: string,
  transactionHash: string,
  date: number,
}

type Props = {
  history: Array<ItemT>,
  address: string
}

const History = ({ history, address }: Props) => {
  const handleLink = (tx: string) => Linking.openURL(`https://etherscan.io/tx/${tx}`);
  const handleOpenWeb = () => Linking.openURL(`https://etherscan.io/address/${address}`);
  const Item = ({
    item: {
      to, amount, transactionHash, date,
    },
  }: {item: ItemT}) => (
    <View style={styles.item}>
      <Text style={styles.label} numberOfLines={1} ellipsizeMode="middle">
        To:
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="middle">
          {` ${to}`}
        </Text>
      </Text>
      <Text style={styles.label}>
        Amount:
        <Text style={styles.text}>
          {` ${amount}`}
        </Text>
      </Text>
      <Text>{date && dayjs(date).format('hh:mm DD/MM/YYYY')}</Text>
      <Button
        style={styles.button}
        styleText={styles.buttonText}
        onPress={() => handleLink(transactionHash)}
        secondary
      >
        look at etherscan.io
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        style={styles.openAll}
        onPress={handleOpenWeb}
        secondary
      >
        open all history on website
      </Button>
      <FlatList
        data={history}
        renderItem={Item}
        keyExtractor={({ transactionHash }) => transactionHash}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default connect(state => ({
  history: state.wallet.history,
  address: state.wallet.address,
}))(History);
