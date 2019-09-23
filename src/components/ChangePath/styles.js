import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    width: '80%',
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
  },

  input: {
    fontSize: 16,
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,168,171,0.25)',
  },

  supportBlock: {
    flexDirection: 'row',
  },
  support: {
    width: 28,
    paddingVertical: 0,
    alignItems: 'center',
    marginRight: 7,
    marginTop: 7,
    marginBottom: 28,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'rgba(0,168,171,0.25)',
  },

  reset: {
    position: 'absolute',
    top: -10,
    right: -14,
    opacity: 0.7,
  },
});
