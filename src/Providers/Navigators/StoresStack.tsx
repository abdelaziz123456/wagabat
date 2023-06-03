import {StoreDetails, Stores} from '@Screens/index';
import React from 'react';
import {CustomColors} from '@Utiles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
let sharedOptions = {
  tabBarInactiveTintColor: CustomColors.dark80,
  tabBarActiveTintColor: 'black',
  headerShown: false,
};
export function StoresNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="allstores"
        component={Stores}
        options={{
          ...sharedOptions,
        }}
      />
      <Stack.Screen
        name="storeDetails"
        component={StoreDetails}
        options={{
          ...sharedOptions,
        }}
      />
    </Stack.Navigator>
  );
}
