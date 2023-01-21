import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const ProfileAvatar = ({ pictureUri, isEditable, onHandlePictureDetail, onImageSelection }) => {
    
    const onHandleTakePicture = async () => {
        const hasCameraPermissions = await verifyPermissions();
        if (!hasCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        });

        onImageSelection(image.uri);// esto es para que la vista "se entere" de la URL de la imagen seleccionada
    };

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted"){
            Alert.alert("Permisos insuficientes", "Debe dar permisos para utilizar la cámara", [{ text: "Ok" }]);

            return false;
        }

        return true;
    };

    return (
        <TouchableOpacity activeOpacity={pictureUri ? 0.85 : 1} style={styles.profilePicture} onPress={onHandlePictureDetail}>
            {
                pictureUri ? 
                    <Image style={styles.image} source={{ uri: pictureUri }} />
               :
                    <Ionicons 
                        name='person'
                        size={90}
                        color={COLORS.backgroundLight}
               />
            }
            {
                isEditable ?
                    <TouchableOpacity style={styles.takePhoto} onPress={onHandleTakePicture}>
                        <MaterialCommunityIcons 
                            name='camera'
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                : 
                    null
            }
        </TouchableOpacity>
    );
}

export default ProfileAvatar;