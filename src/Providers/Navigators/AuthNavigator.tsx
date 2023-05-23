import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DeliveryScreen,
  HomeScreen,
  Reservations,
  ReserveTable,
  WelcomeScreen,
} from '@Screens/index';
import {Image} from 'react-native';
import {iconsSource} from './utiles';
import {CustomColors} from '@Utiles/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
const Stack = createNativeStackNavigator();
function HomeNavigation() {
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
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export function AuthNavigator() {
  let image = (img: string, actImg: string, focused: boolean) => {
    return (
      <Image
        style={{height: 25, width: 25}}
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
          name="delivery"
          component={DeliveryScreen}
          options={{
            ...sharedOptions,
            tabBarIcon: props => {
              return image('delivery', 'deliveryActive', props.focused);
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
