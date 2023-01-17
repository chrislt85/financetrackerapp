import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const ProfileAvatar = ({ pictureUri, isEditable, onHandlePictureDetail, onHandleTakePicture }) => {
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