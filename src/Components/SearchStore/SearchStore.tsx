import {View, Image, TextInput} from 'react-native';
import React from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './SearchStore.styles';
import {restaurantsAndCafes} from '@Utiles/fakeData';

type Props = {
  setFilteredData: Function;
  filteredData: any;
};
export default function SearchStore({setFilteredData, filteredData}: Props) {
  let searchIcon = require('../../../assets/icons/SearchIcon.png');

  const onChangeHandler = (part: string) => {
    if (!part) {
      setFilteredData(restaurantsAndCafes);
    } else {
      let seleceted = filteredData.filter((item: any) =>
        item.name.includes(part),
      );
      setFilteredData(seleceted);
    }
  };
  return (
    <CardBase customStyle={styles.searchContainer}>
      <View style={styles.content}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Search store"
          style={styles.searchInput}
          maxLength={10}
          onChangeText={val => onChangeHandler(val)}
        />
      </View>
    </CardBase>
  );
}
