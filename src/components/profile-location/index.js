import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Location from "expo-location";

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const ProfileLocation = ({ profileLocation, onLocationSelection }) => {


    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permisos insuficientes", "Necesitas dar permisos para acceder a la ubicacion", [
            { text: "Ok" },
          ]);
          return false;
        }
        return true;
    };

    const onHandleGetLocation = async () => {
        const isLocationPermission = await verifyPermissions();
        if (!isLocationPermission) return;
    
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
        
        const { latitude, longitude } = location.coords;

        const place = await Location.reverseGeocodeAsync({
            latitude : latitude,
            longitude : longitude
        });

        let foundLocation = '';
        place.find( p => {
            foundLocation = `${p?.city}, ${p?.country}`;
        });
    
        onLocationSelection(foundLocation);
      };
    
    return (
        <View style={styles.settingContainer}>
            <Text style={styles.title}>Ubicación</Text>
            {
                profileLocation ? 
                    <Text style={styles.location}>{profileLocation}</Text>
                :
                    <Button title="Detectar ubicación" color={COLORS.primary} onPress={onHandleGetLocation} />
            }
        </View>
    );
}

export default ProfileLocation;