import React, {useEffect, useState} from 'react';
import styles from './AuthScreen.styles';
import {KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import {CustomButton, CustomTab} from '@SharedComponents/index';
import Login from './MiniComponents/Login';
import SignUp from './MiniComponents/SignUp';
import {validationHandler} from './utiles';
export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState(true);
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: '',
    phone: '',
    passwordConfirm: '',
    name: '',
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validationHandler(enteredData, activeTab, setIsValid);
  }, [enteredData, activeTab]);
  return (
    <KeyboardAvoidingView
      style={styles.avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.title}>Welcome !</Text>
        <Text style={styles.subTitle}>Sign Up or Login to Your Account</Text>
        <CustomTab
          toggleHandler={() => {
            setEnteredData({
              email: '',
              password: '',
              phone: '',
              passwordConfirm: '',
              name: '',
            });
            setActiveTab(!activeTab);
          }}
        />
        {activeTab ? (
          <Login enteredData={enteredData} setEnteredData={setEnteredData} />
        ) : (
          <SignUp enteredData={enteredData} setEnteredData={setEnteredData} />
        )}
      </ScrollView>
      <CustomButton
        disabled={!isValid}
        CustomStyles={styles.customBtn}
        pressHandler={() => {}}
        btnTheme={isValid ? 'blue' : 'disabledBlue'}>
        <Text style={styles.btnText}>{activeTab ? 'Login' : 'Sign Up'}</Text>
      </CustomButton>
    </KeyboardAvoidingView>
  );
}
