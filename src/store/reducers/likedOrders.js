import {products} from '@Utiles/fakeData';
import {LIKE_REST, UNLIKE_REST} from '../actions/types';
const initialState = [];

const LikedProducts = (state = initialState, action) => {
  let likedProducts = [];
  if (action.type == LIKE_REST) {
    let addedProduct = products.find(prod => prod.id == action.id);
    likedProducts = [...state, addedProduct];
    return likedProducts;
  }

  if (action.type == UNLIKE_REST) {
    likedProducts = state.filter(rest => rest.id !== action.id);

    return likedProducts;
  }

  return state;
};

export default LikedProducts;
