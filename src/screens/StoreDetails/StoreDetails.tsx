import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {restaurantsAndCafes} from '@Utiles/fakeData';
import {useNavigation} from '@react-navigation/native';
import {CardBase} from '@SharedComponents/index';
import styles from './StoreDetails.styles';
import {ReserveSection, StoreSection} from '@Components/index';
import {checkLiked, clickHandler} from './utiles';
import {useSelector, useDispatch} from 'react-redux';

import {Images} from '@assets';
import {like_rest, unlike_rest} from '@Store/actions';

type Props = {
  route: any;
};
export default function StoreDetails({route}: Props) {
  const navigator = useNavigation();
  let targetID = route.params.itemId;
  let restaurant: any = restaurantsAndCafes.find(item => item.id == targetID);
  let likedRests: any = useSelector(
    (state: {LikedRests: []}) => state.LikedRests,
  );

  const [liked, setLiked] = useState(() => checkLiked(likedRests, targetID));
  const dispatch = useDispatch();

  return (
    <View style={{paddingHorizontal: 16}}>
      <Pressable onPress={() => navigator.goBack()}>
        <Image source={Images.icons.backButton} style={{marginVertical: 16}} />
      </Pressable>
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        <CardBase customStyle={{padding: 0, marginBottom: 16}}>
          <Image source={restaurant.imageLink} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <View style={styles.cardLeft}>
              <Text style={styles.restName}>{restaurant.name}</Text>
              <Text style={styles.restOpen}>
                Open: {restaurant?.openAt} - {restaurant?.closeAt}
              </Text>
            </View>
            <View style={styles.cardRight}>
              <Pressable
                onPress={() =>
                  clickHandler(
                    liked,
                    dispatch,
                    unlike_rest,
                    targetID,
                    setLiked,
                    like_rest,
                  )
                }>
                <Image
                  source={
                    liked ? Images.icons.likeImg : Images.icons.unLikedImg
                  }
                  style={{width: 30, height: 30}}
                />
              </Pressable>
            </View>
          </View>
        </CardBase>
        <StoreSection />
        <ReserveSection />
        <CardBase customStyle={{paddingHorizontal: 16}}>
          <View style={{marginBottom: 16, flexDirection: 'row'}}>
            <Image source={Images.icons.phoneIcon} style={{marginRight: 12}} />
            <View>
              <Text style={{...styles.restOpen, marginBottom: 5}}>
                Phone number
              </Text>
              <Text style={styles.restName}>{restaurant.phoneNumber}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.icons.addressIcon}
              style={{marginRight: 12}}
            />
            <View>
              <Text style={{...styles.restOpen, marginBottom: 5}}>Address</Text>
              <Text style={styles.restName}>{restaurant.address}</Text>
            </View>
          </View>
        </CardBase>
      </ScrollView>
    </View>
  );
}
