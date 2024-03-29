import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '@Screens/index';
import {Image} from 'react-native';
import {iconsSource} from './utiles';
import {CustomColors} from '@Utiles/constants';
import {HomeNavigation} from './HomeStack';
import {StoresNavigator} from './StoresStack';
import {AuthStackParamList} from '@Utiles/navigatorTypes';
import OrdersStack from './OrdersStack';
let sharedOptions = {
  headerShown: false,
  tabBarInactiveTintColor: CustomColors.dark80,
  tabBarActiveTintColor: CustomColors.blue100,
  tabBarLabelStyle: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: '600',
  },
};

const Tab = createBottomTabNavigator<AuthStackParamList>();
export function AuthNavigator() {
  let image = (img: string, actImg: string, focused: boolean) => {
    return (
      <Image
        style={{height: 20, width: 20}}
        source={!focused ? iconsSource[img] : iconsSource[actImg]}
      />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: CustomColors.bgGrey,
            height: 80,
          },
        }}>
        <Tab.Screen
          name="home"
          component={HomeNavigation}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('homeActive', 'home', !props.focused);
            },
          }}
        />

        <Tab.Screen
          name="stores"
          component={StoresNavigator}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('discover', 'discoverActive', props.focused);
            },
          }}
        />
        <Tab.Screen
          name="orders"
          component={OrdersStack}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('orders', 'ordersActive', props.focused);
            },
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('profile', 'profileActive', props.focused);
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
