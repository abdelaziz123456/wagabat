import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './OrdersHeader.styles';
import {Images} from '@assets';
type Props = {
  headerTitle: string;
};
const OrdersHeader = ({headerTitle}: Props) => {
  if (headerTitle == 'Orders') {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <Pressable
          onPress={() => {
            console.log('hello');
          }}>
          <Image source={Images.icons.historyIcon} />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default OrdersHeader;
