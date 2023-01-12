import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const UserDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                <Image
                    //source={{ uri: 'https://t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg' }} 
                    source={require('../../../assets/user.png')}
                    style={styles.profilePicture} 
                />
                <TouchableOpacity style={styles.takePhoto} onPress={() => null}>
                    <MaterialCommunityIcons 
                        name='camera'
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.settingContainer}>
                <Text style={styles.title}>Nombre de Usuario</Text>
                <Text style={styles.content}>Will Kim</Text>
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>Ubicación</Text>
                <Button title="Detectar ubicación" color={COLORS.primary} onPress={() => null} />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>Correo Electrónico</Text>
                <Text style={styles.content}>will@test.com.ar</Text>
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>Contraseña</Text>
                <Text style={styles.content}></Text>
            </View>

        </View>
    );
};

export default UserDetails;