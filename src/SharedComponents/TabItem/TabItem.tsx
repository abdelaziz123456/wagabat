import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './TabItem.styles';
type Props = {
  title: string;
  activeTab: number;
  id: number;
  setActiveTAb: Function;
};
export default function TabItem({title, activeTab, id, setActiveTAb}: Props) {
  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => {
        setActiveTAb(id);
      }}>
      <Text
        style={{...styles.title, ...(activeTab == id && styles.activeTitle)}}>
        {title}
      </Text>
    </Pressable>
  );
}
