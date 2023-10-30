import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {Images} from '@assets/index';
import styles from './styles';
type Props = {
  headerTitle: string;
  withBackIcon?: boolean;
  pressHandler?: Function;
};

const CustomHeader = ({headerTitle, withBackIcon, pressHandler}: Props) => {
  return (
    <View style={styles.mainContainer}>
      {withBackIcon && (
        <Pressable onPress={pressHandler ? () => pressHandler() : () => {}}>
          <Image source={Images.icons.backButton} />
        </Pressable>
      )}
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

export default CustomHeader;
