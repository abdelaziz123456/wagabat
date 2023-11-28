import {FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SearchStore, StoreListITem} from '@Components/index';
import {restaurantsAndCafes} from '@Utiles/fakeData';
import {useNavigation} from '@react-navigation/native';
import styles from './Stores.styles';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {StoreItemPlaceholder} from '@SharedComponents/SkeletonPlaceholder';
export default function Stores() {
  const [showFav, setShowFav] = useState(false);
  const likedList = useSelector((state: any) => state.LikedRests);

  const [filteredData, setFilteredData] = useState(restaurantsAndCafes);

  useEffect(() => {
    showFav ? setFilteredData(likedList) : setFilteredData(restaurantsAndCafes);
  }, [showFav, likedList]);

  const navigator = useNavigation();
  const onPressHandler = (id: number) => {
    navigator.navigate('storeDetails', {
      itemId: id,
    });
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <View>
      <SearchStore
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        setShowFav={setShowFav}
        showFav={showFav}
      />
      {filteredData?.length ? (
        <View style={{paddingBottom: 120}}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            data={filteredData}
            renderItem={({item}) =>
              !loading ? (
                <StoreListITem
                  item={item}
                  onPressHandler={() => onPressHandler(item.id)}
                />
              ) : (
                <StoreItemPlaceholder />
              )
            }
          />
        </View>
      ) : (
        <View style={styles.content}>
          <LottieView
            source={require('@assets/animations/noDataFound.json')}
            autoPlay
            loop
            style={{width: 100, height: 100}}
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
