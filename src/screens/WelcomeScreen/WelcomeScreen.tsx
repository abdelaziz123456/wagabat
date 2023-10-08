import {View, Text, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '@SharedComponents/index';
import {screensData} from './utiles';
import styles from './WelcomeScreen.styles';
import {Images} from '@assets';
import {UnAuthNavigationProp} from '@Utiles/navigatorTypes';
export default function WelcomeScreen() {
  const [currScreen, setCurrentScreen] = useState(1);
  const animatableRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const navigation = useNavigation<UnAuthNavigationProp>();
  const bounceRight = () => {
    animatableRef.current?.fadeInRight(500);
    textRef.current?.fadeInRight(500);
    contentRef.current?.fadeInRight(500);
  };

  return (
    <View style={styles.mainContainer}>
      <Animatable.View ref={animatableRef} style={{alignItems: 'center'}}>
        <Image source={screensData[currScreen].img} style={styles.image} />
        <Text style={{marginBottom: 50, marginTop: 10}}>{currScreen} of 3</Text>
        <Text style={styles.title}>{screensData[currScreen].title}</Text>
        <Text style={styles.content}>{screensData[currScreen].content}</Text>
      </Animatable.View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CustomButton
          pressHandler={() => {
            navigation.navigate('auth');
          }}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'white'}
          CustomStyles={{height: 64, width: 183}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>Skip</Text>
            <Image source={Images.icons.arrowRightBlack} alt="" />
          </View>
        </CustomButton>
        <CustomButton
          pressHandler={() => {
            if (currScreen < 3) {
              setCurrentScreen(currScreen + 1);
              bounceRight();
            } else {
              //  navigation.dispatch(StackActions.replace('auth'));
              navigation.navigate('auth');
            }
          }}
          //CustomStyles={{backgroundColor: 'red'}}
          btnTheme={'blue'}
          CustomStyles={{height: 64, width: 183}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 18}}>
              {currScreen == 3 ? 'Continue' : 'Next'}
            </Text>
            <Image source={Images.icons.arrowRightBlack} alt="" />
          </View>
        </CustomButton>
      </View>
    </View>
  );
}
