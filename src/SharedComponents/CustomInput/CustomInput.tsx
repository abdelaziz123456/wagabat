import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import styles from './CustomInput.styles';
import {CustomColors} from '@Utiles/constants';

type Props = {
  inputConfig?: {};
  labelText: string;
};

const CustomInput = ({inputConfig, labelText}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        {...inputConfig}
        style={styles.inputStyles}
        placeholderTextColor={CustomColors.dark60}
      />
    </View>
  );
};

export default CustomInput;
