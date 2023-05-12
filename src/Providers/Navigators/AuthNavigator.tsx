import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WelcomeScreen} from '@Screens/index';
import {Image} from 'react-native';
import {iconsSource} from './utiles';
import {CustomColors} from '@Utiles/constants';
const Tab = createBottomTabNavigator();
export function AuthNavigator() {
  let sharedOptions = {
    headerShown: false,
    tabBarInactiveTintColor: CustomColors.dark80,
    tabBarActiveTintColor: 'black',
    tabBarLabelStyle: {
      fontSize: 16,
      marginBottom: 15,
      fontWeight: '600',
    },
  };
  let image = (img: string, actImg: string, focused: boolean) => {
    return (
      <Image
        style={{height: 30, width: 30}}
        source={!focused ? iconsSource[img] : iconsSource[actImg]}
      />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: CustomColors.light80,
            height: 80,
          },
        }}>
        <Tab.Screen
          name="home"
          component={WelcomeScreen}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('homeActive', 'home', !props.focused);
            },
          }}
        />
        <Tab.Screen
          name="discover"
          component={WelcomeScreen}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('discoverActive', 'discover', props.focused);
            },
          }}
        />
        <Tab.Screen
          name="delivery"
          component={WelcomeScreen}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('delivery', 'deliveryActive', props.focused);
            },
          }}
        />
        <Tab.Screen
          name="orders"
          component={WelcomeScreen}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('orders', 'ordersActive', props.focused);
            },
          }}
        />
        <Tab.Screen
          name="profile"
          component={WelcomeScreen}
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
