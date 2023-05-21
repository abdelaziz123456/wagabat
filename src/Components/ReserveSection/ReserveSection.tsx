import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ReserveSection.styles';
import CardBase from '@SharedComponents/CardBase/CardBase';
import {CustomButton} from '@SharedComponents/index';
export default function ReserveSection() {
  return (
    <View style={styles.mainContainer}>
      <CardBase>
        <View style={styles.upperSection}>
          <View>
            <Text style={styles.title}>Online Reservation</Text>
            <Text style={styles.subtitle}>Table taking</Text>
          </View>
          <Image source={require('../../../assets/images/table.png')} />
        </View>
        <View style={styles.lowerSection}>
          <CustomButton
            pressHandler={() => console.log('hello')}
            btnTheme={'outlined'}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../assets/images/timeTable.png')}
            />
            <Text style={styles.btnText}>Reserve a table</Text>
          </CustomButton>
          <CustomButton
            pressHandler={() => console.log('hello')}
            btnTheme={'outlined'}>
            <Text style={styles.btnText}>My reservation</Text>
          </CustomButton>
        </View>
      </CardBase>
    </View>
  );
}
