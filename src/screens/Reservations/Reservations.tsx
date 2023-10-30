import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Reservations.styles';
import {Images} from '@assets/index';
import {CustomButton} from '@SharedComponents/index';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from '@Utiles/navigatorTypes';
import {ReservationsData} from '@Utiles/fakeData';

export default function Reservations() {
  const reservationsData = ReservationsData;
  const navigation = useNavigation<AuthStackNavigationProp>();

  return reservationsData.length ? (
    <View style={styles.dataContainer}>
      <Text>hello</Text>
    </View>
  ) : (
    <View style={styles.mainContainer}>
      <Image source={Images.reservsBG} style={styles.bg} />
      <Text style={styles.title}>You don’t have any reservation yet</Text>
      <Text style={styles.subtitle}>Do you want to reserve a table?</Text>
      <View style={{width: '100%'}}>
        <CustomButton
          pressHandler={() => {
            navigation.navigate('home', {
              screen: 'reserve',
            });
          }}
          btnTheme="blue">
          <Text style={styles.btnText}>Reserve a table</Text>
        </CustomButton>
      </View>
    </View>
  );
}
