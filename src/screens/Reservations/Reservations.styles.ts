import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: CustomColors.white,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bg: {
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: CustomColors.textPrimary,
  },
  subtitle: {
    color: CustomColors.textPrimary,
    marginBottom: 16,
  },
  btnText: {
    color: CustomColors.white,
    lineHeight: 24,
    fontSize: 16,
    marginVertical: 8,
  },
  dataContainer: {
    backgroundColor: CustomColors.dividerColor,
    height: '100%',
    paddingHorizontal: 16,
  },
});
