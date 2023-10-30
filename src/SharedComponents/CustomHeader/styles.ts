import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    color: CustomColors.textPrimary,
    fontSize: 18,
    marginLeft: 8,
    fontWeight: '700',
    lineHeight: 27,
  },
});
