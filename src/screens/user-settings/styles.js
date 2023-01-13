import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        paddingTop: 10,
    },
    containerScroll: {
        alignItems: 'center',
    },
});