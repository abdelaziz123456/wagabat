import {FlatList, View} from 'react-native';
import React, {useState} from 'react';

import {SearchStore, StoreListITem} from '@Components/index';
import {restaurantsAndCafes} from '@Utiles/fakeData';

export default function Stores() {
  const [filteredData, setFilteredData] = useState(restaurantsAndCafes);
  return (
    <View>
      <SearchStore
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <View style={{paddingBottom: 120}}>
        <FlatList
          data={filteredData}
          renderItem={({item}) => <StoreListITem item={item} />}
        />
      </View>
    </View>
  );
}
