import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OrderDetails, Orders, OrdersHistory} from '@Screens/index';
import {OrdersStackParamList} from '@Utiles/navigatorTypes';

import {OrdersHeader} from '@Components/index';
const Stack = createNativeStackNavigator<OrdersStackParamList>();
const OrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Orders}
        name={'ordersScreen'}
        options={{
          header: () => <OrdersHeader headerTitle="Orders" />,
        }}
      />
      <Stack.Screen
        component={OrderDetails}
        name={'orderDetails'}
        options={{
          header: () => <OrdersHeader headerTitle="Orders Details" />,
        }}
      />
      <Stack.Screen component={OrdersHistory} name={'ordersHistory'} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
