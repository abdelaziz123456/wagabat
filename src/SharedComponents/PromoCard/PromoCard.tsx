import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './PromoCard.styles';
type Props = {
  img: any;
  discount: Number;
  title: string;
  time: string;
};
export default function PromoCard({img, discount, title, time}: Props) {
  return (
    <View style={styles.mainContainer}>
      <Image source={img} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{`${discount} % in all stores`}</Text>
      <Text style={styles.date}>{time}</Text>
    </View>
  );
}
