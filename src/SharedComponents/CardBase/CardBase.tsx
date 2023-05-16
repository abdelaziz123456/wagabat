import {View} from 'react-native';
import React from 'react';
import styles from './CardBase.styles';
type Props = {
  children: React.ReactNode;
  customStyle?: Object;
};
export default function CardBase({children, customStyle}: Props) {
  return <View style={{...styles.container, ...customStyle}}>{children}</View>;
}
