import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    paddingTop: 16,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'black',
    marginBottom: 12,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  lottieView: {
    height: 50,
    width: 50,
  },
});
