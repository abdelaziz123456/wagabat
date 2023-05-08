import {StyleSheet} from 'react-native';
import CustomColors from '../../Utiles/constants';
const styles = StyleSheet.create({
  container: {
    minHeight: 43,
    minWidth: 151,
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
});
export default styles;
