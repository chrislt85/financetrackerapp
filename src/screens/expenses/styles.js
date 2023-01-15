import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
        paddingTop: 20
    },
    titleContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    title: {
        fontFamily: 'Rubik-Bold',
        fontSize: 18,
        color: COLORS.text,
    },
    categoriesContainer: {
        flex: 1,
    },
});