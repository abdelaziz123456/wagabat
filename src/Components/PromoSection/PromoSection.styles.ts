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
    flexDirection: 'row', // Arrange the cards horizontally
    justifyContent: 'space-between', // Distribute the space evenly between cards
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
