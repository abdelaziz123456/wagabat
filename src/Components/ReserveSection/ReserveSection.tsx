import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ReserveSection.styles';
import CardBase from '@SharedComponents/CardBase/CardBase';
import {CustomButton} from '@SharedComponents/index';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@assets';
import {AuthStackNavigationProp} from '@Utiles/navigatorTypes';

export default function ReserveSection() {
  const navigation = useNavigation<AuthStackNavigationProp>();
  return (
    <View style={styles.mainContainer}>
      <CardBase>
        <View style={styles.upperSection}>
          <View>
            <Text style={styles.title}>Online Reservation</Text>
            <Text style={styles.subtitle}>Table taking</Text>
          </View>
          <Image source={Images.table} />
        </View>
        <View style={styles.lowerSection}>
          <CustomButton pressHandler={() => null} btnTheme={'outlined'}>
            <Image style={{marginRight: 10}} source={Images.timeTable} />
            <Text style={styles.btnText}>Reserve a table</Text>
          </CustomButton>
          <CustomButton
            pressHandler={() =>
              navigation.navigate('home', {screen: 'reservations'})
            }
            btnTheme={'outlined'}>
            <Text style={styles.btnText}>My reservation</Text>
          </CustomButton>
        </View>
      </CardBase>
    </View>
  );
}
