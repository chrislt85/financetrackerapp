import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container:{
        //flex: 1,
        height: 50,
        //justifyContent: 'center',
        alignItems: 'center',
        //borderColor: COLORS.gray,
        //borderWidth: 1,
        width: '90%',
        paddingVertical: 5,
        flexDirection: 'row',
        marginVertical: 3,
    },
    categoryButtonContainer: {
        marginLeft: 'auto',
    },
    categoryInfoContainer: {
        //fontFamily: 'Karla-Regular',
        //fontSize: 17,
        marginLeft: 15,
        //backgroundColor: 'red',
    },
    title: {
        fontFamily: 'Karla-Light',
        fontSize: 15,
        color: COLORS.gray,
    },
    amount: {
        //marginTop: 1,
        fontFamily: 'Karla-Regular',
        fontSize: 18,
        color: COLORS.black,
    },
});