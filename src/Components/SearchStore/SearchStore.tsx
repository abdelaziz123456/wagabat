import {View, Image, TextInput, Text, Switch, Platform} from 'react-native';
import React, {useRef} from 'react';
import CardBase from '@SharedComponents/CardBase/CardBase';
import styles from './SearchStore.styles';
import {restaurantsAndCafes} from '@Utiles/fakeData';
import {CustomColors} from '@Utiles/constants';
import {Images} from '@assets';
import {SearchStoreProps} from '@Utiles/props';

export default function SearchStore({
  setFilteredData,
  filteredData,
  showFav,
  setShowFav,
}: SearchStoreProps) {
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
          <Text
            style={{
              marginTop: Platform.OS == 'ios' ? 8 : 16,
              fontWeight: '700',
            }}>
            Fav Only
          </Text>
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
        <Image source={Images.icons.searchIcon} style={styles.searchIcon} />
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
