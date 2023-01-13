import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 7,
    },
    title: {
        fontFamily: 'Karla-Regular',
        fontSize: 17,
        color: COLORS.text,
    },
});