import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  lowerSection: {
    marginTop: 8,
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  upperSection: {
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 8,
    color: 'black',
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 12,
    color: CustomColors.textSecondary,
    textAlign: 'left',
  },
  btnText: {
    color: CustomColors.blue100,
    fontWeight: '400',
    lineHeight: 21,
    fontSize: 14,
  },
});
