import React from 'react';
import {View} from 'react-native';
import styles from './DataCell.style';
import {TDataCell} from './DataCell.type';
import {Typography} from '@components';

export const DataCell: React.FC<TDataCell> = ({title, information}) => (
  <View style={styles.container}>
    <Typography style={styles.text} variant="h2-low-emphasis">
      {title}
    </Typography>
    <View style={styles.divider} />
    <Typography style={styles.textRight}>{information}</Typography>
  </View>
);
