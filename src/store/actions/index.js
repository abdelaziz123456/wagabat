import {LIKE_REST, UNLIKE_REST} from './types';

//actions creators

export const like_rest = id => {
  const action = {
    type: LIKE_REST,
    id: id,
  };
  return action;
};

export const unlike_rest = id => {
  const action = {
    type: UNLIKE_REST,
    id: id,
  };
  return action;
};
