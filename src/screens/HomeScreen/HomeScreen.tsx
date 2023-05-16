import {View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';

import {ReserveSection, StoreSection} from '@Components/index';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <StoreSection />
      <ReserveSection />
    </View>
  );
}
