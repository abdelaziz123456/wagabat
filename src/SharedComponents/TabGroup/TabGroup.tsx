import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Styles from './styles';
type tabProps = {
  id: number;
  title: string;
};
type Props = {
  setActiveTab: Function;
  tabs: tabProps[];
  activeTab: number;
};
const TabGroup = ({setActiveTab, tabs, activeTab}: Props) => {
  return (
    <View style={Styles.mainContainer}>
      {tabs.map((tab: tabProps) => {
        return (
          <Pressable
            key={tab.id}
            onPress={() => {
              setActiveTab(tab.id);
            }}
            style={{
              ...Styles.tabStyle,
              ...(activeTab == tab.id && Styles.tabActive),
            }}>
            <Text
              style={{
                ...Styles.tabTitle,
                ...(activeTab == tab.id && Styles.activeTitle),
              }}>
              {tab.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabGroup;
