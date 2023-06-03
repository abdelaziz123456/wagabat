export const images = {
  backIcon: require('../../../assets/icons/backBtn.png'),
  unLikedImg: require('../../../assets/icons/loveFaded.png'),
  likeImg: require('../../../assets/icons/love.png'),
  phoneIcon: require('../../../assets/icons/phone.png'),
  addressIcon: require('../../../assets/icons/address.png'),
};

export const clickHandler = (
  liked: boolean,
  dispatch: Function,
  unlike_rest: Function,
  targetID: number,
  setLiked: Function,
  like_rest: Function,
) => {
  if (liked) {
    dispatch(unlike_rest(targetID));
    setLiked(false);
  } else {
    dispatch(like_rest(targetID));
    setLiked(true);
  }
};

export const checkLiked = (likedRests: [{id: number}], targetID: number) => {
  for (let rest of likedRests) {
    if (rest.id == targetID) {
      return true;
    }
  }
  return false;
};
