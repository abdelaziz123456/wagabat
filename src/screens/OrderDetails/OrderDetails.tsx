import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {OrdersStackParamList} from '@Utiles/navigatorTypes';
import styles from './OrderDetails.styles';
import {Images} from '@assets/index';
import {CustomColors} from '@Utiles/constants';
import {matchedCover} from './utiles';
import {Divider} from '@SharedComponents/index';

type Props = {
  route: RouteProp<OrdersStackParamList, 'orderDetails'>;
};

const OrderDetails = ({route}: Props) => {
  const {orderID, order} = route.params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({
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
            onPress={() => console.log('pressed')}>
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
          <Text style={styles.titleText}>Shipping details</Text>
          <View style={styles.generalDetailsWrapper}>
            <Divider />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;
