import {View, Text} from 'react-native';
import React from 'react';
import styles from './PromoSection.styles';
import {PromoCard} from '@SharedComponents/index';
import {CampData} from './utiles';
export default function PromoSection() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Promotion campaign</Text>
      <View style={styles.cardsContainer}>
        {CampData.map((camp, ind) => (
          <PromoCard
            key={ind}
            img={camp.img}
            discount={camp.discount}
            time={camp.time}
            title={camp.title}
          />
        ))}
      </View>
    </View>
  );
}
