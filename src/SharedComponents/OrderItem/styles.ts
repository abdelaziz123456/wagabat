import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: CustomColors.white,
    marginVertical: 6,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: CustomColors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
});
