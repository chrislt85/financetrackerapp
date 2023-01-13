import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
//import { ConfigButton } from '../../components';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.profilePicture}>
                <Ionicons 
                    name='person'
                    size={90}
                    color={COLORS.backgroundLight}
                />
            </View>
            <Text style={styles.profileName}>Will Kim</Text>
            
            <TouchableOpacity style={styles.configButton} onPress={() => navigation.navigate('UserDetails')}>
                <View style={styles.configButtonContainer}>
                        <Ionicons 
                            name='md-person-circle-outline'
                            size={40}
                            color={COLORS.primaryDark}
                        />
                    <Text style={styles.configButtonText}>Detalle de Usuario</Text>
                    <View style={styles.configButtonIconContainer}>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={40}
                        color={COLORS.text}
                    />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.configButton} onPress={() => navigation.navigate('UserSettings')}>
                <View style={styles.configButtonContainer}>
                        <MaterialIcons 
                            name='settings'
                            size={40}
                            color={COLORS.primaryDark}
                        />
                    <Text style={styles.configButtonText}>Configuraciones</Text>
                    <View style={styles.configButtonIconContainer}>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={40}
                        color={COLORS.text}
                    />
                    </View>
                </View>
            </TouchableOpacity>
                        
            <TouchableOpacity style={styles.logoutButton} onPress={() => null}>
                <Text style={styles.logoutButtonText}>Desloguear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;