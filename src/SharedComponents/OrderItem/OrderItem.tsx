import {View, Text, Image} from 'react-native';
import React from 'react';
import {DeliveryItemType} from '@Utiles/props';
import styles from './styles';
import {StatusPill} from '..';
import {Images} from '@assets/index';

const OrderItem = ({order}: {order: DeliveryItemType}) => {
  return (
    <View style={styles.mainContainer}>
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
    </View>
  );
};

export default OrderItem;
