import React from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {Typography} from '@components';
import styles from './Header.style';
import {THeader} from './Header.type';
const BackIcon = require('../../assets/images/back-icon.png');

export const Header: React.FC<THeader> = ({title, onPressBack}) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={styles.statusBar.backgroundColor}
    />
    <View style={styles.headerContainer}>
      {onPressBack !== undefined ? (
        <Pressable style={styles.backIcon} onPress={onPressBack}>
          <Image source={BackIcon} />
        </Pressable>
      ) : null}
      <Typography style={styles.headerText} variant="header">
        {title}
      </Typography>
    </View>
  </SafeAreaView>
);
