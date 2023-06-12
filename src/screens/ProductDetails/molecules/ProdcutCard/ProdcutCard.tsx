import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

import styles from './ProdcutCard.styles';
import {CardBase} from '@SharedComponents/index';
import {Images} from '@assets';
type Props = {
  img: string;
  name: string;
  price: number;
  disc: string;
};
export default function ProdcutCard({img, name, price, disc}: Props) {
  const [liked, setLiked] = useState(false);
  return (
    <CardBase customStyle={styles.mainContainer}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.imageStyle}
      />
      <View style={styles.details}>
        <View style={styles.detailsContent}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price} EGP</Text>
          </View>
          <Pressable onPress={() => setLiked(!liked)}>
            <Image
              source={liked ? Images.icons.likeImg : Images.icons.unLikedImg}
              style={styles.likeIcon}
            />
          </Pressable>
        </View>
        <Text style={{marginTop: 8}}>{disc}</Text>
      </View>
    </CardBase>
  );
}
