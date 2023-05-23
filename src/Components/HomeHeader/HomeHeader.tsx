import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './HomeHeader.styles';

export default function HomeHeader() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require('../../../assets/icons/userIcon.png')} />
      </View>
      <View>
        <Text>Right</Text>
      </View>
    </View>
  );
}
