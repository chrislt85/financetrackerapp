import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
      flex: 1,
      //backgroundColor: '#171717',
      //alignItems: 'center',
      //justifyContent: 'center',
      //paddingHorizontal: 15,
      //marginBottom: 15,
  },
  datetimeContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
    //borderWidth: 1,
    //borderColor: 'red'
  },
  datetimeSelected:{
    //backgroundColor: 'red',
    fontFamily: 'Karla-Bold',
    fontSize: 14, 
    //fontWeight: 'bold', 
    //marginBottom: 20
  },
  pickDate:{
    marginLeft: 10,
  }
});
