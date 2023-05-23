import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './HomeScreen.styles';

import {
  HomeHeader,
  PromoSection,
  ReserveSection,
  StoreSection,
  UserCard,
} from '@Components/index';

export default function HomeScreen() {
  const [expand, setExpand] = useState(true);
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <HomeHeader expand={expand} setExpand={setExpand} />
      {expand && <UserCard />}
      <StoreSection />
      <ReserveSection />
      <PromoSection />
    </ScrollView>
  );
}
