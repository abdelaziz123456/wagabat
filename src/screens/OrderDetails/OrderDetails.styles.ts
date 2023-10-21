import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {},
  headerContainer: {
    height: 56,
    backgroundColor: CustomColors.white,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    color: CustomColors.textPrimary,
  },
  coverContainer: {},
  statusContainer: {
    backgroundColor: CustomColors.white,
    marginHorizontal: 16,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 8,
    position: 'relative',
    bottom: 16,
  },
  statusText: {
    color: CustomColors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
  supportWrapper: {
    backgroundColor: CustomColors.blue100,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
  },
  supportText: {
    fontWeight: '400',
    lineHeight: 21,
    color: CustomColors.white,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: CustomColors.textPrimary,
    marginBottom: 8,
  },
});
