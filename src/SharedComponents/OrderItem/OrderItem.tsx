import {View, Text} from 'react-native';
import React from 'react';
import {DeliveryItemType} from '@Utiles/props';
import styles from './styles';
import {StatusPill} from '..';

const OrderItem = ({order}: {order: DeliveryItemType}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <StatusPill status={order.status} />
        <Text style={styles.date}>{order.date}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
