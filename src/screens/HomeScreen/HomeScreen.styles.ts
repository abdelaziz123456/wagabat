import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: CustomColors.bgGrey,
    padding: 16,
  },
  subCard: {
    minWidth: 108,

    paddingHorizontal: 16,
  },
  cardBaseStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 12,
    color: CustomColors.textSecondary,
    textAlign: 'center',
  },
});
