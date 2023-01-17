import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginVertical: 30,
        //borderColor: COLORS.secondaryDark,
        //borderWidth: 2,
        //borderStyle: "dashed",// "dotted",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.gray,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    takePhoto: {
        position: 'absolute', 
        top: 105, 
        left: 105,
        width: 50,
        height: 50,
        borderRadius: 30,
        //borderColor: COLORS.gra,
        //borderWidth: 1,
        alignItems: 'center',//"flex-end",
        justifyContent: 'center',//"flex-end",
        backgroundColor: COLORS.secondary,
    },
})