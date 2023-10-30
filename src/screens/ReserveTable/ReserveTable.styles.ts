import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: CustomColors.white},
  headerCard: {
    height: 370,
    flexDirection: 'row',
    paddingLeft: 16,
  },
  navigator: {
    paddingVertical: 12,
  },
  headerText: {
    marginLeft: 8,
    color: CustomColors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  reserveContainer: {
    backgroundColor: CustomColors.white,
    flex: 1,
    position: 'relative',
    top: -10,
    borderRadius: 16,
    padding: 16,
  },
});
