import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text/*, Image, TouchableOpacity*/, Button } from 'react-native';
//import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileAvatar, ProfileLocation, SettingInput } from "../../components";
import { loadProfile, saveProfile } from '../../store/actions';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.userId);
    const profileInfo = useSelector((state) => state.profile);
    const [profilePicture, setProfilePicture] = useState(null);
    const [profileName, setProfileName] = useState(null);
    const [profileLocation, setProfileLocation] = useState(null);
    
    useEffect(() => {
        //console.log('loadProfile', profileInfo);
        dispatch(loadProfile(userId));
    }, [dispatch]); 
    
    useEffect(() => {
        //console.log('profileInfo', profileInfo);
        setProfilePicture(profileInfo?.userPicture);
        setProfileName(profileInfo?.userName);
        setProfileLocation(profileInfo?.userLocation);
      }, []);

    const onHandlePictureDetail = () => {
        if (profilePicture)
            navigation.navigate('UserPicture', { pictureUri: profilePicture });
    };

    const onHandleSaveProfile = () => {
        dispatch(saveProfile(userId, { userPicture: profilePicture, userName: profileName, userLocation: profileLocation }));
        navigation.navigate('Profile');
    }

    const onImageSelection = (uri) => {
        setProfilePicture(uri);
    };

    const onLocationSelection = (location) => {
        setProfileLocation(location);
    };

    const onHandleChangeName = (name) => setProfileName(name);

    return (
        <View style={styles.container}>
            
            <ProfileAvatar pictureUri={profilePicture} isEditable={true} onHandlePictureDetail={onHandlePictureDetail} onImageSelection={onImageSelection} />

            <SettingInput title="Nombre de Usuario" content={profileName} onHandleChange={onHandleChangeName} />

            <ProfileLocation profileLocation={profileLocation} onLocationSelection={onLocationSelection} />            
            
            <View style={styles.saveButton}>
                <Button title="Guardar" color={COLORS.primaryDark} onPress={onHandleSaveProfile} />
            </View>
        </View>
    );
};

export default UserDetails;