import React from 'react';
import {View} from 'react-native';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import CustomTab from './src/SharedComponents/CustomTab/CustomTab';

function App() {
  return (
    <>
      <AuthScreen />
      {/* <WelcomeScreen /> */}
    </>
  );
}

export default App;
