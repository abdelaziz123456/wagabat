import {StyleSheet} from 'react-native';
import {CustomColors} from '../../Utiles/constants';

export default StyleSheet.create({
  avoidingView: {
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 40,
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
  customBtn: {
    width: '100%',
    height: 64,
    marginTop: 'auto',
    bottom: 20,
  },
  btnText: {fontSize: 18, color: 'white', fontWeight: '500'},
});
