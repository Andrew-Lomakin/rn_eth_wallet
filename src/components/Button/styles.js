import { StyleSheet } from 'react-native';

const COLOR = '#00a8ab';

export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: COLOR,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  containerDisabled: {
    opacity: 0.5,
  },
  // Secondary
  containerSecondary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  textSecondary: {
    color: '#212121',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
