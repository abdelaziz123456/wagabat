import {View, Text, Image, Pressable, ScrollView, Platform} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {restaurantsAndCafes} from '@Utiles/fakeData';
import {useNavigation} from '@react-navigation/native';
import {CardBase, CustomButton} from '@SharedComponents/index';
import styles from './StoreDetails.styles';
import {ReserveSection, ShowLocation, StoreSection} from '@Components/index';
import {checkLiked, clickHandler} from './utiles';
import {useSelector, useDispatch} from 'react-redux';
import {Images} from '@assets';
import {like_rest, unlike_rest} from '@Store/actions';
import {CustomColors} from '@Utiles/constants';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

type Props = {
  route: any;
};
export default function StoreDetails({route}: Props) {
  const [showLocation, setShowLocation] = useState(false);
  const [locationOn, setLocationOn] = useState(false);
  // const showMap = () => {
  //   //already open before
  //   if (showLocation) {
  //     setShowLocation(false);
  //   }
  //   //not opend before
  //   else {
  //     //if has permission
  //     if (locationOn) {
  //       setShowLocation(true);
  //       setTimeout(() => {
  //         scrollRef?.current?.scrollToEnd({animated: true});
  //       }, 10);
  //     }
  //     //if has not permission
  //     else {
  //       if (Platform.OS == 'ios') {
  //         request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
  //           if (result == 'granted') {
  //             setLocationOn(true);
  //           } else {
  //             setLocationOn(false);
  //           }
  //         });
  //       } else {
  //         request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
  //           if (result == 'granted') {
  //             setLocationOn(true);
  //           } else {
  //             setLocationOn(false);
  //           }
  //         });
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   check(PERMISSIONS.IOS.LOCATION_ALWAYS)
  //     .then(result => {
  //       switch (result) {
  //         case RESULTS.GRANTED:
  //           setLocationOn(true);

  //           break;
  //         default:
  //           setLocationOn(false);
  //           break;
  //       }
  //     })
  //     .catch(error => {
  //       console.log('this is error', error);
  //     });
  // }, []);

  const navigator = useNavigation();
  let targetID = route.params.itemId;
  let restaurant: any = restaurantsAndCafes.find(item => item.id == targetID);
  let likedRests: any = useSelector(
    (state: {LikedRests: []}) => state.LikedRests,
  );

  const [liked, setLiked] = useState(() => checkLiked(likedRests, targetID));
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const scrollRef = useRef(null);

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {backgroundColor: CustomColors.bgGrey, height: 80},
        tabBarVisible: undefined,
      });
  }, [navigation]);

  return (
    <View style={{paddingHorizontal: 16}}>
      <Pressable onPress={() => navigator.goBack()}>
        <Image source={Images.icons.backButton} style={{marginVertical: 16}} />
      </Pressable>
      <ScrollView
        contentContainerStyle={{paddingBottom: 80, flexGrow: 1}}
        ref={scrollRef}>
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
        <StoreSection withoutNavigation={true} />
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
        <View style={{paddingHorizontal: 50, paddingVertical: 20}}>
          <CustomButton
            btnTheme="blue"
            pressHandler={() => {
              setShowLocation(!showLocation);

              setTimeout(() => {
                scrollRef?.current?.scrollToEnd({animated: true});
              }, 10);
            }}>
            <Text style={{color: CustomColors.white}}>
              {showLocation ? 'hide' : 'show'}
            </Text>
          </CustomButton>
        </View>

        {showLocation ? (
          <View>
            <ShowLocation
              region={restaurant.region}
              coordinate={restaurant.coordinate}
              customLabel={restaurant.name}
            />
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
}
