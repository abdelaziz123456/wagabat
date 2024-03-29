import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  expandIcon: {
    backgroundColor: CustomColors.bgGrey2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    borderRadius: 20,
  },
});
