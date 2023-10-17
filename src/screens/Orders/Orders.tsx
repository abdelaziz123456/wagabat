import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {OrderItem, TabGroup} from '@SharedComponents/index';
import {DeliveryOrdersData} from '@Utiles/fakeData';
import styles from './Orders.styles';
export default function Orders() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: 'Store pickup',
    },
    {
      id: 2,
      title: 'Delivery',
    },
  ];

  return (
    <View>
      <TabGroup setActiveTab={setActiveTab} tabs={tabs} activeTab={activeTab} />
      <View style={styles.ordersContainer}>
        <FlatList
          data={DeliveryOrdersData}
          renderItem={({item}) => {
            return <OrderItem order={item} />;
          }}
        />
      </View>
    </View>
  );
}
