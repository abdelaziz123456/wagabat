import {Animated, Easing, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './HomeScreen.styles';

import {
  HomeHeader,
  PromoSection,
  ReserveSection,
  StoreSection,
  UserCard,
} from '@Components/index';

export default function HomeScreen() {
  const hideAnim = useRef(new Animated.Value(0)).current;
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    Animated.timing(hideAnim, {
      toValue: expand ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [hideAnim, expand]);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <HomeHeader expand={expand} setExpand={setExpand} />
      <Animated.View
        style={{
          height: hideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 190],
          }),
          opacity: hideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
        <UserCard />
      </Animated.View>

      <StoreSection />
      <ReserveSection />
      <PromoSection />
    </ScrollView>
  );
}
