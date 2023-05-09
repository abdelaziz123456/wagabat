import {View, Text} from 'react-native';
import React from 'react';

import styles from './AuthScreen.styles';

//import {CustomTab} from '@SharedComponents/index';
import {CustomInput, CustomTab} from '@SharedComponents/index';
export default function AuthScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome !</Text>
      <Text style={styles.subTitle}>Sign Up or Login to Your Account</Text>
      <CustomTab toggleHandler={() => console.log('toggled')} />
      <CustomInput
        labelText="Password"
        inputConfig={{
          secureTextEntry: true,
          placeholder: 'Enter Your Password',
        }}
      />
    </View>
  );
}
