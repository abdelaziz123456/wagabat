import {LIKE_PROD, LIKE_REST, UNLIKE_PROD, UNLIKE_REST} from './types';

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

export const like_prod = id => {
  const action = {
    type: LIKE_PROD,
    id: id,
  };
  return action;
};

export const unlike_prod = id => {
  const action = {
    type: UNLIKE_PROD,
    id: id,
  };
  return action;
};
