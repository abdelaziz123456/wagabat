import React from 'react';
import NavWrapper from './src/Providers/NavWrapper';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import LikedRests from './src/Store/reducers/likedRestaurants';
const rootReducer = combineReducers({
  LikedRests,
});
const store1 = createStore(rootReducer);
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store1}>
          <NavWrapper />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
