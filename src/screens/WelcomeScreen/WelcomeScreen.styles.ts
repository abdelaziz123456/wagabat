import {CustomColors} from '@Utiles/constants';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  image: {
    height: 350,
    resizeMode: 'stretch',
    width: 350,
    borderRadius: 20,
    marginTop: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'left',
    color: CustomColors.dark100,
    marginBottom: 13,
  },
  content: {
    lineHeight: 20,
    marginBottom: 30,
    minHeight: 80,
  },
});
