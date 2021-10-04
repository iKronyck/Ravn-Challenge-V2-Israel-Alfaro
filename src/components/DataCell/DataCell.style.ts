import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '@ui';

export default StyleSheet.create({
  container: {
    marginLeft: SIZES.MEDIUM,
    paddingRight: SIZES.MEDIUM,
    paddingVertical: SIZES.MEDIUM,
    flexDirection: 'row',
    borderBottomColor: COLORS.BLACK_01,
    borderBottomWidth: 1,
  },
  divider: {
    width: SIZES.MEDIUM,
  },
  text: {
    flex: 1,
  },
  textRight: {
    flex: 1,
    textAlign: 'right',
  },
});
