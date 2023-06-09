import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 43,
    minWidth: 151,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  red: {
    backgroundColor: CustomColors.pink100,
  },
  blue: {
    backgroundColor: CustomColors.blue100,
  },
  black: {
    backgroundColor: CustomColors.dark100,
  },
  white: {
    backgroundColor: 'white',
  },
  disabledBlue: {
    backgroundColor: CustomColors.blue60,
  },
  outlined: {
    backgroundColor: 'white',
    borderColor: CustomColors.blue100,
    borderWidth: 1,
  },
});
export default styles;
