import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    borderTopWidth: 2,
    borderTopColor: 'rgba(0,168,171,0.25)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0)',
  },
  flatListContent: {
    paddingBottom: 28,
  },
  openAll: {
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },
  item: {
    paddingVertical: 7,
    marginHorizontal: 28,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,168,171,0.25)',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  button: {
    position: 'absolute',
    bottom: 7,
    right: 0,
    paddingVertical: 0,

  },
  buttonText: {
    fontSize: 12,
    opacity: 0.5,
  },
});
