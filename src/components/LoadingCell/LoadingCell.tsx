import React from 'react';
import {View} from 'react-native';
import styles from './LoadingCell.style';
import {LoadingIndicator} from '../LoadingIndicator/LoadingIndicator';

export const LoadingCell = () => (
  <View style={styles.container}>
    <LoadingIndicator message="Loading" />
  </View>
);
