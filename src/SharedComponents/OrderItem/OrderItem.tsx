import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {DeliveryItemType} from '@Utiles/props';
import styles from './styles';
import {StatusPill} from '..';
import {Images} from '@assets/index';
import {useNavigation} from '@react-navigation/native';
import {OrdersStackNavigationProp} from '@Utiles/navigatorTypes';

const OrderItem = ({order}: {order: DeliveryItemType}) => {
  const navigation = useNavigation<OrdersStackNavigationProp>();
  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate('orderDetails', {
          orderID: String(order.id),
          order: order,
        });
      }}>
      <View style={styles.headerContainer}>
        <StatusPill status={order.status} />
        <Text style={styles.date}>{order.date}</Text>
      </View>
      <View style={styles.content}>
        <View style={{...styles.locationItem, ...styles.borderBottom}}>
          <Image source={Images.icons.market} style={styles.addImage} />
          <Text style={styles.addressText}>{order.fromAddress}</Text>
        </View>
        <View style={styles.locationItem}>
          <Image
            source={
              order.type == 'delivery'
                ? Images.icons.locationGreen
                : Images.icons.timerOrange
            }
            style={styles.addImage}
          />
          <Text style={styles.addressText}>
            {order.type == 'delivery' ? order.toAddress : order.pickupTime}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View>
            {order.orders.map(order => {
              return (
                <Text
                  key={order.number}
                  style={
                    styles.detailsText
                  }>{`${order.name} (X${order.number}), ${order?.note}`}</Text>
              );
            })}
          </View>
          <View>
            <Text style={styles.priceText}>{order.totalCost} EGP</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default OrderItem;
