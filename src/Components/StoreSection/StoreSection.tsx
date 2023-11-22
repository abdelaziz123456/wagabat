import {View, Text, Image} from 'react-native';
import React from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './StoreSection.styles';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@assets';
import {AuthStackNavigationProp} from '@Utiles/navigatorTypes';
type Props = {
  withoutNavigation?: boolean;
};
export default function StoreSection({withoutNavigation = false}: Props) {
  const navigation = useNavigation<AuthStackNavigationProp>();
  return (
    <CardBase customStyle={styles.cardBaseStyle}>
      <View
        style={styles.subCard}
        onTouchEnd={() =>
          !withoutNavigation
            ? navigation.navigate('home', {screen: 'storepickup'})
            : {}
        }>
        <Image source={Images.store} />
        <Text style={styles.title}>Store pickup</Text>
        <Text style={styles.subtitle}>Best quality</Text>
      </View>
      <View
        style={styles.subCard}
        onTouchEnd={() =>
          !withoutNavigation
            ? navigation.navigate('home', {screen: 'delivery'})
            : {}
        }>
        <Image source={Images.delivery} />
        <Text style={styles.title}>Delivery</Text>
        <Text style={styles.subtitle}>Always on time</Text>
      </View>
    </CardBase>
  );
}
