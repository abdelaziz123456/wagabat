import {View, Text, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import styles from './ScreenHeader.styles';
import {Image} from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
type Props = {
  imageSource: ImageSourcePropType;
  title: string;
};
export default function ScreenHeader({imageSource, title}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={imageSource} style={styles.icon} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
