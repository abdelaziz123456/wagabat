import {View, Text, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';

import CustomColors from '../../Utiles/constants';
import {CustomButton} from '@SharedComponents/index';

export default function WelcomeScreen() {
  const [currScreen, setCurrentScreen] = useState(1);
  const animatableRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  const bounceRight = () => {
    animatableRef.current?.fadeInRight(500);
    textRef.current?.fadeInRight(500);
    contentRef.current?.fadeInRight(500);
  };
  const screensData = {
    1: {
      img: require('../../../assets/images/food1.jpg'),
      title: 'Wide range of Food \n Categories & more',
      content:
        "Browse through our extensive list of \n restaurants and dishes, and when you're  ready \n to order, simply add your desired items to your \n cart and checkout. It's that easy!",
    },
    2: {
      img: require('../../../assets/images/food2.jpg'),
      title: 'Free Deliveries for \n ONE MONTH!!',
      content:
        'Get your favorite meals delivered to your doorstep for free with our online food deliveryapp - enjoy a whole month of complimentary delivery!',
    },
    3: {
      img: require('../../../assets/images/food3.jpg'),
      title: 'Get started on \n Ordering Your Food',
      content:
        'Please create an account or sign in to your existing account to start browsing our selection of delicious meals from your favoriterestaurants.',
    },
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 21,
      }}>
      <Animatable.View ref={animatableRef} style={{alignItems: 'center'}}>
        <Image
          source={screensData[currScreen].img}
          style={{
            height: 350,
            resizeMode: 'stretch',
            width: 350,
            borderRadius: 20,
            marginTop: 28,
          }}
        />
        <Text style={{marginBottom: 50, marginTop: 10}}>{currScreen} of 3</Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '600',
            textAlign: 'left',
            color: CustomColors.dark100,
            marginBottom: 13,
          }}>
          {screensData[currScreen].title}
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 30, minHeight: 80}}>
          {screensData[currScreen].content}
        </Text>
      </Animatable.View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CustomButton
          pressHandler={() => {
            if (currScreen !== 3) {
              setCurrentScreen(3);
              bounceRight();
            }
          }}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'white'}
          CustomStyles={{height: 64, width: 183}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>Skip</Text>
            <Image
              source={require('../../../assets/icons/arrowRightBlack.png')}
              alt=""
            />
          </View>
        </CustomButton>
        <CustomButton
          pressHandler={() => {
            if (currScreen < 3) {
              setCurrentScreen(currScreen + 1);
              bounceRight();
            }
          }}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'blue'}
          CustomStyles={{height: 64, width: 183}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 18}}>
              {currScreen == 3 ? 'Continue' : 'Next'}
            </Text>
            <Image
              source={require('../../../assets/icons/arrow-right.png')}
              alt=""
            />
          </View>
        </CustomButton>
      </View>
    </View>
  );
}
