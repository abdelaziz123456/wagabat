import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import styles from './ProductItem.styles';

type Props = {
  item: {
    id: number;
    name: string;
    price: number;
    image: ImageSourcePropType;
    categoryId: number;
  };
};
export default function ProductItem({item}: Props) {
  return (
    <View style={styles.mainContainer}>
      <Image source={item.image} style={styles.productIcon} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price} EGP</Text>
      </View>
    </View>
  );
}
