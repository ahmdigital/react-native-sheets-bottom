import { StyleSheet, Dimensions } from 'react-native';

export const FULL_HEIGHT = Dimensions.get('window').height;
export const FULL_WIDTH = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: '#82B7E9',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
    width: FULL_WIDTH,
  },
  flatList: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingBottom: 16,
    paddingTop: 16,
    width: FULL_WIDTH,
  },
});
