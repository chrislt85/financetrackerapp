import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight ,
    },

    settingContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 7,
        marginTop: 7,
    },
    title: {
        fontFamily: 'Karla-Bold',
        fontSize: 17,
        //marginLeft: 15,
        color: COLORS.text,
    },
    content: {
        fontFamily: 'Karla-Regular',
        fontSize: 15,
        //color: COLORS.gray,
    },
});