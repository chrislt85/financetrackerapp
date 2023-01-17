import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    profileName: {
        fontFamily: 'Rubik-Bold',
        fontSize: 20,
        color: COLORS.text,
        marginBottom: 30,
    },
    logoutButton: {
        marginTop: 40,
        width: '90%',
        paddingVertical: 15,
        backgroundColor: COLORS.backgroundDark,
        borderRadius: 6,
        /*shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,*/
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    logoutButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.white,
        paddingHorizontal: 10,
    }, 
});