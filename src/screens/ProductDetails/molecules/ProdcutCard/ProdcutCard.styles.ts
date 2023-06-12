import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    marginTop: 0,
    paddingTop: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0,

    borderRadius: 8,
  },
  imageStyle: {
    width: '100%',
    height: 320,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {paddingHorizontal: 16, paddingTop: 12},
  detailsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeIcon: {width: 20, height: 20, marginRight: 10},
  name: {fontWeight: '400', fontSize: 16, color: 'black'},
  price: {fontWeight: '700', fontSize: 16, color: 'black'},
});
