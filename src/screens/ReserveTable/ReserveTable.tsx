import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ReserveTable.styles';
import {Images} from '@assets/index';
import {useNavigation} from '@react-navigation/native';

export default function ReserveTable() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={Images.reservationBG}
        style={styles.headerCard}
        resizeMode="cover">
        <View style={styles.navigator}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={Images.icons.backButton} />
            </Pressable>
            <Text style={styles.headerText}>Find table</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.reserveContainer}>
        <Text>hello</Text>
      </View>
    </View>
  );
}
