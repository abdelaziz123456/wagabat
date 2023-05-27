import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {UserCard} from '@Components/index';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './Profile.styles';
export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../assets/images/profileIcon.png')} />
          <Text style={styles.username}>Abdelaziz Mohamed</Text>
        </View>

        <UserCard />
        <CardBase customStyle={{alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/barcode.png')}
            style={{marginBottom: 8}}
          />
          <Text style={{color: 'black'}}>42069-69420-42069</Text>
        </CardBase>
        <CardBase customStyle={styles.support}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/images/support.png')}
              style={{marginRight: 8}}
            />
            <View>
              <Text style={{color: 'black'}}>Support</Text>
              <Text style={{fontSize: 12}}>Call or chat with us </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../../assets/icons/arrowRightBlack.png')}
              style={{width: 20, height: 20}}
            />
          </View>
        </CardBase>

        <Text style={styles.link}>Terms and Conditions</Text>
        <Text style={{textAlign: 'center', marginTop: 14}}>version: 1.0.0</Text>
      </View>
    </ScrollView>
  );
}
