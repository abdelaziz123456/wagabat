import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
type Props = {
  status: 'Delivered' | 'Delivery failed' | 'Delivering' | 'Preparing';
};

const textColor = {
  Delivered: '#00AB56',
  'Delivery failed': '#FF424E',
  Preparing: '#FC820A',
  Delivering: '#1A94FF',
};

const backgroundColor = {
  Delivered: '#EFFFF4',
  'Delivery failed': '#FFF0F1',
  Preparing: '#FFF5EB',
  Delivering: '#F0F8FF',
};

const StatusPill = ({status}: Props) => {
  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: backgroundColor[status],
      }}>
      <Text
        style={{
          ...styles.text,
          color: textColor[status],
        }}>
        {status}
      </Text>
    </View>
  );
};

export default StatusPill;
