import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {flex: 1, paddingTop: 52, paddingHorizontal: 16},
  username: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
    flex: 1,
  },
  support: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    marginTop: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '500',

    color: CustomColors.blue100,
  },
});
