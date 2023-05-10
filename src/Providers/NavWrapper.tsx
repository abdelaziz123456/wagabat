import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, WelcomeScreen} from '@Screens/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
type Props = {
  children?: React.ReactNode;
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UnAuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function NavWrapper() {
  const [auth, setAuth] = useState(false);
  return <UnAuthNavigator />;
}
