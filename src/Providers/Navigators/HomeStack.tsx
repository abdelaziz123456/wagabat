import {
  DeliveryScreen,
  HomeScreen,
  Reservations,
  ReserveTable,
  StorePickupScreen,
} from '@Screens/index';
import React from 'react';
import {CustomColors} from '@Utiles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="reservations"
        component={Reservations}
        options={{
          ...sharedOptions,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="storepickup"
        component={StorePickupScreen}
        options={{
          ...sharedOptions,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="delivery"
        component={DeliveryScreen}
        options={{
          ...sharedOptions,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
