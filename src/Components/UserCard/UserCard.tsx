import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './UserCard.styles';
import {Images} from '@assets';
export default function UserCard() {
  return (
    <View style={{paddingVertical: 16}}>
      <ImageBackground
        source={Images.userCard}
        style={styles.imageBG}
        imageStyle={{borderRadius: 6}}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={{...styles.textMain, fontSize: 14}}>Hello</Text>
            <Text style={{...styles.textMain, fontSize: 18}}>Abdelaziz</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...styles.textMain}}>Join date: 23/05/2023</Text>
            <Text style={{...styles.textMain, fontWeight: '700', fontSize: 20}}>
              420 points
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
