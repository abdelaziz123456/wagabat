import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

export type UnAuthNavigationProp =
  NativeStackNavigationProp<UnAuthStackParamList>;
