import React, {useState} from 'react';

import {AuthNavigator} from './Navigators/AuthNavigator';
import {UnAuthNavigator} from './Navigators/UnAuthNavigator';
type Props = {
  children?: React.ReactNode;
};

export default function NavWrapper() {
  const [auth, setAuth] = useState(false);
  return auth ? <AuthNavigator /> : <UnAuthNavigator />;
}
