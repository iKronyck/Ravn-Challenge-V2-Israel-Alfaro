import React from 'react';
import {View} from 'react-native';
import styles from './SectionHeader.style';
import {TSectionHeader} from './SectionHeader.type';
import {Typography} from '@components';

export const SectionHeader: React.FC<TSectionHeader> = ({message}) => (
  <View style={styles.container}>
    <Typography>{message}</Typography>
  </View>
);
