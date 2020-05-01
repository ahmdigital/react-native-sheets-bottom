import { StyleSheet, Dimensions } from 'react-native';

export const FULL_HEIGHT = Dimensions.get('window').height;
export const FULL_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  background: {
    alignItems: 'center',
    height: FULL_HEIGHT,
    justifyContent: 'center',
    position: 'absolute',
    width: FULL_WIDTH,
    zIndex: 1,
  },
  panel: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 20,
    bottom: 0,
    display: 'flex',
    elevation: 1,
    flexDirection: 'column',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    transform: [{ translateY: FULL_HEIGHT - 100 }],
    width: FULL_WIDTH - 50,
    zIndex: 2,
  },
  scrollViewContentContainerStyle: {
    width: '100%',
  },
});
