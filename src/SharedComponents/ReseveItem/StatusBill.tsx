import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomColors} from '@Utiles/constants';

type Props = {
  status: 'Reserved' | 'Past' | 'Canceled';
};

const bgColor = {
  Reserved: '#EFFFF4',
  Past: '#F0F8FF',
  Canceled: '#F5F5FA',
};

const textColor = {
  Reserved: CustomColors.success,
  Past: CustomColors.blue100,
  Canceled: CustomColors.textSecondary,
};

const StatusBill = ({status}: Props) => {
  return (
    <View style={{...styles.statusWrapper, backgroundColor: bgColor[status]}}>
      <Text style={{...styles.statusText, color: textColor[status]}}>
        {status}
      </Text>
    </View>
  );
};

export default StatusBill;
