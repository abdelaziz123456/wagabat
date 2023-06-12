import React from 'react';
import NavWrapper from './src/Providers/NavWrapper';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import LikedRests from './src/Store/reducers/likedRestaurants';
import LikedProducts from './src/Store/reducers/likedOrders';
const rootReducer = combineReducers({
  LikedRests,
  LikedProducts,
});
const store1 = createStore(rootReducer);
function App() {
  return (
    <>
      <Provider store={store1}>
        <NavWrapper />
      </Provider>
    </>
  );
}

export default App;
