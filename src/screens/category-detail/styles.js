import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
        paddingTop: 10,
    },
    expensesContainer: {
        flex: 1,
        width: '90%',
    },
    emptyList: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Karla-Regular',
        fontSize: 16,
        color: COLORS.black,
    }
});