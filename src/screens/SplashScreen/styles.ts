import {CustomColors} from '@Utiles/constants';
import {Dimensions, StyleSheet} from 'react-native';
const yPosition = Dimensions.get('window').height / 4;
export default StyleSheet.create({
  title: {
    bottom: yPosition,

    zIndex: 100,
    fontSize: 40,
    position: 'absolute',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 6,
  },
  lottieView: {
    flex: 1,
    backgroundColor: CustomColors.blue100,
    position: 'relative',
  },
});
