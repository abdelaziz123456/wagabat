import {ScrollView} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';

import {
  HomeHeader,
  PromoSection,
  ReserveSection,
  StoreSection,
} from '@Components/index';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <HomeHeader />
      <StoreSection />
      <ReserveSection />
      <PromoSection />
    </ScrollView>
  );
}
