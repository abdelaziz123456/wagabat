import {View, Text, Image} from 'react-native';
import React from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './StoreSection.styles';
import {useNavigation} from '@react-navigation/native';
export default function StoreSection() {
  let imgSrc = '../../../assets/images/';
  const navigation = useNavigation();
  return (
    <CardBase customStyle={styles.cardBaseStyle}>
      <View
        style={styles.subCard}
        onTouchEnd={() => navigation.navigate('home', {screen: 'store'})}>
        <Image source={require(imgSrc + 'store.png')} />
        <Text style={styles.title}>Store pickup</Text>
        <Text style={styles.subtitle}>Best quality</Text>
      </View>
      <View
        style={styles.subCard}
        onTouchEnd={() => navigation.navigate('home', {screen: 'delivery'})}>
        <Image source={require(imgSrc + 'delivery.png')} />
        <Text style={styles.title}>Delivery</Text>
        <Text style={styles.subtitle}>Always on time</Text>
      </View>
    </CardBase>
  );
}
