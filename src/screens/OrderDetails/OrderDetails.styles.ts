import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    paddingBottom: 16,
  },
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
  generalDetailsWrapper: {
    backgroundColor: CustomColors.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  generalInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 8,
  },
  generalInfoRight: {
    fontWeight: '700',
    lineHeight: 21,
    color: CustomColors.textPrimary,
  },
  shippingDetailsCard: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 2,
  },
  primaryText: {color: CustomColors.textPrimary},
  paymentWrapper: {
    padding: 16,
    backgroundColor: CustomColors.white,
    flexDirection: 'row',
    borderRadius: 8,
  },
  productContainer: {
    padding: 16,
    backgroundColor: CustomColors.white,
  },
});
