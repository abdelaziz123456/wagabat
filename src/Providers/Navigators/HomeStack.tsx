import {
  DeliveryScreen,
  HomeScreen,
  ProductDetails,
  Reservations,
  ReserveTable,
  StorePickupScreen,
} from '@Screens/index';
import React from 'react';
import {CustomColors} from '@Utiles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomHeader} from '@SharedComponents/index';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
let sharedOptions = {
  headerShown: false,
  tabBarInactiveTintColor: CustomColors.dark80,
  tabBarActiveTintColor: 'black',
  tabBarLabelStyle: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: '600',
  },
};
export function HomeNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="homescreen"
        component={HomeScreen}
        options={{
          ...sharedOptions,
        }}
      />
      <Stack.Screen
        name="reserve"
        component={ReserveTable}
        options={{
          ...sharedOptions,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="reservations"
        component={Reservations}
        options={{
          ...sharedOptions,
          title: 'My reservations',
          headerLeft: undefined,
          headerShown: true,
          headerTitle: () => {
            return (
              <CustomHeader
                headerTitle="My reservations"
                withBackIcon={true}
                pressHandler={() => {
                  navigation.goBack();
                }}
              />
            );
          },
          headerTitleAlign: 'left',
          headerTitleStyle: {},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="storepickup"
        component={StorePickupScreen}
        options={{
          ...sharedOptions,
        }}
      />
      <Stack.Screen
        name="delivery"
        component={DeliveryScreen}
        options={{
          ...sharedOptions,
        }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{
          ...sharedOptions,
        }}
      />
    </Stack.Navigator>
  );
}
