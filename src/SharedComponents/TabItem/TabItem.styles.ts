import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    height: 45,
  },
  title: {
    paddingTop: 12,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  activeTitle: {
    backgroundColor: 'white',
    color: CustomColors.blue100,
  },
});
