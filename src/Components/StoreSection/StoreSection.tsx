import {View, Text, Image} from 'react-native';
import React from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './StoreSection.styles';
export default function StoreSection() {
  let imgSrc = '../../../assets/images/';
  return (
    <CardBase customStyle={styles.cardBaseStyle}>
      <View style={styles.subCard}>
        <Image source={require(imgSrc + 'store.png')} />
        <Text style={styles.title}>Store pickup</Text>
        <Text style={styles.subtitle}>Best quality</Text>
      </View>
      <View style={styles.subCard}>
        <Image source={require(imgSrc + 'delivery.png')} />
        <Text style={styles.title}>Delivery</Text>
        <Text style={styles.subtitle}>Always on time</Text>
      </View>
    </CardBase>
  );
}
