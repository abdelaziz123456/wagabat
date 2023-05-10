import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CustomButton.styles';
type Props = {
  pressHandler: Function;
  CustomStyles?: object;
  children?: React.ReactNode;
  btnTheme: 'red' | 'blue' | 'white' | 'black' | 'disabledBlue';
  disabled?: boolean;
};
const CustomButton = ({
  pressHandler,
  CustomStyles,
  children,
  btnTheme,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => pressHandler()}
      style={{...styles.container, ...styles[btnTheme], ...CustomStyles}}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
