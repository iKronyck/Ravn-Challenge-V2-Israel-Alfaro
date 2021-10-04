import React from 'react';
import {View} from 'react-native';
import styles from './NoticeCell.style';
import {TNoticeCell} from './NoticeCell.type';
import {Typography} from '@components';

export const NoticeCell: React.FC<TNoticeCell> = ({message}) => (
  <View style={styles.container}>
    <Typography variant="h2-high-emphasis">{message}</Typography>
  </View>
);
