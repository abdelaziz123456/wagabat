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
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: CustomColors.textPrimary,
            }}>
            welcome to
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: CustomColors.textPrimary,
            }}>
            Wagabat App
          </Text>
        </View>
      </View>
      <View onTouchEnd={() => setExpand(!expand)} style={styles.expandIcon}>
        <Image source={icon} style={{width: 15, height: 15}} />
      </View>
    </View>
  );
}
