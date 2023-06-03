import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  searchTitle: {
    paddingVertical: 14.5,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    color: 'black',
  },
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
    margin: 0,
    paddingVertical: 0,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    //minWidth: 200,
  },
});
