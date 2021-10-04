import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '@ui';

const COMMON_STYLE: TextStyle = {
  fontFamily: 'SF Pro Display Regular',
  fontSize: 17,
  fontWeight: 'bold',
  lineHeight: 20,
};

const P1_STYLE: TextStyle = {
  ...COMMON_STYLE,
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 17,
};

export default StyleSheet.create({
  h2Default: {
    ...COMMON_STYLE,
    color: COLORS.TEXT_DARK,
  },
  h2LowEmphasis: {
    ...COMMON_STYLE,
    color: COLORS.TEXT_LIGHT,
  },
  h2HighEmphasis: {
    ...COMMON_STYLE,
    color: COLORS.TEXT_EMPHASIS,
  },
  p1Default: {
    ...P1_STYLE,
    color: COLORS.TEXT_DARK,
  },
  p1LowEmphasis: {
    ...P1_STYLE,
    color: COLORS.TEXT_LIGHT,
  },
  header: {
    ...COMMON_STYLE,
    color: COLORS.BASE_WHITE,
  },
});
