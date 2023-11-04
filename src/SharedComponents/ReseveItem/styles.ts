import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    marginVertical: 6,
    backgroundColor: CustomColors.white,
    borderRadius: 8,
    padding: 16,
  },
  statusWrapper: {
    maxWidth: 88,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  statusText: {
    fontWeight: '500',
    lineHeight: 21,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemWrapper: {paddingVertical: 8, flexDirection: 'row', alignItems: 'center'},

  textItem: {
    color: CustomColors.textPrimary,
    fontWeight: '500',
    lineHeight: 21,
  },
  icon: {
    marginRight: 8,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  btnText: {
    color: CustomColors.blue100,
  },
});
