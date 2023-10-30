import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    minHeight: 296,
  },
  title: {
    fontWeight: '700',
    marginVertical: 16,
    textAlign: 'center',
    color: CustomColors.textPrimary,
    fontSize: 18,
    lineHeight: 27,
  },
  subTitle: {
    textAlign: 'center',
    color: CustomColors.textPrimary,
    lineHeight: 21,
  },
  detailsWrapper: {
    paddingHorizontal: 16,
  },
  primaryText: {
    color: CustomColors.textPrimary,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    color: CustomColors.blue100,
  },
});
