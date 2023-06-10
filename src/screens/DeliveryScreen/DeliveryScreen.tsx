import {View, Text} from 'react-native';
import React from 'react';
import {ScreenHeader} from '@Components/index';
import {Images} from '@assets';
import styles from './DeliveryScreen.styles';
export default function DeliveryScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScreenHeader imageSource={Images.icons.backButton} title={'Delivery'} />
      <Text>DeliveryScreen</Text>
    </View>
  );
}
