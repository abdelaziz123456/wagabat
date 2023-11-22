import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  mapControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
  },
  controlText: {
    color: CustomColors.blue100,
    fontWeight: '700',
  },
});
