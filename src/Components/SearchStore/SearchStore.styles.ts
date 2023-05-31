import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  searchContainer: {
    paddingTop: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDE3',
    paddingVertical: 8,
    borderRadius: 4,
  },
  searchIcon: {
    marginLeft: 18,
    marginRight: 10,
    width: 20,
    height: 20,
  },
  searchInput: {
    padding: 0,
  },
});
