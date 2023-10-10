import React, {useState} from 'react';
import {AuthNavigator} from './Navigators/AuthNavigator';
import {UnAuthNavigator} from './Navigators/UnAuthNavigator';
import {SplashScreen} from '@Screens/index';

export default function NavWrapper() {
  const [auth, setAuth] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen setShowSplash={setShowSplash} />
  ) : auth ? (
    <AuthNavigator />
  ) : (
    <UnAuthNavigator />
  );
}
