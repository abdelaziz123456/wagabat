import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './StoreListITem.styles';
import {CardBase} from '@SharedComponents/index';
type Props = {
  item: {
    name: string;
    id: number;
    type: string;
    address: string;
  };
};
export default function StoreListITem({item}: Props) {
  return (
    <CardBase customStyle={styles.container}>
      <Image
        source={require('../../../assets/icons/storeItem.png')}
        style={{marginTop: 3, marginRight: 10}}
      />
      <View style={{padding: 0, margin: 0}}>
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
            fontSize: 14,
            marginBottom: 4,
          }}>
          {item.name}
        </Text>
        <Text>{item.address}</Text>
      </View>
    </CardBase>
  );
}
