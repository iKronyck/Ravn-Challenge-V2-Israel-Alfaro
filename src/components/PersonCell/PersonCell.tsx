import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {Typography} from '@components';
import styles from './PersonCell.style';
import {TPersonCell} from './PersonCell.type';

const ArrowRightIcon = require('../../assets/images/arrow-right-icon.png');

export const PersonCell: React.FC<TPersonCell> = ({
  name,
  profession,
  onPress,
}) => (
  <View style={styles.container}>
    <View style={styles.informationContainer}>
      <Typography numberOfLines={2}>{name}</Typography>
      <Typography variant="p1-low-emphasis" numberOfLines={1}>
        {profession}
      </Typography>
    </View>
    <Pressable style={styles.arrowRight} onPress={onPress}>
      <Image source={ArrowRightIcon} />
    </Pressable>
  </View>
);
