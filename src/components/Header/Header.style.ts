import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '@ui';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.RAVN_BLACK,
  },
  statusBar: {
    backgroundColor: COLORS.RAVN_BLACK,
  },
  headerContainer: {
    marginHorizontal: SIZES.MEDIUM,
    flexDirection: 'row',
    marginVertical: SIZES.MEDIUM,
    backgroundColor: COLORS.RAVN_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
  },
  headerText: {
    textAlign: 'center',
  },
});
