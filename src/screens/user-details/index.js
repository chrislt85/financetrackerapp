import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text/*, Image, TouchableOpacity*/, Button } from 'react-native';
//import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileAvatar, SettingInput } from "../../components";
import { saveProfile } from '../../store/actions';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.profile);

    const [profilePicture, setProfilePicture] = useState(null);
    const [profileName, setProfileName] = useState(null);
    
    useEffect(() => {
        setProfilePicture(profileInfo?.userPicture);
        setProfileName(profileInfo?.userName);
      }, []);

    const onHandlePictureDetail = () => {
        if (profilePicture)
            navigation.navigate('UserPicture', { pictureUri: profilePicture });
    };

    const onHandleSaveProfile = () => {
        dispatch(saveProfile({ userPicture: profilePicture, userName: profileName, userLocation: null }));
        navigation.navigate('Profile');
    }

    const onImageSelection = (uri) => {
        setProfilePicture(uri);
    };

    return (
        <View style={styles.container}>
            
            <ProfileAvatar pictureUri={profilePicture} isEditable={true} onHandlePictureDetail={onHandlePictureDetail} onImageSelection={onImageSelection} />

            <SettingInput title="Nombre de Usuario" content={profileName} />

            <View style={styles.settingContainer}>
                <Text style={styles.title}>Ubicación</Text>
                <Button title="Detectar ubicación" color={COLORS.primary} onPress={() => null} />
            </View>
            {
                // Aca puedo pasar el content como children (y pasar Text, Button o lo que sea)
            }
            
            <View style={styles.saveButton}>
                <Button title="Guardar" color={COLORS.primaryDark} onPress={onHandleSaveProfile} />
            </View>
        </View>
    );
};

export default UserDetails;