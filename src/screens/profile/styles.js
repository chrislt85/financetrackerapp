import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    profilePicturePreview: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginVertical: 30,
        borderColor: COLORS.secondaryDark,
        borderWidth: 2,
        borderStyle: "dashed",// "dotted",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 80,
        //marginBottom: 20,
        marginVertical: 30,
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

    configButton: {
        width: '90%',
        paddingVertical: 5,
        //backgroundColor: COLORS.gray,
    },
    configButtonContainer: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
    },
    configButtonIconContainer: {
        marginLeft: 'auto',
    },
    configButtonText: {
        fontFamily: 'Karla-Regular',
        fontSize: 17,
        marginLeft: 15,
        //backgroundColor: 'red',
    },
});