import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CustomColors from '../../Utiles/constants';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CustomTab.styles';

type Props = {
  toggleHandler: Function;
};
export default function CustomTab({toggleHandler}: Props) {
  const [active, setActive] = useState('left');
  console.log('renderedddd');
  function pressHandler() {
    if (active == 'left') {
      setActive('right');
    } else {
      setActive('left');
    }
    toggleHandler();
  }
  return (
    <View style={styles.mainContainer}>
      <CustomButton
        pressHandler={pressHandler}
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
        pressHandler={pressHandler}
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
