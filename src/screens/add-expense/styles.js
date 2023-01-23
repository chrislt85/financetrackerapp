import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    /*container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },*/
    container: {
        flex: 1,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        //borderColor: COLORS.primary,
        //borderWidth: 1,
        //borderRadius: 10,
        //backgroundColor: COLORS.backgroundLight,
        //minHeight: 320,
        maxHeight: 400,
    },
    title: {
        fontFamily: 'Rubik-Bold',
        fontSize: 20,
        color: COLORS.text,
    },
    saveButton: {
        marginTop: 10,
    },
    categorias: {
        height: 50,
    }
});