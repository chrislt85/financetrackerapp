import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text/*, Image, TouchableOpacity*/, Button } from 'react-native';
//import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileAvatar, ProfileLocation, SettingInput } from "../../components";
import { saveProfile } from '../../store/actions';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.profile);

    const [profilePicture, setProfilePicture] = useState(null);
    const [profileName, setProfileName] = useState(null);
    const [profileLocation, setProfileLocation] = useState(null);
    
    useEffect(() => {
        setProfilePicture(profileInfo?.userPicture);
        setProfileName(profileInfo?.userName);
        setProfileLocation(profileInfo?.userLocation);
      }, []);

    const onHandlePictureDetail = () => {
        if (profilePicture)
            navigation.navigate('UserPicture', { pictureUri: profilePicture });
    };

    const onHandleSaveProfile = () => {
        dispatch(saveProfile({ userPicture: profilePicture, userName: profileName, userLocation: profileLocation }));
        navigation.navigate('Profile');
    }

    const onImageSelection = (uri) => {
        setProfilePicture(uri);
    };

    const onLocationSelection = (location) => {
        setProfileLocation(location);
    };

    return (
        <View style={styles.container}>
            
            <ProfileAvatar pictureUri={profilePicture} isEditable={true} onHandlePictureDetail={onHandlePictureDetail} onImageSelection={onImageSelection} />

            <SettingInput title="Nombre de Usuario" content={profileName} />

            <ProfileLocation profileLocation={profileLocation} onLocationSelection={onLocationSelection} />            
            
            <View style={styles.saveButton}>
                <Button title="Guardar" color={COLORS.primaryDark} onPress={onHandleSaveProfile} />
            </View>
        </View>
    );
};

export default UserDetails;