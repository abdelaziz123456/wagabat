import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './HomeHeader.styles';
import {CustomColors} from '@Utiles/constants';
import {Images} from '@assets';
type Props = {
  expand: boolean;
  setExpand: Function;
};
export default function HomeHeader({expand, setExpand}: Props) {
  let icon = !expand ? Images.icons.expand : Images.icons.compress;
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={Images.icons.userIcon} style={{marginRight: 14}} />
        <View>
          <Text style={{fontSize: 14, fontWeight: '400'}}>welcome to </Text>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Wagabat App </Text>
        </View>
      </View>
      <View
        onTouchEnd={() => setExpand(!expand)}
        style={{
          backgroundColor: CustomColors.bgGrey2,
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          borderRadius: 20,
        }}>
        <Image source={icon} style={{width: 15, height: 15}} />
      </View>
    </View>
  );
}
