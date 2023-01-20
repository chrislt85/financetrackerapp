import React from "react";
import { View, Text/*, Image, TouchableOpacity*/, Button } from 'react-native';
//import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileAvatar, SettingInput } from "../../components";
import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    
    const pictureUri = "https://media.revistagq.com/photos/62a0a996223a33e985e4d59a/master/pass/1072434_110615-cc-Darth-Vader-Thumb.jpg";
    
    const onHandlePictureDetail = () => {
        if (pictureUri)
            navigation.navigate('UserPicture', { pictureUri: pictureUri });
    };

    return (
        <View style={styles.container}>
            
            <ProfileAvatar pictureUri={pictureUri} isEditable={true} onHandlePictureDetail={onHandlePictureDetail} onHandleTakePicture={() => null} />

            <SettingInput title="Nombre de Usuario" content="Will Kim" />

            <View style={styles.settingContainer}>
                <Text style={styles.title}>Ubicación</Text>
                <Button title="Detectar ubicación" color={COLORS.primary} onPress={() => null} />
            </View>
            {
                // Aca puedo pasar el content como children (y pasar Text, Button o lo que sea)
            }
        </View>
    );
};

export default UserDetails;