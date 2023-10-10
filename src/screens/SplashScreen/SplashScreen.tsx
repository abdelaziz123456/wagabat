import {Text, StatusBar} from 'react-native';
import React from 'react';
import {CustomColors} from '@Utiles/constants';
import LottieView from 'lottie-react-native';
import Styles from './styles';

type Props = {
  setShowSplash: Function;
};
const SplashScreen = ({setShowSplash}: Props) => {
  return (
    <>
      <StatusBar hidden backgroundColor={CustomColors.blue100} />

      <LottieView
        source={require('@assets/animations/splashAnimation.json')}
        style={Styles.lottieView}
        autoPlay
        onAnimationFinish={() => setShowSplash(false)}
        loop={false}
      />
      <Text style={Styles.title}>Wagabat</Text>
    </>
  );
};

export default SplashScreen;
