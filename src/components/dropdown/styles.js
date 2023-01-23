import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
      flex: 1,
      //backgroundColor: '#171717',
      //backgroundColor: COLORS.gray,
      //alignItems: 'center',
      //justifyContent: 'center',
      //paddingHorizontal: 15,
      //marginBottom: 15,
  },
  dropdown: {
    //borderBottomColor: COLORS.primary,
    //borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Karla-Regular',
    marginBottom: 10,
    //borderWidth: 2
  },
  placeholder: {
    fontFamily: 'Karla-Bold',
    fontSize: 12,
    color: COLORS.text,
  },
});
