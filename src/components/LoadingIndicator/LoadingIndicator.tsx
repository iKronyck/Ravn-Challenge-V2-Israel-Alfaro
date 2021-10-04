import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Typography} from '@components';
import styles from './LoadingIndicator.style';
import {TLoadingIndicator} from './LoadingIndicator.type';

export const LoadingIndicator: React.FC<TLoadingIndicator> = ({message}) => (
  <View style={styles.container}>
    <ActivityIndicator color={styles.indicator.color} />
    <Typography variant="h2-low-emphasis" style={styles.text}>
      {message}
    </Typography>
  </View>
);
