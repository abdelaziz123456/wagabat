import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {OrdersStackParamList} from '@Utiles/navigatorTypes';
import styles from './OrderDetails.styles';
import {Images} from '@assets/index';
import {CustomColors} from '@Utiles/constants';
import {matchedCover} from './utiles';
import {Divider} from '@SharedComponents/index';
import {SupportModal} from '@Components/index';

type Props = {
  route: RouteProp<OrdersStackParamList, 'orderDetails'>;
};

const OrderDetails = ({route}: Props) => {
  const {orderID, order} = route.params;
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {backgroundColor: CustomColors.bgGrey, height: 80},
        tabBarVisible: undefined,
      });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={Images.icons.backButton} />
          </Pressable>

          <Text style={styles.headerTitle}>Order {orderID}</Text>
        </View>
        <View style={styles.coverContainer}>
          <Image source={matchedCover[order.status]} style={{width: '100%'}} />
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{order.status}</Text>
          <TouchableOpacity
            style={styles.supportWrapper}
            onPress={() => setVisible(true)}>
            <Text style={styles.supportText}>Contact support</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>General details</Text>
          <View style={styles.generalDetailsWrapper}>
            <View style={styles.generalInfoCard}>
              <Text style={{color: CustomColors.textPrimary}}>Order ID</Text>
              <Text style={styles.generalInfoRight}>{order.id}</Text>
            </View>
            <Divider />
            <View style={styles.generalInfoCard}>
              <Text style={styles.primaryText}>Order date</Text>
              <Text style={styles.generalInfoRight}>{order.date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>Shipping details</Text>
          <View style={styles.generalDetailsWrapper}>
            <View style={styles.shippingDetailsCard}>
              <Image
                source={
                  order.type == 'delivery'
                    ? Images.icons.market
                    : Images.icons.addressIcon
                }
                style={styles.cardIcon}
              />
              <View>
                <Text style={styles.primaryText}>From store</Text>
                <Text style={styles.generalInfoRight}>{order.fromAddress}</Text>
              </View>
            </View>
            <Divider />
            <View style={styles.shippingDetailsCard}>
              <Image
                source={
                  order.type == 'delivery'
                    ? Images.icons.locationGreen
                    : Images.icons.timerOrange
                }
                style={styles.cardIcon}
              />
              <View>
                <Text style={styles.primaryText}>
                  {order.type == 'delivery' ? 'To' : 'Pick up time'}
                </Text>
                <Text style={styles.generalInfoRight}>
                  {order.type == 'delivery'
                    ? order.toAddress
                    : order.pickupTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>product info</Text>
          <View style={styles.productContainer}>
            {order.orders.map(order => {
              return (
                <View key={order.name} style={{paddingVertical: 8}}>
                  <View
                    style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <Image
                      source={
                        order.name == 'Capuccino'
                          ? Images.products.capuccino
                          : Images.products.burger
                      }
                      style={{width: 40, height: 40, marginRight: 8}}
                    />
                    <View>
                      <Text
                        style={{
                          ...styles.primaryText,
                          fontWeight: '700',
                          marginTop: 2,
                        }}>
                        {order.name}
                      </Text>
                      <Text
                        style={{
                          marginVertical: 5,
                          color: CustomColors.textSecondary,
                        }}>
                        X{order.number}
                      </Text>
                      {order.note && (
                        <Text
                          style={{
                            color: CustomColors.textSecondary,
                          }}>
                          {order.note}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>Payment info</Text>
          <View style={styles.paymentWrapper}>
            <Image source={Images.icons.momoIcon} style={{marginRight: 8}} />
            <View>
              <Text style={{lineHeight: 21}}>Payment method</Text>
              <Text style={{lineHeight: 21, marginTop: 4, fontWeight: '700'}}>
                Momo
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.generalDetailsWrapper}>
            <View style={styles.generalInfoCard}>
              <Text style={{color: CustomColors.textPrimary}}>Price</Text>
              <Text style={styles.generalInfoRight}>319 EGP</Text>
            </View>

            <View style={styles.generalInfoCard}>
              <Text style={styles.primaryText}>Shipping fee</Text>
              <Text style={styles.generalInfoRight}>11 EGP</Text>
            </View>
            <View style={styles.generalInfoCard}>
              <Text style={{color: CustomColors.textPrimary}}>Promotion</Text>
              <Text
                style={{
                  ...styles.generalInfoRight,
                  color: CustomColors.success,
                }}>
                -30 EGP
              </Text>
            </View>

            <View style={styles.generalInfoCard}>
              <Text style={styles.primaryText}>Total</Text>
              <Text style={styles.generalInfoRight}>300 EGP</Text>
            </View>
          </View>
        </View>
      </View>
      <SupportModal
        setVisible={setVisible}
        isVisible={isVisible}
        address={order.toAddress}
      />
    </ScrollView>
  );
};

export default OrderDetails;
