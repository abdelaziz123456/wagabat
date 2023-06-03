import {restaurantsAndCafes} from '@Utiles/fakeData';
import {LIKE_REST, UNLIKE_REST} from '../actions/types';
const initialState = [];

const LikedRests = (state = initialState, action) => {
  let likedRests = [];
  if (action.type == LIKE_REST) {
    let addedRest = restaurantsAndCafes.find(rest => rest.id == action.id);
    likedRests = [...state, addedRest];
    return likedRests;
  }

  if (action.type == UNLIKE_REST) {
    likedRests = state.filter(rest => rest.id !== action.id);

    return likedRests;
  }

  return state;
};

export default LikedRests;
