import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginLeft: 16,
  },
  details: {
    marginLeft: 16,
  },
  productIcon: {
    width: 68,
    height: 68,
    borderRadius: 40,
  },
  title: {
    color: 'black',
  },
  price: {
    fontWeight: '700',
    color: 'black',
  },
});
