import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        //paddingVertical: 7,
        marginTop: 10,
    },
    title: {
        fontFamily: 'Karla-Bold',
        fontSize: 17,
        //marginLeft: 15,
        color: COLORS.text,
    },
    inputContainer:{
        marginVertical: 10,
    },
    content: {
        paddingTop:4,
        paddingBottom:2,
        width: 150,
        //height: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#968E85',
        //alignItems:'flex-end',
        textAlign: 'right',
        fontFamily: 'Karla-Regular',
        fontSize: 14,
        //color: COLORS.gray,
        //backgroundColor: COLORS.backgroundDark,
    },
});