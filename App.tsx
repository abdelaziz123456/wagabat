import React from 'react';
import NavWrapper from './src/Providers/NavWrapper';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import LikedRests from './src/Store/reducers/likedRestaurants';
const rootReducer = combineReducers({
  LikedRests,
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
