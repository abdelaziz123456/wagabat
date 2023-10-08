import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreen, WelcomeScreen} from '@Screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthStackParamList} from '@Utiles/navigatorTypes';
const Stack = createNativeStackNavigator<UnAuthStackParamList>();
export function UnAuthNavigator() {
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
