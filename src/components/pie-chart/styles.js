import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors'; 

export const styles = StyleSheet.create({
    container:{
        //flex: 1,
        width: 350,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
});