import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    settingContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 15,
        //paddingTop: 15,
        //paddingBottom: 5,
        marginTop: 10,
    },
    title: {
        fontFamily: 'Karla-Bold',
        fontSize: 17,
        //marginLeft: 15,
        color: COLORS.text,
    },
})