import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { ProfileAvatar, SettingButton } from "../../components";
import { signOut } from '../../store/actions';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();

    const onHandlerSignOut = () => {
        dispatch(signOut());
    };

    return (
        <View style={styles.container}>
            <ProfileAvatar pictureUri={null} isEditable={false} onHandlePictureDetail={() => null} onHandleTakePicture={() => null} />

            <Text style={styles.profileName}>Will Kim</Text>
            
            <SettingButton title="Detalle de Usuario" icon="md-person-circle-outline" onSelect={() => navigation.navigate('UserDetails')} />
            <SettingButton title="Configuraciones" icon="settings-sharp" onSelect={() => navigation.navigate('UserSettings')} />
                        
            <TouchableOpacity style={styles.logoutButton} onPress={onHandlerSignOut}>
                <Text style={styles.logoutButtonText}>Desloguear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;