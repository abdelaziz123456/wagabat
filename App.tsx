import React from 'react';
import NavWrapper from './src/Providers/NavWrapper';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import LikedRests from '@Store/reducers/likedOrders';
import LikedProducts from '@Store/reducers/likedOrders';
import {SafeAreaView, StatusBar} from 'react-native';
const rootReducer = combineReducers({
  LikedRests,
  LikedProducts,
});
const store1 = createStore(rootReducer);
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Provider store={store1}>
        <NavWrapper />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
