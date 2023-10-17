import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabStyle: {
    flex: 1,
    paddingVertical: 12,
    borderBottomColor: CustomColors.textSecondary,
    borderBottomWidth: 0.5,
  },
  tabActive: {
    borderBottomColor: CustomColors.blue100,
    borderBottomWidth: 1,
  },
  tabTitle: {
    textAlign: 'center',
    color: CustomColors.textSecondary,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  activeTitle: {
    color: CustomColors.blue100,
    fontWeight: '700',
  },
});
