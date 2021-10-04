import {TextProps} from 'react-native';

export enum EVariants {
  H2_DEFAULT = 'h2-default',
  H2_LOW_EMPHASIS = 'h2-low-emphasis',
  H2_HIGH_EMPHASIS = 'h2-high-emphasis',
  P1_DEFAULT = 'p1-default',
  P1_LOW_EMPHASIS = 'p1-low-emphasis',
  HEADER = 'header',
}

type TVariants =
  | 'h2-default'
  | 'h2-low-emphasis'
  | 'h2-high-emphasis'
  | 'p1-default'
  | 'p1-low-emphasis'
  | 'header';

export type TTypography = TextProps & {
  variant?: TVariants;
};
