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
  content: {
    marginTop: 12,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  borderBottom: {
    borderBottomColor: CustomColors.dividerColor,
    borderBottomWidth: 1,
  },
  addImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addressText: {
    color: CustomColors.textPrimary,
    fontSize: 14,
    lineHeight: 21,
  },
  detailsContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    color: CustomColors.textPrimary,
    lineHeight: 21,
  },
  priceText: {
    color: CustomColors.textPrimary,
    fontWeight: '700',
  },
});
