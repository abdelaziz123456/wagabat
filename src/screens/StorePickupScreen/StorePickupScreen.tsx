import {View} from 'react-native';
import React from 'react';
import styles from './StorePickupScreen.styles';

import {ScreenHeader} from '@Components/index';
import {Images} from '@assets';
export default function StorePickupScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScreenHeader
        imageSource={Images.icons.backButton}
        title={'Store pickup'}
      />
    </View>
  );
}
