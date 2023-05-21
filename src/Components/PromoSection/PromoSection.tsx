import {View, Text} from 'react-native';
import React from 'react';
import styles from './PromoSection.styles';
import {PromoCard} from '@SharedComponents/index';
export default function PromoSection() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Promotion campaign</Text>
      <View style={styles.cardsContainer}>
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </View>
    </View>
  );
}
