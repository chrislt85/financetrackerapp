import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const SettingButton = ({ title, icon, onSelect }) => {
    return (
        <TouchableOpacity style={styles.configButton} onPress={onSelect}>
            <View style={styles.configButtonContainer}>
                    <Ionicons 
                        name={icon}
                        size={40}
                        color={COLORS.primaryDark}
                    />
                <Text style={styles.configButtonText}>{title}</Text>
                <View style={styles.configButtonIconContainer}>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={40}
                        color={COLORS.text}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SettingButton;