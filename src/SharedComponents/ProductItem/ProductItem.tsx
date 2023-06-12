import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductItem.styles';
import {useNavigation} from '@react-navigation/native';

import {ProductItemScreenNavigationProp, Props} from './utiles';

export default function ProductItem({item}: Props) {
  const navigation = useNavigation<ProductItemScreenNavigationProp>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('productDetails', {
          itemId: item.id,
        })
      }>
      <View style={styles.mainContainer}>
        <Image source={item.image} style={styles.productIcon} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price} EGP</Text>
        </View>
      </View>
    </Pressable>
  );
}
