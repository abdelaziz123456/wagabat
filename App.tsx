import React, {useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';

import {Image, Text, View} from 'react-native';
import CustomButton from './src/SharedComponents/CustomButton/CustomButton';

function App() {
  const [currScreen, setCurrentScreen] = useState(1);
  const animatableRef = useRef(null);

  const bounceLeft = () => {
    animatableRef.current?.fadeInLeft(500);
  };

  const bounceRight = () => {
    animatableRef.current?.fadeInRight(500);
  };
  const screensData = {
    1: {
      img: require('./assets/images/food1.jpg'),
      title: 'Wide range of FoodCategories & more',
      content:
        "Browse through our extensive list of restaurants and dishes, and when you're readyto order, simply add your desired items to your cart and checkout. It's that easy!",
    },
    2: {
      img: require('./assets/images/food2.jpg'),
      title: 'Free Deliveries for ONE MONTH!!',
      content:
        'Get your favorite meals delivered to your doorstep for free with our online food deliveryapp - enjoy a whole month of complimentary delivery!',
    },
    3: {
      img: require('./assets/images/food3.jpg'),
      title: 'Get started on Ordering Your Food',
      content:
        'Please create an account or sign in to your existing account to start browsing our selection of delicious meals from your favoriterestaurants.',
    },
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center'}}>
      <Text>Hello</Text>

      <Animatable.Image
        source={screensData[currScreen].img}
        ref={animatableRef}
        style={{
          height: 350,
          resizeMode: 'stretch',
          width: 350,
          borderRadius: 20,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CustomButton
          pressHandler={() => {
            if (currScreen > 1) {
              setCurrentScreen(currScreen - 1);
              bounceLeft();
            }
          }}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'white'}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>hello</Text>
            <Image
              source={require('./assets/icons/arrowRightBlack.png')}
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
          btnTheme={'blue'}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 18}}>hello</Text>
            <Image source={require('./assets/icons/arrow-right.png')} alt="" />
          </View>
        </CustomButton>
      </View>
    </View>
  );
}

export default App;
