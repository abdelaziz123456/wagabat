import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {CustomColors} from '../../Utiles/constants';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CustomTab.styles';

type Props = {
  toggleHandler: Function;
};
export default function CustomTab({toggleHandler}: Props) {
  const [active, setActive] = useState('left');

  function LeftPressHandler() {
    if (active !== 'left') {
      setActive('left');
      toggleHandler();
    }
  }
  function RightPressHandler() {
    if (active !== 'right') {
      setActive('right');
      toggleHandler();
    }
  }
  return (
    <View style={styles.mainContainer}>
      <CustomButton
        pressHandler={LeftPressHandler}
        btnTheme={'red'}
        CustomStyles={
          active == 'left' ? styles.activeBtn : styles.disActiveBtn
        }>
        <Text
          style={{
            color: active == 'left' ? 'white' : CustomColors.pink100,
            fontSize: 18,
          }}>
          Login
        </Text>
      </CustomButton>
      <CustomButton
        pressHandler={RightPressHandler}
        btnTheme={'red'}
        CustomStyles={
          active == 'right' ? styles.activeBtn : styles.disActiveBtn
        }>
        <Text
          style={{
            color: active == 'right' ? 'white' : CustomColors.pink100,
            fontSize: 18,
          }}>
          Sign Up
        </Text>
      </CustomButton>
    </View>
  );
}
