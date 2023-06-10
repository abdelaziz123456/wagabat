import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {paddingVertical: 14.5},
  content: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'white',
  },
  tab: {
    width: 85,
    backgroundColor: CustomColors.bgGrey,
  },
  productList: {
    width: '100%',
  },
});
