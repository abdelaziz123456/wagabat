import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    alignItems: 'flex-start',
    width: '100%',
  },
  label: {
    fontSize: 17,
    color: CustomColors.dark100,
    paddingLeft: 14,
    paddingBottom: 6,
  },
  inputStyles: {
    backgroundColor: CustomColors.light80,
    width: '100%',
    borderRadius: 14,
    padding: 14,
    fontSize: 17,
  },
});
