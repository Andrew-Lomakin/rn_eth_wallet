import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 28,
  },

  balance: {
    fontSize: 16,
    opacity: 0.5,
  },

  placeholder: {
    paddingTop: 28,
    fontSize: 14,
    opacity: 0.3,
  },
  input: {
    fontSize: 18,
    padding: 0,
    paddingLeft: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,168,171,0.25)',
  },

  subscriptionContainer: {
    opacity: 0.3,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  subscription: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  subscriptionText: {
    padding: 0,
  },

  recommended: {
    fontSize: 12,
    opacity: 0.3,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  send: {
    flex: 1,
    maxWidth: '60%',
  },
});
