import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight ,
    },
    content: {
        fontFamily: 'Karla-Regular',
        fontSize: 15,
        //color: COLORS.gray,
    },
    saveButton: {
        marginTop: 40,
    },
});