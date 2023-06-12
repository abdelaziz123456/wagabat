import {View} from 'react-native';
import React, {useEffect} from 'react';
import {products} from '@Utiles/fakeData';
import styles from './ProductDetails.styles';
import {ScreenHeader} from '@Components/index';
import {ProductCard, SizeCard} from './molecules';
import {Images} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {CustomColors} from '@Utiles/constants';
type Props = {
  route: {
    params: {
      itemId: number;
    };
  };
};
export default function ProductDetails({route}: Props) {
  const navigation = useNavigation();
  let itemId = route.params.itemId;
  let item = products.filter(item => item.id == itemId)[0];

  //this is workaround to hide bottom tabbar for this specific screen
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
          alignItems: 'center',
          jsutifyContent: 'center',
          backgroundColor: CustomColors.bgGrey,
          height: 80,
        },
      });
  });

  return (
    <>
      <ScreenHeader imageSource={Images.icons.backButton} title="" />
      <View style={styles.mainContainer}>
        <ProductCard
          img={item.cover}
          name={item.name}
          price={item.price}
          disc={item.description}
        />
        <SizeCard />
      </View>
    </>
  );
}
