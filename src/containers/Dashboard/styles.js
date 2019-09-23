import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'rgb(0,168,171)',
    padding: 28,
    paddingBottom: 7,
    borderBottomStartRadius: 14,
    alignItems: 'flex-end',
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  menu: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  addressContainer: {
    overflow: 'visible',
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: 14,
  },
  addressContainerOpen: {
    paddingBottom: 24,
  },
  address: {
    width: '95%',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  addressHint: {
    color: 'white',
    fontSize: 12,
    opacity: 0.7,
    letterSpacing: -0.5,
  },
  addressCopyContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 108,
    padding: 20,
    paddingHorizontal: 40,
    opacity: 0.9,
  },
  addressCopy: {
    letterSpacing: 1,
    color: 'white',
    textDecorationLine: 'underline',
  },

  pathBlock: {
    opacity: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  path: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  changePath: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
    letterSpacing: 0.5,
  },

  balance: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 3,
  },
  balanceCode: {
    fontSize: 20,
    letterSpacing: -1,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 14,
  },

  button: {
    minWidth: '30%',
  },
});
