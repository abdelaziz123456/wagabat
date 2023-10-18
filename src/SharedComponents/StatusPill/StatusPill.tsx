import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
type Props = {
  status:
    | 'Preparing'
    | 'Delivering'
    | 'Delivered'
    | 'Delivery failed'
    | 'Order received'
    | 'Ready for pickup'
    | 'Order completed';
};

const textColor = {
  Delivered: '#00AB56',
  'Delivery failed': '#FF424E',
  Preparing: '#FC820A',
  Delivering: '#1A94FF',
  'Ready for pickup': '#1A94FF',
  'Order received': '#FC820A',
  'Order completed': '#00AB56',
};

const backgroundColor = {
  Delivered: '#EFFFF4',
  'Delivery failed': '#FFF0F1',
  Preparing: '#FFF5EB',
  'Order received': '#FFF5EB',
  Delivering: '#F0F8FF',
  'Ready for pickup': '#F0F8FF',
  'Order completed': '#EFFFF4',
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
