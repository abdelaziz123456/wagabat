import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DeliveryItemType} from './props';

export type AuthStackParamList = {
  orders: undefined;
  profile: undefined;
  stores: undefined;
  home: {
    screen: 'delivery' | 'storepickup' | 'reserve' | 'reservations';
  };
};

export type UnAuthStackParamList = {
  auth: undefined;
  welcome: undefined;
};

export type OrdersStackParamList = {
  ordersScreen: undefined;
  ordersHistory: undefined;
  orderDetails: {
    orderID: string;
    order: DeliveryItemType;
  };
};

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

export type UnAuthNavigationProp =
  NativeStackNavigationProp<UnAuthStackParamList>;

export type OrdersStackNavigationProp =
  NativeStackNavigationProp<OrdersStackParamList>;
