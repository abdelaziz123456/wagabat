import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  cardImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    height: 328,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cardLeft: {},
  cardRight: {
    marginRight: 20,
    paddingTop: 5,
  },
  restName: {fontWeight: '500', fontSize: 16, color: 'black'},
  restOpen: {fontWeight: '400', fontSize: 14},
});
