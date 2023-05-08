import {StyleSheet} from 'react-native';
import CustomColors from '../../Utiles/constants';
export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: CustomColors.dark100,
    textAlign: 'left',
    width: '100%',
  },
  subTitle: {
    color: CustomColors.dark80,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'left',
    width: '100%',
    marginBottom: 21,
  },
});
