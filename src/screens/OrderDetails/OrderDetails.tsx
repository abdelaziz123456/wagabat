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
        tabBarStyle: {backgroundColor: CustomColors.bgGrey, height: 80},
        tabBarVisible: undefined,
      });
  }, [navigation]);

  let status = order.status;
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
          <Image source={matchedCover[status]} style={{width: '100%'}} />
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
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;
