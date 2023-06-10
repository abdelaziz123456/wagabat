import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './StoreListITem.styles';
import {CardBase} from '@SharedComponents/index';
import {Images} from '@assets';
type Props = {
  onPressHandler: Function;
  item: {
    name: string;
    id: number;
    type: string;
    address: string;
  };
};
export default function StoreListITem({item, onPressHandler}: Props) {
  return (
    <Pressable onPress={() => onPressHandler()} style={{margin: 10}}>
      <CardBase customStyle={styles.container}>
        <Image
          source={Images.icons.storeItem}
          style={{marginTop: 3, marginRight: 10}}
        />
        <View style={{padding: 0, margin: 0}}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{item.address}</Text>
        </View>
      </CardBase>
    </Pressable>
  );
}
