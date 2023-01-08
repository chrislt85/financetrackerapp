import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { COLORS } from "../../constants/themes/colors";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
//import { ConfigButton } from '../../components';

import { styles } from "./styles";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/*<Ionicons 
                name='md-person-circle-outline'
                size={250}
                color={COLORS.primaryDark}
            />*/}
            <Image
                //source={{ uri: 'https://t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg' }} 
                source={require('../../../assets/user.png')}
                style={styles.profilePicture} 
            /> 
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