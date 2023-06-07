import {FlatList, Image, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SearchStore, StoreListITem} from '@Components/index';

import {useNavigation} from '@react-navigation/native';
import styles from './Stores.styles';
import {useSelector} from 'react-redux';
import useGetShops from '@hooks/useGetShops';
import {CustomColors} from '@Utiles/constants';
export default function Stores() {
  const [showFav, setShowFav] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const likedList = useSelector((state: any) => state.LikedRests);

  const [filteredData, setFilteredData] = useState([]);
  console.log('this is data');
  useEffect(() => {
    showFav ? setFilteredData(likedList) : setFilteredData(requestData);
  }, [showFav, likedList, requestData]);

  const navigator = useNavigation();
  const onPressHandler = (id: number) => {
    navigator.navigate('storeDetails', {
      itemId: id,
    });
  };
  const onSuccessHandler = (data: any) => {
    setRequestData(data.result);
  };
  const onErrorHandler = (error: any) => {
    console.log({error});
  };
  const {
    data: receivedData,
    isLoading,
    isSuccess,
    isError,
  } = useGetShops(onSuccessHandler, onErrorHandler);
  console.log(isLoading, receivedData, isSuccess);

  return (
    <View>
      <SearchStore
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        setShowFav={setShowFav}
        showFav={showFav}
      />

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={CustomColors.blue100}
          style={styles.indicator}
        />
      ) : filteredData?.length ? (
        <View style={{paddingBottom: 230}}>
          <FlatList
            data={filteredData}
            renderItem={({item}) => (
              <StoreListITem
                item={item}
                onPressHandler={() => onPressHandler(item.id)}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.content}>
          <Image
            source={require('../../../assets/images/noResult.png')}
            style={styles.imgStyle}
          />
          <Text style={styles.title}>Sorry,we nearly found it !</Text>
          <Text style={styles.subTitle}>
            Please try again, better luck next time
          </Text>
        </View>
      )}
    </View>
  );
}
