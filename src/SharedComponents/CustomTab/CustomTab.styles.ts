import {StyleSheet} from 'react-native';
import {CustomColors} from '../../Utiles/constants';
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: CustomColors.pink60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderRadius: 90,
    height: 63,
  },
  activeBtn: {
    backgroundColor: CustomColors.pink100,
    borderRadius: 90,
    width: 170,
  },
  disActiveBtn: {
    backgroundColor: CustomColors.pink60,
    borderRadius: 90,
    width: 170,
  },
});
