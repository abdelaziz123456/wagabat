import {View, Text, ImageSourcePropType} from 'react-native';
import React from 'react';
import styles from './ScreenHeader.styles';
import {Image} from 'react-native-animatable';
type Props = {
  imageSource: ImageSourcePropType;
  title: string;
};
export default function ScreenHeader({imageSource, title}: Props) {
  return (
    <View style={styles.mainContainer}>
      <Image source={imageSource} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
