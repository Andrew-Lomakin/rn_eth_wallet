import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 28,
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  inputContainer: {
    flex: 1,
    width: '100%',
  },
  input: {
    flex: 1,
    marginVertical: 42,
    borderRadius: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderTopWidth: 2,
    borderTopColor: 'rgba(0,168,171,0.25)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,168,171,0.25)',
  },

  paste: {
    position: 'absolute',
    padding: 20,
    paddingRight: 20,
    bottom: 30,
    left: 0,
  },
  pasteText: {
    color: 'rgb(0,168,171)',
    textDecorationLine: 'underline',
  },
  invalid: {
    position: 'absolute',
    padding: 20,
    top: 30,
    right: 0,
    color: '#A60000',
    opacity: 0.8,
    textAlign: 'right',
    paddingRight: 14,
    paddingBottom: 7,
  },

  clear: {
    position: 'absolute',
    padding: 20,
    paddingLeft: 20,
    bottom: 30,
    right: 0,
  },
  clearText: {
    color: 'rgb(0,168,171)',
    textDecorationLine: 'underline',
  },

  next: {
    width: '100%',
    padding: 12,
  },
  bottomContainer: {
    width: '100%',
    justifyContent: 'flex-end',
  },

  warningText: {
    flex: 1,
    padding: 28,
    paddingTop: 56,
    textAlign: 'center',
    fontSize: 22,
  },
  qrcodeClose: {
    margin: 28,
  },
});
