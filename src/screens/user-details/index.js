import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
            
                <TouchableOpacity style={styles.takePhoto} onPress={() => null}>
                    <MaterialCommunityIcons 
                        name='camera'
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
            </TouchableOpacity>

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