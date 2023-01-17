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
    infoContainer: {
        //fontFamily: 'Karla-Regular',
        //fontSize: 17,
        marginLeft: 15,
        //backgroundColor: 'red',
    },
    title: {
        fontFamily: 'Karla-Regular',
        fontSize: 17,
        color: COLORS.black,
    },
    date: {
        fontFamily: 'Karla-Light',
        fontSize: 14,
        color: COLORS.black,
    },
    amount: {
        //marginTop: 1,
        marginLeft: 'auto',
        fontFamily: 'Karla-Bold',
        fontSize: 20,
        color: COLORS.black,
    },
});