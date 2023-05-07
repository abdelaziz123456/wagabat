import {StyleSheet} from 'react-native';
import CustomColors from '../../Utiles/constants';
const styles = StyleSheet.create({
  container: {
    minHeight: 68,
    minWidth: 183,
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
