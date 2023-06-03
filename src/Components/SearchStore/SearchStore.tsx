import {View, Image, TextInput, Text, Switch} from 'react-native';
import React, {useRef} from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './SearchStore.styles';
import {restaurantsAndCafes} from '@Utiles/fakeData';
import {CustomColors} from '@Utiles/constants';

type Props = {
  setFilteredData: Function;
  filteredData: any;
  showFav: boolean;
  setShowFav: Function;
};
export default function SearchStore({
  setFilteredData,
  filteredData,
  showFav,
  setShowFav,
}: Props) {
  let searchIcon = require('../../../assets/icons/SearchIcon.png');
  const inputRef: any = useRef(null);

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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.searchTitle}>Search Store</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 16, fontWeight: '700'}}>Fav Only</Text>
          <Switch
            onValueChange={() => {
              setShowFav(!showFav);
              inputRef?.current?.clear();
            }}
            value={showFav}
            thumbColor={CustomColors.blue100}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          ref={inputRef}
          placeholder="Search store"
          style={styles.searchInput}
          maxLength={10}
          onChangeText={val => onChangeHandler(val)}
        />
      </View>
    </CardBase>
  );
}
