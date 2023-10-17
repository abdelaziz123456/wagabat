import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './OrdersHeader.styles';
import {Images} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {OrdersStackNavigationProp} from '@Utiles/navigatorTypes';
type Props = {
  headerTitle: string;
};
const OrdersHeader = ({headerTitle}: Props) => {
  const navigation = useNavigation<OrdersStackNavigationProp>();
  if (headerTitle == 'Orders') {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('ordersHistory');
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
