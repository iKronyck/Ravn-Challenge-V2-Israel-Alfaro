import React from 'react';
import {Text} from 'react-native';
import styles from './Typography.style';
import {TTypography, EVariants} from './Typography.type';

export const Typography: React.FC<TTypography> = ({
  variant,
  children,
  style,
  ...restProps
}) => {
  const getStyles = () => {
    switch (variant) {
      case EVariants.H2_LOW_EMPHASIS:
        return styles.h2LowEmphasis;
      case EVariants.H2_HIGH_EMPHASIS:
        return styles.h2HighEmphasis;
      case EVariants.P1_DEFAULT:
        return styles.p1Default;
      case EVariants.P1_LOW_EMPHASIS:
        return styles.p1LowEmphasis;
      case EVariants.HEADER:
        return styles.header;
      default:
        return styles.h2Default;
    }
  };

  const dynamicStyle = getStyles();

  return (
    <Text {...restProps} style={[style, dynamicStyle]}>
      {children}
    </Text>
  );
};
